type StorageBucketOptions = {
  expires: number,
  persisted: boolean,
  quota: number,
};

declare class StorageBucket {
  +caches: CacheStorage;
  +indexedDB: IDBFactory;
  +name: string;

  estimate(): StorageEstimate;
  expires(): number | null;
  getDirectory(): FileSystemDirectoryHandle;
  persist(): boolean;
  persisted(): boolean;
  setExpires(expires: number): void;
}

declare class StorageBucketManager {
  delete(name: string): void;
  keys(): Array<string>;
  open(name: string, options?: StorageBucketOptions): StorageBucket;
}

declare class mixin$NavigatorStorageBuckets {
  +storageBuckets: StorageBucketManager;
}
