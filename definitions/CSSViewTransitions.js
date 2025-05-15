type UpdateCallback = () => any;

/* partial */ interface Document {
  startViewTransition(updateCallback?: UpdateCallback | null): ViewTransition;
}

declare class ViewTransition {
  +finished: void;
  +ready: void;
  +updateCallbackDone: void;

  skipTransition(): void;
}
