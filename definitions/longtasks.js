declare class PerformanceLongTaskTiming extends PerformanceEntry {
  +attribution: $ReadOnlyArray<TaskAttributionTiming>;
  +duration: number;
  +entryType: string;
  +name: string;
  +startTime: number;

  toJSON(): Object;
}

declare class TaskAttributionTiming extends PerformanceEntry {
  +containerId: string;
  +containerName: string;
  +containerSrc: string;
  +containerType: string;
  +duration: number;
  +entryType: string;
  +name: string;
  +startTime: number;

  toJSON(): Object;
}
