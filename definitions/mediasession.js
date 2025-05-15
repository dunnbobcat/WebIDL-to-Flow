type MediaSessionAction =
  | 'play'
  | 'pause'
  | 'seekbackward'
  | 'seekforward'
  | 'previoustrack'
  | 'nexttrack'
  | 'skipad'
  | 'stop'
  | 'seekto'
  | 'togglemicrophone'
  | 'togglecamera'
  | 'togglescreenshare'
  | 'hangup'
  | 'previousslide'
  | 'nextslide'
  | 'enterpictureinpicture'
  | 'voiceactivity';

type MediaSessionPlaybackState = 'none' | 'paused' | 'playing';

type ChapterInformationInit = {
  artwork: Array<MediaImage>,
  startTime: number,
  title: string,
};

type MediaImage = {
  sizes: string,
  src: string,
  type: string,
};

type MediaMetadataInit = {
  album: string,
  artist: string,
  artwork: Array<MediaImage>,
  chapterInfo: Array<ChapterInformationInit>,
  title: string,
};

type MediaPositionState = {
  duration: number,
  playbackRate: number,
  position: number,
};

type MediaSessionActionDetails = {
  action: MediaSessionAction,
  fastSeek: boolean,
  isActivating: boolean,
  seekOffset: number,
  seekTime: number,
};

type MediaSessionActionHandler = (details: MediaSessionActionDetails) => void;

declare class ChapterInformation {
  +artwork: $ReadOnlyArray<MediaImage>;
  +startTime: number;
  +title: string;
}

declare class MediaMetadata {
  album: string;
  artist: string;
  artwork: $ReadOnlyArray<Object>;
  +chapterInfo: $ReadOnlyArray<ChapterInformation>;
  title: string;

  constructor(init?: MediaMetadataInit): void;
}

declare class MediaSession {
  metadata: MediaMetadata | null;
  playbackState: MediaSessionPlaybackState;

  setActionHandler(
    action: MediaSessionAction,
    handler: MediaSessionActionHandler | null,
  ): void;
  setCameraActive(active: boolean): Promise<void>;
  setMicrophoneActive(active: boolean): Promise<void>;
  setPositionState(state?: MediaPositionState): void;
  setScreenshareActive(active: boolean): Promise<void>;
}

/* partial */ declare class Navigator {
  +mediaSession: MediaSession;
}
