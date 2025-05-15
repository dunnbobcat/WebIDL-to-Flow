type DevicePostureType = 'continuous' | 'folded';

declare class DevicePosture extends EventTarget {
  onchange: EventHandler;
  +type: DevicePostureType;
}

/* partial */ declare class Navigator {
  +devicePosture: DevicePosture;
}
