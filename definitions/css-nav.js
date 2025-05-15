type FocusableAreaSearchMode = 'visible' | 'all';

type SpatialNavigationDirection = 'up' | 'down' | 'left' | 'right';

type FocusableAreasOption = {
  mode: FocusableAreaSearchMode,
};

type NavigationEventInit = {
  dir: SpatialNavigationDirection,
  relatedTarget: EventTarget | null,
};

type SpatialNavigationSearchOptions = {
  candidates: Array<Node> | null,
  container: Node | null,
};

/* partial */ declare class Element {
  focusableAreas(option?: FocusableAreasOption): Array<Node>;
  getSpatialNavigationContainer(): Node;
  spatialNavigationSearch(
    dir: SpatialNavigationDirection,
    options?: SpatialNavigationSearchOptions,
  ): Node | null;
}

declare class NavigationEvent extends UIEvent {
  +dir: SpatialNavigationDirection;
  +relatedTarget: EventTarget | null;

  constructor(type: string, eventInitDict?: NavigationEventInit): void;
}

/* partial */ declare class Window {
  navigate(dir: SpatialNavigationDirection): void;
}
