type ScriptInvokerType =
  | 'classic-script'
  | 'module-script'
  | 'event-listener'
  | 'user-callback'
  | 'resolve-promise'
  | 'reject-promise';

type ScriptWindowAttribution =
  | 'self'
  | 'descendant'
  | 'ancestor'
  | 'same-page'
  | 'other';

declare class PerformanceLongAnimationFrameTiming
  extends PerformanceEntry
  mixins mixin$PaintTimingMixin
{
  +blockingDuration: number;
  +duration: number;
  +entryType: string;
  +firstUIEventTimestamp: number;
  +name: string;
  +renderStart: number;
  +scripts: PerformanceScriptTiming;
  +startTime: number;
  +styleAndLayoutStart: number;

  toJSON(): Object;
}

declare class PerformanceScriptTiming extends PerformanceEntry {
  +duration: number;
  +entryType: string;
  +executionStart: number;
  +forcedStyleAndLayoutDuration: number;
  +invoker: string;
  +invokerType: ScriptInvokerType;
  +name: string;
  +pauseDuration: number;
  +sourceCharPosition: number;
  +sourceFunctionName: string;
  +sourceURL: string;
  +startTime: number;
  +window: Window | null;
  +windowAttribution: ScriptWindowAttribution;

  toJSON(): Object;
}
