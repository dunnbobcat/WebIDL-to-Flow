type Base64URLString = string;

type COSEAlgorithmIdentifier = number;

type PublicKeyCredentialClientCapabilities = string | boolean;

type PublicKeyCredentialJSON = Object;

type AttestationConveyancePreference =
  | 'none'
  | 'indirect'
  | 'direct'
  | 'enterprise';

type AuthenticatorAttachment = 'platform' | 'cross-platform';

type AuthenticatorTransport =
  | 'usb'
  | 'nfc'
  | 'ble'
  | 'smart-card'
  | 'hybrid'
  | 'internal';

type ClientCapability =
  | 'conditionalCreate'
  | 'conditionalGet'
  | 'hybridTransport'
  | 'passkeyPlatformAuthenticator'
  | 'userVerifyingPlatformAuthenticator'
  | 'relatedOrigins'
  | 'signalAllAcceptedCredentials'
  | 'signalCurrentUserDetails'
  | 'signalUnknownCredential';

type LargeBlobSupport = 'required' | 'preferred';

type PublicKeyCredentialHint = 'security-key' | 'client-device' | 'hybrid';

type PublicKeyCredentialType = 'public-key';

type ResidentKeyRequirement = 'discouraged' | 'preferred' | 'required';

type TokenBindingStatus = 'present' | 'supported';

type UserVerificationRequirement = 'required' | 'preferred' | 'discouraged';

type AllAcceptedCredentialsOptions = {
  allAcceptedCredentialIds: Array<Base64URLString>,
  rpId: string,
  userId: Base64URLString,
};

type AuthenticationExtensionsClientInputs = {
  appid: string,
  appidExclude: string,
  credProps: boolean,
  largeBlob: AuthenticationExtensionsLargeBlobInputs,
  prf: AuthenticationExtensionsPRFInputs,
};

/* partial */ type AuthenticationExtensionsClientInputs = {
  appid: string,
};

/* partial */ type AuthenticationExtensionsClientInputs = {
  appidExclude: string,
};

/* partial */ type AuthenticationExtensionsClientInputs = {
  credProps: boolean,
};

/* partial */ type AuthenticationExtensionsClientInputs = {
  prf: AuthenticationExtensionsPRFInputs,
};

/* partial */ type AuthenticationExtensionsClientInputs = {
  largeBlob: AuthenticationExtensionsLargeBlobInputs,
};

type AuthenticationExtensionsClientInputsJSON = {
  appid: string,
  appidExclude: string,
  credProps: boolean,
  largeBlob: AuthenticationExtensionsLargeBlobInputsJSON,
  prf: AuthenticationExtensionsPRFInputsJSON,
};

/* partial */ type AuthenticationExtensionsClientInputsJSON = {
  appid: string,
};

/* partial */ type AuthenticationExtensionsClientInputsJSON = {
  appidExclude: string,
};

/* partial */ type AuthenticationExtensionsClientInputsJSON = {
  credProps: boolean,
};

/* partial */ type AuthenticationExtensionsClientInputsJSON = {
  prf: AuthenticationExtensionsPRFInputsJSON,
};

/* partial */ type AuthenticationExtensionsClientInputsJSON = {
  largeBlob: AuthenticationExtensionsLargeBlobInputsJSON,
};

type AuthenticationExtensionsClientOutputs = {
  appid: boolean,
  appidExclude: boolean,
  credProps: CredentialPropertiesOutput,
  largeBlob: AuthenticationExtensionsLargeBlobOutputs,
  prf: AuthenticationExtensionsPRFOutputs,
};

/* partial */ type AuthenticationExtensionsClientOutputs = {
  appid: boolean,
};

/* partial */ type AuthenticationExtensionsClientOutputs = {
  appidExclude: boolean,
};

/* partial */ type AuthenticationExtensionsClientOutputs = {
  credProps: CredentialPropertiesOutput,
};

/* partial */ type AuthenticationExtensionsClientOutputs = {
  prf: AuthenticationExtensionsPRFOutputs,
};

/* partial */ type AuthenticationExtensionsClientOutputs = {
  largeBlob: AuthenticationExtensionsLargeBlobOutputs,
};

type AuthenticationExtensionsClientOutputsJSON = {
  appid: boolean,
  appidExclude: boolean,
  credProps: CredentialPropertiesOutput,
  largeBlob: AuthenticationExtensionsLargeBlobOutputsJSON,
  prf: AuthenticationExtensionsPRFOutputsJSON,
};

/* partial */ type AuthenticationExtensionsClientOutputsJSON = {
  appid: boolean,
};

/* partial */ type AuthenticationExtensionsClientOutputsJSON = {
  appidExclude: boolean,
};

/* partial */ type AuthenticationExtensionsClientOutputsJSON = {
  credProps: CredentialPropertiesOutput,
};

/* partial */ type AuthenticationExtensionsClientOutputsJSON = {
  prf: AuthenticationExtensionsPRFOutputsJSON,
};

/* partial */ type AuthenticationExtensionsClientOutputsJSON = {
  largeBlob: AuthenticationExtensionsLargeBlobOutputsJSON,
};

type AuthenticationExtensionsLargeBlobInputs = {
  read: boolean,
  support: string,
  write: BufferSource,
};

type AuthenticationExtensionsLargeBlobInputsJSON = {
  read: boolean,
  support: string,
  write: Base64URLString,
};

type AuthenticationExtensionsLargeBlobOutputs = {
  blob: ArrayBuffer,
  supported: boolean,
  written: boolean,
};

type AuthenticationExtensionsLargeBlobOutputsJSON = {
  blob: Base64URLString,
  supported: boolean,
  written: boolean,
};

type AuthenticationExtensionsPRFInputs = {
  eval: AuthenticationExtensionsPRFValues,
  evalByCredential: string | AuthenticationExtensionsPRFValues,
};

type AuthenticationExtensionsPRFInputsJSON = {
  eval: AuthenticationExtensionsPRFValuesJSON,
  evalByCredential: string | AuthenticationExtensionsPRFValuesJSON,
};

type AuthenticationExtensionsPRFOutputs = {
  enabled: boolean,
  results: AuthenticationExtensionsPRFValues,
};

type AuthenticationExtensionsPRFOutputsJSON = {
  enabled: boolean,
  results: AuthenticationExtensionsPRFValuesJSON,
};

type AuthenticationExtensionsPRFValues = {
  first: BufferSource,
  second: BufferSource,
};

type AuthenticationExtensionsPRFValuesJSON = {
  first: Base64URLString,
  second: Base64URLString,
};

type AuthenticationResponseJSON = {
  authenticatorAttachment: string,
  clientExtensionResults: AuthenticationExtensionsClientOutputsJSON,
  id: string,
  rawId: Base64URLString,
  response: AuthenticatorAssertionResponseJSON,
  type: string,
};

type AuthenticatorAssertionResponseJSON = {
  authenticatorData: Base64URLString,
  clientDataJSON: Base64URLString,
  signature: Base64URLString,
  userHandle: Base64URLString,
};

type AuthenticatorAttestationResponseJSON = {
  attestationObject: Base64URLString,
  authenticatorData: Base64URLString,
  clientDataJSON: Base64URLString,
  publicKey: Base64URLString,
  publicKeyAlgorithm: COSEAlgorithmIdentifier,
  transports: Array<string>,
};

type AuthenticatorSelectionCriteria = {
  authenticatorAttachment: string,
  requireResidentKey: boolean,
  residentKey: string,
  userVerification: string,
};

type CollectedClientData = {
  challenge: string,
  crossOrigin: boolean,
  origin: string,
  topOrigin: string,
  type: string,
};

/* partial */ type CredentialCreationOptions = {
  publicKey: PublicKeyCredentialCreationOptions,
};

type CredentialPropertiesOutput = {
  rk: boolean,
};

/* partial */ type CredentialRequestOptions = {
  publicKey: PublicKeyCredentialRequestOptions,
};

type CurrentUserDetailsOptions = {
  displayName: string,
  name: string,
  rpId: string,
  userId: Base64URLString,
};

type PublicKeyCredentialCreationOptions = {
  attestation: string,
  attestationFormats: Array<string>,
  authenticatorSelection: AuthenticatorSelectionCriteria,
  challenge: BufferSource,
  excludeCredentials: Array<PublicKeyCredentialDescriptor>,
  extensions: AuthenticationExtensionsClientInputs,
  hints: Array<string>,
  pubKeyCredParams: Array<PublicKeyCredentialParameters>,
  rp: PublicKeyCredentialRpEntity,
  timeout: number,
  user: PublicKeyCredentialUserEntity,
};

type PublicKeyCredentialCreationOptionsJSON = {
  attestation: string,
  attestationFormats: Array<string>,
  authenticatorSelection: AuthenticatorSelectionCriteria,
  challenge: Base64URLString,
  excludeCredentials: Array<PublicKeyCredentialDescriptorJSON>,
  extensions: AuthenticationExtensionsClientInputsJSON,
  hints: Array<string>,
  pubKeyCredParams: Array<PublicKeyCredentialParameters>,
  rp: PublicKeyCredentialRpEntity,
  timeout: number,
  user: PublicKeyCredentialUserEntityJSON,
};

type PublicKeyCredentialDescriptor = {
  id: BufferSource,
  transports: Array<string>,
  type: string,
};

type PublicKeyCredentialDescriptorJSON = {
  id: Base64URLString,
  transports: Array<string>,
  type: string,
};

type PublicKeyCredentialEntity = {
  name: string,
};

type PublicKeyCredentialParameters = {
  alg: COSEAlgorithmIdentifier,
  type: string,
};

type PublicKeyCredentialRequestOptions = {
  allowCredentials: Array<PublicKeyCredentialDescriptor>,
  challenge: BufferSource,
  extensions: AuthenticationExtensionsClientInputs,
  hints: Array<string>,
  rpId: string,
  timeout: number,
  userVerification: string,
};

type PublicKeyCredentialRequestOptionsJSON = {
  allowCredentials: Array<PublicKeyCredentialDescriptorJSON>,
  challenge: Base64URLString,
  extensions: AuthenticationExtensionsClientInputsJSON,
  hints: Array<string>,
  rpId: string,
  timeout: number,
  userVerification: string,
};

type PublicKeyCredentialRpEntity = {
  id: string,
  name: string,
};

type PublicKeyCredentialUserEntity = {
  displayName: string,
  id: BufferSource,
  name: string,
};

type PublicKeyCredentialUserEntityJSON = {
  displayName: string,
  id: Base64URLString,
  name: string,
};

type RegistrationResponseJSON = {
  authenticatorAttachment: string,
  clientExtensionResults: AuthenticationExtensionsClientOutputsJSON,
  id: string,
  rawId: Base64URLString,
  response: AuthenticatorAttestationResponseJSON,
  type: string,
};

type TokenBinding = {
  id: string,
  status: string,
};

type UnknownCredentialOptions = {
  credentialId: Base64URLString,
  rpId: string,
};

declare class AuthenticatorAssertionResponse extends AuthenticatorResponse {
  +authenticatorData: ArrayBuffer;
  +signature: ArrayBuffer;
  +userHandle: ArrayBuffer | null;
}

declare class AuthenticatorAttestationResponse extends AuthenticatorResponse {
  +attestationObject: ArrayBuffer;

  getAuthenticatorData(): ArrayBuffer;
  getPublicKey(): ArrayBuffer | null;
  getPublicKeyAlgorithm(): COSEAlgorithmIdentifier;
  getTransports(): Array<string>;
}

declare class AuthenticatorResponse {
  +clientDataJSON: ArrayBuffer;
}

declare class PublicKeyCredential extends Credential {
  +authenticatorAttachment: string | null;
  +rawId: ArrayBuffer;
  +response: AuthenticatorResponse;

  static getClientCapabilities(): PublicKeyCredentialClientCapabilities;
  static isConditionalMediationAvailable(): boolean;
  static isUserVerifyingPlatformAuthenticatorAvailable(): boolean;
  static parseCreationOptionsFromJSON(
    options: PublicKeyCredentialCreationOptionsJSON,
  ): PublicKeyCredentialCreationOptions;
  static parseRequestOptionsFromJSON(
    options: PublicKeyCredentialRequestOptionsJSON,
  ): PublicKeyCredentialRequestOptions;
  static signalAllAcceptedCredentials(
    options: AllAcceptedCredentialsOptions,
  ): void;
  static signalCurrentUserDetails(options: CurrentUserDetailsOptions): void;
  static signalUnknownCredential(options: UnknownCredentialOptions): void;
  getClientExtensionResults(): AuthenticationExtensionsClientOutputs;
  toJSON(): PublicKeyCredentialJSON;
}

/* partial */ declare class PublicKeyCredential {
  static isUserVerifyingPlatformAuthenticatorAvailable(): boolean;
}

/* partial */ declare class PublicKeyCredential {
  static getClientCapabilities(): PublicKeyCredentialClientCapabilities;
}

/* partial */ declare class PublicKeyCredential {
  static parseCreationOptionsFromJSON(
    options: PublicKeyCredentialCreationOptionsJSON,
  ): PublicKeyCredentialCreationOptions;
}

/* partial */ declare class PublicKeyCredential {
  static parseRequestOptionsFromJSON(
    options: PublicKeyCredentialRequestOptionsJSON,
  ): PublicKeyCredentialRequestOptions;
}

/* partial */ declare class PublicKeyCredential {
  static signalAllAcceptedCredentials(
    options: AllAcceptedCredentialsOptions,
  ): void;
  static signalCurrentUserDetails(options: CurrentUserDetailsOptions): void;
  static signalUnknownCredential(options: UnknownCredentialOptions): void;
}
