declare class Baseline {
  +name: string;
  +value: number;
}

/* partial */ interface Document {
  measureElement(element: Element): FontMetrics;
  measureText(text: string, styleMap: StylePropertyMapReadOnly): FontMetrics;
}

declare class Font {
  +glyphsRendered: number;
  +name: string;
}

declare class FontMetrics {
  +advances: number;
  +baselines: Baseline;
  +boundingBoxAscent: number;
  +boundingBoxDescent: number;
  +boundingBoxLeft: number;
  +boundingBoxRight: number;
  +dominantBaseline: Baseline;
  +emHeightAscent: number;
  +emHeightDescent: number;
  +fontBoundingBoxAscent: number;
  +fontBoundingBoxDescent: number;
  +fonts: Font;
  +height: number;
  +width: number;
}
