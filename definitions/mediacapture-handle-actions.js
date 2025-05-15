type CaptureAction = 'next' | 'previous' | 'first' | 'last';

type CaptureActionEventInit = {
  action: string,
};

declare class CaptureActionEvent extends Event {
  +action: CaptureAction;

  constructor(init?: CaptureActionEventInit): void;
}

/* partial */ declare class MediaDevices {
  oncaptureaction: EventHandler;

  setSupportedCaptureActions(actions: Array<string>): void;
}

/* partial */ declare class MediaStreamTrack {
  getSupportedCaptureActions(): Array<string>;
  sendCaptureAction(action: CaptureAction): Promise<void>;
}
