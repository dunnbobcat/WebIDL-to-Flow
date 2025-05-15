declare class XRAnchor {
  +anchorSpace: XRSpace;

  delete(): void;
  requestPersistentHandle(): string;
}

type XRAnchorSet = Set<XRAnchor>;

/* partial */ interface XRFrame {
  createAnchor(pose: XRRigidTransform, space: XRSpace): XRAnchor;
}

/* partial */ interface XRFrame {
  +trackedAnchors: XRAnchorSet;
}

/* partial */ interface XRHitTestResult {
  createAnchor(): XRAnchor;
}

/* partial */ interface XRSession {
  +persistentAnchors: string;

  deletePersistentAnchor(uuid: string): void;
  restorePersistentAnchor(uuid: string): XRAnchor;
}
