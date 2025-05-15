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
  consume(purchaseToken: string): void;
  getDetails(itemIds: Array<string>): Array<ItemDetails>;
  listPurchaseHistory(): Array<PurchaseDetails>;
  listPurchases(): Array<PurchaseDetails>;
}

/* partial */ interface Window {
  getDigitalGoodsService(serviceProvider: string): DigitalGoodsService;
}
