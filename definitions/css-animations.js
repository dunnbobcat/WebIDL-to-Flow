type AnimationEventInit = {
animationName: string,
elapsedTime: number,
pseudoElement: string};

declare class AnimationEvent extends Event {+animationName: string;
+elapsedTime: number;
+pseudoElement: string;

constructor(type: string, animationEventInitDict?: AnimationEventInit): void;
}

declare class CSSKeyframeRule extends CSSRule {keyText: string;
+style: CSSStyleProperties;
}

declare class CSSKeyframesRule extends CSSRule {+cssRules: CSSRuleList;
+length: number;
name: string;

(index: number): CSSKeyframeRule;
appendRule(rule: string): void;
deleteRule(select: string): void;
findRule(select: string): CSSKeyframeRule | null;
}

/* partial */ interface CSSRule {static +KEYFRAME_RULE: 8;
static +KEYFRAMES_RULE: 7;
}

/* partial */ declare class mixin$GlobalEventHandlers {onanimationcancel: EventHandler;
onanimationend: EventHandler;
onanimationiteration: EventHandler;
onanimationstart: EventHandler;
}
