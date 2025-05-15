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
  getTags(): Array<string>;
  register(tag: string, options?: BackgroundSyncOptions): void;
  unregister(tag: string): void;
}

/* partial */ interface ServiceWorkerGlobalScope {
  onperiodicsync: EventHandler;
}

/* partial */ declare class ServiceWorkerRegistration {
  +periodicSync: PeriodicSyncManager;
}
