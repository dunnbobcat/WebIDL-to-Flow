type ProfilerResource = string;

type ProfilerFrame = {
  column: number,
  line: number,
  name: string,
  resourceId: number,
};

type ProfilerInitOptions = {
  maxBufferSize: number,
  sampleInterval: number,
};

type ProfilerSample = {
  stackId: number,
  timestamp: number,
};

type ProfilerStack = {
  frameId: number,
  parentId: number,
};

type ProfilerTrace = {
  frames: Array<ProfilerFrame>,
  resources: Array<ProfilerResource>,
  samples: Array<ProfilerSample>,
  stacks: Array<ProfilerStack>,
};

declare class Profiler extends EventTarget {
  +sampleInterval: number;
  +stopped: boolean;

  constructor(options: ProfilerInitOptions): void;

  stop(): ProfilerTrace;
}
