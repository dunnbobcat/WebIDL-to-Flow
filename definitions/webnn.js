type MLDataTypeList = Array<MLOperandDataType>;

type MLNamedOperands = {[string]: MLOperand};

type MLNamedTensors = {[string]: MLTensor};

type MLNumber = bigint | number;

type MLConv2dFilterOperandLayout = 'oihw' | 'hwio' | 'ohwi' | 'ihwo';

type MLConvTranspose2dFilterOperandLayout = 'iohw' | 'hwoi' | 'ohwi';

type MLGruWeightLayout = 'zrn' | 'rzn';

type MLInputOperandLayout = 'nchw' | 'nhwc';

type MLInterpolationMode = 'nearest-neighbor' | 'linear';

type MLLstmWeightLayout = 'iofg' | 'ifgo';

type MLOperandDataType =
  | 'float32'
  | 'float16'
  | 'int32'
  | 'uint32'
  | 'int64'
  | 'uint64'
  | 'int8'
  | 'uint8';

type MLPaddingMode = 'constant' | 'edge' | 'reflection';

type MLPowerPreference = 'default' | 'high-performance' | 'low-power';

type MLRecurrentNetworkActivation = 'relu' | 'sigmoid' | 'tanh';

type MLRecurrentNetworkDirection = 'forward' | 'backward' | 'both';

type MLRoundingType = 'floor' | 'ceil';

type MLArgMinMaxOptions = {
  ...MLOperatorOptions,
  keepDimensions: boolean,
  outputDataType: MLOperandDataType,
};

type MLBatchNormalizationOptions = {
  ...MLOperatorOptions,
  axis: number,
  bias: MLOperand,
  epsilon: number,
  scale: MLOperand,
};

type MLBatchNormalizationSupportLimits = {
  bias: MLTensorLimits,
  input: MLTensorLimits,
  mean: MLTensorLimits,
  output: MLDataTypeLimits,
  scale: MLTensorLimits,
  variance: MLTensorLimits,
};

type MLBinarySupportLimits = {
  a: MLTensorLimits,
  b: MLTensorLimits,
  output: MLDataTypeLimits,
};

type MLClampOptions = {
  ...MLOperatorOptions,
  maxValue: MLNumber,
  minValue: MLNumber,
};

type MLConcatSupportLimits = {
  inputs: MLTensorLimits,
  output: MLDataTypeLimits,
};

type MLContextLostInfo = {
  message: string,
};

type MLContextOptions = {
  powerPreference: MLPowerPreference,
};

type MLConv2dOptions = {
  ...MLOperatorOptions,
  bias: MLOperand,
  dilations: Array<number>,
  filterLayout: MLConv2dFilterOperandLayout,
  groups: number,
  inputLayout: MLInputOperandLayout,
  padding: Array<number>,
  strides: Array<number>,
};

type MLConv2dSupportLimits = {
  bias: MLTensorLimits,
  filter: MLTensorLimits,
  input: MLTensorLimits,
  output: MLDataTypeLimits,
};

type MLConvTranspose2dOptions = {
  ...MLOperatorOptions,
  bias: MLOperand,
  dilations: Array<number>,
  filterLayout: MLConvTranspose2dFilterOperandLayout,
  groups: number,
  inputLayout: MLInputOperandLayout,
  outputPadding: Array<number>,
  outputSizes: Array<number>,
  padding: Array<number>,
  strides: Array<number>,
};

type MLCumulativeSumOptions = {
  ...MLOperatorOptions,
  exclusive: boolean,
  reversed: boolean,
};

type MLDataTypeLimits = {
  dataTypes: MLDataTypeList,
};

type MLEluOptions = {
  ...MLOperatorOptions,
  alpha: number,
};

type MLGatherOptions = {
  ...MLOperatorOptions,
  axis: number,
};

type MLGatherSupportLimits = {
  indices: MLTensorLimits,
  input: MLTensorLimits,
  output: MLDataTypeLimits,
};

type MLGemmOptions = {
  ...MLOperatorOptions,
  alpha: number,
  aTranspose: boolean,
  beta: number,
  bTranspose: boolean,
  c: MLOperand,
};

type MLGemmSupportLimits = {
  a: MLTensorLimits,
  b: MLTensorLimits,
  c: MLTensorLimits,
  output: MLDataTypeLimits,
};

type MLGruCellOptions = {
  ...MLOperatorOptions,
  activations: Array<MLRecurrentNetworkActivation>,
  bias: MLOperand,
  layout: MLGruWeightLayout,
  recurrentBias: MLOperand,
  resetAfter: boolean,
};

type MLGruCellSupportLimits = {
  bias: MLTensorLimits,
  hiddenState: MLTensorLimits,
  input: MLTensorLimits,
  output: MLDataTypeLimits,
  recurrentBias: MLTensorLimits,
  recurrentWeight: MLTensorLimits,
  weight: MLTensorLimits,
};

type MLGruOptions = {
  ...MLOperatorOptions,
  activations: Array<MLRecurrentNetworkActivation>,
  bias: MLOperand,
  direction: MLRecurrentNetworkDirection,
  initialHiddenState: MLOperand,
  layout: MLGruWeightLayout,
  recurrentBias: MLOperand,
  resetAfter: boolean,
  returnSequence: boolean,
};

type MLGruSupportLimits = {
  bias: MLTensorLimits,
  initialHiddenState: MLTensorLimits,
  input: MLTensorLimits,
  outputs: MLDataTypeLimits,
  recurrentBias: MLTensorLimits,
  recurrentWeight: MLTensorLimits,
  weight: MLTensorLimits,
};

type MLHardSigmoidOptions = {
  ...MLOperatorOptions,
  alpha: number,
  beta: number,
};

type MLInstanceNormalizationOptions = {
  ...MLOperatorOptions,
  bias: MLOperand,
  epsilon: number,
  layout: MLInputOperandLayout,
  scale: MLOperand,
};

type MLLayerNormalizationOptions = {
  ...MLOperatorOptions,
  axes: Array<number>,
  bias: MLOperand,
  epsilon: number,
  scale: MLOperand,
};

type MLLeakyReluOptions = {
  ...MLOperatorOptions,
  alpha: number,
};

type MLLinearOptions = {
  ...MLOperatorOptions,
  alpha: number,
  beta: number,
};

type MLLogicalNotSupportLimits = {
  a: MLTensorLimits,
  output: MLDataTypeLimits,
};

type MLLstmCellOptions = {
  ...MLOperatorOptions,
  activations: Array<MLRecurrentNetworkActivation>,
  bias: MLOperand,
  layout: MLLstmWeightLayout,
  peepholeWeight: MLOperand,
  recurrentBias: MLOperand,
};

type MLLstmCellSupportLimits = {
  bias: MLTensorLimits,
  cellState: MLTensorLimits,
  hiddenState: MLTensorLimits,
  input: MLTensorLimits,
  outputs: MLDataTypeLimits,
  peepholeWeight: MLTensorLimits,
  recurrentBias: MLTensorLimits,
  recurrentWeight: MLTensorLimits,
  weight: MLTensorLimits,
};

type MLLstmOptions = {
  ...MLOperatorOptions,
  activations: Array<MLRecurrentNetworkActivation>,
  bias: MLOperand,
  direction: MLRecurrentNetworkDirection,
  initialCellState: MLOperand,
  initialHiddenState: MLOperand,
  layout: MLLstmWeightLayout,
  peepholeWeight: MLOperand,
  recurrentBias: MLOperand,
  returnSequence: boolean,
};

type MLLstmSupportLimits = {
  bias: MLTensorLimits,
  initialCellState: MLTensorLimits,
  initialHiddenState: MLTensorLimits,
  input: MLTensorLimits,
  outputs: MLDataTypeLimits,
  peepholeWeight: MLTensorLimits,
  recurrentBias: MLTensorLimits,
  recurrentWeight: MLTensorLimits,
  weight: MLTensorLimits,
};

type MLNormalizationSupportLimits = {
  bias: MLTensorLimits,
  input: MLTensorLimits,
  output: MLDataTypeLimits,
  scale: MLTensorLimits,
};

type MLOperandDescriptor = {
  dataType: MLOperandDataType,
  shape: Array<number>,
};

type MLOperatorOptions = {
  label: string,
};

type MLOpSupportLimits = {
  abs: MLSingleInputSupportLimits,
  add: MLBinarySupportLimits,
  argMax: MLSingleInputSupportLimits,
  argMin: MLSingleInputSupportLimits,
  averagePool2d: MLSingleInputSupportLimits,
  batchNormalization: MLBatchNormalizationSupportLimits,
  cast: MLSingleInputSupportLimits,
  ceil: MLSingleInputSupportLimits,
  clamp: MLSingleInputSupportLimits,
  concat: MLConcatSupportLimits,
  constant: MLDataTypeLimits,
  conv2d: MLConv2dSupportLimits,
  convTranspose2d: MLConv2dSupportLimits,
  cos: MLSingleInputSupportLimits,
  cumulativeSum: MLSingleInputSupportLimits,
  dequantizeLinear: MLQuantizeDequantizeLinearSupportLimits,
  div: MLBinarySupportLimits,
  elu: MLSingleInputSupportLimits,
  equal: MLBinarySupportLimits,
  erf: MLSingleInputSupportLimits,
  exp: MLSingleInputSupportLimits,
  expand: MLSingleInputSupportLimits,
  floor: MLSingleInputSupportLimits,
  gather: MLGatherSupportLimits,
  gatherElements: MLGatherSupportLimits,
  gatherND: MLGatherSupportLimits,
  gelu: MLSingleInputSupportLimits,
  gemm: MLGemmSupportLimits,
  greater: MLBinarySupportLimits,
  greaterOrEqual: MLBinarySupportLimits,
  gru: MLGruSupportLimits,
  gruCell: MLGruCellSupportLimits,
  hardSigmoid: MLSingleInputSupportLimits,
  hardSwish: MLSingleInputSupportLimits,
  identity: MLSingleInputSupportLimits,
  input: MLDataTypeLimits,
  instanceNormalization: MLNormalizationSupportLimits,
  l2Pool2d: MLSingleInputSupportLimits,
  layerNormalization: MLNormalizationSupportLimits,
  leakyRelu: MLSingleInputSupportLimits,
  lesser: MLBinarySupportLimits,
  lesserOrEqual: MLBinarySupportLimits,
  linear: MLSingleInputSupportLimits,
  log: MLSingleInputSupportLimits,
  logicalAnd: MLBinarySupportLimits,
  logicalNot: MLLogicalNotSupportLimits,
  logicalOr: MLBinarySupportLimits,
  logicalXor: MLBinarySupportLimits,
  lstm: MLLstmSupportLimits,
  lstmCell: MLLstmCellSupportLimits,
  matmul: MLBinarySupportLimits,
  max: MLBinarySupportLimits,
  maxPool2d: MLSingleInputSupportLimits,
  maxTensorByteLength: number,
  min: MLBinarySupportLimits,
  mul: MLBinarySupportLimits,
  neg: MLSingleInputSupportLimits,
  notEqual: MLBinarySupportLimits,
  output: MLDataTypeLimits,
  pad: MLSingleInputSupportLimits,
  pow: MLBinarySupportLimits,
  preferredInputLayout: MLInputOperandLayout,
  prelu: MLPreluSupportLimits,
  quantizeLinear: MLQuantizeDequantizeLinearSupportLimits,
  reciprocal: MLSingleInputSupportLimits,
  reduceL1: MLSingleInputSupportLimits,
  reduceL2: MLSingleInputSupportLimits,
  reduceLogSum: MLSingleInputSupportLimits,
  reduceLogSumExp: MLSingleInputSupportLimits,
  reduceMax: MLSingleInputSupportLimits,
  reduceMean: MLSingleInputSupportLimits,
  reduceMin: MLSingleInputSupportLimits,
  reduceProduct: MLSingleInputSupportLimits,
  reduceSum: MLSingleInputSupportLimits,
  reduceSumSquare: MLSingleInputSupportLimits,
  relu: MLSingleInputSupportLimits,
  resample2d: MLSingleInputSupportLimits,
  reshape: MLSingleInputSupportLimits,
  reverse: MLSingleInputSupportLimits,
  scatterElements: MLScatterSupportLimits,
  scatterND: MLScatterSupportLimits,
  sigmoid: MLSingleInputSupportLimits,
  sign: MLSingleInputSupportLimits,
  sin: MLSingleInputSupportLimits,
  slice: MLSingleInputSupportLimits,
  softmax: MLSingleInputSupportLimits,
  softplus: MLSingleInputSupportLimits,
  softsign: MLSingleInputSupportLimits,
  split: MLSplitSupportLimits,
  sqrt: MLSingleInputSupportLimits,
  sub: MLBinarySupportLimits,
  tan: MLSingleInputSupportLimits,
  tanh: MLSingleInputSupportLimits,
  tile: MLSingleInputSupportLimits,
  transpose: MLSingleInputSupportLimits,
  triangular: MLSingleInputSupportLimits,
  where: MLWhereSupportLimits,
};

type MLPadOptions = {
  ...MLOperatorOptions,
  mode: MLPaddingMode,
  value: MLNumber,
};

type MLPool2dOptions = {
  ...MLOperatorOptions,
  dilations: Array<number>,
  layout: MLInputOperandLayout,
  outputSizes: Array<number>,
  padding: Array<number>,
  roundingType: MLRoundingType,
  strides: Array<number>,
  windowDimensions: Array<number>,
};

type MLPreluSupportLimits = {
  input: MLTensorLimits,
  output: MLDataTypeLimits,
  slope: MLTensorLimits,
};

type MLQuantizeDequantizeLinearSupportLimits = {
  input: MLTensorLimits,
  output: MLDataTypeLimits,
  scale: MLTensorLimits,
  zeroPoint: MLTensorLimits,
};

type MLRankRange = {
  max: number,
  min: number,
};

type MLReduceOptions = {
  ...MLOperatorOptions,
  axes: Array<number>,
  keepDimensions: boolean,
};

type MLResample2dOptions = {
  ...MLOperatorOptions,
  axes: Array<number>,
  mode: MLInterpolationMode,
  scales: Array<number>,
  sizes: Array<number>,
};

type MLReverseOptions = {
  ...MLOperatorOptions,
  axes: Array<number>,
};

type MLScatterOptions = {
  ...MLOperatorOptions,
  axis: number,
};

type MLScatterSupportLimits = {
  indices: MLTensorLimits,
  input: MLTensorLimits,
  output: MLDataTypeLimits,
  updates: MLTensorLimits,
};

type MLSingleInputSupportLimits = {
  input: MLTensorLimits,
  output: MLDataTypeLimits,
};

type MLSliceOptions = {
  ...MLOperatorOptions,
  strides: Array<number>,
};

type MLSplitOptions = {
  ...MLOperatorOptions,
  axis: number,
};

type MLSplitSupportLimits = {
  input: MLTensorLimits,
  outputs: MLDataTypeLimits,
};

type MLTensorDescriptor = {
  ...MLOperandDescriptor,
  readable: boolean,
  writable: boolean,
};

type MLTensorLimits = {
  dataTypes: MLDataTypeList,
  rankRange: MLRankRange,
};

type MLTransposeOptions = {
  ...MLOperatorOptions,
  permutation: Array<number>,
};

type MLTriangularOptions = {
  ...MLOperatorOptions,
  diagonal: number,
  upper: boolean,
};

type MLWhereSupportLimits = {
  condition: MLTensorLimits,
  falseValue: MLTensorLimits,
  output: MLDataTypeLimits,
  trueValue: MLTensorLimits,
};

declare class ML {
  createContext(options?: MLContextOptions): Promise<MLContext>;
  createContext(gpuDevice: GPUDevice): Promise<MLContext>;
}

declare class MLContext {
  +lost: Promise<MLContextLostInfo>;

  createConstantTensor(
    descriptor: MLOperandDescriptor,
    inputData: AllowSharedBufferSource,
  ): Promise<MLTensor>;
  createTensor(descriptor: MLTensorDescriptor): Promise<MLTensor>;
  destroy(): void;
  dispatch(
    graph: MLGraph,
    inputs: MLNamedTensors,
    outputs: MLNamedTensors,
  ): void;
  opSupportLimits(): MLOpSupportLimits;
  readTensor(tensor: MLTensor): Promise<ArrayBuffer>;
  readTensor(
    tensor: MLTensor,
    outputData: AllowSharedBufferSource,
  ): Promise<void>;
  writeTensor(tensor: MLTensor, inputData: AllowSharedBufferSource): void;
}

declare class MLGraph {
  destroy(): void;
}

declare class MLGraphBuilder {
  constructor(context: MLContext): void;

  abs(input: MLOperand, options?: MLOperatorOptions): MLOperand;
  add(a: MLOperand, b: MLOperand, options?: MLOperatorOptions): MLOperand;
  argMax(
    input: MLOperand,
    axis: number,
    options?: MLArgMinMaxOptions,
  ): MLOperand;
  argMin(
    input: MLOperand,
    axis: number,
    options?: MLArgMinMaxOptions,
  ): MLOperand;
  averagePool2d(input: MLOperand, options?: MLPool2dOptions): MLOperand;
  batchNormalization(
    input: MLOperand,
    mean: MLOperand,
    variance: MLOperand,
    options?: MLBatchNormalizationOptions,
  ): MLOperand;
  build(outputs: MLNamedOperands): Promise<MLGraph>;
  cast(
    input: MLOperand,
    type: MLOperandDataType,
    options?: MLOperatorOptions,
  ): MLOperand;
  ceil(input: MLOperand, options?: MLOperatorOptions): MLOperand;
  clamp(input: MLOperand, options?: MLClampOptions): MLOperand;
  concat(
    inputs: Array<MLOperand>,
    axis: number,
    options?: MLOperatorOptions,
  ): MLOperand;
  constant(
    descriptor: MLOperandDescriptor,
    buffer: AllowSharedBufferSource,
  ): MLOperand;
  constant(type: MLOperandDataType, value: MLNumber): MLOperand;
  constant(tensor: MLTensor): MLOperand;
  conv2d(
    input: MLOperand,
    filter: MLOperand,
    options?: MLConv2dOptions,
  ): MLOperand;
  convTranspose2d(
    input: MLOperand,
    filter: MLOperand,
    options?: MLConvTranspose2dOptions,
  ): MLOperand;
  cos(input: MLOperand, options?: MLOperatorOptions): MLOperand;
  cumulativeSum(
    input: MLOperand,
    axis: number,
    options?: MLCumulativeSumOptions,
  ): MLOperand;
  dequantizeLinear(
    input: MLOperand,
    scale: MLOperand,
    zeroPoint: MLOperand,
    options?: MLOperatorOptions,
  ): MLOperand;
  div(a: MLOperand, b: MLOperand, options?: MLOperatorOptions): MLOperand;
  elu(input: MLOperand, options?: MLEluOptions): MLOperand;
  equal(a: MLOperand, b: MLOperand, options?: MLOperatorOptions): MLOperand;
  erf(input: MLOperand, options?: MLOperatorOptions): MLOperand;
  exp(input: MLOperand, options?: MLOperatorOptions): MLOperand;
  expand(
    input: MLOperand,
    newShape: Array<number>,
    options?: MLOperatorOptions,
  ): MLOperand;
  floor(input: MLOperand, options?: MLOperatorOptions): MLOperand;
  gather(
    input: MLOperand,
    indices: MLOperand,
    options?: MLGatherOptions,
  ): MLOperand;
  gatherElements(
    input: MLOperand,
    indices: MLOperand,
    options?: MLGatherOptions,
  ): MLOperand;
  gatherND(
    input: MLOperand,
    indices: MLOperand,
    options?: MLOperatorOptions,
  ): MLOperand;
  gelu(input: MLOperand, options?: MLOperatorOptions): MLOperand;
  gemm(a: MLOperand, b: MLOperand, options?: MLGemmOptions): MLOperand;
  greater(a: MLOperand, b: MLOperand, options?: MLOperatorOptions): MLOperand;
  greaterOrEqual(
    a: MLOperand,
    b: MLOperand,
    options?: MLOperatorOptions,
  ): MLOperand;
  gru(
    input: MLOperand,
    weight: MLOperand,
    recurrentWeight: MLOperand,
    steps: number,
    hiddenSize: number,
    options?: MLGruOptions,
  ): Array<MLOperand>;
  gruCell(
    input: MLOperand,
    weight: MLOperand,
    recurrentWeight: MLOperand,
    hiddenState: MLOperand,
    hiddenSize: number,
    options?: MLGruCellOptions,
  ): MLOperand;
  hardSigmoid(input: MLOperand, options?: MLHardSigmoidOptions): MLOperand;
  hardSwish(input: MLOperand, options?: MLOperatorOptions): MLOperand;
  identity(input: MLOperand, options?: MLOperatorOptions): MLOperand;
  input(name: string, descriptor: MLOperandDescriptor): MLOperand;
  instanceNormalization(
    input: MLOperand,
    options?: MLInstanceNormalizationOptions,
  ): MLOperand;
  l2Pool2d(input: MLOperand, options?: MLPool2dOptions): MLOperand;
  layerNormalization(
    input: MLOperand,
    options?: MLLayerNormalizationOptions,
  ): MLOperand;
  leakyRelu(input: MLOperand, options?: MLLeakyReluOptions): MLOperand;
  lesser(a: MLOperand, b: MLOperand, options?: MLOperatorOptions): MLOperand;
  lesserOrEqual(
    a: MLOperand,
    b: MLOperand,
    options?: MLOperatorOptions,
  ): MLOperand;
  linear(input: MLOperand, options?: MLLinearOptions): MLOperand;
  log(input: MLOperand, options?: MLOperatorOptions): MLOperand;
  logicalAnd(
    a: MLOperand,
    b: MLOperand,
    options?: MLOperatorOptions,
  ): MLOperand;
  logicalNot(a: MLOperand, options?: MLOperatorOptions): MLOperand;
  logicalOr(a: MLOperand, b: MLOperand, options?: MLOperatorOptions): MLOperand;
  logicalXor(
    a: MLOperand,
    b: MLOperand,
    options?: MLOperatorOptions,
  ): MLOperand;
  lstm(
    input: MLOperand,
    weight: MLOperand,
    recurrentWeight: MLOperand,
    steps: number,
    hiddenSize: number,
    options?: MLLstmOptions,
  ): Array<MLOperand>;
  lstmCell(
    input: MLOperand,
    weight: MLOperand,
    recurrentWeight: MLOperand,
    hiddenState: MLOperand,
    cellState: MLOperand,
    hiddenSize: number,
    options?: MLLstmCellOptions,
  ): Array<MLOperand>;
  matmul(a: MLOperand, b: MLOperand, options?: MLOperatorOptions): MLOperand;
  max(a: MLOperand, b: MLOperand, options?: MLOperatorOptions): MLOperand;
  maxPool2d(input: MLOperand, options?: MLPool2dOptions): MLOperand;
  min(a: MLOperand, b: MLOperand, options?: MLOperatorOptions): MLOperand;
  mul(a: MLOperand, b: MLOperand, options?: MLOperatorOptions): MLOperand;
  neg(input: MLOperand, options?: MLOperatorOptions): MLOperand;
  notEqual(a: MLOperand, b: MLOperand, options?: MLOperatorOptions): MLOperand;
  pad(
    input: MLOperand,
    beginningPadding: Array<number>,
    endingPadding: Array<number>,
    options?: MLPadOptions,
  ): MLOperand;
  pow(a: MLOperand, b: MLOperand, options?: MLOperatorOptions): MLOperand;
  prelu(
    input: MLOperand,
    slope: MLOperand,
    options?: MLOperatorOptions,
  ): MLOperand;
  quantizeLinear(
    input: MLOperand,
    scale: MLOperand,
    zeroPoint: MLOperand,
    options?: MLOperatorOptions,
  ): MLOperand;
  reciprocal(input: MLOperand, options?: MLOperatorOptions): MLOperand;
  reduceL1(input: MLOperand, options?: MLReduceOptions): MLOperand;
  reduceL2(input: MLOperand, options?: MLReduceOptions): MLOperand;
  reduceLogSum(input: MLOperand, options?: MLReduceOptions): MLOperand;
  reduceLogSumExp(input: MLOperand, options?: MLReduceOptions): MLOperand;
  reduceMax(input: MLOperand, options?: MLReduceOptions): MLOperand;
  reduceMean(input: MLOperand, options?: MLReduceOptions): MLOperand;
  reduceMin(input: MLOperand, options?: MLReduceOptions): MLOperand;
  reduceProduct(input: MLOperand, options?: MLReduceOptions): MLOperand;
  reduceSum(input: MLOperand, options?: MLReduceOptions): MLOperand;
  reduceSumSquare(input: MLOperand, options?: MLReduceOptions): MLOperand;
  relu(input: MLOperand, options?: MLOperatorOptions): MLOperand;
  resample2d(input: MLOperand, options?: MLResample2dOptions): MLOperand;
  reshape(
    input: MLOperand,
    newShape: Array<number>,
    options?: MLOperatorOptions,
  ): MLOperand;
  reverse(input: MLOperand, options?: MLReverseOptions): MLOperand;
  scatterElements(
    input: MLOperand,
    indices: MLOperand,
    updates: MLOperand,
    options?: MLScatterOptions,
  ): MLOperand;
  scatterND(
    input: MLOperand,
    indices: MLOperand,
    updates: MLOperand,
    options?: MLOperatorOptions,
  ): MLOperand;
  sigmoid(input: MLOperand, options?: MLOperatorOptions): MLOperand;
  sign(input: MLOperand, options?: MLOperatorOptions): MLOperand;
  sin(input: MLOperand, options?: MLOperatorOptions): MLOperand;
  slice(
    input: MLOperand,
    starts: Array<number>,
    sizes: Array<number>,
    options?: MLSliceOptions,
  ): MLOperand;
  softmax(
    input: MLOperand,
    axis: number,
    options?: MLOperatorOptions,
  ): MLOperand;
  softplus(input: MLOperand, options?: MLOperatorOptions): MLOperand;
  softsign(input: MLOperand, options?: MLOperatorOptions): MLOperand;
  split(
    input: MLOperand,
    splits: number | Array<number>,
    options?: MLSplitOptions,
  ): Array<MLOperand>;
  sqrt(input: MLOperand, options?: MLOperatorOptions): MLOperand;
  sub(a: MLOperand, b: MLOperand, options?: MLOperatorOptions): MLOperand;
  tan(input: MLOperand, options?: MLOperatorOptions): MLOperand;
  tanh(input: MLOperand, options?: MLOperatorOptions): MLOperand;
  tile(
    input: MLOperand,
    repetitions: Array<number>,
    options?: MLOperatorOptions,
  ): MLOperand;
  transpose(input: MLOperand, options?: MLTransposeOptions): MLOperand;
  triangular(input: MLOperand, options?: MLTriangularOptions): MLOperand;
  where(
    condition: MLOperand,
    trueValue: MLOperand,
    falseValue: MLOperand,
    options?: MLOperatorOptions,
  ): MLOperand;
}

declare class MLOperand {
  +dataType: MLOperandDataType;
  +shape: $ReadOnlyArray<number>;
}

declare class MLTensor {
  +constant: boolean;
  +dataType: MLOperandDataType;
  +readable: boolean;
  +shape: $ReadOnlyArray<number>;
  +writable: boolean;

  destroy(): void;
}

declare class mixin$NavigatorML {
  +ml: ML;
}
