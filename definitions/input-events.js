/* partial */ type InputEventInit = {
  dataTransfer: DataTransfer | null,
  targetRanges: Array<StaticRange>,
};

/* partial */ declare class InputEvent {
  +dataTransfer: DataTransfer | null;

  getTargetRanges(): Array<StaticRange>;
}
