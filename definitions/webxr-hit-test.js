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

/* partial */ declare class XRFrame {
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

/* partial */ declare class XRSession {
  requestHitTestSource(options: XRHitTestOptionsInit): Promise<XRHitTestSource>;
  requestHitTestSourceForTransientInput(
    options: XRTransientInputHitTestOptionsInit,
  ): Promise<XRTransientInputHitTestSource>;
}

declare class XRTransientInputHitTestResult {
  +inputSource: XRInputSource;
  +results: $ReadOnlyArray<XRHitTestResult>;
}

declare class XRTransientInputHitTestSource {
  cancel(): void;
}
