type AllowSharedBufferSource =
  | ArrayBuffer
  | SharedArrayBuffer
  | ArrayBufferView;

type ArrayBufferView =
  | Int8Array
  | Int16Array
  | Int32Array
  | Uint8Array
  | Uint16Array
  | Uint32Array
  | Uint8ClampedArray
  | BigInt64Array
  | BigUint64Array
  | Float16Array
  | Float32Array
  | Float64Array
  | DataView;

type BufferSource = ArrayBufferView | ArrayBuffer;

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

type ShadowRootMode = 'open' | 'closed';

type SlotAssignmentMode = 'manual' | 'named';

type TextTrackKind =
  | 'subtitles'
  | 'captions'
  | 'descriptions'
  | 'chapters'
  | 'metadata';

type TextTrackMode = 'disabled' | 'hidden' | 'showing';

type WorkerType = 'classic' | 'module';

type AddEventListenerOptions = {
  passive: boolean,
  once: boolean,
  signal: AbortSignal,
};

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

type CSSStyleSheetInit = {
  baseURL: string,
  media: MediaList | string,
  disabled: boolean,
};

type CustomEventInit = {
  detail: any,
};

type DragEventInit = {
  dataTransfer: DataTransfer | null,
};

type ElementCreationOptions = {
  is: string,
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

type EventInit = {
  bubbles: boolean,
  cancelable: boolean,
  composed: boolean,
};

type EventListenerOptions = {
  capture: boolean,
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

type GetRootNodeOptions = {
  composed: boolean,
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

type MutationObserverInit = {
  childList: boolean,
  attributes: boolean,
  characterData: boolean,
  subtree: boolean,
  attributeOldValue: boolean,
  characterDataOldValue: boolean,
  attributeFilter: Array<string>,
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
  promise: Object,
  reason: any,
};

type ShadowRootInit = {
  mode: ShadowRootMode,
  delegatesFocus: boolean,
  slotAssignment: SlotAssignmentMode,
  clonable: boolean,
  serializable: boolean,
};

type ShowPopoverOptions = {
  source: HTMLElement,
};

type StaticRangeInit = {
  startContainer: Node,
  startOffset: number,
  endContainer: Node,
  endOffset: number,
};

type StorageEventInit = {
  key: string | null,
  oldValue: string | null,
  newValue: string | null,
  url: string,
  storageArea: Storage | null,
};

type StructuredSerializeOptions = {
  transfer: Array<Object>,
};

type SubmitEventInit = {
  submitter: HTMLElement | null,
};

type SVGBoundingBoxOptions = {
  fill: boolean,
  stroke: boolean,
  markers: boolean,
  clipped: boolean,
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

type BlobCallback = (blob: Blob | null) => void;

type CustomElementConstructor = () => HTMLElement;

type EventHandler = (event: Event) => any;

type EventHandlerNonNull = (event: Event) => any;

type FrameRequestCallback = (time: number) => void;

type FunctionStringCallback = (data: string) => void;

type MutationCallback = (
  mutations: Array<MutationRecord>,
  observer: MutationObserver,
) => void;

type NavigationInterceptHandler = () => void;

type OnBeforeUnloadEventHandlerNonNull = (event: Event) => string | null;

type OnErrorEventHandlerNonNull = (
  event: Event | string,
  source?: string,
  lineno?: number,
  colno?: number,
  error?: any,
) => any;

type VoidFunction = () => void;

/* mixin */ declare class mixin$AbstractWorker {
  onerror: EventHandler;
}

/* mixin */ declare class mixin$AnimationFrameProvider {
  cancelAnimationFrame(handle: number): void;
  requestAnimationFrame(callback: FrameRequestCallback): number;
}

/* mixin */ declare class mixin$CanvasCompositing {
  globalAlpha: number;
  globalCompositeOperation: string;
}

/* mixin */ declare class mixin$CanvasDrawImage {
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

/* mixin */ declare class mixin$CanvasDrawPath {
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

/* mixin */ declare class mixin$CanvasFillStrokeStyles {
  fillStyle: string | CanvasGradient | CanvasPattern;
  strokeStyle: string | CanvasGradient | CanvasPattern;

  createConicGradient(startAngle: number, x: number, y: number): CanvasGradient;
  createLinearGradient(
    x0: number,
    y0: number,
    x1: number,
    y1: number,
  ): CanvasGradient;
  createPattern(
    image: CanvasImageSource,
    repetition: string,
  ): CanvasPattern | null;
  createRadialGradient(
    x0: number,
    y0: number,
    r0: number,
    x1: number,
    y1: number,
    r1: number,
  ): CanvasGradient;
}

/* mixin */ declare class mixin$CanvasFilters {
  filter: string;
}

/* mixin */ declare class mixin$CanvasImageData {
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

/* mixin */ declare class mixin$CanvasImageSmoothing {
  imageSmoothingEnabled: boolean;
  imageSmoothingQuality: ImageSmoothingQuality;
}

/* mixin */ declare class mixin$CanvasPath {
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

/* mixin */ declare class mixin$CanvasPathDrawingStyles {
  lineCap: CanvasLineCap;
  lineDashOffset: number;
  lineJoin: CanvasLineJoin;
  lineWidth: number;
  miterLimit: number;

  getLineDash(): Array<number>;
  setLineDash(segments: Array<number>): void;
}

/* mixin */ declare class mixin$CanvasRect {
  clearRect(x: number, y: number, w: number, h: number): void;
  fillRect(x: number, y: number, w: number, h: number): void;
  strokeRect(x: number, y: number, w: number, h: number): void;
}

/* mixin */ declare class mixin$CanvasSettings {
  getContextAttributes(): CanvasRenderingContext2DSettings;
}

/* mixin */ declare class mixin$CanvasShadowStyles {
  shadowBlur: number;
  shadowColor: string;
  shadowOffsetX: number;
  shadowOffsetY: number;
}

/* mixin */ declare class mixin$CanvasState {
  isContextLost(): boolean;
  reset(): void;
  restore(): void;
  save(): void;
}

/* mixin */ declare class mixin$CanvasText {
  fillText(text: string, x: number, y: number, maxWidth?: number): void;
  measureText(text: string): TextMetrics;
  strokeText(text: string, x: number, y: number, maxWidth?: number): void;
}

/* mixin */ declare class mixin$CanvasTextDrawingStyles {
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

/* mixin */ declare class mixin$CanvasTransform {
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

/* mixin */ declare class mixin$CanvasUserInterface {
  drawFocusIfNeeded(element: Element): void;
  drawFocusIfNeeded(path: Path2D, element: Element): void;
}

/* mixin */ declare class mixin$ChildNode {
  after(nodes: Node | string): void;
  before(nodes: Node | string): void;
  remove(): void;
  replaceWith(nodes: Node | string): void;
}

/* partial mixin */ declare class mixin$DocumentOrShadowRoot {
  adoptedStyleSheets: CSSStyleSheet;
  +styleSheets: StyleSheetList;
}

/* mixin */ declare class mixin$DocumentOrShadowRoot {}

/* partial mixin */ declare class mixin$DocumentOrShadowRoot {
  +activeElement: Element | null;
}

/* mixin */ declare class mixin$ElementContentEditable {
  contentEditable: string;
  enterKeyHint: string;
  inputMode: string;
  +isContentEditable: boolean;
}

/* mixin */ declare class mixin$ElementCSSInlineStyle {
  +style: CSSStyleDeclaration;
}

/* mixin */ declare class mixin$GetSVGDocument {
  getSVGDocument(): Document;
}

/* mixin */ declare class mixin$GlobalEventHandlers {
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

/* mixin */ declare class mixin$HTMLHyperlinkElementUtils {
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

/* mixin */ declare class mixin$HTMLOrSVGElement {
  autofocus: boolean;
  +dataset: DOMStringMap;
  nonce: string;
  tabIndex: number;

  blur(): void;
  focus(options?: FocusOptions): void;
}

/* mixin */ declare class mixin$LinkStyle {
  +sheet: CSSStyleSheet | null;
}

/* mixin */ declare class mixin$MessageEventTarget {
  onmessage: EventHandler;
  onmessageerror: EventHandler;
}

/* mixin */ declare class mixin$NavigatorConcurrentHardware {
  +hardwareConcurrency: number;
}

/* mixin */ declare class mixin$NavigatorContentUtils {
  registerProtocolHandler(scheme: string, url: string): void;
  unregisterProtocolHandler(scheme: string, url: string): void;
}

/* mixin */ declare class mixin$NavigatorCookies {
  +cookieEnabled: boolean;
}

/* mixin */ declare class mixin$NavigatorID {
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

/* partial mixin */ declare class mixin$NavigatorID {
  +oscpu: string;

  taintEnabled(): boolean;
}

/* mixin */ declare class mixin$NavigatorLanguage {
  +language: string;
  +languages: string;
}

/* mixin */ declare class mixin$NavigatorOnLine {
  +onLine: boolean;
}

/* mixin */ declare class mixin$NavigatorPlugins {
  +mimeTypes: MimeTypeArray;
  +pdfViewerEnabled: boolean;
  +plugins: PluginArray;

  javaEnabled(): boolean;
}

/* mixin */ declare class mixin$NonDocumentTypeChildNode {
  +nextElementSibling: Element | null;
  +previousElementSibling: Element | null;
}

/* mixin */ declare class mixin$NonElementParentNode {
  getElementById(elementId: string): Element | null;
}

/* mixin */ declare class mixin$ParentNode {
  +childElementCount: number;
  +children: HTMLCollection;
  +firstElementChild: Element | null;
  +lastElementChild: Element | null;

  append(nodes: Node | string): void;
  moveBefore(node: Node, child: Node | null): void;
  prepend(nodes: Node | string): void;
  querySelector(selectors: string): Element | null;
  querySelectorAll(selectors: string): NodeList;
  replaceChildren(nodes: Node | string): void;
}

/* mixin */ declare class mixin$PopoverInvokerElement {
  popoverTargetAction: string;
  popoverTargetElement: Element | null;
}

/* mixin */ declare class mixin$Slottable {
  +assignedSlot: HTMLSlotElement | null;
}

/* mixin */ declare class mixin$SVGAnimatedPoints {
  +animatedPoints: SVGPointList;
  +points: SVGPointList;
}

/* mixin */ declare class mixin$SVGCSSRule {}

/* mixin */ declare class mixin$SVGElementInstance {
  +correspondingElement: SVGElement | null;
  +correspondingUseElement: SVGUseElement | null;
}

/* mixin */ declare class mixin$SVGExternalResourcesRequired {
  +externalResourcesRequired: SVGAnimatedBoolean;
}

/* mixin */ declare class mixin$SVGFitToViewBox {
  +preserveAspectRatio: SVGAnimatedPreserveAspectRatio;
  +viewBox: SVGAnimatedRect;
}

/* mixin */ declare class mixin$SVGLangSpace {
  xmllang: string;
  xmlspace: string;
}

/* mixin */ declare class mixin$SVGLocatable {
  +farthestViewportElement: SVGElement;
  +nearestViewportElement: SVGElement;

  getBBox(): SVGRect;
  getCTM(): SVGMatrix;
  getScreenCTM(): SVGMatrix;
  getTransformToElement(element: SVGElement): SVGMatrix;
}

/* mixin */ declare class mixin$SVGStylable {
  +className: SVGAnimatedString;
  +style: CSSStyleDeclaration;

  getPresentationAttribute(name: string): CSSValue;
}

/* mixin */ declare class mixin$SVGTests {
  +requiredExtensions: SVGStringList;
  +requiredFeatures: SVGStringList;
  +systemLanguage: SVGStringList;

  hasExtension(extension: string): boolean;
}

/* mixin */ declare class mixin$SVGTransformable {
  +transform: SVGAnimatedTransformList;
}

/* mixin */ declare class mixin$SVGURIReference {
  +href: SVGAnimatedString;
}

/* mixin */ declare class mixin$SVGViewSpec {
  +preserveAspectRatioString: string;
  +transform: SVGTransformList;
  +transformString: string;
  +viewBoxString: string;
  +viewTarget: SVGElement;
  +viewTargetString: string;
}

/* mixin */ declare class mixin$SVGZoomAndPan {
  zoomAndPan: number;
}

/* mixin */ declare class mixin$WindowEventHandlers {
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

/* mixin */ declare class mixin$WindowLocalStorage {
  +localStorage: Storage;
}

/* mixin */ declare class mixin$WindowOrWorkerGlobalScope {
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
  setInterval(handler: TimerHandler, timeout?: number, arguments_: any): number;
  setTimeout(handler: TimerHandler, timeout?: number, arguments_: any): number;
  structuredClone(value: any, options?: StructuredSerializeOptions): any;
}

/* mixin */ declare class mixin$WindowSessionStorage {
  +sessionStorage: Storage;
}

/* mixin */ declare class mixin$XPathEvaluatorBase {
  createExpression(
    expression: string,
    resolver?: XPathNSResolver | null,
  ): XPathExpression;
  createNSResolver(nodeResolver: Node): Node;
  evaluate(
    expression: string,
    contextNode: Node,
    resolver?: XPathNSResolver | null,
    type?: number,
    result?: XPathResult | null,
  ): XPathResult;
}

interface EventListener {
  handleEvent(event: Event): void;
}

declare class NodeFilter {
  static +FILTER_ACCEPT: 1;
  static +FILTER_REJECT: 2;
  static +FILTER_SKIP: 3;
  static +SHOW_ALL: 0xffffffff;
  static +SHOW_ATTRIBUTE: 0x2;
  static +SHOW_CDATA_SECTION: 0x8;
  static +SHOW_COMMENT: 0x80;
  static +SHOW_DOCUMENT: 0x100;
  static +SHOW_DOCUMENT_FRAGMENT: 0x400;
  static +SHOW_DOCUMENT_TYPE: 0x200;
  static +SHOW_ELEMENT: 0x1;
  static +SHOW_ENTITY: 0x20;
  static +SHOW_ENTITY_REFERENCE: 0x10;
  static +SHOW_NOTATION: 0x800;
  static +SHOW_PROCESSING_INSTRUCTION: 0x40;
  static +SHOW_TEXT: 0x4;

  acceptNode(node: Node): number;
}

interface XPathNSResolver {
  lookupNamespaceURI(prefix: string | null): string | null;
}

declare class AbortController {
  +signal: AbortSignal;

  constructor(): void;

  abort(reason?: any): void;
}

declare class AbortSignal extends EventTarget {
  +aborted: boolean;
  onabort: EventHandler;
  +reason: any;

  static abort(reason?: any): AbortSignal;
  static any(signals: Array<AbortSignal>): AbortSignal;
  static timeout(milliseconds: number): AbortSignal;
  throwIfAborted(): void;
}

declare class AbstractRange {
  +collapsed: boolean;
  +endContainer: Node;
  +endOffset: number;
  +startContainer: Node;
  +startOffset: number;
}

declare class Attr extends Node {
  +localName: string;
  +name: string;
  +namespaceURI: string | null;
  +ownerElement: Element | null;
  +prefix: string | null;
  +specified: boolean;
  value: string;
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
  addColorStop(offset: number, color: string): void;
}

declare class CanvasPattern {
  setTransform(transform?: DOMMatrix2DInit): void;
}

declare class CanvasRenderingContext2D
  mixins
    mixin$CanvasSettings,
    mixin$CanvasState,
    mixin$CanvasTransform,
    mixin$CanvasCompositing,
    mixin$CanvasImageSmoothing,
    mixin$CanvasFillStrokeStyles,
    mixin$CanvasShadowStyles,
    mixin$CanvasFilters,
    mixin$CanvasRect,
    mixin$CanvasDrawPath,
    mixin$CanvasUserInterface,
    mixin$CanvasText,
    mixin$CanvasDrawImage,
    mixin$CanvasImageData,
    mixin$CanvasPathDrawingStyles,
    mixin$CanvasTextDrawingStyles,
    mixin$CanvasPath
{
  +canvas: HTMLCanvasElement;
}

declare class CDATASection extends Text {}

declare class CharacterData
  extends Node
  mixins mixin$NonDocumentTypeChildNode, mixin$ChildNode
{
  data: string;
  +length: number;

  appendData(data: string): void;
  deleteData(offset: number, count: number): void;
  insertData(offset: number, data: string): void;
  replaceData(offset: number, count: number, data: string): void;
  substringData(offset: number, count: number): string;
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

declare class Comment extends CharacterData {
  constructor(data?: string): void;
}

declare class CSSGroupingRule extends CSSRule {
  +cssRules: CSSRuleList;

  deleteRule(index: number): void;
  insertRule(rule: string, index?: number): number;
}

declare class CSSImportRule extends CSSRule {
  +href: string;
  +media: MediaList;
  +styleSheet: CSSStyleSheet;
}

declare class CSSMarginRule extends CSSRule {
  +name: string;
  +style: CSSStyleDeclaration;
}

declare class CSSNamespaceRule extends CSSRule {
  +namespaceURI: string;
  +prefix: string;
}

declare class CSSPageRule extends CSSGroupingRule {
  selectorText: string;
  +style: CSSStyleDeclaration;
}

declare class CSSRule {
  static +CHARSET_RULE: 2;
  static +FONT_FACE_RULE: 5;
  static +IMPORT_RULE: 3;
  static +MARGIN_RULE: 9;
  static +MEDIA_RULE: 4;
  static +NAMESPACE_RULE: 10;
  static +PAGE_RULE: 6;
  static +STYLE_RULE: 1;

  cssText: string;
  +parentRule: CSSRule | null;
  +parentStyleSheet: CSSStyleSheet | null;
  +type: number;
}

declare class CSSRuleList {
  +length: number;

  item(index: number): CSSRule | null;
}

declare class CSSStyleDeclaration {
  cssFloat: string;
  cssText: string;
  +length: number;
  +parentRule: CSSRule | null;

  item(index: number): string;
  getPropertyPriority(property: string): string;
  getPropertyValue(property: string): string;
  removeProperty(property: string): string;
  setProperty(property: string, value: string, priority?: string): void;
}

declare class CSSStyleRule extends CSSRule {
  selectorText: string;
  +style: CSSStyleDeclaration;
}

declare class CSSStyleSheet extends StyleSheet {
  +cssRules: CSSRuleList;
  +ownerRule: CSSRule | null;

  constructor(options?: CSSStyleSheetInit): void;

  deleteRule(index: number): void;
  insertRule(rule: string, index?: number): number;
  replace(text: string): CSSStyleSheet;
  replaceSync(text: string): void;
}

/* partial */ interface CSSStyleSheet {
  +rules: CSSRuleList;

  addRule(selector?: string, style?: string, index?: number): number;
  removeRule(index?: number): void;
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

declare class CustomEvent extends Event {
  +detail: any;

  constructor(type: string, eventInitDict?: CustomEventInit): void;

  initCustomEvent(
    type: string,
    bubbles?: boolean,
    cancelable?: boolean,
    detail?: any,
  ): void;
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
  mixins mixin$AnimationFrameProvider, mixin$MessageEventTarget
{
  +name: string;

  close(): void;
  postMessage(message: any, transfer: Array<Object>): void;
  postMessage(message: any, options?: StructuredSerializeOptions): void;
}

declare class Document
  extends Node
  mixins
    mixin$NonElementParentNode,
    mixin$DocumentOrShadowRoot,
    mixin$ParentNode,
    mixin$XPathEvaluatorBase,
    mixin$GlobalEventHandlers
{
  +characterSet: string;
  +charset: string;
  +compatMode: string;
  +contentType: string;
  +doctype: DocumentType | null;
  +documentElement: Element | null;
  +documentURI: string;
  +implementation: DOMImplementation;
  +inputEncoding: string;
  +URL: string;

  constructor(): void;

  adoptNode(node: Node): Node;
  createAttribute(localName: string): Attr;
  createAttributeNS(namespace: string | null, qualifiedName: string): Attr;
  createCDATASection(data: string): CDATASection;
  createComment(data: string): Comment;
  createDocumentFragment(): DocumentFragment;
  createElement(
    localName: string,
    options?: string | ElementCreationOptions,
  ): Element;
  createElementNS(
    namespace: string | null,
    qualifiedName: string,
    options?: string | ElementCreationOptions,
  ): Element;
  createEvent(interface_: string): Event;
  createNodeIterator(
    root: Node,
    whatToShow?: number,
    filter?: NodeFilter | null,
  ): NodeIterator;
  createProcessingInstruction(
    target: string,
    data: string,
  ): ProcessingInstruction;
  createRange(): Range;
  createTextNode(data: string): Text;
  createTreeWalker(
    root: Node,
    whatToShow?: number,
    filter?: NodeFilter | null,
  ): TreeWalker;
  getElementsByClassName(classNames: string): HTMLCollection;
  getElementsByTagName(qualifiedName: string): HTMLCollection;
  getElementsByTagNameNS(
    namespace: string | null,
    localName: string,
  ): HTMLCollection;
  importNode(node: Node, subtree?: boolean): Node;
}

/* partial */ declare class Document
  mixins
    mixin$NonElementParentNode,
    mixin$DocumentOrShadowRoot,
    mixin$ParentNode,
    mixin$XPathEvaluatorBase,
    mixin$GlobalEventHandlers
{
  body: HTMLElement | null;
  cookie: string;
  +currentScript: HTMLOrSVGScriptElement | null;
  +defaultView: WindowProxy | null;
  designMode: string;
  dir: string;
  domain: string;
  +embeds: HTMLCollection;
  +forms: HTMLCollection;
  +head: HTMLHeadElement | null;
  +hidden: boolean;
  +images: HTMLCollection;
  +lastModified: string;
  +links: HTMLCollection;
  +location: Location | null;
  onreadystatechange: EventHandler;
  onvisibilitychange: EventHandler;
  +plugins: HTMLCollection;
  +readyState: DocumentReadyState;
  +referrer: string;
  +scripts: HTMLCollection;
  title: string;
  +visibilityState: DocumentVisibilityState;

  static parseHTMLUnsafe(html: TrustedHTML | string): Document;
  (name: string): Object;
  close(): void;
  execCommand(commandId: string, showUI?: boolean, value?: string): boolean;
  getElementsByName(elementName: string): NodeList;
  hasFocus(): boolean;
  open(unused1?: string, unused2?: string): Document;
  open(url: string, name: string, features: string): WindowProxy | null;
  queryCommandEnabled(commandId: string): boolean;
  queryCommandIndeterm(commandId: string): boolean;
  queryCommandState(commandId: string): boolean;
  queryCommandSupported(commandId: string): boolean;
  queryCommandValue(commandId: string): string;
  write(text: TrustedHTML | string): void;
  writeln(text: TrustedHTML | string): void;
}

/* partial */ declare class Document
  mixins
    mixin$NonElementParentNode,
    mixin$DocumentOrShadowRoot,
    mixin$ParentNode,
    mixin$XPathEvaluatorBase,
    mixin$GlobalEventHandlers
{
  alinkColor: string;
  +all: HTMLAllCollection;
  +anchors: HTMLCollection;
  +applets: HTMLCollection;
  bgColor: string;
  fgColor: string;
  linkColor: string;
  vlinkColor: string;

  captureEvents(): void;
  clear(): void;
  releaseEvents(): void;
}

/* partial */ declare class Document
  mixins
    mixin$NonElementParentNode,
    mixin$DocumentOrShadowRoot,
    mixin$ParentNode,
    mixin$XPathEvaluatorBase,
    mixin$GlobalEventHandlers
{
  +rootElement: SVGSVGElement | null;
}

declare class DocumentFragment
  extends Node
  mixins mixin$NonElementParentNode, mixin$ParentNode
{
  constructor(): void;
}

declare class DocumentType extends Node mixins mixin$ChildNode {
  +name: string;
  +publicId: string;
  +systemId: string;
}

declare class DOMException {
  static +ABORT_ERR: 20;
  static +DATA_CLONE_ERR: 25;
  static +DOMSTRING_SIZE_ERR: 2;
  static +HIERARCHY_REQUEST_ERR: 3;
  static +INDEX_SIZE_ERR: 1;
  static +INUSE_ATTRIBUTE_ERR: 10;
  static +INVALID_ACCESS_ERR: 15;
  static +INVALID_CHARACTER_ERR: 5;
  static +INVALID_MODIFICATION_ERR: 13;
  static +INVALID_NODE_TYPE_ERR: 24;
  static +INVALID_STATE_ERR: 11;
  static +NAMESPACE_ERR: 14;
  static +NETWORK_ERR: 19;
  static +NO_DATA_ALLOWED_ERR: 6;
  static +NO_MODIFICATION_ALLOWED_ERR: 7;
  static +NOT_FOUND_ERR: 8;
  static +NOT_SUPPORTED_ERR: 9;
  static +QUOTA_EXCEEDED_ERR: 22;
  static +SECURITY_ERR: 18;
  static +SYNTAX_ERR: 12;
  static +TIMEOUT_ERR: 23;
  static +TYPE_MISMATCH_ERR: 17;
  static +URL_MISMATCH_ERR: 21;
  static +VALIDATION_ERR: 16;
  static +WRONG_DOCUMENT_ERR: 4;

  +code: number;
  +message: string;
  +name: string;

  constructor(message?: string, name?: string): void;
}

declare class DOMImplementation {
  createDocument(
    namespace: string | null,
    qualifiedName: string,
    doctype?: DocumentType | null,
  ): XMLDocument;
  createDocumentType(
    qualifiedName: string,
    publicId: string,
    systemId: string,
  ): DocumentType;
  createHTMLDocument(title?: string): Document;
  hasFeature(): boolean;
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

declare class DOMTokenList {
  +length: number;
  value: string;

  @@iterator(): Iterator<string>;

  item(index: number): string | null;
  add(tokens: string): void;
  contains(token: string): boolean;
  remove(tokens: string): void;
  replace(token: string, newToken: string): boolean;
  supports(token: string): boolean;
  toggle(token: string, force?: boolean): boolean;
}

declare class DragEvent extends MouseEvent {
  +dataTransfer: DataTransfer | null;

  constructor(type: string, eventInitDict?: DragEventInit): void;
}

declare class Element
  extends Node
  mixins
    mixin$ParentNode,
    mixin$NonDocumentTypeChildNode,
    mixin$ChildNode,
    mixin$Slottable
{
  +attributes: NamedNodeMap;
  +classList: DOMTokenList;
  className: string;
  id: string;
  +localName: string;
  +namespaceURI: string | null;
  +prefix: string | null;
  +shadowRoot: ShadowRoot | null;
  slot: string;
  +tagName: string;

  attachShadow(init: ShadowRootInit): ShadowRoot;
  closest(selectors: string): Element | null;
  getAttribute(qualifiedName: string): string | null;
  getAttributeNames(): Array<string>;
  getAttributeNode(qualifiedName: string): Attr | null;
  getAttributeNodeNS(namespace: string | null, localName: string): Attr | null;
  getAttributeNS(namespace: string | null, localName: string): string | null;
  getElementsByClassName(classNames: string): HTMLCollection;
  getElementsByTagName(qualifiedName: string): HTMLCollection;
  getElementsByTagNameNS(
    namespace: string | null,
    localName: string,
  ): HTMLCollection;
  hasAttribute(qualifiedName: string): boolean;
  hasAttributeNS(namespace: string | null, localName: string): boolean;
  hasAttributes(): boolean;
  insertAdjacentElement(where: string, element: Element): Element | null;
  insertAdjacentText(where: string, data: string): void;
  matches(selectors: string): boolean;
  removeAttribute(qualifiedName: string): void;
  removeAttributeNode(attr: Attr): Attr;
  removeAttributeNS(namespace: string | null, localName: string): void;
  setAttribute(qualifiedName: string, value: string): void;
  setAttributeNode(attr: Attr): Attr | null;
  setAttributeNodeNS(attr: Attr): Attr | null;
  setAttributeNS(
    namespace: string | null,
    qualifiedName: string,
    value: string,
  ): void;
  toggleAttribute(qualifiedName: string, force?: boolean): boolean;
  webkitMatchesSelector(selectors: string): boolean;
}

/* partial */ declare class Element
  mixins
    mixin$ParentNode,
    mixin$NonDocumentTypeChildNode,
    mixin$ChildNode,
    mixin$Slottable
{
  innerHTML: TrustedHTML | string;
  outerHTML: TrustedHTML | string;

  getHTML(options?: GetHTMLOptions): string;
  insertAdjacentHTML(position: string, string: TrustedHTML | string): void;
  setHTMLUnsafe(html: TrustedHTML | string): void;
}

declare class ElementInternals mixins mixin$ARIAMixin {
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

declare class Event {
  static +AT_TARGET: 2;
  static +BUBBLING_PHASE: 3;
  static +CAPTURING_PHASE: 1;
  static +NONE: 0;

  +bubbles: boolean;
  +cancelable: boolean;
  cancelBubble: boolean;
  +composed: boolean;
  +currentTarget: EventTarget | null;
  +defaultPrevented: boolean;
  +eventPhase: number;
  +isTrusted: boolean;
  returnValue: boolean;
  +srcElement: EventTarget | null;
  +target: EventTarget | null;
  +timeStamp: number;
  +type: string;

  constructor(type: string, eventInitDict?: EventInit): void;

  composedPath(): Array<EventTarget>;
  initEvent(type: string, bubbles?: boolean, cancelable?: boolean): void;
  preventDefault(): void;
  stopImmediatePropagation(): void;
  stopPropagation(): void;
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

declare class EventTarget {
  constructor(): void;

  addEventListener(
    type: string,
    callback: EventListener | null,
    options?: AddEventListenerOptions | boolean,
  ): void;
  dispatchEvent(event: Event): boolean;
  removeEventListener(
    type: string,
    callback: EventListener | null,
    options?: EventListenerOptions | boolean,
  ): void;
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
  mixins mixin$HTMLHyperlinkElementUtils
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

/* partial */ declare class HTMLAnchorElement
  mixins mixin$HTMLHyperlinkElementUtils
{
  charset: string;
  coords: string;
  name: string;
  rev: string;
  shape: string;
}

declare class HTMLAreaElement
  extends HTMLElement
  mixins mixin$HTMLHyperlinkElementUtils
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

/* partial */ declare class HTMLAreaElement
  mixins mixin$HTMLHyperlinkElementUtils
{
  noHref: boolean;
}

declare class HTMLAudioElement extends HTMLMediaElement {
  constructor(): void;
}

declare class HTMLBaseElement extends HTMLElement {
  href: string;
  target: string;

  constructor(): void;
}

declare class HTMLBodyElement
  extends HTMLElement
  mixins mixin$WindowEventHandlers
{
  constructor(): void;
}

/* partial */ declare class HTMLBodyElement mixins mixin$WindowEventHandlers {
  aLink: string;
  background: string;
  bgColor: string;
  link: string;
  text: string;
  vLink: string;
}

declare class HTMLBRElement extends HTMLElement {
  constructor(): void;
}

/* partial */ interface HTMLBRElement {
  clear: string;
}

declare class HTMLButtonElement
  extends HTMLElement
  mixins mixin$PopoverInvokerElement
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

declare class HTMLCollection {
  +length: number;

  item(index: number): Element | null;
  namedItem(name: string): Element | null;
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

/* partial */ interface HTMLDivElement {
  align: string;
}

declare class HTMLDListElement extends HTMLElement {
  constructor(): void;
}

/* partial */ interface HTMLDListElement {
  compact: boolean;
}

declare class HTMLElement
  extends Element
  mixins
    mixin$ElementCSSInlineStyle,
    mixin$GlobalEventHandlers,
    mixin$ElementContentEditable,
    mixin$HTMLOrSVGElement
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

/* partial */ interface HTMLEmbedElement {
  align: string;
  name: string;
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
  mixins mixin$WindowEventHandlers
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

/* partial */ interface HTMLHeadingElement {
  align: string;
}

declare class HTMLHRElement extends HTMLElement {
  constructor(): void;
}

/* partial */ interface HTMLHRElement {
  align: string;
  color: string;
  noShade: boolean;
  size: string;
  width: string;
}

declare class HTMLHtmlElement extends HTMLElement {
  constructor(): void;
}

/* partial */ interface HTMLHtmlElement {
  version: string;
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

/* partial */ interface HTMLIFrameElement {
  align: string;
  frameBorder: string;
  longDesc: string;
  marginHeight: string;
  marginWidth: string;
  scrolling: string;
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

/* partial */ interface HTMLImageElement {
  align: string;
  border: string;
  hspace: number;
  longDesc: string;
  lowsrc: string;
  name: string;
  vspace: number;
}

declare class HTMLInputElement
  extends HTMLElement
  mixins mixin$PopoverInvokerElement
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
  valueAsDate: Object | null;
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

/* partial */ declare class HTMLInputElement
  mixins mixin$PopoverInvokerElement
{
  align: string;
  useMap: string;
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

/* partial */ interface HTMLLegendElement {
  align: string;
}

declare class HTMLLIElement extends HTMLElement {
  value: number;

  constructor(): void;
}

/* partial */ interface HTMLLIElement {
  type: string;
}

declare class HTMLLinkElement extends HTMLElement mixins mixin$LinkStyle {
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

/* partial */ declare class HTMLLinkElement mixins mixin$LinkStyle {
  charset: string;
  rev: string;
  target: string;
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
  currentTime: number;
  defaultMuted: boolean;
  defaultPlaybackRate: number;
  +duration: number;
  +ended: boolean;
  +error: MediaError | null;
  loop: boolean;
  muted: boolean;
  +networkState: number;
  +paused: boolean;
  playbackRate: number;
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
  volume: number;

  addTextTrack(
    kind: TextTrackKind,
    label?: string,
    language?: string,
  ): TextTrack;
  canPlayType(type: string): CanPlayTypeResult;
  fastSeek(time: number): void;
  getStartDate(): Object;
  load(): void;
  pause(): void;
  play(): void;
}

declare class HTMLMenuElement extends HTMLElement {
  constructor(): void;
}

/* partial */ interface HTMLMenuElement {
  compact: boolean;
}

declare class HTMLMetaElement extends HTMLElement {
  content: string;
  httpEquiv: string;
  media: string;
  name: string;

  constructor(): void;
}

/* partial */ interface HTMLMetaElement {
  scheme: string;
}

declare class HTMLMeterElement extends HTMLElement {
  high: number;
  +labels: NodeList;
  low: number;
  max: number;
  min: number;
  optimum: number;
  value: number;

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

/* partial */ interface HTMLObjectElement {
  align: string;
  archive: string;
  border: string;
  code: string;
  codeBase: string;
  codeType: string;
  declare: boolean;
  hspace: number;
  standby: string;
  useMap: string;
  vspace: number;
}

declare class HTMLOListElement extends HTMLElement {
  reversed: boolean;
  start: number;
  type: string;

  constructor(): void;
}

/* partial */ interface HTMLOListElement {
  compact: boolean;
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

/* partial */ interface HTMLParagraphElement {
  align: string;
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

/* partial */ interface HTMLPreElement {
  width: number;
}

declare class HTMLProgressElement extends HTMLElement {
  +labels: NodeList;
  max: number;
  +position: number;
  value: number;

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

/* partial */ interface HTMLScriptElement {
  charset: string;
  event: string;
  htmlFor: string;
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

declare class HTMLStyleElement extends HTMLElement mixins mixin$LinkStyle {
  +blocking: DOMTokenList;
  disabled: boolean;
  media: string;

  constructor(): void;
}

/* partial */ declare class HTMLStyleElement mixins mixin$LinkStyle {
  type: string;
}

declare class HTMLTableCaptionElement extends HTMLElement {
  constructor(): void;
}

/* partial */ interface HTMLTableCaptionElement {
  align: string;
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

/* partial */ interface HTMLTableCellElement {
  align: string;
  axis: string;
  bgColor: string;
  ch: string;
  chOff: string;
  height: string;
  noWrap: boolean;
  vAlign: string;
  width: string;
}

declare class HTMLTableColElement extends HTMLElement {
  span: number;

  constructor(): void;
}

/* partial */ interface HTMLTableColElement {
  align: string;
  ch: string;
  chOff: string;
  vAlign: string;
  width: string;
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

/* partial */ interface HTMLTableElement {
  align: string;
  bgColor: string;
  border: string;
  cellPadding: string;
  cellSpacing: string;
  frame: string;
  rules: string;
  summary: string;
  width: string;
}

declare class HTMLTableRowElement extends HTMLElement {
  +cells: HTMLCollection;
  +rowIndex: number;
  +sectionRowIndex: number;

  constructor(): void;

  deleteCell(index: number): void;
  insertCell(index?: number): HTMLTableCellElement;
}

/* partial */ interface HTMLTableRowElement {
  align: string;
  bgColor: string;
  ch: string;
  chOff: string;
  vAlign: string;
}

declare class HTMLTableSectionElement extends HTMLElement {
  +rows: HTMLCollection;

  constructor(): void;

  deleteRow(index: number): void;
  insertRow(index?: number): HTMLTableRowElement;
}

/* partial */ interface HTMLTableSectionElement {
  align: string;
  ch: string;
  chOff: string;
  vAlign: string;
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

/* partial */ interface HTMLUListElement {
  compact: boolean;
  type: string;
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

declare class MediaList {
  +length: number;
  mediaText: string;

  item(index: number): string | null;
  appendMedium(medium: string): void;
  deleteMedium(medium: string): void;
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

declare class MessagePort extends EventTarget mixins mixin$MessageEventTarget {
  onclose: EventHandler;

  close(): void;
  postMessage(message: any, transfer: Array<Object>): void;
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

declare class MutationObserver {
  constructor(callback: MutationCallback): void;

  disconnect(): void;
  observe(target: Node, options?: MutationObserverInit): void;
  takeRecords(): Array<MutationRecord>;
}

declare class MutationRecord {
  +addedNodes: NodeList;
  +attributeName: string | null;
  +attributeNamespace: string | null;
  +nextSibling: Node | null;
  +oldValue: string | null;
  +previousSibling: Node | null;
  +removedNodes: NodeList;
  +target: Node;
  +type: string;
}

declare class NamedNodeMap {
  +length: number;

  getNamedItem(qualifiedName: string): Attr | null;
  item(index: number): Attr | null;
  getNamedItemNS(namespace: string | null, localName: string): Attr | null;
  removeNamedItem(qualifiedName: string): Attr;
  removeNamedItemNS(namespace: string | null, localName: string): Attr;
  setNamedItem(attr: Attr): Attr | null;
  setNamedItemNS(attr: Attr): Attr | null;
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

/* partial */ declare class Navigator
  mixins
    mixin$NavigatorID,
    mixin$NavigatorLanguage,
    mixin$NavigatorOnLine,
    mixin$NavigatorContentUtils,
    mixin$NavigatorCookies,
    mixin$NavigatorPlugins,
    mixin$NavigatorConcurrentHardware
{
  +userActivation: UserActivation;
}

declare class Navigator
  mixins
    mixin$NavigatorID,
    mixin$NavigatorLanguage,
    mixin$NavigatorOnLine,
    mixin$NavigatorContentUtils,
    mixin$NavigatorCookies,
    mixin$NavigatorPlugins,
    mixin$NavigatorConcurrentHardware {}

declare class Node extends EventTarget {
  static +ATTRIBUTE_NODE: 2;
  static +CDATA_SECTION_NODE: 4;
  static +COMMENT_NODE: 8;
  static +DOCUMENT_FRAGMENT_NODE: 11;
  static +DOCUMENT_NODE: 9;
  static +DOCUMENT_POSITION_CONTAINED_BY: 0x10;
  static +DOCUMENT_POSITION_CONTAINS: 0x08;
  static +DOCUMENT_POSITION_DISCONNECTED: 0x01;
  static +DOCUMENT_POSITION_FOLLOWING: 0x04;
  static +DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: 0x20;
  static +DOCUMENT_POSITION_PRECEDING: 0x02;
  static +DOCUMENT_TYPE_NODE: 10;
  static +ELEMENT_NODE: 1;
  static +ENTITY_NODE: 6;
  static +ENTITY_REFERENCE_NODE: 5;
  static +NOTATION_NODE: 12;
  static +PROCESSING_INSTRUCTION_NODE: 7;
  static +TEXT_NODE: 3;

  +baseURI: string;
  +childNodes: NodeList;
  +firstChild: Node | null;
  +isConnected: boolean;
  +lastChild: Node | null;
  +nextSibling: Node | null;
  +nodeName: string;
  +nodeType: number;
  nodeValue: string | null;
  +ownerDocument: Document | null;
  +parentElement: Element | null;
  +parentNode: Node | null;
  +previousSibling: Node | null;
  textContent: string | null;

  appendChild(node: Node): Node;
  cloneNode(subtree?: boolean): Node;
  compareDocumentPosition(other: Node): number;
  contains(other: Node | null): boolean;
  getRootNode(options?: GetRootNodeOptions): Node;
  hasChildNodes(): boolean;
  insertBefore(node: Node, child: Node | null): Node;
  isDefaultNamespace(namespace: string | null): boolean;
  isEqualNode(otherNode: Node | null): boolean;
  isSameNode(otherNode: Node | null): boolean;
  lookupNamespaceURI(prefix: string | null): string | null;
  lookupPrefix(namespace: string | null): string | null;
  normalize(): void;
  removeChild(child: Node): Node;
  replaceChild(node: Node, child: Node): Node;
}

declare class NodeIterator {
  +filter: NodeFilter | null;
  +pointerBeforeReferenceNode: boolean;
  +referenceNode: Node;
  +root: Node;
  +whatToShow: number;

  detach(): void;
  nextNode(): Node | null;
  previousNode(): Node | null;
}

declare class NodeList {
  +length: number;

  @@iterator(): Iterator<Node>;

  item(index: number): Node | null;
}

declare class NotRestoredReasonDetails {
  +reason: string;

  toJSON(): Object;
}

declare class NotRestoredReasons {
  +children: NotRestoredReasons | null;
  +id: string | null;
  +name: string | null;
  +reasons: NotRestoredReasonDetails | null;
  +src: string | null;
  +url: string | null;

  toJSON(): Object;
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
    mixin$CanvasSettings,
    mixin$CanvasState,
    mixin$CanvasTransform,
    mixin$CanvasCompositing,
    mixin$CanvasImageSmoothing,
    mixin$CanvasFillStrokeStyles,
    mixin$CanvasShadowStyles,
    mixin$CanvasFilters,
    mixin$CanvasRect,
    mixin$CanvasDrawPath,
    mixin$CanvasText,
    mixin$CanvasDrawImage,
    mixin$CanvasImageData,
    mixin$CanvasPathDrawingStyles,
    mixin$CanvasTextDrawingStyles,
    mixin$CanvasPath
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

declare class Path2D mixins mixin$CanvasPath {
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

declare class ProcessingInstruction
  extends CharacterData
  mixins mixin$LinkStyle
{
  +target: string;
}

declare class PromiseRejectionEvent extends Event {
  +promise: Object;
  +reason: any;

  constructor(type: string, eventInitDict: PromiseRejectionEventInit): void;
}

declare class RadioNodeList extends NodeList {
  value: string;
}

declare class Range extends AbstractRange {
  static +END_TO_END: 2;
  static +END_TO_START: 3;
  static +START_TO_END: 1;
  static +START_TO_START: 0;

  +commonAncestorContainer: Node;

  constructor(): void;

  cloneContents(): DocumentFragment;
  cloneRange(): Range;
  collapse(toStart?: boolean): void;
  compareBoundaryPoints(how: number, sourceRange: Range): number;
  comparePoint(node: Node, offset: number): number;
  deleteContents(): void;
  detach(): void;
  extractContents(): DocumentFragment;
  insertNode(node: Node): void;
  intersectsNode(node: Node): boolean;
  isPointInRange(node: Node, offset: number): boolean;
  selectNode(node: Node): void;
  selectNodeContents(node: Node): void;
  setEnd(node: Node, offset: number): void;
  setEndAfter(node: Node): void;
  setEndBefore(node: Node): void;
  setStart(node: Node, offset: number): void;
  setStartAfter(node: Node): void;
  setStartBefore(node: Node): void;
  surroundContents(newParent: Node): void;
  toString(): string;
}

/* partial */ interface Range {
  createContextualFragment(string: TrustedHTML | string): DocumentFragment;
}

declare class ShadowAnimation extends Animation {
  +sourceAnimation: Animation;
}

declare class ShadowRoot
  extends DocumentFragment
  mixins mixin$DocumentOrShadowRoot
{
  +clonable: boolean;
  +delegatesFocus: boolean;
  +host: Element;
  +mode: ShadowRootMode;
  onslotchange: EventHandler;
  +serializable: boolean;
  +slotAssignment: SlotAssignmentMode;
}

/* partial */ declare class ShadowRoot mixins mixin$DocumentOrShadowRoot {
  innerHTML: TrustedHTML | string;

  getHTML(options?: GetHTMLOptions): string;
  setHTMLUnsafe(html: TrustedHTML | string): void;
}

declare class SharedWorker extends EventTarget mixins mixin$AbstractWorker {
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

declare class StaticRange extends AbstractRange {
  constructor(init: StaticRangeInit): void;
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

declare class StyleSheet {
  disabled: boolean;
  +href: string | null;
  +media: MediaList;
  +ownerNode: Element | ProcessingInstruction | null;
  +parentStyleSheet: CSSStyleSheet | null;
  +title: string | null;
  +type: string;
}

declare class StyleSheetList {
  +length: number;

  item(index: number): CSSStyleSheet | null;
}

declare class SubmitEvent extends Event {
  +submitter: HTMLElement | null;

  constructor(type: string, eventInitDict?: SubmitEventInit): void;
}

declare class SVGAElement
  extends SVGGraphicsElement
  mixins mixin$SVGURIReference, mixin$HTMLHyperlinkElementUtils
{
  download: string;
  hreflang: string;
  ping: string;
  referrerPolicy: string;
  rel: string;
  +relList: DOMTokenList;
  +target: SVGAnimatedString;
  text: string;
  type: string;
}

declare class SVGAngle {
  static +SVG_ANGLETYPE_DEG: 2;
  static +SVG_ANGLETYPE_GRAD: 4;
  static +SVG_ANGLETYPE_RAD: 3;
  static +SVG_ANGLETYPE_UNKNOWN: 0;
  static +SVG_ANGLETYPE_UNSPECIFIED: 1;

  +unitType: number;
  value: number;
  valueAsString: string;
  valueInSpecifiedUnits: number;

  convertToSpecifiedUnits(unitType: number): void;
  newValueSpecifiedUnits(unitType: number, valueInSpecifiedUnits: number): void;
}

declare class SVGAnimatedAngle {
  +animVal: SVGAngle;
  +baseVal: SVGAngle;
}

declare class SVGAnimatedBoolean {
  +animVal: boolean;
  baseVal: boolean;
}

declare class SVGAnimatedEnumeration {
  +animVal: number;
  baseVal: number;
}

declare class SVGAnimatedInteger {
  +animVal: number;
  baseVal: number;
}

declare class SVGAnimatedLength {
  +animVal: SVGLength;
  +baseVal: SVGLength;
}

declare class SVGAnimatedLengthList {
  +animVal: SVGLengthList;
  +baseVal: SVGLengthList;
}

declare class SVGAnimatedNumber {
  +animVal: number;
  baseVal: number;
}

declare class SVGAnimatedNumberList {
  +animVal: SVGNumberList;
  +baseVal: SVGNumberList;
}

declare class SVGAnimatedPreserveAspectRatio {
  +animVal: SVGPreserveAspectRatio;
  +baseVal: SVGPreserveAspectRatio;
}

declare class SVGAnimatedRect {
  +animVal: DOMRectReadOnly;
  +baseVal: DOMRect;
}

declare class SVGAnimatedString {
  +animVal: string;
  baseVal: string;
}

declare class SVGAnimatedTransformList {
  +animVal: SVGTransformList;
  +baseVal: SVGTransformList;
}

declare class SVGCircleElement extends SVGGeometryElement {
  +cx: SVGAnimatedLength;
  +cy: SVGAnimatedLength;
  +r: SVGAnimatedLength;
}

declare class SVGDefsElement extends SVGGraphicsElement {}

declare class SVGDescElement extends SVGElement {}

declare class SVGElement
  extends Element
  mixins
    mixin$ElementCSSInlineStyle,
    mixin$GlobalEventHandlers,
    mixin$DocumentAndElementEventHandlers,
    mixin$SVGElementInstance,
    mixin$HTMLOrSVGElement
{
  +className: SVGAnimatedString;
  +ownerSVGElement: SVGSVGElement | null;
  +viewportElement: SVGElement | null;
}

declare class SVGEllipseElement extends SVGGeometryElement {
  +cx: SVGAnimatedLength;
  +cy: SVGAnimatedLength;
  +rx: SVGAnimatedLength;
  +ry: SVGAnimatedLength;
}

declare class SVGForeignObjectElement extends SVGGraphicsElement {
  +height: SVGAnimatedLength;
  +width: SVGAnimatedLength;
  +x: SVGAnimatedLength;
  +y: SVGAnimatedLength;
}

declare class SVGGElement extends SVGGraphicsElement {}

declare class SVGGeometryElement extends SVGGraphicsElement {
  +pathLength: SVGAnimatedNumber;

  getPointAtLength(distance: number): DOMPoint;
  getTotalLength(): number;
  isPointInFill(point?: DOMPointInit): boolean;
  isPointInStroke(point?: DOMPointInit): boolean;
}

declare class SVGGradientElement
  extends SVGElement
  mixins mixin$SVGURIReference
{
  static +SVG_SPREADMETHOD_PAD: 1;
  static +SVG_SPREADMETHOD_REFLECT: 2;
  static +SVG_SPREADMETHOD_REPEAT: 3;
  static +SVG_SPREADMETHOD_UNKNOWN: 0;

  +gradientTransform: SVGAnimatedTransformList;
  +gradientUnits: SVGAnimatedEnumeration;
  +spreadMethod: SVGAnimatedEnumeration;
}

declare class SVGGraphicsElement extends SVGElement mixins mixin$SVGTests {
  +transform: SVGAnimatedTransformList;

  getBBox(options?: SVGBoundingBoxOptions): DOMRect;
  getCTM(): DOMMatrix | null;
  getScreenCTM(): DOMMatrix | null;
}

declare class SVGImageElement
  extends SVGGraphicsElement
  mixins mixin$SVGURIReference
{
  crossOrigin: string | null;
  +height: SVGAnimatedLength;
  +preserveAspectRatio: SVGAnimatedPreserveAspectRatio;
  +width: SVGAnimatedLength;
  +x: SVGAnimatedLength;
  +y: SVGAnimatedLength;
}

declare class SVGLength {
  static +SVG_LENGTHTYPE_CM: 6;
  static +SVG_LENGTHTYPE_EMS: 3;
  static +SVG_LENGTHTYPE_EXS: 4;
  static +SVG_LENGTHTYPE_IN: 8;
  static +SVG_LENGTHTYPE_MM: 7;
  static +SVG_LENGTHTYPE_NUMBER: 1;
  static +SVG_LENGTHTYPE_PC: 10;
  static +SVG_LENGTHTYPE_PERCENTAGE: 2;
  static +SVG_LENGTHTYPE_PT: 9;
  static +SVG_LENGTHTYPE_PX: 5;
  static +SVG_LENGTHTYPE_UNKNOWN: 0;

  +unitType: number;
  value: number;
  valueAsString: string;
  valueInSpecifiedUnits: number;

  convertToSpecifiedUnits(unitType: number): void;
  newValueSpecifiedUnits(unitType: number, valueInSpecifiedUnits: number): void;
}

declare class SVGLengthList {
  +length: number;
  +numberOfItems: number;

  appendItem(newItem: SVGLength): SVGLength;
  clear(): void;
  initialize(newItem: SVGLength): SVGLength;
  getItem(index: number): SVGLength;
  insertItemBefore(newItem: SVGLength, index: number): SVGLength;
  removeItem(index: number): SVGLength;
  replaceItem(newItem: SVGLength, index: number): SVGLength;
  (index: number, newItem: SVGLength): void;
}

declare class SVGLinearGradientElement extends SVGGradientElement {
  +x1: SVGAnimatedLength;
  +x2: SVGAnimatedLength;
  +y1: SVGAnimatedLength;
  +y2: SVGAnimatedLength;
}

declare class SVGLineElement extends SVGGeometryElement {
  +x1: SVGAnimatedLength;
  +x2: SVGAnimatedLength;
  +y1: SVGAnimatedLength;
  +y2: SVGAnimatedLength;
}

declare class SVGMarkerElement extends SVGElement mixins mixin$SVGFitToViewBox {
  static +SVG_MARKER_ORIENT_ANGLE: 2;
  static +SVG_MARKER_ORIENT_AUTO: 1;
  static +SVG_MARKER_ORIENT_UNKNOWN: 0;
  static +SVG_MARKERUNITS_STROKEWIDTH: 2;
  static +SVG_MARKERUNITS_UNKNOWN: 0;
  static +SVG_MARKERUNITS_USERSPACEONUSE: 1;

  +markerHeight: SVGAnimatedLength;
  +markerUnits: SVGAnimatedEnumeration;
  +markerWidth: SVGAnimatedLength;
  orient: string;
  +orientAngle: SVGAnimatedAngle;
  +orientType: SVGAnimatedEnumeration;
  +refX: SVGAnimatedLength;
  +refY: SVGAnimatedLength;

  setOrientToAngle(angle: SVGAngle): void;
  setOrientToAuto(): void;
}

declare class SVGMetadataElement extends SVGElement {}

declare class SVGNumber {
  value: number;
}

declare class SVGNumberList {
  +length: number;
  +numberOfItems: number;

  appendItem(newItem: SVGNumber): SVGNumber;
  clear(): void;
  initialize(newItem: SVGNumber): SVGNumber;
  getItem(index: number): SVGNumber;
  insertItemBefore(newItem: SVGNumber, index: number): SVGNumber;
  removeItem(index: number): SVGNumber;
  replaceItem(newItem: SVGNumber, index: number): SVGNumber;
  (index: number, newItem: SVGNumber): void;
}

declare class SVGPathElement extends SVGGeometryElement {}

declare class SVGPatternElement
  extends SVGElement
  mixins mixin$SVGFitToViewBox, mixin$SVGURIReference
{
  +height: SVGAnimatedLength;
  +patternContentUnits: SVGAnimatedEnumeration;
  +patternTransform: SVGAnimatedTransformList;
  +patternUnits: SVGAnimatedEnumeration;
  +width: SVGAnimatedLength;
  +x: SVGAnimatedLength;
  +y: SVGAnimatedLength;
}

declare class SVGPointList {
  +length: number;
  +numberOfItems: number;

  appendItem(newItem: DOMPoint): DOMPoint;
  clear(): void;
  initialize(newItem: DOMPoint): DOMPoint;
  getItem(index: number): DOMPoint;
  insertItemBefore(newItem: DOMPoint, index: number): DOMPoint;
  removeItem(index: number): DOMPoint;
  replaceItem(newItem: DOMPoint, index: number): DOMPoint;
  (index: number, newItem: DOMPoint): void;
}

declare class SVGPolygonElement
  extends SVGGeometryElement
  mixins mixin$SVGAnimatedPoints {}

declare class SVGPolylineElement
  extends SVGGeometryElement
  mixins mixin$SVGAnimatedPoints {}

declare class SVGPreserveAspectRatio {
  static +SVG_MEETORSLICE_MEET: 1;
  static +SVG_MEETORSLICE_SLICE: 2;
  static +SVG_MEETORSLICE_UNKNOWN: 0;
  static +SVG_PRESERVEASPECTRATIO_NONE: 1;
  static +SVG_PRESERVEASPECTRATIO_UNKNOWN: 0;
  static +SVG_PRESERVEASPECTRATIO_XMAXYMAX: 10;
  static +SVG_PRESERVEASPECTRATIO_XMAXYMID: 7;
  static +SVG_PRESERVEASPECTRATIO_XMAXYMIN: 4;
  static +SVG_PRESERVEASPECTRATIO_XMIDYMAX: 9;
  static +SVG_PRESERVEASPECTRATIO_XMIDYMID: 6;
  static +SVG_PRESERVEASPECTRATIO_XMIDYMIN: 3;
  static +SVG_PRESERVEASPECTRATIO_XMINYMAX: 8;
  static +SVG_PRESERVEASPECTRATIO_XMINYMID: 5;
  static +SVG_PRESERVEASPECTRATIO_XMINYMIN: 2;

  align: number;
  meetOrSlice: number;
}

declare class SVGRadialGradientElement extends SVGGradientElement {
  +cx: SVGAnimatedLength;
  +cy: SVGAnimatedLength;
  +fr: SVGAnimatedLength;
  +fx: SVGAnimatedLength;
  +fy: SVGAnimatedLength;
  +r: SVGAnimatedLength;
}

declare class SVGRectElement extends SVGGeometryElement {
  +height: SVGAnimatedLength;
  +rx: SVGAnimatedLength;
  +ry: SVGAnimatedLength;
  +width: SVGAnimatedLength;
  +x: SVGAnimatedLength;
  +y: SVGAnimatedLength;
}

declare class SVGScriptElement extends SVGElement mixins mixin$SVGURIReference {
  crossOrigin: string | null;
  type: string;
}

declare class SVGStopElement extends SVGElement {
  +offset: SVGAnimatedNumber;
}

declare class SVGStringList {
  +length: number;
  +numberOfItems: number;

  appendItem(newItem: string): string;
  clear(): void;
  initialize(newItem: string): string;
  getItem(index: number): string;
  insertItemBefore(newItem: string, index: number): string;
  removeItem(index: number): string;
  replaceItem(newItem: string, index: number): string;
  (index: number, newItem: string): void;
}

declare class SVGStyleElement extends SVGElement mixins mixin$LinkStyle {
  media: string;
  title: string;
  type: string;
}

declare class SVGSVGElement
  extends SVGGraphicsElement
  mixins mixin$SVGFitToViewBox, mixin$SVGZoomAndPan, mixin$WindowEventHandlers
{
  static +SVG_ZOOMANDPAN_DISABLE: 1;
  static +SVG_ZOOMANDPAN_MAGNIFY: 2;
  static +SVG_ZOOMANDPAN_UNKNOWN: 0;

  currentScale: number;
  +currentTranslate: DOMPointReadOnly;
  +height: SVGAnimatedLength;
  +width: SVGAnimatedLength;
  +x: SVGAnimatedLength;
  +y: SVGAnimatedLength;

  checkEnclosure(element: SVGElement, rect: DOMRectReadOnly): boolean;
  checkIntersection(element: SVGElement, rect: DOMRectReadOnly): boolean;
  createSVGAngle(): SVGAngle;
  createSVGLength(): SVGLength;
  createSVGMatrix(): DOMMatrix;
  createSVGNumber(): SVGNumber;
  createSVGPoint(): DOMPoint;
  createSVGRect(): DOMRect;
  createSVGTransform(): SVGTransform;
  createSVGTransformFromMatrix(matrix: DOMMatrixReadOnly): SVGTransform;
  deselectAll(): void;
  forceRedraw(): void;
  getElementById(elementId: string): Element;
  getEnclosureList(
    rect: DOMRectReadOnly,
    referenceElement: SVGElement | null,
  ): NodeList;
  getIntersectionList(
    rect: DOMRectReadOnly,
    referenceElement: SVGElement | null,
  ): NodeList;
  suspendRedraw(maxWaitMilliseconds: number): number;
  unsuspendRedraw(suspendHandleID: number): void;
  unsuspendRedrawAll(): void;
}

declare class SVGSwitchElement extends SVGGraphicsElement {}

declare class SVGSymbolElement
  extends SVGGraphicsElement
  mixins mixin$SVGFitToViewBox {}

declare class SVGTextContentElement extends SVGGraphicsElement {
  static +LENGTHADJUST_SPACING: 1;
  static +LENGTHADJUST_SPACINGANDGLYPHS: 2;
  static +LENGTHADJUST_UNKNOWN: 0;

  +lengthAdjust: SVGAnimatedEnumeration;
  +textLength: SVGAnimatedLength;

  getCharNumAtPosition(point?: DOMPointInit): number;
  getComputedTextLength(): number;
  getEndPositionOfChar(charnum: number): DOMPoint;
  getExtentOfChar(charnum: number): DOMRect;
  getNumberOfChars(): number;
  getRotationOfChar(charnum: number): number;
  getStartPositionOfChar(charnum: number): DOMPoint;
  getSubStringLength(charnum: number, nchars: number): number;
  selectSubString(charnum: number, nchars: number): void;
}

declare class SVGTextElement extends SVGTextPositioningElement {}

declare class SVGTextPathElement
  extends SVGTextContentElement
  mixins mixin$SVGURIReference
{
  static +TEXTPATH_METHODTYPE_ALIGN: 1;
  static +TEXTPATH_METHODTYPE_STRETCH: 2;
  static +TEXTPATH_METHODTYPE_UNKNOWN: 0;
  static +TEXTPATH_SPACINGTYPE_AUTO: 1;
  static +TEXTPATH_SPACINGTYPE_EXACT: 2;
  static +TEXTPATH_SPACINGTYPE_UNKNOWN: 0;

  +method: SVGAnimatedEnumeration;
  +spacing: SVGAnimatedEnumeration;
  +startOffset: SVGAnimatedLength;
}

declare class SVGTextPositioningElement extends SVGTextContentElement {
  +dx: SVGAnimatedLengthList;
  +dy: SVGAnimatedLengthList;
  +rotate: SVGAnimatedNumberList;
  +x: SVGAnimatedLengthList;
  +y: SVGAnimatedLengthList;
}

declare class SVGTitleElement extends SVGElement {}

declare class SVGTransform {
  static +SVG_TRANSFORM_MATRIX: 1;
  static +SVG_TRANSFORM_ROTATE: 4;
  static +SVG_TRANSFORM_SCALE: 3;
  static +SVG_TRANSFORM_SKEWX: 5;
  static +SVG_TRANSFORM_SKEWY: 6;
  static +SVG_TRANSFORM_TRANSLATE: 2;
  static +SVG_TRANSFORM_UNKNOWN: 0;

  +angle: number;
  +matrix: DOMMatrix;
  +type: number;

  setMatrix(matrix: DOMMatrixReadOnly): void;
  setRotate(angle: number, cx: number, cy: number): void;
  setScale(sx: number, sy: number): void;
  setSkewX(angle: number): void;
  setSkewY(angle: number): void;
  setTranslate(tx: number, ty: number): void;
}

declare class SVGTransformList {
  +length: number;
  +numberOfItems: number;

  appendItem(newItem: SVGTransform): SVGTransform;
  clear(): void;
  createSVGTransformFromMatrix(matrix: DOMMatrixReadOnly): SVGTransform;
  initialize(newItem: SVGTransform): SVGTransform;
  getItem(index: number): SVGTransform;
  consolidate(): SVGTransform | null;
  insertItemBefore(newItem: SVGTransform, index: number): SVGTransform;
  removeItem(index: number): SVGTransform;
  replaceItem(newItem: SVGTransform, index: number): SVGTransform;
  (index: number, newItem: SVGTransform): void;
}

declare class SVGTSpanElement extends SVGTextPositioningElement {}

declare class SVGUnitTypes {
  static +SVG_UNIT_TYPE_OBJECTBOUNDINGBOX: 2;
  static +SVG_UNIT_TYPE_UNKNOWN: 0;
  static +SVG_UNIT_TYPE_USERSPACEONUSE: 1;
}

declare class SVGUnknownElement extends SVGGraphicsElement {}

declare class SVGUseElement
  extends SVGGraphicsElement
  mixins mixin$SVGURIReference
{
  +animatedInstanceRoot: SVGElement | null;
  +height: SVGAnimatedLength;
  +instanceRoot: SVGElement | null;
  +width: SVGAnimatedLength;
  +x: SVGAnimatedLength;
  +y: SVGAnimatedLength;
}

declare class SVGUseElementShadowRoot extends ShadowRoot {}

declare class SVGViewElement
  extends SVGElement
  mixins mixin$SVGFitToViewBox, mixin$SVGZoomAndPan
{
  static +SVG_ZOOMANDPAN_DISABLE: 1;
  static +SVG_ZOOMANDPAN_MAGNIFY: 2;
  static +SVG_ZOOMANDPAN_UNKNOWN: 0;
}

declare class Text extends CharacterData mixins mixin$Slottable {
  +wholeText: string;

  constructor(data?: string): void;

  splitText(offset: number): Text;
}

declare class TextMetrics {
  +actualBoundingBoxAscent: number;
  +actualBoundingBoxDescent: number;
  +actualBoundingBoxLeft: number;
  +actualBoundingBoxRight: number;
  +alphabeticBaseline: number;
  +emHeightAscent: number;
  +emHeightDescent: number;
  +fontBoundingBoxAscent: number;
  +fontBoundingBoxDescent: number;
  +hangingBaseline: number;
  +ideographicBaseline: number;
  +width: number;
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
  startTime: number;
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

  end(index: number): number;
  start(index: number): number;
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

declare class TreeWalker {
  currentNode: Node;
  +filter: NodeFilter | null;
  +root: Node;
  +whatToShow: number;

  firstChild(): Node | null;
  lastChild(): Node | null;
  nextNode(): Node | null;
  nextSibling(): Node | null;
  parentNode(): Node | null;
  previousNode(): Node | null;
  previousSibling(): Node | null;
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

/* partial */ declare class Window
  mixins
    mixin$GlobalEventHandlers,
    mixin$WindowEventHandlers,
    mixin$WindowOrWorkerGlobalScope,
    mixin$AnimationFrameProvider,
    mixin$WindowSessionStorage,
    mixin$WindowLocalStorage
{
  getComputedStyle(
    elt: Element,
    pseudoElt?: string | null,
  ): CSSStyleDeclaration;
}

/* partial */ declare class Window
  mixins
    mixin$GlobalEventHandlers,
    mixin$WindowEventHandlers,
    mixin$WindowOrWorkerGlobalScope,
    mixin$AnimationFrameProvider,
    mixin$WindowSessionStorage,
    mixin$WindowLocalStorage
{
  +event: Event | void;
}

declare class Window
  extends EventTarget
  mixins
    mixin$GlobalEventHandlers,
    mixin$WindowEventHandlers,
    mixin$WindowOrWorkerGlobalScope,
    mixin$AnimationFrameProvider,
    mixin$WindowSessionStorage,
    mixin$WindowLocalStorage
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
    transfer?: Array<Object>,
  ): void;
  postMessage(message: any, options?: WindowPostMessageOptions): void;
  print(): void;
  prompt(message?: string, default_?: string): string | null;
  stop(): void;
  (name: string): Object;
}

/* partial */ declare class Window
  mixins
    mixin$GlobalEventHandlers,
    mixin$WindowEventHandlers,
    mixin$WindowOrWorkerGlobalScope,
    mixin$AnimationFrameProvider,
    mixin$WindowSessionStorage,
    mixin$WindowLocalStorage
{
  +fakeWorklet1: Worklet;
  +fakeWorklet2: Worklet;
}

/* partial */ declare class Window
  mixins
    mixin$GlobalEventHandlers,
    mixin$WindowEventHandlers,
    mixin$WindowOrWorkerGlobalScope,
    mixin$AnimationFrameProvider,
    mixin$WindowSessionStorage,
    mixin$WindowLocalStorage
{
  +external: External;

  captureEvents(): void;
  releaseEvents(): void;
}

declare class Worker
  extends EventTarget
  mixins mixin$AbstractWorker, mixin$MessageEventTarget
{
  constructor(
    scriptURL: TrustedScriptURL | string,
    options?: WorkerOptions,
  ): void;

  postMessage(message: any, transfer: Array<Object>): void;
  postMessage(message: any, options?: StructuredSerializeOptions): void;
  terminate(): void;
}

declare class WorkerGlobalScope
  extends EventTarget
  mixins mixin$WindowOrWorkerGlobalScope
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
    mixin$NavigatorID,
    mixin$NavigatorLanguage,
    mixin$NavigatorOnLine,
    mixin$NavigatorConcurrentHardware {}

declare class Worklet {
  addModule(moduleURL: string, options?: WorkletOptions): void;
}

declare class WorkletGlobalScope {}

declare class XMLDocument extends Document {}

declare class XMLSerializer {
  constructor(): void;

  serializeToString(root: Node): string;
}

declare class XPathEvaluator mixins mixin$XPathEvaluatorBase {
  constructor(): void;
}

declare class XPathExpression {
  evaluate(
    contextNode: Node,
    type?: number,
    result?: XPathResult | null,
  ): XPathResult;
}

declare class XPathResult {
  static +ANY_TYPE: 0;
  static +ANY_UNORDERED_NODE_TYPE: 8;
  static +BOOLEAN_TYPE: 3;
  static +FIRST_ORDERED_NODE_TYPE: 9;
  static +NUMBER_TYPE: 1;
  static +ORDERED_NODE_ITERATOR_TYPE: 5;
  static +ORDERED_NODE_SNAPSHOT_TYPE: 7;
  static +STRING_TYPE: 2;
  static +UNORDERED_NODE_ITERATOR_TYPE: 4;
  static +UNORDERED_NODE_SNAPSHOT_TYPE: 6;

  +booleanValue: boolean;
  +invalidIteratorState: boolean;
  +numberValue: number;
  +resultType: number;
  +singleNodeValue: Node | null;
  +snapshotLength: number;
  +stringValue: string;

  iterateNext(): Node | null;
  snapshotItem(index: number): Node | null;
}

declare class XSLTProcessor {
  constructor(): void;

  clearParameters(): void;
  getParameter(namespaceURI: string, localName: string): any;
  importStylesheet(style: Node): void;
  removeParameter(namespaceURI: string, localName: string): void;
  reset(): void;
  setParameter(namespaceURI: string, localName: string, value: any): void;
  transformToDocument(source: Node): Document;
  transformToFragment(source: Node, output: Document): DocumentFragment;
}

declare namespace CSS {
  declare function escape(ident: string): string;
}
