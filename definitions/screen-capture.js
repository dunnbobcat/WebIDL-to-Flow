type CaptureStartFocusBehavior =
  | 'focus-capturing-application'
  | 'focus-captured-surface'
  | 'no-focus-change';

type CursorCaptureConstraint = 'never' | 'always' | 'motion';

type DisplayCaptureSurfaceType = 'monitor' | 'window' | 'browser';

type MonitorTypeSurfacesEnum = 'include' | 'exclude';

type SelfCapturePreferenceEnum = 'include' | 'exclude';

type SurfaceSwitchingPreferenceEnum = 'include' | 'exclude';

type SystemAudioPreferenceEnum = 'include' | 'exclude';

type DisplayMediaStreamOptions = {
  audio: boolean | MediaTrackConstraints,
  controller: CaptureController,
  monitorTypeSurfaces: MonitorTypeSurfacesEnum,
  selfBrowserSurface: SelfCapturePreferenceEnum,
  surfaceSwitching: SurfaceSwitchingPreferenceEnum,
  systemAudio: SystemAudioPreferenceEnum,
  video: boolean | MediaTrackConstraints,
};

/* partial */ type MediaTrackCapabilities = {
  cursor: Array<string>,
  displaySurface: string,
  logicalSurface: boolean,
};

/* partial */ type MediaTrackConstraintSet = {
  cursor: ConstrainDOMString,
  displaySurface: ConstrainDOMString,
  logicalSurface: ConstrainBoolean,
  restrictOwnAudio: ConstrainBoolean,
  suppressLocalAudioPlayback: ConstrainBoolean,
};

/* partial */ type MediaTrackSettings = {
  cursor: string,
  displaySurface: string,
  logicalSurface: boolean,
  restrictOwnAudio: boolean,
  screenPixelRatio: number,
  suppressLocalAudioPlayback: boolean,
};

/* partial */ type MediaTrackSupportedConstraints = {
  cursor: boolean,
  displaySurface: boolean,
  logicalSurface: boolean,
  restrictOwnAudio: boolean,
  suppressLocalAudioPlayback: boolean,
};

declare class CaptureController extends EventTarget {
  constructor(): void;

  setFocusBehavior(focusBehavior: CaptureStartFocusBehavior): void;
}

/* partial */ declare class MediaDevices {
  getDisplayMedia(options?: DisplayMediaStreamOptions): Promise<MediaStream>;
}
