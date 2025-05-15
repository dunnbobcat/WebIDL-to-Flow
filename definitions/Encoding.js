type TextDecodeOptions = {
  stream: boolean,
};

type TextDecoderOptions = {
  fatal: boolean,
  ignoreBOM: boolean,
};

type TextEncoderEncodeIntoResult = {
  read: number,
  written: number,
};

declare class TextDecoder mixins mixin$TextDecoderCommon {
  constructor(label?: string, options?: TextDecoderOptions): void;

  decode(input?: AllowSharedBufferSource, options?: TextDecodeOptions): string;
}

declare class TextDecoderStream
  mixins mixin$TextDecoderCommon, mixin$GenericTransformStream
{
  constructor(label?: string, options?: TextDecoderOptions): void;
}

declare class TextEncoder mixins mixin$TextEncoderCommon {
  constructor(): void;

  encode(input?: string): Uint8Array;
  encodeInto(
    source: string,
    destination: Uint8Array,
  ): TextEncoderEncodeIntoResult;
}

declare class TextEncoderStream
  mixins mixin$TextEncoderCommon, mixin$GenericTransformStream
{
  constructor(): void;
}

/* mixin */ declare class mixin$TextDecoderCommon {
  +encoding: string;
  +fatal: boolean;
  +ignoreBOM: boolean;
}

/* mixin */ declare class mixin$TextEncoderCommon {
  +encoding: string;
}
