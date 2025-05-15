declare class CSSFontFaceDescriptors extends CSSStyleDeclaration {
  ascentOverride: string;
  descentOverride: string;
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
  lineGapOverride: string;
  sizeAdjust: string;
  src: string;
  subscriptPositionOverride: string;
  subscriptSizeOverride: string;
  superscriptPositionOverride: string;
  superscriptSizeOverride: string;
  unicodeRange: string;
}

declare class CSSFontFaceRule extends CSSRule {
  +style: CSSFontFaceDescriptors;
}
