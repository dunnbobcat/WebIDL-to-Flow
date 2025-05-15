type WebTransportCongestionControl = 'default' | 'throughput' | 'low-latency';

type WebTransportErrorSource = 'stream' | 'session';

type WebTransportReliabilityMode =
  | 'pending'
  | 'reliable-only'
  | 'supports-unreliable';

type WebTransportCloseInfo = {
  closeCode: number,
  reason: string,
};

type WebTransportConnectionStats = {
  atSendCapacity: boolean,
  bytesLost: number,
  bytesReceived: number,
  bytesSent: number,
  datagrams: WebTransportDatagramStats,
  estimatedSendRate: number | null,
  minRtt: number,
  packetsLost: number,
  packetsReceived: number,
  packetsSent: number,
  rttVariation: number,
  smoothedRtt: number,
};

type WebTransportDatagramStats = {
  droppedIncoming: number,
  expiredIncoming: number,
  expiredOutgoing: number,
  lostOutgoing: number,
};

type WebTransportErrorOptions = {
  source: WebTransportErrorSource,
  streamErrorCode: number | null,
};

type WebTransportHash = {
  algorithm: string,
  value: BufferSource,
};

type WebTransportOptions = {
  allowPooling: boolean,
  anticipatedConcurrentIncomingBidirectionalStreams: number | null,
  anticipatedConcurrentIncomingUnidirectionalStreams: number | null,
  congestionControl: WebTransportCongestionControl,
  protocols: Array<string>,
  requireUnreliable: boolean,
  serverCertificateHashes: Array<WebTransportHash>,
};

type WebTransportReceiveStreamStats = {
  bytesRead: number,
  bytesReceived: number,
};

type WebTransportSendOptions = {
  sendGroup: WebTransportSendGroup | null,
  sendOrder: number,
};

type WebTransportSendStreamOptions = {
  sendGroup: WebTransportSendGroup | null,
  sendOrder: number,
  waitUntilAvailable: boolean,
};

type WebTransportSendStreamStats = {
  bytesAcknowledged: number,
  bytesSent: number,
  bytesWritten: number,
};

declare class WebTransport {
  anticipatedConcurrentIncomingBidirectionalStreams: number | null;
  anticipatedConcurrentIncomingUnidirectionalStreams: number | null;
  +closed: Promise<WebTransportCloseInfo>;
  +congestionControl: WebTransportCongestionControl;
  +datagrams: WebTransportDatagramDuplexStream;
  +draining: Promise<void>;
  +incomingBidirectionalStreams: ReadableStream;
  +incomingUnidirectionalStreams: ReadableStream;
  +protocol: string;
  +ready: Promise<void>;
  +reliability: WebTransportReliabilityMode;
  +supportsReliableOnly: boolean;

  constructor(url: string, options?: WebTransportOptions): void;

  close(closeInfo?: WebTransportCloseInfo): void;
  createBidirectionalStream(
    options?: WebTransportSendStreamOptions,
  ): Promise<WebTransportBidirectionalStream>;
  createSendGroup(): WebTransportSendGroup;
  createUnidirectionalStream(
    options?: WebTransportSendStreamOptions,
  ): Promise<WebTransportSendStream>;
  getStats(): Promise<WebTransportConnectionStats>;
}

declare class WebTransportBidirectionalStream {
  +readable: WebTransportReceiveStream;
  +writable: WebTransportSendStream;
}

declare class WebTransportDatagramDuplexStream {
  incomingHighWaterMark: number;
  incomingMaxAge: number | null;
  +maxDatagramSize: number;
  outgoingHighWaterMark: number;
  outgoingMaxAge: number | null;
  +readable: ReadableStream;

  createWritable(
    options?: WebTransportSendOptions,
  ): WebTransportDatagramsWritable;
}

declare class WebTransportDatagramsWritable extends WritableStream {
  sendGroup: WebTransportSendGroup | null;
  sendOrder: number;
}

declare class WebTransportError extends DOMException {
  +source: WebTransportErrorSource;
  +streamErrorCode: number | null;

  constructor(message?: string, options?: WebTransportErrorOptions): void;
}

declare class WebTransportReceiveStream extends ReadableStream {
  getStats(): Promise<WebTransportReceiveStreamStats>;
}

declare class WebTransportSendGroup {
  getStats(): Promise<WebTransportSendStreamStats>;
}

declare class WebTransportSendStream extends WritableStream {
  sendGroup: WebTransportSendGroup | null;
  sendOrder: number;

  getStats(): Promise<WebTransportSendStreamStats>;
  getWriter(): WebTransportWriter;
}

declare class WebTransportWriter extends WritableStreamDefaultWriter {
  atomicWrite(chunk?: any): Promise<void>;
}
