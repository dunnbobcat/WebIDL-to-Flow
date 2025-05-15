type SVGPathDataSettings = {
  normalize: boolean,
};

declare class SVGPathElement
  extends SVGGeometryElement
  mixins mixin$SVGPathData
{
  +pathLength: SVGAnimatedNumber;

  getPathSegmentAtLength(distance: number): SVGPathSegment | null;
  getPointAtLength(distance: number): DOMPoint;
  getTotalLength(): number;
}

declare class SVGPathSegment {
  type: string;
  values: number;
}

declare class mixin$SVGPathData {
  getPathData(settings?: SVGPathDataSettings): Array<SVGPathSegment>;
  setPathData(pathData: Array<SVGPathSegment>): void;
}
