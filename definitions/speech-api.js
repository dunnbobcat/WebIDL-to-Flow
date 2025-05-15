type AvailabilityStatus =
  | 'unavailable'
  | 'downloadable'
  | 'downloading'
  | 'available';

type SpeechRecognitionErrorCode =
  | 'no-speech'
  | 'aborted'
  | 'audio-capture'
  | 'network'
  | 'not-allowed'
  | 'service-not-allowed'
  | 'language-not-supported'
  | 'phrases-not-supported';

type SpeechRecognitionMode =
  | 'ondevice-preferred'
  | 'ondevice-only'
  | 'cloud-only';

type SpeechSynthesisErrorCode =
  | 'canceled'
  | 'interrupted'
  | 'audio-busy'
  | 'audio-hardware'
  | 'network'
  | 'synthesis-unavailable'
  | 'synthesis-failed'
  | 'language-unavailable'
  | 'voice-unavailable'
  | 'text-too-long'
  | 'invalid-argument'
  | 'not-allowed';

type SpeechRecognitionErrorEventInit = {
  error: SpeechRecognitionErrorCode,
  message: string,
};

type SpeechRecognitionEventInit = {
  resultIndex: number,
  results: SpeechRecognitionResultList,
};

type SpeechSynthesisErrorEventInit = {
  error: SpeechSynthesisErrorCode,
};

type SpeechSynthesisEventInit = {
  charIndex: number,
  charLength: number,
  elapsedTime: number,
  name: string,
  utterance: SpeechSynthesisUtterance,
};

declare class SpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  maxAlternatives: number;
  mode: SpeechRecognitionMode;
  onaudioend: EventHandler;
  onaudiostart: EventHandler;
  onend: EventHandler;
  onerror: EventHandler;
  onnomatch: EventHandler;
  onresult: EventHandler;
  onsoundend: EventHandler;
  onsoundstart: EventHandler;
  onspeechend: EventHandler;
  onspeechstart: EventHandler;
  onstart: EventHandler;
  phrases: SpeechRecognitionPhraseList;

  constructor(): void;

  static availableOnDevice(lang: string): AvailabilityStatus;
  static installOnDevice(lang: string): boolean;
  abort(): void;
  start(): void;
  start(audioTrack: MediaStreamTrack): void;
  stop(): void;
}

declare class SpeechRecognitionAlternative {
  +confidence: number;
  +transcript: string;
}

declare class SpeechRecognitionErrorEvent extends Event {
  +error: SpeechRecognitionErrorCode;
  +message: string;

  constructor(
    type: string,
    eventInitDict: SpeechRecognitionErrorEventInit,
  ): void;
}

declare class SpeechRecognitionEvent extends Event {
  +resultIndex: number;
  +results: SpeechRecognitionResultList;

  constructor(type: string, eventInitDict: SpeechRecognitionEventInit): void;
}

declare class SpeechRecognitionPhrase {
  +boost: number;
  +phrase: string;

  constructor(phrase: string, boost?: number): void;
}

declare class SpeechRecognitionPhraseList {
  +length: number;

  constructor(phrases: Array<SpeechRecognitionPhrase>): void;

  addItem(item: SpeechRecognitionPhrase): void;
  item(index: number): SpeechRecognitionPhrase;
  removeItem(index: number): void;
}

declare class SpeechRecognitionResult {
  +isFinal: boolean;
  +length: number;

  item(index: number): SpeechRecognitionAlternative;
}

declare class SpeechRecognitionResultList {
  +length: number;

  item(index: number): SpeechRecognitionResult;
}

declare class SpeechSynthesis extends EventTarget {
  onvoiceschanged: EventHandler;
  +paused: boolean;
  +pending: boolean;
  +speaking: boolean;

  cancel(): void;
  getVoices(): Array<SpeechSynthesisVoice>;
  pause(): void;
  resume(): void;
  speak(utterance: SpeechSynthesisUtterance): void;
}

declare class SpeechSynthesisErrorEvent extends SpeechSynthesisEvent {
  +error: SpeechSynthesisErrorCode;

  constructor(type: string, eventInitDict: SpeechSynthesisErrorEventInit): void;
}

declare class SpeechSynthesisEvent extends Event {
  +charIndex: number;
  +charLength: number;
  +elapsedTime: number;
  +name: string;
  +utterance: SpeechSynthesisUtterance;

  constructor(type: string, eventInitDict: SpeechSynthesisEventInit): void;
}

declare class SpeechSynthesisUtterance extends EventTarget {
  lang: string;
  onboundary: EventHandler;
  onend: EventHandler;
  onerror: EventHandler;
  onmark: EventHandler;
  onpause: EventHandler;
  onresume: EventHandler;
  onstart: EventHandler;
  pitch: number;
  rate: number;
  text: string;
  voice: SpeechSynthesisVoice | null;
  volume: number;

  constructor(text?: string): void;
}

declare class SpeechSynthesisVoice {
  +default: boolean;
  +lang: string;
  +localService: boolean;
  +name: string;
  +voiceURI: string;
}

/* partial */ interface Window {
  +speechSynthesis: SpeechSynthesis;
}
