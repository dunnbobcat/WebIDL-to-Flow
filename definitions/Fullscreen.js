type FullscreenNavigationUI = 'auto' | 'show' | 'hide';

type FullscreenOptions = {
  navigationUI: FullscreenNavigationUI,
};

/* partial */ declare class Document {
  +fullscreen: boolean;
  +fullscreenEnabled: boolean;
  onfullscreenchange: EventHandler;
  onfullscreenerror: EventHandler;

  exitFullscreen(): Promise<void>;
}

/* partial */ declare class Element {
  onfullscreenchange: EventHandler;
  onfullscreenerror: EventHandler;

  requestFullscreen(options?: FullscreenOptions): Promise<void>;
}

/* partial */ declare class mixin$DocumentOrShadowRoot {
  +fullscreenElement: Element | null;
}
