type GLuint64EXT = number;

declare class EXT_disjoint_timer_query {
  static +CURRENT_QUERY_EXT: 0x8865;
  static +GPU_DISJOINT_EXT: 0x8fbb;
  static +QUERY_COUNTER_BITS_EXT: 0x8864;
  static +QUERY_RESULT_AVAILABLE_EXT: 0x8867;
  static +QUERY_RESULT_EXT: 0x8866;
  static +TIME_ELAPSED_EXT: 0x88bf;
  static +TIMESTAMP_EXT: 0x8e28;

  beginQueryEXT(target: GLenum, query: WebGLTimerQueryEXT): void;
  createQueryEXT(): WebGLTimerQueryEXT;
  deleteQueryEXT(query: WebGLTimerQueryEXT | null): void;
  endQueryEXT(target: GLenum): void;
  getQueryEXT(target: GLenum, pname: GLenum): any;
  getQueryObjectEXT(query: WebGLTimerQueryEXT, pname: GLenum): any;
  isQueryEXT(query: WebGLTimerQueryEXT | null): boolean;
  queryCounterEXT(query: WebGLTimerQueryEXT, target: GLenum): void;
}

declare class WebGLTimerQueryEXT extends WebGLObject {}
