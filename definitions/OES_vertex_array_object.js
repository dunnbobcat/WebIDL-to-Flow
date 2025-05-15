declare class OES_vertex_array_object {
  static +VERTEX_ARRAY_BINDING_OES: 0x85b5;

  bindVertexArrayOES(arrayObject: WebGLVertexArrayObjectOES | null): void;
  createVertexArrayOES(): WebGLVertexArrayObjectOES;
  deleteVertexArrayOES(arrayObject: WebGLVertexArrayObjectOES | null): void;
  isVertexArrayOES(arrayObject: WebGLVertexArrayObjectOES | null): GLboolean;
}

declare class WebGLVertexArrayObjectOES extends WebGLObject {}
