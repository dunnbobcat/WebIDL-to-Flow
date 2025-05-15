// @flow

import type {IDLTree} from 'webidl2';

import group from './group.js';
import partition from './partition.js';
import pull from './pull.js';

export async function coalesceIDLs(
  idls: $ReadOnlyArray<IDLTree>,
): Promise<IDLTree> {
  const idl = idls.flat(1);
  debugger;

  const groups = group(idl, (production) => production.type);

  // Merge interface mixins
  const interfaceMixins = groups['interface mixin'] ?? [];
  const [partialInterfaceMixins, wholeInterfaceMixins] = partition(
    interfaceMixins,
    (mixin) => mixin.partial,
  );

  const interfaceMixinsByName = pull(wholeInterfaceMixins, (int) => int.name);
  for (const partialInterfaceMixin of partialInterfaceMixins) {
    const {members, name} = partialInterfaceMixin;
    const wholeInterfaceMixin = interfaceMixinsByName[name];
    if (wholeInterfaceMixin == null) {
      process.stderr.write(
        `No root found for partial interface mixin ${name}\n`,
      );
      continue;
    }

    wholeInterfaceMixin.members = [...wholeInterfaceMixin.members, ...members];
  }

  // Merge interfaces
  const interfaces = groups['interface'] ?? [];
  const [partialInterfaces, wholeInterfaces] = partition(
    interfaces,
    (int) => int.partial,
  );

  const interfacesByName = pull(wholeInterfaces, (int) => int.name);
  for (const partialInterface of partialInterfaces) {
    const {members, name} = partialInterface;
    const wholeInterface = interfacesByName[name];
    if (wholeInterface == null) {
      process.stderr.write(`No root found for partial interface ${name}\n`);
      continue;
    }

    wholeInterface.members = [...wholeInterface.members, ...members];
  }

  // Merge dictionaries
  const dictionaries = groups['dictionary'] ?? [];
  const [partialDictionaries, wholeDictionaries] = partition(
    dictionaries,
    (dict) => dict.partial,
  );

  const dictionariesByName = pull(wholeDictionaries, (dict) => dict.name);
  for (const partialDictionary of partialDictionaries) {
    const {members, name} = partialDictionary;
    const wholeDictionary = dictionariesByName[name];
    if (wholeDictionary == null) {
      process.stderr.write(`No root found for partial dictionary ${name}\n`);
      continue;
    }

    wholeDictionary.members = [...wholeDictionary.members, ...members];
  }

  for (const wholeDictionary of wholeDictionaries) {
    const {inheritance, name} = wholeDictionary;
    if (inheritance == null) {
      continue;
    }

    const root = dictionariesByName[inheritance];
    if (root == null) {
      process.stderr.write(
        `No base ${inheritance} found for child dictionary ${name}\n`,
      );
      continue;
    }

    wholeDictionary.members = [...wholeDictionary.members, ...root.members];
  }

  // const

  // for (const type in groups) {
  //   const currGroup = groups[type];
  //   const [partial, whole] = partition(currGroup, (member) => member.partial);
  //   console.log({type, partial, whole});
  // }
  // merge partial interface mixins

  // merge partial interfaces

  // expand extended dictionaries

  return [
    ...wholeInterfaces,
    ...wholeDictionaries,
    ...wholeInterfaceMixins,
    ...(groups['callback'] ?? []),
    ...(groups['callback interface'] ?? []),
    ...(groups['enum'] ?? []),
    ...(groups['includes'] ?? []),
    ...(groups['namespace'] ?? []),
    ...(groups['typedef'] ?? []),
  ];

  // return idl;
  // return [
  //   ...groups['interface'],
  //   ...groups['interface'],
  //   ...groups['interface'],
  //   ...groups['interface'],
  // ];
}
