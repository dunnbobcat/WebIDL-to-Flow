type SameSiteCookiesType = 'all' | 'none';

type SharedWorkerOptions = {
  sameSiteCookies: SameSiteCookiesType,
};

type StorageAccessTypes = {
  all: boolean,
  BroadcastChannel: boolean,
  caches: boolean,
  cookies: boolean,
  createObjectURL: boolean,
  estimate: boolean,
  getDirectory: boolean,
  indexedDB: boolean,
  localStorage: boolean,
  locks: boolean,
  revokeObjectURL: boolean,
  sessionStorage: boolean,
  SharedWorker: boolean,
};

/* partial */ declare class Document {
  hasUnpartitionedCookieAccess(): Promise<boolean>;
}

declare class StorageAccessHandle {
  +caches: CacheStorage;
  +indexedDB: IDBFactory;
  +localStorage: Storage;
  +locks: LockManager;
  +sessionStorage: Storage;

  BroadcastChannel(name: string): BroadcastChannel;
  createObjectURL(obj: Blob | MediaSource): string;
  estimate(): Promise<StorageEstimate>;
  getDirectory(): Promise<FileSystemDirectoryHandle>;
  revokeObjectURL(url: string): void;
  SharedWorker(
    scriptURL: string,
    options?: string | SharedWorkerOptions,
  ): SharedWorker;
}
