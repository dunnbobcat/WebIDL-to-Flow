declare class CSSFontFeatureValuesMap {
  set(featureValueName: string, values: number | Array<number>): void;
}

declare class CSSFontFeatureValuesRule extends CSSRule {
  +annotation: CSSFontFeatureValuesMap;
  +characterVariant: CSSFontFeatureValuesMap;
  fontFamily: string;
  +historicalForms: CSSFontFeatureValuesMap;
  +ornaments: CSSFontFeatureValuesMap;
  +styleset: CSSFontFeatureValuesMap;
  +stylistic: CSSFontFeatureValuesMap;
  +swash: CSSFontFeatureValuesMap;
}

declare class CSSFontPaletteValuesRule extends CSSRule {
  +basePalette: string;
  +fontFamily: string;
  +name: string;
  +overrideColors: string;
}

/* partial */ declare class CSSRule {
  static +FONT_FEATURE_VALUES_RULE: 14;
}
