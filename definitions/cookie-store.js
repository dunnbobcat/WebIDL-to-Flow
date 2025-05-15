type CookieList = Array<CookieListItem>;

type CookieSameSite = 'strict' | 'lax' | 'none';

type CookieChangeEventInit = {
  changed: CookieList,
  deleted: CookieList,
};

type CookieInit = {
  domain: string | null,
  expires: number | null,
  name: string,
  partitioned: boolean,
  path: string,
  sameSite: CookieSameSite,
  value: string,
};

type CookieListItem = {
  domain: string | null,
  expires: number | null,
  name: string,
  partitioned: boolean,
  path: string,
  sameSite: CookieSameSite,
  secure: boolean,
  value: string,
};

type CookieStoreDeleteOptions = {
  domain: string | null,
  name: string,
  partitioned: boolean,
  path: string,
};

type CookieStoreGetOptions = {
  name: string,
  url: string,
};

type ExtendableCookieChangeEventInit = {
  changed: CookieList,
  deleted: CookieList,
};

declare class CookieChangeEvent extends Event {
  +changed: $ReadOnlyArray<CookieListItem>;
  +deleted: $ReadOnlyArray<CookieListItem>;

  constructor(type: string, eventInitDict?: CookieChangeEventInit): void;
}

declare class CookieStore extends EventTarget {
  onchange: EventHandler;

  delete(name: string): Promise<void>;
  delete(options: CookieStoreDeleteOptions): Promise<void>;
  get(name: string): Promise<CookieListItem | null>;
  get(options?: CookieStoreGetOptions): Promise<CookieListItem | null>;
  getAll(name: string): Promise<CookieList>;
  getAll(options?: CookieStoreGetOptions): Promise<CookieList>;
  set(name: string, value: string): Promise<void>;
  set(options: CookieInit): Promise<void>;
}

declare class CookieStoreManager {
  getSubscriptions(): Promise<Array<CookieStoreGetOptions>>;
  subscribe(subscriptions: Array<CookieStoreGetOptions>): Promise<void>;
  unsubscribe(subscriptions: Array<CookieStoreGetOptions>): Promise<void>;
}

declare class ExtendableCookieChangeEvent extends ExtendableEvent {
  +changed: $ReadOnlyArray<CookieListItem>;
  +deleted: $ReadOnlyArray<CookieListItem>;

  constructor(
    type: string,
    eventInitDict?: ExtendableCookieChangeEventInit,
  ): void;
}

/* partial */ declare class ServiceWorkerGlobalScope {
  +cookieStore: CookieStore;
  oncookiechange: EventHandler;
}

/* partial */ declare class ServiceWorkerRegistration {
  +cookies: CookieStoreManager;
}

/* partial */ declare class Window {
  +cookieStore: CookieStore;
}
