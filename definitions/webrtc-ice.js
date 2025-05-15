type RTCIceGatherOptions = {
  gatherPolicy: RTCIceTransportPolicy,
  iceServers: Array<RTCIceServer>,
};

/* partial */ type RTCIceParameters = {
  iceLite: boolean,
};

/* partial */ declare class RTCIceTransport {
  onerror: EventHandler;
  onicecandidate: EventHandler;

  constructor(): void;

  addRemoteCandidate(remoteCandidate?: RTCIceCandidateInit): void;
  gather(options?: RTCIceGatherOptions): void;
  start(remoteParameters?: RTCIceParameters, role?: RTCIceRole): void;
  stop(): void;
}
