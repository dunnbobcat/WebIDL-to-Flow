/* partial */ declare class Navigator {
  +preferences: PreferenceManager;
}

declare class PreferenceManager {
  +colorScheme: PreferenceObject;
  +contrast: PreferenceObject;
  +reducedData: PreferenceObject;
  +reducedMotion: PreferenceObject;
  +reducedTransparency: PreferenceObject;
}

declare class PreferenceObject extends EventTarget {
  onchange: EventHandler;
  +override: string | null;
  +validValues: string;
  +value: string;

  clearOverride(): void;
  requestOverride(value: string | null): void;
}
