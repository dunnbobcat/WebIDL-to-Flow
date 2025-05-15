declare class OES_draw_buffers_indexed {
  blendEquationiOES(buf: GLuint, mode: GLenum): void;
  blendEquationSeparateiOES(
    buf: GLuint,
    modeRGB: GLenum,
    modeAlpha: GLenum,
  ): void;
  blendFunciOES(buf: GLuint, src: GLenum, dst: GLenum): void;
  blendFuncSeparateiOES(
    buf: GLuint,
    srcRGB: GLenum,
    dstRGB: GLenum,
    srcAlpha: GLenum,
    dstAlpha: GLenum,
  ): void;
  colorMaskiOES(
    buf: GLuint,
    r: GLboolean,
    g: GLboolean,
    b: GLboolean,
    a: GLboolean,
  ): void;
  disableiOES(target: GLenum, index: GLuint): void;
  enableiOES(target: GLenum, index: GLuint): void;
}
