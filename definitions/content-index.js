type ContentCategory = '' | 'homepage' | 'article' | 'video' | 'audio';

type ContentDescription = {
  category: ContentCategory,
  description: string,
  icons: Array<ImageResource>,
  id: string,
  title: string,
  url: string,
};

type ContentIndexEventInit = {
  id: string,
};

declare class ContentIndex {
  add(description: ContentDescription): Promise<void>;
  delete(id: string): Promise<void>;
  getAll(): Promise<Array<ContentDescription>>;
}

declare class ContentIndexEvent extends ExtendableEvent {
  +id: string;

  constructor(type: string, init: ContentIndexEventInit): void;
}

/* partial */ declare class ServiceWorkerGlobalScope {
  oncontentdelete: EventHandler;
}

/* partial */ declare class ServiceWorkerRegistration {
  +index: ContentIndex;
}
