declare class Keyboard extends EventTarget {
  lock(keyCodes?: Array<string>): void;
  unlock(): void;
}

/* partial */ interface Navigator {
  +keyboard: Keyboard;
}
