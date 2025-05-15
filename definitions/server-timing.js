/* partial */ declare class PerformanceResourceTiming {
  +serverTiming: $ReadOnlyArray<PerformanceServerTiming>;
}

declare class PerformanceServerTiming {
  +description: string;
  +duration: number;
  +name: string;

  toJSON(): Object;
}
