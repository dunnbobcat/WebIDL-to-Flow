declare class AmbientLightSensor extends Sensor {
  +illuminance: number | null;

  constructor(sensorOptions?: SensorOptions): void;
}
