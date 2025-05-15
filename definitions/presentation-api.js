type PresentationConnectionCloseReason = 'error' | 'closed' | 'wentaway';

type PresentationConnectionState =
  | 'connecting'
  | 'connected'
  | 'closed'
  | 'terminated';

type PresentationConnectionAvailableEventInit = {
  connection: PresentationConnection,
};

type PresentationConnectionCloseEventInit = {
  message: string,
  reason: PresentationConnectionCloseReason,
};

/* partial */ interface Navigator {
  +presentation: Presentation;
}

declare class Presentation {}

/* partial */ interface Presentation {
  defaultRequest: PresentationRequest | null;
}

/* partial */ interface Presentation {
  +receiver: PresentationReceiver | null;
}

declare class PresentationAvailability extends EventTarget {
  onchange: EventHandler;
  +value: boolean;
}

declare class PresentationConnection extends EventTarget {
  binaryType: BinaryType;
  +id: string;
  onclose: EventHandler;
  onconnect: EventHandler;
  onmessage: EventHandler;
  onterminate: EventHandler;
  +state: PresentationConnectionState;
  +url: string;

  close(): void;
  send(message: string): void;
  send(data: Blob): void;
  send(data: ArrayBuffer): void;
  send(data: ArrayBufferView): void;
  terminate(): void;
}

declare class PresentationConnectionAvailableEvent extends Event {
  +connection: PresentationConnection;

  constructor(
    type: string,
    eventInitDict: PresentationConnectionAvailableEventInit,
  ): void;
}

declare class PresentationConnectionCloseEvent extends Event {
  +message: string;
  +reason: PresentationConnectionCloseReason;

  constructor(
    type: string,
    eventInitDict: PresentationConnectionCloseEventInit,
  ): void;
}

declare class PresentationConnectionList extends EventTarget {
  +connections: PresentationConnection;
  onconnectionavailable: EventHandler;
}

declare class PresentationReceiver {
  +connectionList: PresentationConnectionList;
}

declare class PresentationRequest extends EventTarget {
  onconnectionavailable: EventHandler;

  constructor(url: string): void;
  constructor(urls: Array<string>): void;

  getAvailability(): PresentationAvailability;
  reconnect(presentationId: string): PresentationConnection;
  start(): PresentationConnection;
}
