declare class InterventionReportBody extends ReportBody {
  +columnNumber: number | null;
  +id: string;
  +lineNumber: number | null;
  +message: string;
  +sourceFile: string | null;

  toJSON(): Object;
}
