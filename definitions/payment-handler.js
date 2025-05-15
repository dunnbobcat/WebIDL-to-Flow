type PaymentDelegation =
  | 'shippingAddress'
  | 'payerName'
  | 'payerPhone'
  | 'payerEmail';

type AddressInit = {
  addressLine: Array<string>,
  city: string,
  country: string,
  dependentLocality: string,
  organization: string,
  phone: string,
  postalCode: string,
  recipient: string,
  region: string,
  sortingCode: string,
};

type PaymentHandlerResponse = {
  details: Object,
  methodName: string,
  payerEmail: string | null,
  payerName: string | null,
  payerPhone: string | null,
  shippingAddress: AddressInit,
  shippingOption: string | null,
};

type PaymentRequestDetailsUpdate = {
  error: string,
  modifiers: Array<PaymentDetailsModifier>,
  paymentMethodErrors: Object,
  shippingAddressErrors: AddressErrors,
  shippingOptions: Array<PaymentShippingOption>,
  total: PaymentCurrencyAmount,
};

type PaymentRequestEventInit = {
  methodData: Array<PaymentMethodData>,
  modifiers: Array<PaymentDetailsModifier>,
  paymentOptions: PaymentOptions,
  paymentRequestId: string,
  paymentRequestOrigin: string,
  shippingOptions: Array<PaymentShippingOption>,
  topOrigin: string,
  total: PaymentCurrencyAmount,
};

declare class CanMakePaymentEvent extends ExtendableEvent {
  constructor(type: string): void;

  respondWith(canMakePaymentResponse: Promise<boolean>): void;
}

declare class PaymentManager {
  userHint: string;

  enableDelegations(delegations: Array<PaymentDelegation>): Promise<void>;
}

declare class PaymentRequestEvent extends ExtendableEvent {
  +methodData: $ReadOnlyArray<PaymentMethodData>;
  +modifiers: $ReadOnlyArray<PaymentDetailsModifier>;
  +paymentOptions: Object | null;
  +paymentRequestId: string;
  +paymentRequestOrigin: string;
  +shippingOptions: $ReadOnlyArray<PaymentShippingOption> | null;
  +topOrigin: string;
  +total: Object;

  constructor(type: string, eventInitDict?: PaymentRequestEventInit): void;

  changePaymentMethod(
    methodName: string,
    methodDetails?: Object | null,
  ): Promise<PaymentRequestDetailsUpdate | null>;
  changeShippingAddress(
    shippingAddress?: AddressInit,
  ): Promise<PaymentRequestDetailsUpdate | null>;
  changeShippingOption(
    shippingOption: string,
  ): Promise<PaymentRequestDetailsUpdate | null>;
  openWindow(url: string): Promise<WindowClient | null>;
  respondWith(handlerResponsePromise: Promise<PaymentHandlerResponse>): void;
}

/* partial */ declare class ServiceWorkerGlobalScope {
  oncanmakepayment: EventHandler;
}

/* partial */ declare class ServiceWorkerGlobalScope {
  onpaymentrequest: EventHandler;
}

/* partial */ declare class ServiceWorkerRegistration {
  +paymentManager: PaymentManager;
}
