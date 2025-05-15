type BitrateMode = 'constant' | 'variable';

type RecordingState = 'inactive' | 'recording' | 'paused';

type BlobEventInit = {
  data: Blob,
  timecode: number,
};

type MediaRecorderOptions = {
  audioBitrateMode: BitrateMode,
  audioBitsPerSecond: number,
  bitsPerSecond: number,
  mimeType: string,
  videoBitsPerSecond: number,
  videoKeyFrameIntervalCount: number,
  videoKeyFrameIntervalDuration: number,
};

declare class BlobEvent extends Event {
  +data: Blob;
  +timecode: number;

  constructor(type: string, eventInitDict: BlobEventInit): void;
}

declare class MediaRecorder extends EventTarget {
  +audioBitrateMode: BitrateMode;
  +audioBitsPerSecond: number;
  +mimeType: string;
  ondataavailable: EventHandler;
  onerror: EventHandler;
  onpause: EventHandler;
  onresume: EventHandler;
  onstart: EventHandler;
  onstop: EventHandler;
  +state: RecordingState;
  +stream: MediaStream;
  +videoBitsPerSecond: number;

  constructor(stream: MediaStream, options?: MediaRecorderOptions): void;

  static isTypeSupported(type: string): boolean;
  pause(): void;
  requestData(): void;
  resume(): void;
  start(timeslice?: number): void;
  stop(): void;
}
