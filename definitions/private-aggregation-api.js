type PADebugModeOptions = {
  debugKey: bigint,
};

type PAHistogramContribution = {
  bucket: bigint,
  filteringId: bigint,
  value: number,
};

declare class PrivateAggregation {
  contributeToHistogram(contribution: PAHistogramContribution): void;
  contributeToHistogramOnEvent(
    event: string,
    contribution: {[string]: any},
  ): void;
  enableDebugMode(options?: PADebugModeOptions): void;
}
