type ClipboardItemData = Promise<string | Blob>;

type ClipboardItems = Array<ClipboardItem>;

type PresentationStyle = 'unspecified' | 'inline' | 'attachment';

type ClipboardEventInit = {
  clipboardData: DataTransfer | null,
};

type ClipboardItemOptions = {
  presentationStyle: PresentationStyle,
};

type ClipboardPermissionDescriptor = {
  allowWithoutGesture: boolean,
};

type ClipboardUnsanitizedFormats = {
  unsanitized: Array<string>,
};

declare class Clipboard extends EventTarget {
  read(formats?: ClipboardUnsanitizedFormats): Promise<ClipboardItems>;
  readText(): Promise<string>;
  write(data: ClipboardItems): Promise<void>;
  writeText(data: string): Promise<void>;
}

declare class ClipboardEvent extends Event {
  +clipboardData: DataTransfer | null;

  constructor(type: string, eventInitDict?: ClipboardEventInit): void;
}

declare class ClipboardItem {
  +presentationStyle: PresentationStyle;
  +types: $ReadOnlyArray<string>;

  constructor(
    items: {[string]: ClipboardItemData},
    options?: ClipboardItemOptions,
  ): void;

  static supports(type: string): boolean;
  getType(type: string): Promise<Blob>;
}

/* partial */ declare class Navigator {
  +clipboard: Clipboard;
}
