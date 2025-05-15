type ScreenIdleState = 'locked' | 'unlocked';

type UserIdleState = 'active' | 'idle';

type IdleOptions = {
  signal: AbortSignal,
  threshold: number,
};

declare class IdleDetector extends EventTarget {
  onchange: EventHandler;
  +screenState: ScreenIdleState | null;
  +userState: UserIdleState | null;

  constructor(): void;

  static requestPermission(): PermissionState;
  start(options?: IdleOptions): void;
}
