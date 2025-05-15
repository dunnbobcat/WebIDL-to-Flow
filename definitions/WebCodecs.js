type ImageBufferSource = AllowSharedBufferSource | ReadableStream;

type AlphaOption = 'keep' | 'discard';

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

type CodecState = 'unconfigured' | 'configured' | 'closed';

type EncodedAudioChunkType = 'key' | 'delta';

type EncodedVideoChunkType = 'key' | 'delta';

type HardwareAcceleration =
  | 'no-preference'
  | 'prefer-hardware'
  | 'prefer-software';

type LatencyMode = 'quality' | 'realtime';

type VideoColorPrimaries =
  | 'bt709'
  | 'bt470bg'
  | 'smpte170m'
  | 'bt2020'
  | 'smpte432';

type VideoEncoderBitrateMode = 'constant' | 'variable' | 'quantizer';

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

type VideoTransferCharacteristics =
  | 'bt709'
  | 'smpte170m'
  | 'iec61966-2-1'
  | 'linear'
  | 'pq'
  | 'hlg';

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

type PlaneLayout = {
  offset: number,
  stride: number,
};

type SvcOutputMetadata = {
  temporalLayerId: number,
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

type AudioDataOutputCallback = (output: AudioData) => void;

type EncodedAudioChunkOutputCallback = (
  output: EncodedAudioChunk,
  metadata?: EncodedAudioChunkMetadata,
) => void;

type EncodedVideoChunkOutputCallback = (
  chunk: EncodedVideoChunk,
  metadata?: EncodedVideoChunkMetadata,
) => void;

type VideoFrameOutputCallback = (output: VideoFrame) => void;

type WebCodecsErrorCallback = (error: DOMException) => void;

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
