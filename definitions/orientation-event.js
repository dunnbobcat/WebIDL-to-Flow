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

  static requestPermission(): Promise<PermissionState>;
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

  static requestPermission(absolute?: boolean): Promise<PermissionState>;
}

/* partial */ declare class Window {
  ondeviceorientation: EventHandler;
}

/* partial */ declare class Window {
  ondeviceorientationabsolute: EventHandler;
}

/* partial */ declare class Window {
  ondevicemotion: EventHandler;
}
