declare class EXT_disjoint_timer_query_webgl2 {
  static +GPU_DISJOINT_EXT: 0x8fbb;
  static +QUERY_COUNTER_BITS_EXT: 0x8864;
  static +TIME_ELAPSED_EXT: 0x88bf;
  static +TIMESTAMP_EXT: 0x8e28;

  queryCounterEXT(query: WebGLQuery, target: GLenum): void;
}
