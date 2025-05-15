type VideoFrameCallbackMetadata = {
  captureTime: number,
  expectedDisplayTime: number,
  height: number,
  mediaTime: number,
  presentationTime: number,
  presentedFrames: number,
  processingDuration: number,
  receiveTime: number,
  rtpTimestamp: number,
  width: number,
};

type VideoFrameRequestCallback = (
  now: number,
  metadata: VideoFrameCallbackMetadata,
) => void;

/* partial */ declare class HTMLVideoElement {
  cancelVideoFrameCallback(handle: number): void;
  requestVideoFrameCallback(callback: VideoFrameRequestCallback): number;
}
