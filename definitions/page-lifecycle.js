type ClientLifecycleState = 'active' | 'frozen';

/* partial */ interface Client {
  +lifecycleState: ClientLifecycleState;
}

/* partial */ interface Document {
  onfreeze: EventHandler;
  onresume: EventHandler;
  +wasDiscarded: boolean;
}
