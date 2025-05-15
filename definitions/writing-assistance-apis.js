type Availability =
  | 'unavailable'
  | 'downloadable'
  | 'downloading'
  | 'available';

type RewriterFormat = 'as-is' | 'plain-text' | 'markdown';

type RewriterLength = 'as-is' | 'shorter' | 'longer';

type RewriterTone = 'as-is' | 'more-formal' | 'more-casual';

type SummarizerFormat = 'plain-text' | 'markdown';

type SummarizerLength = 'short' | 'medium' | 'long';

type SummarizerType = 'tl;dr' | 'teaser' | 'key-points' | 'headline';

type WriterFormat = 'plain-text' | 'markdown';

type WriterLength = 'short' | 'medium' | 'long';

type WriterTone = 'formal' | 'neutral' | 'casual';

type RewriterCreateCoreOptions = {
  expectedContextLanguages: Array<string>,
  expectedInputLanguages: Array<string>,
  format: RewriterFormat,
  length: RewriterLength,
  outputLanguage: string,
  tone: RewriterTone,
};

type RewriterCreateOptions = {
  monitor: CreateMonitorCallback,
  sharedContext: string,
  signal: AbortSignal,
};

type RewriterRewriteOptions = {
  context: string,
  signal: AbortSignal,
};

type SummarizerCreateCoreOptions = {
  expectedContextLanguages: Array<string>,
  expectedInputLanguages: Array<string>,
  format: SummarizerFormat,
  length: SummarizerLength,
  outputLanguage: string,
  type: SummarizerType,
};

type SummarizerCreateOptions = {
  monitor: CreateMonitorCallback,
  sharedContext: string,
  signal: AbortSignal,
};

type SummarizerSummarizeOptions = {
  context: string,
  signal: AbortSignal,
};

type WriterCreateCoreOptions = {
  expectedContextLanguages: Array<string>,
  expectedInputLanguages: Array<string>,
  format: WriterFormat,
  length: WriterLength,
  outputLanguage: string,
  tone: WriterTone,
};

type WriterCreateOptions = {
  monitor: CreateMonitorCallback,
  sharedContext: string,
  signal: AbortSignal,
};

type WriterWriteOptions = {
  context: string,
  signal: AbortSignal,
};

type CreateMonitorCallback = (monitor: CreateMonitor) => void;

declare class CreateMonitor extends EventTarget {
  ondownloadprogress: EventHandler;
}

declare class Rewriter mixins mixin$DestroyableModel {
  +expectedContextLanguages: string | null;
  +expectedInputLanguages: string | null;
  +format: RewriterFormat;
  +inputQuota: number;
  +length: RewriterLength;
  +outputLanguage: string | null;
  +sharedContext: string;
  +tone: RewriterTone;

  static availability(options?: RewriterCreateCoreOptions): Availability;
  static create(options?: RewriterCreateOptions): Rewriter;
  measureInputUsage(input: string, options?: RewriterRewriteOptions): number;
  rewrite(input: string, options?: RewriterRewriteOptions): string;
  rewriteStreaming(
    input: string,
    options?: RewriterRewriteOptions,
  ): ReadableStream;
}

declare class Summarizer mixins mixin$DestroyableModel {
  +expectedContextLanguages: string | null;
  +expectedInputLanguages: string | null;
  +format: SummarizerFormat;
  +inputQuota: number;
  +length: SummarizerLength;
  +outputLanguage: string | null;
  +sharedContext: string;
  +type: SummarizerType;

  static availability(options?: SummarizerCreateCoreOptions): Availability;
  static create(options?: SummarizerCreateOptions): Summarizer;
  measureInputUsage(
    input: string,
    options?: SummarizerSummarizeOptions,
  ): number;
  summarize(input: string, options?: SummarizerSummarizeOptions): string;
  summarizeStreaming(
    input: string,
    options?: SummarizerSummarizeOptions,
  ): ReadableStream;
}

declare class Writer mixins mixin$DestroyableModel {
  +expectedContextLanguages: string | null;
  +expectedInputLanguages: string | null;
  +format: WriterFormat;
  +inputQuota: number;
  +length: WriterLength;
  +outputLanguage: string | null;
  +sharedContext: string;
  +tone: WriterTone;

  static availability(options?: WriterCreateCoreOptions): Availability;
  static create(options?: WriterCreateOptions): Writer;
  measureInputUsage(input: string, options?: WriterWriteOptions): number;
  write(input: string, options?: WriterWriteOptions): string;
  writeStreaming(input: string, options?: WriterWriteOptions): ReadableStream;
}

declare class mixin$DestroyableModel {
  destroy(): void;
}
