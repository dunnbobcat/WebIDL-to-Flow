type CaptureAction = 'next' | 'previous' | 'first' | 'last';

type CaptureActionEventInit = {
  action: string,
};

declare class CaptureActionEvent extends Event {
  +action: CaptureAction;

  constructor(init?: CaptureActionEventInit): void;
}

/* partial */ interface MediaDevices {
  oncaptureaction: EventHandler;

  setSupportedCaptureActions(actions: Array<string>): void;
}

/* partial */ interface MediaStreamTrack {
  getSupportedCaptureActions(): Array<string>;
  sendCaptureAction(action: CaptureAction): void;
}
