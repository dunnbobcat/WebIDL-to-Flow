import partition from './partition.js';
const KEYWORD_REPLACEMENTS = {
  interface: 'interface_',
  default: 'default_',
  constructor: 'constructor_'
};
const TYPE_MAP = {
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
  USVString: 'string'
};
const PRODUCTION_ORDER = ['typedef', 'enum', 'dictionary', 'interface mixin', 'callback interface', 'interface', 'const', 'attribute', 'constructor', 'iterable', 'operation', 'callback'];
function maybeReplaceKeyword(name) {
  const replacement = KEYWORD_REPLACEMENTS[name];
  if (replacement != null) {
    return replacement;
  }
  return name;
}
function getPrecedence(type) {
  let precedence = PRODUCTION_ORDER.indexOf(type);
  if (precedence > -1) {
    return precedence;
  }
  return PRODUCTION_ORDER.length;
}
function compareProductions(a, b) {
  let aPrecedence = getPrecedence(a.type);
  let bPrecedence = getPrecedence(b.type);
  if (aPrecedence === bPrecedence) {
    if (a.type === 'operation' && b.type === 'operation' && a.special !== b.special) {
      return a.special === 'static' ? -1 : b.special === 'static' ? 1 : 0;
    }
    if (a.name != null && b.name != null) {
      return a.name.localeCompare(b.name);
    }
    return 0;
  }
  return aPrecedence - bPrecedence;
}
export async function convertIDLToLibrary(idl) {
  const sorted = idl.toSorted(compareProductions);
  const interfaceToMixins = {};
  const mixinToConsts = {};
  for (const production of sorted) {
    if (production.type === 'includes') {
      const {
        target,
        includes
      } = production;
      if (interfaceToMixins[target] == null) {
        interfaceToMixins[target] = [];
      }
      interfaceToMixins[target].push(includes);
    } else if (production.type === 'interface mixin') {
      const {
        members,
        name
      } = production;
      const [consts, nonConsts] = partition(members, member => member.type === 'const');
      if (consts.length > 0) {
        mixinToConsts[name] = consts;
        production.members = nonConsts;
      }
    }
  }
  let out = '';
  for (const production of sorted) {
    const {
      type,
      name
    } = production;
    switch (type) {
      case 'interface':
        const mixins = interfaceToMixins[name];
        const consts = mixins?.flatMap(mixin => mixinToConsts[mixin] ?? []);
        out += convertInterface(production, mixins, consts);
        break;
      case 'dictionary':
        out += convertDictionary(production);
        break;
      case 'interface mixin':
        out += convertInterfaceMixin(production);
        break;
      case 'callback':
        out += convertCallback(production);
        break;
      case 'callback interface':
        out += convertCallbackInterface(production);
        break;
      case 'enum':
        out += convertEnum(production);
        break;
      case 'typedef':
        out += convertTypedef(production);
        break;
      case 'includes':
        break;
      default:
        process.stderr.write(`Unhandled IDL production ${type}:\n${JSON.stringify(production, null, 2)}\n\n`);
        continue;
    }
    out += '\n';
  }
  return out;
}
function convertEnum(production) {
  const {
    name,
    values
  } = production;
  let out = `type ${name} = `;
  for (let idx = 0; idx < values.length; idx++) {
    const {
      value
    } = values[idx];
    out += `'${value}'`;
    if (idx < values.length - 1) {
      out += ' | ';
    }
  }
  out += '\n';
  return out;
}
function convertTypedef(production) {
  const {
    name,
    idlType
  } = production;
  let out = `type ${name} = `;
  out += convertIDLType(idlType);
  out += '\n';
  return out;
}
function convertCallback(production) {
  let {
    arguments: args,
    name,
    idlType
  } = production;
  let out = `type ${name} = (`;
  for (let idx = 0; idx < args.length; idx++) {
    const arg = args[idx];
    out += convertArgument(arg);
    if (idx < args.length - 1) {
      out += ', ';
    }
  }
  out += ') => ';
  out += convertIDLType(idlType);
  out += ';\n';
  return out;
}
function convertCallbackInterface(production) {
  return convertInterface(production);
}
function convertInterfaceMixin(production) {
  return convertInterface(production);
}
function convertDictionary(production) {
  const {
    partial,
    members,
    name
  } = production;
  if (partial) {
    process.stderr.write(`Partial dictionaries not yet handled`);
    return '';
  }
  let out = `type ${name} = {\n`;
  for (const member of members) {
    out += convertField(member);
  }
  out += '}\n';
  return out;
}
function convertField(production) {
  const {
    idlType,
    name
  } = production;
  let out = `${name}: `;
  out += convertIDLType(idlType);
  out += ',\n';
  return out;
}
function convertIDLType(production) {
  const idlType = production.idlType;
  const nullable = production.nullable;
  const generic = production.generic;
  let out = '';
  if (typeof idlType === 'string') {
    out += TYPE_MAP[idlType] != null ? TYPE_MAP[idlType] : idlType;
  } else if (Array.isArray(idlType)) {
    for (let idx = 0; idx < idlType.length; idx++) {
      const inner = idlType[idx];
      if (idx > 0) {
        out += ' | ';
      }
      out += convertIDLType(inner);
    }
  } else {
    process.stderr.write(`Unhandled IDL type ${idlType} in production ${production.name}\n`);
    return '';
  }
  if (generic === 'sequence') {
    out = `Array<${out}>`;
  }
  if (nullable) {
    out += ' | null';
  }
  return out;
}
function convertDefault(production) {
  const {
    value
  } = production;
  return ` = ${value}`;
}
function convertInterface(production, mixins, mixinConsts) {
  const {
    extAttrs,
    inheritance,
    name,
    partial
  } = production;
  if (partial) {
    return '';
  }
  let {
    members
  } = production;
  if (members.length > 0 && members.every(member => member.type === 'setlike')) {
    return convertSetlike(production);
  }
  if (mixinConsts != null && mixinConsts.length > 0) {
    members = [...members, ...mixinConsts];
  }
  const sorted = members.toSorted(compareProductions);
  const hasMixins = mixins != null && mixins.length > 0;
  const isExposed = extAttrs != null && extAttrs.some(attr => attr.name === 'Exposed');
  let out = '';
  if (hasMixins || isExposed) {
    out += 'declare class ';
  } else {
    out += 'interface ';
  }
  out += `${name} `;
  if (inheritance != null) {
    out += `extends ${inheritance} `;
  }
  if (mixins != null && mixins.length > 0) {
    out += `mixins ${mixins.join(', ')} `;
  }
  let lastType = null;
  out += '{\n';
  for (const member of sorted) {
    if (member.type !== lastType && lastType != null) {
      out += '\n';
    }
    lastType = member.type;
    switch (member.type) {
      case 'constructor':
        out += convertConstructor(member);
        continue;
      case 'iterable':
        out += convertIterable(member);
        continue;
      case 'attribute':
        out += convertAttribute(member);
        continue;
      case 'operation':
        out += convertOperation(member);
        continue;
      case 'const':
        out += convertConstant(member);
        continue;
      case 'setlike':
        continue;
      default:
        process.stderr.write(`Unhandled IDL production ${member.type}:\n${JSON.stringify(member, null, 2)}\n\n`);
        continue;
    }
  }
  out += '}\n';
  return out;
}
function convertConstructor(production) {
  const {
    arguments: args
  } = production;
  let out = 'constructor(';
  for (let idx = 0; idx < args.length; idx++) {
    const arg = args[idx];
    out += convertArgument(arg);
    if (idx < args.length - 1) {
      out += ', ';
    }
  }
  out += '): void;\n';
  return out;
}
function convertIterable(production) {
  const {
    idlType: types
  } = production;
  let out = '@@iterator(): Iterator<';
  for (let idx = 0; idx < types.length; idx++) {
    const idlType = types[idx];
    out += convertIDLType(idlType);
    if (idx < types.length - 1) {
      out += ', ';
    }
  }
  out += '>;\n';
  return out;
}
function convertAttribute(production) {
  const {
    idlType,
    name,
    readonly
  } = production;
  let out = '';
  if (readonly) {
    out += '+';
  }
  out += `${name}: `;
  out += convertIDLType(idlType);
  out += ';\n';
  return out;
}
function convertOperation(production) {
  const {
    idlType,
    name,
    arguments: args,
    special
  } = production;
  if (special === 'stringifier' && name === '') {
    return 'toString(): string;';
  }
  let out = '';
  if (special === 'static') {
    out += 'static ';
  }
  out += `${name}(`;
  for (let idx = 0; idx < args.length; idx++) {
    const arg = args[idx];
    out += convertArgument(arg);
    if (idx < args.length - 1) {
      out += ', ';
    }
  }
  out += '): ';
  out += convertIDLType(idlType);
  out += ';\n';
  return out;
}
function convertConstant(production) {
  const {
    idlType,
    name,
    value
  } = production;
  let out = `static +${name}: `;
  switch (value.type) {
    case 'number':
      out += value.value;
      break;
    default:
      process.stderr.write(`Unhandled constant type ${value.type}\n`);
      break;
  }
  out += ';\n';
  return out;
}
function convertSetlike(production) {
  const {
    name,
    value,
    members
  } = production;
  const idlType = members[0].idlType[0];
  let out = `type ${name} = Set<`;
  out += convertIDLType(idlType);
  out += '>;\n';
  return out;
}
function convertArgument(production) {
  const {
    idlType,
    name,
    optional,
    variadic
  } = production;
  let out = `${maybeReplaceKeyword(name)}${optional ? '?' : ''}: `;
  out += convertIDLType(idlType);
  return out;
}