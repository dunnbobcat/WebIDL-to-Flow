type BarcodeFormat =
  | 'aztec'
  | 'code_128'
  | 'code_39'
  | 'code_93'
  | 'codabar'
  | 'data_matrix'
  | 'ean_13'
  | 'ean_8'
  | 'itf'
  | 'pdf417'
  | 'qr_code'
  | 'unknown'
  | 'upc_a'
  | 'upc_e';

type LandmarkType = 'mouth' | 'eye' | 'nose';

type BarcodeDetectorOptions = {
  formats: Array<BarcodeFormat>,
};

type DetectedBarcode = {
  boundingBox: DOMRectReadOnly,
  cornerPoints: Array<Point2D>,
  format: BarcodeFormat,
  rawValue: string,
};

type DetectedFace = {
  boundingBox: DOMRectReadOnly,
  landmarks: Array<Landmark> | null,
};

type FaceDetectorOptions = {
  fastMode: boolean,
  maxDetectedFaces: number,
};

type Landmark = {
  locations: Array<Point2D>,
  type: LandmarkType,
};

declare class BarcodeDetector {
  constructor(barcodeDetectorOptions?: BarcodeDetectorOptions): void;

  static getSupportedFormats(): Array<BarcodeFormat>;
  detect(image: ImageBitmapSource): Array<DetectedBarcode>;
}

declare class FaceDetector {
  constructor(faceDetectorOptions?: FaceDetectorOptions): void;

  detect(image: ImageBitmapSource): Array<DetectedFace>;
}
