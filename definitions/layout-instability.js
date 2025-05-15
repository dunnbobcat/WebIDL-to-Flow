declare class LayoutShift extends PerformanceEntry {
  +hadRecentInput: boolean;
  +lastInputTime: number;
  +sources: $ReadOnlyArray<LayoutShiftAttribution>;
  +value: number;

  toJSON(): Object;
}

declare class LayoutShiftAttribution {
  +currentRect: DOMRectReadOnly;
  +node: Node | null;
  +previousRect: DOMRectReadOnly;
}
