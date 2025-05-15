type LanguageDetectionResult = {
  confidence: number,
  detectedLanguage: string,
};

type LanguageDetectorCreateCoreOptions = {
  expectedInputLanguages: Array<string>,
};

type LanguageDetectorCreateOptions = {
  expectedInputLanguages: Array<string>,
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
  monitor: CreateMonitorCallback,
  signal: AbortSignal,
  sourceLanguage: string,
  targetLanguage: string,
};

type TranslatorTranslateOptions = {
  signal: AbortSignal,
};

declare class LanguageDetector mixins mixin$DestroyableModel {
  +expectedInputLanguages: string | null;
  +inputQuota: number;

  static availability(
    options?: LanguageDetectorCreateCoreOptions,
  ): Availability;
  static create(options?: LanguageDetectorCreateOptions): LanguageDetector;
  detect(
    input: string,
    options?: LanguageDetectorDetectOptions,
  ): Array<LanguageDetectionResult>;
  measureInputUsage(
    input: string,
    options?: LanguageDetectorDetectOptions,
  ): number;
}

declare class Translator mixins mixin$DestroyableModel {
  +inputQuota: number;
  +sourceLanguage: string;
  +targetLanguage: string;

  static availability(options: TranslatorCreateCoreOptions): Availability;
  static create(options: TranslatorCreateOptions): Translator;
  measureInputUsage(
    input: string,
    options?: TranslatorTranslateOptions,
  ): number;
  translate(input: string, options?: TranslatorTranslateOptions): string;
  translateStreaming(
    input: string,
    options?: TranslatorTranslateOptions,
  ): ReadableStream;
}
