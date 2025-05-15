type AttributionReportingRequestOptions = {
  eventSourceEligible: boolean,
  triggerEligible: boolean,
};

/* partial */ type RequestInit = {
  attributionReporting: AttributionReportingRequestOptions,
};

/* partial */ interface XMLHttpRequest {
  setAttributionReporting(options: AttributionReportingRequestOptions): void;
}

declare class mixin$HTMLAttributionSrcElementUtils {
  attributionSrc: string;
}
