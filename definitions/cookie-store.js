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
  +changed: CookieListItem;
  +deleted: CookieListItem;

  constructor(type: string, eventInitDict?: CookieChangeEventInit): void;
}

declare class CookieStore extends EventTarget {
  onchange: EventHandler;

  delete(name: string): void;
  delete(options: CookieStoreDeleteOptions): void;
  get(name: string): CookieListItem | null;
  get(options?: CookieStoreGetOptions): CookieListItem | null;
  getAll(name: string): CookieList;
  getAll(options?: CookieStoreGetOptions): CookieList;
  set(name: string, value: string): void;
  set(options: CookieInit): void;
}

declare class CookieStoreManager {
  getSubscriptions(): Array<CookieStoreGetOptions>;
  subscribe(subscriptions: Array<CookieStoreGetOptions>): void;
  unsubscribe(subscriptions: Array<CookieStoreGetOptions>): void;
}

declare class ExtendableCookieChangeEvent extends ExtendableEvent {
  +changed: CookieListItem;
  +deleted: CookieListItem;

  constructor(
    type: string,
    eventInitDict?: ExtendableCookieChangeEventInit,
  ): void;
}

/* partial */ interface ServiceWorkerGlobalScope {
  +cookieStore: CookieStore;
  oncookiechange: EventHandler;
}

/* partial */ declare class ServiceWorkerRegistration {
  +cookies: CookieStoreManager;
}

/* partial */ interface Window {
  +cookieStore: CookieStore;
}
