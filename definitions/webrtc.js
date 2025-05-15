type RTCBundlePolicy = 'balanced' | 'max-compat' | 'max-bundle';

type RTCDataChannelState = 'connecting' | 'open' | 'closing' | 'closed';

type RTCDtlsTransportState =
  | 'new'
  | 'connecting'
  | 'connected'
  | 'closed'
  | 'failed';

type RTCErrorDetailType =
  | 'data-channel-failure'
  | 'dtls-failure'
  | 'fingerprint-failure'
  | 'sctp-failure'
  | 'sdp-syntax-error'
  | 'hardware-encoder-not-available'
  | 'hardware-encoder-error';

type RTCIceCandidateType = 'host' | 'srflx' | 'prflx' | 'relay';

type RTCIceComponent = 'rtp' | 'rtcp';

type RTCIceConnectionState =
  | 'closed'
  | 'failed'
  | 'disconnected'
  | 'new'
  | 'checking'
  | 'completed'
  | 'connected';

type RTCIceGathererState = 'new' | 'gathering' | 'complete';

type RTCIceGatheringState = 'new' | 'gathering' | 'complete';

type RTCIceProtocol = 'udp' | 'tcp';

type RTCIceRole = 'unknown' | 'controlling' | 'controlled';

type RTCIceServerTransportProtocol = 'udp' | 'tcp' | 'tls';

type RTCIceTcpCandidateType = 'active' | 'passive' | 'so';

type RTCIceTransportPolicy = 'relay' | 'all';

type RTCIceTransportState =
  | 'closed'
  | 'failed'
  | 'disconnected'
  | 'new'
  | 'checking'
  | 'completed'
  | 'connected';

type RTCPeerConnectionState =
  | 'closed'
  | 'failed'
  | 'disconnected'
  | 'new'
  | 'connecting'
  | 'connected';

type RTCRtcpMuxPolicy = 'require';

type RTCRtpTransceiverDirection =
  | 'sendrecv'
  | 'sendonly'
  | 'recvonly'
  | 'inactive'
  | 'stopped';

type RTCSctpTransportState = 'connecting' | 'connected' | 'closed';

type RTCSdpType = 'offer' | 'pranswer' | 'answer' | 'rollback';

type RTCSignalingState =
  | 'stable'
  | 'have-local-offer'
  | 'have-remote-offer'
  | 'have-local-pranswer'
  | 'have-remote-pranswer'
  | 'closed';

type RTCAnswerOptions = {};

type RTCCertificateExpiration = {
  expires: number,
};

type RTCConfiguration = {
  bundlePolicy: RTCBundlePolicy,
  certificates: Array<RTCCertificate>,
  iceCandidatePoolSize: number,
  iceServers: Array<RTCIceServer>,
  iceTransportPolicy: RTCIceTransportPolicy,
  rtcpMuxPolicy: RTCRtcpMuxPolicy,
};

type RTCDataChannelEventInit = {
  channel: RTCDataChannel,
};

type RTCDataChannelInit = {
  id: number,
  maxPacketLifeTime: number,
  maxRetransmits: number,
  negotiated: boolean,
  ordered: boolean,
  protocol: string,
};

type RTCDtlsFingerprint = {
  algorithm: string,
  value: string,
};

type RTCDTMFToneChangeEventInit = {
  tone: string,
};

type RTCErrorEventInit = {
  error: RTCError,
};

type RTCErrorInit = {
  errorDetail: RTCErrorDetailType,
  receivedAlert: number,
  sctpCauseCode: number,
  sdpLineNumber: number,
  sentAlert: number,
};

type RTCIceCandidateInit = {
  candidate: string,
  sdpMid: string | null,
  sdpMLineIndex: number | null,
  usernameFragment: string | null,
};

type RTCIceParameters = {
  password: string,
  usernameFragment: string,
};

type RTCIceServer = {
  credential: string,
  urls: string | Array<string>,
  username: string,
};

type RTCLocalIceCandidateInit = {
  candidate: string,
  relayProtocol: RTCIceServerTransportProtocol | null,
  sdpMid: string | null,
  sdpMLineIndex: number | null,
  url: string | null,
  usernameFragment: string | null,
};

type RTCLocalSessionDescriptionInit = {
  sdp: string,
  type: RTCSdpType,
};

type RTCOfferAnswerOptions = {};

type RTCOfferOptions = {
  iceRestart: boolean,
  offerToReceiveAudio: boolean,
  offerToReceiveVideo: boolean,
};

type RTCPeerConnectionIceErrorEventInit = {
  address: string | null,
  errorCode: number,
  errorText: string,
  port: number | null,
  url: string,
};

type RTCPeerConnectionIceEventInit = {
  candidate: RTCIceCandidate | null,
  url: string | null,
};

type RTCRtcpParameters = {
  cname: string,
  reducedSize: boolean,
};

type RTCRtpCapabilities = {
  codecs: Array<RTCRtpCodec>,
  headerExtensions: Array<RTCRtpHeaderExtensionCapability>,
};

type RTCRtpCodec = {
  channels: number,
  clockRate: number,
  mimeType: string,
  sdpFmtpLine: string,
};

type RTCRtpCodecParameters = {
  channels: number,
  clockRate: number,
  mimeType: string,
  payloadType: number,
  sdpFmtpLine: string,
};

type RTCRtpCodingParameters = {
  rid: string,
};

type RTCRtpContributingSource = {
  audioLevel: number,
  rtpTimestamp: number,
  source: number,
  timestamp: number,
};

type RTCRtpEncodingParameters = {
  active: boolean,
  codec: RTCRtpCodec,
  maxBitrate: number,
  maxFramerate: number,
  rid: string,
  scaleResolutionDownBy: number,
};

type RTCRtpHeaderExtensionCapability = {
  uri: string,
};

type RTCRtpHeaderExtensionParameters = {
  encrypted: boolean,
  id: number,
  uri: string,
};

type RTCRtpParameters = {
  codecs: Array<RTCRtpCodecParameters>,
  headerExtensions: Array<RTCRtpHeaderExtensionParameters>,
  rtcp: RTCRtcpParameters,
};

type RTCRtpReceiveParameters = {
  codecs: Array<RTCRtpCodecParameters>,
  headerExtensions: Array<RTCRtpHeaderExtensionParameters>,
  rtcp: RTCRtcpParameters,
};

type RTCRtpSendParameters = {
  codecs: Array<RTCRtpCodecParameters>,
  encodings: Array<RTCRtpEncodingParameters>,
  headerExtensions: Array<RTCRtpHeaderExtensionParameters>,
  rtcp: RTCRtcpParameters,
  transactionId: string,
};

type RTCRtpSynchronizationSource = {
  audioLevel: number,
  rtpTimestamp: number,
  source: number,
  timestamp: number,
};

type RTCRtpTransceiverInit = {
  direction: RTCRtpTransceiverDirection,
  sendEncodings: Array<RTCRtpEncodingParameters>,
  streams: Array<MediaStream>,
};

type RTCSessionDescriptionInit = {
  sdp: string,
  type: RTCSdpType,
};

type RTCSetParameterOptions = {};

type RTCStats = {
  id: string,
  timestamp: number,
  type: RTCStatsType,
};

type RTCTrackEventInit = {
  receiver: RTCRtpReceiver,
  streams: Array<MediaStream>,
  track: MediaStreamTrack,
  transceiver: RTCRtpTransceiver,
};

type RTCPeerConnectionErrorCallback = (error: DOMException) => void;

type RTCSessionDescriptionCallback = (
  description: RTCSessionDescriptionInit,
) => void;

declare class RTCCertificate {
  +expires: EpochTimeStamp;

  getFingerprints(): Array<RTCDtlsFingerprint>;
}

declare class RTCDataChannel extends EventTarget {
  binaryType: BinaryType;
  +bufferedAmount: number;
  bufferedAmountLowThreshold: number;
  +id: number | null;
  +label: string;
  +maxPacketLifeTime: number | null;
  +maxRetransmits: number | null;
  +negotiated: boolean;
  onbufferedamountlow: EventHandler;
  onclose: EventHandler;
  onclosing: EventHandler;
  onerror: EventHandler;
  onmessage: EventHandler;
  onopen: EventHandler;
  +ordered: boolean;
  +protocol: string;
  +readyState: RTCDataChannelState;

  close(): void;
  send(data: string): void;
  send(data: Blob): void;
  send(data: ArrayBuffer): void;
  send(data: ArrayBufferView): void;
}

declare class RTCDataChannelEvent extends Event {
  +channel: RTCDataChannel;

  constructor(type: string, eventInitDict: RTCDataChannelEventInit): void;
}

declare class RTCDtlsTransport extends EventTarget {
  +iceTransport: RTCIceTransport;
  onerror: EventHandler;
  onstatechange: EventHandler;
  +state: RTCDtlsTransportState;

  getRemoteCertificates(): Array<ArrayBuffer>;
}

declare class RTCDTMFSender extends EventTarget {
  +canInsertDTMF: boolean;
  ontonechange: EventHandler;
  +toneBuffer: string;

  insertDTMF(tones: string, duration?: number, interToneGap?: number): void;
}

declare class RTCDTMFToneChangeEvent extends Event {
  +tone: string;

  constructor(type: string, eventInitDict?: RTCDTMFToneChangeEventInit): void;
}

declare class RTCError extends DOMException {
  +errorDetail: RTCErrorDetailType;
  +receivedAlert: number | null;
  +sctpCauseCode: number | null;
  +sdpLineNumber: number | null;
  +sentAlert: number | null;

  constructor(init: RTCErrorInit, message?: string): void;
}

declare class RTCErrorEvent extends Event {
  +error: RTCError;

  constructor(type: string, eventInitDict: RTCErrorEventInit): void;
}

declare class RTCIceCandidate {
  +address: string | null;
  +candidate: string;
  +component: RTCIceComponent | null;
  +foundation: string | null;
  +port: number | null;
  +priority: number | null;
  +protocol: RTCIceProtocol | null;
  +relatedAddress: string | null;
  +relatedPort: number | null;
  +relayProtocol: RTCIceServerTransportProtocol | null;
  +sdpMid: string | null;
  +sdpMLineIndex: number | null;
  +tcpType: RTCIceTcpCandidateType | null;
  +type: RTCIceCandidateType | null;
  +url: string | null;
  +usernameFragment: string | null;

  constructor(candidateInitDict?: RTCLocalIceCandidateInit): void;

  toJSON(): RTCIceCandidateInit;
}

declare class RTCIceCandidatePair {
  +local: RTCIceCandidate;
  +remote: RTCIceCandidate;
}

declare class RTCIceTransport extends EventTarget {
  +component: RTCIceComponent;
  +gatheringState: RTCIceGathererState;
  ongatheringstatechange: EventHandler;
  onselectedcandidatepairchange: EventHandler;
  onstatechange: EventHandler;
  +role: RTCIceRole;
  +state: RTCIceTransportState;

  getLocalCandidates(): Array<RTCIceCandidate>;
  getLocalParameters(): RTCIceParameters | null;
  getRemoteCandidates(): Array<RTCIceCandidate>;
  getRemoteParameters(): RTCIceParameters | null;
  getSelectedCandidatePair(): RTCIceCandidatePair | null;
}

declare class RTCPeerConnection extends EventTarget {
  +canTrickleIceCandidates: boolean | null;
  +connectionState: RTCPeerConnectionState;
  +currentLocalDescription: RTCSessionDescription | null;
  +currentRemoteDescription: RTCSessionDescription | null;
  +iceConnectionState: RTCIceConnectionState;
  +iceGatheringState: RTCIceGatheringState;
  +localDescription: RTCSessionDescription | null;
  onconnectionstatechange: EventHandler;
  ondatachannel: EventHandler;
  onicecandidate: EventHandler;
  onicecandidateerror: EventHandler;
  oniceconnectionstatechange: EventHandler;
  onicegatheringstatechange: EventHandler;
  onnegotiationneeded: EventHandler;
  onsignalingstatechange: EventHandler;
  ontrack: EventHandler;
  +pendingLocalDescription: RTCSessionDescription | null;
  +pendingRemoteDescription: RTCSessionDescription | null;
  +remoteDescription: RTCSessionDescription | null;
  +sctp: RTCSctpTransport | null;
  +signalingState: RTCSignalingState;

  constructor(configuration?: RTCConfiguration): void;

  static generateCertificate(
    keygenAlgorithm: AlgorithmIdentifier,
  ): Promise<RTCCertificate>;
  addIceCandidate(candidate?: RTCIceCandidateInit): Promise<void>;
  addIceCandidate(
    candidate: RTCIceCandidateInit,
    successCallback: VoidFunction,
    failureCallback: RTCPeerConnectionErrorCallback,
  ): Promise<void>;
  addTrack(track: MediaStreamTrack, streams: MediaStream): RTCRtpSender;
  addTransceiver(
    trackOrKind: MediaStreamTrack | string,
    init?: RTCRtpTransceiverInit,
  ): RTCRtpTransceiver;
  close(): void;
  createAnswer(options?: RTCAnswerOptions): Promise<RTCSessionDescriptionInit>;
  createAnswer(
    successCallback: RTCSessionDescriptionCallback,
    failureCallback: RTCPeerConnectionErrorCallback,
  ): Promise<void>;
  createDataChannel(
    label: string,
    dataChannelDict?: RTCDataChannelInit,
  ): RTCDataChannel;
  createOffer(options?: RTCOfferOptions): Promise<RTCSessionDescriptionInit>;
  createOffer(
    successCallback: RTCSessionDescriptionCallback,
    failureCallback: RTCPeerConnectionErrorCallback,
    options?: RTCOfferOptions,
  ): Promise<void>;
  getConfiguration(): RTCConfiguration;
  getReceivers(): Array<RTCRtpReceiver>;
  getSenders(): Array<RTCRtpSender>;
  getStats(selector?: MediaStreamTrack | null): Promise<RTCStatsReport>;
  getTransceivers(): Array<RTCRtpTransceiver>;
  removeTrack(sender: RTCRtpSender): void;
  restartIce(): void;
  setConfiguration(configuration?: RTCConfiguration): void;
  setLocalDescription(
    description?: RTCLocalSessionDescriptionInit,
  ): Promise<void>;
  setLocalDescription(
    description: RTCLocalSessionDescriptionInit,
    successCallback: VoidFunction,
    failureCallback: RTCPeerConnectionErrorCallback,
  ): Promise<void>;
  setRemoteDescription(description: RTCSessionDescriptionInit): Promise<void>;
  setRemoteDescription(
    description: RTCSessionDescriptionInit,
    successCallback: VoidFunction,
    failureCallback: RTCPeerConnectionErrorCallback,
  ): Promise<void>;
}

declare class RTCPeerConnectionIceErrorEvent extends Event {
  +address: string | null;
  +errorCode: number;
  +errorText: string;
  +port: number | null;
  +url: string;

  constructor(
    type: string,
    eventInitDict: RTCPeerConnectionIceErrorEventInit,
  ): void;
}

declare class RTCPeerConnectionIceEvent extends Event {
  +candidate: RTCIceCandidate | null;
  +url: string | null;

  constructor(
    type: string,
    eventInitDict?: RTCPeerConnectionIceEventInit,
  ): void;
}

declare class RTCRtpReceiver {
  jitterBufferTarget: number | null;
  +track: MediaStreamTrack;
  +transport: RTCDtlsTransport | null;

  static getCapabilities(kind: string): RTCRtpCapabilities | null;
  getContributingSources(): Array<RTCRtpContributingSource>;
  getParameters(): RTCRtpReceiveParameters;
  getStats(): Promise<RTCStatsReport>;
  getSynchronizationSources(): Array<RTCRtpSynchronizationSource>;
}

declare class RTCRtpSender {
  +dtmf: RTCDTMFSender | null;
  +track: MediaStreamTrack | null;
  +transport: RTCDtlsTransport | null;

  static getCapabilities(kind: string): RTCRtpCapabilities | null;
  getParameters(): RTCRtpSendParameters;
  getStats(): Promise<RTCStatsReport>;
  replaceTrack(withTrack: MediaStreamTrack | null): Promise<void>;
  setParameters(
    parameters: RTCRtpSendParameters,
    setParameterOptions?: RTCSetParameterOptions,
  ): Promise<void>;
  setStreams(streams: MediaStream): void;
}

declare class RTCRtpTransceiver {
  +currentDirection: RTCRtpTransceiverDirection | null;
  direction: RTCRtpTransceiverDirection;
  +mid: string | null;
  +receiver: RTCRtpReceiver;
  +sender: RTCRtpSender;

  setCodecPreferences(codecs: Array<RTCRtpCodec>): void;
  stop(): void;
}

declare class RTCSctpTransport extends EventTarget {
  +maxChannels: number | null;
  +maxMessageSize: number;
  onstatechange: EventHandler;
  +state: RTCSctpTransportState;
  +transport: RTCDtlsTransport;
}

declare class RTCSessionDescription {
  +sdp: string;
  +type: RTCSdpType;

  constructor(descriptionInitDict: RTCSessionDescriptionInit): void;

  toJSON(): RTCSessionDescriptionInit;
}

type RTCStatsReport = Map<string, Object>;

declare class RTCTrackEvent extends Event {
  +receiver: RTCRtpReceiver;
  +streams: $ReadOnlyArray<MediaStream>;
  +track: MediaStreamTrack;
  +transceiver: RTCRtpTransceiver;

  constructor(type: string, eventInitDict: RTCTrackEventInit): void;
}
