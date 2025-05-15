type ImportExportKind = 'function' | 'table' | 'memory' | 'global';

type TableKind = 'externref' | 'anyfunc';

type ValueType =
  | 'i32'
  | 'i64'
  | 'f32'
  | 'f64'
  | 'v128'
  | 'externref'
  | 'anyfunc';

type GlobalDescriptor = {
  mutable: boolean,
  value: ValueType,
};

type MemoryDescriptor = {
  initial: number,
  maximum: number,
};

type ModuleExportDescriptor = {
  kind: ImportExportKind,
  name: string,
};

type ModuleImportDescriptor = {
  kind: ImportExportKind,
  module: string,
  name: string,
};

type TableDescriptor = {
  element: TableKind,
  initial: number,
  maximum: number,
};

type WebAssemblyInstantiatedSource = {
  instance: Instance,
  module: Module,
};

declare namespace WebAssembly {
  declare function compile(bytes: BufferSource): Promise<Module>;
  declare function instantiate(
    bytes: BufferSource,
    importObject?: Object,
  ): Promise<WebAssemblyInstantiatedSource>;
  declare function instantiate(
    moduleObject: Module,
    importObject?: Object,
  ): Promise<Instance>;
  declare function validate(bytes: BufferSource): boolean;
}

declare class Global {
  value: any;

  constructor(descriptor: GlobalDescriptor, v?: any): void;

  valueOf(): any;
}

declare class Instance {
  +exports: Object;

  constructor(module: Module, importObject?: Object): void;
}

declare class Memory {
  +buffer: ArrayBuffer;

  constructor(descriptor: MemoryDescriptor): void;

  grow(delta: number): number;
  toFixedLengthBuffer(): ArrayBuffer;
  toResizableBuffer(): ArrayBuffer;
}

declare class Module {
  constructor(bytes: BufferSource): void;

  static customSections(
    moduleObject: Module,
    sectionName: string,
  ): Array<ArrayBuffer>;
  static exports(moduleObject: Module): Array<ModuleExportDescriptor>;
  static imports(moduleObject: Module): Array<ModuleImportDescriptor>;
}

declare class Table {
  +length: number;

  constructor(descriptor: TableDescriptor, value?: any): void;

  get(index: number): any;
  grow(delta: number, value?: any): number;
  set(index: number, value?: any): void;
}
