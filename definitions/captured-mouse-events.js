type CapturedMouseEventInit = {
  surfaceX: number,
  surfaceY: number,
};

/* partial */ declare class CaptureController {
  oncapturedmousechange: EventHandler;
}

declare class CapturedMouseEvent extends Event {
  +surfaceX: number;
  +surfaceY: number;

  constructor(type: string, eventInitDict?: CapturedMouseEventInit): void;
}
