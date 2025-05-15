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
  ): Array<CSSParserRule>;
  declare function parseRule(
    css: CSSStringSource,
    options?: CSSParserOptions,
  ): CSSParserRule;
  declare function parseRuleList(
    css: CSSStringSource,
    options?: CSSParserOptions,
  ): Array<CSSParserRule>;
  declare function parseStylesheet(
    css: CSSStringSource,
    options?: CSSParserOptions,
  ): Array<CSSParserRule>;
  declare function parseValue(css: string): CSSToken;
  declare function parseValueList(css: string): Array<CSSToken>;
}

declare class CSSParserAtRule extends CSSParserRule {
  +body: CSSParserRule | null;
  +name: string;
  +prelude: CSSParserValue;

  constructor(
    name: string,
    prelude: Array<CSSToken>,
    body?: Array<CSSParserRule> | null,
  ): void;

  toString(): string;
}

declare class CSSParserBlock extends CSSParserValue {
  +body: CSSParserValue;
  +name: string;

  constructor(name: string, body: Array<CSSParserValue>): void;

  toString(): string;
}

declare class CSSParserDeclaration extends CSSParserRule {
  +body: CSSParserValue;
  +name: string;

  constructor(name: string, body?: Array<CSSParserRule>): void;

  toString(): string;
}

declare class CSSParserFunction extends CSSParserValue {
  +args: CSSParserValue;
  +name: string;

  constructor(name: string, args: Array<Array<CSSParserValue>>): void;

  toString(): string;
}

declare class CSSParserQualifiedRule extends CSSParserRule {
  +body: CSSParserRule;
  +prelude: CSSParserValue;

  constructor(
    prelude: Array<CSSToken>,
    body?: Array<CSSParserRule> | null,
  ): void;

  toString(): string;
}

declare class CSSParserRule {}

declare class CSSParserValue {}
