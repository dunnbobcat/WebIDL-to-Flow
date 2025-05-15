type MIDIPortConnectionState = 'open' | 'closed' | 'pending';

type MIDIPortDeviceState = 'disconnected' | 'connected';

type MIDIPortType = 'input' | 'output';

type MIDIConnectionEventInit = {
  port: MIDIPort,
};

type MIDIMessageEventInit = {
  data: Uint8Array,
};

type MIDIOptions = {
  software: boolean,
  sysex: boolean,
};

type MidiPermissionDescriptor = {
  sysex: boolean,
};

declare class MIDIAccess extends EventTarget {
  +inputs: MIDIInputMap;
  onstatechange: EventHandler;
  +outputs: MIDIOutputMap;
  +sysexEnabled: boolean;
}

declare class MIDIConnectionEvent extends Event {
  +port: MIDIPort | null;

  constructor(type: string, eventInitDict?: MIDIConnectionEventInit): void;
}

declare class MIDIInput extends MIDIPort {
  onmidimessage: EventHandler;
}

type MIDIInputMap = Map<string, MIDIInput>;

declare class MIDIMessageEvent extends Event {
  +data: Uint8Array | null;

  constructor(type: string, eventInitDict?: MIDIMessageEventInit): void;
}

declare class MIDIOutput extends MIDIPort {
  clear(): void;
  send(data: Array<number>, timestamp?: number): void;
}

type MIDIOutputMap = Map<string, MIDIOutput>;

declare class MIDIPort extends EventTarget {
  +connection: MIDIPortConnectionState;
  +id: string;
  +manufacturer: string | null;
  +name: string | null;
  onstatechange: EventHandler;
  +state: MIDIPortDeviceState;
  +type: MIDIPortType;
  +version: string | null;

  close(): Promise<MIDIPort>;
  open(): Promise<MIDIPort>;
}

/* partial */ declare class Navigator {
  requestMIDIAccess(options?: MIDIOptions): Promise<MIDIAccess>;
}
