type XRPlaneOrientation = 'horizontal' | 'vertical';

/* partial */ declare class XRFrame {
  +detectedPlanes: XRPlaneSet;
}

declare class XRPlane {
  +lastChangedTime: number;
  +orientation: XRPlaneOrientation | null;
  +planeSpace: XRSpace;
  +polygon: $ReadOnlyArray<DOMPointReadOnly>;
  +semanticLabel: string | null;
}

type XRPlaneSet = Set<XRPlane>;

/* partial */ declare class XRSession {
  initiateRoomCapture(): Promise<void>;
}
