type XRReflectionFormat = 'srgba8' | 'rgba16f';

type XRLightProbeInit = {
  reflectionFormat: XRReflectionFormat,
};

/* partial */ interface XRFrame {
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

/* partial */ interface XRSession {
  +preferredReflectionFormat: XRReflectionFormat;

  requestLightProbe(options?: XRLightProbeInit): XRLightProbe;
}

/* partial */ interface XRWebGLBinding {
  getReflectionCubeMap(lightProbe: XRLightProbe): WebGLTexture | null;
}
