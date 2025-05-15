type BluetoothCharacteristicUUID = string | number;

type BluetoothDescriptorUUID = string | number;

type BluetoothServiceUUID = string | number;

type UUID = string;

type AllowedBluetoothDevice = {
  allowedManufacturerData: Array<number>,
  allowedServices: string | Array<UUID>,
  deviceId: string,
  mayUseGATT: boolean,
};

type BluetoothAdvertisingEventInit = {
  appearance: number,
  device: BluetoothDevice,
  manufacturerData: BluetoothManufacturerDataMap,
  name: string,
  rssi: number,
  serviceData: BluetoothServiceDataMap,
  txPower: number,
  uuids: Array<string | number>,
};

type BluetoothDataFilterInit = {
  dataPrefix: BufferSource,
  mask: BufferSource,
};

type BluetoothLEScanFilterInit = {
  manufacturerData: Array<BluetoothManufacturerDataFilterInit>,
  name: string,
  namePrefix: string,
  serviceData: Array<BluetoothServiceDataFilterInit>,
  services: Array<BluetoothServiceUUID>,
};

type BluetoothManufacturerDataFilterInit = {
  companyIdentifier: number,
  dataPrefix: BufferSource,
  mask: BufferSource,
};

type BluetoothPermissionDescriptor = {
  acceptAllDevices: boolean,
  deviceId: string,
  filters: Array<BluetoothLEScanFilterInit>,
  optionalManufacturerData: Array<number>,
  optionalServices: Array<BluetoothServiceUUID>,
};

type BluetoothPermissionStorage = {
  allowedDevices: Array<AllowedBluetoothDevice>,
};

type BluetoothServiceDataFilterInit = {
  dataPrefix: BufferSource,
  mask: BufferSource,
  service: BluetoothServiceUUID,
};

type RequestDeviceOptions = {
  acceptAllDevices: boolean,
  exclusionFilters: Array<BluetoothLEScanFilterInit>,
  filters: Array<BluetoothLEScanFilterInit>,
  optionalManufacturerData: Array<number>,
  optionalServices: Array<BluetoothServiceUUID>,
};

type ValueEventInit = {
  value: any,
};

type WatchAdvertisementsOptions = {
  signal: AbortSignal,
};

declare class Bluetooth
  extends EventTarget
  mixins
    mixin$BluetoothDeviceEventHandlers,
    mixin$CharacteristicEventHandlers,
    mixin$ServiceEventHandlers
{
  onavailabilitychanged: EventHandler;
  +referringDevice: BluetoothDevice | null;

  getAvailability(): boolean;
  getDevices(): Array<BluetoothDevice>;
  requestDevice(options?: RequestDeviceOptions): BluetoothDevice;
}

declare class BluetoothAdvertisingEvent extends Event {
  +appearance: number | null;
  +device: BluetoothDevice;
  +manufacturerData: BluetoothManufacturerDataMap;
  +name: string | null;
  +rssi: number | null;
  +serviceData: BluetoothServiceDataMap;
  +txPower: number | null;
  +uuids: UUID;

  constructor(type: string, init: BluetoothAdvertisingEventInit): void;
}

declare class BluetoothCharacteristicProperties {
  +authenticatedSignedWrites: boolean;
  +broadcast: boolean;
  +indicate: boolean;
  +notify: boolean;
  +read: boolean;
  +reliableWrite: boolean;
  +writableAuxiliaries: boolean;
  +write: boolean;
  +writeWithoutResponse: boolean;
}

declare class BluetoothDevice
  extends EventTarget
  mixins
    mixin$BluetoothDeviceEventHandlers,
    mixin$CharacteristicEventHandlers,
    mixin$ServiceEventHandlers
{
  +gatt: BluetoothRemoteGATTServer | null;
  +id: string;
  +name: string | null;
  +watchingAdvertisements: boolean;

  forget(): void;
  watchAdvertisements(options?: WatchAdvertisementsOptions): void;
}

type BluetoothManufacturerDataMap = Map<number, DataView>;

declare class BluetoothPermissionResult extends PermissionStatus {
  devices: BluetoothDevice;
}

declare class BluetoothRemoteGATTCharacteristic
  extends EventTarget
  mixins mixin$CharacteristicEventHandlers
{
  +properties: BluetoothCharacteristicProperties;
  +service: BluetoothRemoteGATTService;
  +uuid: UUID;
  +value: DataView | null;

  getDescriptor(
    descriptor: BluetoothDescriptorUUID,
  ): BluetoothRemoteGATTDescriptor;
  getDescriptors(
    descriptor?: BluetoothDescriptorUUID,
  ): Array<BluetoothRemoteGATTDescriptor>;
  readValue(): DataView;
  startNotifications(): BluetoothRemoteGATTCharacteristic;
  stopNotifications(): BluetoothRemoteGATTCharacteristic;
  writeValue(value: BufferSource): void;
  writeValueWithoutResponse(value: BufferSource): void;
  writeValueWithResponse(value: BufferSource): void;
}

declare class BluetoothRemoteGATTDescriptor {
  +characteristic: BluetoothRemoteGATTCharacteristic;
  +uuid: UUID;
  +value: DataView | null;

  readValue(): DataView;
  writeValue(value: BufferSource): void;
}

declare class BluetoothRemoteGATTServer {
  +connected: boolean;
  +device: BluetoothDevice;

  connect(): BluetoothRemoteGATTServer;
  disconnect(): void;
  getPrimaryService(service: BluetoothServiceUUID): BluetoothRemoteGATTService;
  getPrimaryServices(
    service?: BluetoothServiceUUID,
  ): Array<BluetoothRemoteGATTService>;
}

declare class BluetoothRemoteGATTService
  extends EventTarget
  mixins mixin$CharacteristicEventHandlers, mixin$ServiceEventHandlers
{
  +device: BluetoothDevice;
  +isPrimary: boolean;
  +uuid: UUID;

  getCharacteristic(
    characteristic: BluetoothCharacteristicUUID,
  ): BluetoothRemoteGATTCharacteristic;
  getCharacteristics(
    characteristic?: BluetoothCharacteristicUUID,
  ): Array<BluetoothRemoteGATTCharacteristic>;
  getIncludedService(service: BluetoothServiceUUID): BluetoothRemoteGATTService;
  getIncludedServices(
    service?: BluetoothServiceUUID,
  ): Array<BluetoothRemoteGATTService>;
}

type BluetoothServiceDataMap = Map<UUID, DataView>;

declare class BluetoothUUID {
  static canonicalUUID(alias: number): UUID;
  static getCharacteristic(name: string | number): UUID;
  static getDescriptor(name: string | number): UUID;
  static getService(name: string | number): UUID;
}

/* partial */ interface Navigator {
  +bluetooth: Bluetooth;
}

declare class ValueEvent extends Event {
  +value: any;

  constructor(type: string, initDict?: ValueEventInit): void;
}

declare class mixin$BluetoothDeviceEventHandlers {
  onadvertisementreceived: EventHandler;
  ongattserverdisconnected: EventHandler;
}

declare class mixin$CharacteristicEventHandlers {
  oncharacteristicvaluechanged: EventHandler;
}

declare class mixin$ServiceEventHandlers {
  onserviceadded: EventHandler;
  onservicechanged: EventHandler;
  onserviceremoved: EventHandler;
}
