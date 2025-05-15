type CaptureHandle = {
  handle: string,
  origin: string,
};

type CaptureHandleConfig = {
  exposeOrigin: boolean,
  handle: string,
  permittedOrigins: Array<string>,
};

/* partial */ interface MediaDevices {
  setCaptureHandleConfig(config?: CaptureHandleConfig): void;
}

/* partial */ interface MediaStreamTrack {
  getCaptureHandle(): CaptureHandle | null;
}

/* partial */ interface MediaStreamTrack {
  oncapturehandlechange: EventHandler;
}
