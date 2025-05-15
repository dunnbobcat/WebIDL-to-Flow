type PortalActivateEventInit = {
  data: any,
};

type PortalActivateOptions = {
  data: any,
};

declare class HTMLPortalElement extends HTMLElement {
  onmessage: EventHandler;
  onmessageerror: EventHandler;
  referrerPolicy: string;
  src: string;

  constructor(): void;

  activate(options?: PortalActivateOptions): Promise<void>;
  postMessage(message: any, options?: StructuredSerializeOptions): void;
}

declare class PortalActivateEvent extends Event {
  +data: any;

  constructor(type: string, eventInitDict?: PortalActivateEventInit): void;

  adoptPredecessor(): HTMLPortalElement;
}

declare class PortalHost extends EventTarget {
  onmessage: EventHandler;
  onmessageerror: EventHandler;

  postMessage(message: any, options?: StructuredSerializeOptions): void;
}

/* partial */ declare class Window {
  +portalHost: PortalHost | null;
}

/* partial */ declare class mixin$WindowEventHandlers {
  onportalactivate: EventHandler;
}
