type RotationMatrixType = Float32Array | Float64Array | DOMMatrix;

type OrientationSensorLocalCoordinateSystem = 'device' | 'screen';

type OrientationSensorOptions = {
  referenceFrame: OrientationSensorLocalCoordinateSystem,
};

declare class AbsoluteOrientationSensor extends OrientationSensor {
  constructor(sensorOptions?: OrientationSensorOptions): void;
}

declare class OrientationSensor extends Sensor {
  +quaternion: $ReadOnlyArray<number> | null;

  populateMatrix(targetMatrix: RotationMatrixType): void;
}

declare class RelativeOrientationSensor extends OrientationSensor {
  constructor(sensorOptions?: OrientationSensorOptions): void;
}
