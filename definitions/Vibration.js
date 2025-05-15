type VibratePattern = number | Array<number>;

/* partial */ declare class Navigator {
  vibrate(pattern: VibratePattern): boolean;
}
