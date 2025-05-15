type AudioOutputOptions = {
  deviceId: string,
};

/* partial */ interface HTMLMediaElement {
  +sinkId: string;

  setSinkId(sinkId: string): void;
}

/* partial */ interface MediaDevices {
  selectAudioOutput(options?: AudioOutputOptions): MediaDeviceInfo;
}
