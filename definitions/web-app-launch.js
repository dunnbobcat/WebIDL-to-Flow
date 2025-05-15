type LaunchConsumer = (params: LaunchParams) => any;

declare class LaunchParams {
  +files: $ReadOnlyArray<FileSystemHandle>;
  +targetURL: string | null;
}

declare class LaunchQueue {
  setConsumer(consumer: LaunchConsumer): void;
}

/* partial */ declare class Window {
  +launchQueue: LaunchQueue;
}
