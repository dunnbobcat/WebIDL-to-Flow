type MLDataTypeList = Array<MLOperandDataType>;

type MLNamedOperands = string | MLOperand;

type MLNamedTensors = string | MLTensor;

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
  keepDimensions: boolean,
  label: string,
  outputDataType: MLOperandDataType,
};

type MLBatchNormalizationOptions = {
  axis: number,
  bias: MLOperand,
  epsilon: number,
  label: string,
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
  label: string,
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
  bias: MLOperand,
  dilations: Array<number>,
  filterLayout: MLConv2dFilterOperandLayout,
  groups: number,
  inputLayout: MLInputOperandLayout,
  label: string,
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
  bias: MLOperand,
  dilations: Array<number>,
  filterLayout: MLConvTranspose2dFilterOperandLayout,
  groups: number,
  inputLayout: MLInputOperandLayout,
  label: string,
  outputPadding: Array<number>,
  outputSizes: Array<number>,
  padding: Array<number>,
  strides: Array<number>,
};

type MLCumulativeSumOptions = {
  exclusive: boolean,
  label: string,
  reversed: boolean,
};

type MLDataTypeLimits = {
  dataTypes: MLDataTypeList,
};

type MLEluOptions = {
  alpha: number,
  label: string,
};

type MLGatherOptions = {
  axis: number,
  label: string,
};

type MLGatherSupportLimits = {
  indices: MLTensorLimits,
  input: MLTensorLimits,
  output: MLDataTypeLimits,
};

type MLGemmOptions = {
  alpha: number,
  aTranspose: boolean,
  beta: number,
  bTranspose: boolean,
  c: MLOperand,
  label: string,
};

type MLGemmSupportLimits = {
  a: MLTensorLimits,
  b: MLTensorLimits,
  c: MLTensorLimits,
  output: MLDataTypeLimits,
};

type MLGruCellOptions = {
  activations: Array<MLRecurrentNetworkActivation>,
  bias: MLOperand,
  label: string,
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
  activations: Array<MLRecurrentNetworkActivation>,
  bias: MLOperand,
  direction: MLRecurrentNetworkDirection,
  initialHiddenState: MLOperand,
  label: string,
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
  alpha: number,
  beta: number,
  label: string,
};

type MLInstanceNormalizationOptions = {
  bias: MLOperand,
  epsilon: number,
  label: string,
  layout: MLInputOperandLayout,
  scale: MLOperand,
};

type MLLayerNormalizationOptions = {
  axes: Array<number>,
  bias: MLOperand,
  epsilon: number,
  label: string,
  scale: MLOperand,
};

type MLLeakyReluOptions = {
  alpha: number,
  label: string,
};

type MLLinearOptions = {
  alpha: number,
  beta: number,
  label: string,
};

type MLLogicalNotSupportLimits = {
  a: MLTensorLimits,
  output: MLDataTypeLimits,
};

type MLLstmCellOptions = {
  activations: Array<MLRecurrentNetworkActivation>,
  bias: MLOperand,
  label: string,
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
  activations: Array<MLRecurrentNetworkActivation>,
  bias: MLOperand,
  direction: MLRecurrentNetworkDirection,
  initialCellState: MLOperand,
  initialHiddenState: MLOperand,
  label: string,
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

/* partial */ type MLOpSupportLimits = {
  argMax: MLSingleInputSupportLimits,
  argMin: MLSingleInputSupportLimits,
};

/* partial */ type MLOpSupportLimits = {
  batchNormalization: MLBatchNormalizationSupportLimits,
};

/* partial */ type MLOpSupportLimits = {
  cast: MLSingleInputSupportLimits,
};

/* partial */ type MLOpSupportLimits = {
  clamp: MLSingleInputSupportLimits,
};

/* partial */ type MLOpSupportLimits = {
  concat: MLConcatSupportLimits,
};

/* partial */ type MLOpSupportLimits = {
  conv2d: MLConv2dSupportLimits,
};

/* partial */ type MLOpSupportLimits = {
  convTranspose2d: MLConv2dSupportLimits,
};

/* partial */ type MLOpSupportLimits = {
  cumulativeSum: MLSingleInputSupportLimits,
};

/* partial */ type MLOpSupportLimits = {
  add: MLBinarySupportLimits,
  div: MLBinarySupportLimits,
  max: MLBinarySupportLimits,
  min: MLBinarySupportLimits,
  mul: MLBinarySupportLimits,
  pow: MLBinarySupportLimits,
  sub: MLBinarySupportLimits,
};

/* partial */ type MLOpSupportLimits = {
  equal: MLBinarySupportLimits,
  greater: MLBinarySupportLimits,
  greaterOrEqual: MLBinarySupportLimits,
  lesser: MLBinarySupportLimits,
  lesserOrEqual: MLBinarySupportLimits,
  logicalAnd: MLBinarySupportLimits,
  logicalNot: MLLogicalNotSupportLimits,
  logicalOr: MLBinarySupportLimits,
  logicalXor: MLBinarySupportLimits,
  notEqual: MLBinarySupportLimits,
};

/* partial */ type MLOpSupportLimits = {
  abs: MLSingleInputSupportLimits,
  ceil: MLSingleInputSupportLimits,
  cos: MLSingleInputSupportLimits,
  erf: MLSingleInputSupportLimits,
  exp: MLSingleInputSupportLimits,
  floor: MLSingleInputSupportLimits,
  identity: MLSingleInputSupportLimits,
  log: MLSingleInputSupportLimits,
  neg: MLSingleInputSupportLimits,
  reciprocal: MLSingleInputSupportLimits,
  sign: MLSingleInputSupportLimits,
  sin: MLSingleInputSupportLimits,
  sqrt: MLSingleInputSupportLimits,
  tan: MLSingleInputSupportLimits,
};

/* partial */ type MLOpSupportLimits = {
  dequantizeLinear: MLQuantizeDequantizeLinearSupportLimits,
};

/* partial */ type MLOpSupportLimits = {
  quantizeLinear: MLQuantizeDequantizeLinearSupportLimits,
};

/* partial */ type MLOpSupportLimits = {
  elu: MLSingleInputSupportLimits,
};

/* partial */ type MLOpSupportLimits = {
  expand: MLSingleInputSupportLimits,
};

/* partial */ type MLOpSupportLimits = {
  gather: MLGatherSupportLimits,
};

/* partial */ type MLOpSupportLimits = {
  gatherElements: MLGatherSupportLimits,
};

/* partial */ type MLOpSupportLimits = {
  gatherND: MLGatherSupportLimits,
};

/* partial */ type MLOpSupportLimits = {
  gelu: MLSingleInputSupportLimits,
};

/* partial */ type MLOpSupportLimits = {
  gemm: MLGemmSupportLimits,
};

/* partial */ type MLOpSupportLimits = {
  gru: MLGruSupportLimits,
};

/* partial */ type MLOpSupportLimits = {
  gruCell: MLGruCellSupportLimits,
};

/* partial */ type MLOpSupportLimits = {
  hardSigmoid: MLSingleInputSupportLimits,
};

/* partial */ type MLOpSupportLimits = {
  hardSwish: MLSingleInputSupportLimits,
};

/* partial */ type MLOpSupportLimits = {
  instanceNormalization: MLNormalizationSupportLimits,
};

/* partial */ type MLOpSupportLimits = {
  layerNormalization: MLNormalizationSupportLimits,
};

/* partial */ type MLOpSupportLimits = {
  leakyRelu: MLSingleInputSupportLimits,
};

/* partial */ type MLOpSupportLimits = {
  linear: MLSingleInputSupportLimits,
};

/* partial */ type MLOpSupportLimits = {
  lstm: MLLstmSupportLimits,
};

/* partial */ type MLOpSupportLimits = {
  lstmCell: MLLstmCellSupportLimits,
};

/* partial */ type MLOpSupportLimits = {
  matmul: MLBinarySupportLimits,
};

/* partial */ type MLOpSupportLimits = {
  pad: MLSingleInputSupportLimits,
};

/* partial */ type MLOpSupportLimits = {
  averagePool2d: MLSingleInputSupportLimits,
  l2Pool2d: MLSingleInputSupportLimits,
  maxPool2d: MLSingleInputSupportLimits,
};

/* partial */ type MLOpSupportLimits = {
  prelu: MLPreluSupportLimits,
};

/* partial */ type MLOpSupportLimits = {
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
};

/* partial */ type MLOpSupportLimits = {
  relu: MLSingleInputSupportLimits,
};

/* partial */ type MLOpSupportLimits = {
  resample2d: MLSingleInputSupportLimits,
};

/* partial */ type MLOpSupportLimits = {
  reshape: MLSingleInputSupportLimits,
};

/* partial */ type MLOpSupportLimits = {
  reverse: MLSingleInputSupportLimits,
};

/* partial */ type MLOpSupportLimits = {
  scatterElements: MLScatterSupportLimits,
};

/* partial */ type MLOpSupportLimits = {
  scatterND: MLScatterSupportLimits,
};

/* partial */ type MLOpSupportLimits = {
  sigmoid: MLSingleInputSupportLimits,
};

/* partial */ type MLOpSupportLimits = {
  slice: MLSingleInputSupportLimits,
};

/* partial */ type MLOpSupportLimits = {
  softmax: MLSingleInputSupportLimits,
};

/* partial */ type MLOpSupportLimits = {
  softplus: MLSingleInputSupportLimits,
};

/* partial */ type MLOpSupportLimits = {
  softsign: MLSingleInputSupportLimits,
};

/* partial */ type MLOpSupportLimits = {
  split: MLSplitSupportLimits,
};

/* partial */ type MLOpSupportLimits = {
  tanh: MLSingleInputSupportLimits,
};

/* partial */ type MLOpSupportLimits = {
  tile: MLSingleInputSupportLimits,
};

/* partial */ type MLOpSupportLimits = {
  transpose: MLSingleInputSupportLimits,
};

/* partial */ type MLOpSupportLimits = {
  triangular: MLSingleInputSupportLimits,
};

/* partial */ type MLOpSupportLimits = {
  where: MLWhereSupportLimits,
};

type MLPadOptions = {
  label: string,
  mode: MLPaddingMode,
  value: MLNumber,
};

type MLPool2dOptions = {
  dilations: Array<number>,
  label: string,
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
  axes: Array<number>,
  keepDimensions: boolean,
  label: string,
};

type MLResample2dOptions = {
  axes: Array<number>,
  label: string,
  mode: MLInterpolationMode,
  scales: Array<number>,
  sizes: Array<number>,
};

type MLReverseOptions = {
  axes: Array<number>,
  label: string,
};

type MLScatterOptions = {
  axis: number,
  label: string,
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
  label: string,
  strides: Array<number>,
};

type MLSplitOptions = {
  axis: number,
  label: string,
};

type MLSplitSupportLimits = {
  input: MLTensorLimits,
  outputs: MLDataTypeLimits,
};

type MLTensorDescriptor = {
  dataType: MLOperandDataType,
  readable: boolean,
  shape: Array<number>,
  writable: boolean,
};

type MLTensorLimits = {
  dataTypes: MLDataTypeList,
  rankRange: MLRankRange,
};

type MLTransposeOptions = {
  label: string,
  permutation: Array<number>,
};

type MLTriangularOptions = {
  diagonal: number,
  label: string,
  upper: boolean,
};

type MLWhereSupportLimits = {
  condition: MLTensorLimits,
  falseValue: MLTensorLimits,
  output: MLDataTypeLimits,
  trueValue: MLTensorLimits,
};

declare class ML {
  createContext(options?: MLContextOptions): MLContext;
  createContext(gpuDevice: GPUDevice): MLContext;
}

declare class MLContext {
  +lost: MLContextLostInfo;

  createConstantTensor(
    descriptor: MLOperandDescriptor,
    inputData: AllowSharedBufferSource,
  ): MLTensor;
  createTensor(descriptor: MLTensorDescriptor): MLTensor;
  destroy(): void;
  dispatch(
    graph: MLGraph,
    inputs: MLNamedTensors,
    outputs: MLNamedTensors,
  ): void;
  opSupportLimits(): MLOpSupportLimits;
  readTensor(tensor: MLTensor): ArrayBuffer;
  readTensor(tensor: MLTensor, outputData: AllowSharedBufferSource): void;
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
  build(outputs: MLNamedOperands): MLGraph;
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

/* partial */ declare class MLGraphBuilder {
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
}

/* partial */ declare class MLGraphBuilder {
  batchNormalization(
    input: MLOperand,
    mean: MLOperand,
    variance: MLOperand,
    options?: MLBatchNormalizationOptions,
  ): MLOperand;
}

/* partial */ declare class MLGraphBuilder {
  cast(
    input: MLOperand,
    type: MLOperandDataType,
    options?: MLOperatorOptions,
  ): MLOperand;
}

/* partial */ declare class MLGraphBuilder {
  clamp(input: MLOperand, options?: MLClampOptions): MLOperand;
}

/* partial */ declare class MLGraphBuilder {
  concat(
    inputs: Array<MLOperand>,
    axis: number,
    options?: MLOperatorOptions,
  ): MLOperand;
}

/* partial */ declare class MLGraphBuilder {
  conv2d(
    input: MLOperand,
    filter: MLOperand,
    options?: MLConv2dOptions,
  ): MLOperand;
}

/* partial */ declare class MLGraphBuilder {
  convTranspose2d(
    input: MLOperand,
    filter: MLOperand,
    options?: MLConvTranspose2dOptions,
  ): MLOperand;
}

/* partial */ declare class MLGraphBuilder {
  cumulativeSum(
    input: MLOperand,
    axis: number,
    options?: MLCumulativeSumOptions,
  ): MLOperand;
}

/* partial */ declare class MLGraphBuilder {
  add(a: MLOperand, b: MLOperand, options?: MLOperatorOptions): MLOperand;
  div(a: MLOperand, b: MLOperand, options?: MLOperatorOptions): MLOperand;
  max(a: MLOperand, b: MLOperand, options?: MLOperatorOptions): MLOperand;
  min(a: MLOperand, b: MLOperand, options?: MLOperatorOptions): MLOperand;
  mul(a: MLOperand, b: MLOperand, options?: MLOperatorOptions): MLOperand;
  pow(a: MLOperand, b: MLOperand, options?: MLOperatorOptions): MLOperand;
  sub(a: MLOperand, b: MLOperand, options?: MLOperatorOptions): MLOperand;
}

/* partial */ declare class MLGraphBuilder {
  equal(a: MLOperand, b: MLOperand, options?: MLOperatorOptions): MLOperand;
  greater(a: MLOperand, b: MLOperand, options?: MLOperatorOptions): MLOperand;
  greaterOrEqual(
    a: MLOperand,
    b: MLOperand,
    options?: MLOperatorOptions,
  ): MLOperand;
  lesser(a: MLOperand, b: MLOperand, options?: MLOperatorOptions): MLOperand;
  lesserOrEqual(
    a: MLOperand,
    b: MLOperand,
    options?: MLOperatorOptions,
  ): MLOperand;
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
  notEqual(a: MLOperand, b: MLOperand, options?: MLOperatorOptions): MLOperand;
}

/* partial */ declare class MLGraphBuilder {
  abs(input: MLOperand, options?: MLOperatorOptions): MLOperand;
  ceil(input: MLOperand, options?: MLOperatorOptions): MLOperand;
  cos(input: MLOperand, options?: MLOperatorOptions): MLOperand;
  erf(input: MLOperand, options?: MLOperatorOptions): MLOperand;
  exp(input: MLOperand, options?: MLOperatorOptions): MLOperand;
  floor(input: MLOperand, options?: MLOperatorOptions): MLOperand;
  identity(input: MLOperand, options?: MLOperatorOptions): MLOperand;
  log(input: MLOperand, options?: MLOperatorOptions): MLOperand;
  neg(input: MLOperand, options?: MLOperatorOptions): MLOperand;
  reciprocal(input: MLOperand, options?: MLOperatorOptions): MLOperand;
  sign(input: MLOperand, options?: MLOperatorOptions): MLOperand;
  sin(input: MLOperand, options?: MLOperatorOptions): MLOperand;
  sqrt(input: MLOperand, options?: MLOperatorOptions): MLOperand;
  tan(input: MLOperand, options?: MLOperatorOptions): MLOperand;
}

/* partial */ declare class MLGraphBuilder {
  dequantizeLinear(
    input: MLOperand,
    scale: MLOperand,
    zeroPoint: MLOperand,
    options?: MLOperatorOptions,
  ): MLOperand;
}

/* partial */ declare class MLGraphBuilder {
  quantizeLinear(
    input: MLOperand,
    scale: MLOperand,
    zeroPoint: MLOperand,
    options?: MLOperatorOptions,
  ): MLOperand;
}

/* partial */ declare class MLGraphBuilder {
  elu(input: MLOperand, options?: MLEluOptions): MLOperand;
}

/* partial */ declare class MLGraphBuilder {
  expand(
    input: MLOperand,
    newShape: Array<number>,
    options?: MLOperatorOptions,
  ): MLOperand;
}

/* partial */ declare class MLGraphBuilder {
  gather(
    input: MLOperand,
    indices: MLOperand,
    options?: MLGatherOptions,
  ): MLOperand;
}

/* partial */ declare class MLGraphBuilder {
  gatherElements(
    input: MLOperand,
    indices: MLOperand,
    options?: MLGatherOptions,
  ): MLOperand;
}

/* partial */ declare class MLGraphBuilder {
  gatherND(
    input: MLOperand,
    indices: MLOperand,
    options?: MLOperatorOptions,
  ): MLOperand;
}

/* partial */ declare class MLGraphBuilder {
  gelu(input: MLOperand, options?: MLOperatorOptions): MLOperand;
}

/* partial */ declare class MLGraphBuilder {
  gemm(a: MLOperand, b: MLOperand, options?: MLGemmOptions): MLOperand;
}

/* partial */ declare class MLGraphBuilder {
  gru(
    input: MLOperand,
    weight: MLOperand,
    recurrentWeight: MLOperand,
    steps: number,
    hiddenSize: number,
    options?: MLGruOptions,
  ): Array<MLOperand>;
}

/* partial */ declare class MLGraphBuilder {
  gruCell(
    input: MLOperand,
    weight: MLOperand,
    recurrentWeight: MLOperand,
    hiddenState: MLOperand,
    hiddenSize: number,
    options?: MLGruCellOptions,
  ): MLOperand;
}

/* partial */ declare class MLGraphBuilder {
  hardSigmoid(input: MLOperand, options?: MLHardSigmoidOptions): MLOperand;
}

/* partial */ declare class MLGraphBuilder {
  hardSwish(input: MLOperand, options?: MLOperatorOptions): MLOperand;
}

/* partial */ declare class MLGraphBuilder {
  instanceNormalization(
    input: MLOperand,
    options?: MLInstanceNormalizationOptions,
  ): MLOperand;
}

/* partial */ declare class MLGraphBuilder {
  layerNormalization(
    input: MLOperand,
    options?: MLLayerNormalizationOptions,
  ): MLOperand;
}

/* partial */ declare class MLGraphBuilder {
  leakyRelu(input: MLOperand, options?: MLLeakyReluOptions): MLOperand;
}

/* partial */ declare class MLGraphBuilder {
  linear(input: MLOperand, options?: MLLinearOptions): MLOperand;
}

/* partial */ declare class MLGraphBuilder {
  lstm(
    input: MLOperand,
    weight: MLOperand,
    recurrentWeight: MLOperand,
    steps: number,
    hiddenSize: number,
    options?: MLLstmOptions,
  ): Array<MLOperand>;
}

/* partial */ declare class MLGraphBuilder {
  lstmCell(
    input: MLOperand,
    weight: MLOperand,
    recurrentWeight: MLOperand,
    hiddenState: MLOperand,
    cellState: MLOperand,
    hiddenSize: number,
    options?: MLLstmCellOptions,
  ): Array<MLOperand>;
}

/* partial */ declare class MLGraphBuilder {
  matmul(a: MLOperand, b: MLOperand, options?: MLOperatorOptions): MLOperand;
}

/* partial */ declare class MLGraphBuilder {
  pad(
    input: MLOperand,
    beginningPadding: Array<number>,
    endingPadding: Array<number>,
    options?: MLPadOptions,
  ): MLOperand;
}

/* partial */ declare class MLGraphBuilder {
  averagePool2d(input: MLOperand, options?: MLPool2dOptions): MLOperand;
  l2Pool2d(input: MLOperand, options?: MLPool2dOptions): MLOperand;
  maxPool2d(input: MLOperand, options?: MLPool2dOptions): MLOperand;
}

/* partial */ declare class MLGraphBuilder {
  prelu(
    input: MLOperand,
    slope: MLOperand,
    options?: MLOperatorOptions,
  ): MLOperand;
}

/* partial */ declare class MLGraphBuilder {
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
}

/* partial */ declare class MLGraphBuilder {
  relu(input: MLOperand, options?: MLOperatorOptions): MLOperand;
}

/* partial */ declare class MLGraphBuilder {
  resample2d(input: MLOperand, options?: MLResample2dOptions): MLOperand;
}

/* partial */ declare class MLGraphBuilder {
  reshape(
    input: MLOperand,
    newShape: Array<number>,
    options?: MLOperatorOptions,
  ): MLOperand;
}

/* partial */ declare class MLGraphBuilder {
  reverse(input: MLOperand, options?: MLReverseOptions): MLOperand;
}

/* partial */ declare class MLGraphBuilder {
  scatterElements(
    input: MLOperand,
    indices: MLOperand,
    updates: MLOperand,
    options?: MLScatterOptions,
  ): MLOperand;
}

/* partial */ declare class MLGraphBuilder {
  scatterND(
    input: MLOperand,
    indices: MLOperand,
    updates: MLOperand,
    options?: MLOperatorOptions,
  ): MLOperand;
}

/* partial */ declare class MLGraphBuilder {
  sigmoid(input: MLOperand, options?: MLOperatorOptions): MLOperand;
}

/* partial */ declare class MLGraphBuilder {
  slice(
    input: MLOperand,
    starts: Array<number>,
    sizes: Array<number>,
    options?: MLSliceOptions,
  ): MLOperand;
}

/* partial */ declare class MLGraphBuilder {
  softmax(
    input: MLOperand,
    axis: number,
    options?: MLOperatorOptions,
  ): MLOperand;
}

/* partial */ declare class MLGraphBuilder {
  softplus(input: MLOperand, options?: MLOperatorOptions): MLOperand;
}

/* partial */ declare class MLGraphBuilder {
  softsign(input: MLOperand, options?: MLOperatorOptions): MLOperand;
}

/* partial */ declare class MLGraphBuilder {
  split(
    input: MLOperand,
    splits: number | Array<number>,
    options?: MLSplitOptions,
  ): Array<MLOperand>;
}

/* partial */ declare class MLGraphBuilder {
  tanh(input: MLOperand, options?: MLOperatorOptions): MLOperand;
}

/* partial */ declare class MLGraphBuilder {
  tile(
    input: MLOperand,
    repetitions: Array<number>,
    options?: MLOperatorOptions,
  ): MLOperand;
}

/* partial */ declare class MLGraphBuilder {
  transpose(input: MLOperand, options?: MLTransposeOptions): MLOperand;
}

/* partial */ declare class MLGraphBuilder {
  triangular(input: MLOperand, options?: MLTriangularOptions): MLOperand;
}

/* partial */ declare class MLGraphBuilder {
  where(
    condition: MLOperand,
    trueValue: MLOperand,
    falseValue: MLOperand,
    options?: MLOperatorOptions,
  ): MLOperand;
}

declare class MLOperand {
  +dataType: MLOperandDataType;
  +shape: number;
}

declare class MLTensor {
  +constant: boolean;
  +dataType: MLOperandDataType;
  +readable: boolean;
  +shape: number;
  +writable: boolean;

  destroy(): void;
}

declare class mixin$NavigatorML {
  +ml: ML;
}
