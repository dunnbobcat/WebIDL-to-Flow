type AttributionReportingRequestOptions = {
  eventSourceEligible: boolean,
  triggerEligible: boolean,
};

/* partial */ type RequestInit = {
  attributionReporting: AttributionReportingRequestOptions,
};

/* partial */ declare class XMLHttpRequest {
  setAttributionReporting(options: AttributionReportingRequestOptions): void;
}

declare class mixin$HTMLAttributionSrcElementUtils {
  attributionSrc: string;
}
