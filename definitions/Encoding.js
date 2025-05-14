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

/* mixin */ class TextDecoderCommon {
  +encoding: string;
  +fatal: boolean;
  +ignoreBOM: boolean;
}

/* mixin */ class TextEncoderCommon {
  +encoding: string;
}

declare class TextDecoder mixins TextDecoderCommon {
  constructor(label?: string, options?: TextDecoderOptions): void;

  decode(input?: AllowSharedBufferSource, options?: TextDecodeOptions): string;
}

declare class TextDecoderStream
  mixins TextDecoderCommon, GenericTransformStream
{
  constructor(label?: string, options?: TextDecoderOptions): void;
}

declare class TextEncoder mixins TextEncoderCommon {
  constructor(): void;

  encode(input?: string): Uint8Array;
  encodeInto(
    source: string,
    destination: Uint8Array,
  ): TextEncoderEncodeIntoResult;
}

declare class TextEncoderStream
  mixins TextEncoderCommon, GenericTransformStream
{
  constructor(): void;
}
