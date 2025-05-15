type RelatedApplication = {
  id: string,
  platform: string,
  url: string,
  version: string,
};

/* partial */ declare class Navigator {
  getInstalledRelatedApps(): Promise<Array<RelatedApplication>>;
}
