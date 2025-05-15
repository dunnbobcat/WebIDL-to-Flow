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
      process.stderr.write(
        `No root interface found for partial interface: ${name}\n`,
      );
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
      process.stderr.write(
        `No root dictionary found for partial dictionary: ${name}\n`,
      );
      continue;
    }

    wholeDictionary.members = [...wholeDictionary.members, ...members];
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
    ...(groups['callback'] ?? []),
    ...(groups['callback interface'] ?? []),
    ...(groups['enum'] ?? []),
    ...(groups['includes'] ?? []),
    ...(groups['interface mixin'] ?? []),
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
