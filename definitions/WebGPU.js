type GPUBindingResource =
  | GPUSampler
  | GPUTextureView
  | GPUBufferBinding
  | GPUExternalTexture;

type GPUBufferDynamicOffset = number;

type GPUBufferUsageFlags = number;

type GPUColor = Array<number> | GPUColorDict;

type GPUColorWriteFlags = number;

type GPUCopyExternalImageSource =
  | ImageBitmap
  | ImageData
  | HTMLImageElement
  | HTMLVideoElement
  | VideoFrame
  | HTMLCanvasElement
  | OffscreenCanvas;

type GPUDepthBias = number;

type GPUExtent3D = Array<GPUIntegerCoordinate> | GPUExtent3DDict;

type GPUFlagsConstant = number;

type GPUIndex32 = number;

type GPUIntegerCoordinate = number;

type GPUIntegerCoordinateOut = number;

type GPUMapModeFlags = number;

type GPUOrigin2D = Array<GPUIntegerCoordinate> | GPUOrigin2DDict;

type GPUOrigin3D = Array<GPUIntegerCoordinate> | GPUOrigin3DDict;

type GPUPipelineConstantValue = number;

type GPUSampleMask = number;

type GPUShaderStageFlags = number;

type GPUSignedOffset32 = number;

type GPUSize32 = number;

type GPUSize32Out = number;

type GPUSize64 = number;

type GPUSize64Out = number;

type GPUStencilValue = number;

type GPUTextureUsageFlags = number;

type GPUAddressMode = 'clamp-to-edge' | 'repeat' | 'mirror-repeat';

type GPUAutoLayoutMode = 'auto';

type GPUBlendFactor =
  | 'zero'
  | 'one'
  | 'src'
  | 'one-minus-src'
  | 'src-alpha'
  | 'one-minus-src-alpha'
  | 'dst'
  | 'one-minus-dst'
  | 'dst-alpha'
  | 'one-minus-dst-alpha'
  | 'src-alpha-saturated'
  | 'constant'
  | 'one-minus-constant'
  | 'src1'
  | 'one-minus-src1'
  | 'src1-alpha'
  | 'one-minus-src1-alpha';

type GPUBlendOperation =
  | 'add'
  | 'subtract'
  | 'reverse-subtract'
  | 'min'
  | 'max';

type GPUBufferBindingType = 'uniform' | 'storage' | 'read-only-storage';

type GPUBufferMapState = 'unmapped' | 'pending' | 'mapped';

type GPUCanvasAlphaMode = 'opaque' | 'premultiplied';

type GPUCanvasToneMappingMode = 'standard' | 'extended';

type GPUCompareFunction =
  | 'never'
  | 'less'
  | 'equal'
  | 'less-equal'
  | 'greater'
  | 'not-equal'
  | 'greater-equal'
  | 'always';

type GPUCompilationMessageType = 'error' | 'warning' | 'info';

type GPUCullMode = 'none' | 'front' | 'back';

type GPUDeviceLostReason = 'unknown' | 'destroyed';

type GPUErrorFilter = 'validation' | 'out-of-memory' | 'internal';

type GPUFeatureName =
  | 'core-features-and-limits'
  | 'depth-clip-control'
  | 'depth32float-stencil8'
  | 'texture-compression-bc'
  | 'texture-compression-bc-sliced-3d'
  | 'texture-compression-etc2'
  | 'texture-compression-astc'
  | 'texture-compression-astc-sliced-3d'
  | 'timestamp-query'
  | 'indirect-first-instance'
  | 'shader-f16'
  | 'rg11b10ufloat-renderable'
  | 'bgra8unorm-storage'
  | 'float32-filterable'
  | 'float32-blendable'
  | 'clip-distances'
  | 'dual-source-blending'
  | 'subgroups';

type GPUFilterMode = 'nearest' | 'linear';

type GPUFrontFace = 'ccw' | 'cw';

type GPUIndexFormat = 'uint16' | 'uint32';

type GPULoadOp = 'load' | 'clear';

type GPUMipmapFilterMode = 'nearest' | 'linear';

type GPUPipelineErrorReason = 'validation' | 'internal';

type GPUPowerPreference = 'low-power' | 'high-performance';

type GPUPrimitiveTopology =
  | 'point-list'
  | 'line-list'
  | 'line-strip'
  | 'triangle-list'
  | 'triangle-strip';

type GPUQueryType = 'occlusion' | 'timestamp';

type GPUSamplerBindingType = 'filtering' | 'non-filtering' | 'comparison';

type GPUStencilOperation =
  | 'keep'
  | 'zero'
  | 'replace'
  | 'invert'
  | 'increment-clamp'
  | 'decrement-clamp'
  | 'increment-wrap'
  | 'decrement-wrap';

type GPUStorageTextureAccess = 'write-only' | 'read-only' | 'read-write';

type GPUStoreOp = 'store' | 'discard';

type GPUTextureAspect = 'all' | 'stencil-only' | 'depth-only';

type GPUTextureDimension = '1d' | '2d' | '3d';

type GPUTextureFormat =
  | 'r8unorm'
  | 'r8snorm'
  | 'r8uint'
  | 'r8sint'
  | 'r16uint'
  | 'r16sint'
  | 'r16float'
  | 'rg8unorm'
  | 'rg8snorm'
  | 'rg8uint'
  | 'rg8sint'
  | 'r32uint'
  | 'r32sint'
  | 'r32float'
  | 'rg16uint'
  | 'rg16sint'
  | 'rg16float'
  | 'rgba8unorm'
  | 'rgba8unorm-srgb'
  | 'rgba8snorm'
  | 'rgba8uint'
  | 'rgba8sint'
  | 'bgra8unorm'
  | 'bgra8unorm-srgb'
  | 'rgb9e5ufloat'
  | 'rgb10a2uint'
  | 'rgb10a2unorm'
  | 'rg11b10ufloat'
  | 'rg32uint'
  | 'rg32sint'
  | 'rg32float'
  | 'rgba16uint'
  | 'rgba16sint'
  | 'rgba16float'
  | 'rgba32uint'
  | 'rgba32sint'
  | 'rgba32float'
  | 'stencil8'
  | 'depth16unorm'
  | 'depth24plus'
  | 'depth24plus-stencil8'
  | 'depth32float'
  | 'depth32float-stencil8'
  | 'bc1-rgba-unorm'
  | 'bc1-rgba-unorm-srgb'
  | 'bc2-rgba-unorm'
  | 'bc2-rgba-unorm-srgb'
  | 'bc3-rgba-unorm'
  | 'bc3-rgba-unorm-srgb'
  | 'bc4-r-unorm'
  | 'bc4-r-snorm'
  | 'bc5-rg-unorm'
  | 'bc5-rg-snorm'
  | 'bc6h-rgb-ufloat'
  | 'bc6h-rgb-float'
  | 'bc7-rgba-unorm'
  | 'bc7-rgba-unorm-srgb'
  | 'etc2-rgb8unorm'
  | 'etc2-rgb8unorm-srgb'
  | 'etc2-rgb8a1unorm'
  | 'etc2-rgb8a1unorm-srgb'
  | 'etc2-rgba8unorm'
  | 'etc2-rgba8unorm-srgb'
  | 'eac-r11unorm'
  | 'eac-r11snorm'
  | 'eac-rg11unorm'
  | 'eac-rg11snorm'
  | 'astc-4x4-unorm'
  | 'astc-4x4-unorm-srgb'
  | 'astc-5x4-unorm'
  | 'astc-5x4-unorm-srgb'
  | 'astc-5x5-unorm'
  | 'astc-5x5-unorm-srgb'
  | 'astc-6x5-unorm'
  | 'astc-6x5-unorm-srgb'
  | 'astc-6x6-unorm'
  | 'astc-6x6-unorm-srgb'
  | 'astc-8x5-unorm'
  | 'astc-8x5-unorm-srgb'
  | 'astc-8x6-unorm'
  | 'astc-8x6-unorm-srgb'
  | 'astc-8x8-unorm'
  | 'astc-8x8-unorm-srgb'
  | 'astc-10x5-unorm'
  | 'astc-10x5-unorm-srgb'
  | 'astc-10x6-unorm'
  | 'astc-10x6-unorm-srgb'
  | 'astc-10x8-unorm'
  | 'astc-10x8-unorm-srgb'
  | 'astc-10x10-unorm'
  | 'astc-10x10-unorm-srgb'
  | 'astc-12x10-unorm'
  | 'astc-12x10-unorm-srgb'
  | 'astc-12x12-unorm'
  | 'astc-12x12-unorm-srgb';

type GPUTextureSampleType =
  | 'float'
  | 'unfilterable-float'
  | 'depth'
  | 'sint'
  | 'uint';

type GPUTextureViewDimension =
  | '1d'
  | '2d'
  | '2d-array'
  | 'cube'
  | 'cube-array'
  | '3d';

type GPUVertexFormat =
  | 'uint8'
  | 'uint8x2'
  | 'uint8x4'
  | 'sint8'
  | 'sint8x2'
  | 'sint8x4'
  | 'unorm8'
  | 'unorm8x2'
  | 'unorm8x4'
  | 'snorm8'
  | 'snorm8x2'
  | 'snorm8x4'
  | 'uint16'
  | 'uint16x2'
  | 'uint16x4'
  | 'sint16'
  | 'sint16x2'
  | 'sint16x4'
  | 'unorm16'
  | 'unorm16x2'
  | 'unorm16x4'
  | 'snorm16'
  | 'snorm16x2'
  | 'snorm16x4'
  | 'float16'
  | 'float16x2'
  | 'float16x4'
  | 'float32'
  | 'float32x2'
  | 'float32x3'
  | 'float32x4'
  | 'uint32'
  | 'uint32x2'
  | 'uint32x3'
  | 'uint32x4'
  | 'sint32'
  | 'sint32x2'
  | 'sint32x3'
  | 'sint32x4'
  | 'unorm10-10-10-2'
  | 'unorm8x4-bgra';

type GPUVertexStepMode = 'vertex' | 'instance';

type GPUBindGroupDescriptor = {
  entries: Array<GPUBindGroupEntry>,
  label: string,
  layout: GPUBindGroupLayout,
};

type GPUBindGroupEntry = {
  binding: GPUIndex32,
  resource: GPUBindingResource,
};

type GPUBindGroupLayoutDescriptor = {
  entries: Array<GPUBindGroupLayoutEntry>,
  label: string,
};

type GPUBindGroupLayoutEntry = {
  binding: GPUIndex32,
  buffer: GPUBufferBindingLayout,
  externalTexture: GPUExternalTextureBindingLayout,
  sampler: GPUSamplerBindingLayout,
  storageTexture: GPUStorageTextureBindingLayout,
  texture: GPUTextureBindingLayout,
  visibility: GPUShaderStageFlags,
};

type GPUBlendComponent = {
  dstFactor: GPUBlendFactor,
  operation: GPUBlendOperation,
  srcFactor: GPUBlendFactor,
};

type GPUBlendState = {
  alpha: GPUBlendComponent,
  color: GPUBlendComponent,
};

type GPUBufferBinding = {
  buffer: GPUBuffer,
  offset: GPUSize64,
  size: GPUSize64,
};

type GPUBufferBindingLayout = {
  hasDynamicOffset: boolean,
  minBindingSize: GPUSize64,
  type: GPUBufferBindingType,
};

type GPUBufferDescriptor = {
  label: string,
  mappedAtCreation: boolean,
  size: GPUSize64,
  usage: GPUBufferUsageFlags,
};

type GPUCanvasConfiguration = {
  alphaMode: GPUCanvasAlphaMode,
  colorSpace: PredefinedColorSpace,
  device: GPUDevice,
  format: GPUTextureFormat,
  toneMapping: GPUCanvasToneMapping,
  usage: GPUTextureUsageFlags,
  viewFormats: Array<GPUTextureFormat>,
};

type GPUCanvasToneMapping = {
  mode: GPUCanvasToneMappingMode,
};

type GPUColorDict = {
  a: number,
  b: number,
  g: number,
  r: number,
};

type GPUColorTargetState = {
  blend: GPUBlendState,
  format: GPUTextureFormat,
  writeMask: GPUColorWriteFlags,
};

type GPUCommandBufferDescriptor = {
  label: string,
};

type GPUCommandEncoderDescriptor = {
  label: string,
};

type GPUComputePassDescriptor = {
  label: string,
  timestampWrites: GPUComputePassTimestampWrites,
};

type GPUComputePassTimestampWrites = {
  beginningOfPassWriteIndex: GPUSize32,
  endOfPassWriteIndex: GPUSize32,
  querySet: GPUQuerySet,
};

type GPUComputePipelineDescriptor = {
  compute: GPUProgrammableStage,
  label: string,
  layout: GPUPipelineLayout | GPUAutoLayoutMode,
};

type GPUCopyExternalImageDestInfo = {
  aspect: GPUTextureAspect,
  colorSpace: PredefinedColorSpace,
  mipLevel: GPUIntegerCoordinate,
  origin: GPUOrigin3D,
  premultipliedAlpha: boolean,
  texture: GPUTexture,
};

type GPUCopyExternalImageSourceInfo = {
  flipY: boolean,
  origin: GPUOrigin2D,
  source: GPUCopyExternalImageSource,
};

type GPUDepthStencilState = {
  depthBias: GPUDepthBias,
  depthBiasClamp: number,
  depthBiasSlopeScale: number,
  depthCompare: GPUCompareFunction,
  depthWriteEnabled: boolean,
  format: GPUTextureFormat,
  stencilBack: GPUStencilFaceState,
  stencilFront: GPUStencilFaceState,
  stencilReadMask: GPUStencilValue,
  stencilWriteMask: GPUStencilValue,
};

type GPUDeviceDescriptor = {
  defaultQueue: GPUQueueDescriptor,
  label: string,
  requiredFeatures: Array<GPUFeatureName>,
  requiredLimits: {[string]: GPUSize64 | void},
};

type GPUExtent3DDict = {
  depthOrArrayLayers: GPUIntegerCoordinate,
  height: GPUIntegerCoordinate,
  width: GPUIntegerCoordinate,
};

type GPUExternalTextureBindingLayout = {};

type GPUExternalTextureDescriptor = {
  colorSpace: PredefinedColorSpace,
  label: string,
  source: HTMLVideoElement | VideoFrame,
};

type GPUFragmentState = {
  constants: {[string]: GPUPipelineConstantValue},
  entryPoint: string,
  module: GPUShaderModule,
  targets: Array<GPUColorTargetState | null>,
};

type GPUMultisampleState = {
  alphaToCoverageEnabled: boolean,
  count: GPUSize32,
  mask: GPUSampleMask,
};

type GPUObjectDescriptorBase = {
  label: string,
};

type GPUOrigin2DDict = {
  x: GPUIntegerCoordinate,
  y: GPUIntegerCoordinate,
};

type GPUOrigin3DDict = {
  x: GPUIntegerCoordinate,
  y: GPUIntegerCoordinate,
  z: GPUIntegerCoordinate,
};

type GPUPipelineDescriptorBase = {
  label: string,
  layout: GPUPipelineLayout | GPUAutoLayoutMode,
};

type GPUPipelineErrorInit = {
  reason: GPUPipelineErrorReason,
};

type GPUPipelineLayoutDescriptor = {
  bindGroupLayouts: Array<GPUBindGroupLayout | null>,
  label: string,
};

type GPUPrimitiveState = {
  cullMode: GPUCullMode,
  frontFace: GPUFrontFace,
  stripIndexFormat: GPUIndexFormat,
  topology: GPUPrimitiveTopology,
  unclippedDepth: boolean,
};

type GPUProgrammableStage = {
  constants: {[string]: GPUPipelineConstantValue},
  entryPoint: string,
  module: GPUShaderModule,
};

type GPUQuerySetDescriptor = {
  count: GPUSize32,
  label: string,
  type: GPUQueryType,
};

type GPUQueueDescriptor = {
  label: string,
};

type GPURenderBundleDescriptor = {
  label: string,
};

type GPURenderBundleEncoderDescriptor = {
  colorFormats: Array<GPUTextureFormat | null>,
  depthReadOnly: boolean,
  depthStencilFormat: GPUTextureFormat,
  label: string,
  sampleCount: GPUSize32,
  stencilReadOnly: boolean,
};

type GPURenderPassColorAttachment = {
  clearValue: GPUColor,
  depthSlice: GPUIntegerCoordinate,
  loadOp: GPULoadOp,
  resolveTarget: GPUTextureView,
  storeOp: GPUStoreOp,
  view: GPUTextureView,
};

type GPURenderPassDepthStencilAttachment = {
  depthClearValue: number,
  depthLoadOp: GPULoadOp,
  depthReadOnly: boolean,
  depthStoreOp: GPUStoreOp,
  stencilClearValue: GPUStencilValue,
  stencilLoadOp: GPULoadOp,
  stencilReadOnly: boolean,
  stencilStoreOp: GPUStoreOp,
  view: GPUTextureView,
};

type GPURenderPassDescriptor = {
  colorAttachments: Array<GPURenderPassColorAttachment | null>,
  depthStencilAttachment: GPURenderPassDepthStencilAttachment,
  label: string,
  maxDrawCount: GPUSize64,
  occlusionQuerySet: GPUQuerySet,
  timestampWrites: GPURenderPassTimestampWrites,
};

type GPURenderPassLayout = {
  colorFormats: Array<GPUTextureFormat | null>,
  depthStencilFormat: GPUTextureFormat,
  label: string,
  sampleCount: GPUSize32,
};

type GPURenderPassTimestampWrites = {
  beginningOfPassWriteIndex: GPUSize32,
  endOfPassWriteIndex: GPUSize32,
  querySet: GPUQuerySet,
};

type GPURenderPipelineDescriptor = {
  depthStencil: GPUDepthStencilState,
  fragment: GPUFragmentState,
  label: string,
  layout: GPUPipelineLayout | GPUAutoLayoutMode,
  multisample: GPUMultisampleState,
  primitive: GPUPrimitiveState,
  vertex: GPUVertexState,
};

type GPURequestAdapterOptions = {
  featureLevel: string,
  forceFallbackAdapter: boolean,
  powerPreference: GPUPowerPreference,
  xrCompatible: boolean,
};

type GPUSamplerBindingLayout = {
  type: GPUSamplerBindingType,
};

type GPUSamplerDescriptor = {
  addressModeU: GPUAddressMode,
  addressModeV: GPUAddressMode,
  addressModeW: GPUAddressMode,
  compare: GPUCompareFunction,
  label: string,
  lodMaxClamp: number,
  lodMinClamp: number,
  magFilter: GPUFilterMode,
  maxAnisotropy: number,
  minFilter: GPUFilterMode,
  mipmapFilter: GPUMipmapFilterMode,
};

type GPUShaderModuleCompilationHint = {
  entryPoint: string,
  layout: GPUPipelineLayout | GPUAutoLayoutMode,
};

type GPUShaderModuleDescriptor = {
  code: string,
  compilationHints: Array<GPUShaderModuleCompilationHint>,
  label: string,
};

type GPUStencilFaceState = {
  compare: GPUCompareFunction,
  depthFailOp: GPUStencilOperation,
  failOp: GPUStencilOperation,
  passOp: GPUStencilOperation,
};

type GPUStorageTextureBindingLayout = {
  access: GPUStorageTextureAccess,
  format: GPUTextureFormat,
  viewDimension: GPUTextureViewDimension,
};

type GPUTexelCopyBufferInfo = {
  buffer: GPUBuffer,
  bytesPerRow: GPUSize32,
  offset: GPUSize64,
  rowsPerImage: GPUSize32,
};

type GPUTexelCopyBufferLayout = {
  bytesPerRow: GPUSize32,
  offset: GPUSize64,
  rowsPerImage: GPUSize32,
};

type GPUTexelCopyTextureInfo = {
  aspect: GPUTextureAspect,
  mipLevel: GPUIntegerCoordinate,
  origin: GPUOrigin3D,
  texture: GPUTexture,
};

type GPUTextureBindingLayout = {
  multisampled: boolean,
  sampleType: GPUTextureSampleType,
  viewDimension: GPUTextureViewDimension,
};

type GPUTextureDescriptor = {
  dimension: GPUTextureDimension,
  format: GPUTextureFormat,
  label: string,
  mipLevelCount: GPUIntegerCoordinate,
  sampleCount: GPUSize32,
  size: GPUExtent3D,
  usage: GPUTextureUsageFlags,
  viewFormats: Array<GPUTextureFormat>,
};

type GPUTextureViewDescriptor = {
  arrayLayerCount: GPUIntegerCoordinate,
  aspect: GPUTextureAspect,
  baseArrayLayer: GPUIntegerCoordinate,
  baseMipLevel: GPUIntegerCoordinate,
  dimension: GPUTextureViewDimension,
  format: GPUTextureFormat,
  label: string,
  mipLevelCount: GPUIntegerCoordinate,
  usage: GPUTextureUsageFlags,
};

type GPUUncapturedErrorEventInit = {
  error: GPUError,
};

type GPUVertexAttribute = {
  format: GPUVertexFormat,
  offset: GPUSize64,
  shaderLocation: GPUIndex32,
};

type GPUVertexBufferLayout = {
  arrayStride: GPUSize64,
  attributes: Array<GPUVertexAttribute>,
  stepMode: GPUVertexStepMode,
};

type GPUVertexState = {
  buffers: Array<GPUVertexBufferLayout | null>,
  constants: {[string]: GPUPipelineConstantValue},
  entryPoint: string,
  module: GPUShaderModule,
};

declare namespace GPUBufferUsage {
  declare const COPY_DST: 0x0008;
  declare const COPY_SRC: 0x0004;
  declare const INDEX: 0x0010;
  declare const INDIRECT: 0x0100;
  declare const MAP_READ: 0x0001;
  declare const MAP_WRITE: 0x0002;
  declare const QUERY_RESOLVE: 0x0200;
  declare const STORAGE: 0x0080;
  declare const UNIFORM: 0x0040;
  declare const VERTEX: 0x0020;
}

declare namespace GPUColorWrite {
  declare const ALL: 0xf;
  declare const ALPHA: 0x8;
  declare const BLUE: 0x4;
  declare const GREEN: 0x2;
  declare const RED: 0x1;
}

declare namespace GPUMapMode {
  declare const READ: 0x0001;
  declare const WRITE: 0x0002;
}

declare namespace GPUShaderStage {
  declare const COMPUTE: 0x4;
  declare const FRAGMENT: 0x2;
  declare const VERTEX: 0x1;
}

declare namespace GPUTextureUsage {
  declare const COPY_DST: 0x02;
  declare const COPY_SRC: 0x01;
  declare const RENDER_ATTACHMENT: 0x10;
  declare const STORAGE_BINDING: 0x08;
  declare const TEXTURE_BINDING: 0x04;
}

declare class GPU {
  +wgslLanguageFeatures: WGSLLanguageFeatures;

  getPreferredCanvasFormat(): GPUTextureFormat;
  requestAdapter(
    options?: GPURequestAdapterOptions,
  ): Promise<GPUAdapter | null>;
}

declare class GPUAdapter {
  +features: GPUSupportedFeatures;
  +info: GPUAdapterInfo;
  +limits: GPUSupportedLimits;

  requestDevice(descriptor?: GPUDeviceDescriptor): Promise<GPUDevice>;
}

declare class GPUAdapterInfo {
  +architecture: string;
  +description: string;
  +device: string;
  +isFallbackAdapter: boolean;
  +subgroupMaxSize: number;
  +subgroupMinSize: number;
  +vendor: string;
}

declare class GPUBindGroup mixins mixin$GPUObjectBase {}

declare class GPUBindGroupLayout mixins mixin$GPUObjectBase {}

declare class GPUBuffer mixins mixin$GPUObjectBase {
  +mapState: GPUBufferMapState;
  +size: GPUSize64Out;
  +usage: GPUFlagsConstant;

  destroy(): void;
  getMappedRange(offset?: GPUSize64, size?: GPUSize64): ArrayBuffer;
  mapAsync(
    mode: GPUMapModeFlags,
    offset?: GPUSize64,
    size?: GPUSize64,
  ): Promise<void>;
  unmap(): void;
}

declare class GPUCanvasContext {
  +canvas: HTMLCanvasElement | OffscreenCanvas;

  configure(configuration: GPUCanvasConfiguration): void;
  getConfiguration(): GPUCanvasConfiguration | null;
  getCurrentTexture(): GPUTexture;
  unconfigure(): void;
}

declare class GPUCommandBuffer mixins mixin$GPUObjectBase {}

declare class GPUCommandEncoder
  mixins
    mixin$GPUObjectBase,
    mixin$GPUCommandsMixin,
    mixin$GPUDebugCommandsMixin
{
  beginComputePass(
    descriptor?: GPUComputePassDescriptor,
  ): GPUComputePassEncoder;
  beginRenderPass(descriptor: GPURenderPassDescriptor): GPURenderPassEncoder;
  clearBuffer(buffer: GPUBuffer, offset?: GPUSize64, size?: GPUSize64): void;
  copyBufferToBuffer(
    source: GPUBuffer,
    destination: GPUBuffer,
    size?: GPUSize64,
  ): void;
  copyBufferToBuffer(
    source: GPUBuffer,
    sourceOffset: GPUSize64,
    destination: GPUBuffer,
    destinationOffset: GPUSize64,
    size?: GPUSize64,
  ): void;
  copyBufferToTexture(
    source: GPUTexelCopyBufferInfo,
    destination: GPUTexelCopyTextureInfo,
    copySize: GPUExtent3D,
  ): void;
  copyTextureToBuffer(
    source: GPUTexelCopyTextureInfo,
    destination: GPUTexelCopyBufferInfo,
    copySize: GPUExtent3D,
  ): void;
  copyTextureToTexture(
    source: GPUTexelCopyTextureInfo,
    destination: GPUTexelCopyTextureInfo,
    copySize: GPUExtent3D,
  ): void;
  finish(descriptor?: GPUCommandBufferDescriptor): GPUCommandBuffer;
  resolveQuerySet(
    querySet: GPUQuerySet,
    firstQuery: GPUSize32,
    queryCount: GPUSize32,
    destination: GPUBuffer,
    destinationOffset: GPUSize64,
  ): void;
}

declare class GPUCompilationInfo {
  +messages: $ReadOnlyArray<GPUCompilationMessage>;
}

declare class GPUCompilationMessage {
  +length: number;
  +lineNum: number;
  +linePos: number;
  +message: string;
  +offset: number;
  +type: GPUCompilationMessageType;
}

declare class GPUComputePassEncoder
  mixins
    mixin$GPUObjectBase,
    mixin$GPUCommandsMixin,
    mixin$GPUDebugCommandsMixin,
    mixin$GPUBindingCommandsMixin
{
  dispatchWorkgroups(
    workgroupCountX: GPUSize32,
    workgroupCountY?: GPUSize32,
    workgroupCountZ?: GPUSize32,
  ): void;
  dispatchWorkgroupsIndirect(
    indirectBuffer: GPUBuffer,
    indirectOffset: GPUSize64,
  ): void;
  end(): void;
  setPipeline(pipeline: GPUComputePipeline): void;
}

declare class GPUComputePipeline
  mixins mixin$GPUObjectBase, mixin$GPUPipelineBase {}

declare class GPUDevice extends EventTarget mixins mixin$GPUObjectBase {
  +adapterInfo: GPUAdapterInfo;
  +features: GPUSupportedFeatures;
  +limits: GPUSupportedLimits;
  +lost: Promise<GPUDeviceLostInfo>;
  onuncapturederror: EventHandler;
  +queue: GPUQueue;

  createBindGroup(descriptor: GPUBindGroupDescriptor): GPUBindGroup;
  createBindGroupLayout(
    descriptor: GPUBindGroupLayoutDescriptor,
  ): GPUBindGroupLayout;
  createBuffer(descriptor: GPUBufferDescriptor): GPUBuffer;
  createCommandEncoder(
    descriptor?: GPUCommandEncoderDescriptor,
  ): GPUCommandEncoder;
  createComputePipeline(
    descriptor: GPUComputePipelineDescriptor,
  ): GPUComputePipeline;
  createComputePipelineAsync(
    descriptor: GPUComputePipelineDescriptor,
  ): Promise<GPUComputePipeline>;
  createPipelineLayout(
    descriptor: GPUPipelineLayoutDescriptor,
  ): GPUPipelineLayout;
  createQuerySet(descriptor: GPUQuerySetDescriptor): GPUQuerySet;
  createRenderBundleEncoder(
    descriptor: GPURenderBundleEncoderDescriptor,
  ): GPURenderBundleEncoder;
  createRenderPipeline(
    descriptor: GPURenderPipelineDescriptor,
  ): GPURenderPipeline;
  createRenderPipelineAsync(
    descriptor: GPURenderPipelineDescriptor,
  ): Promise<GPURenderPipeline>;
  createSampler(descriptor?: GPUSamplerDescriptor): GPUSampler;
  createShaderModule(descriptor: GPUShaderModuleDescriptor): GPUShaderModule;
  createTexture(descriptor: GPUTextureDescriptor): GPUTexture;
  destroy(): void;
  importExternalTexture(
    descriptor: GPUExternalTextureDescriptor,
  ): GPUExternalTexture;
  popErrorScope(): Promise<GPUError | null>;
  pushErrorScope(filter: GPUErrorFilter): void;
}

declare class GPUDeviceLostInfo {
  +message: string;
  +reason: GPUDeviceLostReason;
}

declare class GPUError {
  +message: string;
}

declare class GPUExternalTexture mixins mixin$GPUObjectBase {}

declare class GPUInternalError extends GPUError {
  constructor(message: string): void;
}

declare class GPUOutOfMemoryError extends GPUError {
  constructor(message: string): void;
}

declare class GPUPipelineError extends DOMException {
  +reason: GPUPipelineErrorReason;

  constructor(message?: string, options: GPUPipelineErrorInit): void;
}

declare class GPUPipelineLayout mixins mixin$GPUObjectBase {}

declare class GPUQuerySet mixins mixin$GPUObjectBase {
  +count: GPUSize32Out;
  +type: GPUQueryType;

  destroy(): void;
}

declare class GPUQueue mixins mixin$GPUObjectBase {
  copyExternalImageToTexture(
    source: GPUCopyExternalImageSourceInfo,
    destination: GPUCopyExternalImageDestInfo,
    copySize: GPUExtent3D,
  ): void;
  onSubmittedWorkDone(): Promise<void>;
  submit(commandBuffers: Array<GPUCommandBuffer>): void;
  writeBuffer(
    buffer: GPUBuffer,
    bufferOffset: GPUSize64,
    data: AllowSharedBufferSource,
    dataOffset?: GPUSize64,
    size?: GPUSize64,
  ): void;
  writeTexture(
    destination: GPUTexelCopyTextureInfo,
    data: AllowSharedBufferSource,
    dataLayout: GPUTexelCopyBufferLayout,
    size: GPUExtent3D,
  ): void;
}

declare class GPURenderBundle mixins mixin$GPUObjectBase {}

declare class GPURenderBundleEncoder
  mixins
    mixin$GPUObjectBase,
    mixin$GPUCommandsMixin,
    mixin$GPUDebugCommandsMixin,
    mixin$GPUBindingCommandsMixin,
    mixin$GPURenderCommandsMixin
{
  finish(descriptor?: GPURenderBundleDescriptor): GPURenderBundle;
}

declare class GPURenderPassEncoder
  mixins
    mixin$GPUObjectBase,
    mixin$GPUCommandsMixin,
    mixin$GPUDebugCommandsMixin,
    mixin$GPUBindingCommandsMixin,
    mixin$GPURenderCommandsMixin
{
  beginOcclusionQuery(queryIndex: GPUSize32): void;
  end(): void;
  endOcclusionQuery(): void;
  executeBundles(bundles: Array<GPURenderBundle>): void;
  setBlendConstant(color: GPUColor): void;
  setScissorRect(
    x: GPUIntegerCoordinate,
    y: GPUIntegerCoordinate,
    width: GPUIntegerCoordinate,
    height: GPUIntegerCoordinate,
  ): void;
  setStencilReference(reference: GPUStencilValue): void;
  setViewport(
    x: number,
    y: number,
    width: number,
    height: number,
    minDepth: number,
    maxDepth: number,
  ): void;
}

declare class GPURenderPipeline
  mixins mixin$GPUObjectBase, mixin$GPUPipelineBase {}

declare class GPUSampler mixins mixin$GPUObjectBase {}

declare class GPUShaderModule mixins mixin$GPUObjectBase {
  getCompilationInfo(): Promise<GPUCompilationInfo>;
}

type GPUSupportedFeatures = Set<string>;

declare class GPUSupportedLimits {
  +maxBindGroups: number;
  +maxBindGroupsPlusVertexBuffers: number;
  +maxBindingsPerBindGroup: number;
  +maxBufferSize: number;
  +maxColorAttachmentBytesPerSample: number;
  +maxColorAttachments: number;
  +maxComputeInvocationsPerWorkgroup: number;
  +maxComputeWorkgroupSizeX: number;
  +maxComputeWorkgroupSizeY: number;
  +maxComputeWorkgroupSizeZ: number;
  +maxComputeWorkgroupsPerDimension: number;
  +maxComputeWorkgroupStorageSize: number;
  +maxDynamicStorageBuffersPerPipelineLayout: number;
  +maxDynamicUniformBuffersPerPipelineLayout: number;
  +maxInterStageShaderVariables: number;
  +maxSampledTexturesPerShaderStage: number;
  +maxSamplersPerShaderStage: number;
  +maxStorageBufferBindingSize: number;
  +maxStorageBuffersPerShaderStage: number;
  +maxStorageTexturesPerShaderStage: number;
  +maxTextureArrayLayers: number;
  +maxTextureDimension1D: number;
  +maxTextureDimension2D: number;
  +maxTextureDimension3D: number;
  +maxUniformBufferBindingSize: number;
  +maxUniformBuffersPerShaderStage: number;
  +maxVertexAttributes: number;
  +maxVertexBufferArrayStride: number;
  +maxVertexBuffers: number;
  +minStorageBufferOffsetAlignment: number;
  +minUniformBufferOffsetAlignment: number;
}

declare class GPUTexture mixins mixin$GPUObjectBase {
  +depthOrArrayLayers: GPUIntegerCoordinateOut;
  +dimension: GPUTextureDimension;
  +format: GPUTextureFormat;
  +height: GPUIntegerCoordinateOut;
  +mipLevelCount: GPUIntegerCoordinateOut;
  +sampleCount: GPUSize32Out;
  +usage: GPUFlagsConstant;
  +width: GPUIntegerCoordinateOut;

  createView(descriptor?: GPUTextureViewDescriptor): GPUTextureView;
  destroy(): void;
}

declare class GPUTextureView mixins mixin$GPUObjectBase {}

declare class GPUUncapturedErrorEvent extends Event {
  +error: GPUError;

  constructor(
    type: string,
    gpuUncapturedErrorEventInitDict: GPUUncapturedErrorEventInit,
  ): void;
}

declare class GPUValidationError extends GPUError {
  constructor(message: string): void;
}

type WGSLLanguageFeatures = Set<string>;

declare class mixin$GPUBindingCommandsMixin {
  setBindGroup(
    index: GPUIndex32,
    bindGroup: GPUBindGroup | null,
    dynamicOffsets?: Array<GPUBufferDynamicOffset>,
  ): void;
  setBindGroup(
    index: GPUIndex32,
    bindGroup: GPUBindGroup | null,
    dynamicOffsetsData: Uint32Array,
    dynamicOffsetsDataStart: GPUSize64,
    dynamicOffsetsDataLength: GPUSize32,
  ): void;
}

declare class mixin$GPUCommandsMixin {}

declare class mixin$GPUDebugCommandsMixin {
  insertDebugMarker(markerLabel: string): void;
  popDebugGroup(): void;
  pushDebugGroup(groupLabel: string): void;
}

declare class mixin$GPUObjectBase {
  label: string;
}

declare class mixin$GPUPipelineBase {
  getBindGroupLayout(index: number): GPUBindGroupLayout;
}

declare class mixin$GPURenderCommandsMixin {
  draw(
    vertexCount: GPUSize32,
    instanceCount?: GPUSize32,
    firstVertex?: GPUSize32,
    firstInstance?: GPUSize32,
  ): void;
  drawIndexed(
    indexCount: GPUSize32,
    instanceCount?: GPUSize32,
    firstIndex?: GPUSize32,
    baseVertex?: GPUSignedOffset32,
    firstInstance?: GPUSize32,
  ): void;
  drawIndexedIndirect(
    indirectBuffer: GPUBuffer,
    indirectOffset: GPUSize64,
  ): void;
  drawIndirect(indirectBuffer: GPUBuffer, indirectOffset: GPUSize64): void;
  setIndexBuffer(
    buffer: GPUBuffer,
    indexFormat: GPUIndexFormat,
    offset?: GPUSize64,
    size?: GPUSize64,
  ): void;
  setPipeline(pipeline: GPURenderPipeline): void;
  setVertexBuffer(
    slot: GPUIndex32,
    buffer: GPUBuffer | null,
    offset?: GPUSize64,
    size?: GPUSize64,
  ): void;
}

declare class mixin$NavigatorGPU {
  +gpu: GPU;
}
