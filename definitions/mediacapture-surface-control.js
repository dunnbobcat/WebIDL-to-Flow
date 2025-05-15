/* partial */ interface CaptureController {
  onzoomlevelchange: EventHandler;
  +zoomLevel: number | null;

  decreaseZoomLevel(): void;
  getSupportedZoomLevels(): Array<number>;
  increaseZoomLevel(): void;
  resetZoomLevel(): void;
}

/* partial */ interface CaptureController {
  constructor(): void;

  forwardWheel(element: HTMLElement | null): void;
}
