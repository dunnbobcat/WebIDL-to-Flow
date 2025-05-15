/* partial */ interface Document {
  +namedFlows: NamedFlowMap;
}

declare class NamedFlow extends EventTarget {
  +firstEmptyRegionIndex: number;
  +name: string;
  +overset: boolean;

  getContent(): Array<Node>;
  getRegions(): Array<Element>;
  getRegionsByContent(node: Node): Array<Element>;
}

type NamedFlowMap = Map<string, NamedFlow>;

declare class mixin$Region {
  +regionOverset: string;

  getRegionFlowRanges(): Array<Range> | null;
}
