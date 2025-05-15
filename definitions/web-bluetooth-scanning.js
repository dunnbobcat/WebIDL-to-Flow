type BluetoothLEScanOptions = {
  acceptAllAdvertisements: boolean,
  filters: Array<BluetoothLEScanFilterInit>,
  keepRepeatedDevices: boolean,
};

type BluetoothLEScanPermissionDescriptor = {
  acceptAllAdvertisements: boolean,
  filters: Array<BluetoothLEScanFilterInit>,
  keepRepeatedDevices: boolean,
};

/* partial */ interface Bluetooth {
  requestLEScan(options?: BluetoothLEScanOptions): BluetoothLEScan;
}

declare class BluetoothDataFilter {
  +dataPrefix: ArrayBuffer;
  +mask: ArrayBuffer;

  constructor(init?: BluetoothDataFilterInit): void;
}

declare class BluetoothLEScan {
  +acceptAllAdvertisements: boolean;
  +active: boolean;
  +filters: BluetoothLEScanFilter;
  +keepRepeatedDevices: boolean;

  stop(): void;
}

declare class BluetoothLEScanFilter {
  +manufacturerData: BluetoothManufacturerDataFilter;
  +name: string | null;
  +namePrefix: string | null;
  +serviceData: BluetoothServiceDataFilter;
  +services: UUID;

  constructor(init?: BluetoothLEScanFilterInit): void;
}

declare class BluetoothLEScanPermissionResult extends PermissionStatus {
  scans: BluetoothLEScan;
}

declare class BluetoothManufacturerDataFilter {
  constructor(init?: Object): void;
}

declare class BluetoothServiceDataFilter {
  constructor(init?: Object): void;
}
