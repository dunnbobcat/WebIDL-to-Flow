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
  const interfaces = groups['interface'];
  const [partialInterfaces, wholeInterfaces] = partition(
    interfaces,
    (int) => int.partial,
  );

  const byName = pull(wholeInterfaces, (int) => int.name);
  for (const partialInterface of partialInterfaces) {
    const {members, name} = partialInterface;
    const wholeInterface = byName[name];
    if (wholeInterface == null) {
      process.stderr.write(
        `No root interface found for partial interface: ${name}`,
      );
      continue;
    }

    wholeInterface.members = [...wholeInterface.members, ...members];
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
    ...groups['callback'],
    ...groups['callback interface'],
    ...groups['dictionary'],
    ...groups['enum'],
    ...groups['includes'],
    ...groups['interface mixin'],
    ...groups['namespace'],
    ...groups['typedef'],
  ];

  // return idl;
  // return [
  //   ...groups['interface'],
  //   ...groups['interface'],
  //   ...groups['interface'],
  //   ...groups['interface'],
  // ];
}
