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
  add(description: ContentDescription): void;
  delete(id: string): void;
  getAll(): Array<ContentDescription>;
}

declare class ContentIndexEvent extends ExtendableEvent {
  +id: string;

  constructor(type: string, init: ContentIndexEventInit): void;
}

/* partial */ interface ServiceWorkerGlobalScope {
  oncontentdelete: EventHandler;
}

/* partial */ interface ServiceWorkerRegistration {
  +index: ContentIndex;
}
