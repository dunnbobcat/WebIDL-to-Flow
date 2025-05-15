type XRHitTestTrackableType = 'point' | 'plane' | 'mesh';

type XRHitTestOptionsInit = {
  entityTypes: Array<XRHitTestTrackableType>,
  offsetRay: XRRay,
  space: XRSpace,
};

type XRRayDirectionInit = {
  w: number,
  x: number,
  y: number,
  z: number,
};

type XRTransientInputHitTestOptionsInit = {
  entityTypes: Array<XRHitTestTrackableType>,
  offsetRay: XRRay,
  profile: string,
};

/* partial */ interface XRFrame {
  getHitTestResults(hitTestSource: XRHitTestSource): Array<XRHitTestResult>;
  getHitTestResultsForTransientInput(
    hitTestSource: XRTransientInputHitTestSource,
  ): Array<XRTransientInputHitTestResult>;
}

declare class XRHitTestResult {
  getPose(baseSpace: XRSpace): XRPose | null;
}

declare class XRHitTestSource {
  cancel(): void;
}

declare class XRRay {
  +direction: DOMPointReadOnly;
  +matrix: Float32Array;
  +origin: DOMPointReadOnly;

  constructor(origin?: DOMPointInit, direction?: XRRayDirectionInit): void;
  constructor(transform: XRRigidTransform): void;
}

/* partial */ interface XRSession {
  requestHitTestSource(options: XRHitTestOptionsInit): XRHitTestSource;
  requestHitTestSourceForTransientInput(
    options: XRTransientInputHitTestOptionsInit,
  ): XRTransientInputHitTestSource;
}

declare class XRTransientInputHitTestResult {
  +inputSource: XRInputSource;
  +results: XRHitTestResult;
}

declare class XRTransientInputHitTestSource {
  cancel(): void;
}
