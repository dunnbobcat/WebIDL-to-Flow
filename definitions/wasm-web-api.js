/* partial */ declare namespace WebAssembly {
  declare function compileStreaming(source: Promise<Response>): Promise<Module>;
  declare function instantiateStreaming(
    source: Promise<Response>,
    importObject?: Object,
  ): Promise<WebAssemblyInstantiatedSource>;
}
