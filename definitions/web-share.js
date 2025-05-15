type ShareData = {
  files: Array<File>,
  text: string,
  title: string,
  url: string,
};

/* partial */ interface Navigator {
  canShare(data?: ShareData): boolean;
  share(data?: ShareData): void;
}
