type NavigationTimingType =
  | 'navigate'
  | 'reload'
  | 'back_forward'
  | 'prerender';

/* partial */ declare class Performance {
  +navigation: PerformanceNavigation;
  +timing: PerformanceTiming;
}

declare class PerformanceNavigation {
  static +TYPE_BACK_FORWARD: 2;
  static +TYPE_NAVIGATE: 0;
  static +TYPE_RELOAD: 1;
  static +TYPE_RESERVED: 255;

  +redirectCount: number;
  +type: number;

  toJSON(): Object;
}

declare class PerformanceNavigationTiming extends PerformanceResourceTiming {
  +criticalCHRestart: number;
  +domComplete: number;
  +domContentLoadedEventEnd: number;
  +domContentLoadedEventStart: number;
  +domInteractive: number;
  +loadEventEnd: number;
  +loadEventStart: number;
  +notRestoredReasons: NotRestoredReasons | null;
  +redirectCount: number;
  +type: NavigationTimingType;
  +unloadEventEnd: number;
  +unloadEventStart: number;

  toJSON(): Object;
}

declare class PerformanceTiming {
  +connectEnd: number;
  +connectStart: number;
  +domainLookupEnd: number;
  +domainLookupStart: number;
  +domComplete: number;
  +domContentLoadedEventEnd: number;
  +domContentLoadedEventStart: number;
  +domInteractive: number;
  +domLoading: number;
  +fetchStart: number;
  +loadEventEnd: number;
  +loadEventStart: number;
  +navigationStart: number;
  +redirectEnd: number;
  +redirectStart: number;
  +requestStart: number;
  +responseEnd: number;
  +responseStart: number;
  +secureConnectionStart: number;
  +unloadEventEnd: number;
  +unloadEventStart: number;

  toJSON(): Object;
}
