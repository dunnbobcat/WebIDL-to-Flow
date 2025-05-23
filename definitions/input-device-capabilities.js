type InputDeviceCapabilitiesInit = {
  firesTouchEvents: boolean,
  pointerMovementScrolls: boolean,
};

/* partial */ type UIEventInit = {
  sourceCapabilities: InputDeviceCapabilities | null,
};

declare class InputDeviceCapabilities {
  +firesTouchEvents: boolean;
  +pointerMovementScrolls: boolean;

  constructor(deviceInitDict?: InputDeviceCapabilitiesInit): void;
}

/* partial */ declare class UIEvent {
  +sourceCapabilities: InputDeviceCapabilities | null;
}
