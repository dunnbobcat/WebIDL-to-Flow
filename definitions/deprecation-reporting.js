declare class DeprecationReportBody extends ReportBody {
  +anticipatedRemoval: Object | null;
  +columnNumber: number | null;
  +id: string;
  +lineNumber: number | null;
  +message: string;
  +sourceFile: string | null;

  toJSON(): Object;
}
