type XREnvironmentBlendMode = 'opaque' | 'alpha-blend' | 'additive';

type XRInteractionMode = 'screen-space' | 'world-space';

/* partial */ declare class XRSession {
  +environmentBlendMode: XREnvironmentBlendMode;
}

/* partial */ declare class XRSession {
  +interactionMode: XRInteractionMode;
}

/* partial */ declare class XRView {
  +isFirstPersonObserver: boolean;
}
