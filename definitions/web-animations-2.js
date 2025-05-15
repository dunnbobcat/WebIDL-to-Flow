type AnimationTriggerType = 'once' | 'repeat' | 'alternate' | 'state';

type IterationCompositeOperation = 'replace' | 'accumulate';

type AnimationPlaybackEventInit = {
  currentTime: CSSNumberish | null,
  timelineTime: CSSNumberish | null,
};

type AnimationTriggerOptions = {
  exitRangeEnd:
    | TimelineRangeOffset
    | CSSNumericValue
    | CSSKeywordValue
    | string,
  exitRangeStart:
    | TimelineRangeOffset
    | CSSNumericValue
    | CSSKeywordValue
    | string,
  rangeEnd: TimelineRangeOffset | CSSNumericValue | CSSKeywordValue | string,
  rangeStart: TimelineRangeOffset | CSSNumericValue | CSSKeywordValue | string,
  timeline: AnimationTimeline | null,
  type: AnimationTriggerType | null,
};

/* partial */ type ComputedEffectTiming = {
  activeDuration: CSSNumberish,
  endTime: CSSNumberish,
  localTime: CSSNumberish | null,
  startTime: CSSNumberish,
};

/* partial */ type EffectTiming = {
  delay: number,
  duration: number | CSSNumericValue | string,
  endDelay: number,
  playbackRate: number,
};

/* partial */ type KeyframeAnimationOptions = {
  rangeEnd: TimelineRangeOffset | CSSNumericValue | CSSKeywordValue | string,
  rangeStart: TimelineRangeOffset | CSSNumericValue | CSSKeywordValue | string,
  trigger: AnimationTrigger | null,
};

/* partial */ type KeyframeEffectOptions = {
  iterationComposite: IterationCompositeOperation,
};

/* partial */ type OptionalEffectTiming = {
  playbackRate: number,
};

type TimelineRangeOffset = {
  offset: CSSNumericValue,
  rangeName: string | null,
};

type EffectCallback = (
  progress: number | null,
  currentTarget: Element | CSSPseudoElement,
  animation: Animation,
) => void;

/* partial */ declare class Animation {
  currentTime: CSSNumberish | null;
  +overallProgress: number | null;
  startTime: CSSNumberish | null;
  trigger: AnimationTrigger | null;
}

/* partial */ declare class AnimationEffect {
  +nextSibling: AnimationEffect | null;
  +parent: GroupEffect | null;
  +previousSibling: AnimationEffect | null;

  after(effects: AnimationEffect): void;
  before(effects: AnimationEffect): void;
  remove(): void;
  replace(effects: AnimationEffect): void;
}

declare class AnimationNodeList {
  +length: number;

  item(index: number): AnimationEffect | null;
}

declare class AnimationPlaybackEvent extends Event {
  +currentTime: CSSNumberish | null;
  +timelineTime: CSSNumberish | null;

  constructor(type: string, eventInitDict?: AnimationPlaybackEventInit): void;
}

/* partial */ declare class AnimationTimeline {
  +currentTime: CSSNumberish | null;
  +duration: CSSNumberish | null;

  play(effect?: AnimationEffect | null): Animation;
}

declare class AnimationTrigger {
  exitRangeEnd: any;
  exitRangeStart: any;
  rangeEnd: any;
  rangeStart: any;
  timeline: AnimationTimeline;
  type: AnimationTriggerType;

  constructor(options?: AnimationTriggerOptions): void;
}

declare class GroupEffect {
  +children: AnimationNodeList;
  +firstChild: AnimationEffect | null;
  +lastChild: AnimationEffect | null;

  constructor(
    children: Array<AnimationEffect> | null,
    timing?: number | EffectTiming,
  ): void;

  append(effects: AnimationEffect): void;
  clone(): GroupEffect;
  prepend(effects: AnimationEffect): void;
}

/* partial */ interface KeyframeEffect {
  iterationComposite: IterationCompositeOperation;
}

declare class SequenceEffect extends GroupEffect {
  constructor(
    children: Array<AnimationEffect> | null,
    timing?: number | EffectTiming,
  ): void;

  clone(): SequenceEffect;
}
