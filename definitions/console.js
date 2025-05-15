declare namespace console {
  declare function assert(condition?: boolean, data: any): void;
  declare function clear(): void;
  declare function count(label?: string): void;
  declare function countReset(label?: string): void;
  declare function debug(data: any): void;
  declare function dir(item?: any, options?: Object | null): void;
  declare function dirxml(data: any): void;
  declare function error(data: any): void;
  declare function group(data: any): void;
  declare function groupCollapsed(data: any): void;
  declare function groupEnd(): void;
  declare function info(data: any): void;
  declare function log(data: any): void;
  declare function table(tabularData?: any, properties?: Array<string>): void;
  declare function time(label?: string): void;
  declare function timeEnd(label?: string): void;
  declare function timeLog(label?: string, data: any): void;
  declare function trace(data: any): void;
  declare function warn(data: any): void;
}
