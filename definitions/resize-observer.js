type ResizeObserverBoxOptions =
  | 'border-box'
  | 'content-box'
  | 'device-pixel-content-box';

type ResizeObserverOptions = {
  box: ResizeObserverBoxOptions,
};

type ResizeObserverCallback = (
  entries: Array<ResizeObserverEntry>,
  observer: ResizeObserver,
) => void;

declare class ResizeObserver {
  constructor(callback: ResizeObserverCallback): void;

  disconnect(): void;
  observe(target: Element, options?: ResizeObserverOptions): void;
  unobserve(target: Element): void;
}

declare class ResizeObserverEntry {
  +borderBoxSize: ResizeObserverSize;
  +contentBoxSize: ResizeObserverSize;
  +contentRect: DOMRectReadOnly;
  +devicePixelContentBoxSize: ResizeObserverSize;
  +target: Element;
}

declare class ResizeObserverSize {
  +blockSize: number;
  +inlineSize: number;
}
