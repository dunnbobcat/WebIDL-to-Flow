declare class CSSFontFaceDescriptors extends CSSStyleDeclaration {
  'ascent-override': string;
  ascentOverride: string;
  'descent-override': string;
  descentOverride: string;
  'font-display': string;
  'font-family': string;
  'font-feature-settings': string;
  'font-language-override': string;
  'font-named-instance': string;
  'font-size': string;
  'font-stretch': string;
  'font-style': string;
  'font-variation-settings': string;
  'font-weight': string;
  'font-width': string;
  fontDisplay: string;
  fontFamily: string;
  fontFeatureSettings: string;
  fontLanguageOverride: string;
  fontNamedInstance: string;
  fontSize: string;
  fontStretch: string;
  fontStyle: string;
  fontVariationSettings: string;
  fontWeight: string;
  fontWidth: string;
  'line-gap-override': string;
  lineGapOverride: string;
  'size-adjust': string;
  sizeAdjust: string;
  src: string;
  'subscript-position-override': string;
  'subscript-size-override': string;
  subscriptPositionOverride: string;
  subscriptSizeOverride: string;
  'superscript-position-override': string;
  'superscript-size-override': string;
  superscriptPositionOverride: string;
  superscriptSizeOverride: string;
  'unicode-range': string;
  unicodeRange: string;
}

declare class CSSFontFaceRule extends CSSRule {
  +style: CSSFontFaceDescriptors;
}
