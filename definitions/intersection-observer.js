type IntersectionObserverEntryInit = {
  boundingClientRect: DOMRectInit,
  intersectionRatio: number,
  intersectionRect: DOMRectInit,
  isIntersecting: boolean,
  isVisible: boolean,
  rootBounds: DOMRectInit | null,
  target: Element,
  time: number,
};

type IntersectionObserverInit = {
  delay: number,
  root: Element | Document | null,
  rootMargin: string,
  scrollMargin: string,
  threshold: number | Array<number>,
  trackVisibility: boolean,
};

type IntersectionObserverCallback = (
  entries: Array<IntersectionObserverEntry>,
  observer: IntersectionObserver,
) => void;

declare class IntersectionObserver {
  +delay: number;
  +root: Element | Document | null;
  +rootMargin: string;
  +scrollMargin: string;
  +thresholds: $ReadOnlyArray<number>;
  +trackVisibility: boolean;

  constructor(
    callback: IntersectionObserverCallback,
    options?: IntersectionObserverInit,
  ): void;

  disconnect(): void;
  observe(target: Element): void;
  takeRecords(): Array<IntersectionObserverEntry>;
  unobserve(target: Element): void;
}

declare class IntersectionObserverEntry {
  +boundingClientRect: DOMRectReadOnly;
  +intersectionRatio: number;
  +intersectionRect: DOMRectReadOnly;
  +isIntersecting: boolean;
  +isVisible: boolean;
  +rootBounds: DOMRectReadOnly | null;
  +target: Element;
  +time: number;

  constructor(
    intersectionObserverEntryInit: IntersectionObserverEntryInit,
  ): void;
}
