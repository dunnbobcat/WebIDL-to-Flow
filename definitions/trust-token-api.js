type OperationType =
  | 'token-request'
  | 'send-redemption-record'
  | 'token-redemption';

type RefreshPolicy = 'none' | 'refresh';

type TokenVersion = '1';

type PrivateToken = {
  issuers: Array<string>,
  operation: OperationType,
  refreshPolicy: RefreshPolicy,
  version: TokenVersion,
};

/* partial */ type RequestInit = {
  privateToken: PrivateToken,
};

/* partial */ declare class Document {
  hasPrivateToken(issuer: string): Promise<boolean>;
  hasRedemptionRecord(issuer: string): Promise<boolean>;
}

/* partial */ declare class HTMLIFrameElement {
  privateToken: string;
}

/* partial */ declare class XMLHttpRequest {
  setPrivateToken(privateToken: PrivateToken): void;
}
