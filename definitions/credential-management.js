type PasswordCredentialInit = PasswordCredentialData | HTMLFormElement;

type CredentialMediationRequirement =
  | 'silent'
  | 'optional'
  | 'conditional'
  | 'required';

type CredentialCreationOptions = {
  federated: FederatedCredentialInit,
  mediation: CredentialMediationRequirement,
  password: PasswordCredentialInit,
  signal: AbortSignal,
};

type CredentialData = {
  id: string,
};

type CredentialRequestOptions = {
  federated: FederatedCredentialRequestOptions,
  mediation: CredentialMediationRequirement,
  password: boolean,
  signal: AbortSignal,
};

type FederatedCredentialInit = {
  iconURL: string,
  id: string,
  name: string,
  origin: string,
  protocol: string,
  provider: string,
};

type FederatedCredentialRequestOptions = {
  protocols: Array<string>,
  providers: Array<string>,
};

type PasswordCredentialData = {
  iconURL: string,
  id: string,
  name: string,
  origin: string,
  password: string,
};

declare class Credential {
  +id: string;
  +type: string;

  static isConditionalMediationAvailable(): Promise<boolean>;
  static willRequestConditionalCreation(): Promise<void>;
}

declare class CredentialsContainer {
  create(options?: CredentialCreationOptions): Promise<Credential | null>;
  get(options?: CredentialRequestOptions): Promise<Credential | null>;
  preventSilentAccess(): Promise<void>;
  store(credential: Credential): Promise<void>;
}

declare class FederatedCredential
  extends Credential
  mixins mixin$CredentialUserData
{
  +protocol: string | null;
  +provider: string;

  constructor(data: FederatedCredentialInit): void;
}

/* partial */ declare class Navigator {
  +credentials: CredentialsContainer;
}

declare class PasswordCredential
  extends Credential
  mixins mixin$CredentialUserData
{
  +password: string;

  constructor(form: HTMLFormElement): void;
  constructor(data: PasswordCredentialData): void;
}

declare class mixin$CredentialUserData {
  +iconURL: string;
  +name: string;
}
