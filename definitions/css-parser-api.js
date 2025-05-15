type CSSStringSource = string | ReadableStream;

type CSSToken = string | CSSStyleValue | CSSParserValue;

type CSSParserOptions = {
  atRules: Object,
};

/* partial */ declare namespace CSS {
  declare function parseCommaValueList(css: string): Array<Array<CSSToken>>;
  declare function parseDeclaration(
    css: string,
    options?: CSSParserOptions,
  ): CSSParserDeclaration;
  declare function parseDeclarationList(
    css: CSSStringSource,
    options?: CSSParserOptions,
  ): Promise<Array<CSSParserRule>>;
  declare function parseRule(
    css: CSSStringSource,
    options?: CSSParserOptions,
  ): Promise<CSSParserRule>;
  declare function parseRuleList(
    css: CSSStringSource,
    options?: CSSParserOptions,
  ): Promise<Array<CSSParserRule>>;
  declare function parseStylesheet(
    css: CSSStringSource,
    options?: CSSParserOptions,
  ): Promise<Array<CSSParserRule>>;
  declare function parseValue(css: string): CSSToken;
  declare function parseValueList(css: string): Array<CSSToken>;
}

declare class CSSParserAtRule extends CSSParserRule {
  +body: $ReadOnlyArray<CSSParserRule> | null;
  +name: string;
  +prelude: $ReadOnlyArray<CSSParserValue>;

  constructor(
    name: string,
    prelude: Array<CSSToken>,
    body?: Array<CSSParserRule> | null,
  ): void;

  toString(): string;
}

declare class CSSParserBlock extends CSSParserValue {
  +body: $ReadOnlyArray<CSSParserValue>;
  +name: string;

  constructor(name: string, body: Array<CSSParserValue>): void;

  toString(): string;
}

declare class CSSParserDeclaration extends CSSParserRule {
  +body: $ReadOnlyArray<CSSParserValue>;
  +name: string;

  constructor(name: string, body?: Array<CSSParserRule>): void;

  toString(): string;
}

declare class CSSParserFunction extends CSSParserValue {
  +args: $ReadOnlyArray<$ReadOnlyArray<CSSParserValue>>;
  +name: string;

  constructor(name: string, args: Array<Array<CSSParserValue>>): void;

  toString(): string;
}

declare class CSSParserQualifiedRule extends CSSParserRule {
  +body: $ReadOnlyArray<CSSParserRule>;
  +prelude: $ReadOnlyArray<CSSParserValue>;

  constructor(
    prelude: Array<CSSToken>,
    body?: Array<CSSParserRule> | null,
  ): void;

  toString(): string;
}

declare class CSSParserRule {}

declare class CSSParserValue {}
