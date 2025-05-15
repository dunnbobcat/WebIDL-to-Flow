type SecurePaymentConfirmationAvailability = 'available' | 'unavailable-unknown-reason' | 'unavailable-feature-not-enabled' | 'unavailable-no-permission-policy' | 'unavailable-no-user-verifying-platform-authenticator';

/* partial */ type AuthenticationExtensionsClientInputs = {
payment: AuthenticationExtensionsPaymentInputs};

type AuthenticationExtensionsPaymentInputs = {
instrument: PaymentCredentialInstrument,
isPayment: boolean,
payeeName: string,
payeeOrigin: string,
rpId: string,
topOrigin: string,
total: PaymentCurrencyAmount};

type CollectedClientAdditionalPaymentData = {
instrument: PaymentCredentialInstrument,
payeeName: string,
payeeOrigin: string,
rpId: string,
topOrigin: string,
total: PaymentCurrencyAmount};

type CollectedClientPaymentData = {
payment: CollectedClientAdditionalPaymentData};

type PaymentCredentialInstrument = {
displayName: string,
icon: string,
iconMustBeShown: boolean};

type SecurePaymentConfirmationRequest = {
challenge: BufferSource,
credentialIds: Array<BufferSource>,
extensions: AuthenticationExtensionsClientInputs,
instrument: PaymentCredentialInstrument,
locale: Array<string>,
payeeName: string,
payeeOrigin: string,
rpId: string,
showOptOut: boolean,
timeout: number};

/* partial */ interface PaymentRequest {static securePaymentConfirmationAvailability(): SecurePaymentConfirmationAvailability;
}
