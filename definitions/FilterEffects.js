interface SVGFilterPrimitiveStandardAttributes {
  +height: SVGAnimatedLength;
  +result: SVGAnimatedString;
  +width: SVGAnimatedLength;
  +x: SVGAnimatedLength;
  +y: SVGAnimatedLength;
}

declare class SVGComponentTransferFunctionElement extends SVGElement {
  static +SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE: 3;
  static +SVG_FECOMPONENTTRANSFER_TYPE_GAMMA: 5;
  static +SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY: 1;
  static +SVG_FECOMPONENTTRANSFER_TYPE_LINEAR: 4;
  static +SVG_FECOMPONENTTRANSFER_TYPE_TABLE: 2;
  static +SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN: 0;

  +amplitude: SVGAnimatedNumber;
  +exponent: SVGAnimatedNumber;
  +intercept: SVGAnimatedNumber;
  +offset: SVGAnimatedNumber;
  +slope: SVGAnimatedNumber;
  +tableValues: SVGAnimatedNumberList;
  +type: SVGAnimatedEnumeration;
}

declare class SVGFEBlendElement
  extends SVGElement
  mixins SVGFilterPrimitiveStandardAttributes
{
  static +SVG_FEBLEND_MODE_COLOR: 15;
  static +SVG_FEBLEND_MODE_COLOR_BURN: 8;
  static +SVG_FEBLEND_MODE_COLOR_DODGE: 7;
  static +SVG_FEBLEND_MODE_DARKEN: 4;
  static +SVG_FEBLEND_MODE_DIFFERENCE: 11;
  static +SVG_FEBLEND_MODE_EXCLUSION: 12;
  static +SVG_FEBLEND_MODE_HARD_LIGHT: 9;
  static +SVG_FEBLEND_MODE_HUE: 13;
  static +SVG_FEBLEND_MODE_LIGHTEN: 5;
  static +SVG_FEBLEND_MODE_LUMINOSITY: 16;
  static +SVG_FEBLEND_MODE_MULTIPLY: 2;
  static +SVG_FEBLEND_MODE_NORMAL: 1;
  static +SVG_FEBLEND_MODE_OVERLAY: 6;
  static +SVG_FEBLEND_MODE_SATURATION: 14;
  static +SVG_FEBLEND_MODE_SCREEN: 3;
  static +SVG_FEBLEND_MODE_SOFT_LIGHT: 10;
  static +SVG_FEBLEND_MODE_UNKNOWN: 0;

  +in1: SVGAnimatedString;
  +in2: SVGAnimatedString;
  +mode: SVGAnimatedEnumeration;
}

declare class SVGFEColorMatrixElement
  extends SVGElement
  mixins SVGFilterPrimitiveStandardAttributes
{
  static +SVG_FECOLORMATRIX_TYPE_HUEROTATE: 3;
  static +SVG_FECOLORMATRIX_TYPE_LUMINANCETOALPHA: 4;
  static +SVG_FECOLORMATRIX_TYPE_MATRIX: 1;
  static +SVG_FECOLORMATRIX_TYPE_SATURATE: 2;
  static +SVG_FECOLORMATRIX_TYPE_UNKNOWN: 0;

  +in1: SVGAnimatedString;
  +type: SVGAnimatedEnumeration;
  +values: SVGAnimatedNumberList;
}

declare class SVGFEComponentTransferElement
  extends SVGElement
  mixins SVGFilterPrimitiveStandardAttributes
{
  +in1: SVGAnimatedString;
}

declare class SVGFECompositeElement
  extends SVGElement
  mixins SVGFilterPrimitiveStandardAttributes
{
  static +SVG_FECOMPOSITE_OPERATOR_ARITHMETIC: 6;
  static +SVG_FECOMPOSITE_OPERATOR_ATOP: 4;
  static +SVG_FECOMPOSITE_OPERATOR_IN: 2;
  static +SVG_FECOMPOSITE_OPERATOR_OUT: 3;
  static +SVG_FECOMPOSITE_OPERATOR_OVER: 1;
  static +SVG_FECOMPOSITE_OPERATOR_UNKNOWN: 0;
  static +SVG_FECOMPOSITE_OPERATOR_XOR: 5;

  +in1: SVGAnimatedString;
  +in2: SVGAnimatedString;
  +k1: SVGAnimatedNumber;
  +k2: SVGAnimatedNumber;
  +k3: SVGAnimatedNumber;
  +k4: SVGAnimatedNumber;
  +operator: SVGAnimatedEnumeration;
}

declare class SVGFEConvolveMatrixElement
  extends SVGElement
  mixins SVGFilterPrimitiveStandardAttributes
{
  static +SVG_EDGEMODE_DUPLICATE: 1;
  static +SVG_EDGEMODE_NONE: 3;
  static +SVG_EDGEMODE_UNKNOWN: 0;
  static +SVG_EDGEMODE_WRAP: 2;

  +bias: SVGAnimatedNumber;
  +divisor: SVGAnimatedNumber;
  +edgeMode: SVGAnimatedEnumeration;
  +in1: SVGAnimatedString;
  +kernelMatrix: SVGAnimatedNumberList;
  +kernelUnitLengthX: SVGAnimatedNumber;
  +kernelUnitLengthY: SVGAnimatedNumber;
  +orderX: SVGAnimatedInteger;
  +orderY: SVGAnimatedInteger;
  +preserveAlpha: SVGAnimatedBoolean;
  +targetX: SVGAnimatedInteger;
  +targetY: SVGAnimatedInteger;
}

declare class SVGFEDiffuseLightingElement
  extends SVGElement
  mixins SVGFilterPrimitiveStandardAttributes
{
  +diffuseConstant: SVGAnimatedNumber;
  +in1: SVGAnimatedString;
  +kernelUnitLengthX: SVGAnimatedNumber;
  +kernelUnitLengthY: SVGAnimatedNumber;
  +surfaceScale: SVGAnimatedNumber;
}

declare class SVGFEDisplacementMapElement
  extends SVGElement
  mixins SVGFilterPrimitiveStandardAttributes
{
  static +SVG_CHANNEL_A: 4;
  static +SVG_CHANNEL_B: 3;
  static +SVG_CHANNEL_G: 2;
  static +SVG_CHANNEL_R: 1;
  static +SVG_CHANNEL_UNKNOWN: 0;

  +in1: SVGAnimatedString;
  +in2: SVGAnimatedString;
  +scale: SVGAnimatedNumber;
  +xChannelSelector: SVGAnimatedEnumeration;
  +yChannelSelector: SVGAnimatedEnumeration;
}

interface SVGFEDistantLightElement extends SVGElement {
  +azimuth: SVGAnimatedNumber;
  +elevation: SVGAnimatedNumber;
}

declare class SVGFEDropShadowElement
  extends SVGElement
  mixins SVGFilterPrimitiveStandardAttributes
{
  +dx: SVGAnimatedNumber;
  +dy: SVGAnimatedNumber;
  +in1: SVGAnimatedString;
  +stdDeviationX: SVGAnimatedNumber;
  +stdDeviationY: SVGAnimatedNumber;

  setStdDeviation(stdDeviationX: float, stdDeviationY: float): void;
}

declare class SVGFEFloodElement
  extends SVGElement
  mixins SVGFilterPrimitiveStandardAttributes {}

interface SVGFEFuncAElement extends SVGComponentTransferFunctionElement {}

interface SVGFEFuncBElement extends SVGComponentTransferFunctionElement {}

interface SVGFEFuncGElement extends SVGComponentTransferFunctionElement {}

interface SVGFEFuncRElement extends SVGComponentTransferFunctionElement {}

declare class SVGFEGaussianBlurElement
  extends SVGElement
  mixins SVGFilterPrimitiveStandardAttributes
{
  static +SVG_EDGEMODE_DUPLICATE: 1;
  static +SVG_EDGEMODE_NONE: 3;
  static +SVG_EDGEMODE_UNKNOWN: 0;
  static +SVG_EDGEMODE_WRAP: 2;

  +edgeMode: SVGAnimatedEnumeration;
  +in1: SVGAnimatedString;
  +stdDeviationX: SVGAnimatedNumber;
  +stdDeviationY: SVGAnimatedNumber;

  setStdDeviation(stdDeviationX: float, stdDeviationY: float): void;
}

declare class SVGFEImageElement
  extends SVGElement
  mixins SVGFilterPrimitiveStandardAttributes, SVGURIReference
{
  +crossOrigin: SVGAnimatedString;
  +preserveAspectRatio: SVGAnimatedPreserveAspectRatio;
}

declare class SVGFEMergeElement
  extends SVGElement
  mixins SVGFilterPrimitiveStandardAttributes {}

interface SVGFEMergeNodeElement extends SVGElement {
  +in1: SVGAnimatedString;
}

declare class SVGFEMorphologyElement
  extends SVGElement
  mixins SVGFilterPrimitiveStandardAttributes
{
  static +SVG_MORPHOLOGY_OPERATOR_DILATE: 2;
  static +SVG_MORPHOLOGY_OPERATOR_ERODE: 1;
  static +SVG_MORPHOLOGY_OPERATOR_UNKNOWN: 0;

  +in1: SVGAnimatedString;
  +operator: SVGAnimatedEnumeration;
  +radiusX: SVGAnimatedNumber;
  +radiusY: SVGAnimatedNumber;
}

declare class SVGFEOffsetElement
  extends SVGElement
  mixins SVGFilterPrimitiveStandardAttributes
{
  +dx: SVGAnimatedNumber;
  +dy: SVGAnimatedNumber;
  +in1: SVGAnimatedString;
}

interface SVGFEPointLightElement extends SVGElement {
  +x: SVGAnimatedNumber;
  +y: SVGAnimatedNumber;
  +z: SVGAnimatedNumber;
}

declare class SVGFESpecularLightingElement
  extends SVGElement
  mixins SVGFilterPrimitiveStandardAttributes
{
  +in1: SVGAnimatedString;
  +kernelUnitLengthX: SVGAnimatedNumber;
  +kernelUnitLengthY: SVGAnimatedNumber;
  +specularConstant: SVGAnimatedNumber;
  +specularExponent: SVGAnimatedNumber;
  +surfaceScale: SVGAnimatedNumber;
}

interface SVGFESpotLightElement extends SVGElement {
  +limitingConeAngle: SVGAnimatedNumber;
  +pointsAtX: SVGAnimatedNumber;
  +pointsAtY: SVGAnimatedNumber;
  +pointsAtZ: SVGAnimatedNumber;
  +specularExponent: SVGAnimatedNumber;
  +x: SVGAnimatedNumber;
  +y: SVGAnimatedNumber;
  +z: SVGAnimatedNumber;
}

declare class SVGFETileElement
  extends SVGElement
  mixins SVGFilterPrimitiveStandardAttributes
{
  +in1: SVGAnimatedString;
}

declare class SVGFETurbulenceElement
  extends SVGElement
  mixins SVGFilterPrimitiveStandardAttributes
{
  static +SVG_STITCHTYPE_NOSTITCH: 2;
  static +SVG_STITCHTYPE_STITCH: 1;
  static +SVG_STITCHTYPE_UNKNOWN: 0;
  static +SVG_TURBULENCE_TYPE_FRACTALNOISE: 1;
  static +SVG_TURBULENCE_TYPE_TURBULENCE: 2;
  static +SVG_TURBULENCE_TYPE_UNKNOWN: 0;

  +baseFrequencyX: SVGAnimatedNumber;
  +baseFrequencyY: SVGAnimatedNumber;
  +numOctaves: SVGAnimatedInteger;
  +seed: SVGAnimatedNumber;
  +stitchTiles: SVGAnimatedEnumeration;
  +type: SVGAnimatedEnumeration;
}

declare class SVGFilterElement extends SVGElement mixins SVGURIReference {
  +filterUnits: SVGAnimatedEnumeration;
  +height: SVGAnimatedLength;
  +primitiveUnits: SVGAnimatedEnumeration;
  +width: SVGAnimatedLength;
  +x: SVGAnimatedLength;
  +y: SVGAnimatedLength;
}
