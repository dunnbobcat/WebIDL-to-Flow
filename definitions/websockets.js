type BinaryType = 'blob' | 'arraybuffer';

type CloseEventInit = {
  code: number,
  reason: string,
  wasClean: boolean,
};

declare class CloseEvent extends Event {
  +code: number;
  +reason: string;
  +wasClean: boolean;

  constructor(type: string, eventInitDict?: CloseEventInit): void;
}

declare class WebSocket extends EventTarget {
  static +CLOSED: 3;
  static +CLOSING: 2;
  static +CONNECTING: 0;
  static +OPEN: 1;

  binaryType: BinaryType;
  +bufferedAmount: number;
  +extensions: string;
  onclose: EventHandler;
  onerror: EventHandler;
  onmessage: EventHandler;
  onopen: EventHandler;
  +protocol: string;
  +readyState: number;
  +url: string;

  constructor(url: string, protocols?: string | Array<string>): void;

  close(code?: number, reason?: string): void;
  send(data: BufferSource | Blob | string): void;
}
