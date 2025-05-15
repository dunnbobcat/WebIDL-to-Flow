type NDEFMessageSource = string | BufferSource | NDEFMessageInit;

type NDEFMakeReadOnlyOptions = {
  signal: AbortSignal | null,
};

type NDEFMessageInit = {
  records: Array<NDEFRecordInit>,
};

type NDEFReadingEventInit = {
  message: NDEFMessageInit,
  serialNumber: string | null,
};

type NDEFRecordInit = {
  data: any,
  encoding: string,
  id: string,
  lang: string,
  mediaType: string,
  recordType: string,
};

type NDEFScanOptions = {
  signal: AbortSignal,
};

type NDEFWriteOptions = {
  overwrite: boolean,
  signal: AbortSignal | null,
};

declare class NDEFMessage {
  +records: NDEFRecord;

  constructor(messageInit: NDEFMessageInit): void;
}

declare class NDEFReader extends EventTarget {
  onreading: EventHandler;
  onreadingerror: EventHandler;

  constructor(): void;

  makeReadOnly(options?: NDEFMakeReadOnlyOptions): void;
  scan(options?: NDEFScanOptions): void;
  write(message: NDEFMessageSource, options?: NDEFWriteOptions): void;
}

declare class NDEFReadingEvent extends Event {
  +message: NDEFMessage;
  +serialNumber: string;

  constructor(type: string, readingEventInitDict: NDEFReadingEventInit): void;
}

declare class NDEFRecord {
  +data: DataView | null;
  +encoding: string | null;
  +id: string | null;
  +lang: string | null;
  +mediaType: string | null;
  +recordType: string;

  constructor(recordInit: NDEFRecordInit): void;

  toRecords(): Array<NDEFRecord> | null;
}
