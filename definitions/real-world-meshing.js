/* partial */ interface XRFrame {
  +detectedMeshes: XRMeshSet;
}

declare class XRMesh {
  +indices: Uint32Array;
  +lastChangedTime: number;
  +meshSpace: XRSpace;
  +semanticLabel: string | null;
  +vertices: Float32Array;
}

type XRMeshSet = Set<XRMesh>;
