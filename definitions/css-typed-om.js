type CSSColorAngle = CSSNumberish | CSSKeywordish;

type CSSColorNumber = CSSNumberish | CSSKeywordish;

type CSSColorPercent = CSSNumberish | CSSKeywordish;

type CSSColorRGBComp = CSSNumberish | CSSKeywordish;

type CSSKeywordish = string | CSSKeywordValue;

type CSSNumberish = number | CSSNumericValue;

type CSSPerspectiveValue = CSSNumericValue | CSSKeywordish;

type CSSUnparsedSegment = string | CSSVariableReferenceValue;

type CSSMathOperator = 'sum' | 'product' | 'negate' | 'invert' | 'min' | 'max' | 'clamp';

type CSSNumericBaseType = 'length' | 'angle' | 'time' | 'frequency' | 'resolution' | 'flex' | 'percent';

type CSSMatrixComponentOptions = {
is2D: boolean};

type CSSNumericType = {
angle: number,
flex: number,
frequency: number,
length: number,
percent: number,
percentHint: CSSNumericBaseType,
resolution: number,
time: number};

/* partial */ declare namespace CSS {declare function cap(value: number): CSSUnitValue;
declare function ch(value: number): CSSUnitValue;
declare function cm(value: number): CSSUnitValue;
declare function cqb(value: number): CSSUnitValue;
declare function cqh(value: number): CSSUnitValue;
declare function cqi(value: number): CSSUnitValue;
declare function cqmax(value: number): CSSUnitValue;
declare function cqmin(value: number): CSSUnitValue;
declare function cqw(value: number): CSSUnitValue;
declare function deg(value: number): CSSUnitValue;
declare function dpcm(value: number): CSSUnitValue;
declare function dpi(value: number): CSSUnitValue;
declare function dppx(value: number): CSSUnitValue;
declare function dvb(value: number): CSSUnitValue;
declare function dvh(value: number): CSSUnitValue;
declare function dvi(value: number): CSSUnitValue;
declare function dvmax(value: number): CSSUnitValue;
declare function dvmin(value: number): CSSUnitValue;
declare function dvw(value: number): CSSUnitValue;
declare function em(value: number): CSSUnitValue;
declare function ex(value: number): CSSUnitValue;
declare function fr(value: number): CSSUnitValue;
declare function grad(value: number): CSSUnitValue;
declare function Hz(value: number): CSSUnitValue;
declare function ic(value: number): CSSUnitValue;
declare function in(value: number): CSSUnitValue;
declare function kHz(value: number): CSSUnitValue;
declare function lh(value: number): CSSUnitValue;
declare function lvb(value: number): CSSUnitValue;
declare function lvh(value: number): CSSUnitValue;
declare function lvi(value: number): CSSUnitValue;
declare function lvmax(value: number): CSSUnitValue;
declare function lvmin(value: number): CSSUnitValue;
declare function lvw(value: number): CSSUnitValue;
declare function mm(value: number): CSSUnitValue;
declare function ms(value: number): CSSUnitValue;
declare function number(value: number): CSSUnitValue;
declare function pc(value: number): CSSUnitValue;
declare function percent(value: number): CSSUnitValue;
declare function pt(value: number): CSSUnitValue;
declare function px(value: number): CSSUnitValue;
declare function Q(value: number): CSSUnitValue;
declare function rad(value: number): CSSUnitValue;
declare function rcap(value: number): CSSUnitValue;
declare function rch(value: number): CSSUnitValue;
declare function rem(value: number): CSSUnitValue;
declare function rex(value: number): CSSUnitValue;
declare function ric(value: number): CSSUnitValue;
declare function rlh(value: number): CSSUnitValue;
declare function s(value: number): CSSUnitValue;
declare function svb(value: number): CSSUnitValue;
declare function svh(value: number): CSSUnitValue;
declare function svi(value: number): CSSUnitValue;
declare function svmax(value: number): CSSUnitValue;
declare function svmin(value: number): CSSUnitValue;
declare function svw(value: number): CSSUnitValue;
declare function turn(value: number): CSSUnitValue;
declare function vb(value: number): CSSUnitValue;
declare function vh(value: number): CSSUnitValue;
declare function vi(value: number): CSSUnitValue;
declare function vmax(value: number): CSSUnitValue;
declare function vmin(value: number): CSSUnitValue;
declare function vw(value: number): CSSUnitValue;
}

declare class CSSColor extends CSSColorValue {alpha: CSSNumberish;
channels: CSSColorPercent;
colorSpace: CSSKeywordish;

constructor(colorSpace: CSSKeywordish, channels: Array<CSSColorPercent>, alpha?: CSSNumberish): void;
}

declare class CSSColorValue extends CSSStyleValue {static parse(cssText: string): CSSColorValue | CSSStyleValue;
}

declare class CSSHSL extends CSSColorValue {alpha: CSSColorPercent;
h: CSSColorAngle;
l: CSSColorPercent;
s: CSSColorPercent;

constructor(h: CSSColorAngle, s: CSSColorPercent, l: CSSColorPercent, alpha?: CSSColorPercent): void;
}

declare class CSSHWB extends CSSColorValue {alpha: CSSNumberish;
b: CSSNumberish;
h: CSSNumericValue;
w: CSSNumberish;

constructor(h: CSSNumericValue, w: CSSNumberish, b: CSSNumberish, alpha?: CSSNumberish): void;
}

declare class CSSImageValue extends CSSStyleValue {}

declare class CSSKeywordValue extends CSSStyleValue {value: string;

constructor(value: string): void;
}

declare class CSSLab extends CSSColorValue {a: CSSColorNumber;
alpha: CSSColorPercent;
b: CSSColorNumber;
l: CSSColorPercent;

constructor(l: CSSColorPercent, a: CSSColorNumber, b: CSSColorNumber, alpha?: CSSColorPercent): void;
}

declare class CSSLCH extends CSSColorValue {alpha: CSSColorPercent;
c: CSSColorPercent;
h: CSSColorAngle;
l: CSSColorPercent;

constructor(l: CSSColorPercent, c: CSSColorPercent, h: CSSColorAngle, alpha?: CSSColorPercent): void;
}

declare class CSSMathClamp extends CSSMathValue {+lower: CSSNumericValue;
+upper: CSSNumericValue;
+value: CSSNumericValue;

constructor(lower: CSSNumberish, value: CSSNumberish, upper: CSSNumberish): void;
}

declare class CSSMathInvert extends CSSMathValue {+value: CSSNumericValue;

constructor(arg: CSSNumberish): void;
}

declare class CSSMathMax extends CSSMathValue {+values: CSSNumericArray;

constructor(args: CSSNumberish): void;
}

declare class CSSMathMin extends CSSMathValue {+values: CSSNumericArray;

constructor(args: CSSNumberish): void;
}

declare class CSSMathNegate extends CSSMathValue {+value: CSSNumericValue;

constructor(arg: CSSNumberish): void;
}

declare class CSSMathProduct extends CSSMathValue {+values: CSSNumericArray;

constructor(args: CSSNumberish): void;
}

declare class CSSMathSum extends CSSMathValue {+values: CSSNumericArray;

constructor(args: CSSNumberish): void;
}

declare class CSSMathValue extends CSSNumericValue {+operator: CSSMathOperator;
}

declare class CSSMatrixComponent extends CSSTransformComponent {matrix: DOMMatrix;

constructor(matrix: DOMMatrixReadOnly, options?: CSSMatrixComponentOptions): void;
}

declare class CSSNumericArray {+length: number;

@@iterator(): Iterator<CSSNumericValue>;

(index: number): CSSNumericValue;
}

declare class CSSNumericValue extends CSSStyleValue {static parse(cssText: string): CSSNumericValue;
add(values: CSSNumberish): CSSNumericValue;
div(values: CSSNumberish): CSSNumericValue;
equals(value: CSSNumberish): boolean;
max(values: CSSNumberish): CSSNumericValue;
min(values: CSSNumberish): CSSNumericValue;
mul(values: CSSNumberish): CSSNumericValue;
sub(values: CSSNumberish): CSSNumericValue;
to(unit: string): CSSUnitValue;
toSum(units: string): CSSMathSum;
type(): CSSNumericType;
}

declare class CSSOKLab extends CSSColorValue {a: CSSColorNumber;
alpha: CSSColorPercent;
b: CSSColorNumber;
l: CSSColorPercent;

constructor(l: CSSColorPercent, a: CSSColorNumber, b: CSSColorNumber, alpha?: CSSColorPercent): void;
}

declare class CSSOKLCH extends CSSColorValue {alpha: CSSColorPercent;
c: CSSColorPercent;
h: CSSColorAngle;
l: CSSColorPercent;

constructor(l: CSSColorPercent, c: CSSColorPercent, h: CSSColorAngle, alpha?: CSSColorPercent): void;
}

declare class CSSPerspective extends CSSTransformComponent {length: CSSPerspectiveValue;

constructor(length: CSSPerspectiveValue): void;
}

declare class CSSRGB extends CSSColorValue {alpha: CSSColorPercent;
b: CSSColorRGBComp;
g: CSSColorRGBComp;
r: CSSColorRGBComp;

constructor(r: CSSColorRGBComp, g: CSSColorRGBComp, b: CSSColorRGBComp, alpha?: CSSColorPercent): void;
}

declare class CSSRotate extends CSSTransformComponent {angle: CSSNumericValue;
x: CSSNumberish;
y: CSSNumberish;
z: CSSNumberish;

constructor(angle: CSSNumericValue): void;
constructor(x: CSSNumberish, y: CSSNumberish, z: CSSNumberish, angle: CSSNumericValue): void;
}

declare class CSSScale extends CSSTransformComponent {x: CSSNumberish;
y: CSSNumberish;
z: CSSNumberish;

constructor(x: CSSNumberish, y: CSSNumberish, z?: CSSNumberish): void;
}

declare class CSSSkew extends CSSTransformComponent {ax: CSSNumericValue;
ay: CSSNumericValue;

constructor(ax: CSSNumericValue, ay: CSSNumericValue): void;
}

declare class CSSSkewX extends CSSTransformComponent {ax: CSSNumericValue;

constructor(ax: CSSNumericValue): void;
}

declare class CSSSkewY extends CSSTransformComponent {ay: CSSNumericValue;

constructor(ay: CSSNumericValue): void;
}

/* partial */ interface CSSStyleRule {+styleMap: StylePropertyMap;
}

declare class CSSStyleValue {static parse(property: string, cssText: string): CSSStyleValue;
static parseAll(property: string, cssText: string): Array<CSSStyleValue>;
toString(): string;
}

declare class CSSTransformComponent {is2D: boolean;

toString(): string;
toMatrix(): DOMMatrix;
}

declare class CSSTransformValue extends CSSStyleValue {+is2D: boolean;
+length: number;

constructor(transforms: Array<CSSTransformComponent>): void;

@@iterator(): Iterator<CSSTransformComponent>;

(index: number): CSSTransformComponent;
(index: number, val: CSSTransformComponent): CSSTransformComponent;
toMatrix(): DOMMatrix;
}

declare class CSSTranslate extends CSSTransformComponent {x: CSSNumericValue;
y: CSSNumericValue;
z: CSSNumericValue;

constructor(x: CSSNumericValue, y: CSSNumericValue, z?: CSSNumericValue): void;
}

declare class CSSUnitValue extends CSSNumericValue {+unit: string;
value: number;

constructor(value: number, unit: string): void;
}

declare class CSSUnparsedValue extends CSSStyleValue {+length: number;

constructor(members: Array<CSSUnparsedSegment>): void;

@@iterator(): Iterator<CSSUnparsedSegment>;

(index: number): CSSUnparsedSegment;
(index: number, val: CSSUnparsedSegment): CSSUnparsedSegment;
}

declare class CSSVariableReferenceValue {+fallback: CSSUnparsedValue | null;
variable: string;

constructor(variable: string, fallback?: CSSUnparsedValue | null): void;
}

/* partial */ interface Element {computedStyleMap(): StylePropertyMapReadOnly;
}

declare class StylePropertyMap extends StylePropertyMapReadOnly {append(property: string, values: CSSStyleValue | string): void;
clear(): void;
delete(property: string): void;
set(property: string, values: CSSStyleValue | string): void;
}

declare class StylePropertyMapReadOnly {+size: number;

@@iterator(): Iterator<string, Array<CSSStyleValue>>;

get(property: string): void | CSSStyleValue;
getAll(property: string): Array<CSSStyleValue>;
has(property: string): boolean;
}

/* partial */ declare class mixin$ElementCSSInlineStyle {+attributeStyleMap: StylePropertyMap;
}
