type CaptureHandle = {
  handle: string,
  origin: string,
};

type CaptureHandleConfig = {
  exposeOrigin: boolean,
  handle: string,
  permittedOrigins: Array<string>,
};

/* partial */ declare class MediaDevices {
  setCaptureHandleConfig(config?: CaptureHandleConfig): void;
}

/* partial */ declare class MediaStreamTrack {
  getCaptureHandle(): CaptureHandle | null;
}

/* partial */ declare class MediaStreamTrack {
  oncapturehandlechange: EventHandler;
}
