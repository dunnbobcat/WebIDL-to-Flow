/* partial */ type CredentialCreationOptions = {
  digital: DigitalCredentialCreationOptions,
};

/* partial */ type CredentialRequestOptions = {
  digital: DigitalCredentialRequestOptions,
};

type DigitalCredentialCreateRequest = {
  data: Object,
  protocol: string,
};

type DigitalCredentialCreationOptions = {
  requests: Array<DigitalCredentialCreateRequest>,
};

type DigitalCredentialGetRequest = {
  data: Object,
  protocol: string,
};

type DigitalCredentialRequestOptions = {
  requests: Array<DigitalCredentialGetRequest>,
};

declare class DigitalCredential extends Credential {
  +data: Object;
  +protocol: string;
}
