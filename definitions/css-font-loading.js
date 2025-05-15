type FontFaceLoadStatus = 'unloaded' | 'loading' | 'loaded' | 'error';

type FontFaceSetLoadStatus = 'loading' | 'loaded';

type FontFaceDescriptors = {
  ascentOverride: string,
  descentOverride: string,
  display: string,
  featureSettings: string,
  lineGapOverride: string,
  stretch: string,
  style: string,
  unicodeRange: string,
  variationSettings: string,
  weight: string,
};

type FontFaceSetLoadEventInit = {
  fontfaces: Array<FontFace>,
};

declare class FontFace {
  ascentOverride: string;
  descentOverride: string;
  display: string;
  family: string;
  +features: FontFaceFeatures;
  featureSettings: string;
  lineGapOverride: string;
  +loaded: Promise<FontFace>;
  +palettes: FontFacePalettes;
  +status: FontFaceLoadStatus;
  stretch: string;
  style: string;
  unicodeRange: string;
  +variations: FontFaceVariations;
  variationSettings: string;
  weight: string;

  constructor(
    family: string,
    source: string | BufferSource,
    descriptors?: FontFaceDescriptors,
  ): void;

  load(): Promise<FontFace>;
}

/* partial */ declare class FontFace {
  +features: FontFaceFeatures;
  +palettes: FontFacePalettes;
  +variations: FontFaceVariations;
}

declare class FontFaceFeatures {}

declare class FontFacePalette {
  +length: number;
  +usableWithDarkBackground: boolean;
  +usableWithLightBackground: boolean;

  @@iterator(): Iterator<string>;

  (index: number): string;
}

declare class FontFacePalettes {
  +length: number;

  @@iterator(): Iterator<FontFacePalette>;

  (index: number): FontFacePalette;
}

declare class FontFaceSet extends EventTarget {
  onloading: EventHandler;
  onloadingdone: EventHandler;
  onloadingerror: EventHandler;
  +ready: Promise<FontFaceSet>;
  +status: FontFaceSetLoadStatus;

  add(font: FontFace): FontFaceSet;
  check(font: string, text?: string): boolean;
  clear(): void;
  delete(font: FontFace): boolean;
  load(font: string, text?: string): Promise<Array<FontFace>>;
}

declare class FontFaceSetLoadEvent extends Event {
  +fontfaces: $ReadOnlyArray<FontFace>;

  constructor(type: string, eventInitDict?: FontFaceSetLoadEventInit): void;
}

declare class FontFaceVariationAxis {
  +axisTag: string;
  +defaultValue: number;
  +maximumValue: number;
  +minimumValue: number;
  +name: string;
}

type FontFaceVariations = Set<FontFaceVariationAxis>;

declare class mixin$FontFaceSource {
  +fonts: FontFaceSet;
}
