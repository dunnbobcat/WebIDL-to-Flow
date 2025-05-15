type OrientationLockType =
  | 'any'
  | 'natural'
  | 'landscape'
  | 'portrait'
  | 'portrait-primary'
  | 'portrait-secondary'
  | 'landscape-primary'
  | 'landscape-secondary';

type OrientationType =
  | 'portrait-primary'
  | 'portrait-secondary'
  | 'landscape-primary'
  | 'landscape-secondary';

/* partial */ interface Screen {
  +orientation: ScreenOrientation;
}

declare class ScreenOrientation extends EventTarget {
  +angle: number;
  onchange: EventHandler;
  +type: OrientationType;

  lock(orientation: OrientationLockType): void;
  unlock(): void;
}
