type BackgroundSyncOptions = {
  minInterval: number,
};

type PeriodicSyncEventInit = {
  tag: string,
};

declare class PeriodicSyncEvent extends ExtendableEvent {
  +tag: string;

  constructor(type: string, init: PeriodicSyncEventInit): void;
}

declare class PeriodicSyncManager {
  getTags(): Promise<Array<string>>;
  register(tag: string, options?: BackgroundSyncOptions): Promise<void>;
  unregister(tag: string): Promise<void>;
}

/* partial */ declare class ServiceWorkerGlobalScope {
  onperiodicsync: EventHandler;
}

/* partial */ declare class ServiceWorkerRegistration {
  +periodicSync: PeriodicSyncManager;
}
