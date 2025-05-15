declare class CanvasCaptureMediaStreamTrack extends MediaStreamTrack {
  +canvas: HTMLCanvasElement;

  requestFrame(): void;
}

/* partial */ interface HTMLCanvasElement {
  captureStream(frameRequestRate?: number): MediaStream;
}

/* partial */ interface HTMLMediaElement {
  captureStream(): MediaStream;
}
