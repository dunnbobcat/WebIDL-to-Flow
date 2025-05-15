type SyncEventInit = {
  lastChance: boolean,
  tag: string,
};

/* partial */ declare class ServiceWorkerGlobalScope {
  onsync: EventHandler;
}

/* partial */ declare class ServiceWorkerRegistration {
  +sync: SyncManager;
}

declare class SyncEvent extends ExtendableEvent {
  +lastChance: boolean;
  +tag: string;

  constructor(type: string, init: SyncEventInit): void;
}

declare class SyncManager {
  getTags(): Promise<Array<string>>;
  register(tag: string): Promise<void>;
}
