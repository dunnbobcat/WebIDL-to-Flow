/* partial */ declare class CaptureController {
  onzoomlevelchange: EventHandler;
  +zoomLevel: number | null;

  decreaseZoomLevel(): Promise<void>;
  getSupportedZoomLevels(): Array<number>;
  increaseZoomLevel(): Promise<void>;
  resetZoomLevel(): Promise<void>;
}

/* partial */ declare class CaptureController {
  constructor(): void;

  forwardWheel(element: HTMLElement | null): Promise<void>;
}
