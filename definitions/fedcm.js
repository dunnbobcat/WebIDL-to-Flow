type IdentityCredentialRequestOptionsContext =
  | 'signin'
  | 'signup'
  | 'use'
  | 'continue';

type IdentityCredentialRequestOptionsMode = 'active' | 'passive';

/* partial */ type CredentialRequestOptions = {
  identity: IdentityCredentialRequestOptions,
};

type DisconnectedAccount = {
  account_id: string,
};

type IdentityAssertionResponse = {
  continue_on: string,
  token: string,
};

type IdentityCredentialDisconnectOptions = {
  accountHint: string,
  clientId: string,
  configURL: string,
};

type IdentityCredentialRequestOptions = {
  context: IdentityCredentialRequestOptionsContext,
  mode: IdentityCredentialRequestOptionsMode,
  providers: Array<IdentityProviderRequestOptions>,
};

type IdentityProviderAccount = {
  approved_clients: Array<string>,
  domain_hints: Array<string>,
  email: string,
  given_name: string,
  id: string,
  label_hints: Array<string>,
  login_hints: Array<string>,
  name: string,
  picture: string,
  tel: string,
  username: string,
};

type IdentityProviderAccountList = {
  accounts: Array<IdentityProviderAccount>,
};

type IdentityProviderAPIConfig = {
  account_label: string,
  accounts_endpoint: string,
  branding: IdentityProviderBranding,
  client_metadata_endpoint: string,
  disconnect_endpoint: string,
  id_assertion_endpoint: string,
  login_url: string,
};

type IdentityProviderBranding = {
  background_color: string,
  color: string,
  icons: Array<IdentityProviderIcon>,
  name: string,
};

type IdentityProviderClientMetadata = {
  privacy_policy_url: string,
  terms_of_service_url: string,
};

type IdentityProviderConfig = {
  clientId: string,
  configURL: string,
};

type IdentityProviderIcon = {
  size: number,
  url: string,
};

type IdentityProviderRequestOptions = {
  clientId: string,
  configURL: string,
  domainHint: string,
  fields: Array<string>,
  loginHint: string,
  nonce: string,
  params: any,
};

type IdentityProviderWellKnown = {
  accounts_endpoint: string,
  login_url: string,
  provider_urls: Array<string>,
};

type IdentityResolveOptions = {
  accountId: string,
};

type IdentityUserInfo = {
  email: string,
  givenName: string,
  name: string,
  picture: string,
};

declare class IdentityCredential extends Credential {
  +configURL: string;
  +isAutoSelected: boolean;
  +token: string | null;

  static disconnect(options: IdentityCredentialDisconnectOptions): void;
}

declare class IdentityProvider {
  static close(): void;
  static getUserInfo(config: IdentityProviderConfig): Array<IdentityUserInfo>;
  static resolve(token: string, options?: IdentityResolveOptions): void;
}
