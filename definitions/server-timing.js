/* partial */ declare class PerformanceResourceTiming {
  +serverTiming: PerformanceServerTiming;
}

declare class PerformanceServerTiming {
  +description: string;
  +duration: number;
  +name: string;

  toJSON(): Object;
}
