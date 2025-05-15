type SVGBoundingBoxOptions = {
  clipped: boolean,
  fill: boolean,
  markers: boolean,
  stroke: boolean,
};

/* partial */ declare class Document {
  +rootElement: SVGSVGElement | null;
}

declare class ShadowAnimation extends Animation {
  +sourceAnimation: Animation;

  constructor(source: Animation, newTarget: Element | CSSPseudoElement): void;
}

declare class SVGAElement
  extends SVGGraphicsElement
  mixins mixin$SVGURIReference
{
  download: string;
  hash: string;
  host: string;
  hostname: string;
  hreflang: string;
  +origin: string;
  password: string;
  pathname: string;
  ping: string;
  port: string;
  protocol: string;
  referrerPolicy: string;
  rel: string;
  +relList: DOMTokenList;
  search: string;
  +target: SVGAnimatedString;
  text: string;
  type: string;
  username: string;
}

declare class SVGAngle {
  static +SVG_ANGLETYPE_DEG: 2;
  static +SVG_ANGLETYPE_GRAD: 4;
  static +SVG_ANGLETYPE_RAD: 3;
  static +SVG_ANGLETYPE_UNKNOWN: 0;
  static +SVG_ANGLETYPE_UNSPECIFIED: 1;

  +unitType: number;
  value: number;
  valueAsString: string;
  valueInSpecifiedUnits: number;

  convertToSpecifiedUnits(unitType: number): void;
  newValueSpecifiedUnits(unitType: number, valueInSpecifiedUnits: number): void;
}

declare class SVGAnimatedAngle {
  +animVal: SVGAngle;
  +baseVal: SVGAngle;
}

declare class SVGAnimatedBoolean {
  +animVal: boolean;
  baseVal: boolean;
}

declare class SVGAnimatedEnumeration {
  +animVal: number;
  baseVal: number;
}

declare class SVGAnimatedInteger {
  +animVal: number;
  baseVal: number;
}

declare class SVGAnimatedLength {
  +animVal: SVGLength;
  +baseVal: SVGLength;
}

declare class SVGAnimatedLengthList {
  +animVal: SVGLengthList;
  +baseVal: SVGLengthList;
}

declare class SVGAnimatedNumber {
  +animVal: number;
  baseVal: number;
}

declare class SVGAnimatedNumberList {
  +animVal: SVGNumberList;
  +baseVal: SVGNumberList;
}

declare class SVGAnimatedPreserveAspectRatio {
  +animVal: SVGPreserveAspectRatio;
  +baseVal: SVGPreserveAspectRatio;
}

declare class SVGAnimatedRect {
  +animVal: DOMRectReadOnly;
  +baseVal: DOMRect;
}

declare class SVGAnimatedString {
  +animVal: string;
  baseVal: string;
}

declare class SVGAnimatedTransformList {
  +animVal: SVGTransformList;
  +baseVal: SVGTransformList;
}

declare class SVGCircleElement extends SVGGeometryElement {
  +cx: SVGAnimatedLength;
  +cy: SVGAnimatedLength;
  +r: SVGAnimatedLength;
}

declare class SVGDefsElement extends SVGGraphicsElement {}

declare class SVGDescElement extends SVGElement {}

declare class SVGElement
  extends Element
  mixins
    mixin$GlobalEventHandlers,
    mixin$SVGElementInstance,
    mixin$HTMLOrSVGElement
{
  +className: SVGAnimatedString;
  +ownerSVGElement: SVGSVGElement | null;
  +viewportElement: SVGElement | null;
}

declare class SVGEllipseElement extends SVGGeometryElement {
  +cx: SVGAnimatedLength;
  +cy: SVGAnimatedLength;
  +rx: SVGAnimatedLength;
  +ry: SVGAnimatedLength;
}

declare class SVGForeignObjectElement extends SVGGraphicsElement {
  +height: SVGAnimatedLength;
  +width: SVGAnimatedLength;
  +x: SVGAnimatedLength;
  +y: SVGAnimatedLength;
}

declare class SVGGElement extends SVGGraphicsElement {}

declare class SVGGeometryElement extends SVGGraphicsElement {
  +pathLength: SVGAnimatedNumber;

  getPointAtLength(distance: number): DOMPoint;
  getTotalLength(): number;
  isPointInFill(point?: DOMPointInit): boolean;
  isPointInStroke(point?: DOMPointInit): boolean;
}

declare class SVGGradientElement
  extends SVGElement
  mixins mixin$SVGURIReference
{
  static +SVG_SPREADMETHOD_PAD: 1;
  static +SVG_SPREADMETHOD_REFLECT: 2;
  static +SVG_SPREADMETHOD_REPEAT: 3;
  static +SVG_SPREADMETHOD_UNKNOWN: 0;

  +gradientTransform: SVGAnimatedTransformList;
  +gradientUnits: SVGAnimatedEnumeration;
  +spreadMethod: SVGAnimatedEnumeration;
}

declare class SVGGraphicsElement extends SVGElement mixins mixin$SVGTests {
  +transform: SVGAnimatedTransformList;

  getBBox(options?: SVGBoundingBoxOptions): DOMRect;
  getCTM(): DOMMatrix | null;
  getScreenCTM(): DOMMatrix | null;
}

declare class SVGImageElement
  extends SVGGraphicsElement
  mixins mixin$SVGURIReference
{
  crossOrigin: string | null;
  +height: SVGAnimatedLength;
  +preserveAspectRatio: SVGAnimatedPreserveAspectRatio;
  +width: SVGAnimatedLength;
  +x: SVGAnimatedLength;
  +y: SVGAnimatedLength;
}

declare class SVGLength {
  static +SVG_LENGTHTYPE_CM: 6;
  static +SVG_LENGTHTYPE_EMS: 3;
  static +SVG_LENGTHTYPE_EXS: 4;
  static +SVG_LENGTHTYPE_IN: 8;
  static +SVG_LENGTHTYPE_MM: 7;
  static +SVG_LENGTHTYPE_NUMBER: 1;
  static +SVG_LENGTHTYPE_PC: 10;
  static +SVG_LENGTHTYPE_PERCENTAGE: 2;
  static +SVG_LENGTHTYPE_PT: 9;
  static +SVG_LENGTHTYPE_PX: 5;
  static +SVG_LENGTHTYPE_UNKNOWN: 0;

  +unitType: number;
  value: number;
  valueAsString: string;
  valueInSpecifiedUnits: number;

  convertToSpecifiedUnits(unitType: number): void;
  newValueSpecifiedUnits(unitType: number, valueInSpecifiedUnits: number): void;
}

declare class SVGLengthList {
  +length: number;
  +numberOfItems: number;

  appendItem(newItem: SVGLength): SVGLength;
  clear(): void;
  initialize(newItem: SVGLength): SVGLength;
  getItem(index: number): SVGLength;
  insertItemBefore(newItem: SVGLength, index: number): SVGLength;
  removeItem(index: number): SVGLength;
  replaceItem(newItem: SVGLength, index: number): SVGLength;
  (index: number, newItem: SVGLength): void;
}

declare class SVGLinearGradientElement extends SVGGradientElement {
  +x1: SVGAnimatedLength;
  +x2: SVGAnimatedLength;
  +y1: SVGAnimatedLength;
  +y2: SVGAnimatedLength;
}

declare class SVGLineElement extends SVGGeometryElement {
  +x1: SVGAnimatedLength;
  +x2: SVGAnimatedLength;
  +y1: SVGAnimatedLength;
  +y2: SVGAnimatedLength;
}

declare class SVGMarkerElement extends SVGElement mixins mixin$SVGFitToViewBox {
  static +SVG_MARKER_ORIENT_ANGLE: 2;
  static +SVG_MARKER_ORIENT_AUTO: 1;
  static +SVG_MARKER_ORIENT_UNKNOWN: 0;
  static +SVG_MARKERUNITS_STROKEWIDTH: 2;
  static +SVG_MARKERUNITS_UNKNOWN: 0;
  static +SVG_MARKERUNITS_USERSPACEONUSE: 1;

  +markerHeight: SVGAnimatedLength;
  +markerUnits: SVGAnimatedEnumeration;
  +markerWidth: SVGAnimatedLength;
  orient: string;
  +orientAngle: SVGAnimatedAngle;
  +orientType: SVGAnimatedEnumeration;
  +refX: SVGAnimatedLength;
  +refY: SVGAnimatedLength;

  setOrientToAngle(angle: SVGAngle): void;
  setOrientToAuto(): void;
}

declare class SVGMetadataElement extends SVGElement {}

declare class SVGNumber {
  value: number;
}

declare class SVGNumberList {
  +length: number;
  +numberOfItems: number;

  appendItem(newItem: SVGNumber): SVGNumber;
  clear(): void;
  initialize(newItem: SVGNumber): SVGNumber;
  getItem(index: number): SVGNumber;
  insertItemBefore(newItem: SVGNumber, index: number): SVGNumber;
  removeItem(index: number): SVGNumber;
  replaceItem(newItem: SVGNumber, index: number): SVGNumber;
  (index: number, newItem: SVGNumber): void;
}

declare class SVGPatternElement
  extends SVGElement
  mixins mixin$SVGFitToViewBox, mixin$SVGURIReference
{
  +height: SVGAnimatedLength;
  +patternContentUnits: SVGAnimatedEnumeration;
  +patternTransform: SVGAnimatedTransformList;
  +patternUnits: SVGAnimatedEnumeration;
  +width: SVGAnimatedLength;
  +x: SVGAnimatedLength;
  +y: SVGAnimatedLength;
}

declare class SVGPointList {
  +length: number;
  +numberOfItems: number;

  appendItem(newItem: DOMPoint): DOMPoint;
  clear(): void;
  initialize(newItem: DOMPoint): DOMPoint;
  getItem(index: number): DOMPoint;
  insertItemBefore(newItem: DOMPoint, index: number): DOMPoint;
  removeItem(index: number): DOMPoint;
  replaceItem(newItem: DOMPoint, index: number): DOMPoint;
  (index: number, newItem: DOMPoint): void;
}

declare class SVGPolygonElement
  extends SVGGeometryElement
  mixins mixin$SVGAnimatedPoints {}

declare class SVGPolylineElement
  extends SVGGeometryElement
  mixins mixin$SVGAnimatedPoints {}

declare class SVGPreserveAspectRatio {
  static +SVG_MEETORSLICE_MEET: 1;
  static +SVG_MEETORSLICE_SLICE: 2;
  static +SVG_MEETORSLICE_UNKNOWN: 0;
  static +SVG_PRESERVEASPECTRATIO_NONE: 1;
  static +SVG_PRESERVEASPECTRATIO_UNKNOWN: 0;
  static +SVG_PRESERVEASPECTRATIO_XMAXYMAX: 10;
  static +SVG_PRESERVEASPECTRATIO_XMAXYMID: 7;
  static +SVG_PRESERVEASPECTRATIO_XMAXYMIN: 4;
  static +SVG_PRESERVEASPECTRATIO_XMIDYMAX: 9;
  static +SVG_PRESERVEASPECTRATIO_XMIDYMID: 6;
  static +SVG_PRESERVEASPECTRATIO_XMIDYMIN: 3;
  static +SVG_PRESERVEASPECTRATIO_XMINYMAX: 8;
  static +SVG_PRESERVEASPECTRATIO_XMINYMID: 5;
  static +SVG_PRESERVEASPECTRATIO_XMINYMIN: 2;

  align: number;
  meetOrSlice: number;
}

declare class SVGRadialGradientElement extends SVGGradientElement {
  +cx: SVGAnimatedLength;
  +cy: SVGAnimatedLength;
  +fr: SVGAnimatedLength;
  +fx: SVGAnimatedLength;
  +fy: SVGAnimatedLength;
  +r: SVGAnimatedLength;
}

declare class SVGRectElement extends SVGGeometryElement {
  +height: SVGAnimatedLength;
  +rx: SVGAnimatedLength;
  +ry: SVGAnimatedLength;
  +width: SVGAnimatedLength;
  +x: SVGAnimatedLength;
  +y: SVGAnimatedLength;
}

declare class SVGScriptElement extends SVGElement mixins mixin$SVGURIReference {
  crossOrigin: string | null;
  type: string;
}

declare class SVGStopElement extends SVGElement {
  +offset: SVGAnimatedNumber;
}

declare class SVGStringList {
  +length: number;
  +numberOfItems: number;

  appendItem(newItem: string): string;
  clear(): void;
  initialize(newItem: string): string;
  getItem(index: number): string;
  insertItemBefore(newItem: string, index: number): string;
  removeItem(index: number): string;
  replaceItem(newItem: string, index: number): string;
  (index: number, newItem: string): void;
}

declare class SVGStyleElement extends SVGElement mixins mixin$LinkStyle {
  media: string;
  title: string;
  type: string;
}

declare class SVGSVGElement
  extends SVGGraphicsElement
  mixins mixin$SVGFitToViewBox, mixin$WindowEventHandlers
{
  currentScale: number;
  +currentTranslate: DOMPointReadOnly;
  +height: SVGAnimatedLength;
  +width: SVGAnimatedLength;
  +x: SVGAnimatedLength;
  +y: SVGAnimatedLength;

  checkEnclosure(element: SVGElement, rect: DOMRectReadOnly): boolean;
  checkIntersection(element: SVGElement, rect: DOMRectReadOnly): boolean;
  createSVGAngle(): SVGAngle;
  createSVGLength(): SVGLength;
  createSVGMatrix(): DOMMatrix;
  createSVGNumber(): SVGNumber;
  createSVGPoint(): DOMPoint;
  createSVGRect(): DOMRect;
  createSVGTransform(): SVGTransform;
  createSVGTransformFromMatrix(matrix?: DOMMatrix2DInit): SVGTransform;
  deselectAll(): void;
  forceRedraw(): void;
  getElementById(elementId: string): Element;
  getEnclosureList(
    rect: DOMRectReadOnly,
    referenceElement: SVGElement | null,
  ): NodeList;
  getIntersectionList(
    rect: DOMRectReadOnly,
    referenceElement: SVGElement | null,
  ): NodeList;
  suspendRedraw(maxWaitMilliseconds: number): number;
  unsuspendRedraw(suspendHandleID: number): void;
  unsuspendRedrawAll(): void;
}

declare class SVGSwitchElement extends SVGGraphicsElement {}

declare class SVGSymbolElement
  extends SVGGraphicsElement
  mixins mixin$SVGFitToViewBox {}

declare class SVGTextContentElement extends SVGGraphicsElement {
  static +LENGTHADJUST_SPACING: 1;
  static +LENGTHADJUST_SPACINGANDGLYPHS: 2;
  static +LENGTHADJUST_UNKNOWN: 0;

  +lengthAdjust: SVGAnimatedEnumeration;
  +textLength: SVGAnimatedLength;

  getCharNumAtPosition(point?: DOMPointInit): number;
  getComputedTextLength(): number;
  getEndPositionOfChar(charnum: number): DOMPoint;
  getExtentOfChar(charnum: number): DOMRect;
  getNumberOfChars(): number;
  getRotationOfChar(charnum: number): number;
  getStartPositionOfChar(charnum: number): DOMPoint;
  getSubStringLength(charnum: number, nchars: number): number;
  selectSubString(charnum: number, nchars: number): void;
}

declare class SVGTextElement extends SVGTextPositioningElement {}

declare class SVGTextPathElement
  extends SVGTextContentElement
  mixins mixin$SVGURIReference
{
  static +TEXTPATH_METHODTYPE_ALIGN: 1;
  static +TEXTPATH_METHODTYPE_STRETCH: 2;
  static +TEXTPATH_METHODTYPE_UNKNOWN: 0;
  static +TEXTPATH_SPACINGTYPE_AUTO: 1;
  static +TEXTPATH_SPACINGTYPE_EXACT: 2;
  static +TEXTPATH_SPACINGTYPE_UNKNOWN: 0;

  +method: SVGAnimatedEnumeration;
  +spacing: SVGAnimatedEnumeration;
  +startOffset: SVGAnimatedLength;
}

declare class SVGTextPositioningElement extends SVGTextContentElement {
  +dx: SVGAnimatedLengthList;
  +dy: SVGAnimatedLengthList;
  +rotate: SVGAnimatedNumberList;
  +x: SVGAnimatedLengthList;
  +y: SVGAnimatedLengthList;
}

declare class SVGTitleElement extends SVGElement {}

declare class SVGTransform {
  static +SVG_TRANSFORM_MATRIX: 1;
  static +SVG_TRANSFORM_ROTATE: 4;
  static +SVG_TRANSFORM_SCALE: 3;
  static +SVG_TRANSFORM_SKEWX: 5;
  static +SVG_TRANSFORM_SKEWY: 6;
  static +SVG_TRANSFORM_TRANSLATE: 2;
  static +SVG_TRANSFORM_UNKNOWN: 0;

  +angle: number;
  +matrix: DOMMatrix;
  +type: number;

  setMatrix(matrix?: DOMMatrix2DInit): void;
  setRotate(angle: number, cx: number, cy: number): void;
  setScale(sx: number, sy: number): void;
  setSkewX(angle: number): void;
  setSkewY(angle: number): void;
  setTranslate(tx: number, ty: number): void;
}

declare class SVGTransformList {
  +length: number;
  +numberOfItems: number;

  appendItem(newItem: SVGTransform): SVGTransform;
  clear(): void;
  createSVGTransformFromMatrix(matrix?: DOMMatrix2DInit): SVGTransform;
  initialize(newItem: SVGTransform): SVGTransform;
  getItem(index: number): SVGTransform;
  consolidate(): SVGTransform | null;
  insertItemBefore(newItem: SVGTransform, index: number): SVGTransform;
  removeItem(index: number): SVGTransform;
  replaceItem(newItem: SVGTransform, index: number): SVGTransform;
  (index: number, newItem: SVGTransform): void;
}

declare class SVGTSpanElement extends SVGTextPositioningElement {}

declare class SVGUnitTypes {
  static +SVG_UNIT_TYPE_OBJECTBOUNDINGBOX: 2;
  static +SVG_UNIT_TYPE_UNKNOWN: 0;
  static +SVG_UNIT_TYPE_USERSPACEONUSE: 1;
}

declare class SVGUseElement
  extends SVGGraphicsElement
  mixins mixin$SVGURIReference
{
  +animatedInstanceRoot: SVGElement | null;
  +height: SVGAnimatedLength;
  +instanceRoot: SVGElement | null;
  +width: SVGAnimatedLength;
  +x: SVGAnimatedLength;
  +y: SVGAnimatedLength;
}

declare class SVGUseElementShadowRoot extends ShadowRoot {}

declare class SVGViewElement extends SVGElement mixins mixin$SVGFitToViewBox {}

declare class mixin$GetSVGDocument {
  getSVGDocument(): Document;
}

declare class mixin$SVGAnimatedPoints {
  +animatedPoints: SVGPointList;
  +points: SVGPointList;
}

declare class mixin$SVGElementInstance {
  +correspondingElement: SVGElement | null;
  +correspondingUseElement: SVGUseElement | null;
}

declare class mixin$SVGFitToViewBox {
  +preserveAspectRatio: SVGAnimatedPreserveAspectRatio;
  +viewBox: SVGAnimatedRect;
}

declare class mixin$SVGTests {
  +requiredExtensions: SVGStringList;
  +systemLanguage: SVGStringList;
}

declare class mixin$SVGURIReference {
  +href: SVGAnimatedString;
}
