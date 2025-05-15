/* partial */ type AuthenticationExtensionsClientInputs = {
  credentialProtectionPolicy: string,
  enforceCredentialProtectionPolicy: boolean,
};

/* partial */ type AuthenticationExtensionsClientInputs = {
  credBlob: ArrayBuffer,
};

/* partial */ type AuthenticationExtensionsClientInputs = {
  getCredBlob: boolean,
};

/* partial */ type AuthenticationExtensionsClientInputs = {
  minPinLength: boolean,
};

/* partial */ type AuthenticationExtensionsClientInputs = {
  hmacCreateSecret: boolean,
};

/* partial */ type AuthenticationExtensionsClientInputs = {
  hmacGetSecret: HMACGetSecretInput,
};

/* partial */ type AuthenticationExtensionsClientOutputs = {
  hmacCreateSecret: boolean,
};

/* partial */ type AuthenticationExtensionsClientOutputs = {
  hmacGetSecret: HMACGetSecretOutput,
};

type HMACGetSecretInput = {
  salt1: ArrayBuffer,
  salt2: ArrayBuffer,
};

type HMACGetSecretOutput = {
  output1: ArrayBuffer,
  output2: ArrayBuffer,
};
