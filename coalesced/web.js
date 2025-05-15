// @flow

type AllowSharedBufferSource =
  | ArrayBuffer
  | SharedArrayBuffer
  | ArrayBufferView;

type ArrayBufferView =
  | Int8Array
  | Int16Array
  | Int32Array
  | Uint8Array
  | Uint16Array
  | Uint32Array
  | Uint8ClampedArray
  | BigInt64Array
  | BigUint64Array
  | Float16Array
  | Float32Array
  | Float64Array
  | DataView;

type BlobPart = BufferSource | Blob | string;

type BodyInit = ReadableStream | XMLHttpRequestBodyInit;

type BufferSource = ArrayBufferView | ArrayBuffer;

type CanvasImageSource =
  | HTMLOrSVGImageElement
  | HTMLVideoElement
  | HTMLCanvasElement
  | ImageBitmap
  | OffscreenCanvas
  | VideoFrame;

type ConstrainBoolean = boolean | ConstrainBooleanParameters;

type ConstrainDOMString = string | Array<string> | ConstrainDOMStringParameters;

type ConstrainDouble = number | ConstrainDoubleRange;

type ConstrainULong = number | ConstrainULongRange;

type DOMHighResTimeStamp = number;

type EpochTimeStamp = number;

type EventHandler = EventHandlerNonNull | null;

type Float32List = Float32Array | Array<GLfloat>;

type FormDataEntryValue = File | string;

type GLbitfield = number;

type GLboolean = boolean;

type GLbyte = number;

type GLclampf = number;

type GLenum = number;

type GLfloat = number;

type GLint = number;

type GLint64 = number;

type GLintptr = number;

type GLshort = number;

type GLsizei = number;

type GLsizeiptr = number;

type GLubyte = number;

type GLuint = number;

type GLuint64 = number;

type GLushort = number;

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

type HeadersInit = Array<Array<string>> | string | string;

type HTMLOrSVGImageElement = HTMLImageElement | SVGImageElement;

type HTMLOrSVGScriptElement = HTMLScriptElement | SVGScriptElement;

type ImageBitmapSource = CanvasImageSource | Blob | ImageData;

type ImageBufferSource = AllowSharedBufferSource | ReadableStream;

type Int32List = Int32Array | Array<GLint>;

type MediaProvider = MediaStream | MediaSource | Blob;

type MessageEventSource = WindowProxy | MessagePort | ServiceWorker;

type OffscreenRenderingContext =
  | OffscreenCanvasRenderingContext2D
  | ImageBitmapRenderingContext
  | WebGLRenderingContext
  | WebGL2RenderingContext
  | GPUCanvasContext;

type OnBeforeUnloadEventHandler = OnBeforeUnloadEventHandlerNonNull | null;

type OnErrorEventHandler = OnErrorEventHandlerNonNull | null;

type ReadableStreamController =
  | ReadableStreamDefaultController
  | ReadableByteStreamController;

type ReadableStreamReader =
  | ReadableStreamDefaultReader
  | ReadableStreamBYOBReader;

type RenderingContext =
  | CanvasRenderingContext2D
  | ImageBitmapRenderingContext
  | WebGLRenderingContext
  | WebGL2RenderingContext
  | GPUCanvasContext;

type RequestInfo = Request | string;

type TexImageSource =
  | ImageBitmap
  | ImageData
  | HTMLImageElement
  | HTMLCanvasElement
  | HTMLVideoElement
  | OffscreenCanvas
  | VideoFrame;

type TimerHandler = string | Function | TrustedScript;

type TrustedType = TrustedHTML | TrustedScript | TrustedScriptURL;

type Uint32List = Uint32Array | Array<GLuint>;

type URLPatternCompatible = string | URLPatternInit | URLPattern;

type URLPatternInput = string | URLPatternInit;

type VibratePattern = number | Array<number>;

type XMLHttpRequestBodyInit =
  | Blob
  | BufferSource
  | FormData
  | URLSearchParams
  | string;

type AlphaOption = 'keep' | 'discard';

type AnimationPlayState = 'idle' | 'running' | 'paused' | 'finished';

type AnimationReplaceState = 'active' | 'removed' | 'persisted';

type AppendMode = 'segments' | 'sequence';

type AudioSampleFormat =
  | 'u8'
  | 's16'
  | 's32'
  | 'f32'
  | 'u8-planar'
  | 's16-planar'
  | 's32-planar'
  | 'f32-planar';

type BitrateMode = 'constant' | 'variable';

type CanPlayTypeResult = '' | 'maybe' | 'probably';

type CanvasColorType = 'unorm8' | 'float16';

type CanvasDirection = 'ltr' | 'rtl' | 'inherit';

type CanvasFillRule = 'nonzero' | 'evenodd';

type CanvasFontKerning = 'auto' | 'normal' | 'none';

type CanvasFontStretch =
  | 'ultra-condensed'
  | 'extra-condensed'
  | 'condensed'
  | 'semi-condensed'
  | 'normal'
  | 'semi-expanded'
  | 'expanded'
  | 'extra-expanded'
  | 'ultra-expanded';

type CanvasFontVariantCaps =
  | 'normal'
  | 'small-caps'
  | 'all-small-caps'
  | 'petite-caps'
  | 'all-petite-caps'
  | 'unicase'
  | 'titling-caps';

type CanvasLineCap = 'butt' | 'round' | 'square';

type CanvasLineJoin = 'round' | 'bevel' | 'miter';

type CanvasTextAlign = 'start' | 'end' | 'left' | 'right' | 'center';

type CanvasTextBaseline =
  | 'top'
  | 'hanging'
  | 'middle'
  | 'alphabetic'
  | 'ideographic'
  | 'bottom';

type CanvasTextRendering =
  | 'auto'
  | 'optimizeSpeed'
  | 'optimizeLegibility'
  | 'geometricPrecision';

type CodecState = 'unconfigured' | 'configured' | 'closed';

type ColorSpaceConversion = 'none' | 'default';

type CompositeOperation = 'replace' | 'add' | 'accumulate';

type CompositeOperationOrAuto = 'replace' | 'add' | 'accumulate' | 'auto';

type DocumentReadyState = 'loading' | 'interactive' | 'complete';

type DocumentVisibilityState = 'visible' | 'hidden';

type DOMParserSupportedType =
  | 'text/html'
  | 'text/xml'
  | 'application/xml'
  | 'application/xhtml+xml'
  | 'image/svg+xml';

type EncodedAudioChunkType = 'key' | 'delta';

type EncodedVideoChunkType = 'key' | 'delta';

type EndingType = 'transparent' | 'native';

type EndOfStreamError = 'network' | 'decode';

type FillMode = 'none' | 'forwards' | 'backwards' | 'both' | 'auto';

type FullscreenNavigationUI = 'auto' | 'show' | 'hide';

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

type HardwareAcceleration =
  | 'no-preference'
  | 'prefer-hardware'
  | 'prefer-software';

type ImageOrientation = 'from-image' | 'flipY';

type ImageSmoothingQuality = 'low' | 'medium' | 'high';

type LatencyMode = 'quality' | 'realtime';

type MediaDeviceKind = 'audioinput' | 'audiooutput' | 'videoinput';

type MediaStreamTrackState = 'live' | 'ended';

type NavigationFocusReset = 'after-transition' | 'manual';

type NavigationHistoryBehavior = 'auto' | 'push' | 'replace';

type NavigationScrollBehavior = 'after-transition' | 'manual';

type NavigationType = 'push' | 'replace' | 'reload' | 'traverse';

type NotificationDirection = 'auto' | 'ltr' | 'rtl';

type NotificationPermission = 'default' | 'denied' | 'granted';

type OffscreenRenderingContextId =
  | '2d'
  | 'bitmaprenderer'
  | 'webgl'
  | 'webgl2'
  | 'webgpu';

type PlaybackDirection =
  | 'normal'
  | 'reverse'
  | 'alternate'
  | 'alternate-reverse';

type PredefinedColorSpace = 'srgb' | 'display-p3';

type PremultiplyAlpha = 'none' | 'premultiply' | 'default';

type ReadableStreamReaderMode = 'byob';

type ReadableStreamType = 'bytes';

type ReadyState = 'closed' | 'open' | 'ended';

type ReferrerPolicy =
  | ''
  | 'no-referrer'
  | 'no-referrer-when-downgrade'
  | 'same-origin'
  | 'origin'
  | 'strict-origin'
  | 'origin-when-cross-origin'
  | 'strict-origin-when-cross-origin'
  | 'unsafe-url';

type RequestCache =
  | 'default'
  | 'no-store'
  | 'reload'
  | 'no-cache'
  | 'force-cache'
  | 'only-if-cached';

type RequestCredentials = 'omit' | 'same-origin' | 'include';

type RequestDestination =
  | ''
  | 'audio'
  | 'audioworklet'
  | 'document'
  | 'embed'
  | 'font'
  | 'frame'
  | 'iframe'
  | 'image'
  | 'json'
  | 'manifest'
  | 'object'
  | 'paintworklet'
  | 'report'
  | 'script'
  | 'sharedworker'
  | 'style'
  | 'track'
  | 'video'
  | 'worker'
  | 'xslt';

type RequestDuplex = 'half';

type RequestMode = 'navigate' | 'same-origin' | 'no-cors' | 'cors';

type RequestPriority = 'high' | 'low' | 'auto';

type RequestRedirect = 'follow' | 'error' | 'manual';

type ResizeQuality = 'pixelated' | 'low' | 'medium' | 'high';

type ResponseType =
  | 'basic'
  | 'cors'
  | 'default'
  | 'error'
  | 'opaque'
  | 'opaqueredirect';

type ScrollRestoration = 'auto' | 'manual';

type SelectionMode = 'select' | 'start' | 'end' | 'preserve';

type ShadowRootMode = 'open' | 'closed';

type SlotAssignmentMode = 'manual' | 'named';

type TextTrackKind =
  | 'subtitles'
  | 'captions'
  | 'descriptions'
  | 'chapters'
  | 'metadata';

type TextTrackMode = 'disabled' | 'hidden' | 'showing';

type VideoColorPrimaries =
  | 'bt709'
  | 'bt470bg'
  | 'smpte170m'
  | 'bt2020'
  | 'smpte432';

type VideoEncoderBitrateMode = 'constant' | 'variable' | 'quantizer';

type VideoFacingModeEnum = 'user' | 'environment' | 'left' | 'right';

type VideoMatrixCoefficients =
  | 'rgb'
  | 'bt709'
  | 'bt470bg'
  | 'smpte170m'
  | 'bt2020-ncl';

type VideoPixelFormat =
  | 'I420'
  | 'I420P10'
  | 'I420P12'
  | 'I420A'
  | 'I420AP10'
  | 'I420AP12'
  | 'I422'
  | 'I422P10'
  | 'I422P12'
  | 'I422A'
  | 'I422AP10'
  | 'I422AP12'
  | 'I444'
  | 'I444P10'
  | 'I444P12'
  | 'I444A'
  | 'I444AP10'
  | 'I444AP12'
  | 'NV12'
  | 'RGBA'
  | 'RGBX'
  | 'BGRA'
  | 'BGRX';

type VideoResizeModeEnum = 'none' | 'crop-and-scale';

type VideoTransferCharacteristics =
  | 'bt709'
  | 'smpte170m'
  | 'iec61966-2-1'
  | 'linear'
  | 'pq'
  | 'hlg';

type WebGLPowerPreference = 'default' | 'low-power' | 'high-performance';

type WorkerType = 'classic' | 'module';

type XMLHttpRequestResponseType =
  | ''
  | 'arraybuffer'
  | 'blob'
  | 'document'
  | 'json'
  | 'text';

type AddEventListenerOptions = {
  passive: boolean,
  once: boolean,
  signal: AbortSignal,
  capture: boolean,
};

type AnimationPlaybackEventInit = {
  currentTime: number | null,
  timelineTime: number | null,
  bubbles: boolean,
  cancelable: boolean,
  composed: boolean,
};

type AssignedNodesOptions = {
  flatten: boolean,
};

type AudioDataCopyToOptions = {
  planeIndex: number,
  frameOffset: number,
  frameCount: number,
  format: AudioSampleFormat,
};

type AudioDataInit = {
  format: AudioSampleFormat,
  sampleRate: number,
  numberOfFrames: number,
  numberOfChannels: number,
  timestamp: number,
  data: BufferSource,
  transfer: Array<ArrayBuffer>,
};

type AudioDecoderConfig = {
  codec: string,
  sampleRate: number,
  numberOfChannels: number,
  description: AllowSharedBufferSource,
};

type AudioDecoderInit = {
  output: AudioDataOutputCallback,
  error: WebCodecsErrorCallback,
};

type AudioDecoderSupport = {
  supported: boolean,
  config: AudioDecoderConfig,
};

type AudioEncoderConfig = {
  codec: string,
  sampleRate: number,
  numberOfChannels: number,
  bitrate: number,
  bitrateMode: BitrateMode,
};

type AudioEncoderInit = {
  output: EncodedAudioChunkOutputCallback,
  error: WebCodecsErrorCallback,
};

type AudioEncoderSupport = {
  supported: boolean,
  config: AudioEncoderConfig,
};

type BaseComputedKeyframe = {
  offset: number | null,
  computedOffset: number,
  easing: string,
  composite: CompositeOperationOrAuto,
};

type BaseKeyframe = {
  offset: number | null,
  easing: string,
  composite: CompositeOperationOrAuto,
};

type BasePropertyIndexedKeyframe = {
  offset: number | null | Array<number | null>,
  easing: string | Array<string>,
  composite: CompositeOperationOrAuto | Array<CompositeOperationOrAuto>,
};

type BlobPropertyBag = {
  type: string,
  endings: EndingType,
};

type BufferedChangeEventInit = {
  addedRanges: TimeRanges,
  removedRanges: TimeRanges,
  bubbles: boolean,
  cancelable: boolean,
  composed: boolean,
};

type CameraDevicePermissionDescriptor = {
  panTiltZoom: boolean,
};

type CanvasRenderingContext2DSettings = {
  alpha: boolean,
  desynchronized: boolean,
  colorSpace: PredefinedColorSpace,
  colorType: CanvasColorType,
  willReadFrequently: boolean,
};

type Capabilities = {};

type CloseWatcherOptions = {
  signal: AbortSignal,
};

type CommandEventInit = {
  source: Element | null,
  command: string,
  bubbles: boolean,
  cancelable: boolean,
  composed: boolean,
};

type CompositionEventInit = {
  data: string,
  view: Window | null,
  detail: number,
  which: number,
  bubbles: boolean,
  cancelable: boolean,
  composed: boolean,
};

type ComputedEffectTiming = {
  endTime: number,
  activeDuration: number,
  localTime: number | null,
  progress: number | null,
  currentIteration: number | null,
  delay: number,
  endDelay: number,
  fill: FillMode,
  iterationStart: number,
  iterations: number,
  duration: number | string,
  direction: PlaybackDirection,
  easing: string,
};

type ConstrainBooleanParameters = {
  exact: boolean,
  ideal: boolean,
};

type ConstrainDOMStringParameters = {
  exact: string | Array<string>,
  ideal: string | Array<string>,
};

type ConstrainDoubleRange = {
  exact: number,
  ideal: number,
  max: number,
  min: number,
};

type Constraints = {
  advanced: Array<ConstraintSet>,
};

type ConstraintSet = {};

type ConstrainULongRange = {
  exact: number,
  ideal: number,
  max: number,
  min: number,
};

type CSSStyleSheetInit = {
  baseURL: string,
  media: MediaList | string,
  disabled: boolean,
};

type CustomEventInit = {
  detail: any,
  bubbles: boolean,
  cancelable: boolean,
  composed: boolean,
};

type DeviceChangeEventInit = {
  devices: Array<MediaDeviceInfo>,
  bubbles: boolean,
  cancelable: boolean,
  composed: boolean,
};

type DocumentTimelineOptions = {
  originTime: number,
};

type DOMMatrix2DInit = {
  a: number,
  b: number,
  c: number,
  d: number,
  e: number,
  f: number,
  m11: number,
  m12: number,
  m21: number,
  m22: number,
  m41: number,
  m42: number,
};

type DOMMatrixInit = {
  m13: number,
  m14: number,
  m23: number,
  m24: number,
  m31: number,
  m32: number,
  m33: number,
  m34: number,
  m43: number,
  m44: number,
  is2D: boolean,
  a: number,
  b: number,
  c: number,
  d: number,
  e: number,
  f: number,
  m11: number,
  m12: number,
  m21: number,
  m22: number,
  m41: number,
  m42: number,
};

type DOMPointInit = {
  x: number,
  y: number,
  z: number,
  w: number,
};

type DOMQuadInit = {
  p1: DOMPointInit,
  p2: DOMPointInit,
  p3: DOMPointInit,
  p4: DOMPointInit,
};

type DOMRectInit = {
  x: number,
  y: number,
  width: number,
  height: number,
};

type DoubleRange = {
  max: number,
  min: number,
};

type DragEventInit = {
  dataTransfer: DataTransfer | null,
  screenX: number,
  screenY: number,
  clientX: number,
  clientY: number,
  button: number,
  buttons: number,
  relatedTarget: EventTarget | null,
};

type EffectTiming = {
  delay: number,
  endDelay: number,
  fill: FillMode,
  iterationStart: number,
  iterations: number,
  duration: number | string,
  direction: PlaybackDirection,
  easing: string,
};

type ElementCreationOptions = {
  is: string,
};

type ElementDefinitionOptions = {
  extends: string,
};

type EncodedAudioChunkInit = {
  type: EncodedAudioChunkType,
  timestamp: number,
  duration: number,
  data: AllowSharedBufferSource,
  transfer: Array<ArrayBuffer>,
};

type EncodedAudioChunkMetadata = {
  decoderConfig: AudioDecoderConfig,
};

type EncodedVideoChunkInit = {
  type: EncodedVideoChunkType,
  timestamp: number,
  duration: number,
  data: AllowSharedBufferSource,
  transfer: Array<ArrayBuffer>,
};

type EncodedVideoChunkMetadata = {
  decoderConfig: VideoDecoderConfig,
  svc: SvcOutputMetadata,
  alphaSideData: BufferSource,
};

type ErrorEventInit = {
  message: string,
  filename: string,
  lineno: number,
  colno: number,
  error: any,
  bubbles: boolean,
  cancelable: boolean,
  composed: boolean,
};

type EventInit = {
  bubbles: boolean,
  cancelable: boolean,
  composed: boolean,
};

type EventListenerOptions = {
  capture: boolean,
};

type EventModifierInit = {
  ctrlKey: boolean,
  shiftKey: boolean,
  altKey: boolean,
  metaKey: boolean,
  modifierAltGraph: boolean,
  modifierCapsLock: boolean,
  modifierFn: boolean,
  modifierFnLock: boolean,
  modifierHyper: boolean,
  modifierNumLock: boolean,
  modifierScrollLock: boolean,
  modifierSuper: boolean,
  modifierSymbol: boolean,
  modifierSymbolLock: boolean,
  view: Window | null,
  detail: number,
  which: number,
  bubbles: boolean,
  cancelable: boolean,
  composed: boolean,
};

type EventSourceInit = {
  withCredentials: boolean,
};

type FilePropertyBag = {
  lastModified: number,
  type: string,
  endings: EndingType,
};

type FocusEventInit = {
  relatedTarget: EventTarget | null,
  view: Window | null,
  detail: number,
  which: number,
  bubbles: boolean,
  cancelable: boolean,
  composed: boolean,
};

type FocusOptions = {
  preventScroll: boolean,
  focusVisible: boolean,
};

type FormDataEventInit = {
  formData: FormData,
  bubbles: boolean,
  cancelable: boolean,
  composed: boolean,
};

type FullscreenOptions = {
  navigationUI: FullscreenNavigationUI,
};

type GetAnimationsOptions = {
  subtree: boolean,
};

type GetHTMLOptions = {
  serializableShadowRoots: boolean,
  shadowRoots: Array<ShadowRoot>,
};

type GetNotificationOptions = {
  tag: string,
};

type GetRootNodeOptions = {
  composed: boolean,
};

type GPUBindGroupDescriptor = {
  layout: GPUBindGroupLayout,
  entries: Array<GPUBindGroupEntry>,
  label: string,
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
  visibility: GPUShaderStageFlags,
  buffer: GPUBufferBindingLayout,
  sampler: GPUSamplerBindingLayout,
  texture: GPUTextureBindingLayout,
  storageTexture: GPUStorageTextureBindingLayout,
  externalTexture: GPUExternalTextureBindingLayout,
};

type GPUBlendComponent = {
  operation: GPUBlendOperation,
  srcFactor: GPUBlendFactor,
  dstFactor: GPUBlendFactor,
};

type GPUBlendState = {
  color: GPUBlendComponent,
  alpha: GPUBlendComponent,
};

type GPUBufferBinding = {
  buffer: GPUBuffer,
  offset: GPUSize64,
  size: GPUSize64,
};

type GPUBufferBindingLayout = {
  type: GPUBufferBindingType,
  hasDynamicOffset: boolean,
  minBindingSize: GPUSize64,
};

type GPUBufferDescriptor = {
  size: GPUSize64,
  usage: GPUBufferUsageFlags,
  mappedAtCreation: boolean,
  label: string,
};

type GPUCanvasConfiguration = {
  device: GPUDevice,
  format: GPUTextureFormat,
  usage: GPUTextureUsageFlags,
  viewFormats: Array<GPUTextureFormat>,
  colorSpace: PredefinedColorSpace,
  toneMapping: GPUCanvasToneMapping,
  alphaMode: GPUCanvasAlphaMode,
};

type GPUCanvasToneMapping = {
  mode: GPUCanvasToneMappingMode,
};

type GPUColorDict = {
  r: number,
  g: number,
  b: number,
  a: number,
};

type GPUColorTargetState = {
  format: GPUTextureFormat,
  blend: GPUBlendState,
  writeMask: GPUColorWriteFlags,
};

type GPUCommandBufferDescriptor = {
  label: string,
};

type GPUCommandEncoderDescriptor = {
  label: string,
};

type GPUComputePassDescriptor = {
  timestampWrites: GPUComputePassTimestampWrites,
  label: string,
};

type GPUComputePassTimestampWrites = {
  querySet: GPUQuerySet,
  beginningOfPassWriteIndex: GPUSize32,
  endOfPassWriteIndex: GPUSize32,
};

type GPUComputePipelineDescriptor = {
  compute: GPUProgrammableStage,
  layout: GPUPipelineLayout | GPUAutoLayoutMode,
  label: string,
};

type GPUCopyExternalImageDestInfo = {
  colorSpace: PredefinedColorSpace,
  premultipliedAlpha: boolean,
  texture: GPUTexture,
  mipLevel: GPUIntegerCoordinate,
  origin: GPUOrigin3D,
  aspect: GPUTextureAspect,
};

type GPUCopyExternalImageSourceInfo = {
  source: GPUCopyExternalImageSource,
  origin: GPUOrigin2D,
  flipY: boolean,
};

type GPUDepthStencilState = {
  format: GPUTextureFormat,
  depthWriteEnabled: boolean,
  depthCompare: GPUCompareFunction,
  stencilFront: GPUStencilFaceState,
  stencilBack: GPUStencilFaceState,
  stencilReadMask: GPUStencilValue,
  stencilWriteMask: GPUStencilValue,
  depthBias: GPUDepthBias,
  depthBiasSlopeScale: number,
  depthBiasClamp: number,
};

type GPUDeviceDescriptor = {
  requiredFeatures: Array<GPUFeatureName>,
  requiredLimits: string | GPUSize64 | void,
  defaultQueue: GPUQueueDescriptor,
  label: string,
};

type GPUExtent3DDict = {
  width: GPUIntegerCoordinate,
  height: GPUIntegerCoordinate,
  depthOrArrayLayers: GPUIntegerCoordinate,
};

type GPUExternalTextureBindingLayout = {};

type GPUExternalTextureDescriptor = {
  source: HTMLVideoElement | VideoFrame,
  colorSpace: PredefinedColorSpace,
  label: string,
};

type GPUFragmentState = {
  targets: Array<GPUColorTargetState | null>,
  module: GPUShaderModule,
  entryPoint: string,
  constants: string | GPUPipelineConstantValue,
};

type GPUMultisampleState = {
  count: GPUSize32,
  mask: GPUSampleMask,
  alphaToCoverageEnabled: boolean,
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
  layout: GPUPipelineLayout | GPUAutoLayoutMode,
  label: string,
};

type GPUPipelineErrorInit = {
  reason: GPUPipelineErrorReason,
};

type GPUPipelineLayoutDescriptor = {
  bindGroupLayouts: Array<GPUBindGroupLayout | null>,
  label: string,
};

type GPUPrimitiveState = {
  topology: GPUPrimitiveTopology,
  stripIndexFormat: GPUIndexFormat,
  frontFace: GPUFrontFace,
  cullMode: GPUCullMode,
  unclippedDepth: boolean,
};

type GPUProgrammableStage = {
  module: GPUShaderModule,
  entryPoint: string,
  constants: string | GPUPipelineConstantValue,
};

type GPUQuerySetDescriptor = {
  type: GPUQueryType,
  count: GPUSize32,
  label: string,
};

type GPUQueueDescriptor = {
  label: string,
};

type GPURenderBundleDescriptor = {
  label: string,
};

type GPURenderBundleEncoderDescriptor = {
  depthReadOnly: boolean,
  stencilReadOnly: boolean,
  colorFormats: Array<GPUTextureFormat | null>,
  depthStencilFormat: GPUTextureFormat,
  sampleCount: GPUSize32,
  label: string,
};

type GPURenderPassColorAttachment = {
  view: GPUTextureView,
  depthSlice: GPUIntegerCoordinate,
  resolveTarget: GPUTextureView,
  clearValue: GPUColor,
  loadOp: GPULoadOp,
  storeOp: GPUStoreOp,
};

type GPURenderPassDepthStencilAttachment = {
  view: GPUTextureView,
  depthClearValue: number,
  depthLoadOp: GPULoadOp,
  depthStoreOp: GPUStoreOp,
  depthReadOnly: boolean,
  stencilClearValue: GPUStencilValue,
  stencilLoadOp: GPULoadOp,
  stencilStoreOp: GPUStoreOp,
  stencilReadOnly: boolean,
};

type GPURenderPassDescriptor = {
  colorAttachments: Array<GPURenderPassColorAttachment | null>,
  depthStencilAttachment: GPURenderPassDepthStencilAttachment,
  occlusionQuerySet: GPUQuerySet,
  timestampWrites: GPURenderPassTimestampWrites,
  maxDrawCount: GPUSize64,
  label: string,
};

type GPURenderPassLayout = {
  colorFormats: Array<GPUTextureFormat | null>,
  depthStencilFormat: GPUTextureFormat,
  sampleCount: GPUSize32,
  label: string,
};

type GPURenderPassTimestampWrites = {
  querySet: GPUQuerySet,
  beginningOfPassWriteIndex: GPUSize32,
  endOfPassWriteIndex: GPUSize32,
};

type GPURenderPipelineDescriptor = {
  vertex: GPUVertexState,
  primitive: GPUPrimitiveState,
  depthStencil: GPUDepthStencilState,
  multisample: GPUMultisampleState,
  fragment: GPUFragmentState,
  layout: GPUPipelineLayout | GPUAutoLayoutMode,
  label: string,
};

type GPURequestAdapterOptions = {
  featureLevel: string,
  powerPreference: GPUPowerPreference,
  forceFallbackAdapter: boolean,
  xrCompatible: boolean,
};

type GPUSamplerBindingLayout = {
  type: GPUSamplerBindingType,
};

type GPUSamplerDescriptor = {
  addressModeU: GPUAddressMode,
  addressModeV: GPUAddressMode,
  addressModeW: GPUAddressMode,
  magFilter: GPUFilterMode,
  minFilter: GPUFilterMode,
  mipmapFilter: GPUMipmapFilterMode,
  lodMinClamp: number,
  lodMaxClamp: number,
  compare: GPUCompareFunction,
  maxAnisotropy: number,
  label: string,
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
  failOp: GPUStencilOperation,
  depthFailOp: GPUStencilOperation,
  passOp: GPUStencilOperation,
};

type GPUStorageTextureBindingLayout = {
  access: GPUStorageTextureAccess,
  format: GPUTextureFormat,
  viewDimension: GPUTextureViewDimension,
};

type GPUTexelCopyBufferInfo = {
  buffer: GPUBuffer,
  offset: GPUSize64,
  bytesPerRow: GPUSize32,
  rowsPerImage: GPUSize32,
};

type GPUTexelCopyBufferLayout = {
  offset: GPUSize64,
  bytesPerRow: GPUSize32,
  rowsPerImage: GPUSize32,
};

type GPUTexelCopyTextureInfo = {
  texture: GPUTexture,
  mipLevel: GPUIntegerCoordinate,
  origin: GPUOrigin3D,
  aspect: GPUTextureAspect,
};

type GPUTextureBindingLayout = {
  sampleType: GPUTextureSampleType,
  viewDimension: GPUTextureViewDimension,
  multisampled: boolean,
};

type GPUTextureDescriptor = {
  size: GPUExtent3D,
  mipLevelCount: GPUIntegerCoordinate,
  sampleCount: GPUSize32,
  dimension: GPUTextureDimension,
  format: GPUTextureFormat,
  usage: GPUTextureUsageFlags,
  viewFormats: Array<GPUTextureFormat>,
  label: string,
};

type GPUTextureViewDescriptor = {
  format: GPUTextureFormat,
  dimension: GPUTextureViewDimension,
  usage: GPUTextureUsageFlags,
  aspect: GPUTextureAspect,
  baseMipLevel: GPUIntegerCoordinate,
  mipLevelCount: GPUIntegerCoordinate,
  baseArrayLayer: GPUIntegerCoordinate,
  arrayLayerCount: GPUIntegerCoordinate,
  label: string,
};

type GPUUncapturedErrorEventInit = {
  error: GPUError,
  bubbles: boolean,
  cancelable: boolean,
  composed: boolean,
};

type GPUVertexAttribute = {
  format: GPUVertexFormat,
  offset: GPUSize64,
  shaderLocation: GPUIndex32,
};

type GPUVertexBufferLayout = {
  arrayStride: GPUSize64,
  stepMode: GPUVertexStepMode,
  attributes: Array<GPUVertexAttribute>,
};

type GPUVertexState = {
  buffers: Array<GPUVertexBufferLayout | null>,
  module: GPUShaderModule,
  entryPoint: string,
  constants: string | GPUPipelineConstantValue,
};

type HashChangeEventInit = {
  oldURL: string,
  newURL: string,
  bubbles: boolean,
  cancelable: boolean,
  composed: boolean,
};

type ImageBitmapOptions = {
  imageOrientation: ImageOrientation,
  premultiplyAlpha: PremultiplyAlpha,
  colorSpaceConversion: ColorSpaceConversion,
  resizeWidth: number,
  resizeHeight: number,
  resizeQuality: ResizeQuality,
};

type ImageBitmapRenderingContextSettings = {
  alpha: boolean,
};

type ImageDataSettings = {
  colorSpace: PredefinedColorSpace,
};

type ImageDecodeOptions = {
  frameIndex: number,
  completeFramesOnly: boolean,
};

type ImageDecodeResult = {
  image: VideoFrame,
  complete: boolean,
};

type ImageDecoderInit = {
  type: string,
  data: ImageBufferSource,
  colorSpaceConversion: ColorSpaceConversion,
  desiredWidth: number,
  desiredHeight: number,
  preferAnimation: boolean,
  transfer: Array<ArrayBuffer>,
};

type ImageEncodeOptions = {
  type: string,
  quality: number,
};

type InputEventInit = {
  data: string | null,
  isComposing: boolean,
  inputType: string,
  view: Window | null,
  detail: number,
  which: number,
  bubbles: boolean,
  cancelable: boolean,
  composed: boolean,
};

type KeyboardEventInit = {
  key: string,
  code: string,
  location: number,
  repeat: boolean,
  isComposing: boolean,
  charCode: number,
  keyCode: number,
  ctrlKey: boolean,
  shiftKey: boolean,
  altKey: boolean,
  metaKey: boolean,
  modifierAltGraph: boolean,
  modifierCapsLock: boolean,
  modifierFn: boolean,
  modifierFnLock: boolean,
  modifierHyper: boolean,
  modifierNumLock: boolean,
  modifierScrollLock: boolean,
  modifierSuper: boolean,
  modifierSymbol: boolean,
  modifierSymbolLock: boolean,
  view: Window | null,
  detail: number,
  which: number,
  bubbles: boolean,
  cancelable: boolean,
  composed: boolean,
};

type KeyframeAnimationOptions = {
  id: string,
  timeline: AnimationTimeline | null,
  composite: CompositeOperation,
  pseudoElement: string | null,
  delay: number,
  endDelay: number,
  fill: FillMode,
  iterationStart: number,
  iterations: number,
  duration: number | string,
  direction: PlaybackDirection,
  easing: string,
};

type KeyframeEffectOptions = {
  composite: CompositeOperation,
  pseudoElement: string | null,
  delay: number,
  endDelay: number,
  fill: FillMode,
  iterationStart: number,
  iterations: number,
  duration: number | string,
  direction: PlaybackDirection,
  easing: string,
};

type MediaStreamConstraints = {
  video: boolean | MediaTrackConstraints,
  audio: boolean | MediaTrackConstraints,
};

type MediaStreamTrackEventInit = {
  track: MediaStreamTrack,
  bubbles: boolean,
  cancelable: boolean,
  composed: boolean,
};

type MediaTrackCapabilities = {
  width: ULongRange,
  height: ULongRange,
  aspectRatio: DoubleRange,
  frameRate: DoubleRange,
  facingMode: Array<string>,
  resizeMode: Array<string>,
  sampleRate: ULongRange,
  sampleSize: ULongRange,
  echoCancellation: Array<boolean>,
  autoGainControl: Array<boolean>,
  noiseSuppression: Array<boolean>,
  latency: DoubleRange,
  channelCount: ULongRange,
  deviceId: string,
  groupId: string,
  backgroundBlur: Array<boolean>,
};

type MediaTrackConstraints = {
  advanced: Array<MediaTrackConstraintSet>,
  width: ConstrainULong,
  height: ConstrainULong,
  aspectRatio: ConstrainDouble,
  frameRate: ConstrainDouble,
  facingMode: ConstrainDOMString,
  resizeMode: ConstrainDOMString,
  sampleRate: ConstrainULong,
  sampleSize: ConstrainULong,
  echoCancellation: ConstrainBoolean,
  autoGainControl: ConstrainBoolean,
  noiseSuppression: ConstrainBoolean,
  latency: ConstrainDouble,
  channelCount: ConstrainULong,
  deviceId: ConstrainDOMString,
  groupId: ConstrainDOMString,
  backgroundBlur: ConstrainBoolean,
};

type MediaTrackConstraintSet = {
  width: ConstrainULong,
  height: ConstrainULong,
  aspectRatio: ConstrainDouble,
  frameRate: ConstrainDouble,
  facingMode: ConstrainDOMString,
  resizeMode: ConstrainDOMString,
  sampleRate: ConstrainULong,
  sampleSize: ConstrainULong,
  echoCancellation: ConstrainBoolean,
  autoGainControl: ConstrainBoolean,
  noiseSuppression: ConstrainBoolean,
  latency: ConstrainDouble,
  channelCount: ConstrainULong,
  deviceId: ConstrainDOMString,
  groupId: ConstrainDOMString,
  backgroundBlur: ConstrainBoolean,
};

type MediaTrackSettings = {
  width: number,
  height: number,
  aspectRatio: number,
  frameRate: number,
  facingMode: string,
  resizeMode: string,
  sampleRate: number,
  sampleSize: number,
  echoCancellation: boolean,
  autoGainControl: boolean,
  noiseSuppression: boolean,
  latency: number,
  channelCount: number,
  deviceId: string,
  groupId: string,
  backgroundBlur: boolean,
};

type MediaTrackSupportedConstraints = {
  width: boolean,
  height: boolean,
  aspectRatio: boolean,
  frameRate: boolean,
  facingMode: boolean,
  resizeMode: boolean,
  sampleRate: boolean,
  sampleSize: boolean,
  echoCancellation: boolean,
  autoGainControl: boolean,
  noiseSuppression: boolean,
  latency: boolean,
  channelCount: boolean,
  deviceId: boolean,
  groupId: boolean,
  backgroundBlur: boolean,
};

type MessageEventInit = {
  data: any,
  origin: string,
  lastEventId: string,
  source: MessageEventSource | null,
  ports: Array<MessagePort>,
  bubbles: boolean,
  cancelable: boolean,
  composed: boolean,
};

type MouseEventInit = {
  screenX: number,
  screenY: number,
  clientX: number,
  clientY: number,
  button: number,
  buttons: number,
  relatedTarget: EventTarget | null,
  ctrlKey: boolean,
  shiftKey: boolean,
  altKey: boolean,
  metaKey: boolean,
  modifierAltGraph: boolean,
  modifierCapsLock: boolean,
  modifierFn: boolean,
  modifierFnLock: boolean,
  modifierHyper: boolean,
  modifierNumLock: boolean,
  modifierScrollLock: boolean,
  modifierSuper: boolean,
  modifierSymbol: boolean,
  modifierSymbolLock: boolean,
};

type MutationObserverInit = {
  childList: boolean,
  attributes: boolean,
  characterData: boolean,
  subtree: boolean,
  attributeOldValue: boolean,
  characterDataOldValue: boolean,
  attributeFilter: Array<string>,
};

type NavigateEventInit = {
  navigationType: NavigationType,
  destination: NavigationDestination,
  canIntercept: boolean,
  userInitiated: boolean,
  hashChange: boolean,
  signal: AbortSignal,
  formData: FormData | null,
  downloadRequest: string | null,
  info: any,
  hasUAVisualTransition: boolean,
  sourceElement: Element | null,
  bubbles: boolean,
  cancelable: boolean,
  composed: boolean,
};

type NavigationCurrentEntryChangeEventInit = {
  navigationType: NavigationType | null,
  from: NavigationHistoryEntry,
  bubbles: boolean,
  cancelable: boolean,
  composed: boolean,
};

type NavigationInterceptOptions = {
  handler: NavigationInterceptHandler,
  focusReset: NavigationFocusReset,
  scroll: NavigationScrollBehavior,
};

type NavigationNavigateOptions = {
  state: any,
  history: NavigationHistoryBehavior,
  info: any,
};

type NavigationOptions = {
  info: any,
};

type NavigationReloadOptions = {
  state: any,
  info: any,
};

type NavigationResult = {
  committed: NavigationHistoryEntry,
  finished: NavigationHistoryEntry,
};

type NavigationUpdateCurrentEntryOptions = {
  state: any,
};

type NotificationAction = {
  action: string,
  title: string,
  icon: string,
};

type NotificationEventInit = {
  notification: Notification,
  action: string,
};

type NotificationOptions = {
  dir: NotificationDirection,
  lang: string,
  body: string,
  tag: string,
  image: string,
  icon: string,
  badge: string,
  vibrate: VibratePattern,
  timestamp: EpochTimeStamp,
  renotify: boolean,
  silent: boolean | null,
  requireInteraction: boolean,
  data: any,
  actions: Array<NotificationAction>,
};

type OptionalEffectTiming = {
  delay: number,
  endDelay: number,
  fill: FillMode,
  iterationStart: number,
  iterations: number,
  duration: number | string,
  direction: PlaybackDirection,
  easing: string,
};

type PageRevealEventInit = {
  viewTransition: ViewTransition | null,
  bubbles: boolean,
  cancelable: boolean,
  composed: boolean,
};

type PageSwapEventInit = {
  activation: NavigationActivation | null,
  viewTransition: ViewTransition | null,
  bubbles: boolean,
  cancelable: boolean,
  composed: boolean,
};

type PageTransitionEventInit = {
  persisted: boolean,
  bubbles: boolean,
  cancelable: boolean,
  composed: boolean,
};

type PlaneLayout = {
  offset: number,
  stride: number,
};

type PopStateEventInit = {
  state: any,
  hasUAVisualTransition: boolean,
  bubbles: boolean,
  cancelable: boolean,
  composed: boolean,
};

type ProgressEventInit = {
  lengthComputable: boolean,
  loaded: number,
  total: number,
  bubbles: boolean,
  cancelable: boolean,
  composed: boolean,
};

type PromiseRejectionEventInit = {
  promise: Object,
  reason: any,
  bubbles: boolean,
  cancelable: boolean,
  composed: boolean,
};

type QueuingStrategy = {
  highWaterMark: number,
  size: QueuingStrategySize,
};

type QueuingStrategyInit = {
  highWaterMark: number,
};

type ReadableStreamBYOBReaderReadOptions = {
  min: number,
};

type ReadableStreamGetReaderOptions = {
  mode: ReadableStreamReaderMode,
};

type ReadableStreamIteratorOptions = {
  preventCancel: boolean,
};

type ReadableStreamReadResult = {
  value: any,
  done: boolean,
};

type ReadableWritablePair = {
  readable: ReadableStream,
  writable: WritableStream,
};

type RequestInit = {
  method: string,
  headers: HeadersInit,
  body: BodyInit | null,
  referrer: string,
  referrerPolicy: ReferrerPolicy,
  mode: RequestMode,
  credentials: RequestCredentials,
  cache: RequestCache,
  redirect: RequestRedirect,
  integrity: string,
  keepalive: boolean,
  signal: AbortSignal | null,
  duplex: RequestDuplex,
  priority: RequestPriority,
  window: any,
};

type ResponseInit = {
  status: number,
  statusText: string,
  headers: HeadersInit,
};

type Settings = {};

type ShadowRootInit = {
  mode: ShadowRootMode,
  delegatesFocus: boolean,
  slotAssignment: SlotAssignmentMode,
  clonable: boolean,
  serializable: boolean,
};

type ShowPopoverOptions = {
  source: HTMLElement,
};

type StaticRangeInit = {
  startContainer: Node,
  startOffset: number,
  endContainer: Node,
  endOffset: number,
};

type StorageEventInit = {
  key: string | null,
  oldValue: string | null,
  newValue: string | null,
  url: string,
  storageArea: Storage | null,
  bubbles: boolean,
  cancelable: boolean,
  composed: boolean,
};

type StreamPipeOptions = {
  preventClose: boolean,
  preventAbort: boolean,
  preventCancel: boolean,
  signal: AbortSignal,
};

type StructuredSerializeOptions = {
  transfer: Array<Object>,
};

type SubmitEventInit = {
  submitter: HTMLElement | null,
  bubbles: boolean,
  cancelable: boolean,
  composed: boolean,
};

type SvcOutputMetadata = {
  temporalLayerId: number,
};

type SVGBoundingBoxOptions = {
  fill: boolean,
  stroke: boolean,
  markers: boolean,
  clipped: boolean,
};

type TextDecodeOptions = {
  stream: boolean,
};

type TextDecoderOptions = {
  fatal: boolean,
  ignoreBOM: boolean,
};

type TextEncoderEncodeIntoResult = {
  read: number,
  written: number,
};

type ToggleEventInit = {
  oldState: string,
  newState: string,
  bubbles: boolean,
  cancelable: boolean,
  composed: boolean,
};

type TogglePopoverOptions = {
  force: boolean,
  source: HTMLElement,
};

type TrackEventInit = {
  track: VideoTrack | AudioTrack | TextTrack | null,
  bubbles: boolean,
  cancelable: boolean,
  composed: boolean,
};

type Transformer = {
  start: TransformerStartCallback,
  transform: TransformerTransformCallback,
  flush: TransformerFlushCallback,
  cancel: TransformerCancelCallback,
  readableType: any,
  writableType: any,
};

type TrustedTypePolicyOptions = {
  createHTML: CreateHTMLCallback,
  createScript: CreateScriptCallback,
  createScriptURL: CreateScriptURLCallback,
};

type UIEventInit = {
  view: Window | null,
  detail: number,
  which: number,
  bubbles: boolean,
  cancelable: boolean,
  composed: boolean,
};

type ULongRange = {
  max: number,
  min: number,
};

type UnderlyingSink = {
  start: UnderlyingSinkStartCallback,
  write: UnderlyingSinkWriteCallback,
  close: UnderlyingSinkCloseCallback,
  abort: UnderlyingSinkAbortCallback,
  type: any,
};

type UnderlyingSource = {
  start: UnderlyingSourceStartCallback,
  pull: UnderlyingSourcePullCallback,
  cancel: UnderlyingSourceCancelCallback,
  type: ReadableStreamType,
  autoAllocateChunkSize: number,
};

type URLPatternComponentResult = {
  input: string,
  groups: string | string | void,
};

type URLPatternInit = {
  protocol: string,
  username: string,
  password: string,
  hostname: string,
  port: string,
  pathname: string,
  search: string,
  hash: string,
  baseURL: string,
};

type URLPatternOptions = {
  ignoreCase: boolean,
};

type URLPatternResult = {
  inputs: Array<URLPatternInput>,
  protocol: URLPatternComponentResult,
  username: URLPatternComponentResult,
  password: URLPatternComponentResult,
  hostname: URLPatternComponentResult,
  port: URLPatternComponentResult,
  pathname: URLPatternComponentResult,
  search: URLPatternComponentResult,
  hash: URLPatternComponentResult,
};

type ValidityStateFlags = {
  valueMissing: boolean,
  typeMismatch: boolean,
  patternMismatch: boolean,
  tooLong: boolean,
  tooShort: boolean,
  rangeUnderflow: boolean,
  rangeOverflow: boolean,
  stepMismatch: boolean,
  badInput: boolean,
  customError: boolean,
};

type VideoColorSpaceInit = {
  primaries: VideoColorPrimaries | null,
  transfer: VideoTransferCharacteristics | null,
  matrix: VideoMatrixCoefficients | null,
  fullRange: boolean | null,
};

type VideoDecoderConfig = {
  codec: string,
  description: AllowSharedBufferSource,
  codedWidth: number,
  codedHeight: number,
  displayAspectWidth: number,
  displayAspectHeight: number,
  colorSpace: VideoColorSpaceInit,
  hardwareAcceleration: HardwareAcceleration,
  optimizeForLatency: boolean,
  rotation: number,
  flip: boolean,
};

type VideoDecoderInit = {
  output: VideoFrameOutputCallback,
  error: WebCodecsErrorCallback,
};

type VideoDecoderSupport = {
  supported: boolean,
  config: VideoDecoderConfig,
};

type VideoEncoderConfig = {
  codec: string,
  width: number,
  height: number,
  displayWidth: number,
  displayHeight: number,
  bitrate: number,
  framerate: number,
  hardwareAcceleration: HardwareAcceleration,
  alpha: AlphaOption,
  scalabilityMode: string,
  bitrateMode: VideoEncoderBitrateMode,
  latencyMode: LatencyMode,
  contentHint: string,
};

type VideoEncoderEncodeOptions = {
  keyFrame: boolean,
};

type VideoEncoderInit = {
  output: EncodedVideoChunkOutputCallback,
  error: WebCodecsErrorCallback,
};

type VideoEncoderSupport = {
  supported: boolean,
  config: VideoEncoderConfig,
};

type VideoFrameBufferInit = {
  format: VideoPixelFormat,
  codedWidth: number,
  codedHeight: number,
  timestamp: number,
  duration: number,
  layout: Array<PlaneLayout>,
  visibleRect: DOMRectInit,
  rotation: number,
  flip: boolean,
  displayWidth: number,
  displayHeight: number,
  colorSpace: VideoColorSpaceInit,
  transfer: Array<ArrayBuffer>,
  metadata: VideoFrameMetadata,
};

type VideoFrameCopyToOptions = {
  rect: DOMRectInit,
  layout: Array<PlaneLayout>,
  format: VideoPixelFormat,
  colorSpace: PredefinedColorSpace,
};

type VideoFrameInit = {
  duration: number,
  timestamp: number,
  alpha: AlphaOption,
  visibleRect: DOMRectInit,
  rotation: number,
  flip: boolean,
  displayWidth: number,
  displayHeight: number,
  metadata: VideoFrameMetadata,
};

type VideoFrameMetadata = {};

type WebGLContextAttributes = {
  alpha: boolean,
  depth: boolean,
  stencil: boolean,
  antialias: boolean,
  premultipliedAlpha: boolean,
  preserveDrawingBuffer: boolean,
  powerPreference: WebGLPowerPreference,
  failIfMajorPerformanceCaveat: boolean,
  desynchronized: boolean,
};

type WebGLContextEventInit = {
  statusMessage: string,
  bubbles: boolean,
  cancelable: boolean,
  composed: boolean,
};

type WheelEventInit = {
  deltaX: number,
  deltaY: number,
  deltaZ: number,
  deltaMode: number,
  screenX: number,
  screenY: number,
  clientX: number,
  clientY: number,
  button: number,
  buttons: number,
  relatedTarget: EventTarget | null,
  ctrlKey: boolean,
  shiftKey: boolean,
  altKey: boolean,
  metaKey: boolean,
  modifierAltGraph: boolean,
  modifierCapsLock: boolean,
  modifierFn: boolean,
  modifierFnLock: boolean,
  modifierHyper: boolean,
  modifierNumLock: boolean,
  modifierScrollLock: boolean,
  modifierSuper: boolean,
  modifierSymbol: boolean,
  modifierSymbolLock: boolean,
};

type WindowPostMessageOptions = {
  targetOrigin: string,
  transfer: Array<Object>,
};

type WorkerOptions = {
  type: WorkerType,
  credentials: RequestCredentials,
  name: string,
};

type WorkletOptions = {
  credentials: RequestCredentials,
};

type AudioDataOutputCallback = (output: AudioData) => void;

type BlobCallback = (blob: Blob | null) => void;

type CreateHTMLCallback = (input: string, arguments_: any) => string | null;

type CreateScriptCallback = (input: string, arguments_: any) => string | null;

type CreateScriptURLCallback = (
  input: string,
  arguments_: any,
) => string | null;

type CustomElementConstructor = () => HTMLElement;

type EncodedAudioChunkOutputCallback = (
  output: EncodedAudioChunk,
  metadata?: EncodedAudioChunkMetadata,
) => void;

type EncodedVideoChunkOutputCallback = (
  chunk: EncodedVideoChunk,
  metadata?: EncodedVideoChunkMetadata,
) => void;

type EventHandler = (event: Event) => any;

type EventHandlerNonNull = (event: Event) => any;

type FrameRequestCallback = (time: number) => void;

type FunctionStringCallback = (data: string) => void;

type MutationCallback = (
  mutations: Array<MutationRecord>,
  observer: MutationObserver,
) => void;

type NavigationInterceptHandler = () => void;

type NavigatorUserMediaErrorCallback = (error: DOMException) => void;

type NavigatorUserMediaSuccessCallback = (stream: MediaStream) => void;

type NotificationPermissionCallback = (
  permission: NotificationPermission,
) => void;

type OnBeforeUnloadEventHandlerNonNull = (event: Event) => string | null;

type OnErrorEventHandlerNonNull = (
  event: Event | string,
  source?: string,
  lineno?: number,
  colno?: number,
  error?: any,
) => any;

type QueuingStrategySize = (chunk: any) => number;

type TransformerCancelCallback = (reason: any) => void;

type TransformerFlushCallback = (
  controller: TransformStreamDefaultController,
) => void;

type TransformerStartCallback = (
  controller: TransformStreamDefaultController,
) => any;

type TransformerTransformCallback = (
  chunk: any,
  controller: TransformStreamDefaultController,
) => void;

type UnderlyingSinkAbortCallback = (reason?: any) => void;

type UnderlyingSinkCloseCallback = () => void;

type UnderlyingSinkStartCallback = (
  controller: WritableStreamDefaultController,
) => any;

type UnderlyingSinkWriteCallback = (
  chunk: any,
  controller: WritableStreamDefaultController,
) => void;

type UnderlyingSourceCancelCallback = (reason?: any) => void;

type UnderlyingSourcePullCallback = (
  controller: ReadableStreamController,
) => void;

type UnderlyingSourceStartCallback = (
  controller: ReadableStreamController,
) => any;

type UpdateCallback = () => any;

type VideoFrameOutputCallback = (output: VideoFrame) => void;

type VoidFunction = () => void;

type WebCodecsErrorCallback = (error: DOMException) => void;

interface EventListener {
  handleEvent(event: Event): void;
}

declare class NodeFilter {
  static +FILTER_ACCEPT: 1;
  static +FILTER_REJECT: 2;
  static +FILTER_SKIP: 3;
  static +SHOW_ALL: 0xffffffff;
  static +SHOW_ATTRIBUTE: 0x2;
  static +SHOW_CDATA_SECTION: 0x8;
  static +SHOW_COMMENT: 0x80;
  static +SHOW_DOCUMENT: 0x100;
  static +SHOW_DOCUMENT_FRAGMENT: 0x400;
  static +SHOW_DOCUMENT_TYPE: 0x200;
  static +SHOW_ELEMENT: 0x1;
  static +SHOW_ENTITY: 0x20;
  static +SHOW_ENTITY_REFERENCE: 0x10;
  static +SHOW_NOTATION: 0x800;
  static +SHOW_PROCESSING_INSTRUCTION: 0x40;
  static +SHOW_TEXT: 0x4;

  acceptNode(node: Node): number;
}

interface XPathNSResolver {
  lookupNamespaceURI(prefix: string | null): string | null;
}

declare class AbortController {
  +signal: AbortSignal;

  constructor(): void;

  abort(reason?: any): void;
}

declare class AbortSignal extends EventTarget {
  +aborted: boolean;
  onabort: EventHandler;
  +reason: any;

  static abort(reason?: any): AbortSignal;
  static any(signals: Array<AbortSignal>): AbortSignal;
  static timeout(milliseconds: number): AbortSignal;
  throwIfAborted(): void;
}

declare class AbstractRange {
  +collapsed: boolean;
  +endContainer: Node;
  +endOffset: number;
  +startContainer: Node;
  +startOffset: number;
}

declare class Animation extends EventTarget {
  currentTime: number | null;
  effect: AnimationEffect | null;
  +finished: Animation;
  id: string;
  oncancel: EventHandler;
  onfinish: EventHandler;
  onremove: EventHandler;
  +pending: boolean;
  playbackRate: number;
  +playState: AnimationPlayState;
  +ready: Animation;
  +replaceState: AnimationReplaceState;
  startTime: number | null;
  timeline: AnimationTimeline | null;

  constructor(
    effect?: AnimationEffect | null,
    timeline?: AnimationTimeline | null,
  ): void;

  cancel(): void;
  commitStyles(): void;
  finish(): void;
  pause(): void;
  persist(): void;
  play(): void;
  reverse(): void;
  updatePlaybackRate(playbackRate: number): void;
}

declare class AnimationEffect {
  getComputedTiming(): ComputedEffectTiming;
  getTiming(): EffectTiming;
  updateTiming(timing?: OptionalEffectTiming): void;
}

declare class AnimationPlaybackEvent extends Event {
  +currentTime: number | null;
  +timelineTime: number | null;

  constructor(type: string, eventInitDict?: AnimationPlaybackEventInit): void;
}

declare class AnimationTimeline {
  +currentTime: number | null;
}

declare class Attr extends Node {
  +localName: string;
  +name: string;
  +namespaceURI: string | null;
  +ownerElement: Element | null;
  +prefix: string | null;
  +specified: boolean;
  value: string;
}

declare class AudioData {
  +duration: number;
  +format: AudioSampleFormat | null;
  +numberOfChannels: number;
  +numberOfFrames: number;
  +sampleRate: number;
  +timestamp: number;

  constructor(init: AudioDataInit): void;

  allocationSize(options: AudioDataCopyToOptions): number;
  clone(): AudioData;
  close(): void;
  copyTo(
    destination: AllowSharedBufferSource,
    options: AudioDataCopyToOptions,
  ): void;
}

declare class AudioDecoder extends EventTarget {
  +decodeQueueSize: number;
  ondequeue: EventHandler;
  +state: CodecState;

  constructor(init: AudioDecoderInit): void;

  static isConfigSupported(config: AudioDecoderConfig): AudioDecoderSupport;
  close(): void;
  configure(config: AudioDecoderConfig): void;
  decode(chunk: EncodedAudioChunk): void;
  flush(): void;
  reset(): void;
}

declare class AudioEncoder extends EventTarget {
  +encodeQueueSize: number;
  ondequeue: EventHandler;
  +state: CodecState;

  constructor(init: AudioEncoderInit): void;

  static isConfigSupported(config: AudioEncoderConfig): AudioEncoderSupport;
  close(): void;
  configure(config: AudioEncoderConfig): void;
  encode(data: AudioData): void;
  flush(): void;
  reset(): void;
}

declare class AudioTrack {
  enabled: boolean;
  +id: string;
  +kind: string;
  +label: string;
  +language: string;
  +sourceBuffer: SourceBuffer | null;
}

declare class AudioTrackList extends EventTarget {
  +length: number;
  onaddtrack: EventHandler;
  onchange: EventHandler;
  onremovetrack: EventHandler;

  (index: number): AudioTrack;
  getTrackById(id: string): AudioTrack | null;
}

declare class BarProp {
  +visible: boolean;
}

declare class BeforeUnloadEvent extends Event {
  returnValue: string;
}

declare class Blob {
  +size: number;
  +type: string;

  constructor(blobParts?: Array<BlobPart>, options?: BlobPropertyBag): void;

  arrayBuffer(): ArrayBuffer;
  bytes(): Uint8Array;
  slice(start?: number, end?: number, contentType?: string): Blob;
  stream(): ReadableStream;
  text(): string;
}

declare class BroadcastChannel extends EventTarget {
  +name: string;
  onmessage: EventHandler;
  onmessageerror: EventHandler;

  constructor(name: string): void;

  close(): void;
  postMessage(message: any): void;
}

declare class BufferedChangeEvent extends Event {
  +addedRanges: TimeRanges;
  +removedRanges: TimeRanges;

  constructor(type: string, eventInitDict?: BufferedChangeEventInit): void;
}

declare class ByteLengthQueuingStrategy {
  +highWaterMark: number;
  +size: Function;

  constructor(init: QueuingStrategyInit): void;
}

declare class CanvasGradient {
  addColorStop(offset: number, color: string): void;
}

declare class CanvasPattern {
  setTransform(transform?: DOMMatrix2DInit): void;
}

declare class CanvasRenderingContext2D
  mixins
    mixin$CanvasSettings,
    mixin$CanvasState,
    mixin$CanvasTransform,
    mixin$CanvasCompositing,
    mixin$CanvasImageSmoothing,
    mixin$CanvasFillStrokeStyles,
    mixin$CanvasShadowStyles,
    mixin$CanvasFilters,
    mixin$CanvasRect,
    mixin$CanvasDrawPath,
    mixin$CanvasUserInterface,
    mixin$CanvasText,
    mixin$CanvasDrawImage,
    mixin$CanvasImageData,
    mixin$CanvasPathDrawingStyles,
    mixin$CanvasTextDrawingStyles,
    mixin$CanvasPath
{
  +canvas: HTMLCanvasElement;
}

declare class CDATASection extends Text {}

declare class CharacterData
  extends Node
  mixins mixin$NonDocumentTypeChildNode, mixin$ChildNode
{
  data: string;
  +length: number;

  appendData(data: string): void;
  deleteData(offset: number, count: number): void;
  insertData(offset: number, data: string): void;
  replaceData(offset: number, count: number, data: string): void;
  substringData(offset: number, count: number): string;
}

declare class CloseWatcher extends EventTarget {
  oncancel: EventHandler;
  onclose: EventHandler;

  constructor(options?: CloseWatcherOptions): void;

  close(): void;
  destroy(): void;
  requestClose(): void;
}

declare class CommandEvent extends Event {
  +command: string;
  +source: Element | null;

  constructor(type: string, eventInitDict?: CommandEventInit): void;
}

declare class Comment extends CharacterData {
  constructor(data?: string): void;
}

declare class CompositionEvent extends UIEvent {
  +data: string;

  constructor(type: string, eventInitDict?: CompositionEventInit): void;

  initCompositionEvent(
    typeArg: string,
    bubblesArg?: boolean,
    cancelableArg?: boolean,
    viewArg?: WindowProxy | null,
    dataArg?: string,
  ): void;
}

declare class ConstrainablePattern {
  applyConstraints(constraints?: Constraints): void;
  getCapabilities(): Capabilities;
  getConstraints(): Constraints;
  getSettings(): Settings;
}

declare class CountQueuingStrategy {
  +highWaterMark: number;
  +size: Function;

  constructor(init: QueuingStrategyInit): void;
}

declare class CSSGroupingRule extends CSSRule {
  +cssRules: CSSRuleList;

  deleteRule(index: number): void;
  insertRule(rule: string, index?: number): number;
}

declare class CSSImportRule extends CSSRule {
  +href: string;
  +media: MediaList;
  +styleSheet: CSSStyleSheet;
}

declare class CSSMarginRule extends CSSRule {
  +name: string;
  +style: CSSStyleDeclaration;
}

declare class CSSNamespaceRule extends CSSRule {
  +namespaceURI: string;
  +prefix: string;
}

declare class CSSPageRule extends CSSGroupingRule {
  selectorText: string;
  +style: CSSStyleDeclaration;
}

declare class CSSRule {
  static +CHARSET_RULE: 2;
  static +FONT_FACE_RULE: 5;
  static +IMPORT_RULE: 3;
  static +MARGIN_RULE: 9;
  static +MEDIA_RULE: 4;
  static +NAMESPACE_RULE: 10;
  static +PAGE_RULE: 6;
  static +STYLE_RULE: 1;

  cssText: string;
  +parentRule: CSSRule | null;
  +parentStyleSheet: CSSStyleSheet | null;
  +type: number;
}

declare class CSSRuleList {
  +length: number;

  item(index: number): CSSRule | null;
}

declare class CSSStyleDeclaration {
  cssFloat: string;
  cssText: string;
  +length: number;
  +parentRule: CSSRule | null;

  item(index: number): string;
  getPropertyPriority(property: string): string;
  getPropertyValue(property: string): string;
  removeProperty(property: string): string;
  setProperty(property: string, value: string, priority?: string): void;
}

declare class CSSStyleRule extends CSSRule {
  selectorText: string;
  +style: CSSStyleDeclaration;
}

declare class CSSStyleSheet extends StyleSheet {
  +cssRules: CSSRuleList;
  +ownerRule: CSSRule | null;
  +rules: CSSRuleList;

  constructor(options?: CSSStyleSheetInit): void;

  addRule(selector?: string, style?: string, index?: number): number;
  deleteRule(index: number): void;
  insertRule(rule: string, index?: number): number;
  removeRule(index?: number): void;
  replace(text: string): CSSStyleSheet;
  replaceSync(text: string): void;
}

declare class CustomElementRegistry {
  define(
    name: string,
    constructor_: CustomElementConstructor,
    options?: ElementDefinitionOptions,
  ): void;
  get(name: string): CustomElementConstructor | void;
  getName(constructor_: CustomElementConstructor): string | null;
  upgrade(root: Node): void;
  whenDefined(name: string): CustomElementConstructor;
}

declare class CustomEvent extends Event {
  +detail: any;

  constructor(type: string, eventInitDict?: CustomEventInit): void;

  initCustomEvent(
    type: string,
    bubbles?: boolean,
    cancelable?: boolean,
    detail?: any,
  ): void;
}

type CustomStateSet = Set<string>;

declare class DataTransfer {
  dropEffect: string;
  effectAllowed: string;
  +files: FileList;
  +items: DataTransferItemList;
  +types: string;

  constructor(): void;

  clearData(format?: string): void;
  getData(format: string): string;
  setData(format: string, data: string): void;
  setDragImage(image: Element, x: number, y: number): void;
}

declare class DataTransferItem {
  +kind: string;
  +type: string;

  getAsFile(): File | null;
  getAsString(callback: FunctionStringCallback | null): void;
}

declare class DataTransferItemList {
  +length: number;

  (index: number): DataTransferItem;
  add(data: string, type: string): DataTransferItem | null;
  add(data: File): DataTransferItem | null;
  clear(): void;
  remove(index: number): void;
}

declare class DedicatedWorkerGlobalScope
  extends WorkerGlobalScope
  mixins mixin$AnimationFrameProvider, mixin$MessageEventTarget
{
  +name: string;

  close(): void;
  postMessage(message: any, transfer: Array<Object>): void;
  postMessage(message: any, options?: StructuredSerializeOptions): void;
}

declare class DeviceChangeEvent extends Event {
  +devices: MediaDeviceInfo;
  +userInsertedDevices: MediaDeviceInfo;

  constructor(type: string, eventInitDict?: DeviceChangeEventInit): void;
}

declare class Document
  extends Node
  mixins
    mixin$NonElementParentNode,
    mixin$DocumentOrShadowRoot,
    mixin$ParentNode,
    mixin$XPathEvaluatorBase,
    mixin$GlobalEventHandlers
{
  alinkColor: string;
  +all: HTMLAllCollection;
  +anchors: HTMLCollection;
  +applets: HTMLCollection;
  bgColor: string;
  body: HTMLElement | null;
  +characterSet: string;
  +charset: string;
  +compatMode: string;
  +contentType: string;
  cookie: string;
  +currentScript: HTMLOrSVGScriptElement | null;
  +defaultView: WindowProxy | null;
  designMode: string;
  dir: string;
  +doctype: DocumentType | null;
  +documentElement: Element | null;
  +documentURI: string;
  domain: string;
  +embeds: HTMLCollection;
  fgColor: string;
  +forms: HTMLCollection;
  +fullscreen: boolean;
  +fullscreenEnabled: boolean;
  +head: HTMLHeadElement | null;
  +hidden: boolean;
  +images: HTMLCollection;
  +implementation: DOMImplementation;
  +inputEncoding: string;
  +lastModified: string;
  linkColor: string;
  +links: HTMLCollection;
  +location: Location | null;
  onfullscreenchange: EventHandler;
  onfullscreenerror: EventHandler;
  onreadystatechange: EventHandler;
  onvisibilitychange: EventHandler;
  +plugins: HTMLCollection;
  +readyState: DocumentReadyState;
  +referrer: string;
  +rootElement: SVGSVGElement | null;
  +scripts: HTMLCollection;
  +timeline: DocumentTimeline;
  title: string;
  +URL: string;
  +visibilityState: DocumentVisibilityState;
  vlinkColor: string;

  constructor(): void;

  static parseHTMLUnsafe(html: TrustedHTML | string): Document;
  adoptNode(node: Node): Node;
  captureEvents(): void;
  clear(): void;
  close(): void;
  createAttribute(localName: string): Attr;
  createAttributeNS(namespace: string | null, qualifiedName: string): Attr;
  createCDATASection(data: string): CDATASection;
  createComment(data: string): Comment;
  createDocumentFragment(): DocumentFragment;
  createElement(
    localName: string,
    options?: string | ElementCreationOptions,
  ): Element;
  createElementNS(
    namespace: string | null,
    qualifiedName: string,
    options?: string | ElementCreationOptions,
  ): Element;
  createEvent(interface_: string): Event;
  createNodeIterator(
    root: Node,
    whatToShow?: number,
    filter?: NodeFilter | null,
  ): NodeIterator;
  createProcessingInstruction(
    target: string,
    data: string,
  ): ProcessingInstruction;
  createRange(): Range;
  createTextNode(data: string): Text;
  createTreeWalker(
    root: Node,
    whatToShow?: number,
    filter?: NodeFilter | null,
  ): TreeWalker;
  execCommand(commandId: string, showUI?: boolean, value?: string): boolean;
  exitFullscreen(): void;
  getElementsByClassName(classNames: string): HTMLCollection;
  getElementsByName(elementName: string): NodeList;
  getElementsByTagName(qualifiedName: string): HTMLCollection;
  getElementsByTagNameNS(
    namespace: string | null,
    localName: string,
  ): HTMLCollection;
  hasFocus(): boolean;
  importNode(node: Node, subtree?: boolean): Node;
  open(url: string, name: string, features: string): WindowProxy | null;
  queryCommandSupported(commandId: string): boolean;
  queryCommandValue(commandId: string): string;
  startViewTransition(updateCallback?: UpdateCallback | null): ViewTransition;
  (name: string): Object;
  open(unused1?: string, unused2?: string): Document;
  queryCommandEnabled(commandId: string): boolean;
  queryCommandIndeterm(commandId: string): boolean;
  queryCommandState(commandId: string): boolean;
  releaseEvents(): void;
  write(text: TrustedHTML | string): void;
  writeln(text: TrustedHTML | string): void;
}

declare class DocumentFragment
  extends Node
  mixins mixin$NonElementParentNode, mixin$ParentNode
{
  constructor(): void;
}

declare class DocumentTimeline extends AnimationTimeline {
  constructor(options?: DocumentTimelineOptions): void;
}

declare class DocumentType extends Node mixins mixin$ChildNode {
  +name: string;
  +publicId: string;
  +systemId: string;
}

declare class DOMException {
  static +ABORT_ERR: 20;
  static +DATA_CLONE_ERR: 25;
  static +DOMSTRING_SIZE_ERR: 2;
  static +HIERARCHY_REQUEST_ERR: 3;
  static +INDEX_SIZE_ERR: 1;
  static +INUSE_ATTRIBUTE_ERR: 10;
  static +INVALID_ACCESS_ERR: 15;
  static +INVALID_CHARACTER_ERR: 5;
  static +INVALID_MODIFICATION_ERR: 13;
  static +INVALID_NODE_TYPE_ERR: 24;
  static +INVALID_STATE_ERR: 11;
  static +NAMESPACE_ERR: 14;
  static +NETWORK_ERR: 19;
  static +NO_DATA_ALLOWED_ERR: 6;
  static +NO_MODIFICATION_ALLOWED_ERR: 7;
  static +NOT_FOUND_ERR: 8;
  static +NOT_SUPPORTED_ERR: 9;
  static +QUOTA_EXCEEDED_ERR: 22;
  static +SECURITY_ERR: 18;
  static +SYNTAX_ERR: 12;
  static +TIMEOUT_ERR: 23;
  static +TYPE_MISMATCH_ERR: 17;
  static +URL_MISMATCH_ERR: 21;
  static +VALIDATION_ERR: 16;
  static +WRONG_DOCUMENT_ERR: 4;

  +code: number;
  +message: string;
  +name: string;

  constructor(message?: string, name?: string): void;
}

declare class DOMImplementation {
  createDocument(
    namespace: string | null,
    qualifiedName: string,
    doctype?: DocumentType | null,
  ): XMLDocument;
  createDocumentType(
    qualifiedName: string,
    publicId: string,
    systemId: string,
  ): DocumentType;
  createHTMLDocument(title?: string): Document;
  hasFeature(): boolean;
}

declare class DOMMatrix extends DOMMatrixReadOnly {
  a: number;
  b: number;
  c: number;
  d: number;
  e: number;
  f: number;
  m11: number;
  m12: number;
  m13: number;
  m14: number;
  m21: number;
  m22: number;
  m23: number;
  m24: number;
  m31: number;
  m32: number;
  m33: number;
  m34: number;
  m41: number;
  m42: number;
  m43: number;
  m44: number;

  static fromFloat32Array(array32: Float32Array): DOMMatrix;
  static fromFloat64Array(array64: Float64Array): DOMMatrix;
  static fromMatrix(other?: DOMMatrixInit): DOMMatrix;
  invertSelf(): DOMMatrix;
  multiplySelf(other?: DOMMatrixInit): DOMMatrix;
  preMultiplySelf(other?: DOMMatrixInit): DOMMatrix;
  rotateAxisAngleSelf(
    x?: number,
    y?: number,
    z?: number,
    angle?: number,
  ): DOMMatrix;
  rotateFromVectorSelf(x?: number, y?: number): DOMMatrix;
  rotateSelf(rotX?: number, rotY?: number, rotZ?: number): DOMMatrix;
  scale3dSelf(
    scale?: number,
    originX?: number,
    originY?: number,
    originZ?: number,
  ): DOMMatrix;
  scaleSelf(
    scaleX?: number,
    scaleY?: number,
    scaleZ?: number,
    originX?: number,
    originY?: number,
    originZ?: number,
  ): DOMMatrix;
  setMatrixValue(transformList: string): DOMMatrix;
  skewXSelf(sx?: number): DOMMatrix;
  skewYSelf(sy?: number): DOMMatrix;
  translateSelf(tx?: number, ty?: number, tz?: number): DOMMatrix;
}

declare class DOMMatrixReadOnly {
  +a: number;
  +b: number;
  +c: number;
  +d: number;
  +e: number;
  +f: number;
  +is2D: boolean;
  +isIdentity: boolean;
  +m11: number;
  +m12: number;
  +m13: number;
  +m14: number;
  +m21: number;
  +m22: number;
  +m23: number;
  +m24: number;
  +m31: number;
  +m32: number;
  +m33: number;
  +m34: number;
  +m41: number;
  +m42: number;
  +m43: number;
  +m44: number;

  static fromFloat32Array(array32: Float32Array): DOMMatrixReadOnly;
  static fromFloat64Array(array64: Float64Array): DOMMatrixReadOnly;
  static fromMatrix(other?: DOMMatrixInit): DOMMatrixReadOnly;
  flipX(): DOMMatrix;
  flipY(): DOMMatrix;
  inverse(): DOMMatrix;
  multiply(other?: DOMMatrixInit): DOMMatrix;
  rotate(rotX?: number, rotY?: number, rotZ?: number): DOMMatrix;
  rotateAxisAngle(
    x?: number,
    y?: number,
    z?: number,
    angle?: number,
  ): DOMMatrix;
  rotateFromVector(x?: number, y?: number): DOMMatrix;
  scale(
    scaleX?: number,
    scaleY?: number,
    scaleZ?: number,
    originX?: number,
    originY?: number,
    originZ?: number,
  ): DOMMatrix;
  scale3d(
    scale?: number,
    originX?: number,
    originY?: number,
    originZ?: number,
  ): DOMMatrix;
  scaleNonUniform(scaleX?: number, scaleY?: number): DOMMatrix;
  skewX(sx?: number): DOMMatrix;
  skewY(sy?: number): DOMMatrix;
  toFloat32Array(): Float32Array;
  toFloat64Array(): Float64Array;
  toJSON(): Object;
  transformPoint(point?: DOMPointInit): DOMPoint;
  translate(tx?: number, ty?: number, tz?: number): DOMMatrix;
  toString(): string;
}

declare class DOMParser {
  constructor(): void;

  parseFromString(
    string: TrustedHTML | string,
    type: DOMParserSupportedType,
  ): Document;
}

declare class DOMPoint extends DOMPointReadOnly {
  w: number;
  x: number;
  y: number;
  z: number;

  static fromPoint(other?: DOMPointInit): DOMPoint;
}

declare class DOMPointReadOnly {
  +w: number;
  +x: number;
  +y: number;
  +z: number;

  static fromPoint(other?: DOMPointInit): DOMPointReadOnly;
  matrixTransform(matrix?: DOMMatrixInit): DOMPoint;
  toJSON(): Object;
}

declare class DOMQuad {
  +p1: DOMPoint;
  +p2: DOMPoint;
  +p3: DOMPoint;
  +p4: DOMPoint;

  static fromQuad(other?: DOMQuadInit): DOMQuad;
  static fromRect(other?: DOMRectInit): DOMQuad;
  getBounds(): DOMRect;
  toJSON(): Object;
}

declare class DOMRect extends DOMRectReadOnly {
  height: number;
  width: number;
  x: number;
  y: number;

  static fromRect(other?: DOMRectInit): DOMRect;
}

interface DOMRectList {
  +length: number;

  item(index: number): DOMRect | null;
}

declare class DOMRectReadOnly {
  +bottom: number;
  +height: number;
  +left: number;
  +right: number;
  +top: number;
  +width: number;
  +x: number;
  +y: number;

  static fromRect(other?: DOMRectInit): DOMRectReadOnly;
  toJSON(): Object;
}

declare class DOMStringList {
  +length: number;

  item(index: number): string | null;
  contains(string: string): boolean;
}

declare class DOMStringMap {
  (name: string): string;
  (name: string, value: string): void;
  (name: string): void;
}

declare class DOMTokenList {
  +length: number;
  value: string;

  @@iterator(): Iterator<string>;

  item(index: number): string | null;
  add(tokens: string): void;
  contains(token: string): boolean;
  remove(tokens: string): void;
  replace(token: string, newToken: string): boolean;
  supports(token: string): boolean;
  toggle(token: string, force?: boolean): boolean;
}

declare class DragEvent extends MouseEvent {
  +dataTransfer: DataTransfer | null;

  constructor(type: string, eventInitDict?: DragEventInit): void;
}

declare class Element
  extends Node
  mixins
    mixin$ParentNode,
    mixin$NonDocumentTypeChildNode,
    mixin$ChildNode,
    mixin$Slottable,
    mixin$Animatable
{
  +attributes: NamedNodeMap;
  +classList: DOMTokenList;
  className: string;
  id: string;
  innerHTML: TrustedHTML | string;
  +localName: string;
  +namespaceURI: string | null;
  onfullscreenchange: EventHandler;
  onfullscreenerror: EventHandler;
  outerHTML: TrustedHTML | string;
  +prefix: string | null;
  +shadowRoot: ShadowRoot | null;
  slot: string;
  +tagName: string;

  attachShadow(init: ShadowRootInit): ShadowRoot;
  closest(selectors: string): Element | null;
  getAttribute(qualifiedName: string): string | null;
  getAttributeNames(): Array<string>;
  getAttributeNode(qualifiedName: string): Attr | null;
  getAttributeNodeNS(namespace: string | null, localName: string): Attr | null;
  getAttributeNS(namespace: string | null, localName: string): string | null;
  getElementsByClassName(classNames: string): HTMLCollection;
  getElementsByTagName(qualifiedName: string): HTMLCollection;
  getElementsByTagNameNS(
    namespace: string | null,
    localName: string,
  ): HTMLCollection;
  getHTML(options?: GetHTMLOptions): string;
  hasAttribute(qualifiedName: string): boolean;
  hasAttributeNS(namespace: string | null, localName: string): boolean;
  hasAttributes(): boolean;
  insertAdjacentElement(where: string, element: Element): Element | null;
  insertAdjacentHTML(position: string, string: TrustedHTML | string): void;
  insertAdjacentText(where: string, data: string): void;
  matches(selectors: string): boolean;
  removeAttribute(qualifiedName: string): void;
  removeAttributeNode(attr: Attr): Attr;
  removeAttributeNS(namespace: string | null, localName: string): void;
  requestFullscreen(options?: FullscreenOptions): void;
  setAttribute(qualifiedName: string, value: string): void;
  setAttributeNode(attr: Attr): Attr | null;
  setAttributeNodeNS(attr: Attr): Attr | null;
  setAttributeNS(
    namespace: string | null,
    qualifiedName: string,
    value: string,
  ): void;
  setHTMLUnsafe(html: TrustedHTML | string): void;
  toggleAttribute(qualifiedName: string, force?: boolean): boolean;
  webkitMatchesSelector(selectors: string): boolean;
}

declare class ElementInternals mixins mixin$ARIAMixin {
  +form: HTMLFormElement | null;
  +labels: NodeList;
  +shadowRoot: ShadowRoot | null;
  +states: CustomStateSet;
  +validationMessage: string;
  +validity: ValidityState;
  +willValidate: boolean;

  checkValidity(): boolean;
  reportValidity(): boolean;
  setFormValue(
    value: File | string | FormData | null,
    state?: File | string | FormData | null,
  ): void;
  setValidity(
    flags?: ValidityStateFlags,
    message?: string,
    anchor?: HTMLElement,
  ): void;
}

interface ElementTimeControl {
  beginElement(): void;
  beginElementAt(offset: number): void;
  endElement(): void;
  endElementAt(offset: number): void;
}

declare class EncodedAudioChunk {
  +byteLength: number;
  +duration: number | null;
  +timestamp: number;
  +type: EncodedAudioChunkType;

  constructor(init: EncodedAudioChunkInit): void;

  copyTo(destination: AllowSharedBufferSource): void;
}

declare class EncodedVideoChunk {
  +byteLength: number;
  +duration: number | null;
  +timestamp: number;
  +type: EncodedVideoChunkType;

  constructor(init: EncodedVideoChunkInit): void;

  copyTo(destination: AllowSharedBufferSource): void;
}

declare class ErrorEvent extends Event {
  +colno: number;
  +error: any;
  +filename: string;
  +lineno: number;
  +message: string;

  constructor(type: string, eventInitDict?: ErrorEventInit): void;
}

declare class Event {
  static +AT_TARGET: 2;
  static +BUBBLING_PHASE: 3;
  static +CAPTURING_PHASE: 1;
  static +NONE: 0;

  +bubbles: boolean;
  +cancelable: boolean;
  cancelBubble: boolean;
  +composed: boolean;
  +currentTarget: EventTarget | null;
  +defaultPrevented: boolean;
  +eventPhase: number;
  +isTrusted: boolean;
  returnValue: boolean;
  +srcElement: EventTarget | null;
  +target: EventTarget | null;
  +timeStamp: number;
  +type: string;

  constructor(type: string, eventInitDict?: EventInit): void;

  composedPath(): Array<EventTarget>;
  initEvent(type: string, bubbles?: boolean, cancelable?: boolean): void;
  preventDefault(): void;
  stopImmediatePropagation(): void;
  stopPropagation(): void;
}

declare class EventSource extends EventTarget {
  static +CLOSED: 2;
  static +CONNECTING: 0;
  static +OPEN: 1;

  onerror: EventHandler;
  onmessage: EventHandler;
  onopen: EventHandler;
  +readyState: number;
  +url: string;
  +withCredentials: boolean;

  constructor(url: string, eventSourceInitDict?: EventSourceInit): void;

  close(): void;
}

declare class EventTarget {
  constructor(): void;

  addEventListener(
    type: string,
    callback: EventListener | null,
    options?: AddEventListenerOptions | boolean,
  ): void;
  dispatchEvent(event: Event): boolean;
  removeEventListener(
    type: string,
    callback: EventListener | null,
    options?: EventListenerOptions | boolean,
  ): void;
}

declare class External {
  AddSearchProvider(): void;
  IsSearchProviderInstalled(): void;
}

declare class FakeWorkletGlobalScope extends WorkletGlobalScope {
  registerFake(type: string, classConstructor: Function): void;
}

declare class File extends Blob {
  +lastModified: number;
  +name: string;

  constructor(
    fileBits: Array<BlobPart>,
    fileName: string,
    options?: FilePropertyBag,
  ): void;
}

declare class FileList {
  +length: number;

  item(index: number): File | null;
}

declare class FileReader extends EventTarget {
  static +DONE: 2;
  static +EMPTY: 0;
  static +LOADING: 1;

  +error: DOMException | null;
  onabort: EventHandler;
  onerror: EventHandler;
  onload: EventHandler;
  onloadend: EventHandler;
  onloadstart: EventHandler;
  onprogress: EventHandler;
  +readyState: number;
  +result: string | ArrayBuffer | null;

  constructor(): void;

  abort(): void;
  readAsArrayBuffer(blob: Blob): void;
  readAsBinaryString(blob: Blob): void;
  readAsDataURL(blob: Blob): void;
  readAsText(blob: Blob, encoding?: string): void;
}

declare class FileReaderSync {
  constructor(): void;

  readAsArrayBuffer(blob: Blob): ArrayBuffer;
  readAsBinaryString(blob: Blob): string;
  readAsDataURL(blob: Blob): string;
  readAsText(blob: Blob, encoding?: string): string;
}

declare class FocusEvent extends UIEvent {
  +relatedTarget: EventTarget | null;

  constructor(type: string, eventInitDict?: FocusEventInit): void;
}

declare class FormData {
  constructor(form?: HTMLFormElement, submitter?: HTMLElement | null): void;

  @@iterator(): Iterator<string, FormDataEntryValue>;

  append(name: string, value: string): void;
  append(name: string, blobValue: Blob, filename?: string): void;
  delete(name: string): void;
  get(name: string): FormDataEntryValue | null;
  getAll(name: string): Array<FormDataEntryValue>;
  has(name: string): boolean;
  set(name: string, value: string): void;
  set(name: string, blobValue: Blob, filename?: string): void;
}

declare class FormDataEvent extends Event {
  +formData: FormData;

  constructor(type: string, eventInitDict: FormDataEventInit): void;
}

declare class GPU {
  +wgslLanguageFeatures: WGSLLanguageFeatures;

  getPreferredCanvasFormat(): GPUTextureFormat;
  requestAdapter(options?: GPURequestAdapterOptions): GPUAdapter | null;
}

declare class GPUAdapter {
  +features: GPUSupportedFeatures;
  +info: GPUAdapterInfo;
  +limits: GPUSupportedLimits;

  requestDevice(descriptor?: GPUDeviceDescriptor): GPUDevice;
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
  mapAsync(mode: GPUMapModeFlags, offset?: GPUSize64, size?: GPUSize64): void;
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
  +messages: GPUCompilationMessage;
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
  +lost: GPUDeviceLostInfo;
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
  ): GPUComputePipeline;
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
  ): GPURenderPipeline;
  createSampler(descriptor?: GPUSamplerDescriptor): GPUSampler;
  createShaderModule(descriptor: GPUShaderModuleDescriptor): GPUShaderModule;
  createTexture(descriptor: GPUTextureDescriptor): GPUTexture;
  destroy(): void;
  importExternalTexture(
    descriptor: GPUExternalTextureDescriptor,
  ): GPUExternalTexture;
  popErrorScope(): GPUError | null;
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
  onSubmittedWorkDone(): void;
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
  getCompilationInfo(): GPUCompilationInfo;
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

declare class HashChangeEvent extends Event {
  +newURL: string;
  +oldURL: string;

  constructor(type: string, eventInitDict?: HashChangeEventInit): void;
}

declare class Headers {
  constructor(init?: HeadersInit): void;

  @@iterator(): Iterator<string, string>;

  append(name: string, value: string): void;
  delete(name: string): void;
  get(name: string): string | null;
  getSetCookie(): Array<string>;
  has(name: string): boolean;
  set(name: string, value: string): void;
}

declare class History {
  +length: number;
  scrollRestoration: ScrollRestoration;
  +state: any;

  back(): void;
  forward(): void;
  go(delta?: number): void;
  pushState(data: any, unused: string, url?: string | null): void;
  replaceState(data: any, unused: string, url?: string | null): void;
}

declare class HTMLAllCollection {
  +length: number;

  (index: number): Element;
  namedItem(name: string): HTMLCollection | Element | null;
  item(nameOrIndex?: string): HTMLCollection | Element | null;
}

declare class HTMLAnchorElement
  extends HTMLElement
  mixins mixin$HTMLHyperlinkElementUtils
{
  charset: string;
  coords: string;
  download: string;
  hreflang: string;
  name: string;
  ping: string;
  referrerPolicy: string;
  rel: string;
  +relList: DOMTokenList;
  rev: string;
  shape: string;
  target: string;
  text: string;
  type: string;

  constructor(): void;
}

declare class HTMLAreaElement
  extends HTMLElement
  mixins mixin$HTMLHyperlinkElementUtils
{
  alt: string;
  coords: string;
  download: string;
  noHref: boolean;
  ping: string;
  referrerPolicy: string;
  rel: string;
  +relList: DOMTokenList;
  shape: string;
  target: string;

  constructor(): void;
}

declare class HTMLAudioElement extends HTMLMediaElement {
  constructor(): void;
}

declare class HTMLBaseElement extends HTMLElement {
  href: string;
  target: string;

  constructor(): void;
}

declare class HTMLBodyElement
  extends HTMLElement
  mixins mixin$WindowEventHandlers
{
  aLink: string;
  background: string;
  bgColor: string;
  link: string;
  text: string;
  vLink: string;

  constructor(): void;
}

declare class HTMLBRElement extends HTMLElement {
  clear: string;

  constructor(): void;
}

declare class HTMLButtonElement
  extends HTMLElement
  mixins mixin$PopoverInvokerElement
{
  command: string;
  commandForElement: Element | null;
  disabled: boolean;
  +form: HTMLFormElement | null;
  formAction: string;
  formEnctype: string;
  formMethod: string;
  formNoValidate: boolean;
  formTarget: string;
  +labels: NodeList;
  name: string;
  type: string;
  +validationMessage: string;
  +validity: ValidityState;
  value: string;
  +willValidate: boolean;

  constructor(): void;

  checkValidity(): boolean;
  reportValidity(): boolean;
  setCustomValidity(error: string): void;
}

declare class HTMLCanvasElement extends HTMLElement {
  height: number;
  width: number;

  constructor(): void;

  getContext(contextId: string, options?: any): RenderingContext | null;
  toBlob(callback: BlobCallback, type?: string, quality?: any): void;
  toDataURL(type?: string, quality?: any): string;
  transferControlToOffscreen(): OffscreenCanvas;
}

declare class HTMLCollection {
  +length: number;

  item(index: number): Element | null;
  namedItem(name: string): Element | null;
}

declare class HTMLDataElement extends HTMLElement {
  value: string;

  constructor(): void;
}

declare class HTMLDataListElement extends HTMLElement {
  +options: HTMLCollection;

  constructor(): void;
}

declare class HTMLDetailsElement extends HTMLElement {
  name: string;
  open: boolean;

  constructor(): void;
}

declare class HTMLDialogElement extends HTMLElement {
  closedBy: string;
  open: boolean;
  returnValue: string;

  constructor(): void;

  close(returnValue?: string): void;
  requestClose(returnValue?: string): void;
  show(): void;
  showModal(): void;
}

declare class HTMLDirectoryElement extends HTMLElement {
  compact: boolean;

  constructor(): void;
}

declare class HTMLDivElement extends HTMLElement {
  align: string;

  constructor(): void;
}

declare class HTMLDListElement extends HTMLElement {
  compact: boolean;

  constructor(): void;
}

declare class HTMLElement
  extends Element
  mixins
    mixin$ElementCSSInlineStyle,
    mixin$GlobalEventHandlers,
    mixin$ElementContentEditable,
    mixin$HTMLOrSVGElement
{
  accessKey: string;
  +accessKeyLabel: string;
  autocapitalize: string;
  autocorrect: boolean;
  dir: string;
  draggable: boolean;
  hidden: boolean | number | string | null;
  inert: boolean;
  innerText: string;
  lang: string;
  outerText: string;
  popover: string | null;
  spellcheck: boolean;
  title: string;
  translate: boolean;
  writingSuggestions: string;

  constructor(): void;

  attachInternals(): ElementInternals;
  click(): void;
  hidePopover(): void;
  showPopover(options?: ShowPopoverOptions): void;
  togglePopover(options?: TogglePopoverOptions | boolean): boolean;
}

declare class HTMLEmbedElement extends HTMLElement {
  align: string;
  height: string;
  name: string;
  src: string;
  type: string;
  width: string;

  constructor(): void;

  getSVGDocument(): Document | null;
}

declare class HTMLFieldSetElement extends HTMLElement {
  disabled: boolean;
  +elements: HTMLCollection;
  +form: HTMLFormElement | null;
  name: string;
  +type: string;
  +validationMessage: string;
  +validity: ValidityState;
  +willValidate: boolean;

  constructor(): void;

  checkValidity(): boolean;
  reportValidity(): boolean;
  setCustomValidity(error: string): void;
}

declare class HTMLFontElement extends HTMLElement {
  color: string;
  face: string;
  size: string;

  constructor(): void;
}

declare class HTMLFormControlsCollection extends HTMLCollection {
  namedItem(name: string): RadioNodeList | Element | null;
}

declare class HTMLFormElement extends HTMLElement {
  acceptCharset: string;
  action: string;
  autocomplete: string;
  +elements: HTMLFormControlsCollection;
  encoding: string;
  enctype: string;
  +length: number;
  method: string;
  name: string;
  noValidate: boolean;
  rel: string;
  +relList: DOMTokenList;
  target: string;

  constructor(): void;

  (index: number): Element;
  (name: string): RadioNodeList | Element;
  checkValidity(): boolean;
  reportValidity(): boolean;
  requestSubmit(submitter?: HTMLElement | null): void;
  reset(): void;
  submit(): void;
}

declare class HTMLFrameElement extends HTMLElement {
  +contentDocument: Document | null;
  +contentWindow: WindowProxy | null;
  frameBorder: string;
  longDesc: string;
  marginHeight: string;
  marginWidth: string;
  name: string;
  noResize: boolean;
  scrolling: string;
  src: string;

  constructor(): void;
}

declare class HTMLFrameSetElement
  extends HTMLElement
  mixins mixin$WindowEventHandlers
{
  cols: string;
  rows: string;

  constructor(): void;
}

declare class HTMLHeadElement extends HTMLElement {
  constructor(): void;
}

declare class HTMLHeadingElement extends HTMLElement {
  align: string;

  constructor(): void;
}

declare class HTMLHRElement extends HTMLElement {
  align: string;
  color: string;
  noShade: boolean;
  size: string;
  width: string;

  constructor(): void;
}

declare class HTMLHtmlElement extends HTMLElement {
  version: string;

  constructor(): void;
}

declare class HTMLIFrameElement extends HTMLElement {
  align: string;
  allow: string;
  allowFullscreen: boolean;
  +contentDocument: Document | null;
  +contentWindow: WindowProxy | null;
  frameBorder: string;
  height: string;
  loading: string;
  longDesc: string;
  marginHeight: string;
  marginWidth: string;
  name: string;
  referrerPolicy: string;
  +sandbox: DOMTokenList;
  scrolling: string;
  src: string;
  srcdoc: TrustedHTML | string;
  width: string;

  constructor(): void;

  getSVGDocument(): Document | null;
}

declare class HTMLImageElement extends HTMLElement {
  align: string;
  alt: string;
  border: string;
  +complete: boolean;
  crossOrigin: string | null;
  +currentSrc: string;
  decoding: string;
  fetchPriority: string;
  height: number;
  hspace: number;
  isMap: boolean;
  loading: string;
  longDesc: string;
  lowsrc: string;
  name: string;
  +naturalHeight: number;
  +naturalWidth: number;
  referrerPolicy: string;
  sizes: string;
  src: string;
  srcset: string;
  useMap: string;
  vspace: number;
  width: number;

  constructor(): void;

  decode(): void;
}

declare class HTMLInputElement
  extends HTMLElement
  mixins mixin$PopoverInvokerElement
{
  accept: string;
  align: string;
  alpha: boolean;
  alt: string;
  autocomplete: string;
  checked: boolean;
  colorSpace: string;
  defaultChecked: boolean;
  defaultValue: string;
  dirName: string;
  disabled: boolean;
  files: FileList | null;
  +form: HTMLFormElement | null;
  formAction: string;
  formEnctype: string;
  formMethod: string;
  formNoValidate: boolean;
  formTarget: string;
  height: number;
  indeterminate: boolean;
  +labels: NodeList | null;
  +list: HTMLDataListElement | null;
  max: string;
  maxLength: number;
  min: string;
  minLength: number;
  multiple: boolean;
  name: string;
  pattern: string;
  placeholder: string;
  readOnly: boolean;
  required: boolean;
  selectionDirection: string | null;
  selectionEnd: number | null;
  selectionStart: number | null;
  size: number;
  src: string;
  step: string;
  type: string;
  useMap: string;
  +validationMessage: string;
  +validity: ValidityState;
  value: string;
  valueAsDate: Object | null;
  valueAsNumber: number;
  width: number;
  +willValidate: boolean;

  constructor(): void;

  checkValidity(): boolean;
  reportValidity(): boolean;
  select(): void;
  setCustomValidity(error: string): void;
  setRangeText(replacement: string): void;
  setRangeText(
    replacement: string,
    start: number,
    end: number,
    selectionMode?: SelectionMode,
  ): void;
  setSelectionRange(start: number, end: number, direction?: string): void;
  showPicker(): void;
  stepDown(n?: number): void;
  stepUp(n?: number): void;
}

declare class HTMLLabelElement extends HTMLElement {
  +control: HTMLElement | null;
  +form: HTMLFormElement | null;
  htmlFor: string;

  constructor(): void;
}

declare class HTMLLegendElement extends HTMLElement {
  align: string;
  +form: HTMLFormElement | null;

  constructor(): void;
}

declare class HTMLLIElement extends HTMLElement {
  type: string;
  value: number;

  constructor(): void;
}

declare class HTMLLinkElement extends HTMLElement mixins mixin$LinkStyle {
  as: string;
  +blocking: DOMTokenList;
  charset: string;
  crossOrigin: string | null;
  disabled: boolean;
  fetchPriority: string;
  href: string;
  hreflang: string;
  imageSizes: string;
  imageSrcset: string;
  integrity: string;
  media: string;
  referrerPolicy: string;
  rel: string;
  +relList: DOMTokenList;
  rev: string;
  +sizes: DOMTokenList;
  target: string;
  type: string;

  constructor(): void;
}

declare class HTMLMapElement extends HTMLElement {
  +areas: HTMLCollection;
  name: string;

  constructor(): void;
}

declare class HTMLMarqueeElement extends HTMLElement {
  behavior: string;
  bgColor: string;
  direction: string;
  height: string;
  hspace: number;
  loop: number;
  scrollAmount: number;
  scrollDelay: number;
  trueSpeed: boolean;
  vspace: number;
  width: string;

  constructor(): void;

  start(): void;
  stop(): void;
}

declare class HTMLMediaElement extends HTMLElement {
  static +HAVE_CURRENT_DATA: 2;
  static +HAVE_ENOUGH_DATA: 4;
  static +HAVE_FUTURE_DATA: 3;
  static +HAVE_METADATA: 1;
  static +HAVE_NOTHING: 0;
  static +NETWORK_EMPTY: 0;
  static +NETWORK_IDLE: 1;
  static +NETWORK_LOADING: 2;
  static +NETWORK_NO_SOURCE: 3;

  +audioTracks: AudioTrackList;
  autoplay: boolean;
  +buffered: TimeRanges;
  controls: boolean;
  crossOrigin: string | null;
  +currentSrc: string;
  currentTime: number;
  defaultMuted: boolean;
  defaultPlaybackRate: number;
  +duration: number;
  +ended: boolean;
  +error: MediaError | null;
  loop: boolean;
  muted: boolean;
  +networkState: number;
  +paused: boolean;
  playbackRate: number;
  +played: TimeRanges;
  preload: string;
  preservesPitch: boolean;
  +readyState: number;
  +seekable: TimeRanges;
  +seeking: boolean;
  src: string;
  srcObject: MediaProvider | null;
  +textTracks: TextTrackList;
  +videoTracks: VideoTrackList;
  volume: number;

  addTextTrack(
    kind: TextTrackKind,
    label?: string,
    language?: string,
  ): TextTrack;
  canPlayType(type: string): CanPlayTypeResult;
  fastSeek(time: number): void;
  getStartDate(): Object;
  load(): void;
  pause(): void;
  play(): void;
}

declare class HTMLMenuElement extends HTMLElement {
  compact: boolean;

  constructor(): void;
}

declare class HTMLMetaElement extends HTMLElement {
  content: string;
  httpEquiv: string;
  media: string;
  name: string;
  scheme: string;

  constructor(): void;
}

declare class HTMLMeterElement extends HTMLElement {
  high: number;
  +labels: NodeList;
  low: number;
  max: number;
  min: number;
  optimum: number;
  value: number;

  constructor(): void;
}

declare class HTMLModElement extends HTMLElement {
  cite: string;
  dateTime: string;

  constructor(): void;
}

declare class HTMLObjectElement extends HTMLElement {
  align: string;
  archive: string;
  border: string;
  code: string;
  codeBase: string;
  codeType: string;
  +contentDocument: Document | null;
  +contentWindow: WindowProxy | null;
  data: string;
  declare: boolean;
  +form: HTMLFormElement | null;
  height: string;
  hspace: number;
  name: string;
  standby: string;
  type: string;
  useMap: string;
  +validationMessage: string;
  +validity: ValidityState;
  vspace: number;
  width: string;
  +willValidate: boolean;

  constructor(): void;

  checkValidity(): boolean;
  getSVGDocument(): Document | null;
  reportValidity(): boolean;
  setCustomValidity(error: string): void;
}

declare class HTMLOListElement extends HTMLElement {
  compact: boolean;
  reversed: boolean;
  start: number;
  type: string;

  constructor(): void;
}

declare class HTMLOptGroupElement extends HTMLElement {
  disabled: boolean;
  label: string;

  constructor(): void;
}

declare class HTMLOptionElement extends HTMLElement {
  defaultSelected: boolean;
  disabled: boolean;
  +form: HTMLFormElement | null;
  +index: number;
  label: string;
  selected: boolean;
  text: string;
  value: string;

  constructor(): void;
}

declare class HTMLOptionsCollection extends HTMLCollection {
  length: number;
  selectedIndex: number;

  (index: number, option: HTMLOptionElement | null): void;
  add(
    element: HTMLOptionElement | HTMLOptGroupElement,
    before?: HTMLElement | number | null,
  ): void;
  remove(index: number): void;
}

declare class HTMLOutputElement extends HTMLElement {
  defaultValue: string;
  +form: HTMLFormElement | null;
  +htmlFor: DOMTokenList;
  +labels: NodeList;
  name: string;
  +type: string;
  +validationMessage: string;
  +validity: ValidityState;
  value: string;
  +willValidate: boolean;

  constructor(): void;

  checkValidity(): boolean;
  reportValidity(): boolean;
  setCustomValidity(error: string): void;
}

declare class HTMLParagraphElement extends HTMLElement {
  align: string;

  constructor(): void;
}

declare class HTMLParamElement extends HTMLElement {
  name: string;
  type: string;
  value: string;
  valueType: string;

  constructor(): void;
}

declare class HTMLPictureElement extends HTMLElement {
  constructor(): void;
}

declare class HTMLPreElement extends HTMLElement {
  width: number;

  constructor(): void;
}

declare class HTMLProgressElement extends HTMLElement {
  +labels: NodeList;
  max: number;
  +position: number;
  value: number;

  constructor(): void;
}

declare class HTMLQuoteElement extends HTMLElement {
  cite: string;

  constructor(): void;
}

declare class HTMLScriptElement extends HTMLElement {
  async: boolean;
  +blocking: DOMTokenList;
  charset: string;
  crossOrigin: string | null;
  defer: boolean;
  event: string;
  fetchPriority: string;
  htmlFor: string;
  innerText: TrustedScript | string;
  integrity: string;
  noModule: boolean;
  referrerPolicy: string;
  src: string;
  src: TrustedScriptURL | string;
  text: string;
  text: TrustedScript | string;
  textContent: TrustedScript | string | null;
  type: string;

  constructor(): void;

  static supports(type: string): boolean;
}

declare class HTMLSelectElement extends HTMLElement {
  autocomplete: string;
  disabled: boolean;
  +form: HTMLFormElement | null;
  +labels: NodeList;
  length: number;
  multiple: boolean;
  name: string;
  +options: HTMLOptionsCollection;
  required: boolean;
  selectedIndex: number;
  +selectedOptions: HTMLCollection;
  size: number;
  +type: string;
  +validationMessage: string;
  +validity: ValidityState;
  value: string;
  +willValidate: boolean;

  constructor(): void;

  item(index: number): HTMLOptionElement | null;
  add(
    element: HTMLOptionElement | HTMLOptGroupElement,
    before?: HTMLElement | number | null,
  ): void;
  checkValidity(): boolean;
  namedItem(name: string): HTMLOptionElement | null;
  remove(): void;
  remove(index: number): void;
  (index: number, option: HTMLOptionElement | null): void;
  reportValidity(): boolean;
  setCustomValidity(error: string): void;
  showPicker(): void;
}

declare class HTMLSlotElement extends HTMLElement {
  name: string;

  constructor(): void;

  assign(nodes: Element | Text): void;
  assignedElements(options?: AssignedNodesOptions): Array<Element>;
  assignedNodes(options?: AssignedNodesOptions): Array<Node>;
}

declare class HTMLSourceElement extends HTMLElement {
  height: number;
  media: string;
  sizes: string;
  src: string;
  srcset: string;
  type: string;
  width: number;

  constructor(): void;
}

declare class HTMLSpanElement extends HTMLElement {
  constructor(): void;
}

declare class HTMLStyleElement extends HTMLElement mixins mixin$LinkStyle {
  +blocking: DOMTokenList;
  disabled: boolean;
  media: string;
  type: string;

  constructor(): void;
}

declare class HTMLTableCaptionElement extends HTMLElement {
  align: string;

  constructor(): void;
}

declare class HTMLTableCellElement extends HTMLElement {
  abbr: string;
  align: string;
  axis: string;
  bgColor: string;
  +cellIndex: number;
  ch: string;
  chOff: string;
  colSpan: number;
  headers: string;
  height: string;
  noWrap: boolean;
  rowSpan: number;
  scope: string;
  vAlign: string;
  width: string;

  constructor(): void;
}

declare class HTMLTableColElement extends HTMLElement {
  align: string;
  ch: string;
  chOff: string;
  span: number;
  vAlign: string;
  width: string;

  constructor(): void;
}

declare class HTMLTableElement extends HTMLElement {
  align: string;
  bgColor: string;
  border: string;
  caption: HTMLTableCaptionElement | null;
  cellPadding: string;
  cellSpacing: string;
  frame: string;
  +rows: HTMLCollection;
  rules: string;
  summary: string;
  +tBodies: HTMLCollection;
  tFoot: HTMLTableSectionElement | null;
  tHead: HTMLTableSectionElement | null;
  width: string;

  constructor(): void;

  createCaption(): HTMLTableCaptionElement;
  createTBody(): HTMLTableSectionElement;
  createTFoot(): HTMLTableSectionElement;
  createTHead(): HTMLTableSectionElement;
  deleteCaption(): void;
  deleteRow(index: number): void;
  deleteTFoot(): void;
  deleteTHead(): void;
  insertRow(index?: number): HTMLTableRowElement;
}

declare class HTMLTableRowElement extends HTMLElement {
  align: string;
  bgColor: string;
  +cells: HTMLCollection;
  ch: string;
  chOff: string;
  +rowIndex: number;
  +sectionRowIndex: number;
  vAlign: string;

  constructor(): void;

  deleteCell(index: number): void;
  insertCell(index?: number): HTMLTableCellElement;
}

declare class HTMLTableSectionElement extends HTMLElement {
  align: string;
  ch: string;
  chOff: string;
  +rows: HTMLCollection;
  vAlign: string;

  constructor(): void;

  deleteRow(index: number): void;
  insertRow(index?: number): HTMLTableRowElement;
}

declare class HTMLTemplateElement extends HTMLElement {
  +content: DocumentFragment;
  shadowRootClonable: boolean;
  shadowRootDelegatesFocus: boolean;
  shadowRootMode: string;
  shadowRootSerializable: boolean;

  constructor(): void;
}

declare class HTMLTextAreaElement extends HTMLElement {
  autocomplete: string;
  cols: number;
  defaultValue: string;
  dirName: string;
  disabled: boolean;
  +form: HTMLFormElement | null;
  +labels: NodeList;
  maxLength: number;
  minLength: number;
  name: string;
  placeholder: string;
  readOnly: boolean;
  required: boolean;
  rows: number;
  selectionDirection: string;
  selectionEnd: number;
  selectionStart: number;
  +textLength: number;
  +type: string;
  +validationMessage: string;
  +validity: ValidityState;
  value: string;
  +willValidate: boolean;
  wrap: string;

  constructor(): void;

  checkValidity(): boolean;
  reportValidity(): boolean;
  select(): void;
  setCustomValidity(error: string): void;
  setRangeText(replacement: string): void;
  setRangeText(
    replacement: string,
    start: number,
    end: number,
    selectionMode?: SelectionMode,
  ): void;
  setSelectionRange(start: number, end: number, direction?: string): void;
}

declare class HTMLTimeElement extends HTMLElement {
  dateTime: string;

  constructor(): void;
}

declare class HTMLTitleElement extends HTMLElement {
  text: string;

  constructor(): void;
}

declare class HTMLTrackElement extends HTMLElement {
  static +ERROR: 3;
  static +LOADED: 2;
  static +LOADING: 1;
  static +NONE: 0;

  default: boolean;
  kind: string;
  label: string;
  +readyState: number;
  src: string;
  srclang: string;
  +track: TextTrack;

  constructor(): void;
}

declare class HTMLUListElement extends HTMLElement {
  compact: boolean;
  type: string;

  constructor(): void;
}

declare class HTMLUnknownElement extends HTMLElement {}

declare class HTMLVideoElement extends HTMLMediaElement {
  height: number;
  playsInline: boolean;
  poster: string;
  +videoHeight: number;
  +videoWidth: number;
  width: number;

  constructor(): void;
}

declare class ImageBitmap {
  +height: number;
  +width: number;

  close(): void;
}

declare class ImageBitmapRenderingContext {
  +canvas: HTMLCanvasElement | OffscreenCanvas;

  transferFromImageBitmap(bitmap: ImageBitmap | null): void;
}

declare class ImageData {
  +colorSpace: PredefinedColorSpace;
  +data: Uint8ClampedArray;
  +height: number;
  +width: number;

  constructor(sw: number, sh: number, settings?: ImageDataSettings): void;
  constructor(
    data: Uint8ClampedArray,
    sw: number,
    sh?: number,
    settings?: ImageDataSettings,
  ): void;
}

declare class ImageDecoder {
  +complete: boolean;
  +completed: void;
  +tracks: ImageTrackList;
  +type: string;

  constructor(init: ImageDecoderInit): void;

  static isTypeSupported(type: string): boolean;
  close(): void;
  decode(options?: ImageDecodeOptions): ImageDecodeResult;
  reset(): void;
}

declare class ImageTrack {
  +animated: boolean;
  +frameCount: number;
  +repetitionCount: number;
  selected: boolean;
}

declare class ImageTrackList {
  +length: number;
  +ready: void;
  +selectedIndex: number;
  +selectedTrack: ImageTrack | null;

  (index: number): ImageTrack;
}

declare class InputDeviceInfo extends MediaDeviceInfo {
  getCapabilities(): MediaTrackCapabilities;
}

declare class InputEvent extends UIEvent {
  +data: string | null;
  +inputType: string;
  +isComposing: boolean;

  constructor(type: string, eventInitDict?: InputEventInit): void;
}

declare class KeyboardEvent extends UIEvent {
  static +DOM_KEY_LOCATION_LEFT: 0x01;
  static +DOM_KEY_LOCATION_NUMPAD: 0x03;
  static +DOM_KEY_LOCATION_RIGHT: 0x02;
  static +DOM_KEY_LOCATION_STANDARD: 0x00;

  +altKey: boolean;
  +charCode: number;
  +code: string;
  +ctrlKey: boolean;
  +isComposing: boolean;
  +key: string;
  +keyCode: number;
  +location: number;
  +metaKey: boolean;
  +repeat: boolean;
  +shiftKey: boolean;

  constructor(type: string, eventInitDict?: KeyboardEventInit): void;

  getModifierState(keyArg: string): boolean;
  initKeyboardEvent(
    typeArg: string,
    bubblesArg?: boolean,
    cancelableArg?: boolean,
    viewArg?: Window | null,
    keyArg?: string,
    locationArg?: number,
    ctrlKey?: boolean,
    altKey?: boolean,
    shiftKey?: boolean,
    metaKey?: boolean,
  ): void;
}

declare class KeyframeEffect extends AnimationEffect {
  composite: CompositeOperation;
  pseudoElement: string | null;
  target: Element | null;

  constructor(
    target: Element | null,
    keyframes: Object | null,
    options?: number | KeyframeEffectOptions,
  ): void;
  constructor(source: KeyframeEffect): void;

  getKeyframes(): Array<Object>;
  setKeyframes(keyframes: Object | null): void;
}

declare class Location {
  +ancestorOrigins: DOMStringList;
  hash: string;
  host: string;
  hostname: string;
  href: string;
  +origin: string;
  pathname: string;
  port: string;
  protocol: string;
  search: string;

  assign(url: string): void;
  reload(): void;
  replace(url: string): void;
}

declare class ManagedMediaSource extends MediaSource {
  onendstreaming: EventHandler;
  onstartstreaming: EventHandler;
  +streaming: boolean;

  constructor(): void;
}

declare class ManagedSourceBuffer extends SourceBuffer {
  onbufferedchange: EventHandler;
}

declare class MathMLElement
  extends Element
  mixins
    mixin$ElementCSSInlineStyle,
    mixin$GlobalEventHandlers,
    mixin$HTMLOrSVGElement {}

declare class MediaDeviceInfo {
  +deviceId: string;
  +groupId: string;
  +kind: MediaDeviceKind;
  +label: string;

  toJSON(): Object;
}

declare class MediaDevices extends EventTarget {
  ondevicechange: EventHandler;

  enumerateDevices(): Array<MediaDeviceInfo>;
  getSupportedConstraints(): MediaTrackSupportedConstraints;
  getUserMedia(constraints?: MediaStreamConstraints): MediaStream;
}

declare class MediaError {
  static +MEDIA_ERR_ABORTED: 1;
  static +MEDIA_ERR_DECODE: 3;
  static +MEDIA_ERR_NETWORK: 2;
  static +MEDIA_ERR_SRC_NOT_SUPPORTED: 4;

  +code: number;
  +message: string;
}

declare class MediaList {
  +length: number;
  mediaText: string;

  item(index: number): string | null;
  appendMedium(medium: string): void;
  deleteMedium(medium: string): void;
}

declare class MediaSource extends EventTarget {
  +activeSourceBuffers: SourceBufferList;
  +canConstructInDedicatedWorker: boolean;
  duration: number;
  +handle: MediaSourceHandle;
  onsourceclose: EventHandler;
  onsourceended: EventHandler;
  onsourceopen: EventHandler;
  +readyState: ReadyState;
  +sourceBuffers: SourceBufferList;

  constructor(): void;

  static isTypeSupported(type: string): boolean;
  addSourceBuffer(type: string): SourceBuffer;
  clearLiveSeekableRange(): void;
  endOfStream(error?: EndOfStreamError): void;
  removeSourceBuffer(sourceBuffer: SourceBuffer): void;
  setLiveSeekableRange(start: number, end: number): void;
}

declare class MediaSourceHandle {}

declare class MediaStream extends EventTarget {
  +active: boolean;
  +id: string;
  onaddtrack: EventHandler;
  onremovetrack: EventHandler;

  constructor(): void;
  constructor(stream: MediaStream): void;
  constructor(tracks: Array<MediaStreamTrack>): void;

  addTrack(track: MediaStreamTrack): void;
  clone(): MediaStream;
  getAudioTracks(): Array<MediaStreamTrack>;
  getTrackById(trackId: string): MediaStreamTrack | null;
  getTracks(): Array<MediaStreamTrack>;
  getVideoTracks(): Array<MediaStreamTrack>;
  removeTrack(track: MediaStreamTrack): void;
}

declare class MediaStreamTrack extends EventTarget {
  enabled: boolean;
  +id: string;
  +kind: string;
  +label: string;
  +muted: boolean;
  onended: EventHandler;
  onmute: EventHandler;
  onunmute: EventHandler;
  +readyState: MediaStreamTrackState;

  applyConstraints(constraints?: MediaTrackConstraints): void;
  clone(): MediaStreamTrack;
  getCapabilities(): MediaTrackCapabilities;
  getConstraints(): MediaTrackConstraints;
  getSettings(): MediaTrackSettings;
  stop(): void;
}

declare class MediaStreamTrackEvent extends Event {
  +track: MediaStreamTrack;

  constructor(type: string, eventInitDict: MediaStreamTrackEventInit): void;
}

declare class MessageChannel {
  +port1: MessagePort;
  +port2: MessagePort;

  constructor(): void;
}

declare class MessageEvent extends Event {
  +data: any;
  +lastEventId: string;
  +origin: string;
  +ports: MessagePort;
  +source: MessageEventSource | null;

  constructor(type: string, eventInitDict?: MessageEventInit): void;

  initMessageEvent(
    type: string,
    bubbles?: boolean,
    cancelable?: boolean,
    data?: any,
    origin?: string,
    lastEventId?: string,
    source?: MessageEventSource | null,
    ports?: Array<MessagePort>,
  ): void;
}

declare class MessagePort extends EventTarget mixins mixin$MessageEventTarget {
  onclose: EventHandler;

  close(): void;
  postMessage(message: any, transfer: Array<Object>): void;
  postMessage(message: any, options?: StructuredSerializeOptions): void;
  start(): void;
}

declare class MimeType {
  +description: string;
  +enabledPlugin: Plugin;
  +suffixes: string;
  +type: string;
}

declare class MimeTypeArray {
  +length: number;

  item(index: number): MimeType | null;
  namedItem(name: string): MimeType | null;
}

declare class MouseEvent extends UIEvent {
  +altKey: boolean;
  +button: number;
  +buttons: number;
  +clientX: number;
  +clientY: number;
  +ctrlKey: boolean;
  +layerX: number;
  +layerY: number;
  +metaKey: boolean;
  +relatedTarget: EventTarget | null;
  +screenX: number;
  +screenY: number;
  +shiftKey: boolean;

  constructor(type: string, eventInitDict?: MouseEventInit): void;

  getModifierState(keyArg: string): boolean;
  initMouseEvent(
    typeArg: string,
    bubblesArg?: boolean,
    cancelableArg?: boolean,
    viewArg?: Window | null,
    detailArg?: number,
    screenXArg?: number,
    screenYArg?: number,
    clientXArg?: number,
    clientYArg?: number,
    ctrlKeyArg?: boolean,
    altKeyArg?: boolean,
    shiftKeyArg?: boolean,
    metaKeyArg?: boolean,
    buttonArg?: number,
    relatedTargetArg?: EventTarget | null,
  ): void;
}

declare class MutationObserver {
  constructor(callback: MutationCallback): void;

  disconnect(): void;
  observe(target: Node, options?: MutationObserverInit): void;
  takeRecords(): Array<MutationRecord>;
}

declare class MutationRecord {
  +addedNodes: NodeList;
  +attributeName: string | null;
  +attributeNamespace: string | null;
  +nextSibling: Node | null;
  +oldValue: string | null;
  +previousSibling: Node | null;
  +removedNodes: NodeList;
  +target: Node;
  +type: string;
}

declare class NamedNodeMap {
  +length: number;

  getNamedItem(qualifiedName: string): Attr | null;
  item(index: number): Attr | null;
  getNamedItemNS(namespace: string | null, localName: string): Attr | null;
  removeNamedItem(qualifiedName: string): Attr;
  removeNamedItemNS(namespace: string | null, localName: string): Attr;
  setNamedItem(attr: Attr): Attr | null;
  setNamedItemNS(attr: Attr): Attr | null;
}

declare class NavigateEvent extends Event {
  +canIntercept: boolean;
  +destination: NavigationDestination;
  +downloadRequest: string | null;
  +formData: FormData | null;
  +hashChange: boolean;
  +hasUAVisualTransition: boolean;
  +info: any;
  +navigationType: NavigationType;
  +signal: AbortSignal;
  +sourceElement: Element | null;
  +userInitiated: boolean;

  constructor(type: string, eventInitDict: NavigateEventInit): void;

  intercept(options?: NavigationInterceptOptions): void;
  scroll(): void;
}

declare class Navigation extends EventTarget {
  +activation: NavigationActivation | null;
  +canGoBack: boolean;
  +canGoForward: boolean;
  +currentEntry: NavigationHistoryEntry | null;
  oncurrententrychange: EventHandler;
  onnavigate: EventHandler;
  onnavigateerror: EventHandler;
  onnavigatesuccess: EventHandler;
  +transition: NavigationTransition | null;

  back(options?: NavigationOptions): NavigationResult;
  entries(): Array<NavigationHistoryEntry>;
  forward(options?: NavigationOptions): NavigationResult;
  navigate(url: string, options?: NavigationNavigateOptions): NavigationResult;
  reload(options?: NavigationReloadOptions): NavigationResult;
  traverseTo(key: string, options?: NavigationOptions): NavigationResult;
  updateCurrentEntry(options: NavigationUpdateCurrentEntryOptions): void;
}

declare class NavigationActivation {
  +entry: NavigationHistoryEntry;
  +from: NavigationHistoryEntry | null;
  +navigationType: NavigationType;
}

declare class NavigationCurrentEntryChangeEvent extends Event {
  +from: NavigationHistoryEntry;
  +navigationType: NavigationType | null;

  constructor(
    type: string,
    eventInitDict: NavigationCurrentEntryChangeEventInit,
  ): void;
}

declare class NavigationDestination {
  +id: string;
  +index: number;
  +key: string;
  +sameDocument: boolean;
  +url: string;

  getState(): any;
}

declare class NavigationHistoryEntry extends EventTarget {
  +id: string;
  +index: number;
  +key: string;
  ondispose: EventHandler;
  +sameDocument: boolean;
  +url: string | null;

  getState(): any;
}

declare class NavigationTransition {
  +finished: void;
  +from: NavigationHistoryEntry;
  +navigationType: NavigationType;
}

declare class Navigator
  mixins
    mixin$NavigatorID,
    mixin$NavigatorLanguage,
    mixin$NavigatorOnLine,
    mixin$NavigatorContentUtils,
    mixin$NavigatorCookies,
    mixin$NavigatorPlugins,
    mixin$NavigatorConcurrentHardware,
    mixin$NavigatorGPU
{
  +mediaDevices: MediaDevices;
  +userActivation: UserActivation;

  getUserMedia(
    constraints: MediaStreamConstraints,
    successCallback: NavigatorUserMediaSuccessCallback,
    errorCallback: NavigatorUserMediaErrorCallback,
  ): void;
  vibrate(pattern: VibratePattern): boolean;
}

declare class Node extends EventTarget {
  static +ATTRIBUTE_NODE: 2;
  static +CDATA_SECTION_NODE: 4;
  static +COMMENT_NODE: 8;
  static +DOCUMENT_FRAGMENT_NODE: 11;
  static +DOCUMENT_NODE: 9;
  static +DOCUMENT_POSITION_CONTAINED_BY: 0x10;
  static +DOCUMENT_POSITION_CONTAINS: 0x08;
  static +DOCUMENT_POSITION_DISCONNECTED: 0x01;
  static +DOCUMENT_POSITION_FOLLOWING: 0x04;
  static +DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: 0x20;
  static +DOCUMENT_POSITION_PRECEDING: 0x02;
  static +DOCUMENT_TYPE_NODE: 10;
  static +ELEMENT_NODE: 1;
  static +ENTITY_NODE: 6;
  static +ENTITY_REFERENCE_NODE: 5;
  static +NOTATION_NODE: 12;
  static +PROCESSING_INSTRUCTION_NODE: 7;
  static +TEXT_NODE: 3;

  +baseURI: string;
  +childNodes: NodeList;
  +firstChild: Node | null;
  +isConnected: boolean;
  +lastChild: Node | null;
  +nextSibling: Node | null;
  +nodeName: string;
  +nodeType: number;
  nodeValue: string | null;
  +ownerDocument: Document | null;
  +parentElement: Element | null;
  +parentNode: Node | null;
  +previousSibling: Node | null;
  textContent: string | null;

  appendChild(node: Node): Node;
  cloneNode(subtree?: boolean): Node;
  compareDocumentPosition(other: Node): number;
  contains(other: Node | null): boolean;
  getRootNode(options?: GetRootNodeOptions): Node;
  hasChildNodes(): boolean;
  insertBefore(node: Node, child: Node | null): Node;
  isDefaultNamespace(namespace: string | null): boolean;
  isEqualNode(otherNode: Node | null): boolean;
  isSameNode(otherNode: Node | null): boolean;
  lookupNamespaceURI(prefix: string | null): string | null;
  lookupPrefix(namespace: string | null): string | null;
  normalize(): void;
  removeChild(child: Node): Node;
  replaceChild(node: Node, child: Node): Node;
}

declare class NodeIterator {
  +filter: NodeFilter | null;
  +pointerBeforeReferenceNode: boolean;
  +referenceNode: Node;
  +root: Node;
  +whatToShow: number;

  detach(): void;
  nextNode(): Node | null;
  previousNode(): Node | null;
}

declare class NodeList {
  +length: number;

  @@iterator(): Iterator<Node>;

  item(index: number): Node | null;
}

declare class Notification extends EventTarget {
  +actions: NotificationAction;
  +badge: string;
  +body: string;
  +data: any;
  +dir: NotificationDirection;
  +icon: string;
  +image: string;
  +lang: string;
  +maxActions: number;
  onclick: EventHandler;
  onclose: EventHandler;
  onerror: EventHandler;
  onshow: EventHandler;
  +permission: NotificationPermission;
  +renotify: boolean;
  +requireInteraction: boolean;
  +silent: boolean | null;
  +tag: string;
  +timestamp: EpochTimeStamp;
  +title: string;
  +vibrate: number;

  constructor(title: string, options?: NotificationOptions): void;

  static requestPermission(
    deprecatedCallback?: NotificationPermissionCallback,
  ): NotificationPermission;
  close(): void;
}

declare class NotificationEvent extends ExtendableEvent {
  +action: string;
  +notification: Notification;

  constructor(type: string, eventInitDict: NotificationEventInit): void;
}

declare class NotRestoredReasonDetails {
  +reason: string;

  toJSON(): Object;
}

declare class NotRestoredReasons {
  +children: NotRestoredReasons | null;
  +id: string | null;
  +name: string | null;
  +reasons: NotRestoredReasonDetails | null;
  +src: string | null;
  +url: string | null;

  toJSON(): Object;
}

declare class OffscreenCanvas extends EventTarget {
  height: number;
  oncontextlost: EventHandler;
  oncontextrestored: EventHandler;
  width: number;

  constructor(width: number, height: number): void;

  convertToBlob(options?: ImageEncodeOptions): Blob;
  getContext(
    contextId: OffscreenRenderingContextId,
    options?: any,
  ): OffscreenRenderingContext | null;
  transferToImageBitmap(): ImageBitmap;
}

declare class OffscreenCanvasRenderingContext2D
  mixins
    mixin$CanvasSettings,
    mixin$CanvasState,
    mixin$CanvasTransform,
    mixin$CanvasCompositing,
    mixin$CanvasImageSmoothing,
    mixin$CanvasFillStrokeStyles,
    mixin$CanvasShadowStyles,
    mixin$CanvasFilters,
    mixin$CanvasRect,
    mixin$CanvasDrawPath,
    mixin$CanvasText,
    mixin$CanvasDrawImage,
    mixin$CanvasImageData,
    mixin$CanvasPathDrawingStyles,
    mixin$CanvasTextDrawingStyles,
    mixin$CanvasPath
{
  +canvas: OffscreenCanvas;
}

declare class OverconstrainedError extends DOMException {
  +constraint: string;

  constructor(constraint: string, message?: string): void;
}

declare class PageRevealEvent extends Event {
  +viewTransition: ViewTransition | null;

  constructor(type: string, eventInitDict?: PageRevealEventInit): void;
}

declare class PageSwapEvent extends Event {
  +activation: NavigationActivation | null;
  +viewTransition: ViewTransition | null;

  constructor(type: string, eventInitDict?: PageSwapEventInit): void;
}

declare class PageTransitionEvent extends Event {
  +persisted: boolean;

  constructor(type: string, eventInitDict?: PageTransitionEventInit): void;
}

declare class Path2D mixins mixin$CanvasPath {
  constructor(path?: Path2D | string): void;

  addPath(path: Path2D, transform?: DOMMatrix2DInit): void;
}

declare class Performance extends EventTarget {
  +timeOrigin: number;

  now(): number;
  toJSON(): Object;
}

declare class Plugin {
  +description: string;
  +filename: string;
  +length: number;
  +name: string;

  item(index: number): MimeType | null;
  namedItem(name: string): MimeType | null;
}

declare class PluginArray {
  +length: number;

  refresh(): void;
  item(index: number): Plugin | null;
  namedItem(name: string): Plugin | null;
}

declare class PopStateEvent extends Event {
  +hasUAVisualTransition: boolean;
  +state: any;

  constructor(type: string, eventInitDict?: PopStateEventInit): void;
}

declare class ProcessingInstruction
  extends CharacterData
  mixins mixin$LinkStyle
{
  +target: string;
}

declare class ProgressEvent extends Event {
  +lengthComputable: boolean;
  +loaded: number;
  +total: number;

  constructor(type: string, eventInitDict?: ProgressEventInit): void;
}

declare class PromiseRejectionEvent extends Event {
  +promise: Object;
  +reason: any;

  constructor(type: string, eventInitDict: PromiseRejectionEventInit): void;
}

declare class RadioNodeList extends NodeList {
  value: string;
}

declare class Range extends AbstractRange {
  static +END_TO_END: 2;
  static +END_TO_START: 3;
  static +START_TO_END: 1;
  static +START_TO_START: 0;

  +commonAncestorContainer: Node;

  constructor(): void;

  cloneContents(): DocumentFragment;
  cloneRange(): Range;
  collapse(toStart?: boolean): void;
  compareBoundaryPoints(how: number, sourceRange: Range): number;
  comparePoint(node: Node, offset: number): number;
  createContextualFragment(string: TrustedHTML | string): DocumentFragment;
  deleteContents(): void;
  detach(): void;
  extractContents(): DocumentFragment;
  insertNode(node: Node): void;
  intersectsNode(node: Node): boolean;
  isPointInRange(node: Node, offset: number): boolean;
  selectNode(node: Node): void;
  selectNodeContents(node: Node): void;
  setEnd(node: Node, offset: number): void;
  setEndAfter(node: Node): void;
  setEndBefore(node: Node): void;
  setStart(node: Node, offset: number): void;
  setStartAfter(node: Node): void;
  setStartBefore(node: Node): void;
  surroundContents(newParent: Node): void;
  toString(): string;
}

declare class ReadableByteStreamController {
  +byobRequest: ReadableStreamBYOBRequest | null;
  +desiredSize: number | null;

  close(): void;
  enqueue(chunk: ArrayBufferView): void;
  error(e?: any): void;
}

declare class ReadableStream {
  +locked: boolean;

  constructor(underlyingSource?: Object, strategy?: QueuingStrategy): void;

  @@iterator(): Iterator<any>;

  static from(asyncIterable: any): ReadableStream;
  cancel(reason?: any): void;
  getReader(options?: ReadableStreamGetReaderOptions): ReadableStreamReader;
  pipeThrough(
    transform: ReadableWritablePair,
    options?: StreamPipeOptions,
  ): ReadableStream;
  pipeTo(destination: WritableStream, options?: StreamPipeOptions): void;
  tee(): Array<ReadableStream>;
}

declare class ReadableStreamBYOBReader
  mixins mixin$ReadableStreamGenericReader
{
  constructor(stream: ReadableStream): void;

  read(
    view: ArrayBufferView,
    options?: ReadableStreamBYOBReaderReadOptions,
  ): ReadableStreamReadResult;
  releaseLock(): void;
}

declare class ReadableStreamBYOBRequest {
  +view: ArrayBufferView | null;

  respond(bytesWritten: number): void;
  respondWithNewView(view: ArrayBufferView): void;
}

declare class ReadableStreamDefaultController {
  +desiredSize: number | null;

  close(): void;
  enqueue(chunk?: any): void;
  error(e?: any): void;
}

declare class ReadableStreamDefaultReader
  mixins mixin$ReadableStreamGenericReader
{
  constructor(stream: ReadableStream): void;

  read(): ReadableStreamReadResult;
  releaseLock(): void;
}

declare class Request mixins mixin$Body {
  +cache: RequestCache;
  +credentials: RequestCredentials;
  +destination: RequestDestination;
  +duplex: RequestDuplex;
  +headers: Headers;
  +integrity: string;
  +isHistoryNavigation: boolean;
  +isReloadNavigation: boolean;
  +keepalive: boolean;
  +method: string;
  +mode: RequestMode;
  +redirect: RequestRedirect;
  +referrer: string;
  +referrerPolicy: ReferrerPolicy;
  +signal: AbortSignal;
  +url: string;

  constructor(input: RequestInfo, init?: RequestInit): void;

  clone(): Request;
}

declare class Response mixins mixin$Body {
  +headers: Headers;
  +ok: boolean;
  +redirected: boolean;
  +status: number;
  +statusText: string;
  +type: ResponseType;
  +url: string;

  constructor(body?: BodyInit | null, init?: ResponseInit): void;

  static error(): Response;
  static json(data: any, init?: ResponseInit): Response;
  static redirect(url: string, status?: number): Response;
  clone(): Response;
}

declare class ShadowAnimation extends Animation {
  +sourceAnimation: Animation;
}

declare class ShadowRoot
  extends DocumentFragment
  mixins mixin$DocumentOrShadowRoot
{
  +clonable: boolean;
  +delegatesFocus: boolean;
  +host: Element;
  innerHTML: TrustedHTML | string;
  +mode: ShadowRootMode;
  onslotchange: EventHandler;
  +serializable: boolean;
  +slotAssignment: SlotAssignmentMode;

  getHTML(options?: GetHTMLOptions): string;
  setHTMLUnsafe(html: TrustedHTML | string): void;
}

declare class SharedWorker extends EventTarget mixins mixin$AbstractWorker {
  +port: MessagePort;

  constructor(
    scriptURL: TrustedScriptURL | string,
    options?: string | WorkerOptions,
  ): void;
}

declare class SharedWorkerGlobalScope extends WorkerGlobalScope {
  +name: string;
  onconnect: EventHandler;

  close(): void;
}

declare class SourceBuffer extends EventTarget {
  appendWindowEnd: number;
  appendWindowStart: number;
  +audioTracks: AudioTrackList;
  +buffered: TimeRanges;
  mode: AppendMode;
  onabort: EventHandler;
  onerror: EventHandler;
  onupdate: EventHandler;
  onupdateend: EventHandler;
  onupdatestart: EventHandler;
  +textTracks: TextTrackList;
  timestampOffset: number;
  +updating: boolean;
  +videoTracks: VideoTrackList;

  abort(): void;
  appendBuffer(data: BufferSource): void;
  changeType(type: string): void;
  remove(start: number, end: number): void;
}

declare class SourceBufferList extends EventTarget {
  +length: number;
  onaddsourcebuffer: EventHandler;
  onremovesourcebuffer: EventHandler;

  (index: number): SourceBuffer;
}

declare class StaticRange extends AbstractRange {
  constructor(init: StaticRangeInit): void;
}

declare class Storage {
  +length: number;

  key(index: number): string | null;
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
  clear(): void;
}

declare class StorageEvent extends Event {
  +key: string | null;
  +newValue: string | null;
  +oldValue: string | null;
  +storageArea: Storage | null;
  +url: string;

  constructor(type: string, eventInitDict?: StorageEventInit): void;

  initStorageEvent(
    type: string,
    bubbles?: boolean,
    cancelable?: boolean,
    key?: string | null,
    oldValue?: string | null,
    newValue?: string | null,
    url?: string,
    storageArea?: Storage | null,
  ): void;
}

declare class StyleSheet {
  disabled: boolean;
  +href: string | null;
  +media: MediaList;
  +ownerNode: Element | ProcessingInstruction | null;
  +parentStyleSheet: CSSStyleSheet | null;
  +title: string | null;
  +type: string;
}

declare class StyleSheetList {
  +length: number;

  item(index: number): CSSStyleSheet | null;
}

declare class SubmitEvent extends Event {
  +submitter: HTMLElement | null;

  constructor(type: string, eventInitDict?: SubmitEventInit): void;
}

declare class SVGAElement
  extends SVGGraphicsElement
  mixins mixin$SVGURIReference, mixin$HTMLHyperlinkElementUtils
{
  download: string;
  hreflang: string;
  ping: string;
  referrerPolicy: string;
  rel: string;
  +relList: DOMTokenList;
  +target: SVGAnimatedString;
  text: string;
  type: string;
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

declare class SVGAnimateColorElement
  extends SVGAnimationElement
  mixins mixin$SVGStylable {}

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

declare class SVGAnimateElement
  extends SVGAnimationElement
  mixins mixin$SVGStylable {}

declare class SVGAnimateMotionElement extends SVGAnimationElement {}

interface SVGAnimateTransformElement extends SVGAnimationElement {}

declare class SVGAnimationElement
  extends SVGElement
  mixins mixin$SVGTests, mixin$SVGExternalResourcesRequired
{
  +targetElement: SVGElement;

  getCurrentTime(): number;
  getSimpleDuration(): number;
  getStartTime(): number;
}

declare class SVGCircleElement extends SVGGeometryElement {
  +cx: SVGAnimatedLength;
  +cy: SVGAnimatedLength;
  +r: SVGAnimatedLength;
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

declare class SVGDefsElement extends SVGGraphicsElement {}

declare class SVGDescElement extends SVGElement {}

declare class SVGElement
  extends Element
  mixins
    mixin$ElementCSSInlineStyle,
    mixin$GlobalEventHandlers,
    mixin$DocumentAndElementEventHandlers,
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

declare class SVGFEBlendElement
  extends SVGElement
  mixins mixin$SVGFilterPrimitiveStandardAttributes
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
  mixins mixin$SVGFilterPrimitiveStandardAttributes
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
  mixins mixin$SVGFilterPrimitiveStandardAttributes
{
  +in1: SVGAnimatedString;
}

declare class SVGFECompositeElement
  extends SVGElement
  mixins mixin$SVGFilterPrimitiveStandardAttributes
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
  mixins mixin$SVGFilterPrimitiveStandardAttributes
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
  mixins mixin$SVGFilterPrimitiveStandardAttributes
{
  +diffuseConstant: SVGAnimatedNumber;
  +in1: SVGAnimatedString;
  +kernelUnitLengthX: SVGAnimatedNumber;
  +kernelUnitLengthY: SVGAnimatedNumber;
  +surfaceScale: SVGAnimatedNumber;
}

declare class SVGFEDisplacementMapElement
  extends SVGElement
  mixins mixin$SVGFilterPrimitiveStandardAttributes
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
  mixins mixin$SVGFilterPrimitiveStandardAttributes
{
  +dx: SVGAnimatedNumber;
  +dy: SVGAnimatedNumber;
  +in1: SVGAnimatedString;
  +stdDeviationX: SVGAnimatedNumber;
  +stdDeviationY: SVGAnimatedNumber;

  setStdDeviation(stdDeviationX: number, stdDeviationY: number): void;
}

declare class SVGFEFloodElement
  extends SVGElement
  mixins mixin$SVGFilterPrimitiveStandardAttributes {}

interface SVGFEFuncAElement extends SVGComponentTransferFunctionElement {}

interface SVGFEFuncBElement extends SVGComponentTransferFunctionElement {}

interface SVGFEFuncGElement extends SVGComponentTransferFunctionElement {}

interface SVGFEFuncRElement extends SVGComponentTransferFunctionElement {}

declare class SVGFEGaussianBlurElement
  extends SVGElement
  mixins mixin$SVGFilterPrimitiveStandardAttributes
{
  static +SVG_EDGEMODE_DUPLICATE: 1;
  static +SVG_EDGEMODE_NONE: 3;
  static +SVG_EDGEMODE_UNKNOWN: 0;
  static +SVG_EDGEMODE_WRAP: 2;

  +edgeMode: SVGAnimatedEnumeration;
  +in1: SVGAnimatedString;
  +stdDeviationX: SVGAnimatedNumber;
  +stdDeviationY: SVGAnimatedNumber;

  setStdDeviation(stdDeviationX: number, stdDeviationY: number): void;
}

declare class SVGFEImageElement
  extends SVGElement
  mixins mixin$SVGFilterPrimitiveStandardAttributes, mixin$SVGURIReference
{
  +crossOrigin: SVGAnimatedString;
  +preserveAspectRatio: SVGAnimatedPreserveAspectRatio;
}

declare class SVGFEMergeElement
  extends SVGElement
  mixins mixin$SVGFilterPrimitiveStandardAttributes {}

interface SVGFEMergeNodeElement extends SVGElement {
  +in1: SVGAnimatedString;
}

declare class SVGFEMorphologyElement
  extends SVGElement
  mixins mixin$SVGFilterPrimitiveStandardAttributes
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
  mixins mixin$SVGFilterPrimitiveStandardAttributes
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
  mixins mixin$SVGFilterPrimitiveStandardAttributes
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
  mixins mixin$SVGFilterPrimitiveStandardAttributes
{
  +in1: SVGAnimatedString;
}

declare class SVGFETurbulenceElement
  extends SVGElement
  mixins mixin$SVGFilterPrimitiveStandardAttributes
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

declare class SVGFilterElement extends SVGElement mixins mixin$SVGURIReference {
  +filterUnits: SVGAnimatedEnumeration;
  +height: SVGAnimatedLength;
  +primitiveUnits: SVGAnimatedEnumeration;
  +width: SVGAnimatedLength;
  +x: SVGAnimatedLength;
  +y: SVGAnimatedLength;
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

declare class SVGMPathElement
  extends SVGElement
  mixins mixin$SVGURIReference, mixin$SVGExternalResourcesRequired {}

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

declare class SVGPathElement extends SVGGeometryElement {}

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

declare class SVGSetElement extends SVGAnimationElement {}

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
  mixins mixin$SVGFitToViewBox, mixin$SVGZoomAndPan, mixin$WindowEventHandlers
{
  static +SVG_ZOOMANDPAN_DISABLE: 1;
  static +SVG_ZOOMANDPAN_MAGNIFY: 2;
  static +SVG_ZOOMANDPAN_UNKNOWN: 0;

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
  createSVGTransformFromMatrix(matrix: DOMMatrixReadOnly): SVGTransform;
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

  setMatrix(matrix: DOMMatrixReadOnly): void;
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
  createSVGTransformFromMatrix(matrix: DOMMatrixReadOnly): SVGTransform;
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

declare class SVGUnknownElement extends SVGGraphicsElement {}

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

declare class SVGViewElement
  extends SVGElement
  mixins mixin$SVGFitToViewBox, mixin$SVGZoomAndPan
{
  static +SVG_ZOOMANDPAN_DISABLE: 1;
  static +SVG_ZOOMANDPAN_MAGNIFY: 2;
  static +SVG_ZOOMANDPAN_UNKNOWN: 0;
}

declare class Text extends CharacterData mixins mixin$Slottable {
  +wholeText: string;

  constructor(data?: string): void;

  splitText(offset: number): Text;
}

declare class TextDecoder mixins mixin$TextDecoderCommon {
  constructor(label?: string, options?: TextDecoderOptions): void;

  decode(input?: AllowSharedBufferSource, options?: TextDecodeOptions): string;
}

declare class TextDecoderStream
  mixins mixin$TextDecoderCommon, mixin$GenericTransformStream
{
  constructor(label?: string, options?: TextDecoderOptions): void;
}

declare class TextEncoder mixins mixin$TextEncoderCommon {
  constructor(): void;

  encode(input?: string): Uint8Array;
  encodeInto(
    source: string,
    destination: Uint8Array,
  ): TextEncoderEncodeIntoResult;
}

declare class TextEncoderStream
  mixins mixin$TextEncoderCommon, mixin$GenericTransformStream
{
  constructor(): void;
}

declare class TextEvent extends UIEvent {
  +data: string;

  initTextEvent(
    type: string,
    bubbles?: boolean,
    cancelable?: boolean,
    view?: Window | null,
    data?: string,
  ): void;
}

declare class TextMetrics {
  +actualBoundingBoxAscent: number;
  +actualBoundingBoxDescent: number;
  +actualBoundingBoxLeft: number;
  +actualBoundingBoxRight: number;
  +alphabeticBaseline: number;
  +emHeightAscent: number;
  +emHeightDescent: number;
  +fontBoundingBoxAscent: number;
  +fontBoundingBoxDescent: number;
  +hangingBaseline: number;
  +ideographicBaseline: number;
  +width: number;
}

declare class TextTrack extends EventTarget {
  +activeCues: TextTrackCueList | null;
  +cues: TextTrackCueList | null;
  +id: string;
  +inBandMetadataTrackDispatchType: string;
  +kind: TextTrackKind;
  +label: string;
  +language: string;
  mode: TextTrackMode;
  oncuechange: EventHandler;
  +sourceBuffer: SourceBuffer | null;

  addCue(cue: TextTrackCue): void;
  removeCue(cue: TextTrackCue): void;
}

declare class TextTrackCue extends EventTarget {
  endTime: number;
  id: string;
  onenter: EventHandler;
  onexit: EventHandler;
  pauseOnExit: boolean;
  startTime: number;
  +track: TextTrack | null;
}

declare class TextTrackCueList {
  +length: number;

  (index: number): TextTrackCue;
  getCueById(id: string): TextTrackCue | null;
}

declare class TextTrackList extends EventTarget {
  +length: number;
  onaddtrack: EventHandler;
  onchange: EventHandler;
  onremovetrack: EventHandler;

  (index: number): TextTrack;
  getTrackById(id: string): TextTrack | null;
}

interface TimeEvent extends Event {
  +detail: number;
  +view: AbstractView;

  initTimeEvent(
    typeArg: string,
    viewArg: AbstractView,
    detailArg: number,
  ): void;
}

declare class TimeRanges {
  +length: number;

  end(index: number): number;
  start(index: number): number;
}

declare class ToggleEvent extends Event {
  +newState: string;
  +oldState: string;

  constructor(type: string, eventInitDict?: ToggleEventInit): void;
}

declare class TrackEvent extends Event {
  +track: VideoTrack | AudioTrack | TextTrack | null;

  constructor(type: string, eventInitDict?: TrackEventInit): void;
}

declare class TransformStream {
  +readable: ReadableStream;
  +writable: WritableStream;

  constructor(
    transformer?: Object,
    writableStrategy?: QueuingStrategy,
    readableStrategy?: QueuingStrategy,
  ): void;
}

declare class TransformStreamDefaultController {
  +desiredSize: number | null;

  enqueue(chunk?: any): void;
  error(reason?: any): void;
  terminate(): void;
}

declare class TreeWalker {
  currentNode: Node;
  +filter: NodeFilter | null;
  +root: Node;
  +whatToShow: number;

  firstChild(): Node | null;
  lastChild(): Node | null;
  nextNode(): Node | null;
  nextSibling(): Node | null;
  parentNode(): Node | null;
  previousNode(): Node | null;
  previousSibling(): Node | null;
}

declare class TrustedHTML {
  toString(): string;
  toJSON(): string;
}

declare class TrustedScript {
  toString(): string;
  toJSON(): string;
}

declare class TrustedScriptURL {
  toString(): string;
  toJSON(): string;
}

declare class TrustedTypePolicy {
  +name: string;

  createHTML(input: string, arguments_: any): TrustedHTML;
  createScript(input: string, arguments_: any): TrustedScript;
  createScriptURL(input: string, arguments_: any): TrustedScriptURL;
}

declare class TrustedTypePolicyFactory {
  +defaultPolicy: TrustedTypePolicy | null;
  +emptyHTML: TrustedHTML;
  +emptyScript: TrustedScript;

  createPolicy(
    policyName: string,
    policyOptions?: TrustedTypePolicyOptions,
  ): TrustedTypePolicy;
  getAttributeType(
    tagName: string,
    attribute: string,
    elementNs?: string | null,
    attrNs?: string | null,
  ): string | null;
  getPropertyType(
    tagName: string,
    property: string,
    elementNs?: string | null,
  ): string | null;
  isHTML(value: any): boolean;
  isScript(value: any): boolean;
  isScriptURL(value: any): boolean;
}

declare class UIEvent extends Event {
  +detail: number;
  +view: Window | null;
  +which: number;

  constructor(type: string, eventInitDict?: UIEventInit): void;

  initUIEvent(
    typeArg: string,
    bubblesArg?: boolean,
    cancelableArg?: boolean,
    viewArg?: Window | null,
    detailArg?: number,
  ): void;
}

declare class URL {
  hash: string;
  host: string;
  hostname: string;
  href: string;
  +origin: string;
  password: string;
  pathname: string;
  port: string;
  protocol: string;
  search: string;
  +searchParams: URLSearchParams;
  username: string;

  constructor(url: string, base?: string): void;

  static canParse(url: string, base?: string): boolean;
  static createObjectURL(obj: Blob | MediaSource): string;
  static parse(url: string, base?: string): URL | null;
  static revokeObjectURL(url: string): void;
  toJSON(): string;
}

declare class URLPattern {
  +hash: string;
  +hasRegExpGroups: boolean;
  +hostname: string;
  +password: string;
  +pathname: string;
  +port: string;
  +protocol: string;
  +search: string;
  +username: string;

  constructor(
    input: URLPatternInput,
    baseURL: string,
    options?: URLPatternOptions,
  ): void;
  constructor(input?: URLPatternInput, options?: URLPatternOptions): void;

  exec(input?: URLPatternInput, baseURL?: string): URLPatternResult | null;
  test(input?: URLPatternInput, baseURL?: string): boolean;
}

declare class URLSearchParams {
  +size: number;

  constructor(init?: Array<Array<string>> | string | string | string): void;

  @@iterator(): Iterator<string, string>;

  append(name: string, value: string): void;
  delete(name: string, value?: string): void;
  get(name: string): string | null;
  getAll(name: string): Array<string>;
  has(name: string, value?: string): boolean;
  set(name: string, value: string): void;
  sort(): void;
  toString(): string;
}

declare class UserActivation {
  +hasBeenActive: boolean;
  +isActive: boolean;
}

declare class ValidityState {
  +badInput: boolean;
  +customError: boolean;
  +patternMismatch: boolean;
  +rangeOverflow: boolean;
  +rangeUnderflow: boolean;
  +stepMismatch: boolean;
  +tooLong: boolean;
  +tooShort: boolean;
  +typeMismatch: boolean;
  +valid: boolean;
  +valueMissing: boolean;
}

declare class VideoColorSpace {
  +fullRange: boolean | null;
  +matrix: VideoMatrixCoefficients | null;
  +primaries: VideoColorPrimaries | null;
  +transfer: VideoTransferCharacteristics | null;

  constructor(init?: VideoColorSpaceInit): void;

  toJSON(): VideoColorSpaceInit;
}

declare class VideoDecoder extends EventTarget {
  +decodeQueueSize: number;
  ondequeue: EventHandler;
  +state: CodecState;

  constructor(init: VideoDecoderInit): void;

  static isConfigSupported(config: VideoDecoderConfig): VideoDecoderSupport;
  close(): void;
  configure(config: VideoDecoderConfig): void;
  decode(chunk: EncodedVideoChunk): void;
  flush(): void;
  reset(): void;
}

declare class VideoEncoder extends EventTarget {
  +encodeQueueSize: number;
  ondequeue: EventHandler;
  +state: CodecState;

  constructor(init: VideoEncoderInit): void;

  static isConfigSupported(config: VideoEncoderConfig): VideoEncoderSupport;
  close(): void;
  configure(config: VideoEncoderConfig): void;
  encode(frame: VideoFrame, options?: VideoEncoderEncodeOptions): void;
  flush(): void;
  reset(): void;
}

declare class VideoFrame {
  +codedHeight: number;
  +codedRect: DOMRectReadOnly | null;
  +codedWidth: number;
  +colorSpace: VideoColorSpace;
  +displayHeight: number;
  +displayWidth: number;
  +duration: number | null;
  +flip: boolean;
  +format: VideoPixelFormat | null;
  +rotation: number;
  +timestamp: number;
  +visibleRect: DOMRectReadOnly | null;

  constructor(image: CanvasImageSource, init?: VideoFrameInit): void;
  constructor(data: AllowSharedBufferSource, init: VideoFrameBufferInit): void;

  allocationSize(options?: VideoFrameCopyToOptions): number;
  clone(): VideoFrame;
  close(): void;
  copyTo(
    destination: AllowSharedBufferSource,
    options?: VideoFrameCopyToOptions,
  ): Array<PlaneLayout>;
  metadata(): VideoFrameMetadata;
}

declare class VideoTrack {
  +id: string;
  +kind: string;
  +label: string;
  +language: string;
  selected: boolean;
  +sourceBuffer: SourceBuffer | null;
}

declare class VideoTrackList extends EventTarget {
  +length: number;
  onaddtrack: EventHandler;
  onchange: EventHandler;
  onremovetrack: EventHandler;
  +selectedIndex: number;

  (index: number): VideoTrack;
  getTrackById(id: string): VideoTrack | null;
}

declare class ViewTransition {
  +finished: void;
  +ready: void;
  +updateCallbackDone: void;

  skipTransition(): void;
}

declare class VisibilityStateEntry extends PerformanceEntry {
  +duration: number;
  +entryType: string;
  +name: string;
  +startTime: number;
}

declare class WebGL2RenderingContext
  mixins
    mixin$WebGLRenderingContextBase,
    mixin$WebGL2RenderingContextBase,
    mixin$WebGL2RenderingContextOverloads
{
  static +ACTIVE_ATTRIBUTES: 0x8b89;
  static +ACTIVE_TEXTURE: 0x84e0;
  static +ACTIVE_UNIFORM_BLOCKS: 0x8a36;
  static +ACTIVE_UNIFORMS: 0x8b86;
  static +ALIASED_LINE_WIDTH_RANGE: 0x846e;
  static +ALIASED_POINT_SIZE_RANGE: 0x846d;
  static +ALPHA: 0x1906;
  static +ALPHA_BITS: 0x0d55;
  static +ALREADY_SIGNALED: 0x911a;
  static +ALWAYS: 0x0207;
  static +ANY_SAMPLES_PASSED: 0x8c2f;
  static +ANY_SAMPLES_PASSED_CONSERVATIVE: 0x8d6a;
  static +ARRAY_BUFFER: 0x8892;
  static +ARRAY_BUFFER_BINDING: 0x8894;
  static +ATTACHED_SHADERS: 0x8b85;
  static +BACK: 0x0405;
  static +BLEND: 0x0be2;
  static +BLEND_COLOR: 0x8005;
  static +BLEND_DST_ALPHA: 0x80ca;
  static +BLEND_DST_RGB: 0x80c8;
  static +BLEND_EQUATION: 0x8009;
  static +BLEND_EQUATION_ALPHA: 0x883d;
  static +BLEND_EQUATION_RGB: 0x8009;
  static +BLEND_SRC_ALPHA: 0x80cb;
  static +BLEND_SRC_RGB: 0x80c9;
  static +BLUE_BITS: 0x0d54;
  static +BOOL: 0x8b56;
  static +BOOL_VEC2: 0x8b57;
  static +BOOL_VEC3: 0x8b58;
  static +BOOL_VEC4: 0x8b59;
  static +BROWSER_DEFAULT_WEBGL: 0x9244;
  static +BUFFER_SIZE: 0x8764;
  static +BUFFER_USAGE: 0x8765;
  static +BYTE: 0x1400;
  static +CCW: 0x0901;
  static +CLAMP_TO_EDGE: 0x812f;
  static +COLOR: 0x1800;
  static +COLOR_ATTACHMENT0: 0x8ce0;
  static +COLOR_ATTACHMENT1: 0x8ce1;
  static +COLOR_ATTACHMENT10: 0x8cea;
  static +COLOR_ATTACHMENT11: 0x8ceb;
  static +COLOR_ATTACHMENT12: 0x8cec;
  static +COLOR_ATTACHMENT13: 0x8ced;
  static +COLOR_ATTACHMENT14: 0x8cee;
  static +COLOR_ATTACHMENT15: 0x8cef;
  static +COLOR_ATTACHMENT2: 0x8ce2;
  static +COLOR_ATTACHMENT3: 0x8ce3;
  static +COLOR_ATTACHMENT4: 0x8ce4;
  static +COLOR_ATTACHMENT5: 0x8ce5;
  static +COLOR_ATTACHMENT6: 0x8ce6;
  static +COLOR_ATTACHMENT7: 0x8ce7;
  static +COLOR_ATTACHMENT8: 0x8ce8;
  static +COLOR_ATTACHMENT9: 0x8ce9;
  static +COLOR_BUFFER_BIT: 0x00004000;
  static +COLOR_CLEAR_VALUE: 0x0c22;
  static +COLOR_WRITEMASK: 0x0c23;
  static +COMPARE_REF_TO_TEXTURE: 0x884e;
  static +COMPILE_STATUS: 0x8b81;
  static +COMPRESSED_TEXTURE_FORMATS: 0x86a3;
  static +CONDITION_SATISFIED: 0x911c;
  static +CONSTANT_ALPHA: 0x8003;
  static +CONSTANT_COLOR: 0x8001;
  static +CONTEXT_LOST_WEBGL: 0x9242;
  static +COPY_READ_BUFFER: 0x8f36;
  static +COPY_READ_BUFFER_BINDING: 0x8f36;
  static +COPY_WRITE_BUFFER: 0x8f37;
  static +COPY_WRITE_BUFFER_BINDING: 0x8f37;
  static +CULL_FACE: 0x0b44;
  static +CULL_FACE_MODE: 0x0b45;
  static +CURRENT_PROGRAM: 0x8b8d;
  static +CURRENT_QUERY: 0x8865;
  static +CURRENT_VERTEX_ATTRIB: 0x8626;
  static +CW: 0x0900;
  static +DECR: 0x1e03;
  static +DECR_WRAP: 0x8508;
  static +DELETE_STATUS: 0x8b80;
  static +DEPTH: 0x1801;
  static +DEPTH_ATTACHMENT: 0x8d00;
  static +DEPTH_BITS: 0x0d56;
  static +DEPTH_BUFFER_BIT: 0x00000100;
  static +DEPTH_CLEAR_VALUE: 0x0b73;
  static +DEPTH_COMPONENT: 0x1902;
  static +DEPTH_COMPONENT16: 0x81a5;
  static +DEPTH_COMPONENT24: 0x81a6;
  static +DEPTH_COMPONENT32F: 0x8cac;
  static +DEPTH_FUNC: 0x0b74;
  static +DEPTH_RANGE: 0x0b70;
  static +DEPTH_STENCIL: 0x84f9;
  static +DEPTH_STENCIL_ATTACHMENT: 0x821a;
  static +DEPTH_TEST: 0x0b71;
  static +DEPTH_WRITEMASK: 0x0b72;
  static +DEPTH24_STENCIL8: 0x88f0;
  static +DEPTH32F_STENCIL8: 0x8cad;
  static +DITHER: 0x0bd0;
  static +DONT_CARE: 0x1100;
  static +DRAW_BUFFER0: 0x8825;
  static +DRAW_BUFFER1: 0x8826;
  static +DRAW_BUFFER10: 0x882f;
  static +DRAW_BUFFER11: 0x8830;
  static +DRAW_BUFFER12: 0x8831;
  static +DRAW_BUFFER13: 0x8832;
  static +DRAW_BUFFER14: 0x8833;
  static +DRAW_BUFFER15: 0x8834;
  static +DRAW_BUFFER2: 0x8827;
  static +DRAW_BUFFER3: 0x8828;
  static +DRAW_BUFFER4: 0x8829;
  static +DRAW_BUFFER5: 0x882a;
  static +DRAW_BUFFER6: 0x882b;
  static +DRAW_BUFFER7: 0x882c;
  static +DRAW_BUFFER8: 0x882d;
  static +DRAW_BUFFER9: 0x882e;
  static +DRAW_FRAMEBUFFER: 0x8ca9;
  static +DRAW_FRAMEBUFFER_BINDING: 0x8ca6;
  static +DST_ALPHA: 0x0304;
  static +DST_COLOR: 0x0306;
  static +DYNAMIC_COPY: 0x88ea;
  static +DYNAMIC_DRAW: 0x88e8;
  static +DYNAMIC_READ: 0x88e9;
  static +ELEMENT_ARRAY_BUFFER: 0x8893;
  static +ELEMENT_ARRAY_BUFFER_BINDING: 0x8895;
  static +EQUAL: 0x0202;
  static +FASTEST: 0x1101;
  static +FLOAT: 0x1406;
  static +FLOAT_32_UNSIGNED_INT_24_8_REV: 0x8dad;
  static +FLOAT_MAT2: 0x8b5a;
  static +FLOAT_MAT2x3: 0x8b65;
  static +FLOAT_MAT2x4: 0x8b66;
  static +FLOAT_MAT3: 0x8b5b;
  static +FLOAT_MAT3x2: 0x8b67;
  static +FLOAT_MAT3x4: 0x8b68;
  static +FLOAT_MAT4: 0x8b5c;
  static +FLOAT_MAT4x2: 0x8b69;
  static +FLOAT_MAT4x3: 0x8b6a;
  static +FLOAT_VEC2: 0x8b50;
  static +FLOAT_VEC3: 0x8b51;
  static +FLOAT_VEC4: 0x8b52;
  static +FRAGMENT_SHADER: 0x8b30;
  static +FRAGMENT_SHADER_DERIVATIVE_HINT: 0x8b8b;
  static +FRAMEBUFFER: 0x8d40;
  static +FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE: 0x8215;
  static +FRAMEBUFFER_ATTACHMENT_BLUE_SIZE: 0x8214;
  static +FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING: 0x8210;
  static +FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE: 0x8211;
  static +FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE: 0x8216;
  static +FRAMEBUFFER_ATTACHMENT_GREEN_SIZE: 0x8213;
  static +FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: 0x8cd1;
  static +FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: 0x8cd0;
  static +FRAMEBUFFER_ATTACHMENT_RED_SIZE: 0x8212;
  static +FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE: 0x8217;
  static +FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: 0x8cd3;
  static +FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER: 0x8cd4;
  static +FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: 0x8cd2;
  static +FRAMEBUFFER_BINDING: 0x8ca6;
  static +FRAMEBUFFER_COMPLETE: 0x8cd5;
  static +FRAMEBUFFER_DEFAULT: 0x8218;
  static +FRAMEBUFFER_INCOMPLETE_ATTACHMENT: 0x8cd6;
  static +FRAMEBUFFER_INCOMPLETE_DIMENSIONS: 0x8cd9;
  static +FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: 0x8cd7;
  static +FRAMEBUFFER_INCOMPLETE_MULTISAMPLE: 0x8d56;
  static +FRAMEBUFFER_UNSUPPORTED: 0x8cdd;
  static +FRONT: 0x0404;
  static +FRONT_AND_BACK: 0x0408;
  static +FRONT_FACE: 0x0b46;
  static +FUNC_ADD: 0x8006;
  static +FUNC_REVERSE_SUBTRACT: 0x800b;
  static +FUNC_SUBTRACT: 0x800a;
  static +GENERATE_MIPMAP_HINT: 0x8192;
  static +GEQUAL: 0x0206;
  static +GREATER: 0x0204;
  static +GREEN_BITS: 0x0d53;
  static +HALF_FLOAT: 0x140b;
  static +HIGH_FLOAT: 0x8df2;
  static +HIGH_INT: 0x8df5;
  static +IMPLEMENTATION_COLOR_READ_FORMAT: 0x8b9b;
  static +IMPLEMENTATION_COLOR_READ_TYPE: 0x8b9a;
  static +INCR: 0x1e02;
  static +INCR_WRAP: 0x8507;
  static +INT: 0x1404;
  static +INT_2_10_10_10_REV: 0x8d9f;
  static +INT_SAMPLER_2D: 0x8dca;
  static +INT_SAMPLER_2D_ARRAY: 0x8dcf;
  static +INT_SAMPLER_3D: 0x8dcb;
  static +INT_SAMPLER_CUBE: 0x8dcc;
  static +INT_VEC2: 0x8b53;
  static +INT_VEC3: 0x8b54;
  static +INT_VEC4: 0x8b55;
  static +INTERLEAVED_ATTRIBS: 0x8c8c;
  static +INVALID_ENUM: 0x0500;
  static +INVALID_FRAMEBUFFER_OPERATION: 0x0506;
  static +INVALID_INDEX: 0xffffffff;
  static +INVALID_OPERATION: 0x0502;
  static +INVALID_VALUE: 0x0501;
  static +INVERT: 0x150a;
  static +KEEP: 0x1e00;
  static +LEQUAL: 0x0203;
  static +LESS: 0x0201;
  static +LINE_LOOP: 0x0002;
  static +LINE_STRIP: 0x0003;
  static +LINE_WIDTH: 0x0b21;
  static +LINEAR: 0x2601;
  static +LINEAR_MIPMAP_LINEAR: 0x2703;
  static +LINEAR_MIPMAP_NEAREST: 0x2701;
  static +LINES: 0x0001;
  static +LINK_STATUS: 0x8b82;
  static +LOW_FLOAT: 0x8df0;
  static +LOW_INT: 0x8df3;
  static +LUMINANCE: 0x1909;
  static +LUMINANCE_ALPHA: 0x190a;
  static +MAX: 0x8008;
  static +MAX_3D_TEXTURE_SIZE: 0x8073;
  static +MAX_ARRAY_TEXTURE_LAYERS: 0x88ff;
  static +MAX_CLIENT_WAIT_TIMEOUT_WEBGL: 0x9247;
  static +MAX_COLOR_ATTACHMENTS: 0x8cdf;
  static +MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS: 0x8a33;
  static +MAX_COMBINED_TEXTURE_IMAGE_UNITS: 0x8b4d;
  static +MAX_COMBINED_UNIFORM_BLOCKS: 0x8a2e;
  static +MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS: 0x8a31;
  static +MAX_CUBE_MAP_TEXTURE_SIZE: 0x851c;
  static +MAX_DRAW_BUFFERS: 0x8824;
  static +MAX_ELEMENT_INDEX: 0x8d6b;
  static +MAX_ELEMENTS_INDICES: 0x80e9;
  static +MAX_ELEMENTS_VERTICES: 0x80e8;
  static +MAX_FRAGMENT_INPUT_COMPONENTS: 0x9125;
  static +MAX_FRAGMENT_UNIFORM_BLOCKS: 0x8a2d;
  static +MAX_FRAGMENT_UNIFORM_COMPONENTS: 0x8b49;
  static +MAX_FRAGMENT_UNIFORM_VECTORS: 0x8dfd;
  static +MAX_PROGRAM_TEXEL_OFFSET: 0x8905;
  static +MAX_RENDERBUFFER_SIZE: 0x84e8;
  static +MAX_SAMPLES: 0x8d57;
  static +MAX_SERVER_WAIT_TIMEOUT: 0x9111;
  static +MAX_TEXTURE_IMAGE_UNITS: 0x8872;
  static +MAX_TEXTURE_LOD_BIAS: 0x84fd;
  static +MAX_TEXTURE_SIZE: 0x0d33;
  static +MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS: 0x8c8a;
  static +MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS: 0x8c8b;
  static +MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS: 0x8c80;
  static +MAX_UNIFORM_BLOCK_SIZE: 0x8a30;
  static +MAX_UNIFORM_BUFFER_BINDINGS: 0x8a2f;
  static +MAX_VARYING_COMPONENTS: 0x8b4b;
  static +MAX_VARYING_VECTORS: 0x8dfc;
  static +MAX_VERTEX_ATTRIBS: 0x8869;
  static +MAX_VERTEX_OUTPUT_COMPONENTS: 0x9122;
  static +MAX_VERTEX_TEXTURE_IMAGE_UNITS: 0x8b4c;
  static +MAX_VERTEX_UNIFORM_BLOCKS: 0x8a2b;
  static +MAX_VERTEX_UNIFORM_COMPONENTS: 0x8b4a;
  static +MAX_VERTEX_UNIFORM_VECTORS: 0x8dfb;
  static +MAX_VIEWPORT_DIMS: 0x0d3a;
  static +MEDIUM_FLOAT: 0x8df1;
  static +MEDIUM_INT: 0x8df4;
  static +MIN: 0x8007;
  static +MIN_PROGRAM_TEXEL_OFFSET: 0x8904;
  static +MIRRORED_REPEAT: 0x8370;
  static +NEAREST: 0x2600;
  static +NEAREST_MIPMAP_LINEAR: 0x2702;
  static +NEAREST_MIPMAP_NEAREST: 0x2700;
  static +NEVER: 0x0200;
  static +NICEST: 0x1102;
  static +NO_ERROR: 0;
  static +NONE: 0;
  static +NOTEQUAL: 0x0205;
  static +OBJECT_TYPE: 0x9112;
  static +ONE: 1;
  static +ONE_MINUS_CONSTANT_ALPHA: 0x8004;
  static +ONE_MINUS_CONSTANT_COLOR: 0x8002;
  static +ONE_MINUS_DST_ALPHA: 0x0305;
  static +ONE_MINUS_DST_COLOR: 0x0307;
  static +ONE_MINUS_SRC_ALPHA: 0x0303;
  static +ONE_MINUS_SRC_COLOR: 0x0301;
  static +OUT_OF_MEMORY: 0x0505;
  static +PACK_ALIGNMENT: 0x0d05;
  static +PACK_ROW_LENGTH: 0x0d02;
  static +PACK_SKIP_PIXELS: 0x0d04;
  static +PACK_SKIP_ROWS: 0x0d03;
  static +PIXEL_PACK_BUFFER: 0x88eb;
  static +PIXEL_PACK_BUFFER_BINDING: 0x88ed;
  static +PIXEL_UNPACK_BUFFER: 0x88ec;
  static +PIXEL_UNPACK_BUFFER_BINDING: 0x88ef;
  static +POINTS: 0x0000;
  static +POLYGON_OFFSET_FACTOR: 0x8038;
  static +POLYGON_OFFSET_FILL: 0x8037;
  static +POLYGON_OFFSET_UNITS: 0x2a00;
  static +QUERY_RESULT: 0x8866;
  static +QUERY_RESULT_AVAILABLE: 0x8867;
  static +R11F_G11F_B10F: 0x8c3a;
  static +R16F: 0x822d;
  static +R16I: 0x8233;
  static +R16UI: 0x8234;
  static +R32F: 0x822e;
  static +R32I: 0x8235;
  static +R32UI: 0x8236;
  static +R8: 0x8229;
  static +R8_SNORM: 0x8f94;
  static +R8I: 0x8231;
  static +R8UI: 0x8232;
  static +RASTERIZER_DISCARD: 0x8c89;
  static +READ_BUFFER: 0x0c02;
  static +READ_FRAMEBUFFER: 0x8ca8;
  static +READ_FRAMEBUFFER_BINDING: 0x8caa;
  static +RED: 0x1903;
  static +RED_BITS: 0x0d52;
  static +RED_INTEGER: 0x8d94;
  static +RENDERBUFFER: 0x8d41;
  static +RENDERBUFFER_ALPHA_SIZE: 0x8d53;
  static +RENDERBUFFER_BINDING: 0x8ca7;
  static +RENDERBUFFER_BLUE_SIZE: 0x8d52;
  static +RENDERBUFFER_DEPTH_SIZE: 0x8d54;
  static +RENDERBUFFER_GREEN_SIZE: 0x8d51;
  static +RENDERBUFFER_HEIGHT: 0x8d43;
  static +RENDERBUFFER_INTERNAL_FORMAT: 0x8d44;
  static +RENDERBUFFER_RED_SIZE: 0x8d50;
  static +RENDERBUFFER_SAMPLES: 0x8cab;
  static +RENDERBUFFER_STENCIL_SIZE: 0x8d55;
  static +RENDERBUFFER_WIDTH: 0x8d42;
  static +RENDERER: 0x1f01;
  static +REPEAT: 0x2901;
  static +REPLACE: 0x1e01;
  static +RG: 0x8227;
  static +RG_INTEGER: 0x8228;
  static +RG16F: 0x822f;
  static +RG16I: 0x8239;
  static +RG16UI: 0x823a;
  static +RG32F: 0x8230;
  static +RG32I: 0x823b;
  static +RG32UI: 0x823c;
  static +RG8: 0x822b;
  static +RG8_SNORM: 0x8f95;
  static +RG8I: 0x8237;
  static +RG8UI: 0x8238;
  static +RGB: 0x1907;
  static +RGB_INTEGER: 0x8d98;
  static +RGB10_A2: 0x8059;
  static +RGB10_A2UI: 0x906f;
  static +RGB16F: 0x881b;
  static +RGB16I: 0x8d89;
  static +RGB16UI: 0x8d77;
  static +RGB32F: 0x8815;
  static +RGB32I: 0x8d83;
  static +RGB32UI: 0x8d71;
  static +RGB5_A1: 0x8057;
  static +RGB565: 0x8d62;
  static +RGB8: 0x8051;
  static +RGB8_SNORM: 0x8f96;
  static +RGB8I: 0x8d8f;
  static +RGB8UI: 0x8d7d;
  static +RGB9_E5: 0x8c3d;
  static +RGBA: 0x1908;
  static +RGBA_INTEGER: 0x8d99;
  static +RGBA16F: 0x881a;
  static +RGBA16I: 0x8d88;
  static +RGBA16UI: 0x8d76;
  static +RGBA32F: 0x8814;
  static +RGBA32I: 0x8d82;
  static +RGBA32UI: 0x8d70;
  static +RGBA4: 0x8056;
  static +RGBA8: 0x8058;
  static +RGBA8_SNORM: 0x8f97;
  static +RGBA8I: 0x8d8e;
  static +RGBA8UI: 0x8d7c;
  static +SAMPLE_ALPHA_TO_COVERAGE: 0x809e;
  static +SAMPLE_BUFFERS: 0x80a8;
  static +SAMPLE_COVERAGE: 0x80a0;
  static +SAMPLE_COVERAGE_INVERT: 0x80ab;
  static +SAMPLE_COVERAGE_VALUE: 0x80aa;
  static +SAMPLER_2D: 0x8b5e;
  static +SAMPLER_2D_ARRAY: 0x8dc1;
  static +SAMPLER_2D_ARRAY_SHADOW: 0x8dc4;
  static +SAMPLER_2D_SHADOW: 0x8b62;
  static +SAMPLER_3D: 0x8b5f;
  static +SAMPLER_BINDING: 0x8919;
  static +SAMPLER_CUBE: 0x8b60;
  static +SAMPLER_CUBE_SHADOW: 0x8dc5;
  static +SAMPLES: 0x80a9;
  static +SCISSOR_BOX: 0x0c10;
  static +SCISSOR_TEST: 0x0c11;
  static +SEPARATE_ATTRIBS: 0x8c8d;
  static +SHADER_TYPE: 0x8b4f;
  static +SHADING_LANGUAGE_VERSION: 0x8b8c;
  static +SHORT: 0x1402;
  static +SIGNALED: 0x9119;
  static +SIGNED_NORMALIZED: 0x8f9c;
  static +SRC_ALPHA: 0x0302;
  static +SRC_ALPHA_SATURATE: 0x0308;
  static +SRC_COLOR: 0x0300;
  static +SRGB: 0x8c40;
  static +SRGB8: 0x8c41;
  static +SRGB8_ALPHA8: 0x8c43;
  static +STATIC_COPY: 0x88e6;
  static +STATIC_DRAW: 0x88e4;
  static +STATIC_READ: 0x88e5;
  static +STENCIL: 0x1802;
  static +STENCIL_ATTACHMENT: 0x8d20;
  static +STENCIL_BACK_FAIL: 0x8801;
  static +STENCIL_BACK_FUNC: 0x8800;
  static +STENCIL_BACK_PASS_DEPTH_FAIL: 0x8802;
  static +STENCIL_BACK_PASS_DEPTH_PASS: 0x8803;
  static +STENCIL_BACK_REF: 0x8ca3;
  static +STENCIL_BACK_VALUE_MASK: 0x8ca4;
  static +STENCIL_BACK_WRITEMASK: 0x8ca5;
  static +STENCIL_BITS: 0x0d57;
  static +STENCIL_BUFFER_BIT: 0x00000400;
  static +STENCIL_CLEAR_VALUE: 0x0b91;
  static +STENCIL_FAIL: 0x0b94;
  static +STENCIL_FUNC: 0x0b92;
  static +STENCIL_INDEX8: 0x8d48;
  static +STENCIL_PASS_DEPTH_FAIL: 0x0b95;
  static +STENCIL_PASS_DEPTH_PASS: 0x0b96;
  static +STENCIL_REF: 0x0b97;
  static +STENCIL_TEST: 0x0b90;
  static +STENCIL_VALUE_MASK: 0x0b93;
  static +STENCIL_WRITEMASK: 0x0b98;
  static +STREAM_COPY: 0x88e2;
  static +STREAM_DRAW: 0x88e0;
  static +STREAM_READ: 0x88e1;
  static +SUBPIXEL_BITS: 0x0d50;
  static +SYNC_CONDITION: 0x9113;
  static +SYNC_FENCE: 0x9116;
  static +SYNC_FLAGS: 0x9115;
  static +SYNC_FLUSH_COMMANDS_BIT: 0x00000001;
  static +SYNC_GPU_COMMANDS_COMPLETE: 0x9117;
  static +SYNC_STATUS: 0x9114;
  static +TEXTURE: 0x1702;
  static +TEXTURE_2D: 0x0de1;
  static +TEXTURE_2D_ARRAY: 0x8c1a;
  static +TEXTURE_3D: 0x806f;
  static +TEXTURE_BASE_LEVEL: 0x813c;
  static +TEXTURE_BINDING_2D: 0x8069;
  static +TEXTURE_BINDING_2D_ARRAY: 0x8c1d;
  static +TEXTURE_BINDING_3D: 0x806a;
  static +TEXTURE_BINDING_CUBE_MAP: 0x8514;
  static +TEXTURE_COMPARE_FUNC: 0x884d;
  static +TEXTURE_COMPARE_MODE: 0x884c;
  static +TEXTURE_CUBE_MAP: 0x8513;
  static +TEXTURE_CUBE_MAP_NEGATIVE_X: 0x8516;
  static +TEXTURE_CUBE_MAP_NEGATIVE_Y: 0x8518;
  static +TEXTURE_CUBE_MAP_NEGATIVE_Z: 0x851a;
  static +TEXTURE_CUBE_MAP_POSITIVE_X: 0x8515;
  static +TEXTURE_CUBE_MAP_POSITIVE_Y: 0x8517;
  static +TEXTURE_CUBE_MAP_POSITIVE_Z: 0x8519;
  static +TEXTURE_IMMUTABLE_FORMAT: 0x912f;
  static +TEXTURE_IMMUTABLE_LEVELS: 0x82df;
  static +TEXTURE_MAG_FILTER: 0x2800;
  static +TEXTURE_MAX_LEVEL: 0x813d;
  static +TEXTURE_MAX_LOD: 0x813b;
  static +TEXTURE_MIN_FILTER: 0x2801;
  static +TEXTURE_MIN_LOD: 0x813a;
  static +TEXTURE_WRAP_R: 0x8072;
  static +TEXTURE_WRAP_S: 0x2802;
  static +TEXTURE_WRAP_T: 0x2803;
  static +TEXTURE0: 0x84c0;
  static +TEXTURE1: 0x84c1;
  static +TEXTURE10: 0x84ca;
  static +TEXTURE11: 0x84cb;
  static +TEXTURE12: 0x84cc;
  static +TEXTURE13: 0x84cd;
  static +TEXTURE14: 0x84ce;
  static +TEXTURE15: 0x84cf;
  static +TEXTURE16: 0x84d0;
  static +TEXTURE17: 0x84d1;
  static +TEXTURE18: 0x84d2;
  static +TEXTURE19: 0x84d3;
  static +TEXTURE2: 0x84c2;
  static +TEXTURE20: 0x84d4;
  static +TEXTURE21: 0x84d5;
  static +TEXTURE22: 0x84d6;
  static +TEXTURE23: 0x84d7;
  static +TEXTURE24: 0x84d8;
  static +TEXTURE25: 0x84d9;
  static +TEXTURE26: 0x84da;
  static +TEXTURE27: 0x84db;
  static +TEXTURE28: 0x84dc;
  static +TEXTURE29: 0x84dd;
  static +TEXTURE3: 0x84c3;
  static +TEXTURE30: 0x84de;
  static +TEXTURE31: 0x84df;
  static +TEXTURE4: 0x84c4;
  static +TEXTURE5: 0x84c5;
  static +TEXTURE6: 0x84c6;
  static +TEXTURE7: 0x84c7;
  static +TEXTURE8: 0x84c8;
  static +TEXTURE9: 0x84c9;
  static +TIMEOUT_EXPIRED: 0x911b;
  static +TIMEOUT_IGNORED: -1;
  static +TRANSFORM_FEEDBACK: 0x8e22;
  static +TRANSFORM_FEEDBACK_ACTIVE: 0x8e24;
  static +TRANSFORM_FEEDBACK_BINDING: 0x8e25;
  static +TRANSFORM_FEEDBACK_BUFFER: 0x8c8e;
  static +TRANSFORM_FEEDBACK_BUFFER_BINDING: 0x8c8f;
  static +TRANSFORM_FEEDBACK_BUFFER_MODE: 0x8c7f;
  static +TRANSFORM_FEEDBACK_BUFFER_SIZE: 0x8c85;
  static +TRANSFORM_FEEDBACK_BUFFER_START: 0x8c84;
  static +TRANSFORM_FEEDBACK_PAUSED: 0x8e23;
  static +TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN: 0x8c88;
  static +TRANSFORM_FEEDBACK_VARYINGS: 0x8c83;
  static +TRIANGLE_FAN: 0x0006;
  static +TRIANGLE_STRIP: 0x0005;
  static +TRIANGLES: 0x0004;
  static +UNIFORM_ARRAY_STRIDE: 0x8a3c;
  static +UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES: 0x8a43;
  static +UNIFORM_BLOCK_ACTIVE_UNIFORMS: 0x8a42;
  static +UNIFORM_BLOCK_BINDING: 0x8a3f;
  static +UNIFORM_BLOCK_DATA_SIZE: 0x8a40;
  static +UNIFORM_BLOCK_INDEX: 0x8a3a;
  static +UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER: 0x8a46;
  static +UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER: 0x8a44;
  static +UNIFORM_BUFFER: 0x8a11;
  static +UNIFORM_BUFFER_BINDING: 0x8a28;
  static +UNIFORM_BUFFER_OFFSET_ALIGNMENT: 0x8a34;
  static +UNIFORM_BUFFER_SIZE: 0x8a2a;
  static +UNIFORM_BUFFER_START: 0x8a29;
  static +UNIFORM_IS_ROW_MAJOR: 0x8a3e;
  static +UNIFORM_MATRIX_STRIDE: 0x8a3d;
  static +UNIFORM_OFFSET: 0x8a3b;
  static +UNIFORM_SIZE: 0x8a38;
  static +UNIFORM_TYPE: 0x8a37;
  static +UNPACK_ALIGNMENT: 0x0cf5;
  static +UNPACK_COLORSPACE_CONVERSION_WEBGL: 0x9243;
  static +UNPACK_FLIP_Y_WEBGL: 0x9240;
  static +UNPACK_IMAGE_HEIGHT: 0x806e;
  static +UNPACK_PREMULTIPLY_ALPHA_WEBGL: 0x9241;
  static +UNPACK_ROW_LENGTH: 0x0cf2;
  static +UNPACK_SKIP_IMAGES: 0x806d;
  static +UNPACK_SKIP_PIXELS: 0x0cf4;
  static +UNPACK_SKIP_ROWS: 0x0cf3;
  static +UNSIGNALED: 0x9118;
  static +UNSIGNED_BYTE: 0x1401;
  static +UNSIGNED_INT: 0x1405;
  static +UNSIGNED_INT_10F_11F_11F_REV: 0x8c3b;
  static +UNSIGNED_INT_2_10_10_10_REV: 0x8368;
  static +UNSIGNED_INT_24_8: 0x84fa;
  static +UNSIGNED_INT_5_9_9_9_REV: 0x8c3e;
  static +UNSIGNED_INT_SAMPLER_2D: 0x8dd2;
  static +UNSIGNED_INT_SAMPLER_2D_ARRAY: 0x8dd7;
  static +UNSIGNED_INT_SAMPLER_3D: 0x8dd3;
  static +UNSIGNED_INT_SAMPLER_CUBE: 0x8dd4;
  static +UNSIGNED_INT_VEC2: 0x8dc6;
  static +UNSIGNED_INT_VEC3: 0x8dc7;
  static +UNSIGNED_INT_VEC4: 0x8dc8;
  static +UNSIGNED_NORMALIZED: 0x8c17;
  static +UNSIGNED_SHORT: 0x1403;
  static +UNSIGNED_SHORT_4_4_4_4: 0x8033;
  static +UNSIGNED_SHORT_5_5_5_1: 0x8034;
  static +UNSIGNED_SHORT_5_6_5: 0x8363;
  static +VALIDATE_STATUS: 0x8b83;
  static +VENDOR: 0x1f00;
  static +VERSION: 0x1f02;
  static +VERTEX_ARRAY_BINDING: 0x85b5;
  static +VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: 0x889f;
  static +VERTEX_ATTRIB_ARRAY_DIVISOR: 0x88fe;
  static +VERTEX_ATTRIB_ARRAY_ENABLED: 0x8622;
  static +VERTEX_ATTRIB_ARRAY_INTEGER: 0x88fd;
  static +VERTEX_ATTRIB_ARRAY_NORMALIZED: 0x886a;
  static +VERTEX_ATTRIB_ARRAY_POINTER: 0x8645;
  static +VERTEX_ATTRIB_ARRAY_SIZE: 0x8623;
  static +VERTEX_ATTRIB_ARRAY_STRIDE: 0x8624;
  static +VERTEX_ATTRIB_ARRAY_TYPE: 0x8625;
  static +VERTEX_SHADER: 0x8b31;
  static +VIEWPORT: 0x0ba2;
  static +WAIT_FAILED: 0x911d;
  static +ZERO: 0;
}

declare class WebGLActiveInfo {
  +name: string;
  +size: GLint;
  +type: GLenum;
}

declare class WebGLBuffer extends WebGLObject {}

declare class WebGLContextEvent extends Event {
  +statusMessage: string;

  constructor(type: string, eventInit?: WebGLContextEventInit): void;
}

declare class WebGLFramebuffer extends WebGLObject {}

declare class WebGLObject {
  label: string;
}

declare class WebGLProgram extends WebGLObject {}

declare class WebGLQuery extends WebGLObject {}

declare class WebGLRenderbuffer extends WebGLObject {}

declare class WebGLRenderingContext
  mixins mixin$WebGLRenderingContextBase, mixin$WebGLRenderingContextOverloads
{
  static +ACTIVE_ATTRIBUTES: 0x8b89;
  static +ACTIVE_TEXTURE: 0x84e0;
  static +ACTIVE_UNIFORMS: 0x8b86;
  static +ALIASED_LINE_WIDTH_RANGE: 0x846e;
  static +ALIASED_POINT_SIZE_RANGE: 0x846d;
  static +ALPHA: 0x1906;
  static +ALPHA_BITS: 0x0d55;
  static +ALWAYS: 0x0207;
  static +ARRAY_BUFFER: 0x8892;
  static +ARRAY_BUFFER_BINDING: 0x8894;
  static +ATTACHED_SHADERS: 0x8b85;
  static +BACK: 0x0405;
  static +BLEND: 0x0be2;
  static +BLEND_COLOR: 0x8005;
  static +BLEND_DST_ALPHA: 0x80ca;
  static +BLEND_DST_RGB: 0x80c8;
  static +BLEND_EQUATION: 0x8009;
  static +BLEND_EQUATION_ALPHA: 0x883d;
  static +BLEND_EQUATION_RGB: 0x8009;
  static +BLEND_SRC_ALPHA: 0x80cb;
  static +BLEND_SRC_RGB: 0x80c9;
  static +BLUE_BITS: 0x0d54;
  static +BOOL: 0x8b56;
  static +BOOL_VEC2: 0x8b57;
  static +BOOL_VEC3: 0x8b58;
  static +BOOL_VEC4: 0x8b59;
  static +BROWSER_DEFAULT_WEBGL: 0x9244;
  static +BUFFER_SIZE: 0x8764;
  static +BUFFER_USAGE: 0x8765;
  static +BYTE: 0x1400;
  static +CCW: 0x0901;
  static +CLAMP_TO_EDGE: 0x812f;
  static +COLOR_ATTACHMENT0: 0x8ce0;
  static +COLOR_BUFFER_BIT: 0x00004000;
  static +COLOR_CLEAR_VALUE: 0x0c22;
  static +COLOR_WRITEMASK: 0x0c23;
  static +COMPILE_STATUS: 0x8b81;
  static +COMPRESSED_TEXTURE_FORMATS: 0x86a3;
  static +CONSTANT_ALPHA: 0x8003;
  static +CONSTANT_COLOR: 0x8001;
  static +CONTEXT_LOST_WEBGL: 0x9242;
  static +CULL_FACE: 0x0b44;
  static +CULL_FACE_MODE: 0x0b45;
  static +CURRENT_PROGRAM: 0x8b8d;
  static +CURRENT_VERTEX_ATTRIB: 0x8626;
  static +CW: 0x0900;
  static +DECR: 0x1e03;
  static +DECR_WRAP: 0x8508;
  static +DELETE_STATUS: 0x8b80;
  static +DEPTH_ATTACHMENT: 0x8d00;
  static +DEPTH_BITS: 0x0d56;
  static +DEPTH_BUFFER_BIT: 0x00000100;
  static +DEPTH_CLEAR_VALUE: 0x0b73;
  static +DEPTH_COMPONENT: 0x1902;
  static +DEPTH_COMPONENT16: 0x81a5;
  static +DEPTH_FUNC: 0x0b74;
  static +DEPTH_RANGE: 0x0b70;
  static +DEPTH_STENCIL: 0x84f9;
  static +DEPTH_STENCIL_ATTACHMENT: 0x821a;
  static +DEPTH_TEST: 0x0b71;
  static +DEPTH_WRITEMASK: 0x0b72;
  static +DITHER: 0x0bd0;
  static +DONT_CARE: 0x1100;
  static +DST_ALPHA: 0x0304;
  static +DST_COLOR: 0x0306;
  static +DYNAMIC_DRAW: 0x88e8;
  static +ELEMENT_ARRAY_BUFFER: 0x8893;
  static +ELEMENT_ARRAY_BUFFER_BINDING: 0x8895;
  static +EQUAL: 0x0202;
  static +FASTEST: 0x1101;
  static +FLOAT: 0x1406;
  static +FLOAT_MAT2: 0x8b5a;
  static +FLOAT_MAT3: 0x8b5b;
  static +FLOAT_MAT4: 0x8b5c;
  static +FLOAT_VEC2: 0x8b50;
  static +FLOAT_VEC3: 0x8b51;
  static +FLOAT_VEC4: 0x8b52;
  static +FRAGMENT_SHADER: 0x8b30;
  static +FRAMEBUFFER: 0x8d40;
  static +FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: 0x8cd1;
  static +FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: 0x8cd0;
  static +FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: 0x8cd3;
  static +FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: 0x8cd2;
  static +FRAMEBUFFER_BINDING: 0x8ca6;
  static +FRAMEBUFFER_COMPLETE: 0x8cd5;
  static +FRAMEBUFFER_INCOMPLETE_ATTACHMENT: 0x8cd6;
  static +FRAMEBUFFER_INCOMPLETE_DIMENSIONS: 0x8cd9;
  static +FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: 0x8cd7;
  static +FRAMEBUFFER_UNSUPPORTED: 0x8cdd;
  static +FRONT: 0x0404;
  static +FRONT_AND_BACK: 0x0408;
  static +FRONT_FACE: 0x0b46;
  static +FUNC_ADD: 0x8006;
  static +FUNC_REVERSE_SUBTRACT: 0x800b;
  static +FUNC_SUBTRACT: 0x800a;
  static +GENERATE_MIPMAP_HINT: 0x8192;
  static +GEQUAL: 0x0206;
  static +GREATER: 0x0204;
  static +GREEN_BITS: 0x0d53;
  static +HIGH_FLOAT: 0x8df2;
  static +HIGH_INT: 0x8df5;
  static +IMPLEMENTATION_COLOR_READ_FORMAT: 0x8b9b;
  static +IMPLEMENTATION_COLOR_READ_TYPE: 0x8b9a;
  static +INCR: 0x1e02;
  static +INCR_WRAP: 0x8507;
  static +INT: 0x1404;
  static +INT_VEC2: 0x8b53;
  static +INT_VEC3: 0x8b54;
  static +INT_VEC4: 0x8b55;
  static +INVALID_ENUM: 0x0500;
  static +INVALID_FRAMEBUFFER_OPERATION: 0x0506;
  static +INVALID_OPERATION: 0x0502;
  static +INVALID_VALUE: 0x0501;
  static +INVERT: 0x150a;
  static +KEEP: 0x1e00;
  static +LEQUAL: 0x0203;
  static +LESS: 0x0201;
  static +LINE_LOOP: 0x0002;
  static +LINE_STRIP: 0x0003;
  static +LINE_WIDTH: 0x0b21;
  static +LINEAR: 0x2601;
  static +LINEAR_MIPMAP_LINEAR: 0x2703;
  static +LINEAR_MIPMAP_NEAREST: 0x2701;
  static +LINES: 0x0001;
  static +LINK_STATUS: 0x8b82;
  static +LOW_FLOAT: 0x8df0;
  static +LOW_INT: 0x8df3;
  static +LUMINANCE: 0x1909;
  static +LUMINANCE_ALPHA: 0x190a;
  static +MAX_COMBINED_TEXTURE_IMAGE_UNITS: 0x8b4d;
  static +MAX_CUBE_MAP_TEXTURE_SIZE: 0x851c;
  static +MAX_FRAGMENT_UNIFORM_VECTORS: 0x8dfd;
  static +MAX_RENDERBUFFER_SIZE: 0x84e8;
  static +MAX_TEXTURE_IMAGE_UNITS: 0x8872;
  static +MAX_TEXTURE_SIZE: 0x0d33;
  static +MAX_VARYING_VECTORS: 0x8dfc;
  static +MAX_VERTEX_ATTRIBS: 0x8869;
  static +MAX_VERTEX_TEXTURE_IMAGE_UNITS: 0x8b4c;
  static +MAX_VERTEX_UNIFORM_VECTORS: 0x8dfb;
  static +MAX_VIEWPORT_DIMS: 0x0d3a;
  static +MEDIUM_FLOAT: 0x8df1;
  static +MEDIUM_INT: 0x8df4;
  static +MIRRORED_REPEAT: 0x8370;
  static +NEAREST: 0x2600;
  static +NEAREST_MIPMAP_LINEAR: 0x2702;
  static +NEAREST_MIPMAP_NEAREST: 0x2700;
  static +NEVER: 0x0200;
  static +NICEST: 0x1102;
  static +NO_ERROR: 0;
  static +NONE: 0;
  static +NOTEQUAL: 0x0205;
  static +ONE: 1;
  static +ONE_MINUS_CONSTANT_ALPHA: 0x8004;
  static +ONE_MINUS_CONSTANT_COLOR: 0x8002;
  static +ONE_MINUS_DST_ALPHA: 0x0305;
  static +ONE_MINUS_DST_COLOR: 0x0307;
  static +ONE_MINUS_SRC_ALPHA: 0x0303;
  static +ONE_MINUS_SRC_COLOR: 0x0301;
  static +OUT_OF_MEMORY: 0x0505;
  static +PACK_ALIGNMENT: 0x0d05;
  static +POINTS: 0x0000;
  static +POLYGON_OFFSET_FACTOR: 0x8038;
  static +POLYGON_OFFSET_FILL: 0x8037;
  static +POLYGON_OFFSET_UNITS: 0x2a00;
  static +RED_BITS: 0x0d52;
  static +RENDERBUFFER: 0x8d41;
  static +RENDERBUFFER_ALPHA_SIZE: 0x8d53;
  static +RENDERBUFFER_BINDING: 0x8ca7;
  static +RENDERBUFFER_BLUE_SIZE: 0x8d52;
  static +RENDERBUFFER_DEPTH_SIZE: 0x8d54;
  static +RENDERBUFFER_GREEN_SIZE: 0x8d51;
  static +RENDERBUFFER_HEIGHT: 0x8d43;
  static +RENDERBUFFER_INTERNAL_FORMAT: 0x8d44;
  static +RENDERBUFFER_RED_SIZE: 0x8d50;
  static +RENDERBUFFER_STENCIL_SIZE: 0x8d55;
  static +RENDERBUFFER_WIDTH: 0x8d42;
  static +RENDERER: 0x1f01;
  static +REPEAT: 0x2901;
  static +REPLACE: 0x1e01;
  static +RGB: 0x1907;
  static +RGB5_A1: 0x8057;
  static +RGB565: 0x8d62;
  static +RGBA: 0x1908;
  static +RGBA4: 0x8056;
  static +RGBA8: 0x8058;
  static +SAMPLE_ALPHA_TO_COVERAGE: 0x809e;
  static +SAMPLE_BUFFERS: 0x80a8;
  static +SAMPLE_COVERAGE: 0x80a0;
  static +SAMPLE_COVERAGE_INVERT: 0x80ab;
  static +SAMPLE_COVERAGE_VALUE: 0x80aa;
  static +SAMPLER_2D: 0x8b5e;
  static +SAMPLER_CUBE: 0x8b60;
  static +SAMPLES: 0x80a9;
  static +SCISSOR_BOX: 0x0c10;
  static +SCISSOR_TEST: 0x0c11;
  static +SHADER_TYPE: 0x8b4f;
  static +SHADING_LANGUAGE_VERSION: 0x8b8c;
  static +SHORT: 0x1402;
  static +SRC_ALPHA: 0x0302;
  static +SRC_ALPHA_SATURATE: 0x0308;
  static +SRC_COLOR: 0x0300;
  static +STATIC_DRAW: 0x88e4;
  static +STENCIL_ATTACHMENT: 0x8d20;
  static +STENCIL_BACK_FAIL: 0x8801;
  static +STENCIL_BACK_FUNC: 0x8800;
  static +STENCIL_BACK_PASS_DEPTH_FAIL: 0x8802;
  static +STENCIL_BACK_PASS_DEPTH_PASS: 0x8803;
  static +STENCIL_BACK_REF: 0x8ca3;
  static +STENCIL_BACK_VALUE_MASK: 0x8ca4;
  static +STENCIL_BACK_WRITEMASK: 0x8ca5;
  static +STENCIL_BITS: 0x0d57;
  static +STENCIL_BUFFER_BIT: 0x00000400;
  static +STENCIL_CLEAR_VALUE: 0x0b91;
  static +STENCIL_FAIL: 0x0b94;
  static +STENCIL_FUNC: 0x0b92;
  static +STENCIL_INDEX8: 0x8d48;
  static +STENCIL_PASS_DEPTH_FAIL: 0x0b95;
  static +STENCIL_PASS_DEPTH_PASS: 0x0b96;
  static +STENCIL_REF: 0x0b97;
  static +STENCIL_TEST: 0x0b90;
  static +STENCIL_VALUE_MASK: 0x0b93;
  static +STENCIL_WRITEMASK: 0x0b98;
  static +STREAM_DRAW: 0x88e0;
  static +SUBPIXEL_BITS: 0x0d50;
  static +TEXTURE: 0x1702;
  static +TEXTURE_2D: 0x0de1;
  static +TEXTURE_BINDING_2D: 0x8069;
  static +TEXTURE_BINDING_CUBE_MAP: 0x8514;
  static +TEXTURE_CUBE_MAP: 0x8513;
  static +TEXTURE_CUBE_MAP_NEGATIVE_X: 0x8516;
  static +TEXTURE_CUBE_MAP_NEGATIVE_Y: 0x8518;
  static +TEXTURE_CUBE_MAP_NEGATIVE_Z: 0x851a;
  static +TEXTURE_CUBE_MAP_POSITIVE_X: 0x8515;
  static +TEXTURE_CUBE_MAP_POSITIVE_Y: 0x8517;
  static +TEXTURE_CUBE_MAP_POSITIVE_Z: 0x8519;
  static +TEXTURE_MAG_FILTER: 0x2800;
  static +TEXTURE_MIN_FILTER: 0x2801;
  static +TEXTURE_WRAP_S: 0x2802;
  static +TEXTURE_WRAP_T: 0x2803;
  static +TEXTURE0: 0x84c0;
  static +TEXTURE1: 0x84c1;
  static +TEXTURE10: 0x84ca;
  static +TEXTURE11: 0x84cb;
  static +TEXTURE12: 0x84cc;
  static +TEXTURE13: 0x84cd;
  static +TEXTURE14: 0x84ce;
  static +TEXTURE15: 0x84cf;
  static +TEXTURE16: 0x84d0;
  static +TEXTURE17: 0x84d1;
  static +TEXTURE18: 0x84d2;
  static +TEXTURE19: 0x84d3;
  static +TEXTURE2: 0x84c2;
  static +TEXTURE20: 0x84d4;
  static +TEXTURE21: 0x84d5;
  static +TEXTURE22: 0x84d6;
  static +TEXTURE23: 0x84d7;
  static +TEXTURE24: 0x84d8;
  static +TEXTURE25: 0x84d9;
  static +TEXTURE26: 0x84da;
  static +TEXTURE27: 0x84db;
  static +TEXTURE28: 0x84dc;
  static +TEXTURE29: 0x84dd;
  static +TEXTURE3: 0x84c3;
  static +TEXTURE30: 0x84de;
  static +TEXTURE31: 0x84df;
  static +TEXTURE4: 0x84c4;
  static +TEXTURE5: 0x84c5;
  static +TEXTURE6: 0x84c6;
  static +TEXTURE7: 0x84c7;
  static +TEXTURE8: 0x84c8;
  static +TEXTURE9: 0x84c9;
  static +TRIANGLE_FAN: 0x0006;
  static +TRIANGLE_STRIP: 0x0005;
  static +TRIANGLES: 0x0004;
  static +UNPACK_ALIGNMENT: 0x0cf5;
  static +UNPACK_COLORSPACE_CONVERSION_WEBGL: 0x9243;
  static +UNPACK_FLIP_Y_WEBGL: 0x9240;
  static +UNPACK_PREMULTIPLY_ALPHA_WEBGL: 0x9241;
  static +UNSIGNED_BYTE: 0x1401;
  static +UNSIGNED_INT: 0x1405;
  static +UNSIGNED_SHORT: 0x1403;
  static +UNSIGNED_SHORT_4_4_4_4: 0x8033;
  static +UNSIGNED_SHORT_5_5_5_1: 0x8034;
  static +UNSIGNED_SHORT_5_6_5: 0x8363;
  static +VALIDATE_STATUS: 0x8b83;
  static +VENDOR: 0x1f00;
  static +VERSION: 0x1f02;
  static +VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: 0x889f;
  static +VERTEX_ATTRIB_ARRAY_ENABLED: 0x8622;
  static +VERTEX_ATTRIB_ARRAY_NORMALIZED: 0x886a;
  static +VERTEX_ATTRIB_ARRAY_POINTER: 0x8645;
  static +VERTEX_ATTRIB_ARRAY_SIZE: 0x8623;
  static +VERTEX_ATTRIB_ARRAY_STRIDE: 0x8624;
  static +VERTEX_ATTRIB_ARRAY_TYPE: 0x8625;
  static +VERTEX_SHADER: 0x8b31;
  static +VIEWPORT: 0x0ba2;
  static +ZERO: 0;
}

declare class WebGLSampler extends WebGLObject {}

declare class WebGLShader extends WebGLObject {}

declare class WebGLShaderPrecisionFormat {
  +precision: GLint;
  +rangeMax: GLint;
  +rangeMin: GLint;
}

declare class WebGLSync extends WebGLObject {}

declare class WebGLTexture extends WebGLObject {}

declare class WebGLTransformFeedback extends WebGLObject {}

declare class WebGLUniformLocation {}

declare class WebGLVertexArrayObject extends WebGLObject {}

type WGSLLanguageFeatures = Set<string>;

declare class WheelEvent extends MouseEvent {
  static +DOM_DELTA_LINE: 0x01;
  static +DOM_DELTA_PAGE: 0x02;
  static +DOM_DELTA_PIXEL: 0x00;

  +deltaMode: number;
  +deltaX: number;
  +deltaY: number;
  +deltaZ: number;

  constructor(type: string, eventInitDict?: WheelEventInit): void;
}

declare class Window
  extends EventTarget
  mixins
    mixin$GlobalEventHandlers,
    mixin$WindowEventHandlers,
    mixin$WindowOrWorkerGlobalScope,
    mixin$AnimationFrameProvider,
    mixin$WindowSessionStorage,
    mixin$WindowLocalStorage
{
  +clientInformation: Navigator;
  +closed: boolean;
  +customElements: CustomElementRegistry;
  +document: Document;
  +event: Event | void;
  +external: External;
  +fakeWorklet1: Worklet;
  +fakeWorklet2: Worklet;
  +frameElement: Element | null;
  +frames: WindowProxy;
  +history: History;
  +length: number;
  +location: Location;
  +locationbar: BarProp;
  +menubar: BarProp;
  name: string;
  +navigation: Navigation;
  +navigator: Navigator;
  opener: any;
  +originAgentCluster: boolean;
  +parent: WindowProxy | null;
  +personalbar: BarProp;
  +scrollbars: BarProp;
  +self: WindowProxy;
  status: string;
  +statusbar: BarProp;
  +toolbar: BarProp;
  +top: WindowProxy | null;
  +window: WindowProxy;

  alert(): void;
  alert(message: string): void;
  blur(): void;
  captureEvents(): void;
  close(): void;
  confirm(message?: string): boolean;
  focus(): void;
  getComputedStyle(
    elt: Element,
    pseudoElt?: string | null,
  ): CSSStyleDeclaration;
  open(url?: string, target?: string, features?: string): WindowProxy | null;
  postMessage(
    message: any,
    targetOrigin: string,
    transfer?: Array<Object>,
  ): void;
  postMessage(message: any, options?: WindowPostMessageOptions): void;
  print(): void;
  prompt(message?: string, default_?: string): string | null;
  releaseEvents(): void;
  stop(): void;
  (name: string): Object;
}

interface WindowProxy extends Window {}

declare class Worker
  extends EventTarget
  mixins mixin$AbstractWorker, mixin$MessageEventTarget
{
  constructor(
    scriptURL: TrustedScriptURL | string,
    options?: WorkerOptions,
  ): void;

  postMessage(message: any, transfer: Array<Object>): void;
  postMessage(message: any, options?: StructuredSerializeOptions): void;
  terminate(): void;
}

declare class WorkerGlobalScope
  extends EventTarget
  mixins mixin$WindowOrWorkerGlobalScope
{
  +location: WorkerLocation;
  +navigator: WorkerNavigator;
  onerror: OnErrorEventHandler;
  onlanguagechange: EventHandler;
  onoffline: EventHandler;
  ononline: EventHandler;
  onrejectionhandled: EventHandler;
  onunhandledrejection: EventHandler;
  +self: WorkerGlobalScope;

  importScripts(urls: TrustedScriptURL | string): void;
}

declare class WorkerLocation {
  +hash: string;
  +host: string;
  +hostname: string;
  +href: string;
  +origin: string;
  +pathname: string;
  +port: string;
  +protocol: string;
  +search: string;
}

declare class WorkerNavigator
  mixins
    mixin$NavigatorID,
    mixin$NavigatorLanguage,
    mixin$NavigatorOnLine,
    mixin$NavigatorConcurrentHardware,
    mixin$NavigatorGPU {}

declare class Worklet {
  addModule(moduleURL: string, options?: WorkletOptions): void;
}

declare class WorkletGlobalScope {}

declare class WritableStream {
  +locked: boolean;

  constructor(underlyingSink?: Object, strategy?: QueuingStrategy): void;

  abort(reason?: any): void;
  close(): void;
  getWriter(): WritableStreamDefaultWriter;
}

declare class WritableStreamDefaultController {
  +signal: AbortSignal;

  error(e?: any): void;
}

declare class WritableStreamDefaultWriter {
  +closed: void;
  +desiredSize: number | null;
  +ready: void;

  constructor(stream: WritableStream): void;

  abort(reason?: any): void;
  close(): void;
  releaseLock(): void;
  write(chunk?: any): void;
}

declare class XMLDocument extends Document {}

declare class XMLHttpRequest extends XMLHttpRequestEventTarget {
  static +DONE: 4;
  static +HEADERS_RECEIVED: 2;
  static +LOADING: 3;
  static +OPENED: 1;
  static +UNSENT: 0;

  onreadystatechange: EventHandler;
  +readyState: number;
  +response: any;
  +responseText: string;
  responseType: XMLHttpRequestResponseType;
  +responseURL: string;
  +responseXML: Document | null;
  +status: number;
  +statusText: string;
  timeout: number;
  +upload: XMLHttpRequestUpload;
  withCredentials: boolean;

  constructor(): void;

  abort(): void;
  getAllResponseHeaders(): string;
  getResponseHeader(name: string): string | null;
  open(method: string, url: string): void;
  open(
    method: string,
    url: string,
    async: boolean,
    username?: string | null,
    password?: string | null,
  ): void;
  overrideMimeType(mime: string): void;
  send(body?: Document | XMLHttpRequestBodyInit | null): void;
  setRequestHeader(name: string, value: string): void;
}

declare class XMLHttpRequestEventTarget extends EventTarget {
  onabort: EventHandler;
  onerror: EventHandler;
  onload: EventHandler;
  onloadend: EventHandler;
  onloadstart: EventHandler;
  onprogress: EventHandler;
  ontimeout: EventHandler;
}

declare class XMLHttpRequestUpload extends XMLHttpRequestEventTarget {}

declare class XMLSerializer {
  constructor(): void;

  serializeToString(root: Node): string;
}

declare class XPathEvaluator mixins mixin$XPathEvaluatorBase {
  constructor(): void;
}

declare class XPathExpression {
  evaluate(
    contextNode: Node,
    type?: number,
    result?: XPathResult | null,
  ): XPathResult;
}

declare class XPathResult {
  static +ANY_TYPE: 0;
  static +ANY_UNORDERED_NODE_TYPE: 8;
  static +BOOLEAN_TYPE: 3;
  static +FIRST_ORDERED_NODE_TYPE: 9;
  static +NUMBER_TYPE: 1;
  static +ORDERED_NODE_ITERATOR_TYPE: 5;
  static +ORDERED_NODE_SNAPSHOT_TYPE: 7;
  static +STRING_TYPE: 2;
  static +UNORDERED_NODE_ITERATOR_TYPE: 4;
  static +UNORDERED_NODE_SNAPSHOT_TYPE: 6;

  +booleanValue: boolean;
  +invalidIteratorState: boolean;
  +numberValue: number;
  +resultType: number;
  +singleNodeValue: Node | null;
  +snapshotLength: number;
  +stringValue: string;

  iterateNext(): Node | null;
  snapshotItem(index: number): Node | null;
}

declare class XSLTProcessor {
  constructor(): void;

  clearParameters(): void;
  getParameter(namespaceURI: string, localName: string): any;
  importStylesheet(style: Node): void;
  removeParameter(namespaceURI: string, localName: string): void;
  reset(): void;
  setParameter(namespaceURI: string, localName: string, value: any): void;
  transformToDocument(source: Node): Document;
  transformToFragment(source: Node, output: Document): DocumentFragment;
}

/* mixin */ declare class mixin$AbstractWorker {
  onerror: EventHandler;
}

/* mixin */ declare class mixin$Animatable {
  animate(
    keyframes: Object | null,
    options?: number | KeyframeAnimationOptions,
  ): Animation;
  getAnimations(options?: GetAnimationsOptions): Array<Animation>;
}

/* mixin */ declare class mixin$AnimationFrameProvider {
  cancelAnimationFrame(handle: number): void;
  requestAnimationFrame(callback: FrameRequestCallback): number;
}

/* mixin */ declare class mixin$Body {
  +body: ReadableStream | null;
  +bodyUsed: boolean;

  arrayBuffer(): ArrayBuffer;
  blob(): Blob;
  bytes(): Uint8Array;
  formData(): FormData;
  json(): any;
  text(): string;
}

/* mixin */ declare class mixin$CanvasCompositing {
  globalAlpha: number;
  globalCompositeOperation: string;
}

/* mixin */ declare class mixin$CanvasDrawImage {
  drawImage(image: CanvasImageSource, dx: number, dy: number): void;
  drawImage(
    image: CanvasImageSource,
    dx: number,
    dy: number,
    dw: number,
    dh: number,
  ): void;
  drawImage(
    image: CanvasImageSource,
    sx: number,
    sy: number,
    sw: number,
    sh: number,
    dx: number,
    dy: number,
    dw: number,
    dh: number,
  ): void;
}

/* mixin */ declare class mixin$CanvasDrawPath {
  beginPath(): void;
  clip(fillRule?: CanvasFillRule): void;
  clip(path: Path2D, fillRule?: CanvasFillRule): void;
  fill(fillRule?: CanvasFillRule): void;
  fill(path: Path2D, fillRule?: CanvasFillRule): void;
  isPointInPath(x: number, y: number, fillRule?: CanvasFillRule): boolean;
  isPointInPath(
    path: Path2D,
    x: number,
    y: number,
    fillRule?: CanvasFillRule,
  ): boolean;
  isPointInStroke(x: number, y: number): boolean;
  isPointInStroke(path: Path2D, x: number, y: number): boolean;
  stroke(): void;
  stroke(path: Path2D): void;
}

/* mixin */ declare class mixin$CanvasFillStrokeStyles {
  fillStyle: string | CanvasGradient | CanvasPattern;
  strokeStyle: string | CanvasGradient | CanvasPattern;

  createConicGradient(startAngle: number, x: number, y: number): CanvasGradient;
  createLinearGradient(
    x0: number,
    y0: number,
    x1: number,
    y1: number,
  ): CanvasGradient;
  createPattern(
    image: CanvasImageSource,
    repetition: string,
  ): CanvasPattern | null;
  createRadialGradient(
    x0: number,
    y0: number,
    r0: number,
    x1: number,
    y1: number,
    r1: number,
  ): CanvasGradient;
}

/* mixin */ declare class mixin$CanvasFilters {
  filter: string;
}

/* mixin */ declare class mixin$CanvasImageData {
  createImageData(
    sw: number,
    sh: number,
    settings?: ImageDataSettings,
  ): ImageData;
  createImageData(imageData: ImageData): ImageData;
  getImageData(
    sx: number,
    sy: number,
    sw: number,
    sh: number,
    settings?: ImageDataSettings,
  ): ImageData;
  putImageData(imageData: ImageData, dx: number, dy: number): void;
  putImageData(
    imageData: ImageData,
    dx: number,
    dy: number,
    dirtyX: number,
    dirtyY: number,
    dirtyWidth: number,
    dirtyHeight: number,
  ): void;
}

/* mixin */ declare class mixin$CanvasImageSmoothing {
  imageSmoothingEnabled: boolean;
  imageSmoothingQuality: ImageSmoothingQuality;
}

/* mixin */ declare class mixin$CanvasPath {
  arc(
    x: number,
    y: number,
    radius: number,
    startAngle: number,
    endAngle: number,
    counterclockwise?: boolean,
  ): void;
  arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;
  bezierCurveTo(
    cp1x: number,
    cp1y: number,
    cp2x: number,
    cp2y: number,
    x: number,
    y: number,
  ): void;
  closePath(): void;
  ellipse(
    x: number,
    y: number,
    radiusX: number,
    radiusY: number,
    rotation: number,
    startAngle: number,
    endAngle: number,
    counterclockwise?: boolean,
  ): void;
  lineTo(x: number, y: number): void;
  moveTo(x: number, y: number): void;
  quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
  rect(x: number, y: number, w: number, h: number): void;
  roundRect(
    x: number,
    y: number,
    w: number,
    h: number,
    radii?: number | DOMPointInit | Array<number | DOMPointInit>,
  ): void;
}

/* mixin */ declare class mixin$CanvasPathDrawingStyles {
  lineCap: CanvasLineCap;
  lineDashOffset: number;
  lineJoin: CanvasLineJoin;
  lineWidth: number;
  miterLimit: number;

  getLineDash(): Array<number>;
  setLineDash(segments: Array<number>): void;
}

/* mixin */ declare class mixin$CanvasRect {
  clearRect(x: number, y: number, w: number, h: number): void;
  fillRect(x: number, y: number, w: number, h: number): void;
  strokeRect(x: number, y: number, w: number, h: number): void;
}

/* mixin */ declare class mixin$CanvasSettings {
  getContextAttributes(): CanvasRenderingContext2DSettings;
}

/* mixin */ declare class mixin$CanvasShadowStyles {
  shadowBlur: number;
  shadowColor: string;
  shadowOffsetX: number;
  shadowOffsetY: number;
}

/* mixin */ declare class mixin$CanvasState {
  isContextLost(): boolean;
  reset(): void;
  restore(): void;
  save(): void;
}

/* mixin */ declare class mixin$CanvasText {
  fillText(text: string, x: number, y: number, maxWidth?: number): void;
  measureText(text: string): TextMetrics;
  strokeText(text: string, x: number, y: number, maxWidth?: number): void;
}

/* mixin */ declare class mixin$CanvasTextDrawingStyles {
  direction: CanvasDirection;
  font: string;
  fontKerning: CanvasFontKerning;
  fontStretch: CanvasFontStretch;
  fontVariantCaps: CanvasFontVariantCaps;
  lang: string;
  letterSpacing: string;
  textAlign: CanvasTextAlign;
  textBaseline: CanvasTextBaseline;
  textRendering: CanvasTextRendering;
  wordSpacing: string;
}

/* mixin */ declare class mixin$CanvasTransform {
  getTransform(): DOMMatrix;
  resetTransform(): void;
  rotate(angle: number): void;
  scale(x: number, y: number): void;
  setTransform(
    a: number,
    b: number,
    c: number,
    d: number,
    e: number,
    f: number,
  ): void;
  setTransform(transform?: DOMMatrix2DInit): void;
  transform(
    a: number,
    b: number,
    c: number,
    d: number,
    e: number,
    f: number,
  ): void;
  translate(x: number, y: number): void;
}

/* mixin */ declare class mixin$CanvasUserInterface {
  drawFocusIfNeeded(element: Element): void;
  drawFocusIfNeeded(path: Path2D, element: Element): void;
}

/* mixin */ declare class mixin$ChildNode {
  after(nodes: Node | string): void;
  before(nodes: Node | string): void;
  remove(): void;
  replaceWith(nodes: Node | string): void;
}

/* mixin */ declare class mixin$DocumentOrShadowRoot {
  +activeElement: Element | null;
  adoptedStyleSheets: CSSStyleSheet;
  +fullscreenElement: Element | null;
  +styleSheets: StyleSheetList;

  getAnimations(): Array<Animation>;
}

/* mixin */ declare class mixin$ElementContentEditable {
  contentEditable: string;
  enterKeyHint: string;
  inputMode: string;
  +isContentEditable: boolean;
}

/* mixin */ declare class mixin$ElementCSSInlineStyle {
  +style: CSSStyleDeclaration;
}

/* mixin */ declare class mixin$GenericTransformStream {
  +readable: ReadableStream;
  +writable: WritableStream;
}

/* mixin */ declare class mixin$GetSVGDocument {
  getSVGDocument(): Document;
}

/* mixin */ declare class mixin$GlobalEventHandlers {
  onabort: EventHandler;
  onauxclick: EventHandler;
  onbeforeinput: EventHandler;
  onbeforematch: EventHandler;
  onbeforetoggle: EventHandler;
  onblur: EventHandler;
  oncancel: EventHandler;
  oncanplay: EventHandler;
  oncanplaythrough: EventHandler;
  onchange: EventHandler;
  onclick: EventHandler;
  onclose: EventHandler;
  oncommand: EventHandler;
  oncontextlost: EventHandler;
  oncontextmenu: EventHandler;
  oncontextrestored: EventHandler;
  oncopy: EventHandler;
  oncuechange: EventHandler;
  oncut: EventHandler;
  ondblclick: EventHandler;
  ondrag: EventHandler;
  ondragend: EventHandler;
  ondragenter: EventHandler;
  ondragleave: EventHandler;
  ondragover: EventHandler;
  ondragstart: EventHandler;
  ondrop: EventHandler;
  ondurationchange: EventHandler;
  onemptied: EventHandler;
  onended: EventHandler;
  onerror: OnErrorEventHandler;
  onfocus: EventHandler;
  onformdata: EventHandler;
  oninput: EventHandler;
  oninvalid: EventHandler;
  onkeydown: EventHandler;
  onkeypress: EventHandler;
  onkeyup: EventHandler;
  onload: EventHandler;
  onloadeddata: EventHandler;
  onloadedmetadata: EventHandler;
  onloadstart: EventHandler;
  onmousedown: EventHandler;
  onmouseenter: EventHandler;
  onmouseleave: EventHandler;
  onmousemove: EventHandler;
  onmouseout: EventHandler;
  onmouseover: EventHandler;
  onmouseup: EventHandler;
  onpaste: EventHandler;
  onpause: EventHandler;
  onplay: EventHandler;
  onplaying: EventHandler;
  onprogress: EventHandler;
  onratechange: EventHandler;
  onreset: EventHandler;
  onresize: EventHandler;
  onscroll: EventHandler;
  onscrollend: EventHandler;
  onsecuritypolicyviolation: EventHandler;
  onseeked: EventHandler;
  onseeking: EventHandler;
  onselect: EventHandler;
  onslotchange: EventHandler;
  onstalled: EventHandler;
  onsubmit: EventHandler;
  onsuspend: EventHandler;
  ontimeupdate: EventHandler;
  ontoggle: EventHandler;
  onvolumechange: EventHandler;
  onwaiting: EventHandler;
  onwebkitanimationend: EventHandler;
  onwebkitanimationiteration: EventHandler;
  onwebkitanimationstart: EventHandler;
  onwebkittransitionend: EventHandler;
  onwheel: EventHandler;
}

/* mixin */ declare class mixin$GPUBindingCommandsMixin {
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

/* mixin */ declare class mixin$GPUCommandsMixin {}

/* mixin */ declare class mixin$GPUDebugCommandsMixin {
  insertDebugMarker(markerLabel: string): void;
  popDebugGroup(): void;
  pushDebugGroup(groupLabel: string): void;
}

/* mixin */ declare class mixin$GPUObjectBase {
  label: string;
}

/* mixin */ declare class mixin$GPUPipelineBase {
  getBindGroupLayout(index: number): GPUBindGroupLayout;
}

/* mixin */ declare class mixin$GPURenderCommandsMixin {
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

/* mixin */ declare class mixin$HTMLHyperlinkElementUtils {
  hash: string;
  host: string;
  hostname: string;
  href: string;
  +origin: string;
  password: string;
  pathname: string;
  port: string;
  protocol: string;
  search: string;
  username: string;
}

/* mixin */ declare class mixin$HTMLOrSVGElement {
  autofocus: boolean;
  +dataset: DOMStringMap;
  nonce: string;
  tabIndex: number;

  blur(): void;
  focus(options?: FocusOptions): void;
}

/* mixin */ declare class mixin$LinkStyle {
  +sheet: CSSStyleSheet | null;
}

/* mixin */ declare class mixin$MessageEventTarget {
  onmessage: EventHandler;
  onmessageerror: EventHandler;
}

/* mixin */ declare class mixin$NavigatorConcurrentHardware {
  +hardwareConcurrency: number;
}

/* mixin */ declare class mixin$NavigatorContentUtils {
  registerProtocolHandler(scheme: string, url: string): void;
  unregisterProtocolHandler(scheme: string, url: string): void;
}

/* mixin */ declare class mixin$NavigatorCookies {
  +cookieEnabled: boolean;
}

/* mixin */ declare class mixin$NavigatorGPU {
  +gpu: GPU;
}

/* mixin */ declare class mixin$NavigatorID {
  +appCodeName: string;
  +appName: string;
  +appVersion: string;
  +oscpu: string;
  +platform: string;
  +product: string;
  +productSub: string;
  +userAgent: string;
  +vendor: string;
  +vendorSub: string;

  taintEnabled(): boolean;
}

/* mixin */ declare class mixin$NavigatorLanguage {
  +language: string;
  +languages: string;
}

/* mixin */ declare class mixin$NavigatorOnLine {
  +onLine: boolean;
}

/* mixin */ declare class mixin$NavigatorPlugins {
  +mimeTypes: MimeTypeArray;
  +pdfViewerEnabled: boolean;
  +plugins: PluginArray;

  javaEnabled(): boolean;
}

/* mixin */ declare class mixin$NonDocumentTypeChildNode {
  +nextElementSibling: Element | null;
  +previousElementSibling: Element | null;
}

/* mixin */ declare class mixin$NonElementParentNode {
  getElementById(elementId: string): Element | null;
}

/* mixin */ declare class mixin$ParentNode {
  +childElementCount: number;
  +children: HTMLCollection;
  +firstElementChild: Element | null;
  +lastElementChild: Element | null;

  append(nodes: Node | string): void;
  moveBefore(node: Node, child: Node | null): void;
  prepend(nodes: Node | string): void;
  querySelector(selectors: string): Element | null;
  querySelectorAll(selectors: string): NodeList;
  replaceChildren(nodes: Node | string): void;
}

/* mixin */ declare class mixin$PopoverInvokerElement {
  popoverTargetAction: string;
  popoverTargetElement: Element | null;
}

/* mixin */ declare class mixin$ReadableStreamGenericReader {
  +closed: void;

  cancel(reason?: any): void;
}

/* mixin */ declare class mixin$Slottable {
  +assignedSlot: HTMLSlotElement | null;
}

/* mixin */ declare class mixin$SVGAnimatedPoints {
  +animatedPoints: SVGPointList;
  +points: SVGPointList;
}

/* mixin */ declare class mixin$SVGCSSRule {}

/* mixin */ declare class mixin$SVGElementInstance {
  +correspondingElement: SVGElement | null;
  +correspondingUseElement: SVGUseElement | null;
}

/* mixin */ declare class mixin$SVGExternalResourcesRequired {
  +externalResourcesRequired: SVGAnimatedBoolean;
}

/* mixin */ declare class mixin$SVGFilterPrimitiveStandardAttributes {
  +height: SVGAnimatedLength;
  +result: SVGAnimatedString;
  +width: SVGAnimatedLength;
  +x: SVGAnimatedLength;
  +y: SVGAnimatedLength;
}

/* mixin */ declare class mixin$SVGFitToViewBox {
  +preserveAspectRatio: SVGAnimatedPreserveAspectRatio;
  +viewBox: SVGAnimatedRect;
}

/* mixin */ declare class mixin$SVGLangSpace {
  xmllang: string;
  xmlspace: string;
}

/* mixin */ declare class mixin$SVGLocatable {
  +farthestViewportElement: SVGElement;
  +nearestViewportElement: SVGElement;

  getBBox(): SVGRect;
  getCTM(): SVGMatrix;
  getScreenCTM(): SVGMatrix;
  getTransformToElement(element: SVGElement): SVGMatrix;
}

/* mixin */ declare class mixin$SVGStylable {
  +className: SVGAnimatedString;
  +style: CSSStyleDeclaration;

  getPresentationAttribute(name: string): CSSValue;
}

/* mixin */ declare class mixin$SVGTests {
  +requiredExtensions: SVGStringList;
  +requiredFeatures: SVGStringList;
  +systemLanguage: SVGStringList;

  hasExtension(extension: string): boolean;
}

/* mixin */ declare class mixin$SVGTransformable {
  +transform: SVGAnimatedTransformList;
}

/* mixin */ declare class mixin$SVGURIReference {
  +href: SVGAnimatedString;
}

/* mixin */ declare class mixin$SVGViewSpec {
  +preserveAspectRatioString: string;
  +transform: SVGTransformList;
  +transformString: string;
  +viewBoxString: string;
  +viewTarget: SVGElement;
  +viewTargetString: string;
}

/* mixin */ declare class mixin$SVGZoomAndPan {
  zoomAndPan: number;
}

/* mixin */ declare class mixin$TextDecoderCommon {
  +encoding: string;
  +fatal: boolean;
  +ignoreBOM: boolean;
}

/* mixin */ declare class mixin$TextEncoderCommon {
  +encoding: string;
}

/* mixin */ declare class mixin$WebGL2RenderingContextBase {
  beginQuery(target: GLenum, query: WebGLQuery): void;
  beginTransformFeedback(primitiveMode: GLenum): void;
  bindBufferBase(
    target: GLenum,
    index: GLuint,
    buffer: WebGLBuffer | null,
  ): void;
  bindBufferRange(
    target: GLenum,
    index: GLuint,
    buffer: WebGLBuffer | null,
    offset: GLintptr,
    size: GLsizeiptr,
  ): void;
  bindSampler(unit: GLuint, sampler: WebGLSampler | null): void;
  bindTransformFeedback(
    target: GLenum,
    tf: WebGLTransformFeedback | null,
  ): void;
  bindVertexArray(array: WebGLVertexArrayObject | null): void;
  blitFramebuffer(
    srcX0: GLint,
    srcY0: GLint,
    srcX1: GLint,
    srcY1: GLint,
    dstX0: GLint,
    dstY0: GLint,
    dstX1: GLint,
    dstY1: GLint,
    mask: GLbitfield,
    filter: GLenum,
  ): void;
  clearBufferfi(
    buffer: GLenum,
    drawbuffer: GLint,
    depth: GLfloat,
    stencil: GLint,
  ): void;
  clearBufferfv(
    buffer: GLenum,
    drawbuffer: GLint,
    values: Float32List,
    srcOffset?: number,
  ): void;
  clearBufferiv(
    buffer: GLenum,
    drawbuffer: GLint,
    values: Int32List,
    srcOffset?: number,
  ): void;
  clearBufferuiv(
    buffer: GLenum,
    drawbuffer: GLint,
    values: Uint32List,
    srcOffset?: number,
  ): void;
  clientWaitSync(sync: WebGLSync, flags: GLbitfield, timeout: GLuint64): GLenum;
  compressedTexImage3D(
    target: GLenum,
    level: GLint,
    internalformat: GLenum,
    width: GLsizei,
    height: GLsizei,
    depth: GLsizei,
    border: GLint,
    imageSize: GLsizei,
    offset: GLintptr,
  ): void;
  compressedTexImage3D(
    target: GLenum,
    level: GLint,
    internalformat: GLenum,
    width: GLsizei,
    height: GLsizei,
    depth: GLsizei,
    border: GLint,
    srcData: ArrayBufferView,
    srcOffset?: number,
    srcLengthOverride?: GLuint,
  ): void;
  compressedTexSubImage3D(
    target: GLenum,
    level: GLint,
    xoffset: GLint,
    yoffset: GLint,
    zoffset: GLint,
    width: GLsizei,
    height: GLsizei,
    depth: GLsizei,
    format: GLenum,
    imageSize: GLsizei,
    offset: GLintptr,
  ): void;
  compressedTexSubImage3D(
    target: GLenum,
    level: GLint,
    xoffset: GLint,
    yoffset: GLint,
    zoffset: GLint,
    width: GLsizei,
    height: GLsizei,
    depth: GLsizei,
    format: GLenum,
    srcData: ArrayBufferView,
    srcOffset?: number,
    srcLengthOverride?: GLuint,
  ): void;
  copyBufferSubData(
    readTarget: GLenum,
    writeTarget: GLenum,
    readOffset: GLintptr,
    writeOffset: GLintptr,
    size: GLsizeiptr,
  ): void;
  copyTexSubImage3D(
    target: GLenum,
    level: GLint,
    xoffset: GLint,
    yoffset: GLint,
    zoffset: GLint,
    x: GLint,
    y: GLint,
    width: GLsizei,
    height: GLsizei,
  ): void;
  createQuery(): WebGLQuery;
  createSampler(): WebGLSampler;
  createTransformFeedback(): WebGLTransformFeedback;
  createVertexArray(): WebGLVertexArrayObject;
  deleteQuery(query: WebGLQuery | null): void;
  deleteSampler(sampler: WebGLSampler | null): void;
  deleteSync(sync: WebGLSync | null): void;
  deleteTransformFeedback(tf: WebGLTransformFeedback | null): void;
  deleteVertexArray(vertexArray: WebGLVertexArrayObject | null): void;
  drawArraysInstanced(
    mode: GLenum,
    first: GLint,
    count: GLsizei,
    instanceCount: GLsizei,
  ): void;
  drawBuffers(buffers: Array<GLenum>): void;
  drawElementsInstanced(
    mode: GLenum,
    count: GLsizei,
    type: GLenum,
    offset: GLintptr,
    instanceCount: GLsizei,
  ): void;
  drawRangeElements(
    mode: GLenum,
    start: GLuint,
    end: GLuint,
    count: GLsizei,
    type: GLenum,
    offset: GLintptr,
  ): void;
  endQuery(target: GLenum): void;
  endTransformFeedback(): void;
  fenceSync(condition: GLenum, flags: GLbitfield): WebGLSync | null;
  framebufferTextureLayer(
    target: GLenum,
    attachment: GLenum,
    texture: WebGLTexture | null,
    level: GLint,
    layer: GLint,
  ): void;
  getActiveUniformBlockName(
    program: WebGLProgram,
    uniformBlockIndex: GLuint,
  ): string | null;
  getActiveUniformBlockParameter(
    program: WebGLProgram,
    uniformBlockIndex: GLuint,
    pname: GLenum,
  ): any;
  getActiveUniforms(
    program: WebGLProgram,
    uniformIndices: Array<GLuint>,
    pname: GLenum,
  ): any;
  getBufferSubData(
    target: GLenum,
    srcByteOffset: GLintptr,
    dstBuffer: ArrayBufferView,
    dstOffset?: number,
    length?: GLuint,
  ): void;
  getFragDataLocation(program: WebGLProgram, name: string): GLint;
  getIndexedParameter(target: GLenum, index: GLuint): any;
  getInternalformatParameter(
    target: GLenum,
    internalformat: GLenum,
    pname: GLenum,
  ): any;
  getQuery(target: GLenum, pname: GLenum): WebGLQuery | null;
  getQueryParameter(query: WebGLQuery, pname: GLenum): any;
  getSamplerParameter(sampler: WebGLSampler, pname: GLenum): any;
  getSyncParameter(sync: WebGLSync, pname: GLenum): any;
  getTransformFeedbackVarying(
    program: WebGLProgram,
    index: GLuint,
  ): WebGLActiveInfo | null;
  getUniformBlockIndex(program: WebGLProgram, uniformBlockName: string): GLuint;
  getUniformIndices(
    program: WebGLProgram,
    uniformNames: Array<string>,
  ): Array<GLuint> | null;
  invalidateFramebuffer(target: GLenum, attachments: Array<GLenum>): void;
  invalidateSubFramebuffer(
    target: GLenum,
    attachments: Array<GLenum>,
    x: GLint,
    y: GLint,
    width: GLsizei,
    height: GLsizei,
  ): void;
  isQuery(query: WebGLQuery | null): GLboolean;
  isSampler(sampler: WebGLSampler | null): GLboolean;
  isSync(sync: WebGLSync | null): GLboolean;
  isTransformFeedback(tf: WebGLTransformFeedback | null): GLboolean;
  isVertexArray(vertexArray: WebGLVertexArrayObject | null): GLboolean;
  pauseTransformFeedback(): void;
  readBuffer(src: GLenum): void;
  renderbufferStorageMultisample(
    target: GLenum,
    samples: GLsizei,
    internalformat: GLenum,
    width: GLsizei,
    height: GLsizei,
  ): void;
  resumeTransformFeedback(): void;
  samplerParameterf(sampler: WebGLSampler, pname: GLenum, param: GLfloat): void;
  samplerParameteri(sampler: WebGLSampler, pname: GLenum, param: GLint): void;
  texImage3D(
    target: GLenum,
    level: GLint,
    internalformat: GLint,
    width: GLsizei,
    height: GLsizei,
    depth: GLsizei,
    border: GLint,
    format: GLenum,
    type: GLenum,
    pboOffset: GLintptr,
  ): void;
  texImage3D(
    target: GLenum,
    level: GLint,
    internalformat: GLint,
    width: GLsizei,
    height: GLsizei,
    depth: GLsizei,
    border: GLint,
    format: GLenum,
    type: GLenum,
    source: TexImageSource,
  ): void;
  texImage3D(
    target: GLenum,
    level: GLint,
    internalformat: GLint,
    width: GLsizei,
    height: GLsizei,
    depth: GLsizei,
    border: GLint,
    format: GLenum,
    type: GLenum,
    srcData: ArrayBufferView | null,
  ): void;
  texImage3D(
    target: GLenum,
    level: GLint,
    internalformat: GLint,
    width: GLsizei,
    height: GLsizei,
    depth: GLsizei,
    border: GLint,
    format: GLenum,
    type: GLenum,
    srcData: ArrayBufferView,
    srcOffset: number,
  ): void;
  texStorage2D(
    target: GLenum,
    levels: GLsizei,
    internalformat: GLenum,
    width: GLsizei,
    height: GLsizei,
  ): void;
  texStorage3D(
    target: GLenum,
    levels: GLsizei,
    internalformat: GLenum,
    width: GLsizei,
    height: GLsizei,
    depth: GLsizei,
  ): void;
  texSubImage3D(
    target: GLenum,
    level: GLint,
    xoffset: GLint,
    yoffset: GLint,
    zoffset: GLint,
    width: GLsizei,
    height: GLsizei,
    depth: GLsizei,
    format: GLenum,
    type: GLenum,
    pboOffset: GLintptr,
  ): void;
  texSubImage3D(
    target: GLenum,
    level: GLint,
    xoffset: GLint,
    yoffset: GLint,
    zoffset: GLint,
    width: GLsizei,
    height: GLsizei,
    depth: GLsizei,
    format: GLenum,
    type: GLenum,
    source: TexImageSource,
  ): void;
  texSubImage3D(
    target: GLenum,
    level: GLint,
    xoffset: GLint,
    yoffset: GLint,
    zoffset: GLint,
    width: GLsizei,
    height: GLsizei,
    depth: GLsizei,
    format: GLenum,
    type: GLenum,
    srcData: ArrayBufferView | null,
    srcOffset?: number,
  ): void;
  transformFeedbackVaryings(
    program: WebGLProgram,
    varyings: Array<string>,
    bufferMode: GLenum,
  ): void;
  uniform1ui(location: WebGLUniformLocation | null, v0: GLuint): void;
  uniform1uiv(
    location: WebGLUniformLocation | null,
    data: Uint32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  uniform2ui(
    location: WebGLUniformLocation | null,
    v0: GLuint,
    v1: GLuint,
  ): void;
  uniform2uiv(
    location: WebGLUniformLocation | null,
    data: Uint32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  uniform3ui(
    location: WebGLUniformLocation | null,
    v0: GLuint,
    v1: GLuint,
    v2: GLuint,
  ): void;
  uniform3uiv(
    location: WebGLUniformLocation | null,
    data: Uint32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  uniform4ui(
    location: WebGLUniformLocation | null,
    v0: GLuint,
    v1: GLuint,
    v2: GLuint,
    v3: GLuint,
  ): void;
  uniform4uiv(
    location: WebGLUniformLocation | null,
    data: Uint32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  uniformBlockBinding(
    program: WebGLProgram,
    uniformBlockIndex: GLuint,
    uniformBlockBinding: GLuint,
  ): void;
  uniformMatrix2x3fv(
    location: WebGLUniformLocation | null,
    transpose: GLboolean,
    data: Float32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  uniformMatrix2x4fv(
    location: WebGLUniformLocation | null,
    transpose: GLboolean,
    data: Float32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  uniformMatrix3x2fv(
    location: WebGLUniformLocation | null,
    transpose: GLboolean,
    data: Float32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  uniformMatrix3x4fv(
    location: WebGLUniformLocation | null,
    transpose: GLboolean,
    data: Float32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  uniformMatrix4x2fv(
    location: WebGLUniformLocation | null,
    transpose: GLboolean,
    data: Float32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  uniformMatrix4x3fv(
    location: WebGLUniformLocation | null,
    transpose: GLboolean,
    data: Float32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  vertexAttribDivisor(index: GLuint, divisor: GLuint): void;
  vertexAttribI4i(index: GLuint, x: GLint, y: GLint, z: GLint, w: GLint): void;
  vertexAttribI4iv(index: GLuint, values: Int32List): void;
  vertexAttribI4ui(
    index: GLuint,
    x: GLuint,
    y: GLuint,
    z: GLuint,
    w: GLuint,
  ): void;
  vertexAttribI4uiv(index: GLuint, values: Uint32List): void;
  vertexAttribIPointer(
    index: GLuint,
    size: GLint,
    type: GLenum,
    stride: GLsizei,
    offset: GLintptr,
  ): void;
  waitSync(sync: WebGLSync, flags: GLbitfield, timeout: GLint64): void;
}

/* mixin */ declare class mixin$WebGL2RenderingContextOverloads {
  bufferData(target: GLenum, size: GLsizeiptr, usage: GLenum): void;
  bufferData(
    target: GLenum,
    srcData: AllowSharedBufferSource | null,
    usage: GLenum,
  ): void;
  bufferData(
    target: GLenum,
    srcData: ArrayBufferView,
    usage: GLenum,
    srcOffset: number,
    length?: GLuint,
  ): void;
  bufferSubData(
    target: GLenum,
    dstByteOffset: GLintptr,
    srcData: AllowSharedBufferSource,
  ): void;
  bufferSubData(
    target: GLenum,
    dstByteOffset: GLintptr,
    srcData: ArrayBufferView,
    srcOffset: number,
    length?: GLuint,
  ): void;
  compressedTexImage2D(
    target: GLenum,
    level: GLint,
    internalformat: GLenum,
    width: GLsizei,
    height: GLsizei,
    border: GLint,
    imageSize: GLsizei,
    offset: GLintptr,
  ): void;
  compressedTexImage2D(
    target: GLenum,
    level: GLint,
    internalformat: GLenum,
    width: GLsizei,
    height: GLsizei,
    border: GLint,
    srcData: ArrayBufferView,
    srcOffset?: number,
    srcLengthOverride?: GLuint,
  ): void;
  compressedTexSubImage2D(
    target: GLenum,
    level: GLint,
    xoffset: GLint,
    yoffset: GLint,
    width: GLsizei,
    height: GLsizei,
    format: GLenum,
    imageSize: GLsizei,
    offset: GLintptr,
  ): void;
  compressedTexSubImage2D(
    target: GLenum,
    level: GLint,
    xoffset: GLint,
    yoffset: GLint,
    width: GLsizei,
    height: GLsizei,
    format: GLenum,
    srcData: ArrayBufferView,
    srcOffset?: number,
    srcLengthOverride?: GLuint,
  ): void;
  readPixels(
    x: GLint,
    y: GLint,
    width: GLsizei,
    height: GLsizei,
    format: GLenum,
    type: GLenum,
    dstData: ArrayBufferView | null,
  ): void;
  readPixels(
    x: GLint,
    y: GLint,
    width: GLsizei,
    height: GLsizei,
    format: GLenum,
    type: GLenum,
    offset: GLintptr,
  ): void;
  readPixels(
    x: GLint,
    y: GLint,
    width: GLsizei,
    height: GLsizei,
    format: GLenum,
    type: GLenum,
    dstData: ArrayBufferView,
    dstOffset: number,
  ): void;
  texImage2D(
    target: GLenum,
    level: GLint,
    internalformat: GLint,
    width: GLsizei,
    height: GLsizei,
    border: GLint,
    format: GLenum,
    type: GLenum,
    pixels: ArrayBufferView | null,
  ): void;
  texImage2D(
    target: GLenum,
    level: GLint,
    internalformat: GLint,
    format: GLenum,
    type: GLenum,
    source: TexImageSource,
  ): void;
  texImage2D(
    target: GLenum,
    level: GLint,
    internalformat: GLint,
    width: GLsizei,
    height: GLsizei,
    border: GLint,
    format: GLenum,
    type: GLenum,
    pboOffset: GLintptr,
  ): void;
  texImage2D(
    target: GLenum,
    level: GLint,
    internalformat: GLint,
    width: GLsizei,
    height: GLsizei,
    border: GLint,
    format: GLenum,
    type: GLenum,
    source: TexImageSource,
  ): void;
  texImage2D(
    target: GLenum,
    level: GLint,
    internalformat: GLint,
    width: GLsizei,
    height: GLsizei,
    border: GLint,
    format: GLenum,
    type: GLenum,
    srcData: ArrayBufferView,
    srcOffset: number,
  ): void;
  texSubImage2D(
    target: GLenum,
    level: GLint,
    xoffset: GLint,
    yoffset: GLint,
    width: GLsizei,
    height: GLsizei,
    format: GLenum,
    type: GLenum,
    pixels: ArrayBufferView | null,
  ): void;
  texSubImage2D(
    target: GLenum,
    level: GLint,
    xoffset: GLint,
    yoffset: GLint,
    format: GLenum,
    type: GLenum,
    source: TexImageSource,
  ): void;
  texSubImage2D(
    target: GLenum,
    level: GLint,
    xoffset: GLint,
    yoffset: GLint,
    width: GLsizei,
    height: GLsizei,
    format: GLenum,
    type: GLenum,
    pboOffset: GLintptr,
  ): void;
  texSubImage2D(
    target: GLenum,
    level: GLint,
    xoffset: GLint,
    yoffset: GLint,
    width: GLsizei,
    height: GLsizei,
    format: GLenum,
    type: GLenum,
    source: TexImageSource,
  ): void;
  texSubImage2D(
    target: GLenum,
    level: GLint,
    xoffset: GLint,
    yoffset: GLint,
    width: GLsizei,
    height: GLsizei,
    format: GLenum,
    type: GLenum,
    srcData: ArrayBufferView,
    srcOffset: number,
  ): void;
  uniform1fv(
    location: WebGLUniformLocation | null,
    data: Float32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  uniform1iv(
    location: WebGLUniformLocation | null,
    data: Int32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  uniform2fv(
    location: WebGLUniformLocation | null,
    data: Float32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  uniform2iv(
    location: WebGLUniformLocation | null,
    data: Int32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  uniform3fv(
    location: WebGLUniformLocation | null,
    data: Float32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  uniform3iv(
    location: WebGLUniformLocation | null,
    data: Int32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  uniform4fv(
    location: WebGLUniformLocation | null,
    data: Float32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  uniform4iv(
    location: WebGLUniformLocation | null,
    data: Int32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  uniformMatrix2fv(
    location: WebGLUniformLocation | null,
    transpose: GLboolean,
    data: Float32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  uniformMatrix3fv(
    location: WebGLUniformLocation | null,
    transpose: GLboolean,
    data: Float32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  uniformMatrix4fv(
    location: WebGLUniformLocation | null,
    transpose: GLboolean,
    data: Float32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
}

/* mixin */ declare class mixin$WebGLRenderingContextBase {
  +canvas: HTMLCanvasElement | OffscreenCanvas;
  drawingBufferColorSpace: PredefinedColorSpace;
  +drawingBufferFormat: GLenum;
  +drawingBufferHeight: GLsizei;
  +drawingBufferWidth: GLsizei;
  unpackColorSpace: PredefinedColorSpace;

  activeTexture(texture: GLenum): void;
  attachShader(program: WebGLProgram, shader: WebGLShader): void;
  bindAttribLocation(program: WebGLProgram, index: GLuint, name: string): void;
  bindBuffer(target: GLenum, buffer: WebGLBuffer | null): void;
  bindFramebuffer(target: GLenum, framebuffer: WebGLFramebuffer | null): void;
  bindRenderbuffer(
    target: GLenum,
    renderbuffer: WebGLRenderbuffer | null,
  ): void;
  bindTexture(target: GLenum, texture: WebGLTexture | null): void;
  blendColor(
    red: GLclampf,
    green: GLclampf,
    blue: GLclampf,
    alpha: GLclampf,
  ): void;
  blendEquation(mode: GLenum): void;
  blendEquationSeparate(modeRGB: GLenum, modeAlpha: GLenum): void;
  blendFunc(sfactor: GLenum, dfactor: GLenum): void;
  blendFuncSeparate(
    srcRGB: GLenum,
    dstRGB: GLenum,
    srcAlpha: GLenum,
    dstAlpha: GLenum,
  ): void;
  checkFramebufferStatus(target: GLenum): GLenum;
  clear(mask: GLbitfield): void;
  clearColor(
    red: GLclampf,
    green: GLclampf,
    blue: GLclampf,
    alpha: GLclampf,
  ): void;
  clearDepth(depth: GLclampf): void;
  clearStencil(s: GLint): void;
  colorMask(
    red: GLboolean,
    green: GLboolean,
    blue: GLboolean,
    alpha: GLboolean,
  ): void;
  compileShader(shader: WebGLShader): void;
  copyTexImage2D(
    target: GLenum,
    level: GLint,
    internalformat: GLenum,
    x: GLint,
    y: GLint,
    width: GLsizei,
    height: GLsizei,
    border: GLint,
  ): void;
  copyTexSubImage2D(
    target: GLenum,
    level: GLint,
    xoffset: GLint,
    yoffset: GLint,
    x: GLint,
    y: GLint,
    width: GLsizei,
    height: GLsizei,
  ): void;
  createBuffer(): WebGLBuffer;
  createFramebuffer(): WebGLFramebuffer;
  createProgram(): WebGLProgram;
  createRenderbuffer(): WebGLRenderbuffer;
  createShader(type: GLenum): WebGLShader | null;
  createTexture(): WebGLTexture;
  cullFace(mode: GLenum): void;
  deleteBuffer(buffer: WebGLBuffer | null): void;
  deleteFramebuffer(framebuffer: WebGLFramebuffer | null): void;
  deleteProgram(program: WebGLProgram | null): void;
  deleteRenderbuffer(renderbuffer: WebGLRenderbuffer | null): void;
  deleteShader(shader: WebGLShader | null): void;
  deleteTexture(texture: WebGLTexture | null): void;
  depthFunc(func: GLenum): void;
  depthMask(flag: GLboolean): void;
  depthRange(zNear: GLclampf, zFar: GLclampf): void;
  detachShader(program: WebGLProgram, shader: WebGLShader): void;
  disable(cap: GLenum): void;
  disableVertexAttribArray(index: GLuint): void;
  drawArrays(mode: GLenum, first: GLint, count: GLsizei): void;
  drawElements(
    mode: GLenum,
    count: GLsizei,
    type: GLenum,
    offset: GLintptr,
  ): void;
  drawingBufferStorage(
    sizedFormat: GLenum,
    width: number,
    height: number,
  ): void;
  enable(cap: GLenum): void;
  enableVertexAttribArray(index: GLuint): void;
  finish(): void;
  flush(): void;
  framebufferRenderbuffer(
    target: GLenum,
    attachment: GLenum,
    renderbuffertarget: GLenum,
    renderbuffer: WebGLRenderbuffer | null,
  ): void;
  framebufferTexture2D(
    target: GLenum,
    attachment: GLenum,
    textarget: GLenum,
    texture: WebGLTexture | null,
    level: GLint,
  ): void;
  frontFace(mode: GLenum): void;
  generateMipmap(target: GLenum): void;
  getActiveAttrib(program: WebGLProgram, index: GLuint): WebGLActiveInfo | null;
  getActiveUniform(
    program: WebGLProgram,
    index: GLuint,
  ): WebGLActiveInfo | null;
  getAttachedShaders(program: WebGLProgram): Array<WebGLShader> | null;
  getAttribLocation(program: WebGLProgram, name: string): GLint;
  getBufferParameter(target: GLenum, pname: GLenum): any;
  getContextAttributes(): WebGLContextAttributes | null;
  getError(): GLenum;
  getExtension(name: string): Object | null;
  getFramebufferAttachmentParameter(
    target: GLenum,
    attachment: GLenum,
    pname: GLenum,
  ): any;
  getParameter(pname: GLenum): any;
  getProgramInfoLog(program: WebGLProgram): string | null;
  getProgramParameter(program: WebGLProgram, pname: GLenum): any;
  getRenderbufferParameter(target: GLenum, pname: GLenum): any;
  getShaderInfoLog(shader: WebGLShader): string | null;
  getShaderParameter(shader: WebGLShader, pname: GLenum): any;
  getShaderPrecisionFormat(
    shadertype: GLenum,
    precisiontype: GLenum,
  ): WebGLShaderPrecisionFormat | null;
  getShaderSource(shader: WebGLShader): string | null;
  getSupportedExtensions(): Array<string> | null;
  getTexParameter(target: GLenum, pname: GLenum): any;
  getUniform(program: WebGLProgram, location: WebGLUniformLocation): any;
  getUniformLocation(
    program: WebGLProgram,
    name: string,
  ): WebGLUniformLocation | null;
  getVertexAttrib(index: GLuint, pname: GLenum): any;
  getVertexAttribOffset(index: GLuint, pname: GLenum): GLintptr;
  hint(target: GLenum, mode: GLenum): void;
  isBuffer(buffer: WebGLBuffer | null): GLboolean;
  isContextLost(): boolean;
  isEnabled(cap: GLenum): GLboolean;
  isFramebuffer(framebuffer: WebGLFramebuffer | null): GLboolean;
  isProgram(program: WebGLProgram | null): GLboolean;
  isRenderbuffer(renderbuffer: WebGLRenderbuffer | null): GLboolean;
  isShader(shader: WebGLShader | null): GLboolean;
  isTexture(texture: WebGLTexture | null): GLboolean;
  lineWidth(width: GLfloat): void;
  linkProgram(program: WebGLProgram): void;
  pixelStorei(pname: GLenum, param: GLint): void;
  polygonOffset(factor: GLfloat, units: GLfloat): void;
  renderbufferStorage(
    target: GLenum,
    internalformat: GLenum,
    width: GLsizei,
    height: GLsizei,
  ): void;
  sampleCoverage(value: GLclampf, invert: GLboolean): void;
  scissor(x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
  shaderSource(shader: WebGLShader, source: string): void;
  stencilFunc(func: GLenum, ref: GLint, mask: GLuint): void;
  stencilFuncSeparate(
    face: GLenum,
    func: GLenum,
    ref: GLint,
    mask: GLuint,
  ): void;
  stencilMask(mask: GLuint): void;
  stencilMaskSeparate(face: GLenum, mask: GLuint): void;
  stencilOp(fail: GLenum, zfail: GLenum, zpass: GLenum): void;
  stencilOpSeparate(
    face: GLenum,
    fail: GLenum,
    zfail: GLenum,
    zpass: GLenum,
  ): void;
  texParameterf(target: GLenum, pname: GLenum, param: GLfloat): void;
  texParameteri(target: GLenum, pname: GLenum, param: GLint): void;
  uniform1f(location: WebGLUniformLocation | null, x: GLfloat): void;
  uniform1i(location: WebGLUniformLocation | null, x: GLint): void;
  uniform2f(
    location: WebGLUniformLocation | null,
    x: GLfloat,
    y: GLfloat,
  ): void;
  uniform2i(location: WebGLUniformLocation | null, x: GLint, y: GLint): void;
  uniform3f(
    location: WebGLUniformLocation | null,
    x: GLfloat,
    y: GLfloat,
    z: GLfloat,
  ): void;
  uniform3i(
    location: WebGLUniformLocation | null,
    x: GLint,
    y: GLint,
    z: GLint,
  ): void;
  uniform4f(
    location: WebGLUniformLocation | null,
    x: GLfloat,
    y: GLfloat,
    z: GLfloat,
    w: GLfloat,
  ): void;
  uniform4i(
    location: WebGLUniformLocation | null,
    x: GLint,
    y: GLint,
    z: GLint,
    w: GLint,
  ): void;
  useProgram(program: WebGLProgram | null): void;
  validateProgram(program: WebGLProgram): void;
  vertexAttrib1f(index: GLuint, x: GLfloat): void;
  vertexAttrib1fv(index: GLuint, values: Float32List): void;
  vertexAttrib2f(index: GLuint, x: GLfloat, y: GLfloat): void;
  vertexAttrib2fv(index: GLuint, values: Float32List): void;
  vertexAttrib3f(index: GLuint, x: GLfloat, y: GLfloat, z: GLfloat): void;
  vertexAttrib3fv(index: GLuint, values: Float32List): void;
  vertexAttrib4f(
    index: GLuint,
    x: GLfloat,
    y: GLfloat,
    z: GLfloat,
    w: GLfloat,
  ): void;
  vertexAttrib4fv(index: GLuint, values: Float32List): void;
  vertexAttribPointer(
    index: GLuint,
    size: GLint,
    type: GLenum,
    normalized: GLboolean,
    stride: GLsizei,
    offset: GLintptr,
  ): void;
  viewport(x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
}

/* mixin */ declare class mixin$WebGLRenderingContextOverloads {
  bufferData(target: GLenum, size: GLsizeiptr, usage: GLenum): void;
  bufferData(
    target: GLenum,
    data: AllowSharedBufferSource | null,
    usage: GLenum,
  ): void;
  bufferSubData(
    target: GLenum,
    offset: GLintptr,
    data: AllowSharedBufferSource,
  ): void;
  compressedTexImage2D(
    target: GLenum,
    level: GLint,
    internalformat: GLenum,
    width: GLsizei,
    height: GLsizei,
    border: GLint,
    data: ArrayBufferView,
  ): void;
  compressedTexSubImage2D(
    target: GLenum,
    level: GLint,
    xoffset: GLint,
    yoffset: GLint,
    width: GLsizei,
    height: GLsizei,
    format: GLenum,
    data: ArrayBufferView,
  ): void;
  readPixels(
    x: GLint,
    y: GLint,
    width: GLsizei,
    height: GLsizei,
    format: GLenum,
    type: GLenum,
    pixels: ArrayBufferView | null,
  ): void;
  texImage2D(
    target: GLenum,
    level: GLint,
    internalformat: GLint,
    width: GLsizei,
    height: GLsizei,
    border: GLint,
    format: GLenum,
    type: GLenum,
    pixels: ArrayBufferView | null,
  ): void;
  texImage2D(
    target: GLenum,
    level: GLint,
    internalformat: GLint,
    format: GLenum,
    type: GLenum,
    source: TexImageSource,
  ): void;
  texSubImage2D(
    target: GLenum,
    level: GLint,
    xoffset: GLint,
    yoffset: GLint,
    width: GLsizei,
    height: GLsizei,
    format: GLenum,
    type: GLenum,
    pixels: ArrayBufferView | null,
  ): void;
  texSubImage2D(
    target: GLenum,
    level: GLint,
    xoffset: GLint,
    yoffset: GLint,
    format: GLenum,
    type: GLenum,
    source: TexImageSource,
  ): void;
  uniform1fv(location: WebGLUniformLocation | null, v: Float32List): void;
  uniform1iv(location: WebGLUniformLocation | null, v: Int32List): void;
  uniform2fv(location: WebGLUniformLocation | null, v: Float32List): void;
  uniform2iv(location: WebGLUniformLocation | null, v: Int32List): void;
  uniform3fv(location: WebGLUniformLocation | null, v: Float32List): void;
  uniform3iv(location: WebGLUniformLocation | null, v: Int32List): void;
  uniform4fv(location: WebGLUniformLocation | null, v: Float32List): void;
  uniform4iv(location: WebGLUniformLocation | null, v: Int32List): void;
  uniformMatrix2fv(
    location: WebGLUniformLocation | null,
    transpose: GLboolean,
    value: Float32List,
  ): void;
  uniformMatrix3fv(
    location: WebGLUniformLocation | null,
    transpose: GLboolean,
    value: Float32List,
  ): void;
  uniformMatrix4fv(
    location: WebGLUniformLocation | null,
    transpose: GLboolean,
    value: Float32List,
  ): void;
}

/* mixin */ declare class mixin$WindowEventHandlers {
  onafterprint: EventHandler;
  onbeforeprint: EventHandler;
  onbeforeunload: OnBeforeUnloadEventHandler;
  onhashchange: EventHandler;
  onlanguagechange: EventHandler;
  onmessage: EventHandler;
  onmessageerror: EventHandler;
  onoffline: EventHandler;
  ononline: EventHandler;
  onpagehide: EventHandler;
  onpagereveal: EventHandler;
  onpageshow: EventHandler;
  onpageswap: EventHandler;
  onpopstate: EventHandler;
  onrejectionhandled: EventHandler;
  onstorage: EventHandler;
  onunhandledrejection: EventHandler;
  onunload: EventHandler;
}

/* mixin */ declare class mixin$WindowLocalStorage {
  +localStorage: Storage;
}

/* mixin */ declare class mixin$WindowOrWorkerGlobalScope {
  +crossOriginIsolated: boolean;
  +isSecureContext: boolean;
  +origin: string;
  +performance: Performance;
  +trustedTypes: TrustedTypePolicyFactory;

  atob(data: string): string;
  btoa(data: string): string;
  clearInterval(id?: number): void;
  clearTimeout(id?: number): void;
  createImageBitmap(
    image: ImageBitmapSource,
    options?: ImageBitmapOptions,
  ): ImageBitmap;
  createImageBitmap(
    image: ImageBitmapSource,
    sx: number,
    sy: number,
    sw: number,
    sh: number,
    options?: ImageBitmapOptions,
  ): ImageBitmap;
  fetch(input: RequestInfo, init?: RequestInit): Response;
  queueMicrotask(callback: VoidFunction): void;
  reportError(e: any): void;
  setInterval(handler: TimerHandler, timeout?: number, arguments_: any): number;
  setTimeout(handler: TimerHandler, timeout?: number, arguments_: any): number;
  structuredClone(value: any, options?: StructuredSerializeOptions): any;
}

/* mixin */ declare class mixin$WindowSessionStorage {
  +sessionStorage: Storage;
}

/* mixin */ declare class mixin$XPathEvaluatorBase {
  createExpression(
    expression: string,
    resolver?: XPathNSResolver | null,
  ): XPathExpression;
  createNSResolver(nodeResolver: Node): Node;
  evaluate(
    expression: string,
    contextNode: Node,
    resolver?: XPathNSResolver | null,
    type?: number,
    result?: XPathResult | null,
  ): XPathResult;
}

declare namespace CSS {
  declare function escape(ident: string): string;
}
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
