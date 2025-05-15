type FlowControlType = 'none' | 'hardware';

type ParityType = 'none' | 'even' | 'odd';

type SerialInputSignals = {
  clearToSend: boolean,
  dataCarrierDetect: boolean,
  dataSetReady: boolean,
  ringIndicator: boolean,
};

type SerialOptions = {
  baudRate: number,
  bufferSize: number,
  dataBits: number,
  flowControl: FlowControlType,
  parity: ParityType,
  stopBits: number,
};

type SerialOutputSignals = {
  break: boolean,
  dataTerminalReady: boolean,
  requestToSend: boolean,
};

type SerialPortFilter = {
  bluetoothServiceClassId: BluetoothServiceUUID,
  usbProductId: number,
  usbVendorId: number,
};

type SerialPortInfo = {
  bluetoothServiceClassId: BluetoothServiceUUID,
  usbProductId: number,
  usbVendorId: number,
};

type SerialPortRequestOptions = {
  allowedBluetoothServiceClassIds: Array<BluetoothServiceUUID>,
  filters: Array<SerialPortFilter>,
};

/* partial */ declare class Navigator {
  +serial: Serial;
}

declare class Serial extends EventTarget {
  onconnect: EventHandler;
  ondisconnect: EventHandler;

  getPorts(): Array<SerialPort>;
  requestPort(options?: SerialPortRequestOptions): SerialPort;
}

declare class SerialPort extends EventTarget {
  +connected: boolean;
  onconnect: EventHandler;
  ondisconnect: EventHandler;
  +readable: ReadableStream;
  +writable: WritableStream;

  close(): void;
  forget(): void;
  getInfo(): SerialPortInfo;
  getSignals(): SerialInputSignals;
  open(options: SerialOptions): void;
  setSignals(signals?: SerialOutputSignals): void;
}

/* partial */ declare class WorkerNavigator {
  +serial: Serial;
}
