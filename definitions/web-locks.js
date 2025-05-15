type LockMode = 'shared' | 'exclusive';

type LockInfo = {
  clientId: string,
  mode: LockMode,
  name: string,
};

type LockManagerSnapshot = {
  held: Array<LockInfo>,
  pending: Array<LockInfo>,
};

type LockOptions = {
  ifAvailable: boolean,
  mode: LockMode,
  signal: AbortSignal,
  steal: boolean,
};

type LockGrantedCallback = (lock: Lock | null) => Promise<any>;

declare class Lock {
  +mode: LockMode;
  +name: string;
}

declare class LockManager {
  query(): Promise<LockManagerSnapshot>;
  request(name: string, callback: LockGrantedCallback): Promise<any>;
  request(
    name: string,
    options: LockOptions,
    callback: LockGrantedCallback,
  ): Promise<any>;
}

declare class mixin$NavigatorLocks {
  +locks: LockManager;
}
