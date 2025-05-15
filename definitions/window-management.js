/* partial */ type FullscreenOptions = {
  screen: ScreenDetailed,
};

/* partial */ declare class Screen {
  +isExtended: boolean;
  onchange: EventHandler;
}

declare class ScreenDetailed extends Screen {
  +availLeft: number;
  +availTop: number;
  +devicePixelRatio: number;
  +isInternal: boolean;
  +isPrimary: boolean;
  +label: string;
  +left: number;
  +top: number;
}

declare class ScreenDetails extends EventTarget {
  +currentScreen: ScreenDetailed;
  oncurrentscreenchange: EventHandler;
  onscreenschange: EventHandler;
  +screens: $ReadOnlyArray<ScreenDetailed>;
}

/* partial */ declare class Window {
  getScreenDetails(): Promise<ScreenDetails>;
}
