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

type DeviceChangeEventInit = {
  devices: Array<MediaDeviceInfo>,
};

type DoubleRange = {
  max: number,
  min: number,
};

type MediaStreamConstraints = {
  audio: boolean | MediaTrackConstraints,
  video: boolean | MediaTrackConstraints,
};

type MediaStreamTrackEventInit = {
  track: MediaStreamTrack,
};

type MediaTrackCapabilities = {
  aspectRatio: DoubleRange,
  autoGainControl: Array<boolean>,
  backgroundBlur: Array<boolean>,
  channelCount: ULongRange,
  deviceId: string,
  echoCancellation: Array<boolean>,
  facingMode: Array<string>,
  frameRate: DoubleRange,
  groupId: string,
  height: ULongRange,
  latency: DoubleRange,
  noiseSuppression: Array<boolean>,
  resizeMode: Array<string>,
  sampleRate: ULongRange,
  sampleSize: ULongRange,
  width: ULongRange,
};

type MediaTrackConstraints = {
  advanced: Array<MediaTrackConstraintSet>,
  aspectRatio: ConstrainDouble,
  autoGainControl: ConstrainBoolean,
  backgroundBlur: ConstrainBoolean,
  channelCount: ConstrainULong,
  deviceId: ConstrainDOMString,
  echoCancellation: ConstrainBoolean,
  facingMode: ConstrainDOMString,
  frameRate: ConstrainDouble,
  groupId: ConstrainDOMString,
  height: ConstrainULong,
  latency: ConstrainDouble,
  noiseSuppression: ConstrainBoolean,
  resizeMode: ConstrainDOMString,
  sampleRate: ConstrainULong,
  sampleSize: ConstrainULong,
  width: ConstrainULong,
};

type MediaTrackConstraintSet = {
  aspectRatio: ConstrainDouble,
  autoGainControl: ConstrainBoolean,
  backgroundBlur: ConstrainBoolean,
  channelCount: ConstrainULong,
  deviceId: ConstrainDOMString,
  echoCancellation: ConstrainBoolean,
  facingMode: ConstrainDOMString,
  frameRate: ConstrainDouble,
  groupId: ConstrainDOMString,
  height: ConstrainULong,
  latency: ConstrainDouble,
  noiseSuppression: ConstrainBoolean,
  resizeMode: ConstrainDOMString,
  sampleRate: ConstrainULong,
  sampleSize: ConstrainULong,
  width: ConstrainULong,
};

type MediaTrackSettings = {
  aspectRatio: number,
  autoGainControl: boolean,
  backgroundBlur: boolean,
  channelCount: number,
  deviceId: string,
  echoCancellation: boolean,
  facingMode: string,
  frameRate: number,
  groupId: string,
  height: number,
  latency: number,
  noiseSuppression: boolean,
  resizeMode: string,
  sampleRate: number,
  sampleSize: number,
  width: number,
};

type MediaTrackSupportedConstraints = {
  aspectRatio: boolean,
  autoGainControl: boolean,
  backgroundBlur: boolean,
  channelCount: boolean,
  deviceId: boolean,
  echoCancellation: boolean,
  facingMode: boolean,
  frameRate: boolean,
  groupId: boolean,
  height: boolean,
  latency: boolean,
  noiseSuppression: boolean,
  resizeMode: boolean,
  sampleRate: boolean,
  sampleSize: boolean,
  width: boolean,
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
