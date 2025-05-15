type NavigatorUABrandVersion = {
  brand: string,
  version: string,
};

type UADataValues = {
  architecture: string,
  bitness: string,
  brands: Array<NavigatorUABrandVersion>,
  formFactors: Array<string>,
  fullVersionList: Array<NavigatorUABrandVersion>,
  mobile: boolean,
  model: string,
  platform: string,
  platformVersion: string,
  uaFullVersion: string,
  wow64: boolean,
};

type UALowEntropyJSON = {
  brands: Array<NavigatorUABrandVersion>,
  mobile: boolean,
  platform: string,
};

declare class NavigatorUAData {
  +brands: $ReadOnlyArray<NavigatorUABrandVersion>;
  +mobile: boolean;
  +platform: string;

  getHighEntropyValues(hints: Array<string>): Promise<UADataValues>;
  toJSON(): UALowEntropyJSON;
}

declare class mixin$NavigatorUA {
  +userAgentData: NavigatorUAData;
}
