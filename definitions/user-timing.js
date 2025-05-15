type PerformanceMarkOptions = {
  detail: any,
  startTime: number,
};

type PerformanceMeasureOptions = {
  detail: any,
  duration: number,
  end: string | number,
  start: string | number,
};

/* partial */ declare class Performance {
  clearMarks(markName?: string): void;
  clearMeasures(measureName?: string): void;
  mark(markName: string, markOptions?: PerformanceMarkOptions): PerformanceMark;
  measure(
    measureName: string,
    startOrMeasureOptions?: string | PerformanceMeasureOptions,
    endMark?: string,
  ): PerformanceMeasure;
}

declare class PerformanceMark extends PerformanceEntry {
  +detail: any;

  constructor(markName: string, markOptions?: PerformanceMarkOptions): void;
}

declare class PerformanceMeasure extends PerformanceEntry {
  +detail: any;
}
