type ShareData = {
  files: Array<File>,
  text: string,
  title: string,
  url: string,
};

/* partial */ declare class Navigator {
  canShare(data?: ShareData): boolean;
  share(data?: ShareData): Promise<void>;
}
