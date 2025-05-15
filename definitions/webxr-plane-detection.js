type XRPlaneOrientation = 'horizontal' | 'vertical';

/* partial */ interface XRFrame {
  +detectedPlanes: XRPlaneSet;
}

declare class XRPlane {
  +lastChangedTime: number;
  +orientation: XRPlaneOrientation | null;
  +planeSpace: XRSpace;
  +polygon: DOMPointReadOnly;
  +semanticLabel: string | null;
}

type XRPlaneSet = Set<XRPlane>;

/* partial */ interface XRSession {
  initiateRoomCapture(): void;
}
