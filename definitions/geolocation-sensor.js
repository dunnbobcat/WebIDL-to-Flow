type GeolocationSensorOptions = {};

type GeolocationSensorReading = {
  accuracy: number | null,
  altitude: number | null,
  altitudeAccuracy: number | null,
  heading: number | null,
  latitude: number | null,
  longitude: number | null,
  speed: number | null,
  timestamp: number | null,
};

type ReadOptions = {
  signal: AbortSignal | null,
};

declare class GeolocationSensor extends Sensor {
  +accuracy: number | null;
  +altitude: number | null;
  +altitudeAccuracy: number | null;
  +heading: number | null;
  +latitude: number | null;
  +longitude: number | null;
  +speed: number | null;

  constructor(options?: GeolocationSensorOptions): void;

  static read(readOptions?: ReadOptions): Promise<GeolocationSensorReading>;
}
