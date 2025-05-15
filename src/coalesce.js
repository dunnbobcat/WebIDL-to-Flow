// @flow

import type {IDLTree} from 'webidl2';

import group from './group.js';

function mergePartialInterfaces(idl: IDLTree): any {}

function mergeMixins(idl: IDLTree): any {}

// function mergePartialInterfaces(idl: IDLTree): any {

// }

export async function coalesceIDLs(
  idls: $ReadOnlyArray<IDLTree>,
): Promise<IDLTree> {
  const idl = idls.flat(1);

  const grouped = group(idl, (production) => production.type);
  debugger;
  // merge partial interface mixins

  // merge partial interfaces

  // expand extended dictionaries

  return idl;
}
