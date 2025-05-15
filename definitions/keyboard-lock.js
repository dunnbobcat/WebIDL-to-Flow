declare class Keyboard extends EventTarget {
  lock(keyCodes?: Array<string>): Promise<void>;
  unlock(): void;
}

/* partial */ declare class Navigator {
  +keyboard: Keyboard;
}
