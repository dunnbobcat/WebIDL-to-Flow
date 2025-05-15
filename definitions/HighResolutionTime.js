type DOMHighResTimeStamp = number;

type EpochTimeStamp = number;

declare class Performance extends EventTarget {
  +timeOrigin: number;

  now(): number;
  toJSON(): Object;
}

/* partial mixin */ declare class mixin$WindowOrWorkerGlobalScope {
  +performance: Performance;
}
