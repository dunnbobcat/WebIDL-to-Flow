type ConstrainPoint2D = Array<Point2D> | ConstrainPoint2DParameters;

type FillLightMode = 'auto' | 'off' | 'flash';

type MeteringMode = 'none' | 'manual' | 'single-shot' | 'continuous';

type RedEyeReduction = 'never' | 'always' | 'controllable';

type ConstrainPoint2DParameters = {
  exact: Array<Point2D>,
  ideal: Array<Point2D>,
};

type MediaSettingsRange = {
  max: number,
  min: number,
  step: number,
};

/* partial */ type MediaTrackCapabilities = {
  brightness: MediaSettingsRange,
  colorTemperature: MediaSettingsRange,
  contrast: MediaSettingsRange,
  exposureCompensation: MediaSettingsRange,
  exposureMode: Array<string>,
  exposureTime: MediaSettingsRange,
  focusDistance: MediaSettingsRange,
  focusMode: Array<string>,
  iso: MediaSettingsRange,
  pan: MediaSettingsRange,
  saturation: MediaSettingsRange,
  sharpness: MediaSettingsRange,
  tilt: MediaSettingsRange,
  torch: Array<boolean>,
  whiteBalanceMode: Array<string>,
  zoom: MediaSettingsRange,
};

/* partial */ type MediaTrackConstraintSet = {
  brightness: ConstrainDouble,
  colorTemperature: ConstrainDouble,
  contrast: ConstrainDouble,
  exposureCompensation: ConstrainDouble,
  exposureMode: ConstrainDOMString,
  exposureTime: ConstrainDouble,
  focusDistance: ConstrainDouble,
  focusMode: ConstrainDOMString,
  iso: ConstrainDouble,
  pan: boolean | ConstrainDouble,
  pointsOfInterest: ConstrainPoint2D,
  saturation: ConstrainDouble,
  sharpness: ConstrainDouble,
  tilt: boolean | ConstrainDouble,
  torch: ConstrainBoolean,
  whiteBalanceMode: ConstrainDOMString,
  zoom: boolean | ConstrainDouble,
};

/* partial */ type MediaTrackSettings = {
  brightness: number,
  colorTemperature: number,
  contrast: number,
  exposureCompensation: number,
  exposureMode: string,
  exposureTime: number,
  focusDistance: number,
  focusMode: string,
  iso: number,
  pan: number,
  pointsOfInterest: Array<Point2D>,
  saturation: number,
  sharpness: number,
  tilt: number,
  torch: boolean,
  whiteBalanceMode: string,
  zoom: number,
};

/* partial */ type MediaTrackSupportedConstraints = {
  brightness: boolean,
  colorTemperature: boolean,
  contrast: boolean,
  exposureCompensation: boolean,
  exposureMode: boolean,
  exposureTime: boolean,
  focusDistance: boolean,
  focusMode: boolean,
  iso: boolean,
  pan: boolean,
  pointsOfInterest: boolean,
  saturation: boolean,
  sharpness: boolean,
  tilt: boolean,
  torch: boolean,
  whiteBalanceMode: boolean,
  zoom: boolean,
};

type PhotoCapabilities = {
  fillLightMode: Array<FillLightMode>,
  imageHeight: MediaSettingsRange,
  imageWidth: MediaSettingsRange,
  redEyeReduction: RedEyeReduction,
};

type PhotoSettings = {
  fillLightMode: FillLightMode,
  imageHeight: number,
  imageWidth: number,
  redEyeReduction: boolean,
};

type Point2D = {
  x: number,
  y: number,
};

declare class ImageCapture {
  +track: MediaStreamTrack;

  constructor(videoTrack: MediaStreamTrack): void;

  getPhotoCapabilities(): Promise<PhotoCapabilities>;
  getPhotoSettings(): Promise<PhotoSettings>;
  grabFrame(): Promise<ImageBitmap>;
  takePhoto(photoSettings?: PhotoSettings): Promise<Blob>;
}
