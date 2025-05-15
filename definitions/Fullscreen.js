type FullscreenNavigationUI = 'auto' | 'show' | 'hide';

type FullscreenOptions = {
  navigationUI: FullscreenNavigationUI,
};

/* partial */ interface Document {
  +fullscreen: boolean;
  +fullscreenEnabled: boolean;
  onfullscreenchange: EventHandler;
  onfullscreenerror: EventHandler;

  exitFullscreen(): void;
}

/* partial */ interface Element {
  onfullscreenchange: EventHandler;
  onfullscreenerror: EventHandler;

  requestFullscreen(options?: FullscreenOptions): void;
}

/* partial */ declare class mixin$DocumentOrShadowRoot {
  +fullscreenElement: Element | null;
}
