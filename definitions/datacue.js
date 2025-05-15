declare class DataCue extends TextTrackCue {
  +type: string;
  value: any;

  constructor(
    startTime: number,
    endTime: number,
    value: any,
    type?: string,
  ): void;
}
