type FullscreenNavigationUI = 'auto' | 'show' | 'hide';

type FullscreenOptions = {
  navigationUI: FullscreenNavigationUI,
};

/* partial mixin */ declare class mixin$DocumentOrShadowRoot {
  +fullscreenElement: Element | null;
}
