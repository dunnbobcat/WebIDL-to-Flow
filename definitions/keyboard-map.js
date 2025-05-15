/* partial */ declare class Keyboard {
  onlayoutchange: EventHandler;

  getLayoutMap(): Promise<KeyboardLayoutMap>;
}

type KeyboardLayoutMap = Map<string, string>;
