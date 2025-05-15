type PaymentComplete = 'fail' | 'success' | 'unknown';

type PaymentShippingType = 'shipping' | 'delivery' | 'pickup';

type AddressErrors = {
  addressLine: string,
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

type PayerErrors = {
  email: string,
  name: string,
  phone: string,
};

type PaymentCompleteDetails = {
  data: Object | null,
};

type PaymentCurrencyAmount = {
  currency: string,
  value: string,
};

type PaymentDetailsBase = {
  displayItems: Array<PaymentItem>,
  modifiers: Array<PaymentDetailsModifier>,
  shippingOptions: Array<PaymentShippingOption>,
};

type PaymentDetailsInit = {
  ...PaymentDetailsBase,
  id: string,
  total: PaymentItem,
};

type PaymentDetailsModifier = {
  additionalDisplayItems: Array<PaymentItem>,
  data: Object,
  supportedMethods: string,
  total: PaymentItem,
};

type PaymentDetailsUpdate = {
  ...PaymentDetailsBase,
  error: string,
  payerErrors: PayerErrors,
  paymentMethodErrors: Object,
  shippingAddressErrors: AddressErrors,
  total: PaymentItem,
};

type PaymentItem = {
  amount: PaymentCurrencyAmount,
  label: string,
  pending: boolean,
};

type PaymentMethodChangeEventInit = {
  ...PaymentRequestUpdateEventInit,
  methodDetails: Object | null,
  methodName: string,
};

type PaymentMethodData = {
  data: Object,
  supportedMethods: string,
};

type PaymentOptions = {
  requestBillingAddress: boolean,
  requestPayerEmail: boolean,
  requestPayerName: boolean,
  requestPayerPhone: boolean,
  requestShipping: boolean,
  shippingType: PaymentShippingType,
};

type PaymentRequestUpdateEventInit = {};

type PaymentShippingOption = {
  amount: PaymentCurrencyAmount,
  id: string,
  label: string,
  selected: boolean,
};

type PaymentValidationErrors = {
  error: string,
  payer: PayerErrors,
  paymentMethod: Object,
  shippingAddress: AddressErrors,
};

declare class PaymentMethodChangeEvent extends PaymentRequestUpdateEvent {
  +methodDetails: Object | null;
  +methodName: string;

  constructor(type: string, eventInitDict?: PaymentMethodChangeEventInit): void;
}

declare class PaymentRequest extends EventTarget {
  +id: string;
  onpaymentmethodchange: EventHandler;
  onshippingaddresschange: EventHandler;
  onshippingoptionchange: EventHandler;
  +shippingAddress: ContactAddress | null;
  +shippingOption: string | null;
  +shippingType: PaymentShippingType | null;

  constructor(
    methodData: Array<PaymentMethodData>,
    details: PaymentDetailsInit,
    options?: PaymentOptions,
  ): void;

  abort(): Promise<void>;
  canMakePayment(): Promise<boolean>;
  show(
    detailsPromise?: Promise<PaymentDetailsUpdate>,
  ): Promise<PaymentResponse>;
}

declare class PaymentRequestUpdateEvent extends Event {
  constructor(
    type: string,
    eventInitDict?: PaymentRequestUpdateEventInit,
  ): void;

  updateWith(detailsPromise: Promise<PaymentDetailsUpdate>): void;
}

declare class PaymentResponse extends EventTarget {
  +details: Object;
  +methodName: string;
  onpayerdetailchange: EventHandler;
  +payerEmail: string | null;
  +payerName: string | null;
  +payerPhone: string | null;
  +requestId: string;
  +shippingAddress: ContactAddress | null;
  +shippingOption: string | null;

  complete(
    result?: PaymentComplete,
    details?: PaymentCompleteDetails,
  ): Promise<void>;
  retry(errorFields?: PaymentValidationErrors): Promise<void>;
  toJSON(): Object;
}
