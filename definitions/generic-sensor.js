type SensorErrorEventInit = {
  error: DOMException,
};

type SensorOptions = {
  frequency: number,
};

declare class Sensor extends EventTarget {
  +activated: boolean;
  +hasReading: boolean;
  onactivate: EventHandler;
  onerror: EventHandler;
  onreading: EventHandler;
  +timestamp: number | null;

  start(): void;
  stop(): void;
}

declare class SensorErrorEvent extends Event {
  +error: DOMException;

  constructor(type: string, errorEventInitDict: SensorErrorEventInit): void;
}
