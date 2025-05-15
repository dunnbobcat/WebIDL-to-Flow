type BodyInit = ReadableStream | XMLHttpRequestBodyInit;

type HeadersInit = Array<Array<string>> | string | string;

type RequestInfo = Request | string;

type XMLHttpRequestBodyInit =
  | Blob
  | BufferSource
  | FormData
  | URLSearchParams
  | string;

type RequestCache =
  | 'default'
  | 'no-store'
  | 'reload'
  | 'no-cache'
  | 'force-cache'
  | 'only-if-cached';

type RequestCredentials = 'omit' | 'same-origin' | 'include';

type RequestDestination =
  | ''
  | 'audio'
  | 'audioworklet'
  | 'document'
  | 'embed'
  | 'font'
  | 'frame'
  | 'iframe'
  | 'image'
  | 'json'
  | 'manifest'
  | 'object'
  | 'paintworklet'
  | 'report'
  | 'script'
  | 'sharedworker'
  | 'style'
  | 'track'
  | 'video'
  | 'worker'
  | 'xslt';

type RequestDuplex = 'half';

type RequestMode = 'navigate' | 'same-origin' | 'no-cors' | 'cors';

type RequestPriority = 'high' | 'low' | 'auto';

type RequestRedirect = 'follow' | 'error' | 'manual';

type ResponseType =
  | 'basic'
  | 'cors'
  | 'default'
  | 'error'
  | 'opaque'
  | 'opaqueredirect';

type RequestInit = {
  method: string,
  headers: HeadersInit,
  body: BodyInit | null,
  referrer: string,
  referrerPolicy: ReferrerPolicy,
  mode: RequestMode,
  credentials: RequestCredentials,
  cache: RequestCache,
  redirect: RequestRedirect,
  integrity: string,
  keepalive: boolean,
  signal: AbortSignal | null,
  duplex: RequestDuplex,
  priority: RequestPriority,
  window: any,
};

type ResponseInit = {
  status: number,
  statusText: string,
  headers: HeadersInit,
};

declare class Headers {
  constructor(init?: HeadersInit): void;

  @@iterator(): Iterator<string, string>;

  append(name: string, value: string): void;
  delete(name: string): void;
  get(name: string): string | null;
  getSetCookie(): Array<string>;
  has(name: string): boolean;
  set(name: string, value: string): void;
}

declare class Request mixins mixin$Body {
  +cache: RequestCache;
  +credentials: RequestCredentials;
  +destination: RequestDestination;
  +duplex: RequestDuplex;
  +headers: Headers;
  +integrity: string;
  +isHistoryNavigation: boolean;
  +isReloadNavigation: boolean;
  +keepalive: boolean;
  +method: string;
  +mode: RequestMode;
  +redirect: RequestRedirect;
  +referrer: string;
  +referrerPolicy: ReferrerPolicy;
  +signal: AbortSignal;
  +url: string;

  constructor(input: RequestInfo, init?: RequestInit): void;

  clone(): Request;
}

declare class Response mixins mixin$Body {
  +headers: Headers;
  +ok: boolean;
  +redirected: boolean;
  +status: number;
  +statusText: string;
  +type: ResponseType;
  +url: string;

  constructor(body?: BodyInit | null, init?: ResponseInit): void;

  static error(): Response;
  static json(data: any, init?: ResponseInit): Response;
  static redirect(url: string, status?: number): Response;
  clone(): Response;
}

declare class mixin$Body {
  +body: ReadableStream | null;
  +bodyUsed: boolean;

  arrayBuffer(): ArrayBuffer;
  blob(): Blob;
  bytes(): Uint8Array;
  formData(): FormData;
  json(): any;
  text(): string;
}
