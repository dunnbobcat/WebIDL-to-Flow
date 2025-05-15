type IsInputPendingOptions = {
  includeContinuous: boolean,
};

/* partial */ declare class Navigator {
  +scheduling: Scheduling;
}

declare class Scheduling {
  isInputPending(isInputPendingOptions?: IsInputPendingOptions): boolean;
}
