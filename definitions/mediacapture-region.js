declare class BrowserCaptureMediaStreamTrack extends MediaStreamTrack {
  clone(): BrowserCaptureMediaStreamTrack;
  cropTo(cropTarget: CropTarget | null): Promise<void>;
}

declare class CropTarget {
  static fromElement(element: Element): Promise<CropTarget>;
}
