type ObservableInspectorUnion =
  | ObservableSubscriptionCallback
  | ObservableInspector;

type ObserverUnion = ObservableSubscriptionCallback | SubscriptionObserver;

type ObservableEventListenerOptions = {
  capture: boolean,
  passive: boolean,
};

type ObservableInspector = {
  abort: ObservableInspectorAbortHandler,
  complete: VoidFunction,
  error: ObservableSubscriptionCallback,
  next: ObservableSubscriptionCallback,
  subscribe: VoidFunction,
};

type SubscribeOptions = {
  signal: AbortSignal,
};

type SubscriptionObserver = {
  complete: VoidFunction,
  error: ObservableSubscriptionCallback,
  next: ObservableSubscriptionCallback,
};

type CatchCallback = (value: any) => any;

type Mapper = (value: any, index: number) => any;

type ObservableInspectorAbortHandler = (value: any) => void;

type ObservableSubscriptionCallback = (value: any) => void;

type Predicate = (value: any, index: number) => boolean;

type Reducer = (accumulator: any, currentValue: any, index: number) => any;

type SubscribeCallback = (subscriber: Subscriber) => void;

type Visitor = (value: any, index: number) => void;

/* partial */ declare class EventTarget {
  when(type: string, options?: ObservableEventListenerOptions): Observable;
}

declare class Observable {
  constructor(callback: SubscribeCallback): void;

  static from(value: any): Observable;
  catch(callback: CatchCallback): Observable;
  drop(amount: number): Observable;
  every(predicate: Predicate, options?: SubscribeOptions): Promise<boolean>;
  filter(predicate: Predicate): Observable;
  finally(callback: VoidFunction): Observable;
  find(predicate: Predicate, options?: SubscribeOptions): Promise<any>;
  first(options?: SubscribeOptions): Promise<any>;
  flatMap(mapper: Mapper): Observable;
  forEach(callback: Visitor, options?: SubscribeOptions): Promise<void>;
  inspect(inspectorUnion?: ObservableInspectorUnion): Observable;
  last(options?: SubscribeOptions): Promise<any>;
  map(mapper: Mapper): Observable;
  reduce(
    reducer: Reducer,
    initialValue?: any,
    options?: SubscribeOptions,
  ): Promise<any>;
  some(predicate: Predicate, options?: SubscribeOptions): Promise<boolean>;
  subscribe(observer?: ObserverUnion, options?: SubscribeOptions): void;
  switchMap(mapper: Mapper): Observable;
  take(amount: number): Observable;
  takeUntil(value: any): Observable;
  toArray(options?: SubscribeOptions): Promise<Array<any>>;
}

declare class Subscriber {
  +active: boolean;
  +signal: AbortSignal;

  addTeardown(teardown: VoidFunction): void;
  complete(): void;
  error(error: any): void;
  next(value: any): void;
}
