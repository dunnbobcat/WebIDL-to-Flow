type BodyInit = ReadableStream | XMLHttpRequestBodyInit;

type HeadersInit = Array<Array<ByteString>> | ByteString | ByteString;

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
  method: ByteString,
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
  statusText: ByteString,
  headers: HeadersInit,
};

interface Body {
  +body: ReadableStream | null;
  +bodyUsed: boolean;

  arrayBuffer(): ArrayBuffer;
  blob(): Blob;
  bytes(): Uint8Array;
  formData(): FormData;
  json(): any;
  text(): string;
}

/* partial */ interface WindowOrWorkerGlobalScope {
  fetch(input: RequestInfo, init?: RequestInit): Response;
}

declare class Headers {
  constructor(init?: HeadersInit): void;

  @@iterator(): Iterator<ByteString, ByteString>;

  append(name: ByteString, value: ByteString): void;
  delete(name: ByteString): void;
  get(name: ByteString): ByteString | null;
  getSetCookie(): Array<ByteString>;
  has(name: ByteString): boolean;
  set(name: ByteString, value: ByteString): void;
}

declare class Request mixins Body {
  +cache: RequestCache;
  +credentials: RequestCredentials;
  +destination: RequestDestination;
  +duplex: RequestDuplex;
  +headers: Headers;
  +integrity: string;
  +isHistoryNavigation: boolean;
  +isReloadNavigation: boolean;
  +keepalive: boolean;
  +method: ByteString;
  +mode: RequestMode;
  +redirect: RequestRedirect;
  +referrer: string;
  +referrerPolicy: ReferrerPolicy;
  +signal: AbortSignal;
  +url: string;

  constructor(input: RequestInfo, init?: RequestInit): void;

  clone(): Request;
}

declare class Response mixins Body {
  +headers: Headers;
  +ok: boolean;
  +redirected: boolean;
  +status: number;
  +statusText: ByteString;
  +type: ResponseType;
  +url: string;

  constructor(body?: BodyInit | null, init?: ResponseInit): void;

  static error(): Response;
  static json(data: any, init?: ResponseInit): Response;
  static redirect(url: string, status?: number): Response;
  clone(): Response;
}
