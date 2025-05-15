/* partial */ interface Element {
  elementTiming: string;
}

declare class PerformanceElementTiming
  extends PerformanceEntry
  mixins mixin$PaintTimingMixin
{
  +element: Element | null;
  +id: string;
  +identifier: string;
  +intersectionRect: DOMRectReadOnly;
  +loadTime: number;
  +naturalHeight: number;
  +naturalWidth: number;
  +renderTime: number;
  +url: string;

  toJSON(): Object;
}
