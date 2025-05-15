/* partial */ type MouseEventInit = {
  movementX: number,
  movementY: number,
};

type PointerLockOptions = {
  unadjustedMovement: boolean,
};

/* partial */ declare class Document {
  onpointerlockchange: EventHandler;
  onpointerlockerror: EventHandler;

  exitPointerLock(): void;
}

/* partial */ declare class Element {
  requestPointerLock(options?: PointerLockOptions): Promise<void>;
}

/* partial */ declare class MouseEvent {
  +movementX: number;
  +movementY: number;
}

/* partial */ declare class mixin$DocumentOrShadowRoot {
  +pointerLockElement: Element | null;
}
