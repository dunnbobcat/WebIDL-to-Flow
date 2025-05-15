type SnapEventInit = {
  snapTargetBlock: Node | null,
  snapTargetInline: Node | null,
};

declare class SnapEvent extends Event {
  +snapTargetBlock: Node | null;
  +snapTargetInline: Node | null;

  constructor(type: string, eventInitDict?: SnapEventInit): void;
}

/* partial */ declare class mixin$GlobalEventHandlers {
  onsnapchanged: EventHandler;
  onsnapchanging: EventHandler;
}
