type LanguageDetectionResult = {
  confidence: number,
  detectedLanguage: string,
};

type LanguageDetectorCreateCoreOptions = {
  expectedInputLanguages: Array<string>,
};

type LanguageDetectorCreateOptions = {
  ...LanguageDetectorCreateCoreOptions,
  monitor: CreateMonitorCallback,
  signal: AbortSignal,
};

type LanguageDetectorDetectOptions = {
  signal: AbortSignal,
};

type TranslatorCreateCoreOptions = {
  sourceLanguage: string,
  targetLanguage: string,
};

type TranslatorCreateOptions = {
  ...TranslatorCreateCoreOptions,
  monitor: CreateMonitorCallback,
  signal: AbortSignal,
};

type TranslatorTranslateOptions = {
  signal: AbortSignal,
};

declare class LanguageDetector mixins mixin$DestroyableModel {
  +expectedInputLanguages: $ReadOnlyArray<string> | null;
  +inputQuota: number;

  static availability(
    options?: LanguageDetectorCreateCoreOptions,
  ): Promise<Availability>;
  static create(
    options?: LanguageDetectorCreateOptions,
  ): Promise<LanguageDetector>;
  detect(
    input: string,
    options?: LanguageDetectorDetectOptions,
  ): Promise<Array<LanguageDetectionResult>>;
  measureInputUsage(
    input: string,
    options?: LanguageDetectorDetectOptions,
  ): Promise<number>;
}

declare class Translator mixins mixin$DestroyableModel {
  +inputQuota: number;
  +sourceLanguage: string;
  +targetLanguage: string;

  static availability(
    options: TranslatorCreateCoreOptions,
  ): Promise<Availability>;
  static create(options: TranslatorCreateOptions): Promise<Translator>;
  measureInputUsage(
    input: string,
    options?: TranslatorTranslateOptions,
  ): Promise<number>;
  translate(
    input: string,
    options?: TranslatorTranslateOptions,
  ): Promise<string>;
  translateStreaming(
    input: string,
    options?: TranslatorTranslateOptions,
  ): ReadableStream;
}
