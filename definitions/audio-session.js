type AudioSessionState = 'inactive' | 'active' | 'interrupted';

type AudioSessionType =
  | 'auto'
  | 'playback'
  | 'transient'
  | 'transient-solo'
  | 'ambient'
  | 'play-and-record';

declare class AudioSession extends EventTarget {
  onstatechange: EventHandler;
  +state: AudioSessionState;
  type: AudioSessionType;
}

/* partial */ declare class Navigator {
  +audioSession: AudioSession;
}
