/* partial */ type InputEventInit = {
  dataTransfer: DataTransfer | null,
  targetRanges: Array<StaticRange>,
};

/* partial */ interface InputEvent {
  +dataTransfer: DataTransfer | null;

  getTargetRanges(): Array<StaticRange>;
}
