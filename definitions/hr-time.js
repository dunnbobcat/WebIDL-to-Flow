type DOMHighResTimeStamp = number;

type EpochTimeStamp = number;

declare class Performance extends EventTarget {
  +timeOrigin: number;

  now(): number;
  toJSON(): Object;
}

/* partial */ declare class mixin$WindowOrWorkerGlobalScope {
  +performance: Performance;
}
