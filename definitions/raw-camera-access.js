declare class XRCamera {
  +height: number;
  +width: number;
}

/* partial */ interface XRView {
  +camera: XRCamera | null;
}

/* partial */ interface XRWebGLBinding {
  getCameraImage(camera: XRCamera): WebGLTexture | null;
}
