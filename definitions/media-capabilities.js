type ColorGamut = 'srgb' | 'p3' | 'rec2020';

type HdrMetadataType = 'smpteSt2086' | 'smpteSt2094-10' | 'smpteSt2094-40';

type MediaDecodingType = 'file' | 'media-source' | 'webrtc';

type MediaEncodingType = 'record' | 'webrtc';

type TransferFunction = 'srgb' | 'pq' | 'hlg';

type AudioConfiguration = {
  bitrate: number,
  channels: string,
  contentType: string,
  samplerate: number,
  spatialRendering: boolean,
};

type KeySystemTrackConfiguration = {
  encryptionScheme: string | null,
  robustness: string,
};

type MediaCapabilitiesDecodingInfo = {
  configuration: MediaDecodingConfiguration,
  keySystemAccess: MediaKeySystemAccess | null,
  powerEfficient: boolean,
  smooth: boolean,
  supported: boolean,
};

type MediaCapabilitiesEncodingInfo = {
  configuration: MediaEncodingConfiguration,
  powerEfficient: boolean,
  smooth: boolean,
  supported: boolean,
};

type MediaCapabilitiesInfo = {
  powerEfficient: boolean,
  smooth: boolean,
  supported: boolean,
};

type MediaCapabilitiesKeySystemConfiguration = {
  audio: KeySystemTrackConfiguration,
  distinctiveIdentifier: MediaKeysRequirement,
  initDataType: string,
  keySystem: string,
  persistentState: MediaKeysRequirement,
  sessionTypes: Array<string>,
  video: KeySystemTrackConfiguration,
};

type MediaConfiguration = {
  audio: AudioConfiguration,
  video: VideoConfiguration,
};

type MediaDecodingConfiguration = {
  audio: AudioConfiguration,
  keySystemConfiguration: MediaCapabilitiesKeySystemConfiguration,
  type: MediaDecodingType,
  video: VideoConfiguration,
};

type MediaEncodingConfiguration = {
  audio: AudioConfiguration,
  type: MediaEncodingType,
  video: VideoConfiguration,
};

type VideoConfiguration = {
  bitrate: number,
  colorGamut: ColorGamut,
  contentType: string,
  framerate: number,
  hasAlphaChannel: boolean,
  hdrMetadataType: HdrMetadataType,
  height: number,
  scalabilityMode: string,
  spatialScalability: boolean,
  transferFunction: TransferFunction,
  width: number,
};

declare class MediaCapabilities {
  decodingInfo(
    configuration: MediaDecodingConfiguration,
  ): Promise<MediaCapabilitiesDecodingInfo>;
  encodingInfo(
    configuration: MediaEncodingConfiguration,
  ): Promise<MediaCapabilitiesEncodingInfo>;
}

/* partial */ declare class Navigator {
  +mediaCapabilities: MediaCapabilities;
}

/* partial */ declare class WorkerNavigator {
  +mediaCapabilities: MediaCapabilities;
}
