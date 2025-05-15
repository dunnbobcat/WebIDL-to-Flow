/* partial */ declare class HTMLVideoElement {
  getVideoPlaybackQuality(): VideoPlaybackQuality;
}

declare class VideoPlaybackQuality {
  +corruptedVideoFrames: number;
  +creationTime: number;
  +droppedVideoFrames: number;
  +totalVideoFrames: number;
}
