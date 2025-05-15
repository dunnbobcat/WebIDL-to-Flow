type PreviousWin = Array<PreviousWinElement>;

type PreviousWinElement = number | AuctionAd;

type KAnonStatus =
  | 'passedAndEnforced'
  | 'passedNotEnforced'
  | 'belowThreshold'
  | 'notCalculated';

type AdAuctionData = {
  request: Uint8Array,
  requestId: string,
  requests: Array<AdAuctionPerSellerData>,
};

type AdAuctionDataBuyerConfig = {
  targetSize: number,
};

type AdAuctionDataConfig = {
  coordinatorOrigin: string,
  perBuyerConfig: string | AdAuctionDataBuyerConfig,
  requestSize: number,
  seller: string,
  sellers: Array<AdAuctionOneSeller>,
};

type AdAuctionOneSeller = {
  coordinatorOrigin: string,
  seller: string,
};

type AdAuctionPerSellerData = {
  error: string,
  request: Uint8Array,
  seller: string,
};

type AdRender = {
  height: string,
  url: string,
  width: string,
};

type AuctionAd = {
  adRenderId: string,
  allowedReportingOrigins: Array<string>,
  buyerAndSellerReportingId: string,
  buyerReportingId: string,
  creativeScanningMetadata: string,
  metadata: any,
  renderURL: string,
  selectableBuyerAndSellerReportingIds: Array<string>,
  sizeGroup: string,
};

type AuctionAdConfig = {
  additionalBids: void,
  allSlotsRequestedSizes: Array<string | string>,
  auctionNonce: string,
  auctionReportBuyerDebugModeConfig: AuctionReportBuyerDebugModeConfig,
  auctionReportBuyerKeys: Array<bigint>,
  auctionReportBuyers: string | AuctionReportBuyersConfig,
  auctionSignals: any,
  componentAuctions: Array<AuctionAdConfig>,
  decisionLogicURL: string,
  deprecatedRenderURLReplacements: string | string | null,
  directFromSellerSignalsHeaderAdSlot: string | null,
  interestGroupBuyers: Array<string>,
  maxTrustedScoringSignalsURLLength: number,
  perBuyerCumulativeTimeouts: string | number | null,
  perBuyerCurrencies: string | string | null,
  perBuyerExperimentGroupIds: string | number,
  perBuyerGroupLimits: string | number,
  perBuyerMultiBidLimits: string | number,
  perBuyerPrioritySignals: string | string | number,
  perBuyerRealTimeReportingConfig: string | AuctionRealTimeReportingConfig,
  perBuyerSignals: string | any | null,
  perBuyerTimeouts: string | number | null,
  privateAggregationConfig: ProtectedAudiencePrivateAggregationConfig,
  reportingTimeout: number,
  requestedSize: string | string,
  requestId: string,
  requiredSellerCapabilities: Array<string>,
  resolveToConfig: boolean,
  seller: string,
  sellerCurrency: string,
  sellerExperimentGroupId: number,
  sellerRealTimeReportingConfig: AuctionRealTimeReportingConfig,
  sellerSignals: any,
  sellerTimeout: number,
  sendCreativeScanningMetadata: boolean,
  serverResponse: Uint8Array,
  signal: AbortSignal | null,
  trustedScoringSignalsCoordinator: string,
  trustedScoringSignalsURL: string,
};

type AuctionAdInterestGroup = {
  adComponents: Array<AuctionAd>,
  additionalBidKey: string,
  ads: Array<AuctionAd>,
  adSizes: string | AuctionAdInterestGroupSize,
  biddingLogicURL: string,
  biddingWasmHelperURL: string,
  enableBiddingSignalsPrioritization: boolean,
  executionMode: string,
  lifetimeMs: number,
  maxTrustedBiddingSignalsURLLength: number,
  name: string,
  owner: string,
  priority: number,
  prioritySignalsOverrides: string | number,
  priorityVector: string | number,
  privateAggregationConfig: ProtectedAudiencePrivateAggregationConfig,
  sellerCapabilities: string | Array<string>,
  sizeGroups: string | Array<string>,
  trustedBiddingSignalsCoordinator: string,
  trustedBiddingSignalsKeys: Array<string>,
  trustedBiddingSignalsSlotSizeMode: string,
  trustedBiddingSignalsURL: string,
  updateURL: string,
  userBiddingSignals: any,
};

type AuctionAdInterestGroupKey = {
  name: string,
  owner: string,
};

type AuctionAdInterestGroupSize = {
  height: string,
  width: string,
};

type AuctionRealTimeReportingConfig = {
  type: string,
};

type AuctionReportBuyerDebugModeConfig = {
  debugKey: bigint | null,
  enabled: boolean,
};

type AuctionReportBuyersConfig = {
  bucket: bigint,
  scale: number,
};

type BiddingBrowserSignals = {
  adComponentsLimit: number,
  bidCount: number,
  crossOriginDataVersion: number,
  dataVersion: number,
  forDebuggingOnlyInCooldownOrLockout: boolean,
  joinCount: number,
  multiBidLimit: number,
  prevWinsMs: Array<PreviousWin>,
  recency: number,
  requestedSize: string | string,
  seller: string,
  topLevelSeller: string,
  topWindowHostname: string,
  wasmHelper: Object,
};

type DirectFromSellerSignalsForBuyer = {
  auctionSignals: any,
  perBuyerSignals: any,
};

type DirectFromSellerSignalsForSeller = {
  auctionSignals: any,
  sellerSignals: any,
};

type GenerateBidInterestGroup = {
  adComponents: Array<AuctionAd>,
  ads: Array<AuctionAd>,
  adSizes: string | AuctionAdInterestGroupSize,
  biddingLogicURL: string,
  biddingWasmHelperURL: string,
  enableBiddingSignalsPrioritization: boolean,
  executionMode: string,
  maxTrustedBiddingSignalsURLLength: number,
  name: string,
  owner: string,
  priorityVector: string | number,
  sellerCapabilities: string | Array<string>,
  sizeGroups: string | Array<string>,
  trustedBiddingSignalsCoordinator: string,
  trustedBiddingSignalsKeys: Array<string>,
  trustedBiddingSignalsSlotSizeMode: string,
  trustedBiddingSignalsURL: string,
  updateURL: string,
  userBiddingSignals: any,
};

type GenerateBidOutput = {
  ad: any,
  adComponents: Array<string | AdRender>,
  adCost: number,
  allowComponentAuction: boolean,
  bid: number,
  bidCurrency: string,
  modelingSignals: number,
  numMandatoryAdComponents: number,
  render: string | AdRender,
  selectedBuyerAndSellerReportingId: string,
  targetNumAdComponents: number,
};

type PAExtendedHistogramContribution = {
  bucket: PASignalValue | bigint,
  filteringId: bigint,
  value: PASignalValue | number,
};

type PASignalValue = {
  baseValue: string,
  offset: bigint | number,
  scale: number,
};

type ProtectedAudiencePrivateAggregationConfig = {
  aggregationCoordinatorOrigin: string,
};

type RealTimeContribution = {
  bucket: number,
  latencyThreshold: number,
  priorityWeight: number,
};

type ReportingBrowserSignals = {
  bid: number,
  bidCurrency: string,
  buyerAndSellerReportingId: string,
  componentSeller: string,
  highestScoringOtherBid: number,
  highestScoringOtherBidCurrency: string,
  interestGroupOwner: string,
  renderURL: string,
  selectedBuyerAndSellerReportingId: string,
  topLevelSeller: string,
  topWindowHostname: string,
};

type ReportResultBrowserSignals = {
  bid: number,
  bidCurrency: string,
  buyerAndSellerReportingId: string,
  componentSeller: string,
  dataVersion: number,
  desirability: number,
  highestScoringOtherBid: number,
  highestScoringOtherBidCurrency: string,
  interestGroupOwner: string,
  modifiedBid: number,
  renderURL: string,
  selectedBuyerAndSellerReportingId: string,
  topLevelSeller: string,
  topLevelSellerSignals: string,
  topWindowHostname: string,
};

type ReportWinBrowserSignals = {
  adCost: number,
  bid: number,
  bidCurrency: string,
  buyerAndSellerReportingId: string,
  buyerReportingId: string,
  componentSeller: string,
  dataVersion: number,
  highestScoringOtherBid: number,
  highestScoringOtherBidCurrency: string,
  interestGroupName: string,
  interestGroupOwner: string,
  kAnonStatus: KAnonStatus,
  madeHighestScoringOtherBid: boolean,
  modelingSignals: number,
  renderURL: string,
  selectedBuyerAndSellerReportingId: string,
  seller: string,
  topLevelSeller: string,
  topWindowHostname: string,
};

/* partial */ type RequestInit = {
  adAuctionHeaders: boolean,
};

type ScoreAdOutput = {
  allowComponentAuction: boolean,
  bid: number,
  bidCurrency: string,
  desirability: number,
  incomingBidInSellerCurrency: number,
};

type ScoringBrowserSignals = {
  adComponents: Array<string>,
  adComponentsCreativeScanningMetadata: Array<string | null>,
  bidCurrency: string,
  biddingDurationMsec: number,
  creativeScanningMetadata: string,
  crossOriginDataVersion: number,
  dataVersion: number,
  forDebuggingOnlyInCooldownOrLockout: boolean,
  interestGroupOwner: string,
  renderSize: string | string,
  renderURL: string,
  topWindowHostname: string,
};

type StorageInterestGroup = {
  adComponents: Array<AuctionAd>,
  additionalBidKey: string,
  ads: Array<AuctionAd>,
  adSizes: string | AuctionAdInterestGroupSize,
  bidCount: number,
  biddingLogicURL: string,
  biddingWasmHelperURL: string,
  enableBiddingSignalsPrioritization: boolean,
  estimatedSize: number,
  executionMode: string,
  joinCount: number,
  joiningOrigin: string,
  lifetimeMs: number,
  lifetimeRemainingMs: number,
  maxTrustedBiddingSignalsURLLength: number,
  name: string,
  owner: string,
  prevWinsMs: Array<PreviousWin>,
  priority: number,
  prioritySignalsOverrides: string | number,
  priorityVector: string | number,
  privateAggregationConfig: ProtectedAudiencePrivateAggregationConfig,
  sellerCapabilities: string | Array<string>,
  sizeGroups: string | Array<string>,
  timeSinceGroupJoinedMs: number,
  timeSinceLastUpdateMs: number,
  timeUntilNextUpdateMs: number,
  trustedBiddingSignalsCoordinator: string,
  trustedBiddingSignalsKeys: Array<string>,
  trustedBiddingSignalsSlotSizeMode: string,
  trustedBiddingSignalsURL: string,
  updateURL: string,
  userBiddingSignals: any,
};

declare class ForDebuggingOnly {
  reportAdAuctionLoss(url: string): void;
  reportAdAuctionWin(url: string): void;
}

/* partial */ declare class HTMLIFrameElement {
  adAuctionHeaders: boolean;
}

declare class InterestGroupBiddingAndScoringScriptRunnerGlobalScope
  extends InterestGroupScriptRunnerGlobalScope
{
  +forDebuggingOnly: ForDebuggingOnly;
  +realTimeReporting: RealTimeReporting;
}

declare class InterestGroupBiddingScriptRunnerGlobalScope
  extends InterestGroupBiddingAndScoringScriptRunnerGlobalScope
{
  setBid(oneOrManyBids?: GenerateBidOutput | Array<GenerateBidOutput>): boolean;
  setPriority(priority: number): void;
  setPrioritySignalsOverride(key: string, priority?: number | null): void;
}

declare class InterestGroupReportingScriptRunnerGlobalScope
  extends InterestGroupScriptRunnerGlobalScope
{
  registerAdBeacon(map: string | string): void;
  registerAdMacro(name: string, value: string): void;
  sendReportTo(url: string): void;
}

declare class InterestGroupScoringScriptRunnerGlobalScope
  extends InterestGroupBiddingAndScoringScriptRunnerGlobalScope {}

declare class InterestGroupScriptRunnerGlobalScope {
  +privateAggregation: PrivateAggregation | null;
  +protectedAudience: ProtectedAudienceUtilities;
}

/* partial */ declare class Navigator {
  joinAdInterestGroup(group: AuctionAdInterestGroup): void;
}

/* partial */ declare class Navigator {
  leaveAdInterestGroup(group?: AuctionAdInterestGroupKey): void;
}

/* partial */ declare class Navigator {
  clearOriginJoinedAdInterestGroups(
    owner: string,
    interestGroupsToKeep?: Array<string>,
  ): void;
}

/* partial */ declare class Navigator {
  +deprecatedRunAdAuctionEnforcesKAnonymity: boolean;

  runAdAuction(config: AuctionAdConfig): string | FencedFrameConfig | null;
}

/* partial */ declare class Navigator {
  canLoadAdAuctionFencedFrame(): boolean;
}

/* partial */ declare class Navigator {
  getInterestGroupAdAuctionData(config?: AdAuctionDataConfig): AdAuctionData;
}

/* partial */ declare class Navigator {
  createAuctionNonce(): string;
}

/* partial */ declare class Navigator {
  updateAdInterestGroups(): void;
}

/* partial */ declare class Navigator {
  +protectedAudience: ProtectedAudience;
}

declare class ProtectedAudience {
  queryFeatureSupport(feature: string): any;
}

declare class ProtectedAudienceUtilities {
  decodeUtf8(bytes: Uint8Array): string;
  encodeUtf8(input: string): Uint8Array;
}

declare class RealTimeReporting {
  contributeToHistogram(contribution: RealTimeContribution): void;
}
