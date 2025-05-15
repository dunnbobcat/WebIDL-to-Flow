type OTPCredentialTransportType = 'sms';

/* partial */ type CredentialRequestOptions = {
  otp: OTPCredentialRequestOptions,
};

type OTPCredentialRequestOptions = {
  transport: Array<OTPCredentialTransportType>,
};

declare class OTPCredential extends Credential {
  +code: string;
}
