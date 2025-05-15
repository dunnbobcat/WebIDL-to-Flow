type ReportEventType = FenceEvent | string;

type UrnOrConfig = string | FencedFrameConfig;

type FenceReportingDestination =
  | 'buyer'
  | 'seller'
  | 'component-seller'
  | 'direct-seller'
  | 'shared-storage-select-url';

type OpaqueProperty = 'opaque';

type FenceEvent = {
  crossOriginExposed: boolean,
  destination: Array<FenceReportingDestination>,
  destinationURL: string,
  eventData: string,
  eventType: string,
  once: boolean,
};

declare class Fence {
  disableUntrustedNetwork(): void;
  getNestedConfigs(): Array<FencedFrameConfig>;
  notifyEvent(event: Event): void;
  reportEvent(event?: ReportEventType): void;
  setReportEventDataForAutomaticBeacons(event?: FenceEvent): void;
}

declare class FencedFrameConfig {
  constructor(url: string): void;

  setSharedStorageContext(contextString: string): void;
}

declare class HTMLFencedFrameElement extends HTMLElement {
  allow: string;
  config: FencedFrameConfig | null;
  height: string;
  +sandbox: DOMTokenList;
  width: string;

  constructor(): void;
}

/* partial */ declare class Navigator {
  adAuctionComponents(numAdComponents: number): Array<string>;
  deprecatedReplaceInURN(
    urnOrConfig: UrnOrConfig,
    replacements: string | string,
  ): void;
  deprecatedURNtoURL(urnOrConfig: UrnOrConfig, send_reports?: boolean): string;
}

/* partial */ declare class Window {
  +fence: Fence | null;
}

/* partial */ declare class mixin$GlobalEventHandlers {
  onfencedtreeclick: EventHandler;
}
