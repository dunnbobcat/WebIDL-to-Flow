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
  ...SharedStorageModifierMethodOptions,
  ignoreIfPresent: boolean,
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
) => Promise<number>;

declare class SharedStorage {
  +worklet: SharedStorageWorklet;

  @@iterator(): Iterator<string, string>;

  append(
    key: string,
    value: string,
    options?: SharedStorageModifierMethodOptions,
  ): Promise<any>;
  batchUpdate(
    methods: Array<SharedStorageModifierMethod>,
    options?: SharedStorageModifierMethodOptions,
  ): Promise<any>;
  clear(options?: SharedStorageModifierMethodOptions): Promise<any>;
  createWorklet(
    moduleURL: string,
    options?: SharedStorageWorkletOptions,
  ): Promise<SharedStorageWorklet>;
  delete(
    key: string,
    options?: SharedStorageModifierMethodOptions,
  ): Promise<any>;
  get(key: string): Promise<string>;
  length(): Promise<number>;
  remainingBudget(): Promise<number>;
  run(
    name: string,
    options?: SharedStorageRunOperationMethodOptions,
  ): Promise<any>;
  selectURL(
    name: string,
    urls: Array<SharedStorageUrlWithMetadata>,
    options?: SharedStorageRunOperationMethodOptions,
  ): Promise<SharedStorageResponse>;
  set(
    key: string,
    value: string,
    options?: SharedStorageSetMethodOptions,
  ): Promise<any>;
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
  run(
    name: string,
    options?: SharedStorageRunOperationMethodOptions,
  ): Promise<any>;
  selectURL(
    name: string,
    urls: Array<SharedStorageUrlWithMetadata>,
    options?: SharedStorageRunOperationMethodOptions,
  ): Promise<SharedStorageResponse>;
}

declare class SharedStorageWorkletGlobalScope extends WorkletGlobalScope {
  +navigator: SharedStorageWorkletNavigator;
  +privateAggregation: PrivateAggregation;
  +sharedStorage: SharedStorage;

  interestGroups(): Promise<Array<StorageInterestGroup>>;
  register(name: string, operationCtor: Function): void;
}

declare class SharedStorageWorkletNavigator mixins mixin$NavigatorLocks {}

/* partial */ declare class Window {
  +sharedStorage: SharedStorage | null;
}

declare class mixin$HTMLSharedStorageWritableElementUtils {
  sharedStorageWritable: boolean;
}
