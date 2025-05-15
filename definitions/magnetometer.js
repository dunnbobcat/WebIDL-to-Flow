type MagnetometerLocalCoordinateSystem = 'device' | 'screen';

type MagnetometerSensorOptions = {
  referenceFrame: MagnetometerLocalCoordinateSystem,
};

declare class Magnetometer extends Sensor {
  +x: number | null;
  +y: number | null;
  +z: number | null;

  constructor(sensorOptions?: MagnetometerSensorOptions): void;
}

declare class UncalibratedMagnetometer extends Sensor {
  +x: number | null;
  +xBias: number | null;
  +y: number | null;
  +yBias: number | null;
  +z: number | null;
  +zBias: number | null;

  constructor(sensorOptions?: MagnetometerSensorOptions): void;
}
