type SyncEventInit = {
  lastChance: boolean,
  tag: string,
};

/* partial */ interface ServiceWorkerGlobalScope {
  onsync: EventHandler;
}

/* partial */ interface ServiceWorkerRegistration {
  +sync: SyncManager;
}

declare class SyncEvent extends ExtendableEvent {
  +lastChance: boolean;
  +tag: string;

  constructor(type: string, init: SyncEventInit): void;
}

declare class SyncManager {
  getTags(): Array<string>;
  register(tag: string): void;
}
