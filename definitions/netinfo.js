type Megabit = number;

type Millisecond = number;

type ConnectionType =
  | 'bluetooth'
  | 'cellular'
  | 'ethernet'
  | 'mixed'
  | 'none'
  | 'other'
  | 'unknown'
  | 'wifi'
  | 'wimax';

type EffectiveConnectionType = '2g' | '3g' | '4g' | 'slow-2g';

declare class NetworkInformation extends EventTarget {
  +downlink: Megabit;
  +downlinkMax: Megabit;
  +effectiveType: EffectiveConnectionType;
  onchange: EventHandler;
  +rtt: Millisecond;
  +type: ConnectionType;
}

declare class mixin$NavigatorNetworkInformation {
  +connection: NetworkInformation;
}
