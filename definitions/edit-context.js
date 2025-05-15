type UnderlineStyle = 'none' | 'solid' | 'dotted' | 'dashed' | 'wavy';

type UnderlineThickness = 'none' | 'thin' | 'thick';

type CharacterBoundsUpdateEventInit = {
  rangeEnd: number,
  rangeStart: number,
};

type EditContextInit = {
  selectionEnd: number,
  selectionStart: number,
  text: string,
};

type TextFormatInit = {
  rangeEnd: number,
  rangeStart: number,
  underlineStyle: UnderlineStyle,
  underlineThickness: UnderlineThickness,
};

type TextFormatUpdateEventInit = {
  textFormats: Array<TextFormat>,
};

type TextUpdateEventInit = {
  compositionEnd: number,
  compositionStart: number,
  selectionEnd: number,
  selectionStart: number,
  text: string,
  updateRangeEnd: number,
  updateRangeStart: number,
};

declare class CharacterBoundsUpdateEvent extends Event {
  +rangeEnd: number;
  +rangeStart: number;

  constructor(type: string, options?: CharacterBoundsUpdateEventInit): void;
}

declare class EditContext extends EventTarget {
  +characterBoundsRangeStart: number;
  oncharacterboundsupdate: EventHandler;
  oncompositionend: EventHandler;
  oncompositionstart: EventHandler;
  ontextformatupdate: EventHandler;
  ontextupdate: EventHandler;
  +selectionEnd: number;
  +selectionStart: number;
  +text: string;

  constructor(options?: EditContextInit): void;

  attachedElements(): Array<HTMLElement>;
  characterBounds(): Array<DOMRect>;
  updateCharacterBounds(
    rangeStart: number,
    characterBounds: Array<DOMRect>,
  ): void;
  updateControlBounds(controlBounds: DOMRect): void;
  updateSelection(start: number, end: number): void;
  updateSelectionBounds(selectionBounds: DOMRect): void;
  updateText(rangeStart: number, rangeEnd: number, text: string): void;
}

/* partial */ declare class HTMLElement {
  editContext: EditContext | null;
}

declare class TextFormat {
  +rangeEnd: number;
  +rangeStart: number;
  +underlineStyle: UnderlineStyle;
  +underlineThickness: UnderlineThickness;

  constructor(options?: TextFormatInit): void;
}

declare class TextFormatUpdateEvent extends Event {
  constructor(type: string, options?: TextFormatUpdateEventInit): void;

  getTextFormats(): Array<TextFormat>;
}

declare class TextUpdateEvent extends Event {
  +selectionEnd: number;
  +selectionStart: number;
  +text: string;
  +updateRangeEnd: number;
  +updateRangeStart: number;

  constructor(type: string, options?: TextUpdateEventInit): void;
}
