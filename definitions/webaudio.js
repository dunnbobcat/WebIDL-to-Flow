type AudioContextLatencyCategory = 'balanced' | 'interactive' | 'playback';

type AudioContextRenderSizeCategory = 'default' | 'hardware';

type AudioContextState = 'suspended' | 'running' | 'closed' | 'interrupted';

type AudioSinkType = 'none';

type AutomationRate = 'a-rate' | 'k-rate';

type BiquadFilterType =
  | 'lowpass'
  | 'highpass'
  | 'bandpass'
  | 'lowshelf'
  | 'highshelf'
  | 'peaking'
  | 'notch'
  | 'allpass';

type ChannelCountMode = 'max' | 'clamped-max' | 'explicit';

type ChannelInterpretation = 'speakers' | 'discrete';

type DistanceModelType = 'linear' | 'inverse' | 'exponential';

type OscillatorType = 'sine' | 'square' | 'sawtooth' | 'triangle' | 'custom';

type OverSampleType = 'none' | '2x' | '4x';

type PanningModelType = 'equalpower' | 'HRTF';

type AnalyserOptions = {
  ...AudioNodeOptions,
  fftSize: number,
  maxDecibels: number,
  minDecibels: number,
  smoothingTimeConstant: number,
};

type AudioBufferOptions = {
  length: number,
  numberOfChannels: number,
  sampleRate: number,
};

type AudioBufferSourceOptions = {
  buffer: AudioBuffer | null,
  detune: number,
  loop: boolean,
  loopEnd: number,
  loopStart: number,
  playbackRate: number,
};

type AudioContextOptions = {
  latencyHint: AudioContextLatencyCategory | number,
  renderSizeHint: AudioContextRenderSizeCategory | number,
  sampleRate: number,
  sinkId: string | AudioSinkOptions,
};

type AudioNodeOptions = {
  channelCount: number,
  channelCountMode: ChannelCountMode,
  channelInterpretation: ChannelInterpretation,
};

type AudioParamDescriptor = {
  automationRate: AutomationRate,
  defaultValue: number,
  maxValue: number,
  minValue: number,
  name: string,
};

type AudioProcessingEventInit = {
  inputBuffer: AudioBuffer,
  outputBuffer: AudioBuffer,
  playbackTime: number,
};

type AudioSinkOptions = {
  type: AudioSinkType,
};

type AudioTimestamp = {
  contextTime: number,
  performanceTime: number,
};

type AudioWorkletNodeOptions = {
  ...AudioNodeOptions,
  numberOfInputs: number,
  numberOfOutputs: number,
  outputChannelCount: Array<number>,
  parameterData: {[string]: number},
  processorOptions: Object,
};

type BiquadFilterOptions = {
  ...AudioNodeOptions,
  detune: number,
  frequency: number,
  gain: number,
  Q: number,
  type: BiquadFilterType,
};

type ChannelMergerOptions = {
  ...AudioNodeOptions,
  numberOfInputs: number,
};

type ChannelSplitterOptions = {
  ...AudioNodeOptions,
  numberOfOutputs: number,
};

type ConstantSourceOptions = {
  offset: number,
};

type ConvolverOptions = {
  ...AudioNodeOptions,
  buffer: AudioBuffer | null,
  disableNormalization: boolean,
};

type DelayOptions = {
  ...AudioNodeOptions,
  delayTime: number,
  maxDelayTime: number,
};

type DynamicsCompressorOptions = {
  ...AudioNodeOptions,
  attack: number,
  knee: number,
  ratio: number,
  release: number,
  threshold: number,
};

type GainOptions = {
  ...AudioNodeOptions,
  gain: number,
};

type IIRFilterOptions = {
  ...AudioNodeOptions,
  feedback: Array<number>,
  feedforward: Array<number>,
};

type MediaElementAudioSourceOptions = {
  mediaElement: HTMLMediaElement,
};

type MediaStreamAudioSourceOptions = {
  mediaStream: MediaStream,
};

type MediaStreamTrackAudioSourceOptions = {
  mediaStreamTrack: MediaStreamTrack,
};

type OfflineAudioCompletionEventInit = {
  renderedBuffer: AudioBuffer,
};

type OfflineAudioContextOptions = {
  length: number,
  numberOfChannels: number,
  renderSizeHint: AudioContextRenderSizeCategory | number,
  sampleRate: number,
};

type OscillatorOptions = {
  ...AudioNodeOptions,
  detune: number,
  frequency: number,
  periodicWave: PeriodicWave,
  type: OscillatorType,
};

type PannerOptions = {
  ...AudioNodeOptions,
  coneInnerAngle: number,
  coneOuterAngle: number,
  coneOuterGain: number,
  distanceModel: DistanceModelType,
  maxDistance: number,
  orientationX: number,
  orientationY: number,
  orientationZ: number,
  panningModel: PanningModelType,
  positionX: number,
  positionY: number,
  positionZ: number,
  refDistance: number,
  rolloffFactor: number,
};

type PeriodicWaveConstraints = {
  disableNormalization: boolean,
};

type PeriodicWaveOptions = {
  ...PeriodicWaveConstraints,
  imag: Array<number>,
  real: Array<number>,
};

type StereoPannerOptions = {
  ...AudioNodeOptions,
  pan: number,
};

type WaveShaperOptions = {
  ...AudioNodeOptions,
  curve: Array<number>,
  oversample: OverSampleType,
};

type AudioWorkletProcessCallback = (
  inputs: $ReadOnlyArray<$ReadOnlyArray<Float32Array>>,
  outputs: $ReadOnlyArray<$ReadOnlyArray<Float32Array>>,
  parameters: Object,
) => boolean;

type AudioWorkletProcessorConstructor = (
  options: Object,
) => AudioWorkletProcessor;

type DecodeErrorCallback = (error: DOMException) => void;

type DecodeSuccessCallback = (decodedData: AudioBuffer) => void;

declare class AnalyserNode extends AudioNode {
  fftSize: number;
  +frequencyBinCount: number;
  maxDecibels: number;
  minDecibels: number;
  smoothingTimeConstant: number;

  constructor(context: BaseAudioContext, options?: AnalyserOptions): void;

  getByteFrequencyData(array: Uint8Array): void;
  getByteTimeDomainData(array: Uint8Array): void;
  getFloatFrequencyData(array: Float32Array): void;
  getFloatTimeDomainData(array: Float32Array): void;
}

declare class AudioBuffer {
  +duration: number;
  +length: number;
  +numberOfChannels: number;
  +sampleRate: number;

  constructor(options: AudioBufferOptions): void;

  copyFromChannel(
    destination: Float32Array,
    channelNumber: number,
    bufferOffset?: number,
  ): void;
  copyToChannel(
    source: Float32Array,
    channelNumber: number,
    bufferOffset?: number,
  ): void;
  getChannelData(channel: number): Float32Array;
}

declare class AudioBufferSourceNode extends AudioScheduledSourceNode {
  buffer: AudioBuffer | null;
  +detune: AudioParam;
  loop: boolean;
  loopEnd: number;
  loopStart: number;
  +playbackRate: AudioParam;

  constructor(
    context: BaseAudioContext,
    options?: AudioBufferSourceOptions,
  ): void;

  start(when?: number, offset?: number, duration?: number): void;
}

declare class AudioContext extends BaseAudioContext {
  +baseLatency: number;
  onerror: EventHandler;
  onsinkchange: EventHandler;
  +outputLatency: number;
  +sinkId: string | AudioSinkInfo;

  constructor(contextOptions?: AudioContextOptions): void;

  close(): Promise<void>;
  createMediaElementSource(
    mediaElement: HTMLMediaElement,
  ): MediaElementAudioSourceNode;
  createMediaStreamDestination(): MediaStreamAudioDestinationNode;
  createMediaStreamSource(mediaStream: MediaStream): MediaStreamAudioSourceNode;
  createMediaStreamTrackSource(
    mediaStreamTrack: MediaStreamTrack,
  ): MediaStreamTrackAudioSourceNode;
  getOutputTimestamp(): AudioTimestamp;
  resume(): Promise<void>;
  setSinkId(sinkId: string | AudioSinkOptions): Promise<void>;
  suspend(): Promise<void>;
}

declare class AudioDestinationNode extends AudioNode {
  +maxChannelCount: number;
}

declare class AudioListener {
  +forwardX: AudioParam;
  +forwardY: AudioParam;
  +forwardZ: AudioParam;
  +positionX: AudioParam;
  +positionY: AudioParam;
  +positionZ: AudioParam;
  +upX: AudioParam;
  +upY: AudioParam;
  +upZ: AudioParam;

  setOrientation(
    x: number,
    y: number,
    z: number,
    xUp: number,
    yUp: number,
    zUp: number,
  ): void;
  setPosition(x: number, y: number, z: number): void;
}

declare class AudioNode extends EventTarget {
  channelCount: number;
  channelCountMode: ChannelCountMode;
  channelInterpretation: ChannelInterpretation;
  +context: BaseAudioContext;
  +numberOfInputs: number;
  +numberOfOutputs: number;

  connect(
    destinationNode: AudioNode,
    output?: number,
    input?: number,
  ): AudioNode;
  connect(destinationParam: AudioParam, output?: number): void;
  disconnect(): void;
  disconnect(output: number): void;
  disconnect(destinationNode: AudioNode): void;
  disconnect(destinationNode: AudioNode, output: number): void;
  disconnect(destinationNode: AudioNode, output: number, input: number): void;
  disconnect(destinationParam: AudioParam): void;
  disconnect(destinationParam: AudioParam, output: number): void;
}

declare class AudioParam {
  automationRate: AutomationRate;
  +defaultValue: number;
  +maxValue: number;
  +minValue: number;
  value: number;

  cancelAndHoldAtTime(cancelTime: number): AudioParam;
  cancelScheduledValues(cancelTime: number): AudioParam;
  exponentialRampToValueAtTime(value: number, endTime: number): AudioParam;
  linearRampToValueAtTime(value: number, endTime: number): AudioParam;
  setTargetAtTime(
    target: number,
    startTime: number,
    timeConstant: number,
  ): AudioParam;
  setValueAtTime(value: number, startTime: number): AudioParam;
  setValueCurveAtTime(
    values: Array<number>,
    startTime: number,
    duration: number,
  ): AudioParam;
}

type AudioParamMap = Map<string, AudioParam>;

declare class AudioProcessingEvent extends Event {
  +inputBuffer: AudioBuffer;
  +outputBuffer: AudioBuffer;
  +playbackTime: number;

  constructor(type: string, eventInitDict: AudioProcessingEventInit): void;
}

declare class AudioScheduledSourceNode extends AudioNode {
  onended: EventHandler;

  start(when?: number): void;
  stop(when?: number): void;
}

declare class AudioSinkInfo {
  +type: AudioSinkType;
}

declare class AudioWorklet extends Worklet {
  +port: MessagePort;
}

declare class AudioWorkletGlobalScope extends WorkletGlobalScope {
  +currentFrame: number;
  +currentTime: number;
  +port: MessagePort;
  +renderQuantumSize: number;
  +sampleRate: number;

  registerProcessor(
    name: string,
    processorCtor: AudioWorkletProcessorConstructor,
  ): void;
}

declare class AudioWorkletNode extends AudioNode {
  onprocessorerror: EventHandler;
  +parameters: AudioParamMap;
  +port: MessagePort;

  constructor(
    context: BaseAudioContext,
    name: string,
    options?: AudioWorkletNodeOptions,
  ): void;
}

declare class AudioWorkletProcessor {
  +port: MessagePort;

  constructor(): void;
}

declare class BaseAudioContext extends EventTarget {
  +audioWorklet: AudioWorklet;
  +currentTime: number;
  +destination: AudioDestinationNode;
  +listener: AudioListener;
  onstatechange: EventHandler;
  +renderQuantumSize: number;
  +sampleRate: number;
  +state: AudioContextState;

  createAnalyser(): AnalyserNode;
  createBiquadFilter(): BiquadFilterNode;
  createBuffer(
    numberOfChannels: number,
    length: number,
    sampleRate: number,
  ): AudioBuffer;
  createBufferSource(): AudioBufferSourceNode;
  createChannelMerger(numberOfInputs?: number): ChannelMergerNode;
  createChannelSplitter(numberOfOutputs?: number): ChannelSplitterNode;
  createConstantSource(): ConstantSourceNode;
  createConvolver(): ConvolverNode;
  createDelay(maxDelayTime?: number): DelayNode;
  createDynamicsCompressor(): DynamicsCompressorNode;
  createGain(): GainNode;
  createIIRFilter(
    feedforward: Array<number>,
    feedback: Array<number>,
  ): IIRFilterNode;
  createOscillator(): OscillatorNode;
  createPanner(): PannerNode;
  createPeriodicWave(
    real: Array<number>,
    imag: Array<number>,
    constraints?: PeriodicWaveConstraints,
  ): PeriodicWave;
  createScriptProcessor(
    bufferSize?: number,
    numberOfInputChannels?: number,
    numberOfOutputChannels?: number,
  ): ScriptProcessorNode;
  createStereoPanner(): StereoPannerNode;
  createWaveShaper(): WaveShaperNode;
  decodeAudioData(
    audioData: ArrayBuffer,
    successCallback?: DecodeSuccessCallback | null,
    errorCallback?: DecodeErrorCallback | null,
  ): Promise<AudioBuffer>;
}

declare class BiquadFilterNode extends AudioNode {
  +detune: AudioParam;
  +frequency: AudioParam;
  +gain: AudioParam;
  +Q: AudioParam;
  type: BiquadFilterType;

  constructor(context: BaseAudioContext, options?: BiquadFilterOptions): void;

  getFrequencyResponse(
    frequencyHz: Float32Array,
    magResponse: Float32Array,
    phaseResponse: Float32Array,
  ): void;
}

declare class ChannelMergerNode extends AudioNode {
  constructor(context: BaseAudioContext, options?: ChannelMergerOptions): void;
}

declare class ChannelSplitterNode extends AudioNode {
  constructor(
    context: BaseAudioContext,
    options?: ChannelSplitterOptions,
  ): void;
}

declare class ConstantSourceNode extends AudioScheduledSourceNode {
  +offset: AudioParam;

  constructor(context: BaseAudioContext, options?: ConstantSourceOptions): void;
}

declare class ConvolverNode extends AudioNode {
  buffer: AudioBuffer | null;
  normalize: boolean;

  constructor(context: BaseAudioContext, options?: ConvolverOptions): void;
}

declare class DelayNode extends AudioNode {
  +delayTime: AudioParam;

  constructor(context: BaseAudioContext, options?: DelayOptions): void;
}

declare class DynamicsCompressorNode extends AudioNode {
  +attack: AudioParam;
  +knee: AudioParam;
  +ratio: AudioParam;
  +reduction: number;
  +release: AudioParam;
  +threshold: AudioParam;

  constructor(
    context: BaseAudioContext,
    options?: DynamicsCompressorOptions,
  ): void;
}

declare class GainNode extends AudioNode {
  +gain: AudioParam;

  constructor(context: BaseAudioContext, options?: GainOptions): void;
}

declare class IIRFilterNode extends AudioNode {
  constructor(context: BaseAudioContext, options: IIRFilterOptions): void;

  getFrequencyResponse(
    frequencyHz: Float32Array,
    magResponse: Float32Array,
    phaseResponse: Float32Array,
  ): void;
}

declare class MediaElementAudioSourceNode extends AudioNode {
  +mediaElement: HTMLMediaElement;

  constructor(
    context: AudioContext,
    options: MediaElementAudioSourceOptions,
  ): void;
}

declare class MediaStreamAudioDestinationNode extends AudioNode {
  +stream: MediaStream;

  constructor(context: AudioContext, options?: AudioNodeOptions): void;
}

declare class MediaStreamAudioSourceNode extends AudioNode {
  +mediaStream: MediaStream;

  constructor(
    context: AudioContext,
    options: MediaStreamAudioSourceOptions,
  ): void;
}

declare class MediaStreamTrackAudioSourceNode extends AudioNode {
  constructor(
    context: AudioContext,
    options: MediaStreamTrackAudioSourceOptions,
  ): void;
}

declare class OfflineAudioCompletionEvent extends Event {
  +renderedBuffer: AudioBuffer;

  constructor(
    type: string,
    eventInitDict: OfflineAudioCompletionEventInit,
  ): void;
}

declare class OfflineAudioContext extends BaseAudioContext {
  +length: number;
  oncomplete: EventHandler;

  constructor(contextOptions: OfflineAudioContextOptions): void;
  constructor(
    numberOfChannels: number,
    length: number,
    sampleRate: number,
  ): void;

  resume(): Promise<void>;
  startRendering(): Promise<AudioBuffer>;
  suspend(suspendTime: number): Promise<void>;
}

declare class OscillatorNode extends AudioScheduledSourceNode {
  +detune: AudioParam;
  +frequency: AudioParam;
  type: OscillatorType;

  constructor(context: BaseAudioContext, options?: OscillatorOptions): void;

  setPeriodicWave(periodicWave: PeriodicWave): void;
}

declare class PannerNode extends AudioNode {
  coneInnerAngle: number;
  coneOuterAngle: number;
  coneOuterGain: number;
  distanceModel: DistanceModelType;
  maxDistance: number;
  +orientationX: AudioParam;
  +orientationY: AudioParam;
  +orientationZ: AudioParam;
  panningModel: PanningModelType;
  +positionX: AudioParam;
  +positionY: AudioParam;
  +positionZ: AudioParam;
  refDistance: number;
  rolloffFactor: number;

  constructor(context: BaseAudioContext, options?: PannerOptions): void;

  setOrientation(x: number, y: number, z: number): void;
  setPosition(x: number, y: number, z: number): void;
}

declare class PeriodicWave {
  constructor(context: BaseAudioContext, options?: PeriodicWaveOptions): void;
}

declare class ScriptProcessorNode extends AudioNode {
  +bufferSize: number;
  onaudioprocess: EventHandler;
}

declare class StereoPannerNode extends AudioNode {
  +pan: AudioParam;

  constructor(context: BaseAudioContext, options?: StereoPannerOptions): void;
}

declare class WaveShaperNode extends AudioNode {
  curve: Float32Array | null;
  oversample: OverSampleType;

  constructor(context: BaseAudioContext, options?: WaveShaperOptions): void;
}
