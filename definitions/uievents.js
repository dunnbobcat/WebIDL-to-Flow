type CompositionEventInit = {
  ...UIEventInit,
  data: string,
};

type EventModifierInit = {
  ...UIEventInit,
  altKey: boolean,
  ctrlKey: boolean,
  metaKey: boolean,
  modifierAltGraph: boolean,
  modifierCapsLock: boolean,
  modifierFn: boolean,
  modifierFnLock: boolean,
  modifierHyper: boolean,
  modifierNumLock: boolean,
  modifierScrollLock: boolean,
  modifierSuper: boolean,
  modifierSymbol: boolean,
  modifierSymbolLock: boolean,
  shiftKey: boolean,
};

type FocusEventInit = {
  ...UIEventInit,
  relatedTarget: EventTarget | null,
};

type InputEventInit = {
  ...UIEventInit,
  data: string | null,
  inputType: string,
  isComposing: boolean,
};

type KeyboardEventInit = {
  ...EventModifierInit,
  charCode: number,
  code: string,
  isComposing: boolean,
  key: string,
  keyCode: number,
  location: number,
  repeat: boolean,
};

type MouseEventInit = {
  ...EventModifierInit,
  button: number,
  buttons: number,
  clientX: number,
  clientY: number,
  relatedTarget: EventTarget | null,
  screenX: number,
  screenY: number,
};

type UIEventInit = {
  detail: number,
  view: Window | null,
  which: number,
};

type WheelEventInit = {
  ...MouseEventInit,
  deltaMode: number,
  deltaX: number,
  deltaY: number,
  deltaZ: number,
};

declare class CompositionEvent extends UIEvent {
  +data: string;

  constructor(type: string, eventInitDict?: CompositionEventInit): void;

  initCompositionEvent(
    typeArg: string,
    bubblesArg?: boolean,
    cancelableArg?: boolean,
    viewArg?: WindowProxy | null,
    dataArg?: string,
  ): void;
}

declare class FocusEvent extends UIEvent {
  +relatedTarget: EventTarget | null;

  constructor(type: string, eventInitDict?: FocusEventInit): void;
}

declare class InputEvent extends UIEvent {
  +data: string | null;
  +inputType: string;
  +isComposing: boolean;

  constructor(type: string, eventInitDict?: InputEventInit): void;
}

declare class KeyboardEvent extends UIEvent {
  static +DOM_KEY_LOCATION_LEFT: 0x01;
  static +DOM_KEY_LOCATION_NUMPAD: 0x03;
  static +DOM_KEY_LOCATION_RIGHT: 0x02;
  static +DOM_KEY_LOCATION_STANDARD: 0x00;

  +altKey: boolean;
  +charCode: number;
  +code: string;
  +ctrlKey: boolean;
  +isComposing: boolean;
  +key: string;
  +keyCode: number;
  +location: number;
  +metaKey: boolean;
  +repeat: boolean;
  +shiftKey: boolean;

  constructor(type: string, eventInitDict?: KeyboardEventInit): void;

  getModifierState(keyArg: string): boolean;
  initKeyboardEvent(
    typeArg: string,
    bubblesArg?: boolean,
    cancelableArg?: boolean,
    viewArg?: Window | null,
    keyArg?: string,
    locationArg?: number,
    ctrlKey?: boolean,
    altKey?: boolean,
    shiftKey?: boolean,
    metaKey?: boolean,
  ): void;
}

declare class MouseEvent extends UIEvent {
  +altKey: boolean;
  +button: number;
  +buttons: number;
  +clientX: number;
  +clientY: number;
  +ctrlKey: boolean;
  +layerX: number;
  +layerY: number;
  +metaKey: boolean;
  +relatedTarget: EventTarget | null;
  +screenX: number;
  +screenY: number;
  +shiftKey: boolean;

  constructor(type: string, eventInitDict?: MouseEventInit): void;

  getModifierState(keyArg: string): boolean;
  initMouseEvent(
    typeArg: string,
    bubblesArg?: boolean,
    cancelableArg?: boolean,
    viewArg?: Window | null,
    detailArg?: number,
    screenXArg?: number,
    screenYArg?: number,
    clientXArg?: number,
    clientYArg?: number,
    ctrlKeyArg?: boolean,
    altKeyArg?: boolean,
    shiftKeyArg?: boolean,
    metaKeyArg?: boolean,
    buttonArg?: number,
    relatedTargetArg?: EventTarget | null,
  ): void;
}

declare class TextEvent extends UIEvent {
  +data: string;

  initTextEvent(
    type: string,
    bubbles?: boolean,
    cancelable?: boolean,
    view?: Window | null,
    data?: string,
  ): void;
}

declare class UIEvent extends Event {
  +detail: number;
  +view: Window | null;
  +which: number;

  constructor(type: string, eventInitDict?: UIEventInit): void;

  initUIEvent(
    typeArg: string,
    bubblesArg?: boolean,
    cancelableArg?: boolean,
    viewArg?: Window | null,
    detailArg?: number,
  ): void;
}

declare class WheelEvent extends MouseEvent {
  static +DOM_DELTA_LINE: 0x01;
  static +DOM_DELTA_PAGE: 0x02;
  static +DOM_DELTA_PIXEL: 0x00;

  +deltaMode: number;
  +deltaX: number;
  +deltaY: number;
  +deltaZ: number;

  constructor(type: string, eventInitDict?: WheelEventInit): void;
}
