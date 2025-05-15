/* partial */ interface Keyboard {
  onlayoutchange: EventHandler;

  getLayoutMap(): KeyboardLayoutMap;
}

type KeyboardLayoutMap = Map<string, string>;
