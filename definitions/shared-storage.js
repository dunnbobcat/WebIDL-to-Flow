type SharedStorageResponse = string | FencedFrameConfig;

/* partial */ type RequestInit = {
  sharedStorageWritable: boolean,
};

type SharedStorageModifierMethodOptions = {
  withLock: string,
};

type SharedStoragePrivateAggregationConfig = {
  aggregationCoordinatorOrigin: string,
  contextId: string,
  filteringIdMaxBytes: number,
  maxContributions: number,
};

type SharedStorageRunOperationMethodOptions = {
  data: Object,
  keepAlive: boolean,
  privateAggregationConfig: SharedStoragePrivateAggregationConfig,
  resolveToConfig: boolean,
  savedQuery: string,
};

type SharedStorageSetMethodOptions = {
  ignoreIfPresent: boolean,
  withLock: string,
};

type SharedStorageUrlWithMetadata = {
  reportingMetadata: Object,
  url: string,
};

type SharedStorageWorkletOptions = {
  dataOrigin: string,
};

type RunFunctionForSharedStorageSelectURLOperation = (
  urls: Array<string>,
  data?: any,
) => number;

declare class SharedStorage {
  +worklet: SharedStorageWorklet;

  @@iterator(): Iterator<string, string>;

  append(
    key: string,
    value: string,
    options?: SharedStorageModifierMethodOptions,
  ): any;
  batchUpdate(
    methods: Array<SharedStorageModifierMethod>,
    options?: SharedStorageModifierMethodOptions,
  ): any;
  clear(options?: SharedStorageModifierMethodOptions): any;
  createWorklet(
    moduleURL: string,
    options?: SharedStorageWorkletOptions,
  ): SharedStorageWorklet;
  delete(key: string, options?: SharedStorageModifierMethodOptions): any;
  get(key: string): string;
  length(): number;
  remainingBudget(): number;
  run(name: string, options?: SharedStorageRunOperationMethodOptions): any;
  selectURL(
    name: string,
    urls: Array<SharedStorageUrlWithMetadata>,
    options?: SharedStorageRunOperationMethodOptions,
  ): SharedStorageResponse;
  set(key: string, value: string, options?: SharedStorageSetMethodOptions): any;
}

declare class SharedStorageAppendMethod extends SharedStorageModifierMethod {
  constructor(
    key: string,
    value: string,
    options?: SharedStorageModifierMethodOptions,
  ): void;
}

declare class SharedStorageClearMethod extends SharedStorageModifierMethod {
  constructor(options?: SharedStorageModifierMethodOptions): void;
}

declare class SharedStorageDeleteMethod extends SharedStorageModifierMethod {
  constructor(key: string, options?: SharedStorageModifierMethodOptions): void;
}

declare class SharedStorageModifierMethod {}

declare class SharedStorageSetMethod extends SharedStorageModifierMethod {
  constructor(
    key: string,
    value: string,
    options?: SharedStorageSetMethodOptions,
  ): void;
}

declare class SharedStorageWorklet extends Worklet {
  run(name: string, options?: SharedStorageRunOperationMethodOptions): any;
  selectURL(
    name: string,
    urls: Array<SharedStorageUrlWithMetadata>,
    options?: SharedStorageRunOperationMethodOptions,
  ): SharedStorageResponse;
}

declare class SharedStorageWorkletGlobalScope extends WorkletGlobalScope {
  +navigator: SharedStorageWorkletNavigator;
  +privateAggregation: PrivateAggregation;
  +sharedStorage: SharedStorage;

  interestGroups(): Array<StorageInterestGroup>;
  register(name: string, operationCtor: Function): void;
}

declare class SharedStorageWorkletNavigator mixins mixin$NavigatorLocks {}

/* partial */ interface Window {
  +sharedStorage: SharedStorage | null;
}

declare class mixin$HTMLSharedStorageWritableElementUtils {
  sharedStorageWritable: boolean;
}
