type GyroscopeLocalCoordinateSystem = 'device' | 'screen';

type GyroscopeSensorOptions = {
  referenceFrame: GyroscopeLocalCoordinateSystem,
};

declare class Gyroscope extends Sensor {
  +x: number | null;
  +y: number | null;
  +z: number | null;

  constructor(sensorOptions?: GyroscopeSensorOptions): void;
}
