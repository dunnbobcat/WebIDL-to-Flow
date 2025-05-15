type PrivateAttributionLogic = 'last-touch';

type PrivateAttributionProtocol = 'dap-12-histogram' | 'tee-00';

type PrivateAttributionAggregationService = {
  protocol: string,
};

type PrivateAttributionConversionOptions = {
  aggregationService: string,
  epsilon: number,
  filterData: number,
  histogramSize: number,
  impressionSites: Array<string>,
  intermediarySites: Array<string>,
  logic: PrivateAttributionLogic,
  lookbackDays: number,
  maxValue: number,
  value: number,
};

type PrivateAttributionConversionResult = {
  report: Uint8Array,
};

type PrivateAttributionImpressionOptions = {
  conversionSite: string,
  filterData: number,
  histogramIndex: number,
  lifetimeDays: number,
};

/* partial */ declare class Navigator {
  +privateAttribution: PrivateAttribution;
}

declare class PrivateAttribution {
  +aggregationServices: PrivateAttributionAggregationServices;

  measureConversion(
    options: PrivateAttributionConversionOptions,
  ): Promise<PrivateAttributionConversionResult>;
  saveImpression(options: PrivateAttributionImpressionOptions): void;
}

/* partial */ declare class PrivateAttribution {
  saveImpression(options: PrivateAttributionImpressionOptions): void;
}

/* partial */ declare class PrivateAttribution {
  measureConversion(
    options: PrivateAttributionConversionOptions,
  ): Promise<PrivateAttributionConversionResult>;
}

type PrivateAttributionAggregationServices = Map<
  string,
  PrivateAttributionAggregationService,
>;
