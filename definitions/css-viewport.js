declare class Viewport {
  +segments: DOMRect | null;
}

/* partial */ interface Window {
  +viewport: Viewport;
}
