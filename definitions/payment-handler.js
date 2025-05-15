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

  respondWith(canMakePaymentResponse: boolean): void;
}

declare class PaymentManager {
  userHint: string;

  enableDelegations(delegations: Array<PaymentDelegation>): void;
}

declare class PaymentRequestEvent extends ExtendableEvent {
  +methodData: PaymentMethodData;
  +modifiers: PaymentDetailsModifier;
  +paymentOptions: Object | null;
  +paymentRequestId: string;
  +paymentRequestOrigin: string;
  +shippingOptions: PaymentShippingOption | null;
  +topOrigin: string;
  +total: Object;

  constructor(type: string, eventInitDict?: PaymentRequestEventInit): void;

  changePaymentMethod(
    methodName: string,
    methodDetails?: Object | null,
  ): PaymentRequestDetailsUpdate | null;
  changeShippingAddress(
    shippingAddress?: AddressInit,
  ): PaymentRequestDetailsUpdate | null;
  changeShippingOption(
    shippingOption: string,
  ): PaymentRequestDetailsUpdate | null;
  openWindow(url: string): WindowClient | null;
  respondWith(handlerResponsePromise: PaymentHandlerResponse): void;
}

/* partial */ interface ServiceWorkerGlobalScope {
  oncanmakepayment: EventHandler;
}

/* partial */ interface ServiceWorkerGlobalScope {
  onpaymentrequest: EventHandler;
}

/* partial */ interface ServiceWorkerRegistration {
  +paymentManager: PaymentManager;
}
