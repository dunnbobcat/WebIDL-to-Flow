type ConstrainBoolean = boolean | ConstrainBooleanParameters;

type ConstrainDOMString = string | Array<string> | ConstrainDOMStringParameters;

type ConstrainDouble = number | ConstrainDoubleRange;

type ConstrainULong = number | ConstrainULongRange;

type MediaDeviceKind = 'audioinput' | 'audiooutput' | 'videoinput';

type MediaStreamTrackState = 'live' | 'ended';

type VideoFacingModeEnum = 'user' | 'environment' | 'left' | 'right';

type VideoResizeModeEnum = 'none' | 'crop-and-scale';

type CameraDevicePermissionDescriptor = {
  panTiltZoom: boolean,
};

type Capabilities = {};

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
};

type Constraints = {
  advanced: Array<ConstraintSet>,
};

type ConstraintSet = {};

type ConstrainULongRange = {
  exact: number,
  ideal: number,
};

type DeviceChangeEventInit = {
  devices: Array<MediaDeviceInfo>,
};

type DoubleRange = {
  max: number,
  min: number,
};

type MediaStreamConstraints = {
  video: boolean | MediaTrackConstraints,
  audio: boolean | MediaTrackConstraints,
};

type MediaStreamTrackEventInit = {
  track: MediaStreamTrack,
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

type Settings = {};

type ULongRange = {
  max: number,
  min: number,
};

type NavigatorUserMediaErrorCallback = (error: DOMException) => void;

type NavigatorUserMediaSuccessCallback = (stream: MediaStream) => void;

declare class ConstrainablePattern {
  applyConstraints(constraints?: Constraints): void;
  getCapabilities(): Capabilities;
  getConstraints(): Constraints;
  getSettings(): Settings;
}

declare class DeviceChangeEvent extends Event {
  +devices: MediaDeviceInfo;
  +userInsertedDevices: MediaDeviceInfo;

  constructor(type: string, eventInitDict?: DeviceChangeEventInit): void;
}

declare class InputDeviceInfo extends MediaDeviceInfo {
  getCapabilities(): MediaTrackCapabilities;
}

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

declare class OverconstrainedError extends DOMException {
  +constraint: string;

  constructor(constraint: string, message?: string): void;
}
