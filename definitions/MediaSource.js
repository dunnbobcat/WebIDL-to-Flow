type AppendMode = 'segments' | 'sequence';

type EndOfStreamError = 'network' | 'decode';

type ReadyState = 'closed' | 'open' | 'ended';

type BufferedChangeEventInit = {
  addedRanges: TimeRanges,
  removedRanges: TimeRanges,
};

declare class BufferedChangeEvent extends Event {
  +addedRanges: TimeRanges;
  +removedRanges: TimeRanges;

  constructor(type: string, eventInitDict?: BufferedChangeEventInit): void;
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
