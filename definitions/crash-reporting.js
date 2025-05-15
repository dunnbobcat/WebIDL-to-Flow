declare class CrashReportBody extends ReportBody {
  +is_top_level: string | null;
  +page_visibility: DocumentVisibilityState | null;
  +reason: string | null;
  +stack: string | null;

  toJSON(): Object;
}
