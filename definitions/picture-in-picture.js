type PictureInPictureEventInit = {
  pictureInPictureWindow: PictureInPictureWindow,
};

/* partial */ declare class Document {
  +pictureInPictureEnabled: boolean;

  exitPictureInPicture(): Promise<void>;
}

/* partial */ declare class HTMLVideoElement {
  disablePictureInPicture: boolean;
  onenterpictureinpicture: EventHandler;
  onleavepictureinpicture: EventHandler;

  requestPictureInPicture(): Promise<PictureInPictureWindow>;
}

declare class PictureInPictureEvent extends Event {
  +pictureInPictureWindow: PictureInPictureWindow;

  constructor(type: string, eventInitDict: PictureInPictureEventInit): void;
}

declare class PictureInPictureWindow extends EventTarget {
  +height: number;
  onresize: EventHandler;
  +width: number;
}

/* partial */ declare class mixin$DocumentOrShadowRoot {
  +pictureInPictureElement: Element | null;
}
