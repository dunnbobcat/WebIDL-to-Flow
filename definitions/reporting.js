type ReportList = Array<Report>;

type GenerateTestReportParameters = {
  group: string,
  message: string,
};

type ReportingObserverOptions = {
  buffered: boolean,
  types: Array<string>,
};

type ReportingObserverCallback = (
  reports: Array<Report>,
  observer: ReportingObserver,
) => void;

declare class Report {
  +body: ReportBody | null;
  +type: string;
  +url: string;

  toJSON(): Object;
}

declare class ReportBody {
  toJSON(): Object;
}

declare class ReportingObserver {
  constructor(
    callback: ReportingObserverCallback,
    options?: ReportingObserverOptions,
  ): void;

  disconnect(): void;
  observe(): void;
  takeRecords(): ReportList;
}
