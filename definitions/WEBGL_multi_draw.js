declare class WEBGL_multi_draw {
  multiDrawArraysInstancedWEBGL(
    mode: GLenum,
    firstsList: Int32Array | Array<GLint>,
    firstsOffset: number,
    countsList: Int32Array | Array<GLsizei>,
    countsOffset: number,
    instanceCountsList: Int32Array | Array<GLsizei>,
    instanceCountsOffset: number,
    drawcount: GLsizei,
  ): void;
  multiDrawArraysWEBGL(
    mode: GLenum,
    firstsList: Int32Array | Array<GLint>,
    firstsOffset: number,
    countsList: Int32Array | Array<GLsizei>,
    countsOffset: number,
    drawcount: GLsizei,
  ): void;
  multiDrawElementsInstancedWEBGL(
    mode: GLenum,
    countsList: Int32Array | Array<GLsizei>,
    countsOffset: number,
    type: GLenum,
    offsetsList: Int32Array | Array<GLsizei>,
    offsetsOffset: number,
    instanceCountsList: Int32Array | Array<GLsizei>,
    instanceCountsOffset: number,
    drawcount: GLsizei,
  ): void;
  multiDrawElementsWEBGL(
    mode: GLenum,
    countsList: Int32Array | Array<GLsizei>,
    countsOffset: number,
    type: GLenum,
    offsetsList: Int32Array | Array<GLsizei>,
    offsetsOffset: number,
    drawcount: GLsizei,
  ): void;
}
