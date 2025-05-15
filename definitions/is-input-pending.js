type IsInputPendingOptions = {
  includeContinuous: boolean,
};

/* partial */ interface Navigator {
  +scheduling: Scheduling;
}

declare class Scheduling {
  isInputPending(isInputPendingOptions?: IsInputPendingOptions): boolean;
}
