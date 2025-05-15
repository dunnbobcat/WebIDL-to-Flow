type RTCDtlsRole = 'client' | 'server' | 'unknown';

type RTCQualityLimitationReason = 'none' | 'cpu' | 'bandwidth' | 'other';

type RTCStatsIceCandidatePairState =
  | 'frozen'
  | 'waiting'
  | 'in-progress'
  | 'failed'
  | 'succeeded';

type RTCStatsType =
  | 'codec'
  | 'inbound-rtp'
  | 'outbound-rtp'
  | 'remote-inbound-rtp'
  | 'remote-outbound-rtp'
  | 'media-source'
  | 'media-playout'
  | 'peer-connection'
  | 'data-channel'
  | 'transport'
  | 'candidate-pair'
  | 'local-candidate'
  | 'remote-candidate'
  | 'certificate';

type RTCAudioPlayoutStats = {
  kind: string,
  synthesizedSamplesDuration: number,
  synthesizedSamplesEvents: number,
  totalPlayoutDelay: number,
  totalSamplesCount: number,
  totalSamplesDuration: number,
};

type RTCAudioSourceStats = {
  audioLevel: number,
  echoReturnLoss: number,
  echoReturnLossEnhancement: number,
  kind: string,
  totalAudioEnergy: number,
  totalSamplesDuration: number,
  trackIdentifier: string,
};

type RTCCertificateStats = {
  base64Certificate: string,
  fingerprint: string,
  fingerprintAlgorithm: string,
  issuerCertificateId: string,
};

type RTCCodecStats = {
  channels: number,
  clockRate: number,
  mimeType: string,
  payloadType: number,
  sdpFmtpLine: string,
  transportId: string,
};

type RTCDataChannelStats = {
  bytesReceived: number,
  bytesSent: number,
  dataChannelIdentifier: number,
  label: string,
  messagesReceived: number,
  messagesSent: number,
  protocol: string,
  state: RTCDataChannelState,
};

type RTCIceCandidatePairStats = {
  availableIncomingBitrate: number,
  availableOutgoingBitrate: number,
  bytesDiscardedOnSend: number,
  bytesReceived: number,
  bytesSent: number,
  consentRequestsSent: number,
  currentRoundTripTime: number,
  lastPacketReceivedTimestamp: number,
  lastPacketSentTimestamp: number,
  localCandidateId: string,
  nominated: boolean,
  packetsDiscardedOnSend: number,
  packetsReceived: number,
  packetsSent: number,
  remoteCandidateId: string,
  requestsReceived: number,
  requestsSent: number,
  responsesReceived: number,
  responsesSent: number,
  state: RTCStatsIceCandidatePairState,
  totalRoundTripTime: number,
  transportId: string,
};

type RTCIceCandidateStats = {
  address: string | null,
  candidateType: RTCIceCandidateType,
  foundation: string,
  port: number,
  priority: number,
  protocol: string,
  relatedAddress: string,
  relatedPort: number,
  relayProtocol: RTCIceServerTransportProtocol,
  tcpType: RTCIceTcpCandidateType,
  transportId: string,
  url: string,
  usernameFragment: string,
};

type RTCInboundRtpStreamStats = {
  audioLevel: number,
  bytesReceived: number,
  codecId: string,
  concealedSamples: number,
  concealmentEvents: number,
  corruptionMeasurements: number,
  decoderImplementation: string,
  estimatedPlayoutTimestamp: number,
  fecBytesReceived: number,
  fecPacketsDiscarded: number,
  fecPacketsReceived: number,
  fecSsrc: number,
  firCount: number,
  frameHeight: number,
  framesAssembledFromMultiplePackets: number,
  framesDecoded: number,
  framesDropped: number,
  framesPerSecond: number,
  framesReceived: number,
  framesRendered: number,
  frameWidth: number,
  freezeCount: number,
  headerBytesReceived: number,
  insertedSamplesForDeceleration: number,
  jitter: number,
  jitterBufferDelay: number,
  jitterBufferEmittedCount: number,
  jitterBufferMinimumDelay: number,
  jitterBufferTargetDelay: number,
  keyFramesDecoded: number,
  kind: string,
  lastPacketReceivedTimestamp: number,
  mid: string,
  nackCount: number,
  packetsDiscarded: number,
  packetsLost: number,
  packetsReceived: number,
  packetsReceivedWithCe: number,
  packetsReceivedWithEct1: number,
  packetsReportedAsLost: number,
  packetsReportedAsLostButRecovered: number,
  pauseCount: number,
  playoutId: string,
  pliCount: number,
  powerEfficientDecoder: boolean,
  qpSum: number,
  remoteId: string,
  removedSamplesForAcceleration: number,
  retransmittedBytesReceived: number,
  retransmittedPacketsReceived: number,
  rtxSsrc: number,
  silentConcealedSamples: number,
  ssrc: number,
  totalAssemblyTime: number,
  totalAudioEnergy: number,
  totalCorruptionProbability: number,
  totalDecodeTime: number,
  totalFreezesDuration: number,
  totalInterFrameDelay: number,
  totalPausesDuration: number,
  totalProcessingDelay: number,
  totalSamplesDuration: number,
  totalSamplesReceived: number,
  totalSquaredCorruptionProbability: number,
  totalSquaredInterFrameDelay: number,
  trackIdentifier: string,
  transportId: string,
};

type RTCMediaSourceStats = {
  kind: string,
  trackIdentifier: string,
};

type RTCOutboundRtpStreamStats = {
  active: boolean,
  bytesSent: number,
  codecId: string,
  encoderImplementation: string,
  encodingIndex: number,
  firCount: number,
  frameHeight: number,
  framesEncoded: number,
  framesPerSecond: number,
  framesSent: number,
  frameWidth: number,
  headerBytesSent: number,
  hugeFramesSent: number,
  keyFramesEncoded: number,
  kind: string,
  mediaSourceId: string,
  mid: string,
  nackCount: number,
  packetsSent: number,
  packetsSentWithEct1: number,
  pliCount: number,
  powerEfficientEncoder: boolean,
  qpSum: number,
  qualityLimitationDurations: {[string]: number},
  qualityLimitationReason: RTCQualityLimitationReason,
  qualityLimitationResolutionChanges: number,
  remoteId: string,
  retransmittedBytesSent: number,
  retransmittedPacketsSent: number,
  rid: string,
  rtxSsrc: number,
  scalabilityMode: string,
  ssrc: number,
  targetBitrate: number,
  totalEncodedBytesTarget: number,
  totalEncodeTime: number,
  totalPacketSendDelay: number,
  transportId: string,
};

type RTCPeerConnectionStats = {
  dataChannelsClosed: number,
  dataChannelsOpened: number,
};

type RTCReceivedRtpStreamStats = {
  codecId: string,
  jitter: number,
  kind: string,
  packetsLost: number,
  packetsReceived: number,
  packetsReceivedWithCe: number,
  packetsReceivedWithEct1: number,
  packetsReportedAsLost: number,
  packetsReportedAsLostButRecovered: number,
  ssrc: number,
  transportId: string,
};

type RTCRemoteInboundRtpStreamStats = {
  codecId: string,
  fractionLost: number,
  jitter: number,
  kind: string,
  localId: string,
  packetsLost: number,
  packetsReceived: number,
  packetsReceivedWithCe: number,
  packetsReceivedWithEct1: number,
  packetsReportedAsLost: number,
  packetsReportedAsLostButRecovered: number,
  packetsWithBleachedEct1Marking: number,
  roundTripTime: number,
  roundTripTimeMeasurements: number,
  ssrc: number,
  totalRoundTripTime: number,
  transportId: string,
};

type RTCRemoteOutboundRtpStreamStats = {
  bytesSent: number,
  codecId: string,
  kind: string,
  localId: string,
  packetsSent: number,
  packetsSentWithEct1: number,
  remoteTimestamp: number,
  reportsSent: number,
  roundTripTime: number,
  roundTripTimeMeasurements: number,
  ssrc: number,
  totalRoundTripTime: number,
  transportId: string,
};

type RTCRtpStreamStats = {
  codecId: string,
  kind: string,
  ssrc: number,
  transportId: string,
};

type RTCSentRtpStreamStats = {
  bytesSent: number,
  codecId: string,
  kind: string,
  packetsSent: number,
  packetsSentWithEct1: number,
  ssrc: number,
  transportId: string,
};

type RTCTransportStats = {
  bytesReceived: number,
  bytesSent: number,
  ccfbMessagesReceived: number,
  ccfbMessagesSent: number,
  dtlsCipher: string,
  dtlsRole: RTCDtlsRole,
  dtlsState: RTCDtlsTransportState,
  iceLocalUsernameFragment: string,
  iceRole: RTCIceRole,
  iceState: RTCIceTransportState,
  localCertificateId: string,
  packetsReceived: number,
  packetsSent: number,
  remoteCertificateId: string,
  selectedCandidatePairChanges: number,
  selectedCandidatePairId: string,
  srtpCipher: string,
  tlsVersion: string,
};

type RTCVideoSourceStats = {
  frames: number,
  framesPerSecond: number,
  height: number,
  kind: string,
  trackIdentifier: string,
  width: number,
};
