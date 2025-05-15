type VibratePattern = number | Array<number>;

/* partial */ interface Navigator {
  vibrate(pattern: VibratePattern): boolean;
}
