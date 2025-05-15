type WakeLockType = 'screen';

/* partial */ declare class Navigator {
  +wakeLock: WakeLock;
}

declare class WakeLock {
  request(type?: WakeLockType): Promise<WakeLockSentinel>;
}

declare class WakeLockSentinel extends EventTarget {
  onrelease: EventHandler;
  +released: boolean;
  +type: WakeLockType;

  release(): Promise<void>;
}
