type AudioOutputOptions = {
  deviceId: string,
};

/* partial */ declare class HTMLMediaElement {
  +sinkId: string;

  setSinkId(sinkId: string): Promise<void>;
}

/* partial */ declare class MediaDevices {
  selectAudioOutput(options?: AudioOutputOptions): Promise<MediaDeviceInfo>;
}
