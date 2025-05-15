declare class PerformancePaintTiming
  extends PerformanceEntry
  mixins mixin$PaintTimingMixin {}

declare class mixin$PaintTimingMixin {
  +paintTime: number;
  +presentationTime: number | null;
}
