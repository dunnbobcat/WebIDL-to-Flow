// @flow

import type {IDLTree, IDLProduction} from 'webidl2';

import fs from 'fs';
import path from 'path';
import readline from 'readline';
import * as webidl2 from 'webidl2';
import {convertIDLToLibrary} from './converter.js';
import {coalesceIDLs} from './coalesce.js';
import {dirname} from 'path';
import {fileURLToPath} from 'url';

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

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
  });

  for await (const file of rl) {
    try {
      process.stdout.write(`Converting IDL file: ${file}...\n`);
      const idl = await parseIDLFile(file);
      const lib = await convertIDLToLibrary(idl);
      const name = path.basename(file, '.idl');
      await fs.promises.writeFile(`${dir}/${name}.js`, lib);
    } catch (e) {
      process.stderr.write(
        `Failed to parse ${file}:\n${e.message}\n\n${e.stack}\n`,
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

  const idls = [];
  for (const input of inputs) {
    const file = `${idlDir}/${input}.idl`;

    try {
      process.stdout.write(`Reading IDL file: ${file}...\n`);
      const idl = await parseIDLFile(file);
      idls.push(idl);
    } catch (e) {
      process.stderr.write(
        `Failed to parse ${file}:\n${e.message}\n\n${e.stack}\n`,
      );
      continue;
    }
  }

  const combinedIDL = await coalesceIDLs(idls);
  const lib = await convertIDLToLibrary(combinedIDL, true);
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
      return await generateSingleFlowDefinition(
        [
          'CSSOM',
          'CSSViewTransitions',
          'DOM',
          'Encoding',
          'Fetch',
          'FileAPI',
          'FilterEffects',
          'Fullscreen',
          'Geometry',
          'HighResolutionTime',
          'HTML',
          'MathMLCore',
          'MediaCaptureAndStreams',
          'MediaSource',
          'Notifications',
          'ReferrerPolicy',
          'Streams',
          'SVG',
          'SVGAnimation',
          'TrustedTypes',
          'URL',
          'URLPattern',
          'Vibration',
          'WebCodecs',
          'WebGL',
          'WebGL2',
          'WebGPU',
          'WebIDL',
          'XHR',
        ],
        'web',
      );

    case 'prettify':
      return await prettifyIDLs();

    default:
      process.stderr.write(`Unexpected command: "${cmd}"`);
      return;
  }
}

main();
