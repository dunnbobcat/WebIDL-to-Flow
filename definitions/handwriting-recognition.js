type HandwritingInputType = 'mouse' | 'stylus' | 'touch';

type HandwritingRecognitionType = 'text' | 'per-character';

type HandwritingDrawingSegment = {
  beginPointIndex: number,
  endPointIndex: number,
  strokeIndex: number,
};

type HandwritingHints = {
  alternatives: number,
  inputType: string,
  recognitionType: string,
  textContext: string,
};

type HandwritingHintsQueryResult = {
  alternatives: boolean,
  inputType: Array<HandwritingInputType>,
  recognitionType: Array<HandwritingRecognitionType>,
  textContext: boolean,
};

type HandwritingModelConstraint = {
  languages: Array<string>,
};

type HandwritingPoint = {
  t: number,
  x: number,
  y: number,
};

type HandwritingPrediction = {
  segmentationResult: Array<HandwritingSegment>,
  text: string,
};

type HandwritingRecognizerQueryResult = {
  hints: HandwritingHintsQueryResult,
  textAlternatives: boolean,
  textSegmentation: boolean,
};

type HandwritingSegment = {
  beginIndex: number,
  drawingSegments: Array<HandwritingDrawingSegment>,
  endIndex: number,
  grapheme: string,
};

declare class HandwritingDrawing {
  addStroke(stroke: HandwritingStroke): void;
  clear(): void;
  getPrediction(): Array<HandwritingPrediction>;
  getStrokes(): Array<HandwritingStroke>;
  removeStroke(stroke: HandwritingStroke): void;
}

declare class HandwritingRecognizer {
  finish(): void;
  startDrawing(hints?: HandwritingHints): HandwritingDrawing;
}

declare class HandwritingStroke {
  constructor(): void;

  addPoint(point: HandwritingPoint): void;
  clear(): void;
  getPoints(): Array<HandwritingPoint>;
}

/* partial */ interface Navigator {
  queryHandwritingRecognizer(
    constraint: HandwritingModelConstraint,
  ): HandwritingRecognizerQueryResult | null;
}

/* partial */ interface Navigator {
  createHandwritingRecognizer(
    constraint: HandwritingModelConstraint,
  ): HandwritingRecognizer;
}
