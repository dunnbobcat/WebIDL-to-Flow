type XRWebGLRenderingContext = WebGLRenderingContext | WebGL2RenderingContext;

type XREye = 'none' | 'left' | 'right';

type XRHandedness = 'none' | 'left' | 'right';

type XRReferenceSpaceType =
  | 'viewer'
  | 'local'
  | 'local-floor'
  | 'bounded-floor'
  | 'unbounded';

type XRSessionMode = 'inline' | 'immersive-vr' | 'immersive-ar';

type XRTargetRayMode =
  | 'gaze'
  | 'tracked-pointer'
  | 'screen'
  | 'transient-pointer';

type XRVisibilityState = 'visible' | 'visible-blurred' | 'hidden';

/* partial */ type WebGLContextAttributes = {
  xrCompatible: boolean,
};

type XRInputSourceEventInit = {
  frame: XRFrame,
  inputSource: XRInputSource,
};

type XRInputSourcesChangeEventInit = {
  added: Array<XRInputSource>,
  removed: Array<XRInputSource>,
  session: XRSession,
};

type XRPermissionDescriptor = {
  mode: XRSessionMode,
  optionalFeatures: Array<string>,
  requiredFeatures: Array<string>,
};

type XRReferenceSpaceEventInit = {
  referenceSpace: XRReferenceSpace,
  transform: XRRigidTransform | null,
};

type XRRenderStateInit = {
  baseLayer: XRWebGLLayer | null,
  depthFar: number,
  depthNear: number,
  inlineVerticalFieldOfView: number,
  layers: Array<XRLayer> | null,
  passthroughFullyObscured: boolean,
};

type XRSessionEventInit = {
  session: XRSession,
};

type XRSessionInit = {
  optionalFeatures: Array<string>,
  requiredFeatures: Array<string>,
};

type XRSessionSupportedPermissionDescriptor = {
  mode: XRSessionMode,
};

type XRWebGLLayerInit = {
  alpha: boolean,
  antialias: boolean,
  depth: boolean,
  framebufferScaleFactor: number,
  ignoreDepthValues: boolean,
  stencil: boolean,
};

type XRFrameRequestCallback = (time: number, frame: XRFrame) => void;

/* partial */ interface Navigator {
  +xr: XRSystem;
}

declare class XRBoundedReferenceSpace extends XRReferenceSpace {
  +boundsGeometry: DOMPointReadOnly;
}

declare class XRFrame {
  +predictedDisplayTime: number;
  +session: XRSession;

  getPose(space: XRSpace, baseSpace: XRSpace): XRPose | null;
  getViewerPose(referenceSpace: XRReferenceSpace): XRViewerPose | null;
}

declare class XRInputSource {
  +gripSpace: XRSpace | null;
  +handedness: XRHandedness;
  +profiles: string;
  +skipRendering: boolean;
  +targetRayMode: XRTargetRayMode;
  +targetRaySpace: XRSpace;
}

declare class XRInputSourceArray {
  +length: number;

  @@iterator(): Iterator<XRInputSource>;

  (index: number): XRInputSource;
}

declare class XRInputSourceEvent extends Event {
  +frame: XRFrame;
  +inputSource: XRInputSource;

  constructor(type: string, eventInitDict: XRInputSourceEventInit): void;
}

declare class XRInputSourcesChangeEvent extends Event {
  +added: XRInputSource;
  +removed: XRInputSource;
  +session: XRSession;

  constructor(type: string, eventInitDict: XRInputSourcesChangeEventInit): void;
}

declare class XRLayer extends EventTarget {}

declare class XRPermissionStatus extends PermissionStatus {
  granted: string;
}

declare class XRPose {
  +angularVelocity: DOMPointReadOnly | null;
  +emulatedPosition: boolean;
  +linearVelocity: DOMPointReadOnly | null;
  +transform: XRRigidTransform;
}

declare class XRReferenceSpace extends XRSpace {
  onreset: EventHandler;

  getOffsetReferenceSpace(originOffset: XRRigidTransform): XRReferenceSpace;
}

declare class XRReferenceSpaceEvent extends Event {
  +referenceSpace: XRReferenceSpace;
  +transform: XRRigidTransform | null;

  constructor(type: string, eventInitDict: XRReferenceSpaceEventInit): void;
}

declare class XRRenderState {
  +baseLayer: XRWebGLLayer | null;
  +depthFar: number;
  +depthNear: number;
  +inlineVerticalFieldOfView: number | null;
  +passthroughFullyObscured: boolean | null;
}

declare class XRRigidTransform {
  +inverse: XRRigidTransform;
  +matrix: Float32Array;
  +orientation: DOMPointReadOnly;
  +position: DOMPointReadOnly;

  constructor(position?: DOMPointInit, orientation?: DOMPointInit): void;
}

declare class XRSession extends EventTarget {
  +enabledFeatures: string;
  +frameRate: number | null;
  +inputSources: XRInputSourceArray;
  +isSystemKeyboardSupported: boolean;
  onend: EventHandler;
  onframeratechange: EventHandler;
  oninputsourceschange: EventHandler;
  onselect: EventHandler;
  onselectend: EventHandler;
  onselectstart: EventHandler;
  onsqueeze: EventHandler;
  onsqueezeend: EventHandler;
  onsqueezestart: EventHandler;
  onvisibilitychange: EventHandler;
  +renderState: XRRenderState;
  +supportedFrameRates: Float32Array | null;
  +trackedSources: XRInputSourceArray;
  +visibilityState: XRVisibilityState;

  cancelAnimationFrame(handle: number): void;
  end(): void;
  requestAnimationFrame(callback: XRFrameRequestCallback): number;
  requestReferenceSpace(type: XRReferenceSpaceType): XRReferenceSpace;
  updateRenderState(state?: XRRenderStateInit): void;
  updateTargetFrameRate(rate: number): void;
}

declare class XRSessionEvent extends Event {
  +session: XRSession;

  constructor(type: string, eventInitDict: XRSessionEventInit): void;
}

declare class XRSpace extends EventTarget {}

declare class XRSystem extends EventTarget {
  ondevicechange: EventHandler;

  isSessionSupported(mode: XRSessionMode): boolean;
  requestSession(mode: XRSessionMode, options?: XRSessionInit): XRSession;
}

declare class XRView mixins mixin$XRViewGeometry {
  +eye: XREye;
  +recommendedViewportScale: number | null;

  requestViewportScale(scale: number | null): void;
}

declare class XRViewerPose extends XRPose {
  +views: XRView;
}

declare class XRViewport {
  +height: number;
  +width: number;
  +x: number;
  +y: number;
}

declare class XRWebGLLayer extends XRLayer {
  +antialias: boolean;
  fixedFoveation: number | null;
  +framebuffer: WebGLFramebuffer | null;
  +framebufferHeight: number;
  +framebufferWidth: number;
  +ignoreDepthValues: boolean;

  constructor(
    session: XRSession,
    context: XRWebGLRenderingContext,
    layerInit?: XRWebGLLayerInit,
  ): void;

  static getNativeFramebufferScaleFactor(session: XRSession): number;
  getViewport(view: XRView): XRViewport | null;
}

/* partial */ declare class mixin$WebGLRenderingContextBase {
  makeXRCompatible(): void;
}

declare class mixin$XRViewGeometry {
  +projectionMatrix: Float32Array;
  +transform: XRRigidTransform;
}
