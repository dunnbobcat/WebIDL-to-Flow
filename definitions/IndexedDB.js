type IDBCursorDirection = 'next' | 'nextunique' | 'prev' | 'prevunique';

type IDBRequestReadyState = 'pending' | 'done';

type IDBTransactionDurability = 'default' | 'strict' | 'relaxed';

type IDBTransactionMode = 'readonly' | 'readwrite' | 'versionchange';

type IDBDatabaseInfo = {
  name: string,
  version: number,
};

type IDBIndexParameters = {
  multiEntry: boolean,
  unique: boolean,
};

type IDBObjectStoreParameters = {
  autoIncrement: boolean,
  keyPath: string | Array<string> | null,
};

type IDBTransactionOptions = {
  durability: IDBTransactionDurability,
};

type IDBVersionChangeEventInit = {
  newVersion: number | null,
  oldVersion: number,
};

declare class IDBCursor {
  +direction: IDBCursorDirection;
  +key: any;
  +primaryKey: any;
  +request: IDBRequest;
  +source: IDBObjectStore | IDBIndex;

  advance(count: number): void;
  continue(key?: any): void;
  continuePrimaryKey(key: any, primaryKey: any): void;
  delete(): IDBRequest;
  update(value: any): IDBRequest;
}

declare class IDBCursorWithValue extends IDBCursor {
  +value: any;
}

declare class IDBDatabase extends EventTarget {
  +name: string;
  +objectStoreNames: DOMStringList;
  onabort: EventHandler;
  onclose: EventHandler;
  onerror: EventHandler;
  onversionchange: EventHandler;
  +version: number;

  close(): void;
  createObjectStore(
    name: string,
    options?: IDBObjectStoreParameters,
  ): IDBObjectStore;
  deleteObjectStore(name: string): void;
  transaction(
    storeNames: string | Array<string>,
    mode?: IDBTransactionMode,
    options?: IDBTransactionOptions,
  ): IDBTransaction;
}

declare class IDBFactory {
  cmp(first: any, second: any): number;
  databases(): Array<IDBDatabaseInfo>;
  deleteDatabase(name: string): IDBOpenDBRequest;
  open(name: string, version?: number): IDBOpenDBRequest;
}

declare class IDBIndex {
  +keyPath: any;
  +multiEntry: boolean;
  name: string;
  +objectStore: IDBObjectStore;
  +unique: boolean;

  count(query?: any): IDBRequest;
  get(query: any): IDBRequest;
  getAll(query?: any, count?: number): IDBRequest;
  getAllKeys(query?: any, count?: number): IDBRequest;
  getKey(query: any): IDBRequest;
  openCursor(query?: any, direction?: IDBCursorDirection): IDBRequest;
  openKeyCursor(query?: any, direction?: IDBCursorDirection): IDBRequest;
}

declare class IDBKeyRange {
  +lower: any;
  +lowerOpen: boolean;
  +upper: any;
  +upperOpen: boolean;

  static bound(
    lower: any,
    upper: any,
    lowerOpen?: boolean,
    upperOpen?: boolean,
  ): IDBKeyRange;
  static lowerBound(lower: any, open?: boolean): IDBKeyRange;
  static only(value: any): IDBKeyRange;
  static upperBound(upper: any, open?: boolean): IDBKeyRange;
  includes(key: any): boolean;
}

declare class IDBObjectStore {
  +autoIncrement: boolean;
  +indexNames: DOMStringList;
  +keyPath: any;
  name: string;
  +transaction: IDBTransaction;

  add(value: any, key?: any): IDBRequest;
  clear(): IDBRequest;
  count(query?: any): IDBRequest;
  createIndex(
    name: string,
    keyPath: string | Array<string>,
    options?: IDBIndexParameters,
  ): IDBIndex;
  delete(query: any): IDBRequest;
  deleteIndex(name: string): void;
  get(query: any): IDBRequest;
  getAll(query?: any, count?: number): IDBRequest;
  getAllKeys(query?: any, count?: number): IDBRequest;
  getKey(query: any): IDBRequest;
  index(name: string): IDBIndex;
  openCursor(query?: any, direction?: IDBCursorDirection): IDBRequest;
  openKeyCursor(query?: any, direction?: IDBCursorDirection): IDBRequest;
  put(value: any, key?: any): IDBRequest;
}

declare class IDBOpenDBRequest extends IDBRequest {
  onblocked: EventHandler;
  onupgradeneeded: EventHandler;
}

declare class IDBRequest extends EventTarget {
  +error: DOMException | null;
  onerror: EventHandler;
  onsuccess: EventHandler;
  +readyState: IDBRequestReadyState;
  +result: any;
  +source: IDBObjectStore | IDBIndex | IDBCursor | null;
  +transaction: IDBTransaction | null;
}

declare class IDBTransaction extends EventTarget {
  +db: IDBDatabase;
  +durability: IDBTransactionDurability;
  +error: DOMException | null;
  +mode: IDBTransactionMode;
  +objectStoreNames: DOMStringList;
  onabort: EventHandler;
  oncomplete: EventHandler;
  onerror: EventHandler;

  abort(): void;
  commit(): void;
  objectStore(name: string): IDBObjectStore;
}

declare class IDBVersionChangeEvent extends Event {
  +newVersion: number | null;
  +oldVersion: number;

  constructor(type: string, eventInitDict?: IDBVersionChangeEventInit): void;
}

/* partial */ declare class mixin$WindowOrWorkerGlobalScope {
  +indexedDB: IDBFactory;
}
