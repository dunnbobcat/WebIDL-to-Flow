type TouchType = 'direct' | 'stylus';

type TouchEventInit = {
  changedTouches: Array<Touch>,
  targetTouches: Array<Touch>,
  touches: Array<Touch>,
};

type TouchInit = {
  altitudeAngle: number,
  azimuthAngle: number,
  clientX: number,
  clientY: number,
  force: number,
  identifier: number,
  pageX: number,
  pageY: number,
  radiusX: number,
  radiusY: number,
  rotationAngle: number,
  screenX: number,
  screenY: number,
  target: EventTarget,
  touchType: TouchType,
};

declare class Touch {
  +altitudeAngle: number;
  +azimuthAngle: number;
  +clientX: number;
  +clientY: number;
  +force: number;
  +identifier: number;
  +pageX: number;
  +pageY: number;
  +radiusX: number;
  +radiusY: number;
  +rotationAngle: number;
  +screenX: number;
  +screenY: number;
  +target: EventTarget;
  +touchType: TouchType;

  constructor(touchInitDict: TouchInit): void;
}

declare class TouchEvent extends UIEvent {
  +altKey: boolean;
  +changedTouches: TouchList;
  +ctrlKey: boolean;
  +metaKey: boolean;
  +shiftKey: boolean;
  +targetTouches: TouchList;
  +touches: TouchList;

  constructor(type: string, eventInitDict?: TouchEventInit): void;

  getModifierState(keyArg: string): boolean;
}

declare class TouchList {
  +length: number;

  item(index: number): Touch | null;
}

/* partial */ declare class mixin$GlobalEventHandlers {
  ontouchcancel: EventHandler;
  ontouchend: EventHandler;
  ontouchmove: EventHandler;
  ontouchstart: EventHandler;
}
