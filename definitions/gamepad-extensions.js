type GamepadHand = '' | 'left' | 'right';

/* partial */ interface Gamepad {
  +hand: GamepadHand;
  +hapticActuators: GamepadHapticActuator;
  +pose: GamepadPose | null;
}

/* partial */ declare class GamepadHapticActuator {
  pulse(value: number, duration: number): boolean;
}

declare class GamepadPose {
  +angularAcceleration: Float32Array | null;
  +angularVelocity: Float32Array | null;
  +hasOrientation: boolean;
  +hasPosition: boolean;
  +linearAcceleration: Float32Array | null;
  +linearVelocity: Float32Array | null;
  +orientation: Float32Array | null;
  +position: Float32Array | null;
}
