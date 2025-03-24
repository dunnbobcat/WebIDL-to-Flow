import fs from 'fs';
import path from 'path';
import readline from 'readline';
import * as webidl2 from 'webidl2';
import { convertIDLToLibrary } from './converter.js';
async function parseIDLFile(file) {
  const contents = await fs.promises.readFile(file, 'utf-8');
  const idl = webidl2.parse(contents);
  return idl;
}
async function generateFlowDefinitions(output) {
  if (output == null || output.length === 0) {
    process.stderr.write('No output directory specified');
    return;
  }
  const outputDir = output.replace(/\/+$/, '');
  if (outputDir.length === 0) {
    process.stderr.write('No output directory specified');
    return;
  }
  if (!fs.existsSync(outputDir)) {
    try {
      await fs.promises.mkdir(outputDir);
    } catch (e) {
      process.stderr.write(`Failed to create output directory ${outputDir}:\n${e.message}\n\n${e.stack}\n`);
      return;
    }
  }
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });
  for await (const file of rl) {
    try {
      process.stdout.write(`Converting IDL file: ${file}...\n`);
      const idl = await parseIDLFile(file);
      const lib = await convertIDLToLibrary(idl);
      const name = path.basename(file, '.idl');
      await fs.promises.writeFile(`${outputDir}/${name}.js`, lib);
    } catch (e) {
      process.stderr.write(`Failed to parse ${file}:\n${e.message}\n\n${e.stack}\n`);
      continue;
    }
  }
}
async function prettifyIDLs() {
  const files = await fs.promises.readdir('idl');
  for (let file of files) {
    try {
      process.stderr.write(`Prettifying IDL: ${file}\n`);
      file = `idl/${file}`;
      const idl = await parseIDLFile(file);
      await fs.promises.writeFile(file, webidl2.write(idl) + '\n');
    } catch (e) {
      process.stderr.write(`Failed to prettify ${file}:\n${e.message}\n\n${e.stack}\n`);
      continue;
    }
  }
}
async function main() {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    process.stderr.write('Usage: <files> | node index.js generate <output directory>\n' + 'Usage: node index.js prettify\n');
    return;
  }
  const cmd = args[0];
  switch (cmd) {
    case 'generate':
      return await generateFlowDefinitions(args[1]);
    case 'prettify':
      return await prettifyIDLs();
  }
}
main();