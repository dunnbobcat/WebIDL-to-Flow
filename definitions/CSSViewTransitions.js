type UpdateCallback = () => any;

declare class ViewTransition {
  +finished: void;
  +ready: void;
  +updateCallbackDone: void;

  skipTransition(): void;
}
