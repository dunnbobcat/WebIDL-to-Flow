/* partial */ type PerformanceObserverInit = {
  durationThreshold: number,
};

type EventCounts = Map<string, number>;

/* partial */ declare class Performance {
  +eventCounts: EventCounts;
  +interactionCount: number;
}

declare class PerformanceEventTiming extends PerformanceEntry {
  +cancelable: boolean;
  +interactionId: number;
  +processingEnd: number;
  +processingStart: number;
  +target: Node | null;

  toJSON(): Object;
}
