declare class BatteryManager extends EventTarget {
  +charging: boolean;
  +chargingTime: number;
  +dischargingTime: number;
  +level: number;
  onchargingchange: EventHandler;
  onchargingtimechange: EventHandler;
  ondischargingtimechange: EventHandler;
  onlevelchange: EventHandler;
}

/* partial */ interface Navigator {
  getBattery(): BatteryManager;
}
