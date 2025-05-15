type PushMessageDataInit = BufferSource | string;

type PushEncryptionKeyName = 'p256dh' | 'auth';

type PushEventInit = {
  data: PushMessageDataInit,
};

type PushPermissionDescriptor = {
  userVisibleOnly: boolean,
};

type PushSubscriptionChangeEventInit = {
  newSubscription: PushSubscription,
  oldSubscription: PushSubscription,
};

type PushSubscriptionJSON = {
  endpoint: string,
  expirationTime: EpochTimeStamp | null,
  keys: {[string]: string},
};

type PushSubscriptionOptionsInit = {
  applicationServerKey: BufferSource | string | null,
  userVisibleOnly: boolean,
};

declare class PushEvent extends ExtendableEvent {
  +data: PushMessageData | null;

  constructor(type: string, eventInitDict?: PushEventInit): void;
}

declare class PushManager {
  +supportedContentEncodings: $ReadOnlyArray<string>;

  getSubscription(): Promise<PushSubscription | null>;
  permissionState(
    options?: PushSubscriptionOptionsInit,
  ): Promise<PermissionState>;
  subscribe(options?: PushSubscriptionOptionsInit): Promise<PushSubscription>;
}

declare class PushMessageData {
  arrayBuffer(): ArrayBuffer;
  blob(): Blob;
  bytes(): Uint8Array;
  json(): any;
  text(): string;
}

declare class PushSubscription {
  +endpoint: string;
  +expirationTime: EpochTimeStamp | null;
  +options: PushSubscriptionOptions;

  getKey(name: PushEncryptionKeyName): ArrayBuffer | null;
  toJSON(): PushSubscriptionJSON;
  unsubscribe(): Promise<boolean>;
}

declare class PushSubscriptionChangeEvent extends ExtendableEvent {
  +newSubscription: PushSubscription | null;
  +oldSubscription: PushSubscription | null;

  constructor(
    type: string,
    eventInitDict?: PushSubscriptionChangeEventInit,
  ): void;
}

declare class PushSubscriptionOptions {
  +applicationServerKey: ArrayBuffer | null;
  +userVisibleOnly: boolean;
}

/* partial */ declare class ServiceWorkerGlobalScope {
  onpush: EventHandler;
  onpushsubscriptionchange: EventHandler;
}

/* partial */ declare class ServiceWorkerRegistration {
  +pushManager: PushManager;
}
