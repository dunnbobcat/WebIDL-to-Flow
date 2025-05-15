type AnimationPlayState = 'idle' | 'running' | 'paused' | 'finished';

type AnimationReplaceState = 'active' | 'removed' | 'persisted';

type CompositeOperation = 'replace' | 'add' | 'accumulate';

type CompositeOperationOrAuto = 'replace' | 'add' | 'accumulate' | 'auto';

type FillMode = 'none' | 'forwards' | 'backwards' | 'both' | 'auto';

type PlaybackDirection =
  | 'normal'
  | 'reverse'
  | 'alternate'
  | 'alternate-reverse';

type BaseComputedKeyframe = {
  composite: CompositeOperationOrAuto,
  computedOffset: number,
  easing: string,
  offset: number | null,
};

type BaseKeyframe = {
  composite: CompositeOperationOrAuto,
  easing: string,
  offset: number | null,
};

type BasePropertyIndexedKeyframe = {
  composite: CompositeOperationOrAuto | Array<CompositeOperationOrAuto>,
  easing: string | Array<string>,
  offset: number | null | Array<number | null>,
};

type ComputedEffectTiming = {
  currentIteration: number | null,
  direction: PlaybackDirection,
  easing: string,
  fill: FillMode,
  iterations: number,
  iterationStart: number,
  progress: number | null,
};

type DocumentTimelineOptions = {
  originTime: number,
};

type EffectTiming = {
  direction: PlaybackDirection,
  easing: string,
  fill: FillMode,
  iterations: number,
  iterationStart: number,
};

type GetAnimationsOptions = {
  pseudoElement: string | null,
  subtree: boolean,
};

type KeyframeAnimationOptions = {
  composite: CompositeOperation,
  direction: PlaybackDirection,
  easing: string,
  fill: FillMode,
  id: string,
  iterations: number,
  iterationStart: number,
  pseudoElement: string | null,
  timeline: AnimationTimeline | null,
};

type KeyframeEffectOptions = {
  composite: CompositeOperation,
  direction: PlaybackDirection,
  easing: string,
  fill: FillMode,
  iterations: number,
  iterationStart: number,
  pseudoElement: string | null,
};

type OptionalEffectTiming = {
  delay: number,
  direction: PlaybackDirection,
  duration: number | string,
  easing: string,
  endDelay: number,
  fill: FillMode,
  iterations: number,
  iterationStart: number,
};

declare class Animation extends EventTarget {
  effect: AnimationEffect | null;
  +finished: Animation;
  id: string;
  oncancel: EventHandler;
  onfinish: EventHandler;
  onremove: EventHandler;
  +pending: boolean;
  playbackRate: number;
  +playState: AnimationPlayState;
  +ready: Animation;
  +replaceState: AnimationReplaceState;
  timeline: AnimationTimeline | null;

  constructor(
    effect?: AnimationEffect | null,
    timeline?: AnimationTimeline | null,
  ): void;

  cancel(): void;
  commitStyles(): void;
  finish(): void;
  pause(): void;
  persist(): void;
  play(): void;
  reverse(): void;
  updatePlaybackRate(playbackRate: number): void;
}

declare class AnimationEffect {
  getComputedTiming(): ComputedEffectTiming;
  getTiming(): EffectTiming;
  updateTiming(timing?: OptionalEffectTiming): void;
}

declare class AnimationTimeline {}

/* partial */ interface Document {
  +timeline: DocumentTimeline;
}

declare class DocumentTimeline extends AnimationTimeline {
  constructor(options?: DocumentTimelineOptions): void;
}

declare class KeyframeEffect extends AnimationEffect {
  composite: CompositeOperation;
  pseudoElement: string | null;
  target: Element | null;

  constructor(
    target: Element | null,
    keyframes: Object | null,
    options?: number | KeyframeEffectOptions,
  ): void;
  constructor(source: KeyframeEffect): void;

  getKeyframes(): Array<Object>;
  setKeyframes(keyframes: Object | null): void;
}

declare class mixin$Animatable {
  animate(
    keyframes: Object | null,
    options?: number | KeyframeAnimationOptions,
  ): Animation;
  getAnimations(options?: GetAnimationsOptions): Array<Animation>;
}

/* partial */ declare class mixin$DocumentOrShadowRoot {
  getAnimations(): Array<Animation>;
}
