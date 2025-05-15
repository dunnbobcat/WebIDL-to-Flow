type GLint64 = number;

type GLuint64 = number;

type Uint32List = Uint32Array | Array<GLuint>;

declare class WebGL2RenderingContext
  mixins
    mixin$WebGLRenderingContextBase,
    mixin$WebGL2RenderingContextBase,
    mixin$WebGL2RenderingContextOverloads
{
  static +ACTIVE_UNIFORM_BLOCKS: 0x8a36;
  static +ALREADY_SIGNALED: 0x911a;
  static +ANY_SAMPLES_PASSED: 0x8c2f;
  static +ANY_SAMPLES_PASSED_CONSERVATIVE: 0x8d6a;
  static +COLOR: 0x1800;
  static +COLOR_ATTACHMENT1: 0x8ce1;
  static +COLOR_ATTACHMENT10: 0x8cea;
  static +COLOR_ATTACHMENT11: 0x8ceb;
  static +COLOR_ATTACHMENT12: 0x8cec;
  static +COLOR_ATTACHMENT13: 0x8ced;
  static +COLOR_ATTACHMENT14: 0x8cee;
  static +COLOR_ATTACHMENT15: 0x8cef;
  static +COLOR_ATTACHMENT2: 0x8ce2;
  static +COLOR_ATTACHMENT3: 0x8ce3;
  static +COLOR_ATTACHMENT4: 0x8ce4;
  static +COLOR_ATTACHMENT5: 0x8ce5;
  static +COLOR_ATTACHMENT6: 0x8ce6;
  static +COLOR_ATTACHMENT7: 0x8ce7;
  static +COLOR_ATTACHMENT8: 0x8ce8;
  static +COLOR_ATTACHMENT9: 0x8ce9;
  static +COMPARE_REF_TO_TEXTURE: 0x884e;
  static +CONDITION_SATISFIED: 0x911c;
  static +COPY_READ_BUFFER: 0x8f36;
  static +COPY_READ_BUFFER_BINDING: 0x8f36;
  static +COPY_WRITE_BUFFER: 0x8f37;
  static +COPY_WRITE_BUFFER_BINDING: 0x8f37;
  static +CURRENT_QUERY: 0x8865;
  static +DEPTH: 0x1801;
  static +DEPTH_COMPONENT24: 0x81a6;
  static +DEPTH_COMPONENT32F: 0x8cac;
  static +DEPTH24_STENCIL8: 0x88f0;
  static +DEPTH32F_STENCIL8: 0x8cad;
  static +DRAW_BUFFER0: 0x8825;
  static +DRAW_BUFFER1: 0x8826;
  static +DRAW_BUFFER10: 0x882f;
  static +DRAW_BUFFER11: 0x8830;
  static +DRAW_BUFFER12: 0x8831;
  static +DRAW_BUFFER13: 0x8832;
  static +DRAW_BUFFER14: 0x8833;
  static +DRAW_BUFFER15: 0x8834;
  static +DRAW_BUFFER2: 0x8827;
  static +DRAW_BUFFER3: 0x8828;
  static +DRAW_BUFFER4: 0x8829;
  static +DRAW_BUFFER5: 0x882a;
  static +DRAW_BUFFER6: 0x882b;
  static +DRAW_BUFFER7: 0x882c;
  static +DRAW_BUFFER8: 0x882d;
  static +DRAW_BUFFER9: 0x882e;
  static +DRAW_FRAMEBUFFER: 0x8ca9;
  static +DRAW_FRAMEBUFFER_BINDING: 0x8ca6;
  static +DYNAMIC_COPY: 0x88ea;
  static +DYNAMIC_READ: 0x88e9;
  static +FLOAT_32_UNSIGNED_INT_24_8_REV: 0x8dad;
  static +FLOAT_MAT2x3: 0x8b65;
  static +FLOAT_MAT2x4: 0x8b66;
  static +FLOAT_MAT3x2: 0x8b67;
  static +FLOAT_MAT3x4: 0x8b68;
  static +FLOAT_MAT4x2: 0x8b69;
  static +FLOAT_MAT4x3: 0x8b6a;
  static +FRAGMENT_SHADER_DERIVATIVE_HINT: 0x8b8b;
  static +FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE: 0x8215;
  static +FRAMEBUFFER_ATTACHMENT_BLUE_SIZE: 0x8214;
  static +FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING: 0x8210;
  static +FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE: 0x8211;
  static +FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE: 0x8216;
  static +FRAMEBUFFER_ATTACHMENT_GREEN_SIZE: 0x8213;
  static +FRAMEBUFFER_ATTACHMENT_RED_SIZE: 0x8212;
  static +FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE: 0x8217;
  static +FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER: 0x8cd4;
  static +FRAMEBUFFER_DEFAULT: 0x8218;
  static +FRAMEBUFFER_INCOMPLETE_MULTISAMPLE: 0x8d56;
  static +HALF_FLOAT: 0x140b;
  static +INT_2_10_10_10_REV: 0x8d9f;
  static +INT_SAMPLER_2D: 0x8dca;
  static +INT_SAMPLER_2D_ARRAY: 0x8dcf;
  static +INT_SAMPLER_3D: 0x8dcb;
  static +INT_SAMPLER_CUBE: 0x8dcc;
  static +INTERLEAVED_ATTRIBS: 0x8c8c;
  static +INVALID_INDEX: 0xffffffff;
  static +MAX: 0x8008;
  static +MAX_3D_TEXTURE_SIZE: 0x8073;
  static +MAX_ARRAY_TEXTURE_LAYERS: 0x88ff;
  static +MAX_CLIENT_WAIT_TIMEOUT_WEBGL: 0x9247;
  static +MAX_COLOR_ATTACHMENTS: 0x8cdf;
  static +MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS: 0x8a33;
  static +MAX_COMBINED_UNIFORM_BLOCKS: 0x8a2e;
  static +MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS: 0x8a31;
  static +MAX_DRAW_BUFFERS: 0x8824;
  static +MAX_ELEMENT_INDEX: 0x8d6b;
  static +MAX_ELEMENTS_INDICES: 0x80e9;
  static +MAX_ELEMENTS_VERTICES: 0x80e8;
  static +MAX_FRAGMENT_INPUT_COMPONENTS: 0x9125;
  static +MAX_FRAGMENT_UNIFORM_BLOCKS: 0x8a2d;
  static +MAX_FRAGMENT_UNIFORM_COMPONENTS: 0x8b49;
  static +MAX_PROGRAM_TEXEL_OFFSET: 0x8905;
  static +MAX_SAMPLES: 0x8d57;
  static +MAX_SERVER_WAIT_TIMEOUT: 0x9111;
  static +MAX_TEXTURE_LOD_BIAS: 0x84fd;
  static +MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS: 0x8c8a;
  static +MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS: 0x8c8b;
  static +MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS: 0x8c80;
  static +MAX_UNIFORM_BLOCK_SIZE: 0x8a30;
  static +MAX_UNIFORM_BUFFER_BINDINGS: 0x8a2f;
  static +MAX_VARYING_COMPONENTS: 0x8b4b;
  static +MAX_VERTEX_OUTPUT_COMPONENTS: 0x9122;
  static +MAX_VERTEX_UNIFORM_BLOCKS: 0x8a2b;
  static +MAX_VERTEX_UNIFORM_COMPONENTS: 0x8b4a;
  static +MIN: 0x8007;
  static +MIN_PROGRAM_TEXEL_OFFSET: 0x8904;
  static +OBJECT_TYPE: 0x9112;
  static +PACK_ROW_LENGTH: 0x0d02;
  static +PACK_SKIP_PIXELS: 0x0d04;
  static +PACK_SKIP_ROWS: 0x0d03;
  static +PIXEL_PACK_BUFFER: 0x88eb;
  static +PIXEL_PACK_BUFFER_BINDING: 0x88ed;
  static +PIXEL_UNPACK_BUFFER: 0x88ec;
  static +PIXEL_UNPACK_BUFFER_BINDING: 0x88ef;
  static +QUERY_RESULT: 0x8866;
  static +QUERY_RESULT_AVAILABLE: 0x8867;
  static +R11F_G11F_B10F: 0x8c3a;
  static +R16F: 0x822d;
  static +R16I: 0x8233;
  static +R16UI: 0x8234;
  static +R32F: 0x822e;
  static +R32I: 0x8235;
  static +R32UI: 0x8236;
  static +R8: 0x8229;
  static +R8_SNORM: 0x8f94;
  static +R8I: 0x8231;
  static +R8UI: 0x8232;
  static +RASTERIZER_DISCARD: 0x8c89;
  static +READ_BUFFER: 0x0c02;
  static +READ_FRAMEBUFFER: 0x8ca8;
  static +READ_FRAMEBUFFER_BINDING: 0x8caa;
  static +RED: 0x1903;
  static +RED_INTEGER: 0x8d94;
  static +RENDERBUFFER_SAMPLES: 0x8cab;
  static +RG: 0x8227;
  static +RG_INTEGER: 0x8228;
  static +RG16F: 0x822f;
  static +RG16I: 0x8239;
  static +RG16UI: 0x823a;
  static +RG32F: 0x8230;
  static +RG32I: 0x823b;
  static +RG32UI: 0x823c;
  static +RG8: 0x822b;
  static +RG8_SNORM: 0x8f95;
  static +RG8I: 0x8237;
  static +RG8UI: 0x8238;
  static +RGB_INTEGER: 0x8d98;
  static +RGB10_A2: 0x8059;
  static +RGB10_A2UI: 0x906f;
  static +RGB16F: 0x881b;
  static +RGB16I: 0x8d89;
  static +RGB16UI: 0x8d77;
  static +RGB32F: 0x8815;
  static +RGB32I: 0x8d83;
  static +RGB32UI: 0x8d71;
  static +RGB8: 0x8051;
  static +RGB8_SNORM: 0x8f96;
  static +RGB8I: 0x8d8f;
  static +RGB8UI: 0x8d7d;
  static +RGB9_E5: 0x8c3d;
  static +RGBA_INTEGER: 0x8d99;
  static +RGBA16F: 0x881a;
  static +RGBA16I: 0x8d88;
  static +RGBA16UI: 0x8d76;
  static +RGBA32F: 0x8814;
  static +RGBA32I: 0x8d82;
  static +RGBA32UI: 0x8d70;
  static +RGBA8_SNORM: 0x8f97;
  static +RGBA8I: 0x8d8e;
  static +RGBA8UI: 0x8d7c;
  static +SAMPLER_2D_ARRAY: 0x8dc1;
  static +SAMPLER_2D_ARRAY_SHADOW: 0x8dc4;
  static +SAMPLER_2D_SHADOW: 0x8b62;
  static +SAMPLER_3D: 0x8b5f;
  static +SAMPLER_BINDING: 0x8919;
  static +SAMPLER_CUBE_SHADOW: 0x8dc5;
  static +SEPARATE_ATTRIBS: 0x8c8d;
  static +SIGNALED: 0x9119;
  static +SIGNED_NORMALIZED: 0x8f9c;
  static +SRGB: 0x8c40;
  static +SRGB8: 0x8c41;
  static +SRGB8_ALPHA8: 0x8c43;
  static +STATIC_COPY: 0x88e6;
  static +STATIC_READ: 0x88e5;
  static +STENCIL: 0x1802;
  static +STREAM_COPY: 0x88e2;
  static +STREAM_READ: 0x88e1;
  static +SYNC_CONDITION: 0x9113;
  static +SYNC_FENCE: 0x9116;
  static +SYNC_FLAGS: 0x9115;
  static +SYNC_FLUSH_COMMANDS_BIT: 0x00000001;
  static +SYNC_GPU_COMMANDS_COMPLETE: 0x9117;
  static +SYNC_STATUS: 0x9114;
  static +TEXTURE_2D_ARRAY: 0x8c1a;
  static +TEXTURE_3D: 0x806f;
  static +TEXTURE_BASE_LEVEL: 0x813c;
  static +TEXTURE_BINDING_2D_ARRAY: 0x8c1d;
  static +TEXTURE_BINDING_3D: 0x806a;
  static +TEXTURE_COMPARE_FUNC: 0x884d;
  static +TEXTURE_COMPARE_MODE: 0x884c;
  static +TEXTURE_IMMUTABLE_FORMAT: 0x912f;
  static +TEXTURE_IMMUTABLE_LEVELS: 0x82df;
  static +TEXTURE_MAX_LEVEL: 0x813d;
  static +TEXTURE_MAX_LOD: 0x813b;
  static +TEXTURE_MIN_LOD: 0x813a;
  static +TEXTURE_WRAP_R: 0x8072;
  static +TIMEOUT_EXPIRED: 0x911b;
  static +TIMEOUT_IGNORED: -1;
  static +TRANSFORM_FEEDBACK: 0x8e22;
  static +TRANSFORM_FEEDBACK_ACTIVE: 0x8e24;
  static +TRANSFORM_FEEDBACK_BINDING: 0x8e25;
  static +TRANSFORM_FEEDBACK_BUFFER: 0x8c8e;
  static +TRANSFORM_FEEDBACK_BUFFER_BINDING: 0x8c8f;
  static +TRANSFORM_FEEDBACK_BUFFER_MODE: 0x8c7f;
  static +TRANSFORM_FEEDBACK_BUFFER_SIZE: 0x8c85;
  static +TRANSFORM_FEEDBACK_BUFFER_START: 0x8c84;
  static +TRANSFORM_FEEDBACK_PAUSED: 0x8e23;
  static +TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN: 0x8c88;
  static +TRANSFORM_FEEDBACK_VARYINGS: 0x8c83;
  static +UNIFORM_ARRAY_STRIDE: 0x8a3c;
  static +UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES: 0x8a43;
  static +UNIFORM_BLOCK_ACTIVE_UNIFORMS: 0x8a42;
  static +UNIFORM_BLOCK_BINDING: 0x8a3f;
  static +UNIFORM_BLOCK_DATA_SIZE: 0x8a40;
  static +UNIFORM_BLOCK_INDEX: 0x8a3a;
  static +UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER: 0x8a46;
  static +UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER: 0x8a44;
  static +UNIFORM_BUFFER: 0x8a11;
  static +UNIFORM_BUFFER_BINDING: 0x8a28;
  static +UNIFORM_BUFFER_OFFSET_ALIGNMENT: 0x8a34;
  static +UNIFORM_BUFFER_SIZE: 0x8a2a;
  static +UNIFORM_BUFFER_START: 0x8a29;
  static +UNIFORM_IS_ROW_MAJOR: 0x8a3e;
  static +UNIFORM_MATRIX_STRIDE: 0x8a3d;
  static +UNIFORM_OFFSET: 0x8a3b;
  static +UNIFORM_SIZE: 0x8a38;
  static +UNIFORM_TYPE: 0x8a37;
  static +UNPACK_IMAGE_HEIGHT: 0x806e;
  static +UNPACK_ROW_LENGTH: 0x0cf2;
  static +UNPACK_SKIP_IMAGES: 0x806d;
  static +UNPACK_SKIP_PIXELS: 0x0cf4;
  static +UNPACK_SKIP_ROWS: 0x0cf3;
  static +UNSIGNALED: 0x9118;
  static +UNSIGNED_INT_10F_11F_11F_REV: 0x8c3b;
  static +UNSIGNED_INT_2_10_10_10_REV: 0x8368;
  static +UNSIGNED_INT_24_8: 0x84fa;
  static +UNSIGNED_INT_5_9_9_9_REV: 0x8c3e;
  static +UNSIGNED_INT_SAMPLER_2D: 0x8dd2;
  static +UNSIGNED_INT_SAMPLER_2D_ARRAY: 0x8dd7;
  static +UNSIGNED_INT_SAMPLER_3D: 0x8dd3;
  static +UNSIGNED_INT_SAMPLER_CUBE: 0x8dd4;
  static +UNSIGNED_INT_VEC2: 0x8dc6;
  static +UNSIGNED_INT_VEC3: 0x8dc7;
  static +UNSIGNED_INT_VEC4: 0x8dc8;
  static +UNSIGNED_NORMALIZED: 0x8c17;
  static +VERTEX_ARRAY_BINDING: 0x85b5;
  static +VERTEX_ATTRIB_ARRAY_DIVISOR: 0x88fe;
  static +VERTEX_ATTRIB_ARRAY_INTEGER: 0x88fd;
  static +WAIT_FAILED: 0x911d;
}

declare class WebGLQuery extends WebGLObject {}

declare class WebGLSampler extends WebGLObject {}

declare class WebGLSync extends WebGLObject {}

declare class WebGLTransformFeedback extends WebGLObject {}

declare class WebGLVertexArrayObject extends WebGLObject {}

/* mixin */ declare class mixin$WebGL2RenderingContextBase {
  beginQuery(target: GLenum, query: WebGLQuery): void;
  beginTransformFeedback(primitiveMode: GLenum): void;
  bindBufferBase(
    target: GLenum,
    index: GLuint,
    buffer: WebGLBuffer | null,
  ): void;
  bindBufferRange(
    target: GLenum,
    index: GLuint,
    buffer: WebGLBuffer | null,
    offset: GLintptr,
    size: GLsizeiptr,
  ): void;
  bindSampler(unit: GLuint, sampler: WebGLSampler | null): void;
  bindTransformFeedback(
    target: GLenum,
    tf: WebGLTransformFeedback | null,
  ): void;
  bindVertexArray(array: WebGLVertexArrayObject | null): void;
  blitFramebuffer(
    srcX0: GLint,
    srcY0: GLint,
    srcX1: GLint,
    srcY1: GLint,
    dstX0: GLint,
    dstY0: GLint,
    dstX1: GLint,
    dstY1: GLint,
    mask: GLbitfield,
    filter: GLenum,
  ): void;
  clearBufferfi(
    buffer: GLenum,
    drawbuffer: GLint,
    depth: GLfloat,
    stencil: GLint,
  ): void;
  clearBufferfv(
    buffer: GLenum,
    drawbuffer: GLint,
    values: Float32List,
    srcOffset?: number,
  ): void;
  clearBufferiv(
    buffer: GLenum,
    drawbuffer: GLint,
    values: Int32List,
    srcOffset?: number,
  ): void;
  clearBufferuiv(
    buffer: GLenum,
    drawbuffer: GLint,
    values: Uint32List,
    srcOffset?: number,
  ): void;
  clientWaitSync(sync: WebGLSync, flags: GLbitfield, timeout: GLuint64): GLenum;
  compressedTexImage3D(
    target: GLenum,
    level: GLint,
    internalformat: GLenum,
    width: GLsizei,
    height: GLsizei,
    depth: GLsizei,
    border: GLint,
    imageSize: GLsizei,
    offset: GLintptr,
  ): void;
  compressedTexImage3D(
    target: GLenum,
    level: GLint,
    internalformat: GLenum,
    width: GLsizei,
    height: GLsizei,
    depth: GLsizei,
    border: GLint,
    srcData: ArrayBufferView,
    srcOffset?: number,
    srcLengthOverride?: GLuint,
  ): void;
  compressedTexSubImage3D(
    target: GLenum,
    level: GLint,
    xoffset: GLint,
    yoffset: GLint,
    zoffset: GLint,
    width: GLsizei,
    height: GLsizei,
    depth: GLsizei,
    format: GLenum,
    imageSize: GLsizei,
    offset: GLintptr,
  ): void;
  compressedTexSubImage3D(
    target: GLenum,
    level: GLint,
    xoffset: GLint,
    yoffset: GLint,
    zoffset: GLint,
    width: GLsizei,
    height: GLsizei,
    depth: GLsizei,
    format: GLenum,
    srcData: ArrayBufferView,
    srcOffset?: number,
    srcLengthOverride?: GLuint,
  ): void;
  copyBufferSubData(
    readTarget: GLenum,
    writeTarget: GLenum,
    readOffset: GLintptr,
    writeOffset: GLintptr,
    size: GLsizeiptr,
  ): void;
  copyTexSubImage3D(
    target: GLenum,
    level: GLint,
    xoffset: GLint,
    yoffset: GLint,
    zoffset: GLint,
    x: GLint,
    y: GLint,
    width: GLsizei,
    height: GLsizei,
  ): void;
  createQuery(): WebGLQuery;
  createSampler(): WebGLSampler;
  createTransformFeedback(): WebGLTransformFeedback;
  createVertexArray(): WebGLVertexArrayObject;
  deleteQuery(query: WebGLQuery | null): void;
  deleteSampler(sampler: WebGLSampler | null): void;
  deleteSync(sync: WebGLSync | null): void;
  deleteTransformFeedback(tf: WebGLTransformFeedback | null): void;
  deleteVertexArray(vertexArray: WebGLVertexArrayObject | null): void;
  drawArraysInstanced(
    mode: GLenum,
    first: GLint,
    count: GLsizei,
    instanceCount: GLsizei,
  ): void;
  drawBuffers(buffers: Array<GLenum>): void;
  drawElementsInstanced(
    mode: GLenum,
    count: GLsizei,
    type: GLenum,
    offset: GLintptr,
    instanceCount: GLsizei,
  ): void;
  drawRangeElements(
    mode: GLenum,
    start: GLuint,
    end: GLuint,
    count: GLsizei,
    type: GLenum,
    offset: GLintptr,
  ): void;
  endQuery(target: GLenum): void;
  endTransformFeedback(): void;
  fenceSync(condition: GLenum, flags: GLbitfield): WebGLSync | null;
  framebufferTextureLayer(
    target: GLenum,
    attachment: GLenum,
    texture: WebGLTexture | null,
    level: GLint,
    layer: GLint,
  ): void;
  getActiveUniformBlockName(
    program: WebGLProgram,
    uniformBlockIndex: GLuint,
  ): string | null;
  getActiveUniformBlockParameter(
    program: WebGLProgram,
    uniformBlockIndex: GLuint,
    pname: GLenum,
  ): any;
  getActiveUniforms(
    program: WebGLProgram,
    uniformIndices: Array<GLuint>,
    pname: GLenum,
  ): any;
  getBufferSubData(
    target: GLenum,
    srcByteOffset: GLintptr,
    dstBuffer: ArrayBufferView,
    dstOffset?: number,
    length?: GLuint,
  ): void;
  getFragDataLocation(program: WebGLProgram, name: string): GLint;
  getIndexedParameter(target: GLenum, index: GLuint): any;
  getInternalformatParameter(
    target: GLenum,
    internalformat: GLenum,
    pname: GLenum,
  ): any;
  getQuery(target: GLenum, pname: GLenum): WebGLQuery | null;
  getQueryParameter(query: WebGLQuery, pname: GLenum): any;
  getSamplerParameter(sampler: WebGLSampler, pname: GLenum): any;
  getSyncParameter(sync: WebGLSync, pname: GLenum): any;
  getTransformFeedbackVarying(
    program: WebGLProgram,
    index: GLuint,
  ): WebGLActiveInfo | null;
  getUniformBlockIndex(program: WebGLProgram, uniformBlockName: string): GLuint;
  getUniformIndices(
    program: WebGLProgram,
    uniformNames: Array<string>,
  ): Array<GLuint> | null;
  invalidateFramebuffer(target: GLenum, attachments: Array<GLenum>): void;
  invalidateSubFramebuffer(
    target: GLenum,
    attachments: Array<GLenum>,
    x: GLint,
    y: GLint,
    width: GLsizei,
    height: GLsizei,
  ): void;
  isQuery(query: WebGLQuery | null): GLboolean;
  isSampler(sampler: WebGLSampler | null): GLboolean;
  isSync(sync: WebGLSync | null): GLboolean;
  isTransformFeedback(tf: WebGLTransformFeedback | null): GLboolean;
  isVertexArray(vertexArray: WebGLVertexArrayObject | null): GLboolean;
  pauseTransformFeedback(): void;
  readBuffer(src: GLenum): void;
  renderbufferStorageMultisample(
    target: GLenum,
    samples: GLsizei,
    internalformat: GLenum,
    width: GLsizei,
    height: GLsizei,
  ): void;
  resumeTransformFeedback(): void;
  samplerParameterf(sampler: WebGLSampler, pname: GLenum, param: GLfloat): void;
  samplerParameteri(sampler: WebGLSampler, pname: GLenum, param: GLint): void;
  texImage3D(
    target: GLenum,
    level: GLint,
    internalformat: GLint,
    width: GLsizei,
    height: GLsizei,
    depth: GLsizei,
    border: GLint,
    format: GLenum,
    type: GLenum,
    pboOffset: GLintptr,
  ): void;
  texImage3D(
    target: GLenum,
    level: GLint,
    internalformat: GLint,
    width: GLsizei,
    height: GLsizei,
    depth: GLsizei,
    border: GLint,
    format: GLenum,
    type: GLenum,
    source: TexImageSource,
  ): void;
  texImage3D(
    target: GLenum,
    level: GLint,
    internalformat: GLint,
    width: GLsizei,
    height: GLsizei,
    depth: GLsizei,
    border: GLint,
    format: GLenum,
    type: GLenum,
    srcData: ArrayBufferView | null,
  ): void;
  texImage3D(
    target: GLenum,
    level: GLint,
    internalformat: GLint,
    width: GLsizei,
    height: GLsizei,
    depth: GLsizei,
    border: GLint,
    format: GLenum,
    type: GLenum,
    srcData: ArrayBufferView,
    srcOffset: number,
  ): void;
  texStorage2D(
    target: GLenum,
    levels: GLsizei,
    internalformat: GLenum,
    width: GLsizei,
    height: GLsizei,
  ): void;
  texStorage3D(
    target: GLenum,
    levels: GLsizei,
    internalformat: GLenum,
    width: GLsizei,
    height: GLsizei,
    depth: GLsizei,
  ): void;
  texSubImage3D(
    target: GLenum,
    level: GLint,
    xoffset: GLint,
    yoffset: GLint,
    zoffset: GLint,
    width: GLsizei,
    height: GLsizei,
    depth: GLsizei,
    format: GLenum,
    type: GLenum,
    pboOffset: GLintptr,
  ): void;
  texSubImage3D(
    target: GLenum,
    level: GLint,
    xoffset: GLint,
    yoffset: GLint,
    zoffset: GLint,
    width: GLsizei,
    height: GLsizei,
    depth: GLsizei,
    format: GLenum,
    type: GLenum,
    source: TexImageSource,
  ): void;
  texSubImage3D(
    target: GLenum,
    level: GLint,
    xoffset: GLint,
    yoffset: GLint,
    zoffset: GLint,
    width: GLsizei,
    height: GLsizei,
    depth: GLsizei,
    format: GLenum,
    type: GLenum,
    srcData: ArrayBufferView | null,
    srcOffset?: number,
  ): void;
  transformFeedbackVaryings(
    program: WebGLProgram,
    varyings: Array<string>,
    bufferMode: GLenum,
  ): void;
  uniform1ui(location: WebGLUniformLocation | null, v0: GLuint): void;
  uniform1uiv(
    location: WebGLUniformLocation | null,
    data: Uint32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  uniform2ui(
    location: WebGLUniformLocation | null,
    v0: GLuint,
    v1: GLuint,
  ): void;
  uniform2uiv(
    location: WebGLUniformLocation | null,
    data: Uint32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  uniform3ui(
    location: WebGLUniformLocation | null,
    v0: GLuint,
    v1: GLuint,
    v2: GLuint,
  ): void;
  uniform3uiv(
    location: WebGLUniformLocation | null,
    data: Uint32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  uniform4ui(
    location: WebGLUniformLocation | null,
    v0: GLuint,
    v1: GLuint,
    v2: GLuint,
    v3: GLuint,
  ): void;
  uniform4uiv(
    location: WebGLUniformLocation | null,
    data: Uint32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  uniformBlockBinding(
    program: WebGLProgram,
    uniformBlockIndex: GLuint,
    uniformBlockBinding: GLuint,
  ): void;
  uniformMatrix2x3fv(
    location: WebGLUniformLocation | null,
    transpose: GLboolean,
    data: Float32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  uniformMatrix2x4fv(
    location: WebGLUniformLocation | null,
    transpose: GLboolean,
    data: Float32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  uniformMatrix3x2fv(
    location: WebGLUniformLocation | null,
    transpose: GLboolean,
    data: Float32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  uniformMatrix3x4fv(
    location: WebGLUniformLocation | null,
    transpose: GLboolean,
    data: Float32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  uniformMatrix4x2fv(
    location: WebGLUniformLocation | null,
    transpose: GLboolean,
    data: Float32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  uniformMatrix4x3fv(
    location: WebGLUniformLocation | null,
    transpose: GLboolean,
    data: Float32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  vertexAttribDivisor(index: GLuint, divisor: GLuint): void;
  vertexAttribI4i(index: GLuint, x: GLint, y: GLint, z: GLint, w: GLint): void;
  vertexAttribI4iv(index: GLuint, values: Int32List): void;
  vertexAttribI4ui(
    index: GLuint,
    x: GLuint,
    y: GLuint,
    z: GLuint,
    w: GLuint,
  ): void;
  vertexAttribI4uiv(index: GLuint, values: Uint32List): void;
  vertexAttribIPointer(
    index: GLuint,
    size: GLint,
    type: GLenum,
    stride: GLsizei,
    offset: GLintptr,
  ): void;
  waitSync(sync: WebGLSync, flags: GLbitfield, timeout: GLint64): void;
}

/* mixin */ declare class mixin$WebGL2RenderingContextOverloads {
  bufferData(target: GLenum, size: GLsizeiptr, usage: GLenum): void;
  bufferData(
    target: GLenum,
    srcData: AllowSharedBufferSource | null,
    usage: GLenum,
  ): void;
  bufferData(
    target: GLenum,
    srcData: ArrayBufferView,
    usage: GLenum,
    srcOffset: number,
    length?: GLuint,
  ): void;
  bufferSubData(
    target: GLenum,
    dstByteOffset: GLintptr,
    srcData: AllowSharedBufferSource,
  ): void;
  bufferSubData(
    target: GLenum,
    dstByteOffset: GLintptr,
    srcData: ArrayBufferView,
    srcOffset: number,
    length?: GLuint,
  ): void;
  compressedTexImage2D(
    target: GLenum,
    level: GLint,
    internalformat: GLenum,
    width: GLsizei,
    height: GLsizei,
    border: GLint,
    imageSize: GLsizei,
    offset: GLintptr,
  ): void;
  compressedTexImage2D(
    target: GLenum,
    level: GLint,
    internalformat: GLenum,
    width: GLsizei,
    height: GLsizei,
    border: GLint,
    srcData: ArrayBufferView,
    srcOffset?: number,
    srcLengthOverride?: GLuint,
  ): void;
  compressedTexSubImage2D(
    target: GLenum,
    level: GLint,
    xoffset: GLint,
    yoffset: GLint,
    width: GLsizei,
    height: GLsizei,
    format: GLenum,
    imageSize: GLsizei,
    offset: GLintptr,
  ): void;
  compressedTexSubImage2D(
    target: GLenum,
    level: GLint,
    xoffset: GLint,
    yoffset: GLint,
    width: GLsizei,
    height: GLsizei,
    format: GLenum,
    srcData: ArrayBufferView,
    srcOffset?: number,
    srcLengthOverride?: GLuint,
  ): void;
  readPixels(
    x: GLint,
    y: GLint,
    width: GLsizei,
    height: GLsizei,
    format: GLenum,
    type: GLenum,
    dstData: ArrayBufferView | null,
  ): void;
  readPixels(
    x: GLint,
    y: GLint,
    width: GLsizei,
    height: GLsizei,
    format: GLenum,
    type: GLenum,
    offset: GLintptr,
  ): void;
  readPixels(
    x: GLint,
    y: GLint,
    width: GLsizei,
    height: GLsizei,
    format: GLenum,
    type: GLenum,
    dstData: ArrayBufferView,
    dstOffset: number,
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
  texImage2D(
    target: GLenum,
    level: GLint,
    internalformat: GLint,
    width: GLsizei,
    height: GLsizei,
    border: GLint,
    format: GLenum,
    type: GLenum,
    pboOffset: GLintptr,
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
    source: TexImageSource,
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
    srcData: ArrayBufferView,
    srcOffset: number,
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
  texSubImage2D(
    target: GLenum,
    level: GLint,
    xoffset: GLint,
    yoffset: GLint,
    width: GLsizei,
    height: GLsizei,
    format: GLenum,
    type: GLenum,
    pboOffset: GLintptr,
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
    srcData: ArrayBufferView,
    srcOffset: number,
  ): void;
  uniform1fv(
    location: WebGLUniformLocation | null,
    data: Float32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  uniform1iv(
    location: WebGLUniformLocation | null,
    data: Int32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  uniform2fv(
    location: WebGLUniformLocation | null,
    data: Float32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  uniform2iv(
    location: WebGLUniformLocation | null,
    data: Int32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  uniform3fv(
    location: WebGLUniformLocation | null,
    data: Float32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  uniform3iv(
    location: WebGLUniformLocation | null,
    data: Int32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  uniform4fv(
    location: WebGLUniformLocation | null,
    data: Float32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  uniform4iv(
    location: WebGLUniformLocation | null,
    data: Int32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  uniformMatrix2fv(
    location: WebGLUniformLocation | null,
    transpose: GLboolean,
    data: Float32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  uniformMatrix3fv(
    location: WebGLUniformLocation | null,
    transpose: GLboolean,
    data: Float32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  uniformMatrix4fv(
    location: WebGLUniformLocation | null,
    transpose: GLboolean,
    data: Float32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
}
