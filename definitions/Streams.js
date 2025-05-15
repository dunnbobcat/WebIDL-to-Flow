type ReadableStreamController =
  | ReadableStreamDefaultController
  | ReadableByteStreamController;

type ReadableStreamReader =
  | ReadableStreamDefaultReader
  | ReadableStreamBYOBReader;

type ReadableStreamReaderMode = 'byob';

type ReadableStreamType = 'bytes';

type QueuingStrategy = {
  highWaterMark: number,
  size: QueuingStrategySize,
};

type QueuingStrategyInit = {
  highWaterMark: number,
};

type ReadableStreamBYOBReaderReadOptions = {
  min: number,
};

type ReadableStreamGetReaderOptions = {
  mode: ReadableStreamReaderMode,
};

type ReadableStreamIteratorOptions = {
  preventCancel: boolean,
};

type ReadableStreamReadResult = {
  done: boolean,
  value: any,
};

type ReadableWritablePair = {
  readable: ReadableStream,
  writable: WritableStream,
};

type StreamPipeOptions = {
  preventAbort: boolean,
  preventCancel: boolean,
  preventClose: boolean,
  signal: AbortSignal,
};

type Transformer = {
  cancel: TransformerCancelCallback,
  flush: TransformerFlushCallback,
  readableType: any,
  start: TransformerStartCallback,
  transform: TransformerTransformCallback,
  writableType: any,
};

type UnderlyingSink = {
  abort: UnderlyingSinkAbortCallback,
  close: UnderlyingSinkCloseCallback,
  start: UnderlyingSinkStartCallback,
  type: any,
  write: UnderlyingSinkWriteCallback,
};

type UnderlyingSource = {
  autoAllocateChunkSize: number,
  cancel: UnderlyingSourceCancelCallback,
  pull: UnderlyingSourcePullCallback,
  start: UnderlyingSourceStartCallback,
  type: ReadableStreamType,
};

type QueuingStrategySize = (chunk: any) => number;

type TransformerCancelCallback = (reason: any) => Promise<void>;

type TransformerFlushCallback = (
  controller: TransformStreamDefaultController,
) => Promise<void>;

type TransformerStartCallback = (
  controller: TransformStreamDefaultController,
) => any;

type TransformerTransformCallback = (
  chunk: any,
  controller: TransformStreamDefaultController,
) => Promise<void>;

type UnderlyingSinkAbortCallback = (reason?: any) => Promise<void>;

type UnderlyingSinkCloseCallback = () => Promise<void>;

type UnderlyingSinkStartCallback = (
  controller: WritableStreamDefaultController,
) => any;

type UnderlyingSinkWriteCallback = (
  chunk: any,
  controller: WritableStreamDefaultController,
) => Promise<void>;

type UnderlyingSourceCancelCallback = (reason?: any) => Promise<void>;

type UnderlyingSourcePullCallback = (
  controller: ReadableStreamController,
) => Promise<void>;

type UnderlyingSourceStartCallback = (
  controller: ReadableStreamController,
) => any;

declare class ByteLengthQueuingStrategy {
  +highWaterMark: number;
  +size: Function;

  constructor(init: QueuingStrategyInit): void;
}

declare class CountQueuingStrategy {
  +highWaterMark: number;
  +size: Function;

  constructor(init: QueuingStrategyInit): void;
}

declare class ReadableByteStreamController {
  +byobRequest: ReadableStreamBYOBRequest | null;
  +desiredSize: number | null;

  close(): void;
  enqueue(chunk: ArrayBufferView): void;
  error(e?: any): void;
}

declare class ReadableStream {
  +locked: boolean;

  constructor(underlyingSource?: Object, strategy?: QueuingStrategy): void;

  @@iterator(): Iterator<any>;

  static from(asyncIterable: any): ReadableStream;
  cancel(reason?: any): Promise<void>;
  getReader(options?: ReadableStreamGetReaderOptions): ReadableStreamReader;
  pipeThrough(
    transform: ReadableWritablePair,
    options?: StreamPipeOptions,
  ): ReadableStream;
  pipeTo(
    destination: WritableStream,
    options?: StreamPipeOptions,
  ): Promise<void>;
  tee(): Array<ReadableStream>;
}

declare class ReadableStreamBYOBReader
  mixins mixin$ReadableStreamGenericReader
{
  constructor(stream: ReadableStream): void;

  read(
    view: ArrayBufferView,
    options?: ReadableStreamBYOBReaderReadOptions,
  ): Promise<ReadableStreamReadResult>;
  releaseLock(): void;
}

declare class ReadableStreamBYOBRequest {
  +view: ArrayBufferView | null;

  respond(bytesWritten: number): void;
  respondWithNewView(view: ArrayBufferView): void;
}

declare class ReadableStreamDefaultController {
  +desiredSize: number | null;

  close(): void;
  enqueue(chunk?: any): void;
  error(e?: any): void;
}

declare class ReadableStreamDefaultReader
  mixins mixin$ReadableStreamGenericReader
{
  constructor(stream: ReadableStream): void;

  read(): Promise<ReadableStreamReadResult>;
  releaseLock(): void;
}

declare class TransformStream {
  +readable: ReadableStream;
  +writable: WritableStream;

  constructor(
    transformer?: Object,
    writableStrategy?: QueuingStrategy,
    readableStrategy?: QueuingStrategy,
  ): void;
}

declare class TransformStreamDefaultController {
  +desiredSize: number | null;

  enqueue(chunk?: any): void;
  error(reason?: any): void;
  terminate(): void;
}

declare class WritableStream {
  +locked: boolean;

  constructor(underlyingSink?: Object, strategy?: QueuingStrategy): void;

  abort(reason?: any): Promise<void>;
  close(): Promise<void>;
  getWriter(): WritableStreamDefaultWriter;
}

declare class WritableStreamDefaultController {
  +signal: AbortSignal;

  error(e?: any): void;
}

declare class WritableStreamDefaultWriter {
  +closed: Promise<void>;
  +desiredSize: number | null;
  +ready: Promise<void>;

  constructor(stream: WritableStream): void;

  abort(reason?: any): Promise<void>;
  close(): Promise<void>;
  releaseLock(): void;
  write(chunk?: any): Promise<void>;
}

declare class mixin$GenericTransformStream {
  +readable: ReadableStream;
  +writable: WritableStream;
}

declare class mixin$ReadableStreamGenericReader {
  +closed: Promise<void>;

  cancel(reason?: any): Promise<void>;
}
