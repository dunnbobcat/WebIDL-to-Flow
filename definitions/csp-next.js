type ScriptingPolicyViolationType =
  | 'externalScript'
  | 'inlineScript'
  | 'inlineEventHandler'
  | 'eval';

declare class ScriptingPolicyReportBody extends ReportBody {
  +colno: number;
  +lineno: number;
  +violationSample: string | null;
  +violationType: string;
  +violationURL: string | null;

  toJSON(): Object;
}
