type DocumentPictureInPictureEventInit = {
  window: Window,
};

type DocumentPictureInPictureOptions = {
  disallowReturnToOpener: boolean,
  height: number,
  preferInitialWindowPlacement: boolean,
  width: number,
};

declare class DocumentPictureInPicture extends EventTarget {
  onenter: EventHandler;
  +window: Window;

  requestWindow(options?: DocumentPictureInPictureOptions): Window;
}

declare class DocumentPictureInPictureEvent extends Event {
  +window: Window;

  constructor(
    type: string,
    eventInitDict: DocumentPictureInPictureEventInit,
  ): void;
}

/* partial */ declare class Window {
  +documentPictureInPicture: DocumentPictureInPicture;
}
