type ContentVisibilityAutoStateChangeEventInit = {
  skipped: boolean,
};

declare class ContentVisibilityAutoStateChangeEvent extends Event {
  +skipped: boolean;

  constructor(
    type: string,
    eventInitDict?: ContentVisibilityAutoStateChangeEventInit,
  ): void;
}
