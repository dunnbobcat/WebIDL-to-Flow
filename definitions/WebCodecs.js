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
  format: AudioSampleFormat,
  frameCount: number,
  frameOffset: number,
  planeIndex: number,
};

type AudioDataInit = {
  data: BufferSource,
  format: AudioSampleFormat,
  numberOfChannels: number,
  numberOfFrames: number,
  sampleRate: number,
  timestamp: number,
  transfer: Array<ArrayBuffer>,
};

type AudioDecoderConfig = {
  codec: string,
  description: AllowSharedBufferSource,
  numberOfChannels: number,
  sampleRate: number,
};

type AudioDecoderInit = {
  error: WebCodecsErrorCallback,
  output: AudioDataOutputCallback,
};

type AudioDecoderSupport = {
  config: AudioDecoderConfig,
  supported: boolean,
};

type AudioEncoderConfig = {
  bitrate: number,
  bitrateMode: BitrateMode,
  codec: string,
  numberOfChannels: number,
  sampleRate: number,
};

type AudioEncoderInit = {
  error: WebCodecsErrorCallback,
  output: EncodedAudioChunkOutputCallback,
};

type AudioEncoderSupport = {
  config: AudioEncoderConfig,
  supported: boolean,
};

type EncodedAudioChunkInit = {
  data: AllowSharedBufferSource,
  duration: number,
  timestamp: number,
  transfer: Array<ArrayBuffer>,
  type: EncodedAudioChunkType,
};

type EncodedAudioChunkMetadata = {
  decoderConfig: AudioDecoderConfig,
};

type EncodedVideoChunkInit = {
  data: AllowSharedBufferSource,
  duration: number,
  timestamp: number,
  transfer: Array<ArrayBuffer>,
  type: EncodedVideoChunkType,
};

type EncodedVideoChunkMetadata = {
  alphaSideData: BufferSource,
  decoderConfig: VideoDecoderConfig,
  svc: SvcOutputMetadata,
};

type ImageDecodeOptions = {
  completeFramesOnly: boolean,
  frameIndex: number,
};

type ImageDecodeResult = {
  complete: boolean,
  image: VideoFrame,
};

type ImageDecoderInit = {
  colorSpaceConversion: ColorSpaceConversion,
  data: ImageBufferSource,
  desiredHeight: number,
  desiredWidth: number,
  preferAnimation: boolean,
  transfer: Array<ArrayBuffer>,
  type: string,
};

type PlaneLayout = {
  offset: number,
  stride: number,
};

type SvcOutputMetadata = {
  temporalLayerId: number,
};

type VideoColorSpaceInit = {
  fullRange: boolean | null,
  matrix: VideoMatrixCoefficients | null,
  primaries: VideoColorPrimaries | null,
  transfer: VideoTransferCharacteristics | null,
};

type VideoDecoderConfig = {
  codec: string,
  codedHeight: number,
  codedWidth: number,
  colorSpace: VideoColorSpaceInit,
  description: AllowSharedBufferSource,
  displayAspectHeight: number,
  displayAspectWidth: number,
  flip: boolean,
  hardwareAcceleration: HardwareAcceleration,
  optimizeForLatency: boolean,
  rotation: number,
};

type VideoDecoderInit = {
  error: WebCodecsErrorCallback,
  output: VideoFrameOutputCallback,
};

type VideoDecoderSupport = {
  config: VideoDecoderConfig,
  supported: boolean,
};

type VideoEncoderConfig = {
  alpha: AlphaOption,
  bitrate: number,
  bitrateMode: VideoEncoderBitrateMode,
  codec: string,
  contentHint: string,
  displayHeight: number,
  displayWidth: number,
  framerate: number,
  hardwareAcceleration: HardwareAcceleration,
  height: number,
  latencyMode: LatencyMode,
  scalabilityMode: string,
  width: number,
};

type VideoEncoderEncodeOptions = {
  keyFrame: boolean,
};

type VideoEncoderInit = {
  error: WebCodecsErrorCallback,
  output: EncodedVideoChunkOutputCallback,
};

type VideoEncoderSupport = {
  config: VideoEncoderConfig,
  supported: boolean,
};

type VideoFrameBufferInit = {
  codedHeight: number,
  codedWidth: number,
  colorSpace: VideoColorSpaceInit,
  displayHeight: number,
  displayWidth: number,
  duration: number,
  flip: boolean,
  format: VideoPixelFormat,
  layout: Array<PlaneLayout>,
  metadata: VideoFrameMetadata,
  rotation: number,
  timestamp: number,
  transfer: Array<ArrayBuffer>,
  visibleRect: DOMRectInit,
};

type VideoFrameCopyToOptions = {
  colorSpace: PredefinedColorSpace,
  format: VideoPixelFormat,
  layout: Array<PlaneLayout>,
  rect: DOMRectInit,
};

type VideoFrameInit = {
  alpha: AlphaOption,
  displayHeight: number,
  displayWidth: number,
  duration: number,
  flip: boolean,
  metadata: VideoFrameMetadata,
  rotation: number,
  timestamp: number,
  visibleRect: DOMRectInit,
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

  static isConfigSupported(
    config: AudioDecoderConfig,
  ): Promise<AudioDecoderSupport>;
  close(): void;
  configure(config: AudioDecoderConfig): void;
  decode(chunk: EncodedAudioChunk): void;
  flush(): Promise<void>;
  reset(): void;
}

declare class AudioEncoder extends EventTarget {
  +encodeQueueSize: number;
  ondequeue: EventHandler;
  +state: CodecState;

  constructor(init: AudioEncoderInit): void;

  static isConfigSupported(
    config: AudioEncoderConfig,
  ): Promise<AudioEncoderSupport>;
  close(): void;
  configure(config: AudioEncoderConfig): void;
  encode(data: AudioData): void;
  flush(): Promise<void>;
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
  +completed: Promise<void>;
  +tracks: ImageTrackList;
  +type: string;

  constructor(init: ImageDecoderInit): void;

  static isTypeSupported(type: string): Promise<boolean>;
  close(): void;
  decode(options?: ImageDecodeOptions): Promise<ImageDecodeResult>;
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
  +ready: Promise<void>;
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

  static isConfigSupported(
    config: VideoDecoderConfig,
  ): Promise<VideoDecoderSupport>;
  close(): void;
  configure(config: VideoDecoderConfig): void;
  decode(chunk: EncodedVideoChunk): void;
  flush(): Promise<void>;
  reset(): void;
}

declare class VideoEncoder extends EventTarget {
  +encodeQueueSize: number;
  ondequeue: EventHandler;
  +state: CodecState;

  constructor(init: VideoEncoderInit): void;

  static isConfigSupported(
    config: VideoEncoderConfig,
  ): Promise<VideoEncoderSupport>;
  close(): void;
  configure(config: VideoEncoderConfig): void;
  encode(frame: VideoFrame, options?: VideoEncoderEncodeOptions): void;
  flush(): Promise<void>;
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
  ): Promise<Array<PlaneLayout>>;
  metadata(): VideoFrameMetadata;
}
