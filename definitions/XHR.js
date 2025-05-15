type FormDataEntryValue = File | string;

type XMLHttpRequestResponseType =
  | ''
  | 'arraybuffer'
  | 'blob'
  | 'document'
  | 'json'
  | 'text';

type ProgressEventInit = {
  lengthComputable: boolean,
  loaded: number,
  total: number,
};

declare class FormData {
  constructor(form?: HTMLFormElement, submitter?: HTMLElement | null): void;

  @@iterator(): Iterator<string, FormDataEntryValue>;

  append(name: string, value: string): void;
  append(name: string, blobValue: Blob, filename?: string): void;
  delete(name: string): void;
  get(name: string): FormDataEntryValue | null;
  getAll(name: string): Array<FormDataEntryValue>;
  has(name: string): boolean;
  set(name: string, value: string): void;
  set(name: string, blobValue: Blob, filename?: string): void;
}

declare class ProgressEvent extends Event {
  +lengthComputable: boolean;
  +loaded: number;
  +total: number;

  constructor(type: string, eventInitDict?: ProgressEventInit): void;
}

declare class XMLHttpRequest extends XMLHttpRequestEventTarget {
  static +DONE: 4;
  static +HEADERS_RECEIVED: 2;
  static +LOADING: 3;
  static +OPENED: 1;
  static +UNSENT: 0;

  onreadystatechange: EventHandler;
  +readyState: number;
  +response: any;
  +responseText: string;
  responseType: XMLHttpRequestResponseType;
  +responseURL: string;
  +responseXML: Document | null;
  +status: number;
  +statusText: ByteString;
  timeout: number;
  +upload: XMLHttpRequestUpload;
  withCredentials: boolean;

  constructor(): void;

  abort(): void;
  getAllResponseHeaders(): ByteString;
  getResponseHeader(name: ByteString): ByteString | null;
  open(method: ByteString, url: string): void;
  open(
    method: ByteString,
    url: string,
    async: boolean,
    username?: string | null,
    password?: string | null,
  ): void;
  overrideMimeType(mime: string): void;
  send(body?: Document | XMLHttpRequestBodyInit | null): void;
  setRequestHeader(name: ByteString, value: ByteString): void;
}

declare class XMLHttpRequestEventTarget extends EventTarget {
  onabort: EventHandler;
  onerror: EventHandler;
  onload: EventHandler;
  onloadend: EventHandler;
  onloadstart: EventHandler;
  onprogress: EventHandler;
  ontimeout: EventHandler;
}

declare class XMLHttpRequestUpload extends XMLHttpRequestEventTarget {}
