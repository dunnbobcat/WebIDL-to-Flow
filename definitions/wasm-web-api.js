/* partial */ declare namespace WebAssembly {
  declare function compileStreaming(source: Response): Module;
  declare function instantiateStreaming(
    source: Response,
    importObject?: Object,
  ): WebAssemblyInstantiatedSource;
}
