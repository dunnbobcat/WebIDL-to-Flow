type StorageBucketOptions = {
  expires: number,
  persisted: boolean,
  quota: number,
};

declare class StorageBucket {
  +caches: CacheStorage;
  +indexedDB: IDBFactory;
  +name: string;

  estimate(): Promise<StorageEstimate>;
  expires(): Promise<number | null>;
  getDirectory(): Promise<FileSystemDirectoryHandle>;
  persist(): Promise<boolean>;
  persisted(): Promise<boolean>;
  setExpires(expires: number): Promise<void>;
}

declare class StorageBucketManager {
  delete(name: string): Promise<void>;
  keys(): Promise<Array<string>>;
  open(name: string, options?: StorageBucketOptions): Promise<StorageBucket>;
}

declare class mixin$NavigatorStorageBuckets {
  +storageBuckets: StorageBucketManager;
}
