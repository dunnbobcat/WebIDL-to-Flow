type DeviceMotionEventAccelerationInit = {
  x: number | null,
  y: number | null,
  z: number | null,
};

type DeviceMotionEventInit = {
  acceleration: DeviceMotionEventAccelerationInit,
  accelerationIncludingGravity: DeviceMotionEventAccelerationInit,
  interval: number,
  rotationRate: DeviceMotionEventRotationRateInit,
};

type DeviceMotionEventRotationRateInit = {
  alpha: number | null,
  beta: number | null,
  gamma: number | null,
};

type DeviceOrientationEventInit = {
  absolute: boolean,
  alpha: number | null,
  beta: number | null,
  gamma: number | null,
};

declare class DeviceMotionEvent extends Event {
  +acceleration: DeviceMotionEventAcceleration | null;
  +accelerationIncludingGravity: DeviceMotionEventAcceleration | null;
  +interval: number;
  +rotationRate: DeviceMotionEventRotationRate | null;

  constructor(type: string, eventInitDict?: DeviceMotionEventInit): void;

  static requestPermission(): PermissionState;
}

declare class DeviceMotionEventAcceleration {
  +x: number | null;
  +y: number | null;
  +z: number | null;
}

declare class DeviceMotionEventRotationRate {
  +alpha: number | null;
  +beta: number | null;
  +gamma: number | null;
}

declare class DeviceOrientationEvent extends Event {
  +absolute: boolean;
  +alpha: number | null;
  +beta: number | null;
  +gamma: number | null;

  constructor(type: string, eventInitDict?: DeviceOrientationEventInit): void;

  static requestPermission(absolute?: boolean): PermissionState;
}

/* partial */ interface Window {
  ondeviceorientation: EventHandler;
}

/* partial */ interface Window {
  ondeviceorientationabsolute: EventHandler;
}

/* partial */ interface Window {
  ondevicemotion: EventHandler;
}
