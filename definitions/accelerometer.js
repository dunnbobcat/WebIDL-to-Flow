type AccelerometerLocalCoordinateSystem = 'device' | 'screen';

type AccelerometerSensorOptions = {
  referenceFrame: AccelerometerLocalCoordinateSystem,
};

declare class Accelerometer extends Sensor {
  +x: number | null;
  +y: number | null;
  +z: number | null;

  constructor(options?: AccelerometerSensorOptions): void;
}

declare class GravitySensor extends Accelerometer {
  constructor(options?: AccelerometerSensorOptions): void;
}

declare class LinearAccelerationSensor extends Accelerometer {
  constructor(options?: AccelerometerSensorOptions): void;
}
