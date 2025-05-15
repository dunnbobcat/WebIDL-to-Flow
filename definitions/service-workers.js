type RouterSource = RouterSourceDict | RouterSourceEnum;

type ClientType = 'window' | 'worker' | 'sharedworker' | 'all';

type FrameType = 'auxiliary' | 'top-level' | 'nested' | 'none';

type RouterSourceEnum =
  | 'cache'
  | 'fetch-event'
  | 'network'
  | 'race-network-and-fetch-handler';

type RunningStatus = 'running' | 'not-running';

type ServiceWorkerState =
  | 'parsed'
  | 'installing'
  | 'installed'
  | 'activating'
  | 'activated'
  | 'redundant';

type ServiceWorkerUpdateViaCache = 'imports' | 'all' | 'none';

type CacheQueryOptions = {
  ignoreMethod: boolean,
  ignoreSearch: boolean,
  ignoreVary: boolean,
};

type ClientQueryOptions = {
  includeUncontrolled: boolean,
  type: ClientType,
};

type ExtendableEventInit = {};

type ExtendableMessageEventInit = {
  data: any,
  lastEventId: string,
  origin: string,
  ports: Array<MessagePort>,
  source: Client | ServiceWorker | MessagePort | null,
};

type FetchEventInit = {
  clientId: string,
  handled: void,
  preloadResponse: any,
  replacesClientId: string,
  request: Request,
  resultingClientId: string,
};

type MultiCacheQueryOptions = {
  cacheName: string,
};

type NavigationPreloadState = {
  enabled: boolean,
  headerValue: string,
};

type RegistrationOptions = {
  scope: string,
  type: WorkerType,
  updateViaCache: ServiceWorkerUpdateViaCache,
};

type RouterCondition = {
  not: RouterCondition,
  or: Array<RouterCondition>,
  requestDestination: RequestDestination,
  requestMethod: string,
  requestMode: RequestMode,
  runningStatus: RunningStatus,
  urlPattern: URLPatternCompatible,
};

type RouterRule = {
  condition: RouterCondition,
  source: RouterSource,
};

type RouterSourceDict = {
  cacheName: string,
};

declare class Cache {
  add(request: RequestInfo): void;
  addAll(requests: Array<RequestInfo>): void;
  delete(request: RequestInfo, options?: CacheQueryOptions): boolean;
  keys(request?: RequestInfo, options?: CacheQueryOptions): Request;
  match(request: RequestInfo, options?: CacheQueryOptions): Response | void;
  matchAll(request?: RequestInfo, options?: CacheQueryOptions): Response;
  put(request: RequestInfo, response: Response): void;
}

declare class CacheStorage {
  delete(cacheName: string): boolean;
  has(cacheName: string): boolean;
  keys(): Array<string>;
  match(
    request: RequestInfo,
    options?: MultiCacheQueryOptions,
  ): Response | void;
  open(cacheName: string): Cache;
}

declare class Client {
  +frameType: FrameType;
  +id: string;
  +type: ClientType;
  +url: string;

  postMessage(message: any, transfer: Array<Object>): void;
  postMessage(message: any, options?: StructuredSerializeOptions): void;
}

declare class Clients {
  claim(): void;
  get(id: string): Client | void;
  matchAll(options?: ClientQueryOptions): Client;
  openWindow(url: string): WindowClient | null;
}

declare class ExtendableEvent extends Event {
  constructor(type: string, eventInitDict?: ExtendableEventInit): void;

  waitUntil(f: any): void;
}

declare class ExtendableMessageEvent extends ExtendableEvent {
  +data: any;
  +lastEventId: string;
  +origin: string;
  +ports: MessagePort;
  +source: Client | ServiceWorker | MessagePort | null;

  constructor(type: string, eventInitDict?: ExtendableMessageEventInit): void;
}

declare class FetchEvent extends ExtendableEvent {
  +clientId: string;
  +handled: void;
  +preloadResponse: any;
  +replacesClientId: string;
  +request: Request;
  +resultingClientId: string;

  constructor(type: string, eventInitDict: FetchEventInit): void;

  respondWith(r: Response): void;
}

declare class InstallEvent extends ExtendableEvent {
  constructor(type: string, eventInitDict?: ExtendableEventInit): void;

  addRoutes(rules: RouterRule | Array<RouterRule>): void;
}

declare class NavigationPreloadManager {
  disable(): void;
  enable(): void;
  getState(): NavigationPreloadState;
  setHeaderValue(value: string): void;
}

/* partial */ interface Navigator {
  +serviceWorker: ServiceWorkerContainer;
}

declare class ServiceWorker extends EventTarget mixins mixin$AbstractWorker {
  onstatechange: EventHandler;
  +scriptURL: string;
  +state: ServiceWorkerState;

  postMessage(message: any, transfer: Array<Object>): void;
  postMessage(message: any, options?: StructuredSerializeOptions): void;
}

declare class ServiceWorkerContainer extends EventTarget {
  +controller: ServiceWorker | null;
  oncontrollerchange: EventHandler;
  onmessage: EventHandler;
  onmessageerror: EventHandler;
  +ready: ServiceWorkerRegistration;

  getRegistration(clientURL?: string): ServiceWorkerRegistration | void;
  getRegistrations(): ServiceWorkerRegistration;
  register(
    scriptURL: TrustedScriptURL | string,
    options?: RegistrationOptions,
  ): ServiceWorkerRegistration;
  startMessages(): void;
}

declare class ServiceWorkerGlobalScope extends WorkerGlobalScope {
  +clients: Clients;
  onactivate: EventHandler;
  onfetch: EventHandler;
  oninstall: EventHandler;
  onmessage: EventHandler;
  onmessageerror: EventHandler;
  +registration: ServiceWorkerRegistration;
  +serviceWorker: ServiceWorker;

  skipWaiting(): void;
}

declare class ServiceWorkerRegistration extends EventTarget {
  +active: ServiceWorker | null;
  +installing: ServiceWorker | null;
  +navigationPreload: NavigationPreloadManager;
  onupdatefound: EventHandler;
  +scope: string;
  +updateViaCache: ServiceWorkerUpdateViaCache;
  +waiting: ServiceWorker | null;

  unregister(): boolean;
  update(): ServiceWorkerRegistration;
}

declare class WindowClient extends Client {
  +ancestorOrigins: string;
  +focused: boolean;
  +visibilityState: DocumentVisibilityState;

  focus(): WindowClient;
  navigate(url: string): WindowClient | null;
}

/* partial */ interface WorkerNavigator {
  +serviceWorker: ServiceWorkerContainer;
}

/* partial */ declare class mixin$WindowOrWorkerGlobalScope {
  +caches: CacheStorage;
}
