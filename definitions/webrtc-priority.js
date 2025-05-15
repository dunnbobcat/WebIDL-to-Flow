type RTCPriorityType = 'very-low' | 'low' | 'medium' | 'high';

/* partial */ type RTCDataChannelInit = {
  priority: RTCPriorityType,
};

/* partial */ type RTCRtpEncodingParameters = {
  networkPriority: RTCPriorityType,
  priority: RTCPriorityType,
};

/* partial */ declare class RTCDataChannel {
  +priority: RTCPriorityType;
}
