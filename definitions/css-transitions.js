type TransitionEventInit = {
  elapsedTime: number,
  propertyName: string,
  pseudoElement: string,
};

declare class TransitionEvent extends Event {
  +elapsedTime: number;
  +propertyName: string;
  +pseudoElement: string;

  constructor(
    type: string,
    transitionEventInitDict?: TransitionEventInit,
  ): void;
}

/* partial */ declare class mixin$GlobalEventHandlers {
  ontransitioncancel: EventHandler;
  ontransitionend: EventHandler;
  ontransitionrun: EventHandler;
  ontransitionstart: EventHandler;
}
