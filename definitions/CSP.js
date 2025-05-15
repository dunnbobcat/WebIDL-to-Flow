type SecurityPolicyViolationEventDisposition = 'enforce' | 'report';

type SecurityPolicyViolationEventInit = {
  blockedURI: string,
  columnNumber: number,
  disposition: SecurityPolicyViolationEventDisposition,
  documentURI: string,
  effectiveDirective: string,
  lineNumber: number,
  originalPolicy: string,
  referrer: string,
  sample: string,
  sourceFile: string,
  statusCode: number,
  violatedDirective: string,
};

declare class CSPViolationReportBody extends ReportBody {
  +blockedURL: string | null;
  +columnNumber: number | null;
  +disposition: SecurityPolicyViolationEventDisposition;
  +documentURL: string;
  +effectiveDirective: string;
  +lineNumber: number | null;
  +originalPolicy: string;
  +referrer: string | null;
  +sample: string | null;
  +sourceFile: string | null;
  +statusCode: number;

  toJSON(): Object;
}

declare class SecurityPolicyViolationEvent extends Event {
  +blockedURI: string;
  +columnNumber: number;
  +disposition: SecurityPolicyViolationEventDisposition;
  +documentURI: string;
  +effectiveDirective: string;
  +lineNumber: number;
  +originalPolicy: string;
  +referrer: string;
  +sample: string;
  +sourceFile: string;
  +statusCode: number;
  +violatedDirective: string;

  constructor(
    type: string,
    eventInitDict?: SecurityPolicyViolationEventInit,
  ): void;
}
