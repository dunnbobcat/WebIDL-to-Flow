/* partial */ interface Navigator {
  +virtualKeyboard: VirtualKeyboard;
}

declare class VirtualKeyboard extends EventTarget {
  +boundingRect: DOMRect;
  ongeometrychange: EventHandler;
  overlaysContent: boolean;

  hide(): void;
  show(): void;
}

/* partial */ declare class mixin$ElementContentEditable {
  virtualKeyboardPolicy: string;
}
