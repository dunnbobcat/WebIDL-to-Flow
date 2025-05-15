type LaunchConsumer = (params: LaunchParams) => any;

declare class LaunchParams {
  +files: FileSystemHandle;
  +targetURL: string | null;
}

declare class LaunchQueue {
  setConsumer(consumer: LaunchConsumer): void;
}

/* partial */ interface Window {
  +launchQueue: LaunchQueue;
}
