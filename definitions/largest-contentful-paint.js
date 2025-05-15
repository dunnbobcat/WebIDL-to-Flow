declare class LargestContentfulPaint
  extends PerformanceEntry
  mixins mixin$PaintTimingMixin
{
  +element: Element | null;
  +id: string;
  +loadTime: number;
  +size: number;
  +url: string;

  toJSON(): Object;
}
