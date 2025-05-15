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
  ): BackgroundFetchRegistration;
  get(id: string): BackgroundFetchRegistration | null;
  getIds(): Array<string>;
}

declare class BackgroundFetchRecord {
  +request: Request;
  +responseReady: Response;
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

  abort(): boolean;
  match(
    request: RequestInfo,
    options?: CacheQueryOptions,
  ): BackgroundFetchRecord;
  matchAll(
    request?: RequestInfo,
    options?: CacheQueryOptions,
  ): Array<BackgroundFetchRecord>;
}

declare class BackgroundFetchUpdateUIEvent extends BackgroundFetchEvent {
  constructor(type: string, init: BackgroundFetchEventInit): void;

  updateUI(options?: BackgroundFetchUIOptions): void;
}

/* partial */ interface ServiceWorkerGlobalScope {
  onbackgroundfetchabort: EventHandler;
  onbackgroundfetchclick: EventHandler;
  onbackgroundfetchfail: EventHandler;
  onbackgroundfetchsuccess: EventHandler;
}

/* partial */ interface ServiceWorkerRegistration {
  +backgroundFetch: BackgroundFetchManager;
}
