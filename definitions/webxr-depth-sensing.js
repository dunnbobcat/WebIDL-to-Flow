type XRDepthDataFormat = 'luminance-alpha' | 'float32' | 'unsigned-short';

type XRDepthType = 'raw' | 'smooth';

type XRDepthUsage = 'cpu-optimized' | 'gpu-optimized';

type XRDepthStateInit = {
  dataFormatPreference: Array<XRDepthDataFormat>,
  depthTypeRequest: Array<XRDepthType>,
  matchDepthView: boolean,
  usagePreference: Array<XRDepthUsage>,
};

/* partial */ type XRSessionInit = {
  depthSensing: XRDepthStateInit,
};

declare class XRCPUDepthInformation extends XRDepthInformation {
  +data: ArrayBuffer;

  getDepthInMeters(x: number, y: number): number;
}

declare class XRDepthInformation mixins mixin$XRViewGeometry {
  +height: number;
  +normDepthBufferFromNormView: XRRigidTransform;
  +rawValueToMeters: number;
  +width: number;
}

/* partial */ declare class XRFrame {
  getDepthInformation(view: XRView): XRCPUDepthInformation | null;
}

/* partial */ declare class XRSession {
  +depthActive: boolean | null;
  +depthDataFormat: XRDepthDataFormat;
  +depthType: XRDepthType | null;
  +depthUsage: XRDepthUsage;

  pauseDepthSensing(): void;
  resumeDepthSensing(): void;
}

/* partial */ declare class XRWebGLBinding {
  getDepthInformation(view: XRView): XRWebGLDepthInformation | null;
}

declare class XRWebGLDepthInformation extends XRDepthInformation {
  +imageIndex: number | null;
  +texture: WebGLTexture;
  +textureType: XRTextureType;
}
