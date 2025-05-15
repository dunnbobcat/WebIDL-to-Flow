type CryptoKeyID = SmallCryptoKeyID | bigint;

type RTCRtpTransform = SFrameTransform | RTCRtpScriptTransform;

type SmallCryptoKeyID = number;

type RTCEncodedVideoFrameType = 'empty' | 'key' | 'delta';

type SFrameTransformErrorEventType = 'authentication' | 'keyID' | 'syntax';

type SFrameTransformRole = 'encrypt' | 'decrypt';

type RTCEncodedAudioFrameMetadata = {
  captureTime: number,
  contributingSources: Array<number>,
  mimeType: string,
  payloadType: number,
  receiveTime: number,
  rtpTimestamp: number,
  senderCaptureTimeOffset: number,
  sequenceNumber: number,
  synchronizationSource: number,
};

type RTCEncodedAudioFrameOptions = {
  metadata: RTCEncodedAudioFrameMetadata,
};

type RTCEncodedVideoFrameMetadata = {
  captureTime: number,
  contributingSources: Array<number>,
  dependencies: Array<number>,
  frameId: number,
  height: number,
  mimeType: string,
  payloadType: number,
  receiveTime: number,
  rtpTimestamp: number,
  senderCaptureTimeOffset: number,
  spatialIndex: number,
  synchronizationSource: number,
  temporalIndex: number,
  timestamp: number,
  width: number,
};

type RTCEncodedVideoFrameOptions = {
  metadata: RTCEncodedVideoFrameMetadata,
};

type SFrameTransformErrorEventInit = {
  errorType: SFrameTransformErrorEventType,
  frame: any,
  keyID: CryptoKeyID | null,
};

type SFrameTransformOptions = {
  role: SFrameTransformRole,
};

/* partial */ declare class DedicatedWorkerGlobalScope {
  onrtctransform: EventHandler;
}

declare class KeyFrameRequestEvent extends Event {
  +rid: string | null;

  constructor(type: string, rid?: string): void;
}

declare class RTCEncodedAudioFrame {
  data: ArrayBuffer;

  constructor(
    originalFrame: RTCEncodedAudioFrame,
    options?: RTCEncodedAudioFrameOptions,
  ): void;

  getMetadata(): RTCEncodedAudioFrameMetadata;
}

declare class RTCEncodedVideoFrame {
  data: ArrayBuffer;
  +type: RTCEncodedVideoFrameType;

  constructor(
    originalFrame: RTCEncodedVideoFrame,
    options?: RTCEncodedVideoFrameOptions,
  ): void;

  getMetadata(): RTCEncodedVideoFrameMetadata;
}

/* partial */ declare class RTCRtpReceiver {
  transform: RTCRtpTransform | null;
}

declare class RTCRtpScriptTransform {
  constructor(worker: Worker, options?: any, transfer?: Array<Object>): void;
}

declare class RTCRtpScriptTransformer extends EventTarget {
  onkeyframerequest: EventHandler;
  +options: any;
  +readable: ReadableStream;
  +writable: WritableStream;

  generateKeyFrame(rid?: string): Promise<number>;
  sendKeyFrameRequest(): Promise<void>;
}

/* partial */ declare class RTCRtpSender {
  transform: RTCRtpTransform | null;
}

/* partial */ declare class RTCRtpSender {
  generateKeyFrame(rids?: Array<string>): Promise<void>;
}

declare class RTCTransformEvent extends Event {
  +transformer: RTCRtpScriptTransformer;
}

declare class SFrameTransform
  extends EventTarget
  mixins mixin$GenericTransformStream
{
  onerror: EventHandler;

  constructor(options?: SFrameTransformOptions): void;

  setEncryptionKey(key: CryptoKey, keyID?: CryptoKeyID): Promise<void>;
}

declare class SFrameTransformErrorEvent extends Event {
  +errorType: SFrameTransformErrorEventType;
  +frame: any;
  +keyID: CryptoKeyID | null;

  constructor(type: string, eventInitDict: SFrameTransformErrorEventInit): void;
}
