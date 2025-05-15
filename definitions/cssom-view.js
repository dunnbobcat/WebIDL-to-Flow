type GeometryNode = Text | Element | CSSPseudoElement | Document;

type CSSBoxType = 'margin' | 'border' | 'padding' | 'content';

type ScrollBehavior = 'auto' | 'instant' | 'smooth';

type ScrollIntoViewContainer = 'all' | 'nearest';

type ScrollLogicalPosition = 'start' | 'center' | 'end' | 'nearest';

type BoxQuadOptions = {
  box: CSSBoxType,
  relativeTo: GeometryNode,
};

type CaretPositionFromPointOptions = {
  shadowRoots: Array<ShadowRoot>,
};

type CheckVisibilityOptions = {
  checkOpacity: boolean,
  checkVisibilityCSS: boolean,
  contentVisibilityAuto: boolean,
  opacityProperty: boolean,
  visibilityProperty: boolean,
};

type ConvertCoordinateOptions = {
  fromBox: CSSBoxType,
  toBox: CSSBoxType,
};

type MediaQueryListEventInit = {
  matches: boolean,
  media: string,
};

type ScrollIntoViewOptions = {
  ...ScrollOptions,
  block: ScrollLogicalPosition,
  container: ScrollIntoViewContainer,
  inline: ScrollLogicalPosition,
};

type ScrollOptions = {
  behavior: ScrollBehavior,
};

type ScrollToOptions = {
  ...ScrollOptions,
  left: number,
  top: number,
};

declare class CaretPosition {
  +offset: number;
  +offsetNode: Node;

  getClientRect(): DOMRect | null;
}

/* partial */ declare class Document {
  +scrollingElement: Element | null;

  caretPositionFromPoint(
    x: number,
    y: number,
    options?: CaretPositionFromPointOptions,
  ): CaretPosition | null;
  elementFromPoint(x: number, y: number): Element | null;
  elementsFromPoint(x: number, y: number): Array<Element>;
}

/* partial */ declare class Element {
  +clientHeight: number;
  +clientLeft: number;
  +clientTop: number;
  +clientWidth: number;
  +currentCSSZoom: number;
  +scrollHeight: number;
  scrollLeft: number;
  scrollTop: number;
  +scrollWidth: number;

  checkVisibility(options?: CheckVisibilityOptions): boolean;
  getBoundingClientRect(): DOMRect;
  getClientRects(): DOMRectList;
  scroll(options?: ScrollToOptions): void;
  scroll(x: number, y: number): void;
  scrollBy(options?: ScrollToOptions): void;
  scrollBy(x: number, y: number): void;
  scrollIntoView(arg?: boolean | ScrollIntoViewOptions): void;
  scrollTo(options?: ScrollToOptions): void;
  scrollTo(x: number, y: number): void;
}

/* partial */ declare class HTMLElement {
  +offsetHeight: number;
  +offsetLeft: number;
  +offsetParent: Element | null;
  +offsetTop: number;
  +offsetWidth: number;
}

/* partial */ declare class HTMLImageElement {
  +x: number;
  +y: number;
}

declare class MediaQueryList extends EventTarget {
  +matches: boolean;
  +media: string;
  onchange: EventHandler;

  addListener(callback: EventListener | null): void;
  removeListener(callback: EventListener | null): void;
}

declare class MediaQueryListEvent extends Event {
  +matches: boolean;
  +media: string;

  constructor(type: string, eventInitDict?: MediaQueryListEventInit): void;
}

/* partial */ declare class MouseEvent {
  +offsetX: number;
  +offsetY: number;
  +pageX: number;
  +pageY: number;
  +x: number;
  +y: number;
}

/* partial */ declare class Range {
  getBoundingClientRect(): DOMRect;
  getClientRects(): DOMRectList;
}

declare class Screen {
  +availHeight: number;
  +availWidth: number;
  +colorDepth: number;
  +height: number;
  +pixelDepth: number;
  +width: number;
}

declare class VisualViewport extends EventTarget {
  +height: number;
  +offsetLeft: number;
  +offsetTop: number;
  onresize: EventHandler;
  onscroll: EventHandler;
  onscrollend: EventHandler;
  +pageLeft: number;
  +pageTop: number;
  +scale: number;
  +width: number;
}

/* partial */ declare class Window {
  +devicePixelRatio: number;
  +innerHeight: number;
  +innerWidth: number;
  +outerHeight: number;
  +outerWidth: number;
  +pageXOffset: number;
  +pageYOffset: number;
  +screen: Screen;
  +screenLeft: number;
  +screenTop: number;
  +screenX: number;
  +screenY: number;
  +scrollX: number;
  +scrollY: number;
  +visualViewport: VisualViewport | null;

  matchMedia(query: string): MediaQueryList;
  moveBy(x: number, y: number): void;
  moveTo(x: number, y: number): void;
  resizeBy(x: number, y: number): void;
  resizeTo(width: number, height: number): void;
  scroll(options?: ScrollToOptions): void;
  scroll(x: number, y: number): void;
  scrollBy(options?: ScrollToOptions): void;
  scrollBy(x: number, y: number): void;
  scrollTo(options?: ScrollToOptions): void;
  scrollTo(x: number, y: number): void;
}

declare class mixin$GeometryUtils {
  convertPointFromNode(
    point: DOMPointInit,
    from: GeometryNode,
    options?: ConvertCoordinateOptions,
  ): DOMPoint;
  convertQuadFromNode(
    quad: DOMQuadInit,
    from: GeometryNode,
    options?: ConvertCoordinateOptions,
  ): DOMQuad;
  convertRectFromNode(
    rect: DOMRectReadOnly,
    from: GeometryNode,
    options?: ConvertCoordinateOptions,
  ): DOMQuad;
  getBoxQuads(options?: BoxQuadOptions): Array<DOMQuad>;
}
