type IdleRequestOptions = {
  timeout: number,
};

type IdleRequestCallback = (deadline: IdleDeadline) => void;

declare class IdleDeadline {
  +didTimeout: boolean;

  timeRemaining(): number;
}

/* partial */ declare class Window {
  cancelIdleCallback(handle: number): void;
  requestIdleCallback(
    callback: IdleRequestCallback,
    options?: IdleRequestOptions,
  ): number;
}
