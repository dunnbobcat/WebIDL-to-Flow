type StorageEstimate = {
  quota: number,
  usage: number,
};

declare class StorageManager {
  estimate(): Promise<StorageEstimate>;
  persist(): Promise<boolean>;
  persisted(): Promise<boolean>;
}

declare class mixin$NavigatorStorage {
  +storage: StorageManager;
}
