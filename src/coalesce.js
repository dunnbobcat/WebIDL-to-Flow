// @flow

import type {IDLProduction, IDLTree} from 'webidl2';

import group from './group.js';
import partition from './partition.js';
import pull from './pull.js';

// type Groups = {
//   'interface mixin': IDLTree,
//   interface: IDLTree,
//   namespace: IDLTree,
//   dictionary: IDLTree,
//   callback: IDLTree,
//   'callback interface': IDLTree,
//   enum: IDLTree,
//   includes: IDLTree,
//   typedef: IDLTree,
// };

// export async function mergePartialSpecsidl: IDLTree): Promise<IDLTree> {
//   const groups = group(idl, (production) => production.type);

//   // Merge interface mixins
//   const allInterfaceMixins = groups['interface mixin'] ?? [];
//   const [partialInterfaceMixins, wholeInterfaceMixins] = partition(
//     allInterfaceMixins,
//     (mixin) => mixin.partial,
//   );

//   const interfaceMixins = wholeInterfaceMixins;
//   const interfaceMixinsByName = pull(wholeInterfaceMixins, (int) => int.name);
//   for (const partialInterfaceMixin of partialInterfaceMixins) {
//     const {members, name} = partialInterfaceMixin;
//     const wholeInterfaceMixin = interfaceMixinsByName[name];
//     if (wholeInterfaceMixin == null) {
//       process.stderr.write(
//         `No root found for partial interface mixin ${name}\n`,
//       );
//       interfaceMixins.push(partialInterfaceMixin);
//       continue;
//     }

//     wholeInterfaceMixin.members = [...wholeInterfaceMixin.members, ...members];
//   }

//   // Merge interfaces
//   const allInterfaces = groups['interface'] ?? [];
//   const [partialInterfaces, wholeInterfaces] = partition(
//     allInterfaces,
//     (int) => int.partial,
//   );

//   const interfaces = wholeInterfaces;
//   const interfacesByName = pull(wholeInterfaces, (int) => int.name);
//   for (const partialInterface of partialInterfaces) {
//     const {members, name} = partialInterface;
//     const wholeInterface = interfacesByName[name];
//     if (wholeInterface == null) {
//       process.stderr.write(`No root found for partial interface ${name}\n`);
//       interfaces.push(partialInterface);
//       continue;
//     }

//     wholeInterface.members = [...wholeInterface.members, ...members];
//   }

//   // Merge namespaces
//   const allNamespaces = groups['namespace'] ?? [];
//   const [partialNamespaces, wholeNamespaces] = partition(
//     allNamespaces,
//     (namespace) => namespace.partial,
//   );

//   const namespaces = wholeNamespaces;
//   const namespacesByName = pull(wholeNamespaces, (int) => int.name);
//   for (const partialNamespace of partialNamespaces) {
//     const {members, name} = partialNamespace;
//     const wholeNamespace = namespacesByName[name];
//     if (wholeNamespace == null) {
//       process.stderr.write(`No root found for partial Namespace ${name}\n`);
//       namespaces.push(partialNamespace);
//       continue;
//     }

//     wholeNamespace.members = [...wholeNamespace.members, ...members];
//   }

//   // Merge dictionaries
//   const allDictionaries = groups['dictionary'] ?? [];
//   const [partialDictionaries, wholeDictionaries] = partition(
//     allDictionaries,
//     (dict) => dict.partial,
//   );

//   const dictionaries = wholeDictionaries;
//   const dictionariesByName = pull(wholeDictionaries, (dict) => dict.name);
//   for (const partialDictionary of partialDictionaries) {
//     const {members, name} = partialDictionary;
//     const wholeDictionary = dictionariesByName[name];
//     if (wholeDictionary == null) {
//       process.stderr.write(`No root found for partial dictionary ${name}\n`);
//       dictionaries.push(partialDictionary);
//       continue;
//     }

//     wholeDictionary.members = [...wholeDictionary.members, ...members];
//   }

//   // Flatten dictionaries
//   for (const wholeDictionary of wholeDictionaries) {
//     const {inheritance, name} = wholeDictionary;
//     if (inheritance == null) {
//       continue;
//     }

//     const root = dictionariesByName[inheritance];
//     if (root == null) {
//       process.stderr.write(
//         `No base ${inheritance} found for child dictionary ${name}\n`,
//       );
//       continue;
//     }

//     wholeDictionary.spreads = [inheritance];
//   }

//   return [
//     ...interfaceMixins,
//     ...interfaces,
//     ...dictionaries,
//     ...namespaces,
//     ...(groups['callback'] ?? []),
//     ...(groups['callback interface'] ?? []),
//     ...(groups['enum'] ?? []),
//     ...(groups['includes'] ?? []),
//     ...(groups['typedef'] ?? []),
//   ];
// }

export async function mergePartialSpecs(idls: {
  [string]: IDLTree,
}): Promise<{[string]: IDLTree}> {
  const LOOKUP = {};
  for (const name in idls) {
    for (const production of idls[name]) {
      const {partial, name} = production;
      if (partial || name == null) {
        continue;
      }

      LOOKUP[name] = production;
    }
  }

  // Merge partials
  const processedIDLs = ({}: {[string]: IDLTree});
  // const orphanedPartialsByName = ({}: {[string]: IDLProduction});
  for (const name in idls) {
    // const orphanedPartials = [];
    const processedIDL = [];
    for (const production of idls[name]) {
      const {partial, name} = production;
      if (!partial || name == null) {
        processedIDL.push(production);
        continue;
      }

      const root = LOOKUP[name];
      if (root == null) {
        process.stderr.write(`No root found for production ${name}`);
        processedIDL.push(production);
        continue;
      }

      root.members = [...root.members, ...production.members];
    }

    processedIDLs[name] = processedIDL;
    // orphanedPartialsByName[name] = orphanedPartials;
  }

  //
  // for (const name in processedIDLs) {
  //   const idl = processedIDLs[name];
  //   const processedIDL = [];
  //   for (const production of idl) {
  //     // const {partial, name, type} = production;
  //     // const {members, name} = production;
  //     //       const [consts, nonConsts] = partition(
  //     //         members,
  //     //         (member) => member.type === 'const',
  //     //       );
  //     //       if (consts.length > 0) {
  //     //         mixinConsts[name] = consts;
  //     //         production.members = nonConsts;
  //   }
  // }

  for (const name in processedIDLs) {
    const idl = processedIDLs[name];
    const processedIDL = [];
    for (const production of idl) {
      const {partial, name, type} = production;

      if (type === 'dictionary') {
        const {inheritance, name} = production;
        if (inheritance == null) {
          processedIDL.push(production);
          continue;
        }

        const root = LOOKUP[inheritance];
        if (root == null) {
          process.stderr.write(
            `No base ${inheritance} found for child dictionary ${name}\n`,
          );
          processedIDL.push(production);
          continue;
        }

        production.spreads = [inheritance];
        processedIDL.push(production);
      } else if (type === 'includes') {
        const {target, includes} = production;
        const root = LOOKUP[target];
        if (root == null) {
          process.stderr.write(
            `No target ${target} found for mixin ${includes}\n`,
          );
          processedIDL.push(production);
          continue;
        }

        if (root.mixins == null) {
          root.mixins = [];
        }

        if (root.mixinConsts == null) {
          root.mixinConsts = [];
        }

        root.mixins.push(includes);
        const mixin = LOOKUP[includes];

        if (mixin == null) {
          process.stderr.write(`No mixin found for ${includes}\n`);
          processedIDL.push(production);
          continue;
        }

        root.mixins.push(includes);

        const {members, name} = mixin;
        const [consts, nonConsts] = partition(
          members,
          (member) => member.type === 'const',
        );

        if (consts.length > 0) {
          root.mixinConsts = root.mixinConsts.concat(consts);
        }
      } else {
        processedIDL.push(production);
      }
    }

    processedIDLs[name] = processedIDL;
  }

  return processedIDLs;
}
