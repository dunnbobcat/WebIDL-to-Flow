// @flow

import type {IDLProduction} from 'webidl2';

const PRODUCTION_ORDER = ([
  'typedef',
  'enum',
  'dictionary',
  'interface mixin',
  'callback interface',
  'interface',
  'const',
  'attribute',
  'constructor',
  'iterable',
  'operation',
  'callback',
]: $ReadOnlyArray<string>);

function getPrecedence(type: string): number {
  let precedence = PRODUCTION_ORDER.indexOf(type);
  if (precedence > -1) {
    return precedence;
  }

  return PRODUCTION_ORDER.length;
}

export function compareTypes(aType: string, bType: string): number {
  return getPrecedence(aType) - getPrecedence(bType);
}

export function compareProductions(a: IDLProduction, b: IDLProduction): number {
  const typeCompare = compareTypes(a.type, b.type);
  if (typeCompare !== 0) {
    return typeCompare;
  }

  if (
    a.type === 'operation' &&
    b.type === 'operation' &&
    a.special !== b.special
  ) {
    return a.special === 'static' ? -1 : b.special === 'static' ? 1 : 0;
  }

  if (a.name != null && b.name != null) {
    return a.name.localeCompare(b.name);
  }

  return 0;
}
