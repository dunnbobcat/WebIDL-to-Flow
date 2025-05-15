declare class Viewport {
  +segments: $ReadOnlyArray<DOMRect> | null;
}

/* partial */ declare class Window {
  +viewport: Viewport;
}
