/* partial */ declare class Navigator {
  +managed: NavigatorManagedData;
}

declare class NavigatorManagedData extends EventTarget {
  onmanagedconfigurationchange: EventHandler;

  getManagedConfiguration(keys: Array<string>): string | Object;
}
