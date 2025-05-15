type GetComposedRangesOptions = {
  shadowRoots: Array<ShadowRoot>,
};

/* partial */ declare class Document {
  getSelection(): Selection | null;
}

declare class Selection {
  +anchorNode: Node | null;
  +anchorOffset: number;
  +direction: string;
  +focusNode: Node | null;
  +focusOffset: number;
  +isCollapsed: boolean;
  +rangeCount: number;
  +type: string;

  addRange(range: Range): void;
  collapse(node: Node | null, offset?: number): void;
  collapseToEnd(): void;
  collapseToStart(): void;
  containsNode(node: Node, allowPartialContainment?: boolean): boolean;
  deleteFromDocument(): void;
  empty(): void;
  extend(node: Node, offset?: number): void;
  getComposedRanges(options?: GetComposedRangesOptions): Array<StaticRange>;
  getRangeAt(index: number): Range;
  modify(alter?: string, direction?: string, granularity?: string): void;
  removeAllRanges(): void;
  removeRange(range: Range): void;
  selectAllChildren(node: Node): void;
  setBaseAndExtent(
    anchorNode: Node,
    anchorOffset: number,
    focusNode: Node,
    focusOffset: number,
  ): void;
  setPosition(node: Node | null, offset?: number): void;
  toString(): string;
}

/* partial */ declare class Window {
  getSelection(): Selection | null;
}

/* partial */ declare class mixin$GlobalEventHandlers {
  onselectionchange: EventHandler;
  onselectstart: EventHandler;
}
