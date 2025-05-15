type PerformanceEntryList = Array<PerformanceEntry>;

type PerformanceObserverCallbackOptions = {
  droppedEntriesCount: number,
};

type PerformanceObserverInit = {
  buffered: boolean,
  entryTypes: Array<string>,
  type: string,
};

type PerformanceObserverCallback = (
  entries: PerformanceObserverEntryList,
  observer: PerformanceObserver,
  options?: PerformanceObserverCallbackOptions,
) => void;

/* partial */ interface Performance {
  getEntries(): PerformanceEntryList;
  getEntriesByName(name: string, type?: string): PerformanceEntryList;
  getEntriesByType(type: string): PerformanceEntryList;
}

declare class PerformanceEntry {
  +duration: number;
  +entryType: string;
  +id: number;
  +name: string;
  +navigationId: number;
  +startTime: number;

  toJSON(): Object;
}

declare class PerformanceObserver {
  +supportedEntryTypes: string;

  constructor(callback: PerformanceObserverCallback): void;

  disconnect(): void;
  observe(options?: PerformanceObserverInit): void;
  takeRecords(): PerformanceEntryList;
}

declare class PerformanceObserverEntryList {
  getEntries(): PerformanceEntryList;
  getEntriesByName(name: string, type?: string): PerformanceEntryList;
  getEntriesByType(type: string): PerformanceEntryList;
}
