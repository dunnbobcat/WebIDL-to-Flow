type ClientLifecycleState = 'active' | 'frozen';

/* partial */ declare class Client {
  +lifecycleState: ClientLifecycleState;
}

/* partial */ declare class Document {
  onfreeze: EventHandler;
  onresume: EventHandler;
  +wasDiscarded: boolean;
}
