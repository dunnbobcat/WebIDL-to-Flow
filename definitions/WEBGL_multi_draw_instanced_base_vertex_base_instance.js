declare class WEBGL_multi_draw_instanced_base_vertex_base_instance {
  multiDrawArraysInstancedBaseInstanceWEBGL(
    mode: GLenum,
    firstsList: Int32Array | Array<GLint>,
    firstsOffset: number,
    countsList: Int32Array | Array<GLsizei>,
    countsOffset: number,
    instanceCountsList: Int32Array | Array<GLsizei>,
    instanceCountsOffset: number,
    baseInstancesList: Uint32Array | Array<GLuint>,
    baseInstancesOffset: number,
    drawcount: GLsizei,
  ): void;
  multiDrawElementsInstancedBaseVertexBaseInstanceWEBGL(
    mode: GLenum,
    countsList: Int32Array | Array<GLsizei>,
    countsOffset: number,
    type: GLenum,
    offsetsList: Int32Array | Array<GLsizei>,
    offsetsOffset: number,
    instanceCountsList: Int32Array | Array<GLsizei>,
    instanceCountsOffset: number,
    baseVerticesList: Int32Array | Array<GLint>,
    baseVerticesOffset: number,
    baseInstancesList: Uint32Array | Array<GLuint>,
    baseInstancesOffset: number,
    drawcount: GLsizei,
  ): void;
}
