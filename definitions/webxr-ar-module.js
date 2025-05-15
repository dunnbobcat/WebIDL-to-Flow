type XREnvironmentBlendMode = 'opaque' | 'alpha-blend' | 'additive';

type XRInteractionMode = 'screen-space' | 'world-space';

/* partial */ interface XRSession {
  +environmentBlendMode: XREnvironmentBlendMode;
}

/* partial */ interface XRSession {
  +interactionMode: XRInteractionMode;
}

/* partial */ interface XRView {
  +isFirstPersonObserver: boolean;
}
