/* partial */ declare class BrowserCaptureMediaStreamTrack {
  restrictTo(RestrictionTarget: RestrictionTarget | null): void;
}

declare class RestrictionTarget {
  static fromElement(element: Element): RestrictionTarget;
}
