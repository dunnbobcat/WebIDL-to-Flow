/* partial */ interface Document {
  +permissionsPolicy: PermissionsPolicy;
}

/* partial */ interface HTMLIFrameElement {
  +permissionsPolicy: PermissionsPolicy;
}

declare class PermissionsPolicy {
  allowedFeatures(): Array<string>;
  allowsFeature(feature: string, origin?: string): boolean;
  features(): Array<string>;
  getAllowlistForFeature(feature: string): Array<string>;
}

declare class PermissionsPolicyViolationReportBody extends ReportBody {
  +allowAttribute: string | null;
  +columnNumber: number | null;
  +disposition: string;
  +featureId: string;
  +lineNumber: number | null;
  +sourceFile: string | null;
  +srcAttribute: string | null;

  toJSON(): Object;
}
