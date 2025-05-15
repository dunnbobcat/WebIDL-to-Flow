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

/* partial */ interface Document {
  hasPrivateToken(issuer: string): boolean;
  hasRedemptionRecord(issuer: string): boolean;
}

/* partial */ interface HTMLIFrameElement {
  privateToken: string;
}

/* partial */ interface XMLHttpRequest {
  setPrivateToken(privateToken: PrivateToken): void;
}
