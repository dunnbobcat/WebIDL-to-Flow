declare class XRAnchor {
  +anchorSpace: XRSpace;

  delete(): void;
  requestPersistentHandle(): Promise<string>;
}

type XRAnchorSet = Set<XRAnchor>;

/* partial */ declare class XRFrame {
  createAnchor(pose: XRRigidTransform, space: XRSpace): Promise<XRAnchor>;
}

/* partial */ declare class XRFrame {
  +trackedAnchors: XRAnchorSet;
}

/* partial */ declare class XRHitTestResult {
  createAnchor(): Promise<XRAnchor>;
}

/* partial */ declare class XRSession {
  +persistentAnchors: $ReadOnlyArray<string>;

  deletePersistentAnchor(uuid: string): Promise<void>;
  restorePersistentAnchor(uuid: string): Promise<XRAnchor>;
}
