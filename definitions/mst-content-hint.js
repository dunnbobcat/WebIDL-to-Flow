type RTCDegradationPreference =
  | 'maintain-framerate'
  | 'maintain-resolution'
  | 'balanced';

/* partial */ type RTCRtpSendParameters = {
  degradationPreference: RTCDegradationPreference,
};

/* partial */ interface MediaStreamTrack {
  contentHint: string;
}
