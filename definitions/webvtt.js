type LineAndPositionSetting = number | AutoKeyword;

type AlignSetting = 'start' | 'center' | 'end' | 'left' | 'right';

type AutoKeyword = 'auto';

type DirectionSetting = '' | 'rl' | 'lr';

type LineAlignSetting = 'start' | 'center' | 'end';

type PositionAlignSetting = 'line-left' | 'center' | 'line-right' | 'auto';

type ScrollSetting = '' | 'up';

declare class VTTCue extends TextTrackCue {
  align: AlignSetting;
  line: LineAndPositionSetting;
  lineAlign: LineAlignSetting;
  position: LineAndPositionSetting;
  positionAlign: PositionAlignSetting;
  region: VTTRegion | null;
  size: number;
  snapToLines: boolean;
  text: string;
  vertical: DirectionSetting;

  constructor(startTime: number, endTime: number, text: string): void;

  getCueAsHTML(): DocumentFragment;
}

declare class VTTRegion {
  id: string;
  lines: number;
  regionAnchorX: number;
  regionAnchorY: number;
  scroll: ScrollSetting;
  viewportAnchorX: number;
  viewportAnchorY: number;
  width: number;

  constructor(): void;
}
