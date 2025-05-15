type RTCDegradationPreference =
  | 'maintain-framerate'
  | 'maintain-resolution'
  | 'balanced';

/* partial */ type RTCRtpSendParameters = {
  degradationPreference: RTCDegradationPreference,
};

/* partial */ declare class MediaStreamTrack {
  contentHint: string;
}
