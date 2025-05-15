type MediaStreamTrackProcessorInit = {
  maxBufferSize: number,
  track: MediaStreamTrack,
};

declare class MediaStreamTrackProcessor {
  +readable: ReadableStream;

  constructor(init: MediaStreamTrackProcessorInit): void;
}

declare class VideoTrackGenerator {
  muted: boolean;
  +track: MediaStreamTrack;
  +writable: WritableStream;

  constructor(): void;
}
