declare class CanvasCaptureMediaStreamTrack extends MediaStreamTrack {
  +canvas: HTMLCanvasElement;

  requestFrame(): void;
}

/* partial */ declare class HTMLCanvasElement {
  captureStream(frameRequestRate?: number): MediaStream;
}

/* partial */ declare class HTMLMediaElement {
  captureStream(): MediaStream;
}
