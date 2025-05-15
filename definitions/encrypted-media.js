type MediaKeyMessageType =
  | 'license-request'
  | 'license-renewal'
  | 'license-release'
  | 'individualization-request';

type MediaKeySessionClosedReason =
  | 'internal-error'
  | 'closed-by-application'
  | 'release-acknowledged'
  | 'hardware-context-reset'
  | 'resource-evicted';

type MediaKeySessionType = 'temporary' | 'persistent-license';

type MediaKeysRequirement = 'required' | 'optional' | 'not-allowed';

type MediaKeyStatus =
  | 'usable'
  | 'expired'
  | 'released'
  | 'output-restricted'
  | 'output-downscaled'
  | 'usable-in-future'
  | 'status-pending'
  | 'internal-error';

type MediaEncryptedEventInit = {
  initData: ArrayBuffer | null,
  initDataType: string,
};

type MediaKeyMessageEventInit = {
  message: ArrayBuffer,
  messageType: MediaKeyMessageType,
};

type MediaKeysPolicy = {
  minHdcpVersion: string,
};

type MediaKeySystemConfiguration = {
  audioCapabilities: Array<MediaKeySystemMediaCapability>,
  distinctiveIdentifier: MediaKeysRequirement,
  initDataTypes: Array<string>,
  label: string,
  persistentState: MediaKeysRequirement,
  sessionTypes: Array<string>,
  videoCapabilities: Array<MediaKeySystemMediaCapability>,
};

type MediaKeySystemMediaCapability = {
  contentType: string,
  encryptionScheme: string | null,
  robustness: string,
};

/* partial */ declare class HTMLMediaElement {
  +mediaKeys: MediaKeys | null;
  onencrypted: EventHandler;
  onwaitingforkey: EventHandler;

  setMediaKeys(mediaKeys: MediaKeys | null): Promise<void>;
}

declare class MediaEncryptedEvent extends Event {
  +initData: ArrayBuffer | null;
  +initDataType: string;

  constructor(type: string, eventInitDict?: MediaEncryptedEventInit): void;
}

declare class MediaKeyMessageEvent extends Event {
  +message: ArrayBuffer;
  +messageType: MediaKeyMessageType;

  constructor(type: string, eventInitDict: MediaKeyMessageEventInit): void;
}

declare class MediaKeys {
  createSession(sessionType?: MediaKeySessionType): MediaKeySession;
  getStatusForPolicy(policy?: MediaKeysPolicy): Promise<MediaKeyStatus>;
  setServerCertificate(serverCertificate: BufferSource): Promise<boolean>;
}

declare class MediaKeySession extends EventTarget {
  +closed: Promise<MediaKeySessionClosedReason>;
  +expiration: number;
  +keyStatuses: MediaKeyStatusMap;
  onkeystatuseschange: EventHandler;
  onmessage: EventHandler;
  +sessionId: string;

  close(): Promise<void>;
  generateRequest(initDataType: string, initData: BufferSource): Promise<void>;
  load(sessionId: string): Promise<boolean>;
  remove(): Promise<void>;
  update(response: BufferSource): Promise<void>;
}

declare class MediaKeyStatusMap {
  +size: number;

  @@iterator(): Iterator<BufferSource, MediaKeyStatus>;

  get(keyId: BufferSource): MediaKeyStatus | void;
  has(keyId: BufferSource): boolean;
}

declare class MediaKeySystemAccess {
  +keySystem: string;

  createMediaKeys(): Promise<MediaKeys>;
  getConfiguration(): MediaKeySystemConfiguration;
}

/* partial */ declare class Navigator {
  requestMediaKeySystemAccess(
    keySystem: string,
    supportedConfigurations: Array<MediaKeySystemConfiguration>,
  ): Promise<MediaKeySystemAccess>;
}
