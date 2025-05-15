type RTCErrorDetailTypeIdp =
  | 'idp-bad-script-failure'
  | 'idp-execution-failure'
  | 'idp-load-failure'
  | 'idp-need-login'
  | 'idp-timeout'
  | 'idp-tls-failure'
  | 'idp-token-expired'
  | 'idp-token-invalid';

/* partial */ type MediaStreamConstraints = {
  peerIdentity: string,
};

/* partial */ type RTCConfiguration = {
  peerIdentity: string,
};

/* partial */ type RTCErrorInit = {
  httpRequestStatusCode: number,
};

type RTCIdentityAssertionResult = {
  assertion: string,
  idp: RTCIdentityProviderDetails,
};

type RTCIdentityProvider = {
  generateAssertion: GenerateAssertionCallback,
  validateAssertion: ValidateAssertionCallback,
};

type RTCIdentityProviderDetails = {
  domain: string,
  protocol: string,
};

type RTCIdentityProviderOptions = {
  peerIdentity: string,
  protocol: string,
  usernameHint: string,
};

type RTCIdentityValidationResult = {
  contents: string,
  identity: string,
};

type GenerateAssertionCallback = (
  contents: string,
  origin: string,
  options: RTCIdentityProviderOptions,
) => Promise<RTCIdentityAssertionResult>;

type ValidateAssertionCallback = (
  assertion: string,
  origin: string,
) => Promise<RTCIdentityValidationResult>;

/* partial */ declare class MediaStreamTrack {
  +isolated: boolean;
  onisolationchange: EventHandler;
}

/* partial */ declare class RTCError {
  +httpRequestStatusCode: number | null;
}

declare class RTCIdentityAssertion {
  idp: string;
  name: string;

  constructor(idp: string, name: string): void;
}

declare class RTCIdentityProviderGlobalScope extends WorkerGlobalScope {
  +rtcIdentityProvider: RTCIdentityProviderRegistrar;
}

declare class RTCIdentityProviderRegistrar {
  register(idp: RTCIdentityProvider): void;
}

/* partial */ declare class RTCPeerConnection {
  +idpErrorInfo: string | null;
  +idpLoginUrl: string | null;
  +peerIdentity: Promise<RTCIdentityAssertion>;

  getIdentityAssertion(): Promise<string>;
  setIdentityProvider(
    provider: string,
    options?: RTCIdentityProviderOptions,
  ): void;
}
