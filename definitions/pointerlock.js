/* partial */ type MouseEventInit = {
  movementX: number,
  movementY: number,
};

type PointerLockOptions = {
  unadjustedMovement: boolean,
};

/* partial */ interface Document {
  onpointerlockchange: EventHandler;
  onpointerlockerror: EventHandler;

  exitPointerLock(): void;
}

/* partial */ interface Element {
  requestPointerLock(options?: PointerLockOptions): void;
}

/* partial */ interface MouseEvent {
  +movementX: number;
  +movementY: number;
}

/* partial */ declare class mixin$DocumentOrShadowRoot {
  +pointerLockElement: Element | null;
}
