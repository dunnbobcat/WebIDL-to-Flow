declare class SVGAnimateElement extends SVGAnimationElement {}

declare class SVGAnimateMotionElement extends SVGAnimationElement {}

declare class SVGAnimateTransformElement extends SVGAnimationElement {}

declare class SVGAnimationElement extends SVGElement mixins mixin$SVGTests {
  onbegin: EventHandler;
  onend: EventHandler;
  onrepeat: EventHandler;
  +targetElement: SVGElement | null;

  beginElement(): void;
  beginElementAt(offset: number): void;
  endElement(): void;
  endElementAt(offset: number): void;
  getCurrentTime(): number;
  getSimpleDuration(): number;
  getStartTime(): number;
}

declare class SVGDiscardElement extends SVGAnimationElement {}

declare class SVGMPathElement extends SVGElement mixins mixin$SVGURIReference {}

declare class SVGSetElement extends SVGAnimationElement {}

/* partial */ declare class SVGSVGElement {
  animationsPaused(): boolean;
  getCurrentTime(): number;
  pauseAnimations(): void;
  setCurrentTime(seconds: number): void;
  unpauseAnimations(): void;
}

declare class TimeEvent extends Event {
  +detail: number;
  +view: WindowProxy | null;

  initTimeEvent(
    typeArg: string,
    viewArg: Window | null,
    detailArg: number,
  ): void;
}
