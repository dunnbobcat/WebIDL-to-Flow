type BlobPart = BufferSource | Blob | string;

type EndingType = 'transparent' | 'native';

type BlobPropertyBag = {
  endings: EndingType,
  type: string,
};

type FilePropertyBag = {
  endings: EndingType,
  lastModified: number,
  type: string,
};

declare class Blob {
  +size: number;
  +type: string;

  constructor(blobParts?: Array<BlobPart>, options?: BlobPropertyBag): void;

  arrayBuffer(): ArrayBuffer;
  bytes(): Uint8Array;
  slice(start?: number, end?: number, contentType?: string): Blob;
  stream(): ReadableStream;
  text(): string;
}

declare class File extends Blob {
  +lastModified: number;
  +name: string;

  constructor(
    fileBits: Array<BlobPart>,
    fileName: string,
    options?: FilePropertyBag,
  ): void;
}

declare class FileList {
  +length: number;

  item(index: number): File | null;
}

declare class FileReader extends EventTarget {
  static +DONE: 2;
  static +EMPTY: 0;
  static +LOADING: 1;

  +error: DOMException | null;
  onabort: EventHandler;
  onerror: EventHandler;
  onload: EventHandler;
  onloadend: EventHandler;
  onloadstart: EventHandler;
  onprogress: EventHandler;
  +readyState: number;
  +result: string | ArrayBuffer | null;

  constructor(): void;

  abort(): void;
  readAsArrayBuffer(blob: Blob): void;
  readAsBinaryString(blob: Blob): void;
  readAsDataURL(blob: Blob): void;
  readAsText(blob: Blob, encoding?: string): void;
}

declare class FileReaderSync {
  constructor(): void;

  readAsArrayBuffer(blob: Blob): ArrayBuffer;
  readAsBinaryString(blob: Blob): string;
  readAsDataURL(blob: Blob): string;
  readAsText(blob: Blob, encoding?: string): string;
}

/* partial */ declare class URL {
  static createObjectURL(obj: Blob | MediaSource): string;
  static revokeObjectURL(url: string): void;
}
