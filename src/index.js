// @flow

import type {IDLTree, IDLProduction} from 'webidl2';

import fs from 'fs';
import path from 'path';
import readline from 'readline';
import * as webidl2 from 'webidl2';
import {convertIDLToLibrary} from './converter.js';
import {mergePartialSpecs} from './coalesce.js';
import {dirname} from 'path';
import {fileURLToPath} from 'url';
import idl from '@webref/idl';
import pull from './pull.js';
import {WEB_SPECS} from './envs.js';
import partition from './partition.js';

const __dirname = dirname(
  // $FlowExpectedError
  fileURLToPath(import.meta.url),
);

async function parseIDLFile(file: string): Promise<IDLTree> {
  const contents = await fs.promises.readFile(file, 'utf-8');
  const idl = webidl2.parse(contents);
  return idl;
}

async function createOutputDirectory(outputDir: ?string): Promise<string> {
  if (outputDir == null || outputDir.length === 0) {
    throw new Error('No output directory specified');
  }

  const dir = outputDir.replace(/\/+$/, '');
  if (dir.length === 0) {
    throw new Error('No output directory specified');
  }

  if (!fs.existsSync(dir)) {
    try {
      await fs.promises.mkdir(dir);
    } catch (e) {
      throw new Error(
        `Failed to create output directory ${dir}:\n${e.message}\n\n${e.stack}\n`,
      );
    }
  }

  return dir;
}

async function generateFlowDefinitions(outputDir: ?string): Promise<void> {
  const dir = await createOutputDirectory(outputDir);

  const parsedFiles = await idl.parseAll();
  for (const [shortname, ast] of Object.entries(parsedFiles)) {
    try {
      process.stdout.write(`Converting IDL file: ${shortname}...\n`);
      const mergedIDLs = await mergePartialSpecs({[shortname]: ast});
      const idl = mergedIDLs[shortname];
      const lib = await convertIDLToLibrary(idl);
      const name = path.basename(shortname, '.idl');
      await fs.promises.writeFile(`${dir}/${name}.js`, lib);
    } catch (e) {
      process.stderr.write(
        `Failed to parse ${shortname}:\n${e.message}\n\n${e.stack}\n`,
      );
      continue;
    }
  }
}

async function generateSingleFlowDefinition(
  inputs: $ReadOnlyArray<string>,
  outputFile: string,
): Promise<void> {
  const thisDir = __dirname.split('/');
  thisDir.pop();

  const idlDir = [...thisDir, 'idl'].join('/');
  const outputDir = [...thisDir, 'coalesced'].join('/');
  const dir = await createOutputDirectory(outputDir);

  const parsedFiles = await idl.parseAll();
  let idls = ({}: {[string]: IDLTree});

  for (const input of inputs) {
    const idl = parsedFiles[input];
    if (idl == null) {
      process.stderr.write(`Failed to find IDL for ${input}\n`);
      continue;
    }

    process.stdout.write(`Adding IDL file: ${input}...\n`);
    idls[input] = idl;
  }

  const mergedIDLs = await mergePartialSpecs(idls);
  let lib = '// @flow\n\n';
  for (const name in mergedIDLs) {
    const idl = mergedIDLs[name];
    let [partials] = partition(idls[name], (production) => production.partial);
    partials = partials.map((partial) => partial.name);

    lib += `/*---------- ${name} ----------*/\n\n`;
    if (partials.length > 0) {
      lib += '// Contributes to:\n';
      for (const partial of new Set(partials)) {
        lib += `//   - ${partial.name}\n`;
      }
      lib += '\n';
    }
    lib += await convertIDLToLibrary(idl);
    lib += '\n';
  }

  const name = path.basename(outputFile, '.js');
  await fs.promises.writeFile(`${dir}/${name}.js`, lib);
}

async function prettifyIDLs(): Promise<void> {
  const files = await fs.promises.readdir('idl');
  for (let file of files) {
    try {
      process.stderr.write(`Prettifying IDL: ${file}\n`);
      file = `idl/${file}`;
      const idl = await parseIDLFile(file);
      await fs.promises.writeFile(file, webidl2.write(idl) + '\n');
    } catch (e) {
      process.stderr.write(
        `Failed to prettify ${file}:\n${e.message}\n\n${e.stack}\n`,
      );
      continue;
    }
  }
}

async function main(): Promise<void> {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    process.stderr.write(
      'Usage: <files> | node index.js generate <output directory>\n' +
        'Usage: node index.js prettify\n',
    );
    return;
  }

  const cmd = args[0];
  switch (cmd) {
    case 'generate':
      return await generateFlowDefinitions(args[1]);

    case 'web':
      return await generateSingleFlowDefinition(WEB_SPECS, 'web');

    case 'prettify':
      return await prettifyIDLs();

    default:
      process.stderr.write(`Unexpected command: "${cmd}"`);
      return;
  }
}

main();
