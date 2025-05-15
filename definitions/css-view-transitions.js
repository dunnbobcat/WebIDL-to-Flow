type ViewTransitionUpdateCallback = () => Promise<any>;

declare class ViewTransition {
  +finished: Promise<void>;
  +ready: Promise<void>;
  +updateCallbackDone: Promise<void>;

  skipTransition(): void;
}
