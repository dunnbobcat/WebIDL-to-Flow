type GamepadHapticEffectType = 'dual-rumble' | 'trigger-rumble';

type GamepadHapticsResult = 'complete' | 'preempted';

type GamepadMappingType = '' | 'standard' | 'xr-standard';

type GamepadEffectParameters = {
  duration: number,
  leftTrigger: number,
  rightTrigger: number,
  startDelay: number,
  strongMagnitude: number,
  weakMagnitude: number,
};

type GamepadEventInit = {
  gamepad: Gamepad,
};

type GamepadTouch = {
  position: DOMPointReadOnly,
  surfaceDimensions: DOMRectReadOnly | null,
  surfaceId: number,
  touchId: number,
};

declare class Gamepad {
  +axes: number;
  +buttons: GamepadButton;
  +connected: boolean;
  +id: string;
  +index: number;
  +mapping: GamepadMappingType;
  +timestamp: number;
  +touches: GamepadTouch;
  +vibrationActuator: GamepadHapticActuator;
}

declare class GamepadButton {
  +pressed: boolean;
  +touched: boolean;
  +value: number;
}

declare class GamepadEvent extends Event {
  +gamepad: Gamepad;

  constructor(type: string, eventInitDict: GamepadEventInit): void;
}

declare class GamepadHapticActuator {
  +effects: GamepadHapticEffectType;

  playEffect(
    type: GamepadHapticEffectType,
    params?: GamepadEffectParameters,
  ): GamepadHapticsResult;
  reset(): GamepadHapticsResult;
}

/* partial */ declare class Navigator {
  getGamepads(): Array<Gamepad | null>;
}

/* partial */ declare class mixin$WindowEventHandlers {
  ongamepadconnected: EventHandler;
  ongamepaddisconnected: EventHandler;
}
