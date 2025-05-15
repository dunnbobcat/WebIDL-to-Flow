type BackgroundFetchFailureReason =
  | ''
  | 'aborted'
  | 'bad-status'
  | 'fetch-error'
  | 'quota-exceeded'
  | 'download-total-exceeded';

type BackgroundFetchResult = '' | 'success' | 'failure';

type BackgroundFetchEventInit = {
  registration: BackgroundFetchRegistration,
};

type BackgroundFetchOptions = {
  downloadTotal: number,
  icons: Array<ImageResource>,
  title: string,
};

type BackgroundFetchUIOptions = {
  icons: Array<ImageResource>,
  title: string,
};

declare class BackgroundFetchEvent extends ExtendableEvent {
  +registration: BackgroundFetchRegistration;

  constructor(type: string, init: BackgroundFetchEventInit): void;
}

declare class BackgroundFetchManager {
  fetch(
    id: string,
    requests: RequestInfo | Array<RequestInfo>,
    options?: BackgroundFetchOptions,
  ): Promise<BackgroundFetchRegistration>;
  get(id: string): Promise<BackgroundFetchRegistration | null>;
  getIds(): Promise<Array<string>>;
}

declare class BackgroundFetchRecord {
  +request: Request;
  +responseReady: Promise<Response>;
}

declare class BackgroundFetchRegistration extends EventTarget {
  +downloaded: number;
  +downloadTotal: number;
  +failureReason: BackgroundFetchFailureReason;
  +id: string;
  onprogress: EventHandler;
  +recordsAvailable: boolean;
  +result: BackgroundFetchResult;
  +uploaded: number;
  +uploadTotal: number;

  abort(): Promise<boolean>;
  match(
    request: RequestInfo,
    options?: CacheQueryOptions,
  ): Promise<BackgroundFetchRecord>;
  matchAll(
    request?: RequestInfo,
    options?: CacheQueryOptions,
  ): Promise<Array<BackgroundFetchRecord>>;
}

declare class BackgroundFetchUpdateUIEvent extends BackgroundFetchEvent {
  constructor(type: string, init: BackgroundFetchEventInit): void;

  updateUI(options?: BackgroundFetchUIOptions): Promise<void>;
}

/* partial */ declare class ServiceWorkerGlobalScope {
  onbackgroundfetchabort: EventHandler;
  onbackgroundfetchclick: EventHandler;
  onbackgroundfetchfail: EventHandler;
  onbackgroundfetchsuccess: EventHandler;
}

/* partial */ declare class ServiceWorkerRegistration {
  +backgroundFetch: BackgroundFetchManager;
}
