type PictureInPictureEventInit = {
  pictureInPictureWindow: PictureInPictureWindow,
};

/* partial */ interface Document {
  +pictureInPictureEnabled: boolean;

  exitPictureInPicture(): void;
}

/* partial */ interface HTMLVideoElement {
  disablePictureInPicture: boolean;
  onenterpictureinpicture: EventHandler;
  onleavepictureinpicture: EventHandler;

  requestPictureInPicture(): PictureInPictureWindow;
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
