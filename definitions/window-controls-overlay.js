type WindowControlsOverlayGeometryChangeEventInit = {
  titlebarAreaRect: DOMRect,
  visible: boolean,
};

/* partial */ declare class Navigator {
  +windowControlsOverlay: WindowControlsOverlay;
}

declare class WindowControlsOverlay extends EventTarget {
  ongeometrychange: EventHandler;
  +visible: boolean;

  getTitlebarAreaRect(): DOMRect;
}

declare class WindowControlsOverlayGeometryChangeEvent extends Event {
  +titlebarAreaRect: DOMRect;
  +visible: boolean;

  constructor(
    type: string,
    eventInitDict: WindowControlsOverlayGeometryChangeEventInit,
  ): void;
}
