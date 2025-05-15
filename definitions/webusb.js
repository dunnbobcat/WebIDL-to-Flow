type USBDirection = 'in' | 'out';

type USBEndpointType = 'bulk' | 'interrupt' | 'isochronous';

type USBRecipient = 'device' | 'interface' | 'endpoint' | 'other';

type USBRequestType = 'standard' | 'class' | 'vendor';

type USBTransferStatus = 'ok' | 'stall' | 'babble';

type AllowedUSBDevice = {
  productId: number,
  serialNumber: string,
  vendorId: number,
};

type USBBlocklistEntry = {
  bcdDevice: number,
  idProduct: number,
  idVendor: number,
};

type USBConnectionEventInit = {
  device: USBDevice,
};

type USBControlTransferParameters = {
  index: number,
  recipient: USBRecipient,
  request: number,
  requestType: USBRequestType,
  value: number,
};

type USBDeviceFilter = {
  classCode: number,
  productId: number,
  protocolCode: number,
  serialNumber: string,
  subclassCode: number,
  vendorId: number,
};

type USBDeviceRequestOptions = {
  exclusionFilters: Array<USBDeviceFilter>,
  filters: Array<USBDeviceFilter>,
};

type USBPermissionDescriptor = {
  exclusionFilters: Array<USBDeviceFilter>,
  filters: Array<USBDeviceFilter>,
};

type USBPermissionStorage = {
  allowedDevices: Array<AllowedUSBDevice>,
};

/* partial */ declare class Navigator {
  +usb: USB;
}

declare class USB extends EventTarget {
  onconnect: EventHandler;
  ondisconnect: EventHandler;

  getDevices(): Promise<Array<USBDevice>>;
  requestDevice(options: USBDeviceRequestOptions): Promise<USBDevice>;
}

declare class USBAlternateInterface {
  +alternateSetting: number;
  +endpoints: $ReadOnlyArray<USBEndpoint>;
  +interfaceClass: number;
  +interfaceName: string | null;
  +interfaceProtocol: number;
  +interfaceSubclass: number;

  constructor(deviceInterface: USBInterface, alternateSetting: number): void;
}

declare class USBConfiguration {
  +configurationName: string | null;
  +configurationValue: number;
  +interfaces: $ReadOnlyArray<USBInterface>;

  constructor(device: USBDevice, configurationValue: number): void;
}

declare class USBConnectionEvent extends Event {
  +device: USBDevice;

  constructor(type: string, eventInitDict: USBConnectionEventInit): void;
}

declare class USBDevice {
  +configuration: USBConfiguration | null;
  +configurations: $ReadOnlyArray<USBConfiguration>;
  +deviceClass: number;
  +deviceProtocol: number;
  +deviceSubclass: number;
  +deviceVersionMajor: number;
  +deviceVersionMinor: number;
  +deviceVersionSubminor: number;
  +manufacturerName: string | null;
  +opened: boolean;
  +productId: number;
  +productName: string | null;
  +serialNumber: string | null;
  +usbVersionMajor: number;
  +usbVersionMinor: number;
  +usbVersionSubminor: number;
  +vendorId: number;

  claimInterface(interfaceNumber: number): Promise<void>;
  clearHalt(direction: USBDirection, endpointNumber: number): Promise<void>;
  close(): Promise<void>;
  controlTransferIn(
    setup: USBControlTransferParameters,
    length: number,
  ): Promise<USBInTransferResult>;
  controlTransferOut(
    setup: USBControlTransferParameters,
    data?: BufferSource,
  ): Promise<USBOutTransferResult>;
  forget(): Promise<void>;
  isochronousTransferIn(
    endpointNumber: number,
    packetLengths: Array<number>,
  ): Promise<USBIsochronousInTransferResult>;
  isochronousTransferOut(
    endpointNumber: number,
    data: BufferSource,
    packetLengths: Array<number>,
  ): Promise<USBIsochronousOutTransferResult>;
  open(): Promise<void>;
  releaseInterface(interfaceNumber: number): Promise<void>;
  reset(): Promise<void>;
  selectAlternateInterface(
    interfaceNumber: number,
    alternateSetting: number,
  ): Promise<void>;
  selectConfiguration(configurationValue: number): Promise<void>;
  transferIn(
    endpointNumber: number,
    length: number,
  ): Promise<USBInTransferResult>;
  transferOut(
    endpointNumber: number,
    data: BufferSource,
  ): Promise<USBOutTransferResult>;
}

declare class USBEndpoint {
  +direction: USBDirection;
  +endpointNumber: number;
  +packetSize: number;
  +type: USBEndpointType;

  constructor(
    alternate: USBAlternateInterface,
    endpointNumber: number,
    direction: USBDirection,
  ): void;
}

declare class USBInterface {
  +alternate: USBAlternateInterface;
  +alternates: $ReadOnlyArray<USBAlternateInterface>;
  +claimed: boolean;
  +interfaceNumber: number;

  constructor(configuration: USBConfiguration, interfaceNumber: number): void;
}

declare class USBInTransferResult {
  +data: DataView | null;
  +status: USBTransferStatus;

  constructor(status: USBTransferStatus, data?: DataView | null): void;
}

declare class USBIsochronousInTransferPacket {
  +data: DataView | null;
  +status: USBTransferStatus;

  constructor(status: USBTransferStatus, data?: DataView | null): void;
}

declare class USBIsochronousInTransferResult {
  +data: DataView | null;
  +packets: $ReadOnlyArray<USBIsochronousInTransferPacket>;

  constructor(
    packets: Array<USBIsochronousInTransferPacket>,
    data?: DataView | null,
  ): void;
}

declare class USBIsochronousOutTransferPacket {
  +bytesWritten: number;
  +status: USBTransferStatus;

  constructor(status: USBTransferStatus, bytesWritten?: number): void;
}

declare class USBIsochronousOutTransferResult {
  +packets: $ReadOnlyArray<USBIsochronousOutTransferPacket>;

  constructor(packets: Array<USBIsochronousOutTransferPacket>): void;
}

declare class USBOutTransferResult {
  +bytesWritten: number;
  +status: USBTransferStatus;

  constructor(status: USBTransferStatus, bytesWritten?: number): void;
}

declare class USBPermissionResult extends PermissionStatus {
  devices: $ReadOnlyArray<USBDevice>;
}

/* partial */ declare class WorkerNavigator {
  +usb: USB;
}
