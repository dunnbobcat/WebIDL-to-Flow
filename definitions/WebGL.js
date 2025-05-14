type Float32List = Float32Array | Array<GLfloat>;

type GLbitfield = number;

type GLboolean = boolean;

type GLbyte = byte;

type GLclampf = number;

type GLenum = number;

type GLfloat = number;

type GLint = number;

type GLintptr = number;

type GLshort = number;

type GLsizei = number;

type GLsizeiptr = number;

type GLubyte = octet;

type GLuint = number;

type GLushort = number;

type Int32List = Int32Array | Array<GLint>;

type TexImageSource =
  | ImageBitmap
  | ImageData
  | HTMLImageElement
  | HTMLCanvasElement
  | HTMLVideoElement
  | OffscreenCanvas
  | VideoFrame;

type WebGLPowerPreference = 'default' | 'low-power' | 'high-performance';

type WebGLContextAttributes = {
  alpha: boolean,
  depth: boolean,
  stencil: boolean,
  antialias: boolean,
  premultipliedAlpha: boolean,
  preserveDrawingBuffer: boolean,
  powerPreference: WebGLPowerPreference,
  failIfMajorPerformanceCaveat: boolean,
  desynchronized: boolean,
};

type WebGLContextEventInit = {
  statusMessage: string,
};

interface WebGLRenderingContextBase {
  +canvas: HTMLCanvasElement | OffscreenCanvas;
  drawingBufferColorSpace: PredefinedColorSpace;
  +drawingBufferFormat: GLenum;
  +drawingBufferHeight: GLsizei;
  +drawingBufferWidth: GLsizei;
  unpackColorSpace: PredefinedColorSpace;

  activeTexture(texture: GLenum): void;
  attachShader(program: WebGLProgram, shader: WebGLShader): void;
  bindAttribLocation(program: WebGLProgram, index: GLuint, name: string): void;
  bindBuffer(target: GLenum, buffer: WebGLBuffer | null): void;
  bindFramebuffer(target: GLenum, framebuffer: WebGLFramebuffer | null): void;
  bindRenderbuffer(
    target: GLenum,
    renderbuffer: WebGLRenderbuffer | null,
  ): void;
  bindTexture(target: GLenum, texture: WebGLTexture | null): void;
  blendColor(
    red: GLclampf,
    green: GLclampf,
    blue: GLclampf,
    alpha: GLclampf,
  ): void;
  blendEquation(mode: GLenum): void;
  blendEquationSeparate(modeRGB: GLenum, modeAlpha: GLenum): void;
  blendFunc(sfactor: GLenum, dfactor: GLenum): void;
  blendFuncSeparate(
    srcRGB: GLenum,
    dstRGB: GLenum,
    srcAlpha: GLenum,
    dstAlpha: GLenum,
  ): void;
  checkFramebufferStatus(target: GLenum): GLenum;
  clear(mask: GLbitfield): void;
  clearColor(
    red: GLclampf,
    green: GLclampf,
    blue: GLclampf,
    alpha: GLclampf,
  ): void;
  clearDepth(depth: GLclampf): void;
  clearStencil(s: GLint): void;
  colorMask(
    red: GLboolean,
    green: GLboolean,
    blue: GLboolean,
    alpha: GLboolean,
  ): void;
  compileShader(shader: WebGLShader): void;
  copyTexImage2D(
    target: GLenum,
    level: GLint,
    internalformat: GLenum,
    x: GLint,
    y: GLint,
    width: GLsizei,
    height: GLsizei,
    border: GLint,
  ): void;
  copyTexSubImage2D(
    target: GLenum,
    level: GLint,
    xoffset: GLint,
    yoffset: GLint,
    x: GLint,
    y: GLint,
    width: GLsizei,
    height: GLsizei,
  ): void;
  createBuffer(): WebGLBuffer;
  createFramebuffer(): WebGLFramebuffer;
  createProgram(): WebGLProgram;
  createRenderbuffer(): WebGLRenderbuffer;
  createShader(type: GLenum): WebGLShader | null;
  createTexture(): WebGLTexture;
  cullFace(mode: GLenum): void;
  deleteBuffer(buffer: WebGLBuffer | null): void;
  deleteFramebuffer(framebuffer: WebGLFramebuffer | null): void;
  deleteProgram(program: WebGLProgram | null): void;
  deleteRenderbuffer(renderbuffer: WebGLRenderbuffer | null): void;
  deleteShader(shader: WebGLShader | null): void;
  deleteTexture(texture: WebGLTexture | null): void;
  depthFunc(func: GLenum): void;
  depthMask(flag: GLboolean): void;
  depthRange(zNear: GLclampf, zFar: GLclampf): void;
  detachShader(program: WebGLProgram, shader: WebGLShader): void;
  disable(cap: GLenum): void;
  disableVertexAttribArray(index: GLuint): void;
  drawArrays(mode: GLenum, first: GLint, count: GLsizei): void;
  drawElements(
    mode: GLenum,
    count: GLsizei,
    type: GLenum,
    offset: GLintptr,
  ): void;
  drawingBufferStorage(
    sizedFormat: GLenum,
    width: number,
    height: number,
  ): void;
  enable(cap: GLenum): void;
  enableVertexAttribArray(index: GLuint): void;
  finish(): void;
  flush(): void;
  framebufferRenderbuffer(
    target: GLenum,
    attachment: GLenum,
    renderbuffertarget: GLenum,
    renderbuffer: WebGLRenderbuffer | null,
  ): void;
  framebufferTexture2D(
    target: GLenum,
    attachment: GLenum,
    textarget: GLenum,
    texture: WebGLTexture | null,
    level: GLint,
  ): void;
  frontFace(mode: GLenum): void;
  generateMipmap(target: GLenum): void;
  getActiveAttrib(program: WebGLProgram, index: GLuint): WebGLActiveInfo | null;
  getActiveUniform(
    program: WebGLProgram,
    index: GLuint,
  ): WebGLActiveInfo | null;
  getAttachedShaders(program: WebGLProgram): Array<WebGLShader> | null;
  getAttribLocation(program: WebGLProgram, name: string): GLint;
  getBufferParameter(target: GLenum, pname: GLenum): any;
  getContextAttributes(): WebGLContextAttributes | null;
  getError(): GLenum;
  getExtension(name: string): object | null;
  getFramebufferAttachmentParameter(
    target: GLenum,
    attachment: GLenum,
    pname: GLenum,
  ): any;
  getParameter(pname: GLenum): any;
  getProgramInfoLog(program: WebGLProgram): string | null;
  getProgramParameter(program: WebGLProgram, pname: GLenum): any;
  getRenderbufferParameter(target: GLenum, pname: GLenum): any;
  getShaderInfoLog(shader: WebGLShader): string | null;
  getShaderParameter(shader: WebGLShader, pname: GLenum): any;
  getShaderPrecisionFormat(
    shadertype: GLenum,
    precisiontype: GLenum,
  ): WebGLShaderPrecisionFormat | null;
  getShaderSource(shader: WebGLShader): string | null;
  getSupportedExtensions(): Array<string> | null;
  getTexParameter(target: GLenum, pname: GLenum): any;
  getUniform(program: WebGLProgram, location: WebGLUniformLocation): any;
  getUniformLocation(
    program: WebGLProgram,
    name: string,
  ): WebGLUniformLocation | null;
  getVertexAttrib(index: GLuint, pname: GLenum): any;
  getVertexAttribOffset(index: GLuint, pname: GLenum): GLintptr;
  hint(target: GLenum, mode: GLenum): void;
  isBuffer(buffer: WebGLBuffer | null): GLboolean;
  isContextLost(): boolean;
  isEnabled(cap: GLenum): GLboolean;
  isFramebuffer(framebuffer: WebGLFramebuffer | null): GLboolean;
  isProgram(program: WebGLProgram | null): GLboolean;
  isRenderbuffer(renderbuffer: WebGLRenderbuffer | null): GLboolean;
  isShader(shader: WebGLShader | null): GLboolean;
  isTexture(texture: WebGLTexture | null): GLboolean;
  lineWidth(width: GLfloat): void;
  linkProgram(program: WebGLProgram): void;
  pixelStorei(pname: GLenum, param: GLint): void;
  polygonOffset(factor: GLfloat, units: GLfloat): void;
  renderbufferStorage(
    target: GLenum,
    internalformat: GLenum,
    width: GLsizei,
    height: GLsizei,
  ): void;
  sampleCoverage(value: GLclampf, invert: GLboolean): void;
  scissor(x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
  shaderSource(shader: WebGLShader, source: string): void;
  stencilFunc(func: GLenum, ref: GLint, mask: GLuint): void;
  stencilFuncSeparate(
    face: GLenum,
    func: GLenum,
    ref: GLint,
    mask: GLuint,
  ): void;
  stencilMask(mask: GLuint): void;
  stencilMaskSeparate(face: GLenum, mask: GLuint): void;
  stencilOp(fail: GLenum, zfail: GLenum, zpass: GLenum): void;
  stencilOpSeparate(
    face: GLenum,
    fail: GLenum,
    zfail: GLenum,
    zpass: GLenum,
  ): void;
  texParameterf(target: GLenum, pname: GLenum, param: GLfloat): void;
  texParameteri(target: GLenum, pname: GLenum, param: GLint): void;
  uniform1f(location: WebGLUniformLocation | null, x: GLfloat): void;
  uniform1i(location: WebGLUniformLocation | null, x: GLint): void;
  uniform2f(
    location: WebGLUniformLocation | null,
    x: GLfloat,
    y: GLfloat,
  ): void;
  uniform2i(location: WebGLUniformLocation | null, x: GLint, y: GLint): void;
  uniform3f(
    location: WebGLUniformLocation | null,
    x: GLfloat,
    y: GLfloat,
    z: GLfloat,
  ): void;
  uniform3i(
    location: WebGLUniformLocation | null,
    x: GLint,
    y: GLint,
    z: GLint,
  ): void;
  uniform4f(
    location: WebGLUniformLocation | null,
    x: GLfloat,
    y: GLfloat,
    z: GLfloat,
    w: GLfloat,
  ): void;
  uniform4i(
    location: WebGLUniformLocation | null,
    x: GLint,
    y: GLint,
    z: GLint,
    w: GLint,
  ): void;
  useProgram(program: WebGLProgram | null): void;
  validateProgram(program: WebGLProgram): void;
  vertexAttrib1f(index: GLuint, x: GLfloat): void;
  vertexAttrib1fv(index: GLuint, values: Float32List): void;
  vertexAttrib2f(index: GLuint, x: GLfloat, y: GLfloat): void;
  vertexAttrib2fv(index: GLuint, values: Float32List): void;
  vertexAttrib3f(index: GLuint, x: GLfloat, y: GLfloat, z: GLfloat): void;
  vertexAttrib3fv(index: GLuint, values: Float32List): void;
  vertexAttrib4f(
    index: GLuint,
    x: GLfloat,
    y: GLfloat,
    z: GLfloat,
    w: GLfloat,
  ): void;
  vertexAttrib4fv(index: GLuint, values: Float32List): void;
  vertexAttribPointer(
    index: GLuint,
    size: GLint,
    type: GLenum,
    normalized: GLboolean,
    stride: GLsizei,
    offset: GLintptr,
  ): void;
  viewport(x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
}

interface WebGLRenderingContextOverloads {
  bufferData(target: GLenum, size: GLsizeiptr, usage: GLenum): void;
  bufferData(
    target: GLenum,
    data: AllowSharedBufferSource | null,
    usage: GLenum,
  ): void;
  bufferSubData(
    target: GLenum,
    offset: GLintptr,
    data: AllowSharedBufferSource,
  ): void;
  compressedTexImage2D(
    target: GLenum,
    level: GLint,
    internalformat: GLenum,
    width: GLsizei,
    height: GLsizei,
    border: GLint,
    data: ArrayBufferView,
  ): void;
  compressedTexSubImage2D(
    target: GLenum,
    level: GLint,
    xoffset: GLint,
    yoffset: GLint,
    width: GLsizei,
    height: GLsizei,
    format: GLenum,
    data: ArrayBufferView,
  ): void;
  readPixels(
    x: GLint,
    y: GLint,
    width: GLsizei,
    height: GLsizei,
    format: GLenum,
    type: GLenum,
    pixels: ArrayBufferView | null,
  ): void;
  texImage2D(
    target: GLenum,
    level: GLint,
    internalformat: GLint,
    width: GLsizei,
    height: GLsizei,
    border: GLint,
    format: GLenum,
    type: GLenum,
    pixels: ArrayBufferView | null,
  ): void;
  texImage2D(
    target: GLenum,
    level: GLint,
    internalformat: GLint,
    format: GLenum,
    type: GLenum,
    source: TexImageSource,
  ): void;
  texSubImage2D(
    target: GLenum,
    level: GLint,
    xoffset: GLint,
    yoffset: GLint,
    width: GLsizei,
    height: GLsizei,
    format: GLenum,
    type: GLenum,
    pixels: ArrayBufferView | null,
  ): void;
  texSubImage2D(
    target: GLenum,
    level: GLint,
    xoffset: GLint,
    yoffset: GLint,
    format: GLenum,
    type: GLenum,
    source: TexImageSource,
  ): void;
  uniform1fv(location: WebGLUniformLocation | null, v: Float32List): void;
  uniform1iv(location: WebGLUniformLocation | null, v: Int32List): void;
  uniform2fv(location: WebGLUniformLocation | null, v: Float32List): void;
  uniform2iv(location: WebGLUniformLocation | null, v: Int32List): void;
  uniform3fv(location: WebGLUniformLocation | null, v: Float32List): void;
  uniform3iv(location: WebGLUniformLocation | null, v: Int32List): void;
  uniform4fv(location: WebGLUniformLocation | null, v: Float32List): void;
  uniform4iv(location: WebGLUniformLocation | null, v: Int32List): void;
  uniformMatrix2fv(
    location: WebGLUniformLocation | null,
    transpose: GLboolean,
    value: Float32List,
  ): void;
  uniformMatrix3fv(
    location: WebGLUniformLocation | null,
    transpose: GLboolean,
    value: Float32List,
  ): void;
  uniformMatrix4fv(
    location: WebGLUniformLocation | null,
    transpose: GLboolean,
    value: Float32List,
  ): void;
}

declare class WebGLActiveInfo {
  +name: string;
  +size: GLint;
  +type: GLenum;
}

declare class WebGLBuffer extends WebGLObject {}

declare class WebGLContextEvent extends Event {
  +statusMessage: string;

  constructor(type: string, eventInit?: WebGLContextEventInit): void;
}

declare class WebGLFramebuffer extends WebGLObject {}

declare class WebGLObject {
  label: string;
}

declare class WebGLProgram extends WebGLObject {}

declare class WebGLRenderbuffer extends WebGLObject {}

declare class WebGLRenderingContext
  mixins WebGLRenderingContextBase, WebGLRenderingContextOverloads
{
  static +ACTIVE_ATTRIBUTES: 0x8b89;
  static +ACTIVE_TEXTURE: 0x84e0;
  static +ACTIVE_UNIFORMS: 0x8b86;
  static +ALIASED_LINE_WIDTH_RANGE: 0x846e;
  static +ALIASED_POINT_SIZE_RANGE: 0x846d;
  static +ALPHA: 0x1906;
  static +ALPHA_BITS: 0x0d55;
  static +ALWAYS: 0x0207;
  static +ARRAY_BUFFER: 0x8892;
  static +ARRAY_BUFFER_BINDING: 0x8894;
  static +ATTACHED_SHADERS: 0x8b85;
  static +BACK: 0x0405;
  static +BLEND: 0x0be2;
  static +BLEND_COLOR: 0x8005;
  static +BLEND_DST_ALPHA: 0x80ca;
  static +BLEND_DST_RGB: 0x80c8;
  static +BLEND_EQUATION: 0x8009;
  static +BLEND_EQUATION_ALPHA: 0x883d;
  static +BLEND_EQUATION_RGB: 0x8009;
  static +BLEND_SRC_ALPHA: 0x80cb;
  static +BLEND_SRC_RGB: 0x80c9;
  static +BLUE_BITS: 0x0d54;
  static +BOOL: 0x8b56;
  static +BOOL_VEC2: 0x8b57;
  static +BOOL_VEC3: 0x8b58;
  static +BOOL_VEC4: 0x8b59;
  static +BROWSER_DEFAULT_WEBGL: 0x9244;
  static +BUFFER_SIZE: 0x8764;
  static +BUFFER_USAGE: 0x8765;
  static +BYTE: 0x1400;
  static +CCW: 0x0901;
  static +CLAMP_TO_EDGE: 0x812f;
  static +COLOR_ATTACHMENT0: 0x8ce0;
  static +COLOR_BUFFER_BIT: 0x00004000;
  static +COLOR_CLEAR_VALUE: 0x0c22;
  static +COLOR_WRITEMASK: 0x0c23;
  static +COMPILE_STATUS: 0x8b81;
  static +COMPRESSED_TEXTURE_FORMATS: 0x86a3;
  static +CONSTANT_ALPHA: 0x8003;
  static +CONSTANT_COLOR: 0x8001;
  static +CONTEXT_LOST_WEBGL: 0x9242;
  static +CULL_FACE: 0x0b44;
  static +CULL_FACE_MODE: 0x0b45;
  static +CURRENT_PROGRAM: 0x8b8d;
  static +CURRENT_VERTEX_ATTRIB: 0x8626;
  static +CW: 0x0900;
  static +DECR: 0x1e03;
  static +DECR_WRAP: 0x8508;
  static +DELETE_STATUS: 0x8b80;
  static +DEPTH_ATTACHMENT: 0x8d00;
  static +DEPTH_BITS: 0x0d56;
  static +DEPTH_BUFFER_BIT: 0x00000100;
  static +DEPTH_CLEAR_VALUE: 0x0b73;
  static +DEPTH_COMPONENT: 0x1902;
  static +DEPTH_COMPONENT16: 0x81a5;
  static +DEPTH_FUNC: 0x0b74;
  static +DEPTH_RANGE: 0x0b70;
  static +DEPTH_STENCIL: 0x84f9;
  static +DEPTH_STENCIL_ATTACHMENT: 0x821a;
  static +DEPTH_TEST: 0x0b71;
  static +DEPTH_WRITEMASK: 0x0b72;
  static +DITHER: 0x0bd0;
  static +DONT_CARE: 0x1100;
  static +DST_ALPHA: 0x0304;
  static +DST_COLOR: 0x0306;
  static +DYNAMIC_DRAW: 0x88e8;
  static +ELEMENT_ARRAY_BUFFER: 0x8893;
  static +ELEMENT_ARRAY_BUFFER_BINDING: 0x8895;
  static +EQUAL: 0x0202;
  static +FASTEST: 0x1101;
  static +FLOAT: 0x1406;
  static +FLOAT_MAT2: 0x8b5a;
  static +FLOAT_MAT3: 0x8b5b;
  static +FLOAT_MAT4: 0x8b5c;
  static +FLOAT_VEC2: 0x8b50;
  static +FLOAT_VEC3: 0x8b51;
  static +FLOAT_VEC4: 0x8b52;
  static +FRAGMENT_SHADER: 0x8b30;
  static +FRAMEBUFFER: 0x8d40;
  static +FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: 0x8cd1;
  static +FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: 0x8cd0;
  static +FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: 0x8cd3;
  static +FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: 0x8cd2;
  static +FRAMEBUFFER_BINDING: 0x8ca6;
  static +FRAMEBUFFER_COMPLETE: 0x8cd5;
  static +FRAMEBUFFER_INCOMPLETE_ATTACHMENT: 0x8cd6;
  static +FRAMEBUFFER_INCOMPLETE_DIMENSIONS: 0x8cd9;
  static +FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: 0x8cd7;
  static +FRAMEBUFFER_UNSUPPORTED: 0x8cdd;
  static +FRONT: 0x0404;
  static +FRONT_AND_BACK: 0x0408;
  static +FRONT_FACE: 0x0b46;
  static +FUNC_ADD: 0x8006;
  static +FUNC_REVERSE_SUBTRACT: 0x800b;
  static +FUNC_SUBTRACT: 0x800a;
  static +GENERATE_MIPMAP_HINT: 0x8192;
  static +GEQUAL: 0x0206;
  static +GREATER: 0x0204;
  static +GREEN_BITS: 0x0d53;
  static +HIGH_FLOAT: 0x8df2;
  static +HIGH_INT: 0x8df5;
  static +IMPLEMENTATION_COLOR_READ_FORMAT: 0x8b9b;
  static +IMPLEMENTATION_COLOR_READ_TYPE: 0x8b9a;
  static +INCR: 0x1e02;
  static +INCR_WRAP: 0x8507;
  static +INT: 0x1404;
  static +INT_VEC2: 0x8b53;
  static +INT_VEC3: 0x8b54;
  static +INT_VEC4: 0x8b55;
  static +INVALID_ENUM: 0x0500;
  static +INVALID_FRAMEBUFFER_OPERATION: 0x0506;
  static +INVALID_OPERATION: 0x0502;
  static +INVALID_VALUE: 0x0501;
  static +INVERT: 0x150a;
  static +KEEP: 0x1e00;
  static +LEQUAL: 0x0203;
  static +LESS: 0x0201;
  static +LINE_LOOP: 0x0002;
  static +LINE_STRIP: 0x0003;
  static +LINE_WIDTH: 0x0b21;
  static +LINEAR: 0x2601;
  static +LINEAR_MIPMAP_LINEAR: 0x2703;
  static +LINEAR_MIPMAP_NEAREST: 0x2701;
  static +LINES: 0x0001;
  static +LINK_STATUS: 0x8b82;
  static +LOW_FLOAT: 0x8df0;
  static +LOW_INT: 0x8df3;
  static +LUMINANCE: 0x1909;
  static +LUMINANCE_ALPHA: 0x190a;
  static +MAX_COMBINED_TEXTURE_IMAGE_UNITS: 0x8b4d;
  static +MAX_CUBE_MAP_TEXTURE_SIZE: 0x851c;
  static +MAX_FRAGMENT_UNIFORM_VECTORS: 0x8dfd;
  static +MAX_RENDERBUFFER_SIZE: 0x84e8;
  static +MAX_TEXTURE_IMAGE_UNITS: 0x8872;
  static +MAX_TEXTURE_SIZE: 0x0d33;
  static +MAX_VARYING_VECTORS: 0x8dfc;
  static +MAX_VERTEX_ATTRIBS: 0x8869;
  static +MAX_VERTEX_TEXTURE_IMAGE_UNITS: 0x8b4c;
  static +MAX_VERTEX_UNIFORM_VECTORS: 0x8dfb;
  static +MAX_VIEWPORT_DIMS: 0x0d3a;
  static +MEDIUM_FLOAT: 0x8df1;
  static +MEDIUM_INT: 0x8df4;
  static +MIRRORED_REPEAT: 0x8370;
  static +NEAREST: 0x2600;
  static +NEAREST_MIPMAP_LINEAR: 0x2702;
  static +NEAREST_MIPMAP_NEAREST: 0x2700;
  static +NEVER: 0x0200;
  static +NICEST: 0x1102;
  static +NO_ERROR: 0;
  static +NONE: 0;
  static +NOTEQUAL: 0x0205;
  static +ONE: 1;
  static +ONE_MINUS_CONSTANT_ALPHA: 0x8004;
  static +ONE_MINUS_CONSTANT_COLOR: 0x8002;
  static +ONE_MINUS_DST_ALPHA: 0x0305;
  static +ONE_MINUS_DST_COLOR: 0x0307;
  static +ONE_MINUS_SRC_ALPHA: 0x0303;
  static +ONE_MINUS_SRC_COLOR: 0x0301;
  static +OUT_OF_MEMORY: 0x0505;
  static +PACK_ALIGNMENT: 0x0d05;
  static +POINTS: 0x0000;
  static +POLYGON_OFFSET_FACTOR: 0x8038;
  static +POLYGON_OFFSET_FILL: 0x8037;
  static +POLYGON_OFFSET_UNITS: 0x2a00;
  static +RED_BITS: 0x0d52;
  static +RENDERBUFFER: 0x8d41;
  static +RENDERBUFFER_ALPHA_SIZE: 0x8d53;
  static +RENDERBUFFER_BINDING: 0x8ca7;
  static +RENDERBUFFER_BLUE_SIZE: 0x8d52;
  static +RENDERBUFFER_DEPTH_SIZE: 0x8d54;
  static +RENDERBUFFER_GREEN_SIZE: 0x8d51;
  static +RENDERBUFFER_HEIGHT: 0x8d43;
  static +RENDERBUFFER_INTERNAL_FORMAT: 0x8d44;
  static +RENDERBUFFER_RED_SIZE: 0x8d50;
  static +RENDERBUFFER_STENCIL_SIZE: 0x8d55;
  static +RENDERBUFFER_WIDTH: 0x8d42;
  static +RENDERER: 0x1f01;
  static +REPEAT: 0x2901;
  static +REPLACE: 0x1e01;
  static +RGB: 0x1907;
  static +RGB5_A1: 0x8057;
  static +RGB565: 0x8d62;
  static +RGBA: 0x1908;
  static +RGBA4: 0x8056;
  static +RGBA8: 0x8058;
  static +SAMPLE_ALPHA_TO_COVERAGE: 0x809e;
  static +SAMPLE_BUFFERS: 0x80a8;
  static +SAMPLE_COVERAGE: 0x80a0;
  static +SAMPLE_COVERAGE_INVERT: 0x80ab;
  static +SAMPLE_COVERAGE_VALUE: 0x80aa;
  static +SAMPLER_2D: 0x8b5e;
  static +SAMPLER_CUBE: 0x8b60;
  static +SAMPLES: 0x80a9;
  static +SCISSOR_BOX: 0x0c10;
  static +SCISSOR_TEST: 0x0c11;
  static +SHADER_TYPE: 0x8b4f;
  static +SHADING_LANGUAGE_VERSION: 0x8b8c;
  static +SHORT: 0x1402;
  static +SRC_ALPHA: 0x0302;
  static +SRC_ALPHA_SATURATE: 0x0308;
  static +SRC_COLOR: 0x0300;
  static +STATIC_DRAW: 0x88e4;
  static +STENCIL_ATTACHMENT: 0x8d20;
  static +STENCIL_BACK_FAIL: 0x8801;
  static +STENCIL_BACK_FUNC: 0x8800;
  static +STENCIL_BACK_PASS_DEPTH_FAIL: 0x8802;
  static +STENCIL_BACK_PASS_DEPTH_PASS: 0x8803;
  static +STENCIL_BACK_REF: 0x8ca3;
  static +STENCIL_BACK_VALUE_MASK: 0x8ca4;
  static +STENCIL_BACK_WRITEMASK: 0x8ca5;
  static +STENCIL_BITS: 0x0d57;
  static +STENCIL_BUFFER_BIT: 0x00000400;
  static +STENCIL_CLEAR_VALUE: 0x0b91;
  static +STENCIL_FAIL: 0x0b94;
  static +STENCIL_FUNC: 0x0b92;
  static +STENCIL_INDEX8: 0x8d48;
  static +STENCIL_PASS_DEPTH_FAIL: 0x0b95;
  static +STENCIL_PASS_DEPTH_PASS: 0x0b96;
  static +STENCIL_REF: 0x0b97;
  static +STENCIL_TEST: 0x0b90;
  static +STENCIL_VALUE_MASK: 0x0b93;
  static +STENCIL_WRITEMASK: 0x0b98;
  static +STREAM_DRAW: 0x88e0;
  static +SUBPIXEL_BITS: 0x0d50;
  static +TEXTURE: 0x1702;
  static +TEXTURE_2D: 0x0de1;
  static +TEXTURE_BINDING_2D: 0x8069;
  static +TEXTURE_BINDING_CUBE_MAP: 0x8514;
  static +TEXTURE_CUBE_MAP: 0x8513;
  static +TEXTURE_CUBE_MAP_NEGATIVE_X: 0x8516;
  static +TEXTURE_CUBE_MAP_NEGATIVE_Y: 0x8518;
  static +TEXTURE_CUBE_MAP_NEGATIVE_Z: 0x851a;
  static +TEXTURE_CUBE_MAP_POSITIVE_X: 0x8515;
  static +TEXTURE_CUBE_MAP_POSITIVE_Y: 0x8517;
  static +TEXTURE_CUBE_MAP_POSITIVE_Z: 0x8519;
  static +TEXTURE_MAG_FILTER: 0x2800;
  static +TEXTURE_MIN_FILTER: 0x2801;
  static +TEXTURE_WRAP_S: 0x2802;
  static +TEXTURE_WRAP_T: 0x2803;
  static +TEXTURE0: 0x84c0;
  static +TEXTURE1: 0x84c1;
  static +TEXTURE10: 0x84ca;
  static +TEXTURE11: 0x84cb;
  static +TEXTURE12: 0x84cc;
  static +TEXTURE13: 0x84cd;
  static +TEXTURE14: 0x84ce;
  static +TEXTURE15: 0x84cf;
  static +TEXTURE16: 0x84d0;
  static +TEXTURE17: 0x84d1;
  static +TEXTURE18: 0x84d2;
  static +TEXTURE19: 0x84d3;
  static +TEXTURE2: 0x84c2;
  static +TEXTURE20: 0x84d4;
  static +TEXTURE21: 0x84d5;
  static +TEXTURE22: 0x84d6;
  static +TEXTURE23: 0x84d7;
  static +TEXTURE24: 0x84d8;
  static +TEXTURE25: 0x84d9;
  static +TEXTURE26: 0x84da;
  static +TEXTURE27: 0x84db;
  static +TEXTURE28: 0x84dc;
  static +TEXTURE29: 0x84dd;
  static +TEXTURE3: 0x84c3;
  static +TEXTURE30: 0x84de;
  static +TEXTURE31: 0x84df;
  static +TEXTURE4: 0x84c4;
  static +TEXTURE5: 0x84c5;
  static +TEXTURE6: 0x84c6;
  static +TEXTURE7: 0x84c7;
  static +TEXTURE8: 0x84c8;
  static +TEXTURE9: 0x84c9;
  static +TRIANGLE_FAN: 0x0006;
  static +TRIANGLE_STRIP: 0x0005;
  static +TRIANGLES: 0x0004;
  static +UNPACK_ALIGNMENT: 0x0cf5;
  static +UNPACK_COLORSPACE_CONVERSION_WEBGL: 0x9243;
  static +UNPACK_FLIP_Y_WEBGL: 0x9240;
  static +UNPACK_PREMULTIPLY_ALPHA_WEBGL: 0x9241;
  static +UNSIGNED_BYTE: 0x1401;
  static +UNSIGNED_INT: 0x1405;
  static +UNSIGNED_SHORT: 0x1403;
  static +UNSIGNED_SHORT_4_4_4_4: 0x8033;
  static +UNSIGNED_SHORT_5_5_5_1: 0x8034;
  static +UNSIGNED_SHORT_5_6_5: 0x8363;
  static +VALIDATE_STATUS: 0x8b83;
  static +VENDOR: 0x1f00;
  static +VERSION: 0x1f02;
  static +VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: 0x889f;
  static +VERTEX_ATTRIB_ARRAY_ENABLED: 0x8622;
  static +VERTEX_ATTRIB_ARRAY_NORMALIZED: 0x886a;
  static +VERTEX_ATTRIB_ARRAY_POINTER: 0x8645;
  static +VERTEX_ATTRIB_ARRAY_SIZE: 0x8623;
  static +VERTEX_ATTRIB_ARRAY_STRIDE: 0x8624;
  static +VERTEX_ATTRIB_ARRAY_TYPE: 0x8625;
  static +VERTEX_SHADER: 0x8b31;
  static +VIEWPORT: 0x0ba2;
  static +ZERO: 0;
}

declare class WebGLShader extends WebGLObject {}

declare class WebGLShaderPrecisionFormat {
  +precision: GLint;
  +rangeMax: GLint;
  +rangeMin: GLint;
}

declare class WebGLTexture extends WebGLObject {}

declare class WebGLUniformLocation {}
