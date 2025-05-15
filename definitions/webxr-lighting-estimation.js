type XRReflectionFormat = 'srgba8' | 'rgba16f';

type XRLightProbeInit = {
  reflectionFormat: XRReflectionFormat,
};

/* partial */ declare class XRFrame {
  getLightEstimate(lightProbe: XRLightProbe): XRLightEstimate | null;
}

declare class XRLightEstimate {
  +primaryLightDirection: DOMPointReadOnly;
  +primaryLightIntensity: DOMPointReadOnly;
  +sphericalHarmonicsCoefficients: Float32Array;
}

declare class XRLightProbe extends EventTarget {
  onreflectionchange: EventHandler;
  +probeSpace: XRSpace;
}

/* partial */ declare class XRSession {
  +preferredReflectionFormat: XRReflectionFormat;

  requestLightProbe(options?: XRLightProbeInit): Promise<XRLightProbe>;
}

/* partial */ declare class XRWebGLBinding {
  getReflectionCubeMap(lightProbe: XRLightProbe): WebGLTexture | null;
}
