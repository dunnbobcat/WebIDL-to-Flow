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
  handled: Promise<void>,
  preloadResponse: Promise<any>,
  replacesClientId: string,
  request: Request,
  resultingClientId: string,
};

type MultiCacheQueryOptions = {
  cacheName: string,
  ignoreMethod: boolean,
  ignoreSearch: boolean,
  ignoreVary: boolean,
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
  add(request: RequestInfo): Promise<void>;
  addAll(requests: Array<RequestInfo>): Promise<void>;
  delete(request: RequestInfo, options?: CacheQueryOptions): Promise<boolean>;
  keys(
    request?: RequestInfo,
    options?: CacheQueryOptions,
  ): Promise<$ReadOnlyArray<Request>>;
  match(
    request: RequestInfo,
    options?: CacheQueryOptions,
  ): Promise<Response | void>;
  matchAll(
    request?: RequestInfo,
    options?: CacheQueryOptions,
  ): Promise<$ReadOnlyArray<Response>>;
  put(request: RequestInfo, response: Response): Promise<void>;
}

declare class CacheStorage {
  delete(cacheName: string): Promise<boolean>;
  has(cacheName: string): Promise<boolean>;
  keys(): Promise<Array<string>>;
  match(
    request: RequestInfo,
    options?: MultiCacheQueryOptions,
  ): Promise<Response | void>;
  open(cacheName: string): Promise<Cache>;
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
  claim(): Promise<void>;
  get(id: string): Promise<Client | void>;
  matchAll(options?: ClientQueryOptions): Promise<$ReadOnlyArray<Client>>;
  openWindow(url: string): Promise<WindowClient | null>;
}

declare class ExtendableEvent extends Event {
  constructor(type: string, eventInitDict?: ExtendableEventInit): void;

  waitUntil(f: Promise<any>): void;
}

declare class ExtendableMessageEvent extends ExtendableEvent {
  +data: any;
  +lastEventId: string;
  +origin: string;
  +ports: $ReadOnlyArray<MessagePort>;
  +source: Client | ServiceWorker | MessagePort | null;

  constructor(type: string, eventInitDict?: ExtendableMessageEventInit): void;
}

declare class FetchEvent extends ExtendableEvent {
  +clientId: string;
  +handled: Promise<void>;
  +preloadResponse: Promise<any>;
  +replacesClientId: string;
  +request: Request;
  +resultingClientId: string;

  constructor(type: string, eventInitDict: FetchEventInit): void;

  respondWith(r: Promise<Response>): void;
}

declare class InstallEvent extends ExtendableEvent {
  constructor(type: string, eventInitDict?: ExtendableEventInit): void;

  addRoutes(rules: RouterRule | Array<RouterRule>): Promise<void>;
}

declare class NavigationPreloadManager {
  disable(): Promise<void>;
  enable(): Promise<void>;
  getState(): Promise<NavigationPreloadState>;
  setHeaderValue(value: string): Promise<void>;
}

/* partial */ declare class Navigator {
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
  +ready: Promise<ServiceWorkerRegistration>;

  getRegistration(
    clientURL?: string,
  ): Promise<ServiceWorkerRegistration | void>;
  getRegistrations(): Promise<$ReadOnlyArray<ServiceWorkerRegistration>>;
  register(
    scriptURL: TrustedScriptURL | string,
    options?: RegistrationOptions,
  ): Promise<ServiceWorkerRegistration>;
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

  skipWaiting(): Promise<void>;
}

declare class ServiceWorkerRegistration extends EventTarget {
  +active: ServiceWorker | null;
  +installing: ServiceWorker | null;
  +navigationPreload: NavigationPreloadManager;
  onupdatefound: EventHandler;
  +scope: string;
  +updateViaCache: ServiceWorkerUpdateViaCache;
  +waiting: ServiceWorker | null;

  unregister(): Promise<boolean>;
  update(): Promise<ServiceWorkerRegistration>;
}

declare class WindowClient extends Client {
  +ancestorOrigins: $ReadOnlyArray<string>;
  +focused: boolean;
  +visibilityState: DocumentVisibilityState;

  focus(): Promise<WindowClient>;
  navigate(url: string): Promise<WindowClient | null>;
}

/* partial */ declare class WorkerNavigator {
  +serviceWorker: ServiceWorkerContainer;
}

/* partial */ declare class mixin$WindowOrWorkerGlobalScope {
  +caches: CacheStorage;
}
