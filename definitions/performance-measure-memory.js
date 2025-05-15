type MemoryAttribution = {
  container: MemoryAttributionContainer,
  scope: string,
  url: string,
};

type MemoryAttributionContainer = {
  id: string,
  src: string,
};

type MemoryBreakdownEntry = {
  attribution: Array<MemoryAttribution>,
  bytes: number,
  types: Array<string>,
};

type MemoryMeasurement = {
  breakdown: Array<MemoryBreakdownEntry>,
  bytes: number,
};

/* partial */ declare class Performance {
  measureUserAgentSpecificMemory(): Promise<MemoryMeasurement>;
}
