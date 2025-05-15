type HIDUnitSystem =
  | 'none'
  | 'si-linear'
  | 'si-rotation'
  | 'english-linear'
  | 'english-rotation'
  | 'vendor-defined'
  | 'reserved';

type HIDCollectionInfo = {
  children: Array<HIDCollectionInfo>,
  featureReports: Array<HIDReportInfo>,
  inputReports: Array<HIDReportInfo>,
  outputReports: Array<HIDReportInfo>,
  type: number,
  usage: number,
  usagePage: number,
};

type HIDConnectionEventInit = {
  device: HIDDevice,
};

type HIDDeviceFilter = {
  productId: number,
  usage: number,
  usagePage: number,
  vendorId: number,
};

type HIDDeviceRequestOptions = {
  exclusionFilters: Array<HIDDeviceFilter>,
  filters: Array<HIDDeviceFilter>,
};

type HIDInputReportEventInit = {
  data: DataView,
  device: HIDDevice,
  reportId: number,
};

type HIDReportInfo = {
  items: Array<HIDReportItem>,
  reportId: number,
};

type HIDReportItem = {
  hasNull: boolean,
  hasPreferredState: boolean,
  isAbsolute: boolean,
  isArray: boolean,
  isBufferedBytes: boolean,
  isConstant: boolean,
  isLinear: boolean,
  isRange: boolean,
  isVolatile: boolean,
  logicalMaximum: number,
  logicalMinimum: number,
  physicalMaximum: number,
  physicalMinimum: number,
  reportCount: number,
  reportSize: number,
  strings: Array<string>,
  unitExponent: number,
  unitFactorCurrentExponent: number,
  unitFactorLengthExponent: number,
  unitFactorLuminousIntensityExponent: number,
  unitFactorMassExponent: number,
  unitFactorTemperatureExponent: number,
  unitFactorTimeExponent: number,
  unitSystem: HIDUnitSystem,
  usageMaximum: number,
  usageMinimum: number,
  usages: Array<number>,
  wrap: boolean,
};

declare class HID extends EventTarget {
  onconnect: EventHandler;
  ondisconnect: EventHandler;

  getDevices(): Array<HIDDevice>;
  requestDevice(options: HIDDeviceRequestOptions): Array<HIDDevice>;
}

declare class HIDConnectionEvent extends Event {
  +device: HIDDevice;

  constructor(type: string, eventInitDict: HIDConnectionEventInit): void;
}

declare class HIDDevice extends EventTarget {
  +collections: HIDCollectionInfo;
  oninputreport: EventHandler;
  +opened: boolean;
  +productId: number;
  +productName: string;
  +vendorId: number;

  close(): void;
  forget(): void;
  open(): void;
  receiveFeatureReport(reportId: number): DataView;
  sendFeatureReport(reportId: number, data: BufferSource): void;
  sendReport(reportId: number, data: BufferSource): void;
}

declare class HIDInputReportEvent extends Event {
  +data: DataView;
  +device: HIDDevice;
  +reportId: number;

  constructor(type: string, eventInitDict: HIDInputReportEventInit): void;
}

/* partial */ interface Navigator {
  +hid: HID;
}

/* partial */ declare class WorkerNavigator {
  +hid: HID;
}
