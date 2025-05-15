/* partial */ declare namespace CSS {
  declare function supports(property: string, value: string): boolean;
  declare function supports(conditionText: string): boolean;
}

declare class CSSConditionRule extends CSSGroupingRule {
  +conditionText: string;
}

declare class CSSMediaRule extends CSSConditionRule {
  +matches: boolean;
  +media: MediaList;
}

/* partial */ declare class CSSRule {
  static +SUPPORTS_RULE: 12;
}

declare class CSSSupportsRule extends CSSConditionRule {
  +matches: boolean;
}
