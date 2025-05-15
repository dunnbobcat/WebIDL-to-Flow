type ItemType = 'product' | 'subscription';

type ItemDetails = {
  description: string,
  freeTrialPeriod: string,
  iconURLs: Array<string>,
  introductoryPrice: PaymentCurrencyAmount,
  introductoryPriceCycles: number,
  introductoryPricePeriod: string,
  itemId: string,
  price: PaymentCurrencyAmount,
  subscriptionPeriod: string,
  title: string,
  type: ItemType,
};

type PurchaseDetails = {
  itemId: string,
  purchaseToken: string,
};

declare class DigitalGoodsService {
  consume(purchaseToken: string): Promise<void>;
  getDetails(itemIds: Array<string>): Promise<Array<ItemDetails>>;
  listPurchaseHistory(): Promise<Array<PurchaseDetails>>;
  listPurchases(): Promise<Array<PurchaseDetails>>;
}

/* partial */ declare class Window {
  getDigitalGoodsService(serviceProvider: string): Promise<DigitalGoodsService>;
}
