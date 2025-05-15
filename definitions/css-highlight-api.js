type HighlightType = 'highlight' | 'spelling-error' | 'grammar-error';

type HighlightsFromPointOptions = {
  shadowRoots: Array<ShadowRoot>,
};

/* partial */ declare namespace CSS {
  declare const highlights: HighlightRegistry;
}

declare class Highlight {
  priority: number;
  type: HighlightType;

  constructor(initialRanges: AbstractRange): void;
}

declare class HighlightRegistry {
  highlightsFromPoint(
    x: number,
    y: number,
    options?: HighlightsFromPointOptions,
  ): Array<Highlight>;
}

/* partial */ declare class HighlightRegistry {
  highlightsFromPoint(
    x: number,
    y: number,
    options?: HighlightsFromPointOptions,
  ): Array<Highlight>;
}
