type XRLayerLayout =
  | 'default'
  | 'mono'
  | 'stereo'
  | 'stereo-left-right'
  | 'stereo-top-bottom';

type XRLayerQuality = 'default' | 'text-optimized' | 'graphics-optimized';

type XRTextureType = 'texture' | 'texture-array';

type XRCubeLayerInit = {
  clearOnAccess: boolean,
  colorFormat: GLenum,
  depthFormat: GLenum | null,
  isStatic: boolean,
  layout: XRLayerLayout,
  mipLevels: number,
  orientation: DOMPointReadOnly | null,
  space: XRSpace,
  viewPixelHeight: number,
  viewPixelWidth: number,
};

type XRCylinderLayerInit = {
  aspectRatio: number,
  centralAngle: number,
  clearOnAccess: boolean,
  colorFormat: GLenum,
  depthFormat: GLenum | null,
  isStatic: boolean,
  layout: XRLayerLayout,
  mipLevels: number,
  radius: number,
  space: XRSpace,
  textureType: XRTextureType,
  transform: XRRigidTransform | null,
  viewPixelHeight: number,
  viewPixelWidth: number,
};

type XREquirectLayerInit = {
  centralHorizontalAngle: number,
  clearOnAccess: boolean,
  colorFormat: GLenum,
  depthFormat: GLenum | null,
  isStatic: boolean,
  layout: XRLayerLayout,
  lowerVerticalAngle: number,
  mipLevels: number,
  radius: number,
  space: XRSpace,
  textureType: XRTextureType,
  transform: XRRigidTransform | null,
  upperVerticalAngle: number,
  viewPixelHeight: number,
  viewPixelWidth: number,
};

type XRLayerEventInit = {
  layer: XRLayer,
};

type XRLayerInit = {
  clearOnAccess: boolean,
  colorFormat: GLenum,
  depthFormat: GLenum | null,
  isStatic: boolean,
  layout: XRLayerLayout,
  mipLevels: number,
  space: XRSpace,
  viewPixelHeight: number,
  viewPixelWidth: number,
};

type XRMediaCylinderLayerInit = {
  aspectRatio: number | null,
  centralAngle: number,
  invertStereo: boolean,
  layout: XRLayerLayout,
  radius: number,
  space: XRSpace,
  transform: XRRigidTransform | null,
};

type XRMediaEquirectLayerInit = {
  centralHorizontalAngle: number,
  invertStereo: boolean,
  layout: XRLayerLayout,
  lowerVerticalAngle: number,
  radius: number,
  space: XRSpace,
  transform: XRRigidTransform | null,
  upperVerticalAngle: number,
};

type XRMediaLayerInit = {
  invertStereo: boolean,
  layout: XRLayerLayout,
  space: XRSpace,
};

type XRMediaQuadLayerInit = {
  height: number | null,
  invertStereo: boolean,
  layout: XRLayerLayout,
  space: XRSpace,
  transform: XRRigidTransform | null,
  width: number | null,
};

type XRProjectionLayerInit = {
  clearOnAccess: boolean,
  colorFormat: GLenum,
  depthFormat: GLenum,
  scaleFactor: number,
  textureType: XRTextureType,
};

type XRQuadLayerInit = {
  clearOnAccess: boolean,
  colorFormat: GLenum,
  depthFormat: GLenum | null,
  height: number,
  isStatic: boolean,
  layout: XRLayerLayout,
  mipLevels: number,
  space: XRSpace,
  textureType: XRTextureType,
  transform: XRRigidTransform | null,
  viewPixelHeight: number,
  viewPixelWidth: number,
  width: number,
};

declare class XRCompositionLayer extends XRLayer {
  blendTextureSourceAlpha: boolean;
  forceMonoPresentation: boolean;
  +layout: XRLayerLayout;
  +mipLevels: number;
  +needsRedraw: boolean;
  opacity: number;
  quality: XRLayerQuality;

  destroy(): void;
}

declare class XRCubeLayer extends XRCompositionLayer {
  onredraw: EventHandler;
  orientation: DOMPointReadOnly;
  space: XRSpace;
}

declare class XRCylinderLayer extends XRCompositionLayer {
  aspectRatio: number;
  centralAngle: number;
  onredraw: EventHandler;
  radius: number;
  space: XRSpace;
  transform: XRRigidTransform;
}

declare class XREquirectLayer extends XRCompositionLayer {
  centralHorizontalAngle: number;
  lowerVerticalAngle: number;
  onredraw: EventHandler;
  radius: number;
  space: XRSpace;
  transform: XRRigidTransform;
  upperVerticalAngle: number;
}

declare class XRLayerEvent extends Event {
  +layer: XRLayer;

  constructor(type: string, eventInitDict: XRLayerEventInit): void;
}

declare class XRMediaBinding {
  constructor(session: XRSession): void;

  createCylinderLayer(
    video: HTMLVideoElement,
    init?: XRMediaCylinderLayerInit,
  ): XRCylinderLayer;
  createEquirectLayer(
    video: HTMLVideoElement,
    init?: XRMediaEquirectLayerInit,
  ): XREquirectLayer;
  createQuadLayer(
    video: HTMLVideoElement,
    init?: XRMediaQuadLayerInit,
  ): XRQuadLayer;
}

declare class XRProjectionLayer extends XRCompositionLayer {
  deltaPose: XRRigidTransform | null;
  fixedFoveation: number | null;
  +ignoreDepthValues: boolean;
  +textureArrayLength: number;
  +textureHeight: number;
  +textureWidth: number;
}

declare class XRQuadLayer extends XRCompositionLayer {
  height: number;
  onredraw: EventHandler;
  space: XRSpace;
  transform: XRRigidTransform;
  width: number;
}

/* partial */ declare class XRRenderState {
  +layers: $ReadOnlyArray<XRLayer>;
}

declare class XRSubImage {
  +viewport: XRViewport;
}

declare class XRWebGLBinding {
  +nativeProjectionScaleFactor: number;
  +usesDepthValues: boolean;

  constructor(session: XRSession, context: XRWebGLRenderingContext): void;

  createCubeLayer(init?: XRCubeLayerInit): XRCubeLayer;
  createCylinderLayer(init?: XRCylinderLayerInit): XRCylinderLayer;
  createEquirectLayer(init?: XREquirectLayerInit): XREquirectLayer;
  createProjectionLayer(init?: XRProjectionLayerInit): XRProjectionLayer;
  createQuadLayer(init?: XRQuadLayerInit): XRQuadLayer;
  foveateBoundTexture(target: GLenum, fixed_foveation: number): void;
  getSubImage(
    layer: XRCompositionLayer,
    frame: XRFrame,
    eye?: XREye,
  ): XRWebGLSubImage;
  getViewSubImage(layer: XRProjectionLayer, view: XRView): XRWebGLSubImage;
}

declare class XRWebGLSubImage extends XRSubImage {
  +colorTexture: WebGLTexture;
  +colorTextureHeight: number;
  +colorTextureWidth: number;
  +depthStencilTexture: WebGLTexture | null;
  +depthStencilTextureHeight: number | null;
  +depthStencilTextureWidth: number | null;
  +imageIndex: number | null;
  +motionVectorTexture: WebGLTexture | null;
  +motionVectorTextureHeight: number | null;
  +motionVectorTextureWidth: number | null;
}
