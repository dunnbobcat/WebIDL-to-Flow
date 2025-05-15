type CompressionFormat = 'deflate' | 'deflate-raw' | 'gzip';

declare class CompressionStream mixins mixin$GenericTransformStream {
  constructor(format: CompressionFormat): void;
}

declare class DecompressionStream mixins mixin$GenericTransformStream {
  constructor(format: CompressionFormat): void;
}
