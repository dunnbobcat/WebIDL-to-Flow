declare class XRCamera {
  +height: number;
  +width: number;
}

/* partial */ declare class XRView {
  +camera: XRCamera | null;
}

/* partial */ declare class XRWebGLBinding {
  getCameraImage(camera: XRCamera): WebGLTexture | null;
}
