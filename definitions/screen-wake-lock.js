type WakeLockType = 'screen';

/* partial */ interface Navigator {
  +wakeLock: WakeLock;
}

declare class WakeLock {
  request(type?: WakeLockType): WakeLockSentinel;
}

declare class WakeLockSentinel extends EventTarget {
  onrelease: EventHandler;
  +released: boolean;
  +type: WakeLockType;

  release(): void;
}
