type AnimatorInstanceConstructor = (options: any, state?: any) => any;

/* partial */ declare namespace CSS {declare +animationWorklet: Worklet;
}

declare class AnimationWorkletGlobalScope extends WorkletGlobalScope {registerAnimator(name: string, animatorCtor: AnimatorInstanceConstructor): void;
}

declare class WorkletAnimation extends Animation {+animatorName: string;

constructor(animatorName: string, effects?: AnimationEffect | Array<AnimationEffect> | null, timeline?: AnimationTimeline | null, options?: any): void;
}

declare class WorkletAnimationEffect {localTime: number | null;

getComputedTiming(): ComputedEffectTiming;
getTiming(): EffectTiming;
}

declare class WorkletGroupEffect {getChildren(): Array<WorkletAnimationEffect>;
}
