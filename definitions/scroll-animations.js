type ScrollAxis = 'block' | 'inline' | 'x' | 'y';

type ScrollTimelineOptions = {
  axis: ScrollAxis,
  source: Element | null,
};

type ViewTimelineOptions = {
  axis: ScrollAxis,
  inset: string | Array<CSSNumericValue | CSSKeywordValue>,
  subject: Element,
};

declare class ScrollTimeline extends AnimationTimeline {
  +axis: ScrollAxis;
  +source: Element | null;

  constructor(options?: ScrollTimelineOptions): void;
}

declare class ViewTimeline extends ScrollTimeline {
  +endOffset: CSSNumericValue;
  +startOffset: CSSNumericValue;
  +subject: Element;

  constructor(options?: ViewTimelineOptions): void;
}
