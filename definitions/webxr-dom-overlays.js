type XRDOMOverlayType = 'screen' | 'floating' | 'head-locked';

type XRDOMOverlayInit = {
  root: Element,
};

type XRDOMOverlayState = {
  type: XRDOMOverlayType,
};

/* partial */ type XRSessionInit = {
  domOverlay: XRDOMOverlayInit | null,
};

/* partial */ declare class XRSession {
  +domOverlayState: XRDOMOverlayState | null;
}

/* partial */ declare class mixin$GlobalEventHandlers {
  onbeforexrselect: EventHandler;
}
