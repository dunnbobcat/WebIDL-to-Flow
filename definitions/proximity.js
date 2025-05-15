declare class ProximitySensor extends Sensor {
  +distance: number | null;
  +max: number | null;
  +near: boolean | null;

  constructor(sensorOptions?: SensorOptions): void;
}
