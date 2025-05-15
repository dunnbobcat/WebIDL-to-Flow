// @flow

import type {IDLProduction, IDLTree} from 'webidl2';

import group from './group.js';
import partition from './partition.js';
import pull from './pull.js';

type Groups = {
  'interface mixin': IDLTree,
  interface: IDLTree,
  namespace: IDLTree,
  dictionary: IDLTree,
  callback: IDLTree,
  'callback interface': IDLTree,
  enum: IDLTree,
  includes: IDLTree,
  typedef: IDLTree,
};

export async function mergePartialSpecs(idl: IDLTree): Promise<IDLTree> {
  const groups = group(idl, (production) => production.type);

  // Merge interface mixins
  const allInterfaceMixins = groups['interface mixin'] ?? [];
  const [partialInterfaceMixins, wholeInterfaceMixins] = partition(
    allInterfaceMixins,
    (mixin) => mixin.partial,
  );

  const interfaceMixins = wholeInterfaceMixins;
  const interfaceMixinsByName = pull(wholeInterfaceMixins, (int) => int.name);
  for (const partialInterfaceMixin of partialInterfaceMixins) {
    const {members, name} = partialInterfaceMixin;
    const wholeInterfaceMixin = interfaceMixinsByName[name];
    if (wholeInterfaceMixin == null) {
      process.stderr.write(
        `No root found for partial interface mixin ${name}\n`,
      );
      interfaceMixins.push(partialInterfaceMixin);
      continue;
    }

    wholeInterfaceMixin.members = [...wholeInterfaceMixin.members, ...members];
  }

  // Merge interfaces
  const allInterfaces = groups['interface'] ?? [];
  const [partialInterfaces, wholeInterfaces] = partition(
    allInterfaces,
    (int) => int.partial,
  );

  const interfaces = wholeInterfaces;
  const interfacesByName = pull(wholeInterfaces, (int) => int.name);
  for (const partialInterface of partialInterfaces) {
    const {members, name} = partialInterface;
    const wholeInterface = interfacesByName[name];
    if (wholeInterface == null) {
      process.stderr.write(`No root found for partial interface ${name}\n`);
      interfaces.push(partialInterface);
      continue;
    }

    wholeInterface.members = [...wholeInterface.members, ...members];
  }

  // Merge namespaces
  const allNamespaces = groups['namespace'] ?? [];
  const [partialNamespaces, wholeNamespaces] = partition(
    allNamespaces,
    (namespace) => namespace.partial,
  );

  const namespaces = wholeNamespaces;
  const namespacesByName = pull(wholeNamespaces, (int) => int.name);
  for (const partialNamespace of partialNamespaces) {
    const {members, name} = partialNamespace;
    const wholeNamespace = namespacesByName[name];
    if (wholeNamespace == null) {
      process.stderr.write(`No root found for partial Namespace ${name}\n`);
      namespaces.push(partialNamespace);
      continue;
    }

    wholeNamespace.members = [...wholeNamespace.members, ...members];
  }

  // Merge dictionaries
  const allDictionaries = groups['dictionary'] ?? [];
  const [partialDictionaries, wholeDictionaries] = partition(
    allDictionaries,
    (dict) => dict.partial,
  );

  const dictionaries = wholeDictionaries;
  const dictionariesByName = pull(wholeDictionaries, (dict) => dict.name);
  for (const partialDictionary of partialDictionaries) {
    const {members, name} = partialDictionary;
    const wholeDictionary = dictionariesByName[name];
    if (wholeDictionary == null) {
      process.stderr.write(`No root found for partial dictionary ${name}\n`);
      dictionaries.push(partialDictionary);
      continue;
    }

    wholeDictionary.members = [...wholeDictionary.members, ...members];
  }

  // Flatten dictionaries
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

  return [
    ...interfaceMixins,
    ...interfaces,
    ...dictionaries,
    ...namespaces,
    ...(groups['callback'] ?? []),
    ...(groups['callback interface'] ?? []),
    ...(groups['enum'] ?? []),
    ...(groups['includes'] ?? []),
    ...(groups['typedef'] ?? []),
  ];
}

export async function mergePartialSpecsMulti(idls: {
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

  const processedIDLs = ({}: {[string]: IDLTree});
  for (const name in idls) {
    const idl = idls[name];
    const processedIDL = [];
    for (const production of idl) {
      const {partial, name} = production;

      if (!partial) {
        processedIDL.push(production);
        continue;
      }

      const root = LOOKUP[name];
      if (root == null) {
        process.stderr.write(`No root found for production ${name}`);
        continue;
      }
    }

    processedIDLs[name] = processedIDL;
  }

  return processedIDLs;
}
