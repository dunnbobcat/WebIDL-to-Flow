// @flow

import type {IDLProduction} from 'webidl2';
import {write} from 'webidl2';

export function err(message: string): void {
  process.stderr.write(`${message}\n`);
}

export function productionError(
  message: string,
  production: IDLProduction,
): string {
  err(message);
  return `/*\n${dumpProduction(production)}\n*/`;
}

export function dumpProduction(production: IDLProduction): string {
  return write(production);
}
