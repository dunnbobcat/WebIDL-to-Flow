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

type AnimationPlaybackEventInit = {
  currentTime: number | null,
  timelineTime: number | null,
};

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
  activeDuration: number,
  currentIteration: number | null,
  delay: number,
  direction: PlaybackDirection,
  duration: number | string,
  easing: string,
  endDelay: number,
  endTime: number,
  fill: FillMode,
  iterations: number,
  iterationStart: number,
  localTime: number | null,
  progress: number | null,
};

type DocumentTimelineOptions = {
  originTime: number,
};

type EffectTiming = {
  delay: number,
  direction: PlaybackDirection,
  duration: number | string,
  easing: string,
  endDelay: number,
  fill: FillMode,
  iterations: number,
  iterationStart: number,
};

type GetAnimationsOptions = {
  subtree: boolean,
};

type KeyframeAnimationOptions = {
  composite: CompositeOperation,
  delay: number,
  direction: PlaybackDirection,
  duration: number | string,
  easing: string,
  endDelay: number,
  fill: FillMode,
  id: string,
  iterations: number,
  iterationStart: number,
  pseudoElement: string | null,
  timeline: AnimationTimeline | null,
};

type KeyframeEffectOptions = {
  composite: CompositeOperation,
  delay: number,
  direction: PlaybackDirection,
  duration: number | string,
  easing: string,
  endDelay: number,
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
  currentTime: number | null;
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
  startTime: number | null;
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

declare class AnimationPlaybackEvent extends Event {
  +currentTime: number | null;
  +timelineTime: number | null;

  constructor(type: string, eventInitDict?: AnimationPlaybackEventInit): void;
}

declare class AnimationTimeline {
  +currentTime: number | null;
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
