type CanvasImageSource =
  | HTMLOrSVGImageElement
  | HTMLVideoElement
  | HTMLCanvasElement
  | ImageBitmap
  | OffscreenCanvas
  | VideoFrame;

type EventHandler = EventHandlerNonNull | null;

type HTMLOrSVGImageElement = HTMLImageElement | SVGImageElement;

type HTMLOrSVGScriptElement = HTMLScriptElement | SVGScriptElement;

type ImageBitmapSource = CanvasImageSource | Blob | ImageData;

type MediaProvider = MediaStream | MediaSource | Blob;

type MessageEventSource = WindowProxy | MessagePort | ServiceWorker;

type OffscreenRenderingContext =
  | OffscreenCanvasRenderingContext2D
  | ImageBitmapRenderingContext
  | WebGLRenderingContext
  | WebGL2RenderingContext
  | GPUCanvasContext;

type OnBeforeUnloadEventHandler = OnBeforeUnloadEventHandlerNonNull | null;

type OnErrorEventHandler = OnErrorEventHandlerNonNull | null;

type RenderingContext =
  | CanvasRenderingContext2D
  | ImageBitmapRenderingContext
  | WebGLRenderingContext
  | WebGL2RenderingContext
  | GPUCanvasContext;

type TimerHandler = string | Function | TrustedScript;

type CanPlayTypeResult = '' | 'maybe' | 'probably';

type CanvasColorType = 'unorm8' | 'float16';

type CanvasDirection = 'ltr' | 'rtl' | 'inherit';

type CanvasFillRule = 'nonzero' | 'evenodd';

type CanvasFontKerning = 'auto' | 'normal' | 'none';

type CanvasFontStretch =
  | 'ultra-condensed'
  | 'extra-condensed'
  | 'condensed'
  | 'semi-condensed'
  | 'normal'
  | 'semi-expanded'
  | 'expanded'
  | 'extra-expanded'
  | 'ultra-expanded';

type CanvasFontVariantCaps =
  | 'normal'
  | 'small-caps'
  | 'all-small-caps'
  | 'petite-caps'
  | 'all-petite-caps'
  | 'unicase'
  | 'titling-caps';

type CanvasLineCap = 'butt' | 'round' | 'square';

type CanvasLineJoin = 'round' | 'bevel' | 'miter';

type CanvasTextAlign = 'start' | 'end' | 'left' | 'right' | 'center';

type CanvasTextBaseline =
  | 'top'
  | 'hanging'
  | 'middle'
  | 'alphabetic'
  | 'ideographic'
  | 'bottom';

type CanvasTextRendering =
  | 'auto'
  | 'optimizeSpeed'
  | 'optimizeLegibility'
  | 'geometricPrecision';

type ColorSpaceConversion = 'none' | 'default';

type DocumentReadyState = 'loading' | 'interactive' | 'complete';

type DocumentVisibilityState = 'visible' | 'hidden';

type DOMParserSupportedType =
  | 'text/html'
  | 'text/xml'
  | 'application/xml'
  | 'application/xhtml+xml'
  | 'image/svg+xml';

type ImageOrientation = 'from-image' | 'flipY';

type ImageSmoothingQuality = 'low' | 'medium' | 'high';

type NavigationFocusReset = 'after-transition' | 'manual';

type NavigationHistoryBehavior = 'auto' | 'push' | 'replace';

type NavigationScrollBehavior = 'after-transition' | 'manual';

type NavigationType = 'push' | 'replace' | 'reload' | 'traverse';

type OffscreenRenderingContextId =
  | '2d'
  | 'bitmaprenderer'
  | 'webgl'
  | 'webgl2'
  | 'webgpu';

type PredefinedColorSpace = 'srgb' | 'display-p3';

type PremultiplyAlpha = 'none' | 'premultiply' | 'default';

type ResizeQuality = 'pixelated' | 'low' | 'medium' | 'high';

type ScrollRestoration = 'auto' | 'manual';

type SelectionMode = 'select' | 'start' | 'end' | 'preserve';

type TextTrackKind =
  | 'subtitles'
  | 'captions'
  | 'descriptions'
  | 'chapters'
  | 'metadata';

type TextTrackMode = 'disabled' | 'hidden' | 'showing';

type WorkerType = 'classic' | 'module';

type AssignedNodesOptions = {
  flatten: boolean,
};

type CanvasRenderingContext2DSettings = {
  alpha: boolean,
  desynchronized: boolean,
  colorSpace: PredefinedColorSpace,
  colorType: CanvasColorType,
  willReadFrequently: boolean,
};

type CloseWatcherOptions = {
  signal: AbortSignal,
};

type CommandEventInit = {
  source: Element | null,
  command: string,
};

type DragEventInit = {
  dataTransfer: DataTransfer | null,
};

type ElementDefinitionOptions = {
  extends: string,
};

type ErrorEventInit = {
  message: string,
  filename: string,
  lineno: number,
  colno: number,
  error: any,
};

type EventSourceInit = {
  withCredentials: boolean,
};

type FocusOptions = {
  preventScroll: boolean,
  focusVisible: boolean,
};

type FormDataEventInit = {
  formData: FormData,
};

type GetHTMLOptions = {
  serializableShadowRoots: boolean,
  shadowRoots: Array<ShadowRoot>,
};

type HashChangeEventInit = {
  oldURL: string,
  newURL: string,
};

type ImageBitmapOptions = {
  imageOrientation: ImageOrientation,
  premultiplyAlpha: PremultiplyAlpha,
  colorSpaceConversion: ColorSpaceConversion,
  resizeWidth: number,
  resizeHeight: number,
  resizeQuality: ResizeQuality,
};

type ImageBitmapRenderingContextSettings = {
  alpha: boolean,
};

type ImageDataSettings = {
  colorSpace: PredefinedColorSpace,
};

type ImageEncodeOptions = {
  type: string,
  quality: number,
};

type MessageEventInit = {
  data: any,
  origin: string,
  lastEventId: string,
  source: MessageEventSource | null,
  ports: Array<MessagePort>,
};

type NavigateEventInit = {
  navigationType: NavigationType,
  destination: NavigationDestination,
  canIntercept: boolean,
  userInitiated: boolean,
  hashChange: boolean,
  signal: AbortSignal,
  formData: FormData | null,
  downloadRequest: string | null,
  info: any,
  hasUAVisualTransition: boolean,
  sourceElement: Element | null,
};

type NavigationCurrentEntryChangeEventInit = {
  navigationType: NavigationType | null,
  from: NavigationHistoryEntry,
};

type NavigationInterceptOptions = {
  handler: NavigationInterceptHandler,
  focusReset: NavigationFocusReset,
  scroll: NavigationScrollBehavior,
};

type NavigationNavigateOptions = {
  state: any,
  history: NavigationHistoryBehavior,
};

type NavigationOptions = {
  info: any,
};

type NavigationReloadOptions = {
  state: any,
};

type NavigationResult = {
  committed: NavigationHistoryEntry,
  finished: NavigationHistoryEntry,
};

type NavigationUpdateCurrentEntryOptions = {
  state: any,
};

type PageRevealEventInit = {
  viewTransition: ViewTransition | null,
};

type PageSwapEventInit = {
  activation: NavigationActivation | null,
  viewTransition: ViewTransition | null,
};

type PageTransitionEventInit = {
  persisted: boolean,
};

type PopStateEventInit = {
  state: any,
  hasUAVisualTransition: boolean,
};

type PromiseRejectionEventInit = {
  promise: object,
  reason: any,
};

type ShowPopoverOptions = {
  source: HTMLElement,
};

type StorageEventInit = {
  key: string | null,
  oldValue: string | null,
  newValue: string | null,
  url: string,
  storageArea: Storage | null,
};

type StructuredSerializeOptions = {
  transfer: Array<object>,
};

type SubmitEventInit = {
  submitter: HTMLElement | null,
};

type ToggleEventInit = {
  oldState: string,
  newState: string,
};

type TogglePopoverOptions = {
  force: boolean,
};

type TrackEventInit = {
  track: VideoTrack | AudioTrack | TextTrack | null,
};

type ValidityStateFlags = {
  valueMissing: boolean,
  typeMismatch: boolean,
  patternMismatch: boolean,
  tooLong: boolean,
  tooShort: boolean,
  rangeUnderflow: boolean,
  rangeOverflow: boolean,
  stepMismatch: boolean,
  badInput: boolean,
  customError: boolean,
};

type WindowPostMessageOptions = {
  targetOrigin: string,
};

type WorkerOptions = {
  type: WorkerType,
  credentials: RequestCredentials,
  name: string,
};

type WorkletOptions = {
  credentials: RequestCredentials,
};

interface AbstractWorker {
  onerror: EventHandler;
}

interface AnimationFrameProvider {
  cancelAnimationFrame(handle: number): void;
  requestAnimationFrame(callback: FrameRequestCallback): number;
}

interface CanvasCompositing {
  globalAlpha: number;
  globalCompositeOperation: string;
}

interface CanvasDrawImage {
  drawImage(image: CanvasImageSource, dx: number, dy: number): void;
  drawImage(
    image: CanvasImageSource,
    dx: number,
    dy: number,
    dw: number,
    dh: number,
  ): void;
  drawImage(
    image: CanvasImageSource,
    sx: number,
    sy: number,
    sw: number,
    sh: number,
    dx: number,
    dy: number,
    dw: number,
    dh: number,
  ): void;
}

interface CanvasDrawPath {
  beginPath(): void;
  clip(fillRule?: CanvasFillRule): void;
  clip(path: Path2D, fillRule?: CanvasFillRule): void;
  fill(fillRule?: CanvasFillRule): void;
  fill(path: Path2D, fillRule?: CanvasFillRule): void;
  isPointInPath(x: number, y: number, fillRule?: CanvasFillRule): boolean;
  isPointInPath(
    path: Path2D,
    x: number,
    y: number,
    fillRule?: CanvasFillRule,
  ): boolean;
  isPointInStroke(x: number, y: number): boolean;
  isPointInStroke(path: Path2D, x: number, y: number): boolean;
  stroke(): void;
  stroke(path: Path2D): void;
}

interface CanvasFillStrokeStyles {
  fillStyle: string | CanvasGradient | CanvasPattern;
  strokeStyle: string | CanvasGradient | CanvasPattern;

  createConicGradient(startAngle: double, x: double, y: double): CanvasGradient;
  createLinearGradient(
    x0: double,
    y0: double,
    x1: double,
    y1: double,
  ): CanvasGradient;
  createPattern(
    image: CanvasImageSource,
    repetition: string,
  ): CanvasPattern | null;
  createRadialGradient(
    x0: double,
    y0: double,
    r0: double,
    x1: double,
    y1: double,
    r1: double,
  ): CanvasGradient;
}

interface CanvasFilters {
  filter: string;
}

interface CanvasImageData {
  createImageData(
    sw: number,
    sh: number,
    settings?: ImageDataSettings,
  ): ImageData;
  createImageData(imageData: ImageData): ImageData;
  getImageData(
    sx: number,
    sy: number,
    sw: number,
    sh: number,
    settings?: ImageDataSettings,
  ): ImageData;
  putImageData(imageData: ImageData, dx: number, dy: number): void;
  putImageData(
    imageData: ImageData,
    dx: number,
    dy: number,
    dirtyX: number,
    dirtyY: number,
    dirtyWidth: number,
    dirtyHeight: number,
  ): void;
}

interface CanvasImageSmoothing {
  imageSmoothingEnabled: boolean;
  imageSmoothingQuality: ImageSmoothingQuality;
}

interface CanvasPath {
  arc(
    x: number,
    y: number,
    radius: number,
    startAngle: number,
    endAngle: number,
    counterclockwise?: boolean,
  ): void;
  arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;
  bezierCurveTo(
    cp1x: number,
    cp1y: number,
    cp2x: number,
    cp2y: number,
    x: number,
    y: number,
  ): void;
  closePath(): void;
  ellipse(
    x: number,
    y: number,
    radiusX: number,
    radiusY: number,
    rotation: number,
    startAngle: number,
    endAngle: number,
    counterclockwise?: boolean,
  ): void;
  lineTo(x: number, y: number): void;
  moveTo(x: number, y: number): void;
  quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
  rect(x: number, y: number, w: number, h: number): void;
  roundRect(
    x: number,
    y: number,
    w: number,
    h: number,
    radii?: number | DOMPointInit | Array<number | DOMPointInit>,
  ): void;
}

interface CanvasPathDrawingStyles {
  lineCap: CanvasLineCap;
  lineDashOffset: number;
  lineJoin: CanvasLineJoin;
  lineWidth: number;
  miterLimit: number;

  getLineDash(): Array<number>;
  setLineDash(segments: Array<number>): void;
}

interface CanvasRect {
  clearRect(x: number, y: number, w: number, h: number): void;
  fillRect(x: number, y: number, w: number, h: number): void;
  strokeRect(x: number, y: number, w: number, h: number): void;
}

interface CanvasSettings {
  getContextAttributes(): CanvasRenderingContext2DSettings;
}

interface CanvasShadowStyles {
  shadowBlur: number;
  shadowColor: string;
  shadowOffsetX: number;
  shadowOffsetY: number;
}

interface CanvasState {
  isContextLost(): boolean;
  reset(): void;
  restore(): void;
  save(): void;
}

interface CanvasText {
  fillText(text: string, x: number, y: number, maxWidth?: number): void;
  measureText(text: string): TextMetrics;
  strokeText(text: string, x: number, y: number, maxWidth?: number): void;
}

interface CanvasTextDrawingStyles {
  direction: CanvasDirection;
  font: string;
  fontKerning: CanvasFontKerning;
  fontStretch: CanvasFontStretch;
  fontVariantCaps: CanvasFontVariantCaps;
  lang: string;
  letterSpacing: string;
  textAlign: CanvasTextAlign;
  textBaseline: CanvasTextBaseline;
  textRendering: CanvasTextRendering;
  wordSpacing: string;
}

interface CanvasTransform {
  getTransform(): DOMMatrix;
  resetTransform(): void;
  rotate(angle: number): void;
  scale(x: number, y: number): void;
  setTransform(
    a: number,
    b: number,
    c: number,
    d: number,
    e: number,
    f: number,
  ): void;
  setTransform(transform?: DOMMatrix2DInit): void;
  transform(
    a: number,
    b: number,
    c: number,
    d: number,
    e: number,
    f: number,
  ): void;
  translate(x: number, y: number): void;
}

interface CanvasUserInterface {
  drawFocusIfNeeded(element: Element): void;
  drawFocusIfNeeded(path: Path2D, element: Element): void;
}

interface ElementContentEditable {
  contentEditable: string;
  enterKeyHint: string;
  inputMode: string;
  +isContentEditable: boolean;
}

interface GlobalEventHandlers {
  onabort: EventHandler;
  onauxclick: EventHandler;
  onbeforeinput: EventHandler;
  onbeforematch: EventHandler;
  onbeforetoggle: EventHandler;
  onblur: EventHandler;
  oncancel: EventHandler;
  oncanplay: EventHandler;
  oncanplaythrough: EventHandler;
  onchange: EventHandler;
  onclick: EventHandler;
  onclose: EventHandler;
  oncommand: EventHandler;
  oncontextlost: EventHandler;
  oncontextmenu: EventHandler;
  oncontextrestored: EventHandler;
  oncopy: EventHandler;
  oncuechange: EventHandler;
  oncut: EventHandler;
  ondblclick: EventHandler;
  ondrag: EventHandler;
  ondragend: EventHandler;
  ondragenter: EventHandler;
  ondragleave: EventHandler;
  ondragover: EventHandler;
  ondragstart: EventHandler;
  ondrop: EventHandler;
  ondurationchange: EventHandler;
  onemptied: EventHandler;
  onended: EventHandler;
  onerror: OnErrorEventHandler;
  onfocus: EventHandler;
  onformdata: EventHandler;
  oninput: EventHandler;
  oninvalid: EventHandler;
  onkeydown: EventHandler;
  onkeypress: EventHandler;
  onkeyup: EventHandler;
  onload: EventHandler;
  onloadeddata: EventHandler;
  onloadedmetadata: EventHandler;
  onloadstart: EventHandler;
  onmousedown: EventHandler;
  onmouseenter: EventHandler;
  onmouseleave: EventHandler;
  onmousemove: EventHandler;
  onmouseout: EventHandler;
  onmouseover: EventHandler;
  onmouseup: EventHandler;
  onpaste: EventHandler;
  onpause: EventHandler;
  onplay: EventHandler;
  onplaying: EventHandler;
  onprogress: EventHandler;
  onratechange: EventHandler;
  onreset: EventHandler;
  onresize: EventHandler;
  onscroll: EventHandler;
  onscrollend: EventHandler;
  onsecuritypolicyviolation: EventHandler;
  onseeked: EventHandler;
  onseeking: EventHandler;
  onselect: EventHandler;
  onslotchange: EventHandler;
  onstalled: EventHandler;
  onsubmit: EventHandler;
  onsuspend: EventHandler;
  ontimeupdate: EventHandler;
  ontoggle: EventHandler;
  onvolumechange: EventHandler;
  onwaiting: EventHandler;
  onwebkitanimationend: EventHandler;
  onwebkitanimationiteration: EventHandler;
  onwebkitanimationstart: EventHandler;
  onwebkittransitionend: EventHandler;
  onwheel: EventHandler;
}

interface HTMLHyperlinkElementUtils {
  hash: string;
  host: string;
  hostname: string;
  href: string;
  +origin: string;
  password: string;
  pathname: string;
  port: string;
  protocol: string;
  search: string;
  username: string;
}

interface HTMLOrSVGElement {
  autofocus: boolean;
  +dataset: DOMStringMap;
  nonce: string;
  tabIndex: number;

  blur(): void;
  focus(options?: FocusOptions): void;
}

interface MessageEventTarget {
  onmessage: EventHandler;
  onmessageerror: EventHandler;
}

interface NavigatorConcurrentHardware {
  +hardwareConcurrency: number;
}

interface NavigatorContentUtils {
  registerProtocolHandler(scheme: string, url: string): void;
  unregisterProtocolHandler(scheme: string, url: string): void;
}

interface NavigatorCookies {
  +cookieEnabled: boolean;
}

interface NavigatorID {
  +appCodeName: string;
  +appName: string;
  +appVersion: string;
  +platform: string;
  +product: string;
  +productSub: string;
  +userAgent: string;
  +vendor: string;
  +vendorSub: string;
}

interface NavigatorLanguage {
  +language: string;
  +languages: string;
}

interface NavigatorOnLine {
  +onLine: boolean;
}

interface NavigatorPlugins {
  +mimeTypes: MimeTypeArray;
  +pdfViewerEnabled: boolean;
  +plugins: PluginArray;

  javaEnabled(): boolean;
}

interface PopoverInvokerElement {
  popoverTargetAction: string;
  popoverTargetElement: Element | null;
}

interface WindowEventHandlers {
  onafterprint: EventHandler;
  onbeforeprint: EventHandler;
  onbeforeunload: OnBeforeUnloadEventHandler;
  onhashchange: EventHandler;
  onlanguagechange: EventHandler;
  onmessage: EventHandler;
  onmessageerror: EventHandler;
  onoffline: EventHandler;
  ononline: EventHandler;
  onpagehide: EventHandler;
  onpagereveal: EventHandler;
  onpageshow: EventHandler;
  onpageswap: EventHandler;
  onpopstate: EventHandler;
  onrejectionhandled: EventHandler;
  onstorage: EventHandler;
  onunhandledrejection: EventHandler;
  onunload: EventHandler;
}

interface WindowLocalStorage {
  +localStorage: Storage;
}

interface WindowOrWorkerGlobalScope {
  +crossOriginIsolated: boolean;
  +isSecureContext: boolean;
  +origin: string;

  atob(data: string): ByteString;
  btoa(data: string): string;
  clearInterval(id?: number): void;
  clearTimeout(id?: number): void;
  createImageBitmap(
    image: ImageBitmapSource,
    options?: ImageBitmapOptions,
  ): ImageBitmap;
  createImageBitmap(
    image: ImageBitmapSource,
    sx: number,
    sy: number,
    sw: number,
    sh: number,
    options?: ImageBitmapOptions,
  ): ImageBitmap;
  queueMicrotask(callback: VoidFunction): void;
  reportError(e: any): void;
  setInterval(handler: TimerHandler, timeout?: number, arguments: any): number;
  setTimeout(handler: TimerHandler, timeout?: number, arguments: any): number;
  structuredClone(value: any, options?: StructuredSerializeOptions): any;
}

interface WindowSessionStorage {
  +sessionStorage: Storage;
}

declare class AudioTrack {
  enabled: boolean;
  +id: string;
  +kind: string;
  +label: string;
  +language: string;
}

declare class AudioTrackList extends EventTarget {
  +length: number;
  onaddtrack: EventHandler;
  onchange: EventHandler;
  onremovetrack: EventHandler;

  (index: number): AudioTrack;
  getTrackById(id: string): AudioTrack | null;
}

declare class BarProp {
  +visible: boolean;
}

declare class BeforeUnloadEvent extends Event {
  returnValue: string;
}

declare class BroadcastChannel extends EventTarget {
  +name: string;
  onmessage: EventHandler;
  onmessageerror: EventHandler;

  constructor(name: string): void;

  close(): void;
  postMessage(message: any): void;
}

declare class CanvasGradient {
  addColorStop(offset: double, color: string): void;
}

declare class CanvasPattern {
  setTransform(transform?: DOMMatrix2DInit): void;
}

declare class CanvasRenderingContext2D
  mixins
    CanvasSettings,
    CanvasState,
    CanvasTransform,
    CanvasCompositing,
    CanvasImageSmoothing,
    CanvasFillStrokeStyles,
    CanvasShadowStyles,
    CanvasFilters,
    CanvasRect,
    CanvasDrawPath,
    CanvasUserInterface,
    CanvasText,
    CanvasDrawImage,
    CanvasImageData,
    CanvasPathDrawingStyles,
    CanvasTextDrawingStyles,
    CanvasPath
{
  +canvas: HTMLCanvasElement;
}

declare class CloseWatcher extends EventTarget {
  oncancel: EventHandler;
  onclose: EventHandler;

  constructor(options?: CloseWatcherOptions): void;

  close(): void;
  destroy(): void;
  requestClose(): void;
}

declare class CommandEvent extends Event {
  +command: string;
  +source: Element | null;

  constructor(type: string, eventInitDict?: CommandEventInit): void;
}

declare class CustomElementRegistry {
  define(
    name: string,
    constructor_: CustomElementConstructor,
    options?: ElementDefinitionOptions,
  ): void;
  get(name: string): CustomElementConstructor | void;
  getName(constructor_: CustomElementConstructor): string | null;
  upgrade(root: Node): void;
  whenDefined(name: string): CustomElementConstructor;
}

type CustomStateSet = Set<string>;

declare class DataTransfer {
  dropEffect: string;
  effectAllowed: string;
  +files: FileList;
  +items: DataTransferItemList;
  +types: string;

  constructor(): void;

  clearData(format?: string): void;
  getData(format: string): string;
  setData(format: string, data: string): void;
  setDragImage(image: Element, x: number, y: number): void;
}

declare class DataTransferItem {
  +kind: string;
  +type: string;

  getAsFile(): File | null;
  getAsString(callback: FunctionStringCallback | null): void;
}

declare class DataTransferItemList {
  +length: number;

  (index: number): DataTransferItem;
  add(data: string, type: string): DataTransferItem | null;
  add(data: File): DataTransferItem | null;
  clear(): void;
  remove(index: number): void;
}

declare class DedicatedWorkerGlobalScope
  extends WorkerGlobalScope
  mixins AnimationFrameProvider, MessageEventTarget
{
  +name: string;

  close(): void;
  postMessage(message: any, transfer: Array<object>): void;
  postMessage(message: any, options?: StructuredSerializeOptions): void;
}

declare class DOMParser {
  constructor(): void;

  parseFromString(
    string: TrustedHTML | string,
    type: DOMParserSupportedType,
  ): Document;
}

declare class DOMStringList {
  +length: number;

  item(index: number): string | null;
  contains(string: string): boolean;
}

declare class DOMStringMap {
  (name: string): string;
  (name: string, value: string): void;
  (name: string): void;
}

declare class DragEvent extends MouseEvent {
  +dataTransfer: DataTransfer | null;

  constructor(type: string, eventInitDict?: DragEventInit): void;
}

declare class ElementInternals mixins ARIAMixin {
  +form: HTMLFormElement | null;
  +labels: NodeList;
  +shadowRoot: ShadowRoot | null;
  +states: CustomStateSet;
  +validationMessage: string;
  +validity: ValidityState;
  +willValidate: boolean;

  checkValidity(): boolean;
  reportValidity(): boolean;
  setFormValue(
    value: File | string | FormData | null,
    state?: File | string | FormData | null,
  ): void;
  setValidity(
    flags?: ValidityStateFlags,
    message?: string,
    anchor?: HTMLElement,
  ): void;
}

declare class ErrorEvent extends Event {
  +colno: number;
  +error: any;
  +filename: string;
  +lineno: number;
  +message: string;

  constructor(type: string, eventInitDict?: ErrorEventInit): void;
}

declare class EventSource extends EventTarget {
  static +CLOSED: 2;
  static +CONNECTING: 0;
  static +OPEN: 1;

  onerror: EventHandler;
  onmessage: EventHandler;
  onopen: EventHandler;
  +readyState: number;
  +url: string;
  +withCredentials: boolean;

  constructor(url: string, eventSourceInitDict?: EventSourceInit): void;

  close(): void;
}

declare class External {
  AddSearchProvider(): void;
  IsSearchProviderInstalled(): void;
}

declare class FakeWorkletGlobalScope extends WorkletGlobalScope {
  registerFake(type: string, classConstructor: Function): void;
}

declare class FormDataEvent extends Event {
  +formData: FormData;

  constructor(type: string, eventInitDict: FormDataEventInit): void;
}

declare class HashChangeEvent extends Event {
  +newURL: string;
  +oldURL: string;

  constructor(type: string, eventInitDict?: HashChangeEventInit): void;
}

declare class History {
  +length: number;
  scrollRestoration: ScrollRestoration;
  +state: any;

  back(): void;
  forward(): void;
  go(delta?: number): void;
  pushState(data: any, unused: string, url?: string | null): void;
  replaceState(data: any, unused: string, url?: string | null): void;
}

declare class HTMLAllCollection {
  +length: number;

  (index: number): Element;
  namedItem(name: string): HTMLCollection | Element | null;
  item(nameOrIndex?: string): HTMLCollection | Element | null;
}

declare class HTMLAnchorElement
  extends HTMLElement
  mixins HTMLHyperlinkElementUtils
{
  download: string;
  hreflang: string;
  ping: string;
  referrerPolicy: string;
  rel: string;
  +relList: DOMTokenList;
  target: string;
  text: string;
  type: string;

  constructor(): void;
}

declare class HTMLAreaElement
  extends HTMLElement
  mixins HTMLHyperlinkElementUtils
{
  alt: string;
  coords: string;
  download: string;
  ping: string;
  referrerPolicy: string;
  rel: string;
  +relList: DOMTokenList;
  shape: string;
  target: string;

  constructor(): void;
}

declare class HTMLAudioElement extends HTMLMediaElement {
  constructor(): void;
}

declare class HTMLBaseElement extends HTMLElement {
  href: string;
  target: string;

  constructor(): void;
}

declare class HTMLBodyElement extends HTMLElement mixins WindowEventHandlers {
  constructor(): void;
}

declare class HTMLBRElement extends HTMLElement {
  constructor(): void;
}

declare class HTMLButtonElement
  extends HTMLElement
  mixins PopoverInvokerElement
{
  command: string;
  commandForElement: Element | null;
  disabled: boolean;
  +form: HTMLFormElement | null;
  formAction: string;
  formEnctype: string;
  formMethod: string;
  formNoValidate: boolean;
  formTarget: string;
  +labels: NodeList;
  name: string;
  type: string;
  +validationMessage: string;
  +validity: ValidityState;
  value: string;
  +willValidate: boolean;

  constructor(): void;

  checkValidity(): boolean;
  reportValidity(): boolean;
  setCustomValidity(error: string): void;
}

declare class HTMLCanvasElement extends HTMLElement {
  height: number;
  width: number;

  constructor(): void;

  getContext(contextId: string, options?: any): RenderingContext | null;
  toBlob(callback: BlobCallback, type?: string, quality?: any): void;
  toDataURL(type?: string, quality?: any): string;
  transferControlToOffscreen(): OffscreenCanvas;
}

declare class HTMLDataElement extends HTMLElement {
  value: string;

  constructor(): void;
}

declare class HTMLDataListElement extends HTMLElement {
  +options: HTMLCollection;

  constructor(): void;
}

declare class HTMLDetailsElement extends HTMLElement {
  name: string;
  open: boolean;

  constructor(): void;
}

declare class HTMLDialogElement extends HTMLElement {
  closedBy: string;
  open: boolean;
  returnValue: string;

  constructor(): void;

  close(returnValue?: string): void;
  requestClose(returnValue?: string): void;
  show(): void;
  showModal(): void;
}

declare class HTMLDirectoryElement extends HTMLElement {
  compact: boolean;

  constructor(): void;
}

declare class HTMLDivElement extends HTMLElement {
  constructor(): void;
}

declare class HTMLDListElement extends HTMLElement {
  constructor(): void;
}

declare class HTMLElement
  extends Element
  mixins GlobalEventHandlers, ElementContentEditable, HTMLOrSVGElement
{
  accessKey: string;
  +accessKeyLabel: string;
  autocapitalize: string;
  autocorrect: boolean;
  dir: string;
  draggable: boolean;
  hidden: boolean | number | string | null;
  inert: boolean;
  innerText: string;
  lang: string;
  outerText: string;
  popover: string | null;
  spellcheck: boolean;
  title: string;
  translate: boolean;
  writingSuggestions: string;

  constructor(): void;

  attachInternals(): ElementInternals;
  click(): void;
  hidePopover(): void;
  showPopover(options?: ShowPopoverOptions): void;
  togglePopover(options?: TogglePopoverOptions | boolean): boolean;
}

declare class HTMLEmbedElement extends HTMLElement {
  height: string;
  src: string;
  type: string;
  width: string;

  constructor(): void;

  getSVGDocument(): Document | null;
}

declare class HTMLFieldSetElement extends HTMLElement {
  disabled: boolean;
  +elements: HTMLCollection;
  +form: HTMLFormElement | null;
  name: string;
  +type: string;
  +validationMessage: string;
  +validity: ValidityState;
  +willValidate: boolean;

  constructor(): void;

  checkValidity(): boolean;
  reportValidity(): boolean;
  setCustomValidity(error: string): void;
}

declare class HTMLFontElement extends HTMLElement {
  color: string;
  face: string;
  size: string;

  constructor(): void;
}

declare class HTMLFormControlsCollection extends HTMLCollection {
  namedItem(name: string): RadioNodeList | Element | null;
}

declare class HTMLFormElement extends HTMLElement {
  acceptCharset: string;
  action: string;
  autocomplete: string;
  +elements: HTMLFormControlsCollection;
  encoding: string;
  enctype: string;
  +length: number;
  method: string;
  name: string;
  noValidate: boolean;
  rel: string;
  +relList: DOMTokenList;
  target: string;

  constructor(): void;

  (index: number): Element;
  (name: string): RadioNodeList | Element;
  checkValidity(): boolean;
  reportValidity(): boolean;
  requestSubmit(submitter?: HTMLElement | null): void;
  reset(): void;
  submit(): void;
}

declare class HTMLFrameElement extends HTMLElement {
  +contentDocument: Document | null;
  +contentWindow: WindowProxy | null;
  frameBorder: string;
  longDesc: string;
  marginHeight: string;
  marginWidth: string;
  name: string;
  noResize: boolean;
  scrolling: string;
  src: string;

  constructor(): void;
}

declare class HTMLFrameSetElement
  extends HTMLElement
  mixins WindowEventHandlers
{
  cols: string;
  rows: string;

  constructor(): void;
}

declare class HTMLHeadElement extends HTMLElement {
  constructor(): void;
}

declare class HTMLHeadingElement extends HTMLElement {
  constructor(): void;
}

declare class HTMLHRElement extends HTMLElement {
  constructor(): void;
}

declare class HTMLHtmlElement extends HTMLElement {
  constructor(): void;
}

declare class HTMLIFrameElement extends HTMLElement {
  allow: string;
  allowFullscreen: boolean;
  +contentDocument: Document | null;
  +contentWindow: WindowProxy | null;
  height: string;
  loading: string;
  name: string;
  referrerPolicy: string;
  +sandbox: DOMTokenList;
  src: string;
  srcdoc: TrustedHTML | string;
  width: string;

  constructor(): void;

  getSVGDocument(): Document | null;
}

declare class HTMLImageElement extends HTMLElement {
  alt: string;
  +complete: boolean;
  crossOrigin: string | null;
  +currentSrc: string;
  decoding: string;
  fetchPriority: string;
  height: number;
  isMap: boolean;
  loading: string;
  +naturalHeight: number;
  +naturalWidth: number;
  referrerPolicy: string;
  sizes: string;
  src: string;
  srcset: string;
  useMap: string;
  width: number;

  constructor(): void;

  decode(): void;
}

declare class HTMLInputElement
  extends HTMLElement
  mixins PopoverInvokerElement
{
  accept: string;
  alpha: boolean;
  alt: string;
  autocomplete: string;
  checked: boolean;
  colorSpace: string;
  defaultChecked: boolean;
  defaultValue: string;
  dirName: string;
  disabled: boolean;
  files: FileList | null;
  +form: HTMLFormElement | null;
  formAction: string;
  formEnctype: string;
  formMethod: string;
  formNoValidate: boolean;
  formTarget: string;
  height: number;
  indeterminate: boolean;
  +labels: NodeList | null;
  +list: HTMLDataListElement | null;
  max: string;
  maxLength: number;
  min: string;
  minLength: number;
  multiple: boolean;
  name: string;
  pattern: string;
  placeholder: string;
  readOnly: boolean;
  required: boolean;
  selectionDirection: string | null;
  selectionEnd: number | null;
  selectionStart: number | null;
  size: number;
  src: string;
  step: string;
  type: string;
  +validationMessage: string;
  +validity: ValidityState;
  value: string;
  valueAsDate: object | null;
  valueAsNumber: number;
  width: number;
  +willValidate: boolean;

  constructor(): void;

  checkValidity(): boolean;
  reportValidity(): boolean;
  select(): void;
  setCustomValidity(error: string): void;
  setRangeText(replacement: string): void;
  setRangeText(
    replacement: string,
    start: number,
    end: number,
    selectionMode?: SelectionMode,
  ): void;
  setSelectionRange(start: number, end: number, direction?: string): void;
  showPicker(): void;
  stepDown(n?: number): void;
  stepUp(n?: number): void;
}

declare class HTMLLabelElement extends HTMLElement {
  +control: HTMLElement | null;
  +form: HTMLFormElement | null;
  htmlFor: string;

  constructor(): void;
}

declare class HTMLLegendElement extends HTMLElement {
  +form: HTMLFormElement | null;

  constructor(): void;
}

declare class HTMLLIElement extends HTMLElement {
  value: number;

  constructor(): void;
}

declare class HTMLLinkElement extends HTMLElement mixins LinkStyle {
  as: string;
  +blocking: DOMTokenList;
  crossOrigin: string | null;
  disabled: boolean;
  fetchPriority: string;
  href: string;
  hreflang: string;
  imageSizes: string;
  imageSrcset: string;
  integrity: string;
  media: string;
  referrerPolicy: string;
  rel: string;
  +relList: DOMTokenList;
  +sizes: DOMTokenList;
  type: string;

  constructor(): void;
}

declare class HTMLMapElement extends HTMLElement {
  +areas: HTMLCollection;
  name: string;

  constructor(): void;
}

declare class HTMLMarqueeElement extends HTMLElement {
  behavior: string;
  bgColor: string;
  direction: string;
  height: string;
  hspace: number;
  loop: number;
  scrollAmount: number;
  scrollDelay: number;
  trueSpeed: boolean;
  vspace: number;
  width: string;

  constructor(): void;

  start(): void;
  stop(): void;
}

declare class HTMLMediaElement extends HTMLElement {
  static +HAVE_CURRENT_DATA: 2;
  static +HAVE_ENOUGH_DATA: 4;
  static +HAVE_FUTURE_DATA: 3;
  static +HAVE_METADATA: 1;
  static +HAVE_NOTHING: 0;
  static +NETWORK_EMPTY: 0;
  static +NETWORK_IDLE: 1;
  static +NETWORK_LOADING: 2;
  static +NETWORK_NO_SOURCE: 3;

  +audioTracks: AudioTrackList;
  autoplay: boolean;
  +buffered: TimeRanges;
  controls: boolean;
  crossOrigin: string | null;
  +currentSrc: string;
  currentTime: double;
  defaultMuted: boolean;
  defaultPlaybackRate: double;
  +duration: number;
  +ended: boolean;
  +error: MediaError | null;
  loop: boolean;
  muted: boolean;
  +networkState: number;
  +paused: boolean;
  playbackRate: double;
  +played: TimeRanges;
  preload: string;
  preservesPitch: boolean;
  +readyState: number;
  +seekable: TimeRanges;
  +seeking: boolean;
  src: string;
  srcObject: MediaProvider | null;
  +textTracks: TextTrackList;
  +videoTracks: VideoTrackList;
  volume: double;

  addTextTrack(
    kind: TextTrackKind,
    label?: string,
    language?: string,
  ): TextTrack;
  canPlayType(type: string): CanPlayTypeResult;
  fastSeek(time: double): void;
  getStartDate(): object;
  load(): void;
  pause(): void;
  play(): void;
}

declare class HTMLMenuElement extends HTMLElement {
  constructor(): void;
}

declare class HTMLMetaElement extends HTMLElement {
  content: string;
  httpEquiv: string;
  media: string;
  name: string;

  constructor(): void;
}

declare class HTMLMeterElement extends HTMLElement {
  high: double;
  +labels: NodeList;
  low: double;
  max: double;
  min: double;
  optimum: double;
  value: double;

  constructor(): void;
}

declare class HTMLModElement extends HTMLElement {
  cite: string;
  dateTime: string;

  constructor(): void;
}

declare class HTMLObjectElement extends HTMLElement {
  +contentDocument: Document | null;
  +contentWindow: WindowProxy | null;
  data: string;
  +form: HTMLFormElement | null;
  height: string;
  name: string;
  type: string;
  +validationMessage: string;
  +validity: ValidityState;
  width: string;
  +willValidate: boolean;

  constructor(): void;

  checkValidity(): boolean;
  getSVGDocument(): Document | null;
  reportValidity(): boolean;
  setCustomValidity(error: string): void;
}

declare class HTMLOListElement extends HTMLElement {
  reversed: boolean;
  start: number;
  type: string;

  constructor(): void;
}

declare class HTMLOptGroupElement extends HTMLElement {
  disabled: boolean;
  label: string;

  constructor(): void;
}

declare class HTMLOptionElement extends HTMLElement {
  defaultSelected: boolean;
  disabled: boolean;
  +form: HTMLFormElement | null;
  +index: number;
  label: string;
  selected: boolean;
  text: string;
  value: string;

  constructor(): void;
}

declare class HTMLOptionsCollection extends HTMLCollection {
  length: number;
  selectedIndex: number;

  (index: number, option: HTMLOptionElement | null): void;
  add(
    element: HTMLOptionElement | HTMLOptGroupElement,
    before?: HTMLElement | number | null,
  ): void;
  remove(index: number): void;
}

declare class HTMLOutputElement extends HTMLElement {
  defaultValue: string;
  +form: HTMLFormElement | null;
  +htmlFor: DOMTokenList;
  +labels: NodeList;
  name: string;
  +type: string;
  +validationMessage: string;
  +validity: ValidityState;
  value: string;
  +willValidate: boolean;

  constructor(): void;

  checkValidity(): boolean;
  reportValidity(): boolean;
  setCustomValidity(error: string): void;
}

declare class HTMLParagraphElement extends HTMLElement {
  constructor(): void;
}

declare class HTMLParamElement extends HTMLElement {
  name: string;
  type: string;
  value: string;
  valueType: string;

  constructor(): void;
}

declare class HTMLPictureElement extends HTMLElement {
  constructor(): void;
}

declare class HTMLPreElement extends HTMLElement {
  constructor(): void;
}

declare class HTMLProgressElement extends HTMLElement {
  +labels: NodeList;
  max: double;
  +position: double;
  value: double;

  constructor(): void;
}

declare class HTMLQuoteElement extends HTMLElement {
  cite: string;

  constructor(): void;
}

declare class HTMLScriptElement extends HTMLElement {
  async: boolean;
  +blocking: DOMTokenList;
  crossOrigin: string | null;
  defer: boolean;
  fetchPriority: string;
  integrity: string;
  noModule: boolean;
  referrerPolicy: string;
  src: string;
  text: string;
  type: string;

  constructor(): void;

  static supports(type: string): boolean;
}

declare class HTMLSelectElement extends HTMLElement {
  autocomplete: string;
  disabled: boolean;
  +form: HTMLFormElement | null;
  +labels: NodeList;
  length: number;
  multiple: boolean;
  name: string;
  +options: HTMLOptionsCollection;
  required: boolean;
  selectedIndex: number;
  +selectedOptions: HTMLCollection;
  size: number;
  +type: string;
  +validationMessage: string;
  +validity: ValidityState;
  value: string;
  +willValidate: boolean;

  constructor(): void;

  item(index: number): HTMLOptionElement | null;
  add(
    element: HTMLOptionElement | HTMLOptGroupElement,
    before?: HTMLElement | number | null,
  ): void;
  checkValidity(): boolean;
  namedItem(name: string): HTMLOptionElement | null;
  remove(): void;
  remove(index: number): void;
  (index: number, option: HTMLOptionElement | null): void;
  reportValidity(): boolean;
  setCustomValidity(error: string): void;
  showPicker(): void;
}

declare class HTMLSlotElement extends HTMLElement {
  name: string;

  constructor(): void;

  assign(nodes: Element | Text): void;
  assignedElements(options?: AssignedNodesOptions): Array<Element>;
  assignedNodes(options?: AssignedNodesOptions): Array<Node>;
}

declare class HTMLSourceElement extends HTMLElement {
  height: number;
  media: string;
  sizes: string;
  src: string;
  srcset: string;
  type: string;
  width: number;

  constructor(): void;
}

declare class HTMLSpanElement extends HTMLElement {
  constructor(): void;
}

declare class HTMLStyleElement extends HTMLElement mixins LinkStyle {
  +blocking: DOMTokenList;
  disabled: boolean;
  media: string;

  constructor(): void;
}

declare class HTMLTableCaptionElement extends HTMLElement {
  constructor(): void;
}

declare class HTMLTableCellElement extends HTMLElement {
  abbr: string;
  +cellIndex: number;
  colSpan: number;
  headers: string;
  rowSpan: number;
  scope: string;

  constructor(): void;
}

declare class HTMLTableColElement extends HTMLElement {
  span: number;

  constructor(): void;
}

declare class HTMLTableElement extends HTMLElement {
  caption: HTMLTableCaptionElement | null;
  +rows: HTMLCollection;
  +tBodies: HTMLCollection;
  tFoot: HTMLTableSectionElement | null;
  tHead: HTMLTableSectionElement | null;

  constructor(): void;

  createCaption(): HTMLTableCaptionElement;
  createTBody(): HTMLTableSectionElement;
  createTFoot(): HTMLTableSectionElement;
  createTHead(): HTMLTableSectionElement;
  deleteCaption(): void;
  deleteRow(index: number): void;
  deleteTFoot(): void;
  deleteTHead(): void;
  insertRow(index?: number): HTMLTableRowElement;
}

declare class HTMLTableRowElement extends HTMLElement {
  +cells: HTMLCollection;
  +rowIndex: number;
  +sectionRowIndex: number;

  constructor(): void;

  deleteCell(index: number): void;
  insertCell(index?: number): HTMLTableCellElement;
}

declare class HTMLTableSectionElement extends HTMLElement {
  +rows: HTMLCollection;

  constructor(): void;

  deleteRow(index: number): void;
  insertRow(index?: number): HTMLTableRowElement;
}

declare class HTMLTemplateElement extends HTMLElement {
  +content: DocumentFragment;
  shadowRootClonable: boolean;
  shadowRootDelegatesFocus: boolean;
  shadowRootMode: string;
  shadowRootSerializable: boolean;

  constructor(): void;
}

declare class HTMLTextAreaElement extends HTMLElement {
  autocomplete: string;
  cols: number;
  defaultValue: string;
  dirName: string;
  disabled: boolean;
  +form: HTMLFormElement | null;
  +labels: NodeList;
  maxLength: number;
  minLength: number;
  name: string;
  placeholder: string;
  readOnly: boolean;
  required: boolean;
  rows: number;
  selectionDirection: string;
  selectionEnd: number;
  selectionStart: number;
  +textLength: number;
  +type: string;
  +validationMessage: string;
  +validity: ValidityState;
  value: string;
  +willValidate: boolean;
  wrap: string;

  constructor(): void;

  checkValidity(): boolean;
  reportValidity(): boolean;
  select(): void;
  setCustomValidity(error: string): void;
  setRangeText(replacement: string): void;
  setRangeText(
    replacement: string,
    start: number,
    end: number,
    selectionMode?: SelectionMode,
  ): void;
  setSelectionRange(start: number, end: number, direction?: string): void;
}

declare class HTMLTimeElement extends HTMLElement {
  dateTime: string;

  constructor(): void;
}

declare class HTMLTitleElement extends HTMLElement {
  text: string;

  constructor(): void;
}

declare class HTMLTrackElement extends HTMLElement {
  static +ERROR: 3;
  static +LOADED: 2;
  static +LOADING: 1;
  static +NONE: 0;

  default: boolean;
  kind: string;
  label: string;
  +readyState: number;
  src: string;
  srclang: string;
  +track: TextTrack;

  constructor(): void;
}

declare class HTMLUListElement extends HTMLElement {
  constructor(): void;
}

declare class HTMLUnknownElement extends HTMLElement {}

declare class HTMLVideoElement extends HTMLMediaElement {
  height: number;
  playsInline: boolean;
  poster: string;
  +videoHeight: number;
  +videoWidth: number;
  width: number;

  constructor(): void;
}

declare class ImageBitmap {
  +height: number;
  +width: number;

  close(): void;
}

declare class ImageBitmapRenderingContext {
  +canvas: HTMLCanvasElement | OffscreenCanvas;

  transferFromImageBitmap(bitmap: ImageBitmap | null): void;
}

declare class ImageData {
  +colorSpace: PredefinedColorSpace;
  +data: Uint8ClampedArray;
  +height: number;
  +width: number;

  constructor(sw: number, sh: number, settings?: ImageDataSettings): void;
  constructor(
    data: Uint8ClampedArray,
    sw: number,
    sh?: number,
    settings?: ImageDataSettings,
  ): void;
}

declare class Location {
  +ancestorOrigins: DOMStringList;
  hash: string;
  host: string;
  hostname: string;
  href: string;
  +origin: string;
  pathname: string;
  port: string;
  protocol: string;
  search: string;

  assign(url: string): void;
  reload(): void;
  replace(url: string): void;
}

declare class MediaError {
  static +MEDIA_ERR_ABORTED: 1;
  static +MEDIA_ERR_DECODE: 3;
  static +MEDIA_ERR_NETWORK: 2;
  static +MEDIA_ERR_SRC_NOT_SUPPORTED: 4;

  +code: number;
  +message: string;
}

declare class MessageChannel {
  +port1: MessagePort;
  +port2: MessagePort;

  constructor(): void;
}

declare class MessageEvent extends Event {
  +data: any;
  +lastEventId: string;
  +origin: string;
  +ports: MessagePort;
  +source: MessageEventSource | null;

  constructor(type: string, eventInitDict?: MessageEventInit): void;

  initMessageEvent(
    type: string,
    bubbles?: boolean,
    cancelable?: boolean,
    data?: any,
    origin?: string,
    lastEventId?: string,
    source?: MessageEventSource | null,
    ports?: Array<MessagePort>,
  ): void;
}

declare class MessagePort extends EventTarget mixins MessageEventTarget {
  onclose: EventHandler;

  close(): void;
  postMessage(message: any, transfer: Array<object>): void;
  postMessage(message: any, options?: StructuredSerializeOptions): void;
  start(): void;
}

declare class MimeType {
  +description: string;
  +enabledPlugin: Plugin;
  +suffixes: string;
  +type: string;
}

declare class MimeTypeArray {
  +length: number;

  item(index: number): MimeType | null;
  namedItem(name: string): MimeType | null;
}

declare class NavigateEvent extends Event {
  +canIntercept: boolean;
  +destination: NavigationDestination;
  +downloadRequest: string | null;
  +formData: FormData | null;
  +hashChange: boolean;
  +hasUAVisualTransition: boolean;
  +info: any;
  +navigationType: NavigationType;
  +signal: AbortSignal;
  +sourceElement: Element | null;
  +userInitiated: boolean;

  constructor(type: string, eventInitDict: NavigateEventInit): void;

  intercept(options?: NavigationInterceptOptions): void;
  scroll(): void;
}

declare class Navigation extends EventTarget {
  +activation: NavigationActivation | null;
  +canGoBack: boolean;
  +canGoForward: boolean;
  +currentEntry: NavigationHistoryEntry | null;
  oncurrententrychange: EventHandler;
  onnavigate: EventHandler;
  onnavigateerror: EventHandler;
  onnavigatesuccess: EventHandler;
  +transition: NavigationTransition | null;

  back(options?: NavigationOptions): NavigationResult;
  entries(): Array<NavigationHistoryEntry>;
  forward(options?: NavigationOptions): NavigationResult;
  navigate(url: string, options?: NavigationNavigateOptions): NavigationResult;
  reload(options?: NavigationReloadOptions): NavigationResult;
  traverseTo(key: string, options?: NavigationOptions): NavigationResult;
  updateCurrentEntry(options: NavigationUpdateCurrentEntryOptions): void;
}

declare class NavigationActivation {
  +entry: NavigationHistoryEntry;
  +from: NavigationHistoryEntry | null;
  +navigationType: NavigationType;
}

declare class NavigationCurrentEntryChangeEvent extends Event {
  +from: NavigationHistoryEntry;
  +navigationType: NavigationType | null;

  constructor(
    type: string,
    eventInitDict: NavigationCurrentEntryChangeEventInit,
  ): void;
}

declare class NavigationDestination {
  +id: string;
  +index: number;
  +key: string;
  +sameDocument: boolean;
  +url: string;

  getState(): any;
}

declare class NavigationHistoryEntry extends EventTarget {
  +id: string;
  +index: number;
  +key: string;
  ondispose: EventHandler;
  +sameDocument: boolean;
  +url: string | null;

  getState(): any;
}

declare class NavigationTransition {
  +finished: void;
  +from: NavigationHistoryEntry;
  +navigationType: NavigationType;
}

declare class Navigator
  mixins
    NavigatorID,
    NavigatorLanguage,
    NavigatorOnLine,
    NavigatorContentUtils,
    NavigatorCookies,
    NavigatorPlugins,
    NavigatorConcurrentHardware {}

declare class NotRestoredReasonDetails {
  +reason: string;

  toJSON(): object;
}

declare class NotRestoredReasons {
  +children: NotRestoredReasons | null;
  +id: string | null;
  +name: string | null;
  +reasons: NotRestoredReasonDetails | null;
  +src: string | null;
  +url: string | null;

  toJSON(): object;
}

declare class OffscreenCanvas extends EventTarget {
  height: number;
  oncontextlost: EventHandler;
  oncontextrestored: EventHandler;
  width: number;

  constructor(width: number, height: number): void;

  convertToBlob(options?: ImageEncodeOptions): Blob;
  getContext(
    contextId: OffscreenRenderingContextId,
    options?: any,
  ): OffscreenRenderingContext | null;
  transferToImageBitmap(): ImageBitmap;
}

declare class OffscreenCanvasRenderingContext2D
  mixins
    CanvasSettings,
    CanvasState,
    CanvasTransform,
    CanvasCompositing,
    CanvasImageSmoothing,
    CanvasFillStrokeStyles,
    CanvasShadowStyles,
    CanvasFilters,
    CanvasRect,
    CanvasDrawPath,
    CanvasText,
    CanvasDrawImage,
    CanvasImageData,
    CanvasPathDrawingStyles,
    CanvasTextDrawingStyles,
    CanvasPath
{
  +canvas: OffscreenCanvas;
}

declare class PageRevealEvent extends Event {
  +viewTransition: ViewTransition | null;

  constructor(type: string, eventInitDict?: PageRevealEventInit): void;
}

declare class PageSwapEvent extends Event {
  +activation: NavigationActivation | null;
  +viewTransition: ViewTransition | null;

  constructor(type: string, eventInitDict?: PageSwapEventInit): void;
}

declare class PageTransitionEvent extends Event {
  +persisted: boolean;

  constructor(type: string, eventInitDict?: PageTransitionEventInit): void;
}

declare class Path2D mixins CanvasPath {
  constructor(path?: Path2D | string): void;

  addPath(path: Path2D, transform?: DOMMatrix2DInit): void;
}

declare class Plugin {
  +description: string;
  +filename: string;
  +length: number;
  +name: string;

  item(index: number): MimeType | null;
  namedItem(name: string): MimeType | null;
}

declare class PluginArray {
  +length: number;

  refresh(): void;
  item(index: number): Plugin | null;
  namedItem(name: string): Plugin | null;
}

declare class PopStateEvent extends Event {
  +hasUAVisualTransition: boolean;
  +state: any;

  constructor(type: string, eventInitDict?: PopStateEventInit): void;
}

declare class PromiseRejectionEvent extends Event {
  +promise: object;
  +reason: any;

  constructor(type: string, eventInitDict: PromiseRejectionEventInit): void;
}

declare class RadioNodeList extends NodeList {
  value: string;
}

declare class SharedWorker extends EventTarget mixins AbstractWorker {
  +port: MessagePort;

  constructor(
    scriptURL: TrustedScriptURL | string,
    options?: string | WorkerOptions,
  ): void;
}

declare class SharedWorkerGlobalScope extends WorkerGlobalScope {
  +name: string;
  onconnect: EventHandler;

  close(): void;
}

declare class Storage {
  +length: number;

  key(index: number): string | null;
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
  clear(): void;
}

declare class StorageEvent extends Event {
  +key: string | null;
  +newValue: string | null;
  +oldValue: string | null;
  +storageArea: Storage | null;
  +url: string;

  constructor(type: string, eventInitDict?: StorageEventInit): void;

  initStorageEvent(
    type: string,
    bubbles?: boolean,
    cancelable?: boolean,
    key?: string | null,
    oldValue?: string | null,
    newValue?: string | null,
    url?: string,
    storageArea?: Storage | null,
  ): void;
}

declare class SubmitEvent extends Event {
  +submitter: HTMLElement | null;

  constructor(type: string, eventInitDict?: SubmitEventInit): void;
}

declare class TextMetrics {
  +actualBoundingBoxAscent: double;
  +actualBoundingBoxDescent: double;
  +actualBoundingBoxLeft: double;
  +actualBoundingBoxRight: double;
  +alphabeticBaseline: double;
  +emHeightAscent: double;
  +emHeightDescent: double;
  +fontBoundingBoxAscent: double;
  +fontBoundingBoxDescent: double;
  +hangingBaseline: double;
  +ideographicBaseline: double;
  +width: double;
}

declare class TextTrack extends EventTarget {
  +activeCues: TextTrackCueList | null;
  +cues: TextTrackCueList | null;
  +id: string;
  +inBandMetadataTrackDispatchType: string;
  +kind: TextTrackKind;
  +label: string;
  +language: string;
  mode: TextTrackMode;
  oncuechange: EventHandler;

  addCue(cue: TextTrackCue): void;
  removeCue(cue: TextTrackCue): void;
}

declare class TextTrackCue extends EventTarget {
  endTime: number;
  id: string;
  onenter: EventHandler;
  onexit: EventHandler;
  pauseOnExit: boolean;
  startTime: double;
  +track: TextTrack | null;
}

declare class TextTrackCueList {
  +length: number;

  (index: number): TextTrackCue;
  getCueById(id: string): TextTrackCue | null;
}

declare class TextTrackList extends EventTarget {
  +length: number;
  onaddtrack: EventHandler;
  onchange: EventHandler;
  onremovetrack: EventHandler;

  (index: number): TextTrack;
  getTrackById(id: string): TextTrack | null;
}

declare class TimeRanges {
  +length: number;

  end(index: number): double;
  start(index: number): double;
}

declare class ToggleEvent extends Event {
  +newState: string;
  +oldState: string;

  constructor(type: string, eventInitDict?: ToggleEventInit): void;
}

declare class TrackEvent extends Event {
  +track: VideoTrack | AudioTrack | TextTrack | null;

  constructor(type: string, eventInitDict?: TrackEventInit): void;
}

declare class UserActivation {
  +hasBeenActive: boolean;
  +isActive: boolean;
}

declare class ValidityState {
  +badInput: boolean;
  +customError: boolean;
  +patternMismatch: boolean;
  +rangeOverflow: boolean;
  +rangeUnderflow: boolean;
  +stepMismatch: boolean;
  +tooLong: boolean;
  +tooShort: boolean;
  +typeMismatch: boolean;
  +valid: boolean;
  +valueMissing: boolean;
}

declare class VideoTrack {
  +id: string;
  +kind: string;
  +label: string;
  +language: string;
  selected: boolean;
}

declare class VideoTrackList extends EventTarget {
  +length: number;
  onaddtrack: EventHandler;
  onchange: EventHandler;
  onremovetrack: EventHandler;
  +selectedIndex: number;

  (index: number): VideoTrack;
  getTrackById(id: string): VideoTrack | null;
}

declare class VisibilityStateEntry extends PerformanceEntry {
  +duration: number;
  +entryType: string;
  +name: string;
  +startTime: number;
}

declare class Window
  extends EventTarget
  mixins
    GlobalEventHandlers,
    WindowEventHandlers,
    WindowOrWorkerGlobalScope,
    AnimationFrameProvider,
    WindowSessionStorage,
    WindowLocalStorage
{
  +clientInformation: Navigator;
  +closed: boolean;
  +customElements: CustomElementRegistry;
  +document: Document;
  +frameElement: Element | null;
  +frames: WindowProxy;
  +history: History;
  +length: number;
  +location: Location;
  +locationbar: BarProp;
  +menubar: BarProp;
  name: string;
  +navigation: Navigation;
  +navigator: Navigator;
  opener: any;
  +originAgentCluster: boolean;
  +parent: WindowProxy | null;
  +personalbar: BarProp;
  +scrollbars: BarProp;
  +self: WindowProxy;
  status: string;
  +statusbar: BarProp;
  +toolbar: BarProp;
  +top: WindowProxy | null;
  +window: WindowProxy;

  alert(): void;
  alert(message: string): void;
  blur(): void;
  close(): void;
  confirm(message?: string): boolean;
  focus(): void;
  open(url?: string, target?: string, features?: string): WindowProxy | null;
  postMessage(
    message: any,
    targetOrigin: string,
    transfer?: Array<object>,
  ): void;
  postMessage(message: any, options?: WindowPostMessageOptions): void;
  print(): void;
  prompt(message?: string, default_?: string): string | null;
  stop(): void;
  (name: string): object;
}

declare class Worker
  extends EventTarget
  mixins AbstractWorker, MessageEventTarget
{
  constructor(
    scriptURL: TrustedScriptURL | string,
    options?: WorkerOptions,
  ): void;

  postMessage(message: any, transfer: Array<object>): void;
  postMessage(message: any, options?: StructuredSerializeOptions): void;
  terminate(): void;
}

declare class WorkerGlobalScope
  extends EventTarget
  mixins WindowOrWorkerGlobalScope
{
  +location: WorkerLocation;
  +navigator: WorkerNavigator;
  onerror: OnErrorEventHandler;
  onlanguagechange: EventHandler;
  onoffline: EventHandler;
  ononline: EventHandler;
  onrejectionhandled: EventHandler;
  onunhandledrejection: EventHandler;
  +self: WorkerGlobalScope;

  importScripts(urls: TrustedScriptURL | string): void;
}

declare class WorkerLocation {
  +hash: string;
  +host: string;
  +hostname: string;
  +href: string;
  +origin: string;
  +pathname: string;
  +port: string;
  +protocol: string;
  +search: string;
}

declare class WorkerNavigator
  mixins
    NavigatorID,
    NavigatorLanguage,
    NavigatorOnLine,
    NavigatorConcurrentHardware {}

declare class Worklet {
  addModule(moduleURL: string, options?: WorkletOptions): void;
}

declare class WorkletGlobalScope {}

declare class XMLSerializer {
  constructor(): void;

  serializeToString(root: Node): string;
}

type BlobCallback = (blob: Blob | null) => void;

type CustomElementConstructor = () => HTMLElement;

type EventHandlerNonNull = (event: Event) => any;

type FrameRequestCallback = (time: number) => void;

type FunctionStringCallback = (data: string) => void;

type NavigationInterceptHandler = () => void;

type OnBeforeUnloadEventHandlerNonNull = (event: Event) => string | null;

type OnErrorEventHandlerNonNull = (
  event: Event | string,
  source?: string,
  lineno?: number,
  colno?: number,
  error?: any,
) => any;
