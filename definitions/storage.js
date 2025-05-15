type StorageEstimate = {
  quota: number,
  usage: number,
};

declare class StorageManager {
  estimate(): StorageEstimate;
  persist(): boolean;
  persisted(): boolean;
}

declare class mixin$NavigatorStorage {
  +storage: StorageManager;
}
