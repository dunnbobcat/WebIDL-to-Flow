declare class WEBGL_draw_instanced_base_vertex_base_instance {
  drawArraysInstancedBaseInstanceWEBGL(
    mode: GLenum,
    first: GLint,
    count: GLsizei,
    instanceCount: GLsizei,
    baseInstance: GLuint,
  ): void;
  drawElementsInstancedBaseVertexBaseInstanceWEBGL(
    mode: GLenum,
    count: GLsizei,
    type: GLenum,
    offset: GLintptr,
    instanceCount: GLsizei,
    baseVertex: GLint,
    baseInstance: GLuint,
  ): void;
}
