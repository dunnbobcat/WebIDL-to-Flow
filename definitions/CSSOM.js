type CSSStyleSheetInit = {
  baseURL: string,
  media: MediaList | string,
  disabled: boolean,
};

declare class CSSGroupingRule extends CSSRule {
  +cssRules: CSSRuleList;

  deleteRule(index: number): void;
  insertRule(rule: string, index?: number): number;
}

declare class CSSImportRule extends CSSRule {
  +href: string;
  +media: MediaList;
  +styleSheet: CSSStyleSheet;
}

declare class CSSMarginRule extends CSSRule {
  +name: string;
  +style: CSSStyleDeclaration;
}

declare class CSSNamespaceRule extends CSSRule {
  +namespaceURI: string;
  +prefix: string;
}

declare class CSSPageRule extends CSSGroupingRule {
  selectorText: string;
  +style: CSSStyleDeclaration;
}

declare class CSSRule {
  static +CHARSET_RULE: 2;
  static +FONT_FACE_RULE: 5;
  static +IMPORT_RULE: 3;
  static +MARGIN_RULE: 9;
  static +MEDIA_RULE: 4;
  static +NAMESPACE_RULE: 10;
  static +PAGE_RULE: 6;
  static +STYLE_RULE: 1;

  cssText: string;
  +parentRule: CSSRule | null;
  +parentStyleSheet: CSSStyleSheet | null;
  +type: number;
}

declare class CSSRuleList {
  +length: number;

  item(index: number): CSSRule | null;
}

declare class CSSStyleDeclaration {
  cssFloat: string;
  cssText: string;
  +length: number;
  +parentRule: CSSRule | null;

  item(index: number): string;
  getPropertyPriority(property: string): string;
  getPropertyValue(property: string): string;
  removeProperty(property: string): string;
  setProperty(property: string, value: string, priority?: string): void;
}

declare class CSSStyleRule extends CSSRule {
  selectorText: string;
  +style: CSSStyleDeclaration;
}

declare class CSSStyleSheet extends StyleSheet {
  +cssRules: CSSRuleList;
  +ownerRule: CSSRule | null;

  constructor(options?: CSSStyleSheetInit): void;

  deleteRule(index: number): void;
  insertRule(rule: string, index?: number): number;
  replace(text: string): CSSStyleSheet;
  replaceSync(text: string): void;
}

/* partial */ interface CSSStyleSheet {
  +rules: CSSRuleList;

  addRule(selector?: string, style?: string, index?: number): number;
  removeRule(index?: number): void;
}

declare class MediaList {
  +length: number;
  mediaText: string;

  item(index: number): string | null;
  appendMedium(medium: string): void;
  deleteMedium(medium: string): void;
}

declare class StyleSheet {
  disabled: boolean;
  +href: string | null;
  +media: MediaList;
  +ownerNode: Element | ProcessingInstruction | null;
  +parentStyleSheet: CSSStyleSheet | null;
  +title: string | null;
  +type: string;
}

declare class StyleSheetList {
  +length: number;

  item(index: number): CSSStyleSheet | null;
}

/* partial */ interface Window {
  getComputedStyle(
    elt: Element,
    pseudoElt?: string | null,
  ): CSSStyleDeclaration;
}

/* partial mixin */ declare class mixin$DocumentOrShadowRoot {
  adoptedStyleSheets: CSSStyleSheet;
  +styleSheets: StyleSheetList;
}

/* mixin */ declare class mixin$ElementCSSInlineStyle {
  +style: CSSStyleDeclaration;
}

/* mixin */ declare class mixin$LinkStyle {
  +sheet: CSSStyleSheet | null;
}

declare namespace CSS {
  declare function escape(ident: string): string;
}
