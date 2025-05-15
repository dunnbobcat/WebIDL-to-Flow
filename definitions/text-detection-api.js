type DetectedText = {
  boundingBox: DOMRectReadOnly,
  cornerPoints: Array<Point2D>,
  rawValue: string,
};

declare class TextDetector {
  constructor(): void;

  detect(image: ImageBitmapSource): Array<DetectedText>;
}
