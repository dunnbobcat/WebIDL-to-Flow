declare class BrowserCaptureMediaStreamTrack extends MediaStreamTrack {
  clone(): BrowserCaptureMediaStreamTrack;
  cropTo(cropTarget: CropTarget | null): void;
}

declare class CropTarget {
  static fromElement(element: Element): CropTarget;
}
