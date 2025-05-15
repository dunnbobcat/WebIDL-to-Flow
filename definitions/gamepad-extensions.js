type GamepadHand = '' | 'left' | 'right';

/* partial */ declare class Gamepad {
  +hand: GamepadHand;
  +hapticActuators: $ReadOnlyArray<GamepadHapticActuator>;
  +pose: GamepadPose | null;
}

/* partial */ declare class GamepadHapticActuator {
  pulse(value: number, duration: number): Promise<boolean>;
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
