type RenderBlockingStatusType = 'blocking' | 'non-blocking';

/* partial */ declare class Performance {
  onresourcetimingbufferfull: EventHandler;

  clearResourceTimings(): void;
  setResourceTimingBufferSize(maxSize: number): void;
}

declare class PerformanceResourceTiming extends PerformanceEntry {
  +connectEnd: number;
  +connectStart: number;
  +contentType: string;
  +decodedBodySize: number;
  +deliveryType: string;
  +domainLookupEnd: number;
  +domainLookupStart: number;
  +encodedBodySize: number;
  +fetchStart: number;
  +finalResponseHeadersStart: number;
  +firstInterimResponseStart: number;
  +initiatorType: string;
  +nextHopProtocol: string;
  +redirectEnd: number;
  +redirectStart: number;
  +renderBlockingStatus: RenderBlockingStatusType;
  +requestStart: number;
  +responseEnd: number;
  +responseStart: number;
  +responseStatus: number;
  +secureConnectionStart: number;
  +transferSize: number;
  +workerStart: number;

  toJSON(): Object;
}
