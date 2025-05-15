type PositionOptions = {
  enableHighAccuracy: boolean,
  maximumAge: number,
  timeout: number,
};

type PositionCallback = (position: GeolocationPosition) => void;

type PositionErrorCallback = (positionError: GeolocationPositionError) => void;

declare class Geolocation {
  clearWatch(watchId: number): void;
  getCurrentPosition(
    successCallback: PositionCallback,
    errorCallback?: PositionErrorCallback | null,
    options?: PositionOptions,
  ): void;
  watchPosition(
    successCallback: PositionCallback,
    errorCallback?: PositionErrorCallback | null,
    options?: PositionOptions,
  ): number;
}

declare class GeolocationCoordinates {
  +accuracy: number;
  +altitude: number | null;
  +altitudeAccuracy: number | null;
  +heading: number | null;
  +latitude: number;
  +longitude: number;
  +speed: number | null;

  toJSON(): Object;
}

declare class GeolocationPosition {
  +coords: GeolocationCoordinates;
  +timestamp: EpochTimeStamp;

  toJSON(): Object;
}

declare class GeolocationPositionError {
  static +PERMISSION_DENIED: 1;
  static +POSITION_UNAVAILABLE: 2;
  static +TIMEOUT: 3;

  +code: number;
  +message: string;
}

/* partial */ interface Navigator {
  +geolocation: Geolocation;
}
