// @flow

import type {IDLTree, IDLProduction} from 'webidl2';
import group from './group.js';
import partition from './partition.js';
import {compareProductions, compareTypes} from './sorting.js';
import {read} from 'fs';

const KEYWORD_REPLACEMENTS = ({
  interface: 'interface_',
  default: 'default_',
  constructor: 'constructor_',
}: {[string]: string});

const TYPE_MAP = ({
  CSSOMString: 'string',
  DOMHighResTimeStamp: 'number',
  DOMString: 'string',
  'long long': 'number',
  long: 'number',
  short: 'number',
  undefined: 'void',
  'unrestricted double': 'number',
  'unsigned long long': 'number',
  'unsigned long': 'number',
  'unsigned short': 'number',
  USVString: 'string',
}: {[string]: string});

function maybeReplaceKeyword(name: string): string {
  const replacement = KEYWORD_REPLACEMENTS[name];
  if (replacement != null) {
    return replacement;
  }

  return name;
}

function convertEnum(production: IDLProduction): string {
  const {name, values} = production;
  const stringValues = values.map(({value}) => `'${value}'`).join(' | ');
  return `type ${name} = ${stringValues};\n`;
}

function convertTypedef(production: IDLProduction): string {
  const {name, idlType} = production;
  return `type ${name} = ${convertIDLType(idlType)};\n`;
}

function convertNamespace(production: IDLProduction): string {
  const {name, members} = production;
  const partial = production.partial ? '/* partial */ ' : '';

  const grouped = group(members, (member) => member.type);
  const namespaceMembers = Object.keys(grouped)
    .sort(compareTypes)
    .map((key) =>
      grouped[key]
        .toSorted(compareProductions)
        .map(convertNamespaceMember)
        .join(''),
    )
    .join('');

  return `${partial}declare namespace ${name} {${namespaceMembers}}`;
}

function convertNamespaceMember(production: IDLProduction): string {
  switch (production.type) {
    case 'attribute':
      return `declare ${convertAttribute(production)}`;

    case 'operation':
      return `declare function ${convertOperation(production)}`;

    case 'const':
      return `declare ${convertConstant(production)}`;

    default:
      process.stderr.write(
        `Unhandled IDL production ${production.type}:\n${JSON.stringify(production, null, 2)}\n\n`,
      );
      return '';
  }
}

function convertCallback(production: IDLProduction): string {
  let {arguments: args, name, idlType} = production;
  const argString = args.map(convertArgument).join(', ');
  return `type ${name} = (${argString}) => ${convertIDLType(idlType)};\n`;
}

function convertCallbackInterface(production: IDLProduction): string {
  return convertInterface(production);
}

function convertInterfaceMixin(production: IDLProduction): string {
  return convertInterface(production);
}

function convertDictionary(production: IDLProduction): string {
  const {partial, members, name} = production;

  if (partial) {
    process.stderr.write(`Partial dictionaries not yet handled`);
    return '';
  }

  const fields = members.map(convertField).join(',\n');
  return `type ${name} = {\n${fields}};\n`;
}

function convertField(production: IDLProduction): string {
  const {idlType, name} = production;
  return `${name}: ${convertIDLType(idlType)}`;
}

function convertIDLType(production: IDLProduction): string {
  const idlType = production.idlType;
  const generic = production.generic;

  let orNull = production.nullable ? ' | null' : '';

  let type;
  if (typeof idlType === 'string') {
    type = TYPE_MAP[idlType] != null ? TYPE_MAP[idlType] : idlType;
  } else if (Array.isArray(idlType)) {
    type = idlType.map(convertIDLType).join(' | ');
  } else {
    process.stderr.write(
      `Unhandled IDL type ${idlType} in production ${production.name}\n`,
    );
    return '';
  }

  if (generic === 'sequence') {
    return `Array<${type}>${orNull}`;
  }

  return `${type}${orNull}`;
}

function convertInterfaceMember(production: IDLProduction): string {
  switch (production.type) {
    case 'constructor':
      return convertConstructor(production);

    case 'iterable':
      return convertIterable(production);

    case 'attribute':
      return convertAttribute(production);

    case 'operation':
      return convertOperation(production);

    case 'const':
      return convertConstant(production);

    case 'setlike':
      // Handled separately
      return '';

    default:
      process.stderr.write(
        `Unhandled IDL production ${production.type}:\n${JSON.stringify(production, null, 2)}\n\n`,
      );
      return '';
  }
}

function convertInterface(
  production: IDLProduction,
  mixins: ?Array<string>,
  mixinConsts: ?Array<IDLProduction>,
): string {
  const {extAttrs, inheritance, name} = production;
  let {members} = production;
  if (
    members.length > 0 &&
    members.every((member) => member.type === 'setlike')
  ) {
    return convertSetlike(production);
  }

  if (mixinConsts != null && mixinConsts.length > 0) {
    members = [...members, ...mixinConsts];
  }

  const hasMixins = mixins != null && mixins.length > 0;
  const isExposed =
    extAttrs != null && extAttrs.some((attr) => attr.name === 'Exposed');

  const partial = production.partial ? '/* partial */ ' : '';
  const declare = hasMixins || isExposed ? 'declare ' : '';
  const classOrInterface = hasMixins || isExposed ? 'class' : 'interface';
  const extendsDecl = inheritance != null ? `extends ${inheritance} ` : '';
  const mixinDecl =
    mixins != null && mixins.length > 0 ? `mixins ${mixins.join(', ')} ` : '';

  const grouped = group(members, (member) => member.type);
  const interfaceMembers = Object.keys(grouped)
    .sort(compareTypes)
    .map((key) =>
      grouped[key]
        .toSorted(compareProductions)
        .map(convertInterfaceMember)
        .join(''),
    )
    .join('\n');

  return `${partial}${declare}${classOrInterface} ${name} ${extendsDecl}${mixinDecl}{${interfaceMembers}}\n`;
}

function convertConstructor(production: IDLProduction): string {
  const {arguments: args} = production;
  const argString = args.map(convertArgument).join(', ');
  return `constructor(${argString}): void;\n`;
}

function convertIterable(production: IDLProduction): string {
  const {idlType: types} = production;
  const typeStr = types.map(convertIDLType).join(', ');
  return `@@iterator(): Iterator<${typeStr}>;\n`;
}

function convertAttribute(production: IDLProduction): string {
  const {idlType, name, readonly} = production;
  const plus = readonly ? '+' : '';
  return `${plus}${name}: ${convertIDLType(idlType)};\n`;
}

function convertOperation(production: IDLProduction): string {
  const {idlType, name, arguments: args, special} = production;

  if (special === 'stringifier' && name === '') {
    return 'toString(): string;\n';
  }

  const staticString = special === 'static' ? 'static ' : '';
  const argString = args.map(convertArgument).join(', ');
  return `${staticString}${name}(${argString}): ${convertIDLType(idlType)};\n`;
}

function convertConstant(production: IDLProduction): string {
  const {name, value} = production;

  let valueString;
  switch (value.type) {
    case 'number':
      valueString = value.value;
      break;

    default:
      process.stderr.write(`Unhandled constant type ${value.type}\n`);
      return '';
  }

  return `static +${name}: ${valueString};\n`;
}

function convertSetlike(production: IDLProduction): string {
  const {name, members} = production;
  const idlType = members[0].idlType[0];
  return `type ${name} = Set<${convertIDLType(idlType)}>;\n`;
}

function convertArgument(production: IDLProduction): string {
  const {idlType, name, variadic} = production;
  const optional = production.optional ? '?' : '';
  return `${maybeReplaceKeyword(name)}${optional}: ${convertIDLType(idlType)}`;
}

function convertTopLevelProduction(
  production: IDLProduction,
  interfaceMixins: {[string]: Array<string>},
  mixinConsts: {[string]: Array<IDLProduction>},
): string {
  const {type, name} = production;

  switch (type) {
    case 'interface':
      const mixins = interfaceMixins[name];
      const consts = mixins?.flatMap((mixin) => mixinConsts[mixin] ?? []);
      return convertInterface(production, mixins, consts);

    case 'interface mixin':
      return convertInterfaceMixin(production);

    case 'callback interface':
      return convertCallbackInterface(production);

    case 'namespace':
      return convertNamespace(production);

    case 'callback':
      return convertCallback(production);

    case 'dictionary':
      return convertDictionary(production);

    case 'enum':
      return convertEnum(production);

    case 'typedef':
      return convertTypedef(production);

    case 'includes':
      // Converted to mixins
      return '';

    default:
      process.stderr.write(
        `Unhandled IDL production ${type}:\n${JSON.stringify(production, null, 2)}\n\n`,
      );
      return '';
  }
}

export async function convertIDLToLibrary(idl: IDLTree): Promise<string> {
  const sorted = idl.toSorted(compareProductions);
  const interfaceMixins = ({}: {[string]: Array<string>});
  const mixinConsts = ({}: {[string]: Array<IDLProduction>});

  for (const production of sorted) {
    if (production.type === 'includes') {
      const {target, includes} = production;
      if (interfaceMixins[target] == null) {
        interfaceMixins[target] = [];
      }
      interfaceMixins[target].push(includes);
    } else if (production.type === 'interface mixin') {
      const {members, name} = production;
      const [consts, nonConsts] = partition(
        members,
        (member) => member.type === 'const',
      );

      if (consts.length > 0) {
        mixinConsts[name] = consts;
        production.members = nonConsts;
      }
    }
  }

  return sorted
    .map((production) =>
      convertTopLevelProduction(production, interfaceMixins, mixinConsts),
    )
    .join('\n');
}
