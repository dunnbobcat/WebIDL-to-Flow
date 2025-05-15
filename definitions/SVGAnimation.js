interface ElementTimeControl {
  beginElement(): void;
  beginElementAt(offset: number): void;
  endElement(): void;
  endElementAt(offset: number): void;
}

declare class SVGAnimateColorElement
  extends SVGAnimationElement
  mixins mixin$SVGStylable {}

declare class SVGAnimateElement
  extends SVGAnimationElement
  mixins mixin$SVGStylable {}

declare class SVGAnimateMotionElement extends SVGAnimationElement {}

interface SVGAnimateTransformElement extends SVGAnimationElement {}

declare class SVGAnimationElement
  extends SVGElement
  mixins mixin$SVGTests, mixin$SVGExternalResourcesRequired
{
  +targetElement: SVGElement;

  getCurrentTime(): number;
  getSimpleDuration(): number;
  getStartTime(): number;
}

declare class SVGMPathElement
  extends SVGElement
  mixins mixin$SVGURIReference, mixin$SVGExternalResourcesRequired {}

declare class SVGSetElement extends SVGAnimationElement {}

interface TimeEvent extends Event {
  +detail: number;
  +view: AbstractView;

  initTimeEvent(
    typeArg: string,
    viewArg: AbstractView,
    detailArg: number,
  ): void;
}
