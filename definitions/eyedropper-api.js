type ColorSelectionOptions = {
  signal: AbortSignal,
};

type ColorSelectionResult = {
  sRGBHex: string,
};

declare class EyeDropper {
  constructor(): void;

  open(options?: ColorSelectionOptions): Promise<ColorSelectionResult>;
}
