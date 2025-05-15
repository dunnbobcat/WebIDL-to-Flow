declare class ANGLE_instanced_arrays {
  static +VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE: 0x88fe;

  drawArraysInstancedANGLE(
    mode: GLenum,
    first: GLint,
    count: GLsizei,
    primcount: GLsizei,
  ): void;
  drawElementsInstancedANGLE(
    mode: GLenum,
    count: GLsizei,
    type: GLenum,
    offset: GLintptr,
    primcount: GLsizei,
  ): void;
  vertexAttribDivisorANGLE(index: GLuint, divisor: GLuint): void;
}
