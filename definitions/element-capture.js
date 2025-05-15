/* partial */ declare class BrowserCaptureMediaStreamTrack {
  restrictTo(RestrictionTarget: RestrictionTarget | null): Promise<void>;
}

declare class RestrictionTarget {
  static fromElement(element: Element): Promise<RestrictionTarget>;
}
