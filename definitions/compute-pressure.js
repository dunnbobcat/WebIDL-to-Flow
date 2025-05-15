type PressureSource = 'cpu';

type PressureState = 'nominal' | 'fair' | 'serious' | 'critical';

type PressureObserverOptions = {
  sampleInterval: number,
};

type PressureUpdateCallback = (
  changes: Array<PressureRecord>,
  observer: PressureObserver,
) => void;

declare class PressureObserver {
  +knownSources: PressureSource;

  constructor(callback: PressureUpdateCallback): void;

  disconnect(): void;
  observe(source: PressureSource, options?: PressureObserverOptions): void;
  takeRecords(): Array<PressureRecord>;
  unobserve(source: PressureSource): void;
}

declare class PressureRecord {
  +source: PressureSource;
  +state: PressureState;
  +time: number;

  toJSON(): Object;
}
