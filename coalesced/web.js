// @flow

/*---------- accelerometer ----------*/

type AccelerometerLocalCoordinateSystem = 'device' | 'screen';

type AccelerometerSensorOptions = {
  ...SensorOptions,
  referenceFrame: AccelerometerLocalCoordinateSystem,
};

declare class Accelerometer extends Sensor {
  +x: number | null;
  +y: number | null;
  +z: number | null;

  constructor(options?: AccelerometerSensorOptions): void;
}

declare class GravitySensor extends Accelerometer {
  constructor(options?: AccelerometerSensorOptions): void;
}

declare class LinearAccelerationSensor extends Accelerometer {
  constructor(options?: AccelerometerSensorOptions): void;
}

/*---------- anchors ----------*/

// Contributes to:
//   - XRFrame
//   - XRSession
//   - XRHitTestResult

declare class XRAnchor {
  +anchorSpace: XRSpace;

  delete(): void;
  requestPersistentHandle(): Promise<string>;
}

type XRAnchorSet = Set<XRAnchor>;

/*---------- anonymous-iframe ----------*/

// Contributes to:
//   - HTMLIFrameElement
//   - Window

/*---------- attribution-reporting-api ----------*/

// Contributes to:
//   - RequestInit
//   - XMLHttpRequest

type AttributionReportingRequestOptions = {
  eventSourceEligible: boolean,
  triggerEligible: boolean,
};

declare class mixin$HTMLAttributionSrcElementUtils {
  attributionSrc: string;
}

/*---------- audio-output ----------*/

// Contributes to:
//   - HTMLMediaElement
//   - MediaDevices

type AudioOutputOptions = {
  deviceId: string,
};

/*---------- audio-session ----------*/

// Contributes to:
//   - Navigator

type AudioSessionState = 'inactive' | 'active' | 'interrupted';

type AudioSessionType =
  | 'auto'
  | 'playback'
  | 'transient'
  | 'transient-solo'
  | 'ambient'
  | 'play-and-record';

declare class AudioSession extends EventTarget {
  onstatechange: EventHandler;
  +state: AudioSessionState;
  type: AudioSessionType;
}

/*---------- autoplay-detection ----------*/

// Contributes to:
//   - Navigator

type AutoplayPolicy = 'allowed' | 'allowed-muted' | 'disallowed';

type AutoplayPolicyMediaType = 'mediaelement' | 'audiocontext';

/*---------- background-fetch ----------*/

// Contributes to:
//   - ServiceWorkerGlobalScope
//   - ServiceWorkerRegistration

type BackgroundFetchFailureReason =
  | ''
  | 'aborted'
  | 'bad-status'
  | 'fetch-error'
  | 'quota-exceeded'
  | 'download-total-exceeded';

type BackgroundFetchResult = '' | 'success' | 'failure';

type BackgroundFetchEventInit = {
  ...ExtendableEventInit,
  registration: BackgroundFetchRegistration,
};

type BackgroundFetchOptions = {
  ...BackgroundFetchUIOptions,
  downloadTotal: number,
};

type BackgroundFetchUIOptions = {
  icons: Array<ImageResource>,
  title: string,
};

declare class BackgroundFetchEvent extends ExtendableEvent {
  +registration: BackgroundFetchRegistration;

  constructor(type: string, init: BackgroundFetchEventInit): void;
}

declare class BackgroundFetchManager {
  fetch(
    id: string,
    requests: RequestInfo | Array<RequestInfo>,
    options?: BackgroundFetchOptions,
  ): Promise<BackgroundFetchRegistration>;
  get(id: string): Promise<BackgroundFetchRegistration | null>;
  getIds(): Promise<Array<string>>;
}

declare class BackgroundFetchRecord {
  +request: Request;
  +responseReady: Promise<Response>;
}

declare class BackgroundFetchRegistration extends EventTarget {
  +downloaded: number;
  +downloadTotal: number;
  +failureReason: BackgroundFetchFailureReason;
  +id: string;
  onprogress: EventHandler;
  +recordsAvailable: boolean;
  +result: BackgroundFetchResult;
  +uploaded: number;
  +uploadTotal: number;

  abort(): Promise<boolean>;
  match(
    request: RequestInfo,
    options?: CacheQueryOptions,
  ): Promise<BackgroundFetchRecord>;
  matchAll(
    request?: RequestInfo,
    options?: CacheQueryOptions,
  ): Promise<Array<BackgroundFetchRecord>>;
}

declare class BackgroundFetchUpdateUIEvent extends BackgroundFetchEvent {
  constructor(type: string, init: BackgroundFetchEventInit): void;

  updateUI(options?: BackgroundFetchUIOptions): Promise<void>;
}

/*---------- background-sync ----------*/

// Contributes to:
//   - ServiceWorkerRegistration
//   - ServiceWorkerGlobalScope

type SyncEventInit = {
  ...ExtendableEventInit,
  lastChance: boolean,
  tag: string,
};

declare class SyncEvent extends ExtendableEvent {
  +lastChance: boolean;
  +tag: string;

  constructor(type: string, init: SyncEventInit): void;
}

declare class SyncManager {
  getTags(): Promise<Array<string>>;
  register(tag: string): Promise<void>;
}

/*---------- badging ----------*/

declare class mixin$NavigatorBadge {
  clearAppBadge(): Promise<void>;
  setAppBadge(contents?: number): Promise<void>;
}

/*---------- battery-status ----------*/

// Contributes to:
//   - Navigator

declare class BatteryManager extends EventTarget {
  +charging: boolean;
  +chargingTime: number;
  +dischargingTime: number;
  +level: number;
  onchargingchange: EventHandler;
  onchargingtimechange: EventHandler;
  ondischargingtimechange: EventHandler;
  onlevelchange: EventHandler;
}

/*---------- beacon ----------*/

// Contributes to:
//   - Navigator

/*---------- capture-handle-identity ----------*/

// Contributes to:
//   - MediaDevices
//   - MediaStreamTrack

type CaptureHandle = {
  handle: string,
  origin: string,
};

type CaptureHandleConfig = {
  exposeOrigin: boolean,
  handle: string,
  permittedOrigins: Array<string>,
};

/*---------- captured-mouse-events ----------*/

// Contributes to:
//   - CaptureController

type CapturedMouseEventInit = {
  ...EventInit,
  surfaceX: number,
  surfaceY: number,
};

declare class CapturedMouseEvent extends Event {
  +surfaceX: number;
  +surfaceY: number;

  constructor(type: string, eventInitDict?: CapturedMouseEventInit): void;
}

/*---------- clipboard-apis ----------*/

// Contributes to:
//   - Navigator

type ClipboardItemData = Promise<string | Blob>;

type ClipboardItems = Array<ClipboardItem>;

type PresentationStyle = 'unspecified' | 'inline' | 'attachment';

type ClipboardEventInit = {
  ...EventInit,
  clipboardData: DataTransfer | null,
};

type ClipboardItemOptions = {
  presentationStyle: PresentationStyle,
};

type ClipboardPermissionDescriptor = {
  ...PermissionDescriptor,
  allowWithoutGesture: boolean,
};

type ClipboardUnsanitizedFormats = {
  unsanitized: Array<string>,
};

declare class Clipboard extends EventTarget {
  read(formats?: ClipboardUnsanitizedFormats): Promise<ClipboardItems>;
  readText(): Promise<string>;
  write(data: ClipboardItems): Promise<void>;
  writeText(data: string): Promise<void>;
}

declare class ClipboardEvent extends Event {
  +clipboardData: DataTransfer | null;

  constructor(type: string, eventInitDict?: ClipboardEventInit): void;
}

declare class ClipboardItem {
  +presentationStyle: PresentationStyle;
  +types: $ReadOnlyArray<string>;

  constructor(
    items: {[string]: ClipboardItemData},
    options?: ClipboardItemOptions,
  ): void;

  static supports(type: string): boolean;
  getType(type: string): Promise<Blob>;
}

/*---------- compat ----------*/

// Contributes to:
//   - Window
//   - HTMLBodyElement

/*---------- compression ----------*/

type CompressionFormat = 'deflate' | 'deflate-raw' | 'gzip';

declare class CompressionStream mixins mixin$GenericTransformStream {
  constructor(format: CompressionFormat): void;
}

declare class DecompressionStream mixins mixin$GenericTransformStream {
  constructor(format: CompressionFormat): void;
}

/*---------- compute-pressure ----------*/

type PressureSource = 'cpu';

type PressureState = 'nominal' | 'fair' | 'serious' | 'critical';

type PressureObserverOptions = {
  sampleInterval: number,
};

type PressureUpdateCallback = (
  changes: Array<PressureRecord>,
  observer: PressureObserver,
) => void;

declare class PressureObserver {
  +knownSources: $ReadOnlyArray<PressureSource>;

  constructor(callback: PressureUpdateCallback): void;

  disconnect(): void;
  observe(
    source: PressureSource,
    options?: PressureObserverOptions,
  ): Promise<void>;
  takeRecords(): Array<PressureRecord>;
  unobserve(source: PressureSource): void;
}

declare class PressureRecord {
  +source: PressureSource;
  +state: PressureState;
  +time: number;

  toJSON(): Object;
}

/*---------- console ----------*/

declare namespace console {
  declare function assert(condition?: boolean, data: any): void;
  declare function clear(): void;
  declare function count(label?: string): void;
  declare function countReset(label?: string): void;
  declare function debug(data: any): void;
  declare function dir(item?: any, options?: Object | null): void;
  declare function dirxml(data: any): void;
  declare function error(data: any): void;
  declare function group(data: any): void;
  declare function groupCollapsed(data: any): void;
  declare function groupEnd(): void;
  declare function info(data: any): void;
  declare function log(data: any): void;
  declare function table(tabularData?: any, properties?: Array<string>): void;
  declare function time(label?: string): void;
  declare function timeEnd(label?: string): void;
  declare function timeLog(label?: string, data: any): void;
  declare function trace(data: any): void;
  declare function warn(data: any): void;
}

/*---------- content-index ----------*/

// Contributes to:
//   - ServiceWorkerGlobalScope
//   - ServiceWorkerRegistration

type ContentCategory = '' | 'homepage' | 'article' | 'video' | 'audio';

type ContentDescription = {
  category: ContentCategory,
  description: string,
  icons: Array<ImageResource>,
  id: string,
  title: string,
  url: string,
};

type ContentIndexEventInit = {
  ...ExtendableEventInit,
  id: string,
};

declare class ContentIndex {
  add(description: ContentDescription): Promise<void>;
  delete(id: string): Promise<void>;
  getAll(): Promise<Array<ContentDescription>>;
}

declare class ContentIndexEvent extends ExtendableEvent {
  +id: string;

  constructor(type: string, init: ContentIndexEventInit): void;
}

/*---------- cookie-store ----------*/

// Contributes to:
//   - ServiceWorkerRegistration
//   - Window
//   - ServiceWorkerGlobalScope

type CookieList = Array<CookieListItem>;

type CookieSameSite = 'strict' | 'lax' | 'none';

type CookieChangeEventInit = {
  ...EventInit,
  changed: CookieList,
  deleted: CookieList,
};

type CookieInit = {
  domain: string | null,
  expires: number | null,
  name: string,
  partitioned: boolean,
  path: string,
  sameSite: CookieSameSite,
  value: string,
};

type CookieListItem = {
  domain: string | null,
  expires: number | null,
  name: string,
  partitioned: boolean,
  path: string,
  sameSite: CookieSameSite,
  secure: boolean,
  value: string,
};

type CookieStoreDeleteOptions = {
  domain: string | null,
  name: string,
  partitioned: boolean,
  path: string,
};

type CookieStoreGetOptions = {
  name: string,
  url: string,
};

type ExtendableCookieChangeEventInit = {
  ...ExtendableEventInit,
  changed: CookieList,
  deleted: CookieList,
};

declare class CookieChangeEvent extends Event {
  +changed: $ReadOnlyArray<CookieListItem>;
  +deleted: $ReadOnlyArray<CookieListItem>;

  constructor(type: string, eventInitDict?: CookieChangeEventInit): void;
}

declare class CookieStore extends EventTarget {
  onchange: EventHandler;

  delete(name: string): Promise<void>;
  delete(options: CookieStoreDeleteOptions): Promise<void>;
  get(name: string): Promise<CookieListItem | null>;
  get(options?: CookieStoreGetOptions): Promise<CookieListItem | null>;
  getAll(name: string): Promise<CookieList>;
  getAll(options?: CookieStoreGetOptions): Promise<CookieList>;
  set(name: string, value: string): Promise<void>;
  set(options: CookieInit): Promise<void>;
}

declare class CookieStoreManager {
  getSubscriptions(): Promise<Array<CookieStoreGetOptions>>;
  subscribe(subscriptions: Array<CookieStoreGetOptions>): Promise<void>;
  unsubscribe(subscriptions: Array<CookieStoreGetOptions>): Promise<void>;
}

declare class ExtendableCookieChangeEvent extends ExtendableEvent {
  +changed: $ReadOnlyArray<CookieListItem>;
  +deleted: $ReadOnlyArray<CookieListItem>;

  constructor(
    type: string,
    eventInitDict?: ExtendableCookieChangeEventInit,
  ): void;
}

/*---------- crash-reporting ----------*/

declare class CrashReportBody extends ReportBody {
  +is_top_level: string | null;
  +page_visibility: DocumentVisibilityState | null;
  +reason: string | null;
  +stack: string | null;

  toJSON(): Object;
}

/*---------- credential-management ----------*/

// Contributes to:
//   - Navigator
//   - CredentialRequestOptions
//   - CredentialCreationOptions

type PasswordCredentialInit = PasswordCredentialData | HTMLFormElement;

type CredentialMediationRequirement =
  | 'silent'
  | 'optional'
  | 'conditional'
  | 'required';

type CredentialCreationOptions = {
  digital: DigitalCredentialCreationOptions,
  federated: FederatedCredentialInit,
  mediation: CredentialMediationRequirement,
  password: PasswordCredentialInit,
  publicKey: PublicKeyCredentialCreationOptions,
  signal: AbortSignal,
};

type CredentialData = {
  id: string,
};

type CredentialRequestOptions = {
  digital: DigitalCredentialRequestOptions,
  federated: FederatedCredentialRequestOptions,
  identity: IdentityCredentialRequestOptions,
  mediation: CredentialMediationRequirement,
  otp: OTPCredentialRequestOptions,
  password: boolean,
  publicKey: PublicKeyCredentialRequestOptions,
  signal: AbortSignal,
};

type FederatedCredentialInit = {
  ...CredentialData,
  iconURL: string,
  name: string,
  origin: string,
  protocol: string,
  provider: string,
};

type FederatedCredentialRequestOptions = {
  protocols: Array<string>,
  providers: Array<string>,
};

type PasswordCredentialData = {
  ...CredentialData,
  iconURL: string,
  name: string,
  origin: string,
  password: string,
};

declare class Credential {
  +id: string;
  +type: string;

  static isConditionalMediationAvailable(): Promise<boolean>;
  static willRequestConditionalCreation(): Promise<void>;
}

declare class CredentialsContainer {
  create(options?: CredentialCreationOptions): Promise<Credential | null>;
  get(options?: CredentialRequestOptions): Promise<Credential | null>;
  preventSilentAccess(): Promise<void>;
  store(credential: Credential): Promise<void>;
}

declare class FederatedCredential
  extends Credential
  mixins mixin$CredentialUserData
{
  +protocol: string | null;
  +provider: string;

  constructor(data: FederatedCredentialInit): void;
}

declare class PasswordCredential
  extends Credential
  mixins mixin$CredentialUserData
{
  +password: string;

  constructor(form: HTMLFormElement): void;
  constructor(data: PasswordCredentialData): void;
}

declare class mixin$CredentialUserData {
  +iconURL: string;
  +name: string;
}

/*---------- csp-embedded-enforcement ----------*/

// Contributes to:
//   - HTMLIFrameElement

/*---------- csp-next ----------*/

type ScriptingPolicyViolationType =
  | 'externalScript'
  | 'inlineScript'
  | 'inlineEventHandler'
  | 'eval';

declare class ScriptingPolicyReportBody extends ReportBody {
  +colno: number;
  +lineno: number;
  +violationSample: string | null;
  +violationType: string;
  +violationURL: string | null;

  toJSON(): Object;
}

/*---------- CSP ----------*/

type SecurityPolicyViolationEventDisposition = 'enforce' | 'report';

type SecurityPolicyViolationEventInit = {
  ...EventInit,
  blockedURI: string,
  columnNumber: number,
  disposition: SecurityPolicyViolationEventDisposition,
  documentURI: string,
  effectiveDirective: string,
  lineNumber: number,
  originalPolicy: string,
  referrer: string,
  sample: string,
  sourceFile: string,
  statusCode: number,
  violatedDirective: string,
};

declare class CSPViolationReportBody extends ReportBody {
  +blockedURL: string | null;
  +columnNumber: number | null;
  +disposition: SecurityPolicyViolationEventDisposition;
  +documentURL: string;
  +effectiveDirective: string;
  +lineNumber: number | null;
  +originalPolicy: string;
  +referrer: string | null;
  +sample: string | null;
  +sourceFile: string | null;
  +statusCode: number;

  toJSON(): Object;
}

declare class SecurityPolicyViolationEvent extends Event {
  +blockedURI: string;
  +columnNumber: number;
  +disposition: SecurityPolicyViolationEventDisposition;
  +documentURI: string;
  +effectiveDirective: string;
  +lineNumber: number;
  +originalPolicy: string;
  +referrer: string;
  +sample: string;
  +sourceFile: string;
  +statusCode: number;
  +violatedDirective: string;

  constructor(
    type: string,
    eventInitDict?: SecurityPolicyViolationEventInit,
  ): void;
}

/*---------- css-anchor-position ----------*/

declare class CSSPositionTryDescriptors extends CSSStyleDeclaration {
  alignSelf: string;
  blockSize: string;
  bottom: string;
  height: string;
  inlineSize: string;
  inset: string;
  insetBlock: string;
  insetBlockEnd: string;
  insetBlockStart: string;
  insetInline: string;
  insetInlineEnd: string;
  insetInlineStart: string;
  justifySelf: string;
  left: string;
  margin: string;
  marginBlock: string;
  marginBlockEnd: string;
  marginBlockStart: string;
  marginBottom: string;
  marginInline: string;
  marginInlineEnd: string;
  marginInlineStart: string;
  marginLeft: string;
  marginRight: string;
  marginTop: string;
  maxBlockSize: string;
  maxHeight: string;
  maxInlineSize: string;
  maxWidth: string;
  minBlockSize: string;
  minHeight: string;
  minInlineSize: string;
  minWidth: string;
  placeSelf: string;
  positionAnchor: string;
  positionArea: string;
  right: string;
  top: string;
  width: string;
}

declare class CSSPositionTryRule extends CSSRule {
  +name: string;
  +style: CSSPositionTryDescriptors;
}

/*---------- css-animations-2 ----------*/

declare class CSSAnimation extends Animation {
  +animationName: string;
}

/*---------- css-animations ----------*/

// Contributes to:
//   - CSSRule
//   - GlobalEventHandlers

type AnimationEventInit = {
  ...EventInit,
  animationName: string,
  elapsedTime: number,
  pseudoElement: string,
};

declare class AnimationEvent extends Event {
  +animationName: string;
  +elapsedTime: number;
  +pseudoElement: string;

  constructor(type: string, animationEventInitDict?: AnimationEventInit): void;
}

declare class CSSKeyframeRule extends CSSRule {
  keyText: string;
  +style: CSSStyleProperties;
}

declare class CSSKeyframesRule extends CSSRule {
  +cssRules: CSSRuleList;
  +length: number;
  name: string;

  (index: number): CSSKeyframeRule;
  appendRule(rule: string): void;
  deleteRule(select: string): void;
  findRule(select: string): CSSKeyframeRule | null;
}

/*---------- css-cascade-6 ----------*/

declare class CSSScopeRule extends CSSGroupingRule {
  +end: string | null;
  +start: string | null;
}

/*---------- css-cascade ----------*/

declare class CSSLayerBlockRule extends CSSGroupingRule {
  +name: string;
}

declare class CSSLayerStatementRule extends CSSRule {
  +nameList: $ReadOnlyArray<string>;
}

/*---------- css-color-5 ----------*/

declare class CSSColorProfileRule extends CSSRule {
  +components: string;
  +name: string;
  +renderingIntent: string;
  +src: string;
}

/*---------- css-conditional-5 ----------*/

declare class CSSContainerRule extends CSSConditionRule {
  +containerName: string;
  +containerQuery: string;
}

/*---------- css-conditional ----------*/

// Contributes to:
//   - CSSRule
//   - CSS

declare class CSSConditionRule extends CSSGroupingRule {
  +conditionText: string;
}

declare class CSSMediaRule extends CSSConditionRule {
  +matches: boolean;
  +media: MediaList;
}

declare class CSSSupportsRule extends CSSConditionRule {
  +matches: boolean;
}

/*---------- css-contain ----------*/

type ContentVisibilityAutoStateChangeEventInit = {
  ...EventInit,
  skipped: boolean,
};

declare class ContentVisibilityAutoStateChangeEvent extends Event {
  +skipped: boolean;

  constructor(
    type: string,
    eventInitDict?: ContentVisibilityAutoStateChangeEventInit,
  ): void;
}

/*---------- css-counter-styles ----------*/

// Contributes to:
//   - CSSRule

declare class CSSCounterStyleRule extends CSSRule {
  additiveSymbols: string;
  fallback: string;
  name: string;
  negative: string;
  pad: string;
  prefix: string;
  range: string;
  speakAs: string;
  suffix: string;
  symbols: string;
  system: string;
}

/*---------- css-font-loading ----------*/

// Contributes to:
//   - FontFace

type FontFaceLoadStatus = 'unloaded' | 'loading' | 'loaded' | 'error';

type FontFaceSetLoadStatus = 'loading' | 'loaded';

type FontFaceDescriptors = {
  ascentOverride: string,
  descentOverride: string,
  display: string,
  featureSettings: string,
  lineGapOverride: string,
  stretch: string,
  style: string,
  unicodeRange: string,
  variationSettings: string,
  weight: string,
};

type FontFaceSetLoadEventInit = {
  ...EventInit,
  fontfaces: Array<FontFace>,
};

declare class FontFace {
  ascentOverride: string;
  descentOverride: string;
  display: string;
  family: string;
  +features: FontFaceFeatures;
  featureSettings: string;
  lineGapOverride: string;
  +loaded: Promise<FontFace>;
  +palettes: FontFacePalettes;
  +status: FontFaceLoadStatus;
  stretch: string;
  style: string;
  unicodeRange: string;
  +variations: FontFaceVariations;
  variationSettings: string;
  weight: string;

  constructor(
    family: string,
    source: string | BufferSource,
    descriptors?: FontFaceDescriptors,
  ): void;

  load(): Promise<FontFace>;
}

declare class FontFaceFeatures {}

declare class FontFacePalette {
  +length: number;
  +usableWithDarkBackground: boolean;
  +usableWithLightBackground: boolean;

  @@iterator(): Iterator<string>;

  (index: number): string;
}

declare class FontFacePalettes {
  +length: number;

  @@iterator(): Iterator<FontFacePalette>;

  (index: number): FontFacePalette;
}

declare class FontFaceSet extends EventTarget {
  onloading: EventHandler;
  onloadingdone: EventHandler;
  onloadingerror: EventHandler;
  +ready: Promise<FontFaceSet>;
  +status: FontFaceSetLoadStatus;

  add(font: FontFace): FontFaceSet;
  check(font: string, text?: string): boolean;
  clear(): void;
  delete(font: FontFace): boolean;
  load(font: string, text?: string): Promise<Array<FontFace>>;
}

declare class FontFaceSetLoadEvent extends Event {
  +fontfaces: $ReadOnlyArray<FontFace>;

  constructor(type: string, eventInitDict?: FontFaceSetLoadEventInit): void;
}

declare class FontFaceVariationAxis {
  +axisTag: string;
  +defaultValue: number;
  +maximumValue: number;
  +minimumValue: number;
  +name: string;
}

type FontFaceVariations = Set<FontFaceVariationAxis>;

declare class mixin$FontFaceSource {
  +fonts: FontFaceSet;
}

/*---------- css-fonts-5 ----------*/

declare class CSSFontFaceDescriptors extends CSSStyleDeclaration {
  ascentOverride: string;
  descentOverride: string;
  fontDisplay: string;
  fontFamily: string;
  fontFeatureSettings: string;
  fontLanguageOverride: string;
  fontNamedInstance: string;
  fontSize: string;
  fontStretch: string;
  fontStyle: string;
  fontVariationSettings: string;
  fontWeight: string;
  fontWidth: string;
  lineGapOverride: string;
  sizeAdjust: string;
  src: string;
  subscriptPositionOverride: string;
  subscriptSizeOverride: string;
  superscriptPositionOverride: string;
  superscriptSizeOverride: string;
  unicodeRange: string;
}

declare class CSSFontFaceRule extends CSSRule {
  +style: CSSFontFaceDescriptors;
}

/*---------- css-fonts ----------*/

// Contributes to:
//   - CSSRule

declare class CSSFontFeatureValuesMap {
  set(featureValueName: string, values: number | Array<number>): void;
}

declare class CSSFontFeatureValuesRule extends CSSRule {
  +annotation: CSSFontFeatureValuesMap;
  +characterVariant: CSSFontFeatureValuesMap;
  fontFamily: string;
  +historicalForms: CSSFontFeatureValuesMap;
  +ornaments: CSSFontFeatureValuesMap;
  +styleset: CSSFontFeatureValuesMap;
  +stylistic: CSSFontFeatureValuesMap;
  +swash: CSSFontFeatureValuesMap;
}

declare class CSSFontPaletteValuesRule extends CSSRule {
  +basePalette: string;
  +fontFamily: string;
  +name: string;
  +overrideColors: string;
}

/*---------- css-highlight-api ----------*/

// Contributes to:
//   - CSS
//   - HighlightRegistry

type HighlightType = 'highlight' | 'spelling-error' | 'grammar-error';

type HighlightsFromPointOptions = {
  shadowRoots: Array<ShadowRoot>,
};

declare class Highlight {
  priority: number;
  type: HighlightType;

  constructor(initialRanges: AbstractRange): void;
}

declare class HighlightRegistry {
  highlightsFromPoint(
    x: number,
    y: number,
    options?: HighlightsFromPointOptions,
  ): Array<Highlight>;
}

/*---------- css-images-4 ----------*/

// Contributes to:
//   - CSS

/*---------- css-layout-api ----------*/

// Contributes to:
//   - CSS

type BlockFragmentationType = 'none' | 'page' | 'column' | 'region';

type BreakType = 'none' | 'line' | 'column' | 'page' | 'region';

type ChildDisplayType = 'block' | 'normal';

type LayoutSizingMode = 'block-like' | 'manual';

type BreakTokenOptions = {
  childBreakTokens: Array<ChildBreakToken>,
  data: any,
};

type FragmentResultOptions = {
  autoBlockSize: number,
  blockSize: number,
  breakToken: BreakTokenOptions,
  childFragments: Array<LayoutFragment>,
  data: any,
  inlineSize: number,
};

type IntrinsicSizesResultOptions = {
  maxContentSize: number,
  minContentSize: number,
};

type LayoutConstraintsOptions = {
  availableBlockSize: number,
  availableInlineSize: number,
  blockFragmentationOffset: number,
  blockFragmentationType: BlockFragmentationType,
  data: any,
  fixedBlockSize: number,
  fixedInlineSize: number,
  percentageBlockSize: number,
  percentageInlineSize: number,
};

type LayoutOptions = {
  childDisplay: ChildDisplayType,
  sizing: LayoutSizingMode,
};

declare class BreakToken {
  +childBreakTokens: $ReadOnlyArray<ChildBreakToken>;
  +data: any;
}

declare class ChildBreakToken {
  +breakType: BreakType;
  +child: LayoutChild;
}

declare class FragmentResult {
  +blockSize: number;
  +inlineSize: number;

  constructor(options?: FragmentResultOptions): void;
}

declare class IntrinsicSizes {
  +maxContentSize: number;
  +minContentSize: number;
}

declare class LayoutChild {
  +styleMap: StylePropertyMapReadOnly;

  intrinsicSizes(): Promise<IntrinsicSizes>;
  layoutNextFragment(
    constraints: LayoutConstraintsOptions,
    breakToken: ChildBreakToken,
  ): Promise<LayoutFragment>;
}

declare class LayoutConstraints {
  +availableBlockSize: number;
  +availableInlineSize: number;
  +blockFragmentationOffset: number | null;
  +blockFragmentationType: BlockFragmentationType;
  +data: any;
  +fixedBlockSize: number | null;
  +fixedInlineSize: number | null;
  +percentageBlockSize: number;
  +percentageInlineSize: number;
}

declare class LayoutEdges {
  +block: number;
  +blockEnd: number;
  +blockStart: number;
  +inline: number;
  +inlineEnd: number;
  +inlineStart: number;
}

declare class LayoutFragment {
  blockOffset: number;
  +blockSize: number;
  +breakToken: ChildBreakToken | null;
  +data: any;
  inlineOffset: number;
  +inlineSize: number;
}

declare class LayoutWorkletGlobalScope extends WorkletGlobalScope {
  registerLayout(name: string, layoutCtor: VoidFunction): void;
}

/*---------- css-masking ----------*/

declare class SVGClipPathElement extends SVGElement {
  +clipPathUnits: SVGAnimatedEnumeration;
  +transform: SVGAnimatedTransformList;
}

declare class SVGMaskElement extends SVGElement {
  +height: SVGAnimatedLength;
  +maskContentUnits: SVGAnimatedEnumeration;
  +maskUnits: SVGAnimatedEnumeration;
  +width: SVGAnimatedLength;
  +x: SVGAnimatedLength;
  +y: SVGAnimatedLength;
}

/*---------- css-mixins ----------*/

type FunctionParameter = {
  defaultValue: string | null,
  name: string,
  type: string,
};

declare class CSSFunctionDeclarations extends CSSRule {
  +style: CSSFunctionDescriptors;
}

declare class CSSFunctionDescriptors extends CSSStyleDeclaration {
  result: string;
}

declare class CSSFunctionRule extends CSSGroupingRule {
  +name: string;
  +returnType: string;

  getParameters(): Array<FunctionParameter>;
}

/*---------- css-nav ----------*/

// Contributes to:
//   - Window
//   - Element

type FocusableAreaSearchMode = 'visible' | 'all';

type SpatialNavigationDirection = 'up' | 'down' | 'left' | 'right';

type FocusableAreasOption = {
  mode: FocusableAreaSearchMode,
};

type NavigationEventInit = {
  ...UIEventInit,
  dir: SpatialNavigationDirection,
  relatedTarget: EventTarget | null,
};

type SpatialNavigationSearchOptions = {
  candidates: Array<Node> | null,
  container: Node | null,
};

declare class NavigationEvent extends UIEvent {
  +dir: SpatialNavigationDirection;
  +relatedTarget: EventTarget | null;

  constructor(type: string, eventInitDict?: NavigationEventInit): void;
}

/*---------- css-nesting ----------*/

declare class CSSNestedDeclarations extends CSSRule {
  +style: CSSStyleProperties;
}

/*---------- css-paint-api ----------*/

// Contributes to:
//   - CSS

type PaintRenderingContext2DSettings = {
  alpha: boolean,
};

declare class PaintRenderingContext2D
  mixins
    mixin$CanvasState,
    mixin$CanvasTransform,
    mixin$CanvasCompositing,
    mixin$CanvasImageSmoothing,
    mixin$CanvasFillStrokeStyles,
    mixin$CanvasShadowStyles,
    mixin$CanvasRect,
    mixin$CanvasDrawPath,
    mixin$CanvasDrawImage,
    mixin$CanvasPathDrawingStyles,
    mixin$CanvasPath {}

declare class PaintSize {
  +height: number;
  +width: number;
}

declare class PaintWorkletGlobalScope extends WorkletGlobalScope {
  +devicePixelRatio: number;

  registerPaint(name: string, paintCtor: VoidFunction): void;
}

/*---------- css-properties-values-api ----------*/

// Contributes to:
//   - CSS

type PropertyDefinition = {
  inherits: boolean,
  initialValue: string,
  name: string,
  syntax: string,
};

declare class CSSPropertyRule extends CSSRule {
  +inherits: boolean;
  +initialValue: string | null;
  +name: string;
  +syntax: string;
}

/*---------- css-pseudo ----------*/

// Contributes to:
//   - Element

declare class CSSPseudoElement extends EventTarget mixins mixin$GeometryUtils {
  +element: Element;
  +parent: Element | CSSPseudoElement;
  +type: string;

  pseudo(type: string): CSSPseudoElement | null;
}

/*---------- css-regions ----------*/

// Contributes to:
//   - Document

declare class NamedFlow extends EventTarget {
  +firstEmptyRegionIndex: number;
  +name: string;
  +overset: boolean;

  getContent(): Array<Node>;
  getRegions(): Array<Element>;
  getRegionsByContent(node: Node): Array<Element>;
}

type NamedFlowMap = Map<string, NamedFlow>;

declare class mixin$Region {
  +regionOverset: string;

  getRegionFlowRanges(): Array<Range> | null;
}

/*---------- css-scroll-snap-2 ----------*/

// Contributes to:
//   - GlobalEventHandlers

type SnapEventInit = {
  ...EventInit,
  snapTargetBlock: Node | null,
  snapTargetInline: Node | null,
};

declare class SnapEvent extends Event {
  +snapTargetBlock: Node | null;
  +snapTargetInline: Node | null;

  constructor(type: string, eventInitDict?: SnapEventInit): void;
}

/*---------- css-shadow-parts ----------*/

// Contributes to:
//   - Element

/*---------- css-transitions-2 ----------*/

declare class CSSStartingStyleRule extends CSSGroupingRule {}

declare class CSSTransition extends Animation {
  +transitionProperty: string;
}

/*---------- css-transitions ----------*/

// Contributes to:
//   - GlobalEventHandlers

type TransitionEventInit = {
  ...EventInit,
  elapsedTime: number,
  propertyName: string,
  pseudoElement: string,
};

declare class TransitionEvent extends Event {
  +elapsedTime: number;
  +propertyName: string;
  +pseudoElement: string;

  constructor(
    type: string,
    transitionEventInitDict?: TransitionEventInit,
  ): void;
}

/*---------- css-typed-om ----------*/

// Contributes to:
//   - Element
//   - CSSStyleRule
//   - ElementCSSInlineStyle
//   - CSS

type CSSColorAngle = CSSNumberish | CSSKeywordish;

type CSSColorNumber = CSSNumberish | CSSKeywordish;

type CSSColorPercent = CSSNumberish | CSSKeywordish;

type CSSColorRGBComp = CSSNumberish | CSSKeywordish;

type CSSKeywordish = string | CSSKeywordValue;

type CSSNumberish = number | CSSNumericValue;

type CSSPerspectiveValue = CSSNumericValue | CSSKeywordish;

type CSSUnparsedSegment = string | CSSVariableReferenceValue;

type CSSMathOperator =
  | 'sum'
  | 'product'
  | 'negate'
  | 'invert'
  | 'min'
  | 'max'
  | 'clamp';

type CSSNumericBaseType =
  | 'length'
  | 'angle'
  | 'time'
  | 'frequency'
  | 'resolution'
  | 'flex'
  | 'percent';

type CSSMatrixComponentOptions = {
  is2D: boolean,
};

type CSSNumericType = {
  angle: number,
  flex: number,
  frequency: number,
  length: number,
  percent: number,
  percentHint: CSSNumericBaseType,
  resolution: number,
  time: number,
};

declare class CSSColor extends CSSColorValue {
  alpha: CSSNumberish;
  channels: Array<CSSColorPercent>;
  colorSpace: CSSKeywordish;

  constructor(
    colorSpace: CSSKeywordish,
    channels: Array<CSSColorPercent>,
    alpha?: CSSNumberish,
  ): void;
}

declare class CSSColorValue extends CSSStyleValue {
  static parse(cssText: string): CSSColorValue | CSSStyleValue;
}

declare class CSSHSL extends CSSColorValue {
  alpha: CSSColorPercent;
  h: CSSColorAngle;
  l: CSSColorPercent;
  s: CSSColorPercent;

  constructor(
    h: CSSColorAngle,
    s: CSSColorPercent,
    l: CSSColorPercent,
    alpha?: CSSColorPercent,
  ): void;
}

declare class CSSHWB extends CSSColorValue {
  alpha: CSSNumberish;
  b: CSSNumberish;
  h: CSSNumericValue;
  w: CSSNumberish;

  constructor(
    h: CSSNumericValue,
    w: CSSNumberish,
    b: CSSNumberish,
    alpha?: CSSNumberish,
  ): void;
}

declare class CSSImageValue extends CSSStyleValue {}

declare class CSSKeywordValue extends CSSStyleValue {
  value: string;

  constructor(value: string): void;
}

declare class CSSLab extends CSSColorValue {
  a: CSSColorNumber;
  alpha: CSSColorPercent;
  b: CSSColorNumber;
  l: CSSColorPercent;

  constructor(
    l: CSSColorPercent,
    a: CSSColorNumber,
    b: CSSColorNumber,
    alpha?: CSSColorPercent,
  ): void;
}

declare class CSSLCH extends CSSColorValue {
  alpha: CSSColorPercent;
  c: CSSColorPercent;
  h: CSSColorAngle;
  l: CSSColorPercent;

  constructor(
    l: CSSColorPercent,
    c: CSSColorPercent,
    h: CSSColorAngle,
    alpha?: CSSColorPercent,
  ): void;
}

declare class CSSMathClamp extends CSSMathValue {
  +lower: CSSNumericValue;
  +upper: CSSNumericValue;
  +value: CSSNumericValue;

  constructor(
    lower: CSSNumberish,
    value: CSSNumberish,
    upper: CSSNumberish,
  ): void;
}

declare class CSSMathInvert extends CSSMathValue {
  +value: CSSNumericValue;

  constructor(arg: CSSNumberish): void;
}

declare class CSSMathMax extends CSSMathValue {
  +values: CSSNumericArray;

  constructor(args: CSSNumberish): void;
}

declare class CSSMathMin extends CSSMathValue {
  +values: CSSNumericArray;

  constructor(args: CSSNumberish): void;
}

declare class CSSMathNegate extends CSSMathValue {
  +value: CSSNumericValue;

  constructor(arg: CSSNumberish): void;
}

declare class CSSMathProduct extends CSSMathValue {
  +values: CSSNumericArray;

  constructor(args: CSSNumberish): void;
}

declare class CSSMathSum extends CSSMathValue {
  +values: CSSNumericArray;

  constructor(args: CSSNumberish): void;
}

declare class CSSMathValue extends CSSNumericValue {
  +operator: CSSMathOperator;
}

declare class CSSMatrixComponent extends CSSTransformComponent {
  matrix: DOMMatrix;

  constructor(
    matrix: DOMMatrixReadOnly,
    options?: CSSMatrixComponentOptions,
  ): void;
}

declare class CSSNumericArray {
  +length: number;

  @@iterator(): Iterator<CSSNumericValue>;

  (index: number): CSSNumericValue;
}

declare class CSSNumericValue extends CSSStyleValue {
  static parse(cssText: string): CSSNumericValue;
  add(values: CSSNumberish): CSSNumericValue;
  div(values: CSSNumberish): CSSNumericValue;
  equals(value: CSSNumberish): boolean;
  max(values: CSSNumberish): CSSNumericValue;
  min(values: CSSNumberish): CSSNumericValue;
  mul(values: CSSNumberish): CSSNumericValue;
  sub(values: CSSNumberish): CSSNumericValue;
  to(unit: string): CSSUnitValue;
  toSum(units: string): CSSMathSum;
  type(): CSSNumericType;
}

declare class CSSOKLab extends CSSColorValue {
  a: CSSColorNumber;
  alpha: CSSColorPercent;
  b: CSSColorNumber;
  l: CSSColorPercent;

  constructor(
    l: CSSColorPercent,
    a: CSSColorNumber,
    b: CSSColorNumber,
    alpha?: CSSColorPercent,
  ): void;
}

declare class CSSOKLCH extends CSSColorValue {
  alpha: CSSColorPercent;
  c: CSSColorPercent;
  h: CSSColorAngle;
  l: CSSColorPercent;

  constructor(
    l: CSSColorPercent,
    c: CSSColorPercent,
    h: CSSColorAngle,
    alpha?: CSSColorPercent,
  ): void;
}

declare class CSSPerspective extends CSSTransformComponent {
  length: CSSPerspectiveValue;

  constructor(length: CSSPerspectiveValue): void;
}

declare class CSSRGB extends CSSColorValue {
  alpha: CSSColorPercent;
  b: CSSColorRGBComp;
  g: CSSColorRGBComp;
  r: CSSColorRGBComp;

  constructor(
    r: CSSColorRGBComp,
    g: CSSColorRGBComp,
    b: CSSColorRGBComp,
    alpha?: CSSColorPercent,
  ): void;
}

declare class CSSRotate extends CSSTransformComponent {
  angle: CSSNumericValue;
  x: CSSNumberish;
  y: CSSNumberish;
  z: CSSNumberish;

  constructor(angle: CSSNumericValue): void;
  constructor(
    x: CSSNumberish,
    y: CSSNumberish,
    z: CSSNumberish,
    angle: CSSNumericValue,
  ): void;
}

declare class CSSScale extends CSSTransformComponent {
  x: CSSNumberish;
  y: CSSNumberish;
  z: CSSNumberish;

  constructor(x: CSSNumberish, y: CSSNumberish, z?: CSSNumberish): void;
}

declare class CSSSkew extends CSSTransformComponent {
  ax: CSSNumericValue;
  ay: CSSNumericValue;

  constructor(ax: CSSNumericValue, ay: CSSNumericValue): void;
}

declare class CSSSkewX extends CSSTransformComponent {
  ax: CSSNumericValue;

  constructor(ax: CSSNumericValue): void;
}

declare class CSSSkewY extends CSSTransformComponent {
  ay: CSSNumericValue;

  constructor(ay: CSSNumericValue): void;
}

declare class CSSStyleValue {
  static parse(property: string, cssText: string): CSSStyleValue;
  static parseAll(property: string, cssText: string): Array<CSSStyleValue>;
  toString(): string;
}

declare class CSSTransformComponent {
  is2D: boolean;

  toString(): string;

  toMatrix(): DOMMatrix;
}

declare class CSSTransformValue extends CSSStyleValue {
  +is2D: boolean;
  +length: number;

  constructor(transforms: Array<CSSTransformComponent>): void;

  @@iterator(): Iterator<CSSTransformComponent>;

  (index: number): CSSTransformComponent;
  (index: number, val: CSSTransformComponent): CSSTransformComponent;
  toMatrix(): DOMMatrix;
}

declare class CSSTranslate extends CSSTransformComponent {
  x: CSSNumericValue;
  y: CSSNumericValue;
  z: CSSNumericValue;

  constructor(
    x: CSSNumericValue,
    y: CSSNumericValue,
    z?: CSSNumericValue,
  ): void;
}

declare class CSSUnitValue extends CSSNumericValue {
  +unit: string;
  value: number;

  constructor(value: number, unit: string): void;
}

declare class CSSUnparsedValue extends CSSStyleValue {
  +length: number;

  constructor(members: Array<CSSUnparsedSegment>): void;

  @@iterator(): Iterator<CSSUnparsedSegment>;

  (index: number): CSSUnparsedSegment;
  (index: number, val: CSSUnparsedSegment): CSSUnparsedSegment;
}

declare class CSSVariableReferenceValue {
  +fallback: CSSUnparsedValue | null;
  variable: string;

  constructor(variable: string, fallback?: CSSUnparsedValue | null): void;
}

declare class StylePropertyMap extends StylePropertyMapReadOnly {
  append(property: string, values: CSSStyleValue | string): void;
  clear(): void;
  delete(property: string): void;
  set(property: string, values: CSSStyleValue | string): void;
}

declare class StylePropertyMapReadOnly {
  +size: number;

  @@iterator(): Iterator<string, Array<CSSStyleValue>>;

  get(property: string): void | CSSStyleValue;
  getAll(property: string): Array<CSSStyleValue>;
  has(property: string): boolean;
}

/*---------- css-view-transitions-2 ----------*/

// Contributes to:
//   - ViewTransition
//   - Document

type StartViewTransitionOptions = {
  types: Array<string> | null,
  update: ViewTransitionUpdateCallback | null,
};

declare class CSSViewTransitionRule extends CSSRule {
  +navigation: string;
  +types: $ReadOnlyArray<string>;
}

type ViewTransitionTypeSet = Set<string>;

/*---------- css-view-transitions ----------*/

type ViewTransitionUpdateCallback = () => Promise<any>;

declare class ViewTransition {
  +finished: Promise<void>;
  +ready: Promise<void>;
  types: ViewTransitionTypeSet;
  +updateCallbackDone: Promise<void>;

  skipTransition(): void;
}

/*---------- cssom-view ----------*/

// Contributes to:
//   - Window
//   - Document
//   - Element
//   - HTMLElement
//   - HTMLImageElement
//   - Range
//   - MouseEvent

type GeometryNode = Text | Element | CSSPseudoElement | Document;

type CSSBoxType = 'margin' | 'border' | 'padding' | 'content';

type ScrollBehavior = 'auto' | 'instant' | 'smooth';

type ScrollIntoViewContainer = 'all' | 'nearest';

type ScrollLogicalPosition = 'start' | 'center' | 'end' | 'nearest';

type BoxQuadOptions = {
  box: CSSBoxType,
  relativeTo: GeometryNode,
};

type CaretPositionFromPointOptions = {
  shadowRoots: Array<ShadowRoot>,
};

type CheckVisibilityOptions = {
  checkOpacity: boolean,
  checkVisibilityCSS: boolean,
  contentVisibilityAuto: boolean,
  opacityProperty: boolean,
  visibilityProperty: boolean,
};

type ConvertCoordinateOptions = {
  fromBox: CSSBoxType,
  toBox: CSSBoxType,
};

type MediaQueryListEventInit = {
  ...EventInit,
  matches: boolean,
  media: string,
};

type ScrollIntoViewOptions = {
  ...ScrollOptions,
  block: ScrollLogicalPosition,
  container: ScrollIntoViewContainer,
  inline: ScrollLogicalPosition,
};

type ScrollOptions = {
  behavior: ScrollBehavior,
};

type ScrollToOptions = {
  ...ScrollOptions,
  left: number,
  top: number,
};

declare class CaretPosition {
  +offset: number;
  +offsetNode: Node;

  getClientRect(): DOMRect | null;
}

declare class MediaQueryList extends EventTarget {
  +matches: boolean;
  +media: string;
  onchange: EventHandler;

  addListener(callback: EventListener | null): void;
  removeListener(callback: EventListener | null): void;
}

declare class MediaQueryListEvent extends Event {
  +matches: boolean;
  +media: string;

  constructor(type: string, eventInitDict?: MediaQueryListEventInit): void;
}

declare class Screen {
  +availHeight: number;
  +availWidth: number;
  +colorDepth: number;
  +height: number;
  +isExtended: boolean;
  onchange: EventHandler;
  +orientation: ScreenOrientation;
  +pixelDepth: number;
  +width: number;
}

declare class VisualViewport extends EventTarget {
  +height: number;
  +offsetLeft: number;
  +offsetTop: number;
  onresize: EventHandler;
  onscroll: EventHandler;
  onscrollend: EventHandler;
  +pageLeft: number;
  +pageTop: number;
  +scale: number;
  +width: number;
}

declare class mixin$GeometryUtils {
  convertPointFromNode(
    point: DOMPointInit,
    from: GeometryNode,
    options?: ConvertCoordinateOptions,
  ): DOMPoint;
  convertQuadFromNode(
    quad: DOMQuadInit,
    from: GeometryNode,
    options?: ConvertCoordinateOptions,
  ): DOMQuad;
  convertRectFromNode(
    rect: DOMRectReadOnly,
    from: GeometryNode,
    options?: ConvertCoordinateOptions,
  ): DOMQuad;
  getBoxQuads(options?: BoxQuadOptions): Array<DOMQuad>;
}

/*---------- cssom ----------*/

// Contributes to:
//   - CSSStyleSheet
//   - DocumentOrShadowRoot
//   - Window

type CSSStyleSheetInit = {
  baseURL: string,
  disabled: boolean,
  media: MediaList | string,
};

declare namespace CSS {
  declare const elementSources: any;
  declare const highlights: HighlightRegistry;
  declare const layoutWorklet: Worklet;
  declare const paintWorklet: Worklet;
  declare function cap(value: number): CSSUnitValue;
  declare function ch(value: number): CSSUnitValue;
  declare function cm(value: number): CSSUnitValue;
  declare function cqb(value: number): CSSUnitValue;
  declare function cqh(value: number): CSSUnitValue;
  declare function cqi(value: number): CSSUnitValue;
  declare function cqmax(value: number): CSSUnitValue;
  declare function cqmin(value: number): CSSUnitValue;
  declare function cqw(value: number): CSSUnitValue;
  declare function deg(value: number): CSSUnitValue;
  declare function dpcm(value: number): CSSUnitValue;
  declare function dpi(value: number): CSSUnitValue;
  declare function dppx(value: number): CSSUnitValue;
  declare function dvb(value: number): CSSUnitValue;
  declare function dvh(value: number): CSSUnitValue;
  declare function dvi(value: number): CSSUnitValue;
  declare function dvmax(value: number): CSSUnitValue;
  declare function dvmin(value: number): CSSUnitValue;
  declare function dvw(value: number): CSSUnitValue;
  declare function em(value: number): CSSUnitValue;
  declare function escape(ident: string): string;
  declare function ex(value: number): CSSUnitValue;
  declare function fr(value: number): CSSUnitValue;
  declare function grad(value: number): CSSUnitValue;
  declare function Hz(value: number): CSSUnitValue;
  declare function ic(value: number): CSSUnitValue;
  /* declare function in(value: number): CSSUnitValue; */
  declare function kHz(value: number): CSSUnitValue;
  declare function lh(value: number): CSSUnitValue;
  declare function lvb(value: number): CSSUnitValue;
  declare function lvh(value: number): CSSUnitValue;
  declare function lvi(value: number): CSSUnitValue;
  declare function lvmax(value: number): CSSUnitValue;
  declare function lvmin(value: number): CSSUnitValue;
  declare function lvw(value: number): CSSUnitValue;
  declare function mm(value: number): CSSUnitValue;
  declare function ms(value: number): CSSUnitValue;
  declare function number(value: number): CSSUnitValue;
  declare function pc(value: number): CSSUnitValue;
  declare function percent(value: number): CSSUnitValue;
  declare function pt(value: number): CSSUnitValue;
  declare function px(value: number): CSSUnitValue;
  declare function Q(value: number): CSSUnitValue;
  declare function rad(value: number): CSSUnitValue;
  declare function rcap(value: number): CSSUnitValue;
  declare function rch(value: number): CSSUnitValue;
  declare function registerProperty(definition: PropertyDefinition): void;
  declare function rem(value: number): CSSUnitValue;
  declare function rex(value: number): CSSUnitValue;
  declare function ric(value: number): CSSUnitValue;
  declare function rlh(value: number): CSSUnitValue;
  declare function s(value: number): CSSUnitValue;
  declare function supports(property: string, value: string): boolean;
  declare function supports(conditionText: string): boolean;
  declare function svb(value: number): CSSUnitValue;
  declare function svh(value: number): CSSUnitValue;
  declare function svi(value: number): CSSUnitValue;
  declare function svmax(value: number): CSSUnitValue;
  declare function svmin(value: number): CSSUnitValue;
  declare function svw(value: number): CSSUnitValue;
  declare function turn(value: number): CSSUnitValue;
  declare function vb(value: number): CSSUnitValue;
  declare function vh(value: number): CSSUnitValue;
  declare function vi(value: number): CSSUnitValue;
  declare function vmax(value: number): CSSUnitValue;
  declare function vmin(value: number): CSSUnitValue;
  declare function vw(value: number): CSSUnitValue;
}

declare class CSSGroupingRule extends CSSRule {
  +cssRules: CSSRuleList;

  deleteRule(index: number): void;
  insertRule(rule: string, index?: number): number;
}

declare class CSSImportRule extends CSSRule {
  +href: string;
  +layerName: string | null;
  +media: MediaList;
  +styleSheet: CSSStyleSheet | null;
  +supportsText: string | null;
}

declare class CSSMarginRule extends CSSRule {
  +name: string;
  +style: CSSStyleDeclaration;
}

declare class CSSNamespaceRule extends CSSRule {
  +namespaceURI: string;
  +prefix: string;
}

declare class CSSPageDescriptors extends CSSStyleDeclaration {
  bleed: string;
  margin: string;
  marginBottom: string;
  marginLeft: string;
  marginRight: string;
  marginTop: string;
  marks: string;
  pageOrientation: string;
  size: string;
}

declare class CSSPageRule extends CSSGroupingRule {
  selectorText: string;
  +style: CSSPageDescriptors;
}

declare class CSSRule {
  static +CHARSET_RULE: 2;
  static +COUNTER_STYLE_RULE: 11;
  static +FONT_FACE_RULE: 5;
  static +FONT_FEATURE_VALUES_RULE: 14;
  static +IMPORT_RULE: 3;
  static +KEYFRAME_RULE: 8;
  static +KEYFRAMES_RULE: 7;
  static +MARGIN_RULE: 9;
  static +MEDIA_RULE: 4;
  static +NAMESPACE_RULE: 10;
  static +PAGE_RULE: 6;
  static +STYLE_RULE: 1;
  static +SUPPORTS_RULE: 12;

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
  cssText: string;
  +length: number;
  +parentRule: CSSRule | null;

  item(index: number): string;
  getPropertyPriority(property: string): string;
  getPropertyValue(property: string): string;
  removeProperty(property: string): string;
  setProperty(property: string, value: string, priority?: string): void;
}

declare class CSSStyleProperties extends CSSStyleDeclaration {
  cssFloat: string;
}

declare class CSSStyleRule extends CSSGroupingRule {
  selectorText: string;
  +style: CSSStyleProperties;
  +styleMap: StylePropertyMap;
}

declare class CSSStyleSheet extends StyleSheet {
  +cssRules: CSSRuleList;
  +ownerRule: CSSRule | null;
  +rules: CSSRuleList;

  constructor(options?: CSSStyleSheetInit): void;

  addRule(selector?: string, style?: string, index?: number): number;
  deleteRule(index: number): void;
  insertRule(rule: string, index?: number): number;
  removeRule(index?: number): void;
  replace(text: string): Promise<CSSStyleSheet>;
  replaceSync(text: string): void;
}

declare class MediaList {
  +length: number;
  mediaText: string;

  item(index: number): string | null;
  appendMedium(medium: string): void;
  deleteMedium(medium: string): void;
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

declare class mixin$ElementCSSInlineStyle {
  +attributeStyleMap: StylePropertyMap;
  +style: CSSStyleDeclaration;
}

declare class mixin$LinkStyle {
  +sheet: CSSStyleSheet | null;
}

/*---------- datacue ----------*/

declare class DataCue extends TextTrackCue {
  +type: string;
  value: any;

  constructor(
    startTime: number,
    endTime: number,
    value: any,
    type?: string,
  ): void;
}

/*---------- deprecation-reporting ----------*/

declare class DeprecationReportBody extends ReportBody {
  +anticipatedRemoval: Object | null;
  +columnNumber: number | null;
  +id: string;
  +lineNumber: number | null;
  +message: string;
  +sourceFile: string | null;

  toJSON(): Object;
}

/*---------- device-attributes ----------*/

// Contributes to:
//   - NavigatorManagedData

/*---------- device-memory ----------*/

declare class mixin$NavigatorDeviceMemory {
  +deviceMemory: number;
}

/*---------- device-posture ----------*/

// Contributes to:
//   - Navigator

type DevicePostureType = 'continuous' | 'folded';

declare class DevicePosture extends EventTarget {
  onchange: EventHandler;
  +type: DevicePostureType;
}

/*---------- digital-credentials ----------*/

// Contributes to:
//   - CredentialRequestOptions
//   - CredentialCreationOptions

type DigitalCredentialCreateRequest = {
  data: Object,
  protocol: string,
};

type DigitalCredentialCreationOptions = {
  requests: Array<DigitalCredentialCreateRequest>,
};

type DigitalCredentialGetRequest = {
  data: Object,
  protocol: string,
};

type DigitalCredentialRequestOptions = {
  requests: Array<DigitalCredentialGetRequest>,
};

declare class DigitalCredential extends Credential {
  +data: Object;
  +protocol: string;
}

/*---------- digital-goods ----------*/

// Contributes to:
//   - Window

type ItemType = 'product' | 'subscription';

type ItemDetails = {
  description: string,
  freeTrialPeriod: string,
  iconURLs: Array<string>,
  introductoryPrice: PaymentCurrencyAmount,
  introductoryPriceCycles: number,
  introductoryPricePeriod: string,
  itemId: string,
  price: PaymentCurrencyAmount,
  subscriptionPeriod: string,
  title: string,
  type: ItemType,
};

type PurchaseDetails = {
  itemId: string,
  purchaseToken: string,
};

declare class DigitalGoodsService {
  consume(purchaseToken: string): Promise<void>;
  getDetails(itemIds: Array<string>): Promise<Array<ItemDetails>>;
  listPurchaseHistory(): Promise<Array<PurchaseDetails>>;
  listPurchases(): Promise<Array<PurchaseDetails>>;
}

/*---------- document-picture-in-picture ----------*/

// Contributes to:
//   - Window

type DocumentPictureInPictureEventInit = {
  ...EventInit,
  window: Window,
};

type DocumentPictureInPictureOptions = {
  disallowReturnToOpener: boolean,
  height: number,
  preferInitialWindowPlacement: boolean,
  width: number,
};

declare class DocumentPictureInPicture extends EventTarget {
  onenter: EventHandler;
  +window: Window;

  requestWindow(options?: DocumentPictureInPictureOptions): Promise<Window>;
}

declare class DocumentPictureInPictureEvent extends Event {
  +window: Window;

  constructor(
    type: string,
    eventInitDict: DocumentPictureInPictureEventInit,
  ): void;
}

/*---------- dom ----------*/

// Contributes to:
//   - Window

type ShadowRootMode = 'open' | 'closed';

type SlotAssignmentMode = 'manual' | 'named';

type AddEventListenerOptions = {
  ...EventListenerOptions,
  once: boolean,
  passive: boolean,
  signal: AbortSignal,
};

type CustomEventInit = {
  ...EventInit,
  detail: any,
};

type ElementCreationOptions = {
  customElementRegistry: CustomElementRegistry,
  is: string,
};

type EventInit = {
  bubbles: boolean,
  cancelable: boolean,
  composed: boolean,
};

type EventListenerOptions = {
  capture: boolean,
};

type GetRootNodeOptions = {
  composed: boolean,
};

type ImportNodeOptions = {
  customElementRegistry: CustomElementRegistry,
  selfOnly: boolean,
};

type MutationObserverInit = {
  attributeFilter: Array<string>,
  attributeOldValue: boolean,
  attributes: boolean,
  characterData: boolean,
  characterDataOldValue: boolean,
  childList: boolean,
  subtree: boolean,
};

type ShadowRootInit = {
  clonable: boolean,
  customElementRegistry: CustomElementRegistry,
  delegatesFocus: boolean,
  mode: ShadowRootMode,
  serializable: boolean,
  slotAssignment: SlotAssignmentMode,
};

type StaticRangeInit = {
  endContainer: Node,
  endOffset: number,
  startContainer: Node,
  startOffset: number,
};

type MutationCallback = (
  mutations: Array<MutationRecord>,
  observer: MutationObserver,
) => void;

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

declare class Comment extends CharacterData {
  constructor(data?: string): void;
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

declare class Document
  extends Node
  mixins
    mixin$FontFaceSource,
    mixin$GeometryUtils,
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
  body: HTMLElement | null;
  +characterSet: string;
  +charset: string;
  +compatMode: string;
  +contentType: string;
  cookie: string;
  +currentScript: HTMLOrSVGScriptElement | null;
  +defaultView: WindowProxy | null;
  designMode: string;
  dir: string;
  +doctype: DocumentType | null;
  +documentElement: Element | null;
  +documentURI: string;
  domain: string;
  +embeds: HTMLCollection;
  fgColor: string;
  +forms: HTMLCollection;
  +fragmentDirective: FragmentDirective;
  +fullscreen: boolean;
  +fullscreenEnabled: boolean;
  +head: HTMLHeadElement | null;
  +hidden: boolean;
  +images: HTMLCollection;
  +implementation: DOMImplementation;
  +inputEncoding: string;
  +lastModified: string;
  linkColor: string;
  +links: HTMLCollection;
  +location: Location | null;
  +namedFlows: NamedFlowMap;
  onfreeze: EventHandler;
  onfullscreenchange: EventHandler;
  onfullscreenerror: EventHandler;
  onpointerlockchange: EventHandler;
  onpointerlockerror: EventHandler;
  onprerenderingchange: EventHandler;
  onreadystatechange: EventHandler;
  onresume: EventHandler;
  onvisibilitychange: EventHandler;
  +permissionsPolicy: PermissionsPolicy;
  +pictureInPictureEnabled: boolean;
  +plugins: HTMLCollection;
  +prerendering: boolean;
  +readyState: DocumentReadyState;
  +referrer: string;
  +rootElement: SVGSVGElement | null;
  +scripts: HTMLCollection;
  +scrollingElement: Element | null;
  +timeline: DocumentTimeline;
  title: string;
  +URL: string;
  +visibilityState: DocumentVisibilityState;
  vlinkColor: string;
  +wasDiscarded: boolean;

  constructor(): void;

  static parseHTMLUnsafe(html: TrustedHTML | string): Document;
  adoptNode(node: Node): Node;
  captureEvents(): void;
  caretPositionFromPoint(
    x: number,
    y: number,
    options?: CaretPositionFromPointOptions,
  ): CaretPosition | null;
  clear(): void;
  close(): void;
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
  elementFromPoint(x: number, y: number): Element | null;
  elementsFromPoint(x: number, y: number): Array<Element>;
  execCommand(commandId: string, showUI?: boolean, value?: string): boolean;
  exitFullscreen(): Promise<void>;
  exitPictureInPicture(): Promise<void>;
  exitPointerLock(): void;
  getElementsByClassName(classNames: string): HTMLCollection;
  getElementsByName(elementName: string): NodeList;
  getElementsByTagName(qualifiedName: string): HTMLCollection;
  getElementsByTagNameNS(
    namespace: string | null,
    localName: string,
  ): HTMLCollection;
  getSelection(): Selection | null;
  hasPrivateToken(issuer: string): Promise<boolean>;
  hasRedemptionRecord(issuer: string): Promise<boolean>;
  hasStorageAccess(): Promise<boolean>;
  hasUnpartitionedCookieAccess(): Promise<boolean>;
  importNode(node: Node, options?: boolean | ImportNodeOptions): Node;
  open(url: string, name: string, features: string): WindowProxy | null;
  queryCommandSupported(commandId: string): boolean;
  queryCommandValue(commandId: string): string;
  startViewTransition(
    callbackOptions?: ViewTransitionUpdateCallback | StartViewTransitionOptions,
  ): ViewTransition;
  (name: string): Object;
  hasFocus(): boolean;
  open(unused1?: string, unused2?: string): Document;
  queryCommandEnabled(commandId: string): boolean;
  queryCommandIndeterm(commandId: string): boolean;
  queryCommandState(commandId: string): boolean;
  releaseEvents(): void;
  requestStorageAccess(): Promise<void>;
  requestStorageAccessFor(requestedOrigin: string): Promise<void>;
  write(text: TrustedHTML | string): void;
  writeln(text: TrustedHTML | string): void;
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

declare class Element
  extends Node
  mixins
    mixin$Region,
    mixin$GeometryUtils,
    mixin$ParentNode,
    mixin$NonDocumentTypeChildNode,
    mixin$ChildNode,
    mixin$Slottable,
    mixin$ARIAMixin,
    mixin$Animatable
{
  +attributes: NamedNodeMap;
  +classList: DOMTokenList;
  className: string;
  +clientHeight: number;
  +clientLeft: number;
  +clientTop: number;
  +clientWidth: number;
  +currentCSSZoom: number;
  +customElementRegistry: CustomElementRegistry | null;
  elementTiming: string;
  id: string;
  innerHTML: TrustedHTML | string;
  +localName: string;
  +namespaceURI: string | null;
  onfullscreenchange: EventHandler;
  onfullscreenerror: EventHandler;
  outerHTML: TrustedHTML | string;
  +part: DOMTokenList;
  +prefix: string | null;
  +scrollHeight: number;
  scrollLeft: number;
  scrollTop: number;
  +scrollWidth: number;
  +shadowRoot: ShadowRoot | null;
  slot: string;
  +tagName: string;

  attachShadow(init: ShadowRootInit): ShadowRoot;
  checkVisibility(options?: CheckVisibilityOptions): boolean;
  closest(selectors: string): Element | null;
  computedStyleMap(): StylePropertyMapReadOnly;
  focusableAreas(option?: FocusableAreasOption): Array<Node>;
  getAttribute(qualifiedName: string): string | null;
  getAttributeNames(): Array<string>;
  getAttributeNode(qualifiedName: string): Attr | null;
  getAttributeNodeNS(namespace: string | null, localName: string): Attr | null;
  getAttributeNS(namespace: string | null, localName: string): string | null;
  getBoundingClientRect(): DOMRect;
  getClientRects(): DOMRectList;
  getElementsByClassName(classNames: string): HTMLCollection;
  getElementsByTagName(qualifiedName: string): HTMLCollection;
  getElementsByTagNameNS(
    namespace: string | null,
    localName: string,
  ): HTMLCollection;
  getHTML(options?: GetHTMLOptions): string;
  getSpatialNavigationContainer(): Node;
  hasAttribute(qualifiedName: string): boolean;
  hasAttributeNS(namespace: string | null, localName: string): boolean;
  hasAttributes(): boolean;
  hasPointerCapture(pointerId: number): boolean;
  insertAdjacentElement(where: string, element: Element): Element | null;
  insertAdjacentHTML(position: string, string: TrustedHTML | string): void;
  insertAdjacentText(where: string, data: string): void;
  matches(selectors: string): boolean;
  pseudo(type: string): CSSPseudoElement | null;
  releasePointerCapture(pointerId: number): void;
  removeAttribute(qualifiedName: string): void;
  removeAttributeNode(attr: Attr): Attr;
  removeAttributeNS(namespace: string | null, localName: string): void;
  requestFullscreen(options?: FullscreenOptions): Promise<void>;
  requestPointerLock(options?: PointerLockOptions): Promise<void>;
  scroll(options?: ScrollToOptions): void;
  scroll(x: number, y: number): void;
  scrollBy(options?: ScrollToOptions): void;
  scrollBy(x: number, y: number): void;
  scrollIntoView(arg?: boolean | ScrollIntoViewOptions): void;
  scrollTo(options?: ScrollToOptions): void;
  scrollTo(x: number, y: number): void;
  setAttribute(qualifiedName: string, value: string): void;
  setAttributeNode(attr: Attr): Attr | null;
  setAttributeNodeNS(attr: Attr): Attr | null;
  setAttributeNS(
    namespace: string | null,
    qualifiedName: string,
    value: string,
  ): void;
  setHTMLUnsafe(html: TrustedHTML | string): void;
  setPointerCapture(pointerId: number): void;
  spatialNavigationSearch(
    dir: SpatialNavigationDirection,
    options?: SpatialNavigationSearchOptions,
  ): Node | null;
  toggleAttribute(qualifiedName: string, force?: boolean): boolean;
  webkitMatchesSelector(selectors: string): boolean;
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
  when(type: string, options?: ObservableEventListenerOptions): Observable;
}

declare class HTMLCollection {
  +length: number;

  item(index: number): Element | null;
  namedItem(name: string): Element | null;
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

declare class ProcessingInstruction
  extends CharacterData
  mixins mixin$LinkStyle
{
  +target: string;
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
  createContextualFragment(string: TrustedHTML | string): DocumentFragment;
  deleteContents(): void;
  detach(): void;
  extractContents(): DocumentFragment;
  getBoundingClientRect(): DOMRect;
  getClientRects(): DOMRectList;
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

declare class ShadowRoot
  extends DocumentFragment
  mixins mixin$DocumentOrShadowRoot
{
  +clonable: boolean;
  +delegatesFocus: boolean;
  +host: Element;
  innerHTML: TrustedHTML | string;
  +mode: ShadowRootMode;
  onslotchange: EventHandler;
  +serializable: boolean;
  +slotAssignment: SlotAssignmentMode;

  getHTML(options?: GetHTMLOptions): string;
  setHTMLUnsafe(html: TrustedHTML | string): void;
}

declare class StaticRange extends AbstractRange {
  constructor(init: StaticRangeInit): void;
}

declare class Text
  extends CharacterData
  mixins mixin$GeometryUtils, mixin$Slottable
{
  +wholeText: string;

  constructor(data?: string): void;

  splitText(offset: number): Text;
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

declare class XMLDocument extends Document {}

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

declare class mixin$ChildNode {
  after(nodes: Node | string): void;
  before(nodes: Node | string): void;
  remove(): void;
  replaceWith(nodes: Node | string): void;
}

declare class mixin$DocumentOrShadowRoot {
  +activeElement: Element | null;
  adoptedStyleSheets: Array<CSSStyleSheet>;
  +customElementRegistry: CustomElementRegistry | null;
  +fullscreenElement: Element | null;
  +pictureInPictureElement: Element | null;
  +pointerLockElement: Element | null;
  +styleSheets: StyleSheetList;

  getAnimations(): Array<Animation>;
}

declare class mixin$NonDocumentTypeChildNode {
  +nextElementSibling: Element | null;
  +previousElementSibling: Element | null;
}

declare class mixin$NonElementParentNode {
  getElementById(elementId: string): Element | null;
}

declare class mixin$ParentNode {
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

declare class mixin$Slottable {
  +assignedSlot: HTMLSlotElement | null;
}

declare class mixin$XPathEvaluatorBase {
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

/*---------- edit-context ----------*/

// Contributes to:
//   - HTMLElement

type UnderlineStyle = 'none' | 'solid' | 'dotted' | 'dashed' | 'wavy';

type UnderlineThickness = 'none' | 'thin' | 'thick';

type CharacterBoundsUpdateEventInit = {
  ...EventInit,
  rangeEnd: number,
  rangeStart: number,
};

type EditContextInit = {
  selectionEnd: number,
  selectionStart: number,
  text: string,
};

type TextFormatInit = {
  rangeEnd: number,
  rangeStart: number,
  underlineStyle: UnderlineStyle,
  underlineThickness: UnderlineThickness,
};

type TextFormatUpdateEventInit = {
  ...EventInit,
  textFormats: Array<TextFormat>,
};

type TextUpdateEventInit = {
  ...EventInit,
  compositionEnd: number,
  compositionStart: number,
  selectionEnd: number,
  selectionStart: number,
  text: string,
  updateRangeEnd: number,
  updateRangeStart: number,
};

declare class CharacterBoundsUpdateEvent extends Event {
  +rangeEnd: number;
  +rangeStart: number;

  constructor(type: string, options?: CharacterBoundsUpdateEventInit): void;
}

declare class EditContext extends EventTarget {
  +characterBoundsRangeStart: number;
  oncharacterboundsupdate: EventHandler;
  oncompositionend: EventHandler;
  oncompositionstart: EventHandler;
  ontextformatupdate: EventHandler;
  ontextupdate: EventHandler;
  +selectionEnd: number;
  +selectionStart: number;
  +text: string;

  constructor(options?: EditContextInit): void;

  attachedElements(): Array<HTMLElement>;
  characterBounds(): Array<DOMRect>;
  updateCharacterBounds(
    rangeStart: number,
    characterBounds: Array<DOMRect>,
  ): void;
  updateControlBounds(controlBounds: DOMRect): void;
  updateSelection(start: number, end: number): void;
  updateSelectionBounds(selectionBounds: DOMRect): void;
  updateText(rangeStart: number, rangeEnd: number, text: string): void;
}

declare class TextFormat {
  +rangeEnd: number;
  +rangeStart: number;
  +underlineStyle: UnderlineStyle;
  +underlineThickness: UnderlineThickness;

  constructor(options?: TextFormatInit): void;
}

declare class TextFormatUpdateEvent extends Event {
  constructor(type: string, options?: TextFormatUpdateEventInit): void;

  getTextFormats(): Array<TextFormat>;
}

declare class TextUpdateEvent extends Event {
  +selectionEnd: number;
  +selectionStart: number;
  +text: string;
  +updateRangeEnd: number;
  +updateRangeStart: number;

  constructor(type: string, options?: TextUpdateEventInit): void;
}

/*---------- element-capture ----------*/

// Contributes to:
//   - BrowserCaptureMediaStreamTrack

declare class RestrictionTarget {
  static fromElement(element: Element): Promise<RestrictionTarget>;
}

/*---------- element-timing ----------*/

// Contributes to:
//   - Element

declare class PerformanceElementTiming
  extends PerformanceEntry
  mixins mixin$PaintTimingMixin
{
  +element: Element | null;
  +id: string;
  +identifier: string;
  +intersectionRect: DOMRectReadOnly;
  +loadTime: number;
  +naturalHeight: number;
  +naturalWidth: number;
  +renderTime: number;
  +url: string;

  toJSON(): Object;
}

/*---------- encoding ----------*/

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

declare class TextDecoder mixins mixin$TextDecoderCommon {
  constructor(label?: string, options?: TextDecoderOptions): void;

  decode(input?: AllowSharedBufferSource, options?: TextDecodeOptions): string;
}

declare class TextDecoderStream
  mixins mixin$TextDecoderCommon, mixin$GenericTransformStream
{
  constructor(label?: string, options?: TextDecoderOptions): void;
}

declare class TextEncoder mixins mixin$TextEncoderCommon {
  constructor(): void;

  encode(input?: string): Uint8Array;
  encodeInto(
    source: string,
    destination: Uint8Array,
  ): TextEncoderEncodeIntoResult;
}

declare class TextEncoderStream
  mixins mixin$TextEncoderCommon, mixin$GenericTransformStream
{
  constructor(): void;
}

declare class mixin$TextDecoderCommon {
  +encoding: string;
  +fatal: boolean;
  +ignoreBOM: boolean;
}

declare class mixin$TextEncoderCommon {
  +encoding: string;
}

/*---------- encrypted-media ----------*/

// Contributes to:
//   - Navigator
//   - HTMLMediaElement

type MediaKeyMessageType =
  | 'license-request'
  | 'license-renewal'
  | 'license-release'
  | 'individualization-request';

type MediaKeySessionClosedReason =
  | 'internal-error'
  | 'closed-by-application'
  | 'release-acknowledged'
  | 'hardware-context-reset'
  | 'resource-evicted';

type MediaKeySessionType = 'temporary' | 'persistent-license';

type MediaKeysRequirement = 'required' | 'optional' | 'not-allowed';

type MediaKeyStatus =
  | 'usable'
  | 'expired'
  | 'released'
  | 'output-restricted'
  | 'output-downscaled'
  | 'usable-in-future'
  | 'status-pending'
  | 'internal-error';

type MediaEncryptedEventInit = {
  ...EventInit,
  initData: ArrayBuffer | null,
  initDataType: string,
};

type MediaKeyMessageEventInit = {
  ...EventInit,
  message: ArrayBuffer,
  messageType: MediaKeyMessageType,
};

type MediaKeysPolicy = {
  minHdcpVersion: string,
};

type MediaKeySystemConfiguration = {
  audioCapabilities: Array<MediaKeySystemMediaCapability>,
  distinctiveIdentifier: MediaKeysRequirement,
  initDataTypes: Array<string>,
  label: string,
  persistentState: MediaKeysRequirement,
  sessionTypes: Array<string>,
  videoCapabilities: Array<MediaKeySystemMediaCapability>,
};

type MediaKeySystemMediaCapability = {
  contentType: string,
  encryptionScheme: string | null,
  robustness: string,
};

declare class MediaEncryptedEvent extends Event {
  +initData: ArrayBuffer | null;
  +initDataType: string;

  constructor(type: string, eventInitDict?: MediaEncryptedEventInit): void;
}

declare class MediaKeyMessageEvent extends Event {
  +message: ArrayBuffer;
  +messageType: MediaKeyMessageType;

  constructor(type: string, eventInitDict: MediaKeyMessageEventInit): void;
}

declare class MediaKeys {
  createSession(sessionType?: MediaKeySessionType): MediaKeySession;
  getStatusForPolicy(policy?: MediaKeysPolicy): Promise<MediaKeyStatus>;
  setServerCertificate(serverCertificate: BufferSource): Promise<boolean>;
}

declare class MediaKeySession extends EventTarget {
  +closed: Promise<MediaKeySessionClosedReason>;
  +expiration: number;
  +keyStatuses: MediaKeyStatusMap;
  onkeystatuseschange: EventHandler;
  onmessage: EventHandler;
  +sessionId: string;

  close(): Promise<void>;
  generateRequest(initDataType: string, initData: BufferSource): Promise<void>;
  load(sessionId: string): Promise<boolean>;
  remove(): Promise<void>;
  update(response: BufferSource): Promise<void>;
}

declare class MediaKeyStatusMap {
  +size: number;

  @@iterator(): Iterator<BufferSource, MediaKeyStatus>;

  get(keyId: BufferSource): MediaKeyStatus | void;
  has(keyId: BufferSource): boolean;
}

declare class MediaKeySystemAccess {
  +keySystem: string;

  createMediaKeys(): Promise<MediaKeys>;
  getConfiguration(): MediaKeySystemConfiguration;
}

/*---------- event-timing ----------*/

// Contributes to:
//   - Performance
//   - PerformanceObserverInit

type EventCounts = Map<string, number>;

declare class PerformanceEventTiming extends PerformanceEntry {
  +cancelable: boolean;
  +interactionId: number;
  +processingEnd: number;
  +processingStart: number;
  +target: Node | null;

  toJSON(): Object;
}

/*---------- eyedropper-api ----------*/

type ColorSelectionOptions = {
  signal: AbortSignal,
};

type ColorSelectionResult = {
  sRGBHex: string,
};

declare class EyeDropper {
  constructor(): void;

  open(options?: ColorSelectionOptions): Promise<ColorSelectionResult>;
}

/*---------- fedcm ----------*/

// Contributes to:
//   - CredentialRequestOptions

type IdentityCredentialRequestOptionsContext =
  | 'signin'
  | 'signup'
  | 'use'
  | 'continue';

type IdentityCredentialRequestOptionsMode = 'active' | 'passive';

type DisconnectedAccount = {
  account_id: string,
};

type IdentityAssertionResponse = {
  continue_on: string,
  token: string,
};

type IdentityCredentialDisconnectOptions = {
  ...IdentityProviderConfig,
  accountHint: string,
};

type IdentityCredentialRequestOptions = {
  context: IdentityCredentialRequestOptionsContext,
  mode: IdentityCredentialRequestOptionsMode,
  providers: Array<IdentityProviderRequestOptions>,
};

type IdentityProviderAccount = {
  approved_clients: Array<string>,
  domain_hints: Array<string>,
  email: string,
  given_name: string,
  id: string,
  label_hints: Array<string>,
  login_hints: Array<string>,
  name: string,
  picture: string,
  tel: string,
  username: string,
};

type IdentityProviderAccountList = {
  accounts: Array<IdentityProviderAccount>,
};

type IdentityProviderAPIConfig = {
  account_label: string,
  accounts_endpoint: string,
  branding: IdentityProviderBranding,
  client_metadata_endpoint: string,
  disconnect_endpoint: string,
  id_assertion_endpoint: string,
  login_url: string,
};

type IdentityProviderBranding = {
  background_color: string,
  color: string,
  icons: Array<IdentityProviderIcon>,
  name: string,
};

type IdentityProviderClientMetadata = {
  privacy_policy_url: string,
  terms_of_service_url: string,
};

type IdentityProviderConfig = {
  clientId: string,
  configURL: string,
};

type IdentityProviderIcon = {
  size: number,
  url: string,
};

type IdentityProviderRequestOptions = {
  ...IdentityProviderConfig,
  domainHint: string,
  fields: Array<string>,
  loginHint: string,
  nonce: string,
  params: any,
};

type IdentityProviderWellKnown = {
  accounts_endpoint: string,
  login_url: string,
  provider_urls: Array<string>,
};

type IdentityResolveOptions = {
  accountId: string,
};

type IdentityUserInfo = {
  email: string,
  givenName: string,
  name: string,
  picture: string,
};

declare class IdentityCredential extends Credential {
  +configURL: string;
  +isAutoSelected: boolean;
  +token: string | null;

  static disconnect(
    options: IdentityCredentialDisconnectOptions,
  ): Promise<void>;
}

declare class IdentityProvider {
  static close(): void;
  static getUserInfo(
    config: IdentityProviderConfig,
  ): Promise<Array<IdentityUserInfo>>;
  static resolve(token: string, options?: IdentityResolveOptions): void;
}

/*---------- fenced-frame ----------*/

// Contributes to:
//   - Navigator
//   - Window
//   - GlobalEventHandlers

type ReportEventType = FenceEvent | string;

type UrnOrConfig = string | FencedFrameConfig;

type FenceReportingDestination =
  | 'buyer'
  | 'seller'
  | 'component-seller'
  | 'direct-seller'
  | 'shared-storage-select-url';

type OpaqueProperty = 'opaque';

type FenceEvent = {
  crossOriginExposed: boolean,
  destination: Array<FenceReportingDestination>,
  destinationURL: string,
  eventData: string,
  eventType: string,
  once: boolean,
};

declare class Fence {
  disableUntrustedNetwork(): Promise<void>;
  getNestedConfigs(): Array<FencedFrameConfig>;
  notifyEvent(event: Event): void;
  reportEvent(event?: ReportEventType): void;
  setReportEventDataForAutomaticBeacons(event?: FenceEvent): void;
}

declare class FencedFrameConfig {
  constructor(url: string): void;

  setSharedStorageContext(contextString: string): void;
}

declare class HTMLFencedFrameElement extends HTMLElement {
  allow: string;
  config: FencedFrameConfig | null;
  height: string;
  +sandbox: DOMTokenList;
  width: string;

  constructor(): void;
}

/*---------- fetch ----------*/

// Contributes to:
//   - WindowOrWorkerGlobalScope

type BodyInit = ReadableStream | XMLHttpRequestBodyInit;

type HeadersInit = Array<Array<string>> | {[string]: string};

type RequestInfo = Request | string;

type XMLHttpRequestBodyInit =
  | Blob
  | BufferSource
  | FormData
  | URLSearchParams
  | string;

type RequestCache =
  | 'default'
  | 'no-store'
  | 'reload'
  | 'no-cache'
  | 'force-cache'
  | 'only-if-cached';

type RequestCredentials = 'omit' | 'same-origin' | 'include';

type RequestDestination =
  | ''
  | 'audio'
  | 'audioworklet'
  | 'document'
  | 'embed'
  | 'font'
  | 'frame'
  | 'iframe'
  | 'image'
  | 'json'
  | 'manifest'
  | 'object'
  | 'paintworklet'
  | 'report'
  | 'script'
  | 'sharedworker'
  | 'style'
  | 'track'
  | 'video'
  | 'worker'
  | 'xslt';

type RequestDuplex = 'half';

type RequestMode = 'navigate' | 'same-origin' | 'no-cors' | 'cors';

type RequestPriority = 'high' | 'low' | 'auto';

type RequestRedirect = 'follow' | 'error' | 'manual';

type ResponseType =
  | 'basic'
  | 'cors'
  | 'default'
  | 'error'
  | 'opaque'
  | 'opaqueredirect';

type RequestInit = {
  attributionReporting: AttributionReportingRequestOptions,
  body: BodyInit | null,
  cache: RequestCache,
  credentials: RequestCredentials,
  duplex: RequestDuplex,
  headers: HeadersInit,
  integrity: string,
  keepalive: boolean,
  method: string,
  mode: RequestMode,
  priority: RequestPriority,
  privateToken: PrivateToken,
  redirect: RequestRedirect,
  referrer: string,
  referrerPolicy: ReferrerPolicy,
  sharedStorageWritable: boolean,
  signal: AbortSignal | null,
  targetAddressSpace: IPAddressSpace,
  window: any,
};

type ResponseInit = {
  headers: HeadersInit,
  status: number,
  statusText: string,
};

declare class Headers {
  constructor(init?: HeadersInit): void;

  @@iterator(): Iterator<string, string>;

  append(name: string, value: string): void;
  delete(name: string): void;
  get(name: string): string | null;
  getSetCookie(): Array<string>;
  has(name: string): boolean;
  set(name: string, value: string): void;
}

declare class Request mixins mixin$Body {
  +cache: RequestCache;
  +credentials: RequestCredentials;
  +destination: RequestDestination;
  +duplex: RequestDuplex;
  +headers: Headers;
  +integrity: string;
  +isHistoryNavigation: boolean;
  +isReloadNavigation: boolean;
  +keepalive: boolean;
  +method: string;
  +mode: RequestMode;
  +redirect: RequestRedirect;
  +referrer: string;
  +referrerPolicy: ReferrerPolicy;
  +signal: AbortSignal;
  +targetAddressSpace: IPAddressSpace;
  +url: string;

  constructor(input: RequestInfo, init?: RequestInit): void;

  clone(): Request;
}

declare class Response mixins mixin$Body {
  +headers: Headers;
  +ok: boolean;
  +redirected: boolean;
  +status: number;
  +statusText: string;
  +type: ResponseType;
  +url: string;

  constructor(body?: BodyInit | null, init?: ResponseInit): void;

  static error(): Response;
  static json(data: any, init?: ResponseInit): Response;
  static redirect(url: string, status?: number): Response;
  clone(): Response;
}

declare class mixin$Body {
  +body: ReadableStream | null;
  +bodyUsed: boolean;

  arrayBuffer(): Promise<ArrayBuffer>;
  blob(): Promise<Blob>;
  bytes(): Promise<Uint8Array>;
  formData(): Promise<FormData>;
  json(): Promise<any>;
  text(): Promise<string>;
}

/*---------- fido ----------*/

// Contributes to:
//   - AuthenticationExtensionsClientInputs
//   - AuthenticationExtensionsClientOutputs

type HMACGetSecretInput = {
  salt1: ArrayBuffer,
  salt2: ArrayBuffer,
};

type HMACGetSecretOutput = {
  output1: ArrayBuffer,
  output2: ArrayBuffer,
};

/*---------- file-system-access ----------*/

// Contributes to:
//   - FileSystemHandle
//   - Window
//   - DataTransferItem

type StartInDirectory = WellKnownDirectory | FileSystemHandle;

type FileSystemPermissionMode = 'read' | 'readwrite';

type WellKnownDirectory =
  | 'desktop'
  | 'documents'
  | 'downloads'
  | 'music'
  | 'pictures'
  | 'videos';

type DirectoryPickerOptions = {
  id: string,
  mode: FileSystemPermissionMode,
  startIn: StartInDirectory,
};

type FilePickerAcceptType = {
  accept: {[string]: string | Array<string>},
  description: string,
};

type FilePickerOptions = {
  excludeAcceptAllOption: boolean,
  id: string,
  startIn: StartInDirectory,
  types: Array<FilePickerAcceptType>,
};

type FileSystemHandlePermissionDescriptor = {
  mode: FileSystemPermissionMode,
};

type FileSystemPermissionDescriptor = {
  ...PermissionDescriptor,
  handle: FileSystemHandle,
  mode: FileSystemPermissionMode,
};

type OpenFilePickerOptions = {
  ...FilePickerOptions,
  multiple: boolean,
};

type SaveFilePickerOptions = {
  ...FilePickerOptions,
  suggestedName: string | null,
};

/*---------- FileAPI ----------*/

// Contributes to:
//   - URL

type BlobPart = BufferSource | Blob | string;

type EndingType = 'transparent' | 'native';

type BlobPropertyBag = {
  endings: EndingType,
  type: string,
};

type FilePropertyBag = {
  ...BlobPropertyBag,
  lastModified: number,
};

declare class Blob {
  +size: number;
  +type: string;

  constructor(blobParts?: Array<BlobPart>, options?: BlobPropertyBag): void;

  arrayBuffer(): Promise<ArrayBuffer>;
  bytes(): Promise<Uint8Array>;
  slice(start?: number, end?: number, contentType?: string): Blob;
  stream(): ReadableStream;
  text(): Promise<string>;
}

declare class File extends Blob {
  +lastModified: number;
  +name: string;

  constructor(
    fileBits: Array<BlobPart>,
    fileName: string,
    options?: FilePropertyBag,
  ): void;
}

declare class FileList {
  +length: number;

  item(index: number): File | null;
}

declare class FileReader extends EventTarget {
  static +DONE: 2;
  static +EMPTY: 0;
  static +LOADING: 1;

  +error: DOMException | null;
  onabort: EventHandler;
  onerror: EventHandler;
  onload: EventHandler;
  onloadend: EventHandler;
  onloadstart: EventHandler;
  onprogress: EventHandler;
  +readyState: number;
  +result: string | ArrayBuffer | null;

  constructor(): void;

  abort(): void;
  readAsArrayBuffer(blob: Blob): void;
  readAsBinaryString(blob: Blob): void;
  readAsDataURL(blob: Blob): void;
  readAsText(blob: Blob, encoding?: string): void;
}

declare class FileReaderSync {
  constructor(): void;

  readAsArrayBuffer(blob: Blob): ArrayBuffer;
  readAsBinaryString(blob: Blob): string;
  readAsDataURL(blob: Blob): string;
  readAsText(blob: Blob, encoding?: string): string;
}

/*---------- filter-effects ----------*/

declare class SVGComponentTransferFunctionElement extends SVGElement {
  static +SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE: 3;
  static +SVG_FECOMPONENTTRANSFER_TYPE_GAMMA: 5;
  static +SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY: 1;
  static +SVG_FECOMPONENTTRANSFER_TYPE_LINEAR: 4;
  static +SVG_FECOMPONENTTRANSFER_TYPE_TABLE: 2;
  static +SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN: 0;

  +amplitude: SVGAnimatedNumber;
  +exponent: SVGAnimatedNumber;
  +intercept: SVGAnimatedNumber;
  +offset: SVGAnimatedNumber;
  +slope: SVGAnimatedNumber;
  +tableValues: SVGAnimatedNumberList;
  +type: SVGAnimatedEnumeration;
}

declare class SVGFEBlendElement
  extends SVGElement
  mixins mixin$SVGFilterPrimitiveStandardAttributes
{
  static +SVG_FEBLEND_MODE_COLOR: 15;
  static +SVG_FEBLEND_MODE_COLOR_BURN: 8;
  static +SVG_FEBLEND_MODE_COLOR_DODGE: 7;
  static +SVG_FEBLEND_MODE_DARKEN: 4;
  static +SVG_FEBLEND_MODE_DIFFERENCE: 11;
  static +SVG_FEBLEND_MODE_EXCLUSION: 12;
  static +SVG_FEBLEND_MODE_HARD_LIGHT: 9;
  static +SVG_FEBLEND_MODE_HUE: 13;
  static +SVG_FEBLEND_MODE_LIGHTEN: 5;
  static +SVG_FEBLEND_MODE_LUMINOSITY: 16;
  static +SVG_FEBLEND_MODE_MULTIPLY: 2;
  static +SVG_FEBLEND_MODE_NORMAL: 1;
  static +SVG_FEBLEND_MODE_OVERLAY: 6;
  static +SVG_FEBLEND_MODE_SATURATION: 14;
  static +SVG_FEBLEND_MODE_SCREEN: 3;
  static +SVG_FEBLEND_MODE_SOFT_LIGHT: 10;
  static +SVG_FEBLEND_MODE_UNKNOWN: 0;

  +in1: SVGAnimatedString;
  +in2: SVGAnimatedString;
  +mode: SVGAnimatedEnumeration;
}

declare class SVGFEColorMatrixElement
  extends SVGElement
  mixins mixin$SVGFilterPrimitiveStandardAttributes
{
  static +SVG_FECOLORMATRIX_TYPE_HUEROTATE: 3;
  static +SVG_FECOLORMATRIX_TYPE_LUMINANCETOALPHA: 4;
  static +SVG_FECOLORMATRIX_TYPE_MATRIX: 1;
  static +SVG_FECOLORMATRIX_TYPE_SATURATE: 2;
  static +SVG_FECOLORMATRIX_TYPE_UNKNOWN: 0;

  +in1: SVGAnimatedString;
  +type: SVGAnimatedEnumeration;
  +values: SVGAnimatedNumberList;
}

declare class SVGFEComponentTransferElement
  extends SVGElement
  mixins mixin$SVGFilterPrimitiveStandardAttributes
{
  +in1: SVGAnimatedString;
}

declare class SVGFECompositeElement
  extends SVGElement
  mixins mixin$SVGFilterPrimitiveStandardAttributes
{
  static +SVG_FECOMPOSITE_OPERATOR_ARITHMETIC: 6;
  static +SVG_FECOMPOSITE_OPERATOR_ATOP: 4;
  static +SVG_FECOMPOSITE_OPERATOR_IN: 2;
  static +SVG_FECOMPOSITE_OPERATOR_OUT: 3;
  static +SVG_FECOMPOSITE_OPERATOR_OVER: 1;
  static +SVG_FECOMPOSITE_OPERATOR_UNKNOWN: 0;
  static +SVG_FECOMPOSITE_OPERATOR_XOR: 5;

  +in1: SVGAnimatedString;
  +in2: SVGAnimatedString;
  +k1: SVGAnimatedNumber;
  +k2: SVGAnimatedNumber;
  +k3: SVGAnimatedNumber;
  +k4: SVGAnimatedNumber;
  +operator: SVGAnimatedEnumeration;
}

declare class SVGFEConvolveMatrixElement
  extends SVGElement
  mixins mixin$SVGFilterPrimitiveStandardAttributes
{
  static +SVG_EDGEMODE_DUPLICATE: 1;
  static +SVG_EDGEMODE_NONE: 3;
  static +SVG_EDGEMODE_UNKNOWN: 0;
  static +SVG_EDGEMODE_WRAP: 2;

  +bias: SVGAnimatedNumber;
  +divisor: SVGAnimatedNumber;
  +edgeMode: SVGAnimatedEnumeration;
  +in1: SVGAnimatedString;
  +kernelMatrix: SVGAnimatedNumberList;
  +kernelUnitLengthX: SVGAnimatedNumber;
  +kernelUnitLengthY: SVGAnimatedNumber;
  +orderX: SVGAnimatedInteger;
  +orderY: SVGAnimatedInteger;
  +preserveAlpha: SVGAnimatedBoolean;
  +targetX: SVGAnimatedInteger;
  +targetY: SVGAnimatedInteger;
}

declare class SVGFEDiffuseLightingElement
  extends SVGElement
  mixins mixin$SVGFilterPrimitiveStandardAttributes
{
  +diffuseConstant: SVGAnimatedNumber;
  +in1: SVGAnimatedString;
  +kernelUnitLengthX: SVGAnimatedNumber;
  +kernelUnitLengthY: SVGAnimatedNumber;
  +surfaceScale: SVGAnimatedNumber;
}

declare class SVGFEDisplacementMapElement
  extends SVGElement
  mixins mixin$SVGFilterPrimitiveStandardAttributes
{
  static +SVG_CHANNEL_A: 4;
  static +SVG_CHANNEL_B: 3;
  static +SVG_CHANNEL_G: 2;
  static +SVG_CHANNEL_R: 1;
  static +SVG_CHANNEL_UNKNOWN: 0;

  +in1: SVGAnimatedString;
  +in2: SVGAnimatedString;
  +scale: SVGAnimatedNumber;
  +xChannelSelector: SVGAnimatedEnumeration;
  +yChannelSelector: SVGAnimatedEnumeration;
}

declare class SVGFEDistantLightElement extends SVGElement {
  +azimuth: SVGAnimatedNumber;
  +elevation: SVGAnimatedNumber;
}

declare class SVGFEDropShadowElement
  extends SVGElement
  mixins mixin$SVGFilterPrimitiveStandardAttributes
{
  +dx: SVGAnimatedNumber;
  +dy: SVGAnimatedNumber;
  +in1: SVGAnimatedString;
  +stdDeviationX: SVGAnimatedNumber;
  +stdDeviationY: SVGAnimatedNumber;

  setStdDeviation(stdDeviationX: number, stdDeviationY: number): void;
}

declare class SVGFEFloodElement
  extends SVGElement
  mixins mixin$SVGFilterPrimitiveStandardAttributes {}

declare class SVGFEFuncAElement extends SVGComponentTransferFunctionElement {}

declare class SVGFEFuncBElement extends SVGComponentTransferFunctionElement {}

declare class SVGFEFuncGElement extends SVGComponentTransferFunctionElement {}

declare class SVGFEFuncRElement extends SVGComponentTransferFunctionElement {}

declare class SVGFEGaussianBlurElement
  extends SVGElement
  mixins mixin$SVGFilterPrimitiveStandardAttributes
{
  static +SVG_EDGEMODE_DUPLICATE: 1;
  static +SVG_EDGEMODE_NONE: 3;
  static +SVG_EDGEMODE_UNKNOWN: 0;
  static +SVG_EDGEMODE_WRAP: 2;

  +edgeMode: SVGAnimatedEnumeration;
  +in1: SVGAnimatedString;
  +stdDeviationX: SVGAnimatedNumber;
  +stdDeviationY: SVGAnimatedNumber;

  setStdDeviation(stdDeviationX: number, stdDeviationY: number): void;
}

declare class SVGFEImageElement
  extends SVGElement
  mixins mixin$SVGFilterPrimitiveStandardAttributes, mixin$SVGURIReference
{
  +crossOrigin: SVGAnimatedString;
  +preserveAspectRatio: SVGAnimatedPreserveAspectRatio;
}

declare class SVGFEMergeElement
  extends SVGElement
  mixins mixin$SVGFilterPrimitiveStandardAttributes {}

declare class SVGFEMergeNodeElement extends SVGElement {
  +in1: SVGAnimatedString;
}

declare class SVGFEMorphologyElement
  extends SVGElement
  mixins mixin$SVGFilterPrimitiveStandardAttributes
{
  static +SVG_MORPHOLOGY_OPERATOR_DILATE: 2;
  static +SVG_MORPHOLOGY_OPERATOR_ERODE: 1;
  static +SVG_MORPHOLOGY_OPERATOR_UNKNOWN: 0;

  +in1: SVGAnimatedString;
  +operator: SVGAnimatedEnumeration;
  +radiusX: SVGAnimatedNumber;
  +radiusY: SVGAnimatedNumber;
}

declare class SVGFEOffsetElement
  extends SVGElement
  mixins mixin$SVGFilterPrimitiveStandardAttributes
{
  +dx: SVGAnimatedNumber;
  +dy: SVGAnimatedNumber;
  +in1: SVGAnimatedString;
}

declare class SVGFEPointLightElement extends SVGElement {
  +x: SVGAnimatedNumber;
  +y: SVGAnimatedNumber;
  +z: SVGAnimatedNumber;
}

declare class SVGFESpecularLightingElement
  extends SVGElement
  mixins mixin$SVGFilterPrimitiveStandardAttributes
{
  +in1: SVGAnimatedString;
  +kernelUnitLengthX: SVGAnimatedNumber;
  +kernelUnitLengthY: SVGAnimatedNumber;
  +specularConstant: SVGAnimatedNumber;
  +specularExponent: SVGAnimatedNumber;
  +surfaceScale: SVGAnimatedNumber;
}

declare class SVGFESpotLightElement extends SVGElement {
  +limitingConeAngle: SVGAnimatedNumber;
  +pointsAtX: SVGAnimatedNumber;
  +pointsAtY: SVGAnimatedNumber;
  +pointsAtZ: SVGAnimatedNumber;
  +specularExponent: SVGAnimatedNumber;
  +x: SVGAnimatedNumber;
  +y: SVGAnimatedNumber;
  +z: SVGAnimatedNumber;
}

declare class SVGFETileElement
  extends SVGElement
  mixins mixin$SVGFilterPrimitiveStandardAttributes
{
  +in1: SVGAnimatedString;
}

declare class SVGFETurbulenceElement
  extends SVGElement
  mixins mixin$SVGFilterPrimitiveStandardAttributes
{
  static +SVG_STITCHTYPE_NOSTITCH: 2;
  static +SVG_STITCHTYPE_STITCH: 1;
  static +SVG_STITCHTYPE_UNKNOWN: 0;
  static +SVG_TURBULENCE_TYPE_FRACTALNOISE: 1;
  static +SVG_TURBULENCE_TYPE_TURBULENCE: 2;
  static +SVG_TURBULENCE_TYPE_UNKNOWN: 0;

  +baseFrequencyX: SVGAnimatedNumber;
  +baseFrequencyY: SVGAnimatedNumber;
  +numOctaves: SVGAnimatedInteger;
  +seed: SVGAnimatedNumber;
  +stitchTiles: SVGAnimatedEnumeration;
  +type: SVGAnimatedEnumeration;
}

declare class SVGFilterElement extends SVGElement mixins mixin$SVGURIReference {
  +filterUnits: SVGAnimatedEnumeration;
  +height: SVGAnimatedLength;
  +primitiveUnits: SVGAnimatedEnumeration;
  +width: SVGAnimatedLength;
  +x: SVGAnimatedLength;
  +y: SVGAnimatedLength;
}

declare class mixin$SVGFilterPrimitiveStandardAttributes {
  +height: SVGAnimatedLength;
  +result: SVGAnimatedString;
  +width: SVGAnimatedLength;
  +x: SVGAnimatedLength;
  +y: SVGAnimatedLength;
}

/*---------- fs ----------*/

// Contributes to:
//   - StorageManager

type FileSystemWriteChunkType = BufferSource | Blob | string | WriteParams;

type FileSystemHandleKind = 'file' | 'directory';

type WriteCommandType = 'write' | 'seek' | 'truncate';

type FileSystemCreateWritableOptions = {
  keepExistingData: boolean,
};

type FileSystemGetDirectoryOptions = {
  create: boolean,
};

type FileSystemGetFileOptions = {
  create: boolean,
};

type FileSystemReadWriteOptions = {
  at: number,
};

type FileSystemRemoveOptions = {
  recursive: boolean,
};

type WriteParams = {
  data: BufferSource | Blob | string | null,
  position: number | null,
  size: number | null,
  type: WriteCommandType,
};

declare class FileSystemDirectoryHandle extends FileSystemHandle {
  @@iterator(): Iterator<string, FileSystemHandle>;

  getDirectoryHandle(
    name: string,
    options?: FileSystemGetDirectoryOptions,
  ): Promise<FileSystemDirectoryHandle>;
  getFileHandle(
    name: string,
    options?: FileSystemGetFileOptions,
  ): Promise<FileSystemFileHandle>;
  removeEntry(name: string, options?: FileSystemRemoveOptions): Promise<void>;
  resolve(possibleDescendant: FileSystemHandle): Promise<Array<string> | null>;
}

declare class FileSystemFileHandle extends FileSystemHandle {
  createSyncAccessHandle(): Promise<FileSystemSyncAccessHandle>;
  createWritable(
    options?: FileSystemCreateWritableOptions,
  ): Promise<FileSystemWritableFileStream>;
  getFile(): Promise<File>;
}

declare class FileSystemHandle {
  +kind: FileSystemHandleKind;
  +name: string;

  isSameEntry(other: FileSystemHandle): Promise<boolean>;
  queryPermission(
    descriptor?: FileSystemHandlePermissionDescriptor,
  ): Promise<PermissionState>;
  requestPermission(
    descriptor?: FileSystemHandlePermissionDescriptor,
  ): Promise<PermissionState>;
}

declare class FileSystemSyncAccessHandle {
  close(): void;
  flush(): void;
  getSize(): number;
  read(
    buffer: AllowSharedBufferSource,
    options?: FileSystemReadWriteOptions,
  ): number;
  truncate(newSize: number): void;
  write(
    buffer: AllowSharedBufferSource,
    options?: FileSystemReadWriteOptions,
  ): number;
}

declare class FileSystemWritableFileStream extends WritableStream {
  seek(position: number): Promise<void>;
  truncate(size: number): Promise<void>;
  write(data: FileSystemWriteChunkType): Promise<void>;
}

/*---------- fullscreen ----------*/

// Contributes to:
//   - Element
//   - Document
//   - DocumentOrShadowRoot

type FullscreenNavigationUI = 'auto' | 'show' | 'hide';

type FullscreenOptions = {
  navigationUI: FullscreenNavigationUI,
  screen: ScreenDetailed,
};

/*---------- gamepad-extensions ----------*/

// Contributes to:
//   - Gamepad
//   - GamepadHapticActuator

type GamepadHand = '' | 'left' | 'right';

declare class GamepadPose {
  +angularAcceleration: Float32Array | null;
  +angularVelocity: Float32Array | null;
  +hasOrientation: boolean;
  +hasPosition: boolean;
  +linearAcceleration: Float32Array | null;
  +linearVelocity: Float32Array | null;
  +orientation: Float32Array | null;
  +position: Float32Array | null;
}

/*---------- gamepad ----------*/

// Contributes to:
//   - Navigator
//   - WindowEventHandlers

type GamepadHapticEffectType = 'dual-rumble' | 'trigger-rumble';

type GamepadHapticsResult = 'complete' | 'preempted';

type GamepadMappingType = '' | 'standard' | 'xr-standard';

type GamepadEffectParameters = {
  duration: number,
  leftTrigger: number,
  rightTrigger: number,
  startDelay: number,
  strongMagnitude: number,
  weakMagnitude: number,
};

type GamepadEventInit = {
  ...EventInit,
  gamepad: Gamepad,
};

type GamepadTouch = {
  position: DOMPointReadOnly,
  surfaceDimensions: DOMRectReadOnly | null,
  surfaceId: number,
  touchId: number,
};

declare class Gamepad {
  +axes: $ReadOnlyArray<number>;
  +buttons: $ReadOnlyArray<GamepadButton>;
  +connected: boolean;
  +hand: GamepadHand;
  +hapticActuators: $ReadOnlyArray<GamepadHapticActuator>;
  +id: string;
  +index: number;
  +mapping: GamepadMappingType;
  +pose: GamepadPose | null;
  +timestamp: number;
  +touches: $ReadOnlyArray<GamepadTouch>;
  +vibrationActuator: GamepadHapticActuator;
}

declare class GamepadButton {
  +pressed: boolean;
  +touched: boolean;
  +value: number;
}

declare class GamepadEvent extends Event {
  +gamepad: Gamepad;

  constructor(type: string, eventInitDict: GamepadEventInit): void;
}

declare class GamepadHapticActuator {
  +effects: $ReadOnlyArray<GamepadHapticEffectType>;

  playEffect(
    type: GamepadHapticEffectType,
    params?: GamepadEffectParameters,
  ): Promise<GamepadHapticsResult>;
  pulse(value: number, duration: number): Promise<boolean>;
  reset(): Promise<GamepadHapticsResult>;
}

/*---------- generic-sensor ----------*/

type SensorErrorEventInit = {
  ...EventInit,
  error: DOMException,
};

type SensorOptions = {
  frequency: number,
};

declare class Sensor extends EventTarget {
  +activated: boolean;
  +hasReading: boolean;
  onactivate: EventHandler;
  onerror: EventHandler;
  onreading: EventHandler;
  +timestamp: number | null;

  start(): void;
  stop(): void;
}

declare class SensorErrorEvent extends Event {
  +error: DOMException;

  constructor(type: string, errorEventInitDict: SensorErrorEventInit): void;
}

/*---------- geolocation-sensor ----------*/

type GeolocationSensorOptions = {
  ...SensorOptions,
};

type GeolocationSensorReading = {
  accuracy: number | null,
  altitude: number | null,
  altitudeAccuracy: number | null,
  heading: number | null,
  latitude: number | null,
  longitude: number | null,
  speed: number | null,
  timestamp: number | null,
};

type ReadOptions = {
  ...GeolocationSensorOptions,
  signal: AbortSignal | null,
};

declare class GeolocationSensor extends Sensor {
  +accuracy: number | null;
  +altitude: number | null;
  +altitudeAccuracy: number | null;
  +heading: number | null;
  +latitude: number | null;
  +longitude: number | null;
  +speed: number | null;

  constructor(options?: GeolocationSensorOptions): void;

  static read(readOptions?: ReadOptions): Promise<GeolocationSensorReading>;
}

/*---------- geolocation ----------*/

// Contributes to:
//   - Navigator

type PositionOptions = {
  enableHighAccuracy: boolean,
  maximumAge: number,
  timeout: number,
};

type PositionCallback = (position: GeolocationPosition) => void;

type PositionErrorCallback = (positionError: GeolocationPositionError) => void;

declare class Geolocation {
  clearWatch(watchId: number): void;
  getCurrentPosition(
    successCallback: PositionCallback,
    errorCallback?: PositionErrorCallback | null,
    options?: PositionOptions,
  ): void;
  watchPosition(
    successCallback: PositionCallback,
    errorCallback?: PositionErrorCallback | null,
    options?: PositionOptions,
  ): number;
}

declare class GeolocationCoordinates {
  +accuracy: number;
  +altitude: number | null;
  +altitudeAccuracy: number | null;
  +heading: number | null;
  +latitude: number;
  +longitude: number;
  +speed: number | null;

  toJSON(): Object;
}

declare class GeolocationPosition {
  +coords: GeolocationCoordinates;
  +timestamp: EpochTimeStamp;

  toJSON(): Object;
}

declare class GeolocationPositionError {
  static +PERMISSION_DENIED: 1;
  static +POSITION_UNAVAILABLE: 2;
  static +TIMEOUT: 3;

  +code: number;
  +message: string;
}

/*---------- geometry ----------*/

type DOMMatrix2DInit = {
  a: number,
  b: number,
  c: number,
  d: number,
  e: number,
  f: number,
  m11: number,
  m12: number,
  m21: number,
  m22: number,
  m41: number,
  m42: number,
};

type DOMMatrixInit = {
  ...DOMMatrix2DInit,
  is2D: boolean,
  m13: number,
  m14: number,
  m23: number,
  m24: number,
  m31: number,
  m32: number,
  m33: number,
  m34: number,
  m43: number,
  m44: number,
};

type DOMPointInit = {
  w: number,
  x: number,
  y: number,
  z: number,
};

type DOMQuadInit = {
  p1: DOMPointInit,
  p2: DOMPointInit,
  p3: DOMPointInit,
  p4: DOMPointInit,
};

type DOMRectInit = {
  height: number,
  width: number,
  x: number,
  y: number,
};

declare class DOMMatrix extends DOMMatrixReadOnly {
  a: number;
  b: number;
  c: number;
  d: number;
  e: number;
  f: number;
  m11: number;
  m12: number;
  m13: number;
  m14: number;
  m21: number;
  m22: number;
  m23: number;
  m24: number;
  m31: number;
  m32: number;
  m33: number;
  m34: number;
  m41: number;
  m42: number;
  m43: number;
  m44: number;

  constructor(init?: string | Array<number>): void;

  static fromFloat32Array(array32: Float32Array): DOMMatrix;
  static fromFloat64Array(array64: Float64Array): DOMMatrix;
  static fromMatrix(other?: DOMMatrixInit): DOMMatrix;
  invertSelf(): DOMMatrix;
  multiplySelf(other?: DOMMatrixInit): DOMMatrix;
  preMultiplySelf(other?: DOMMatrixInit): DOMMatrix;
  rotateAxisAngleSelf(
    x?: number,
    y?: number,
    z?: number,
    angle?: number,
  ): DOMMatrix;
  rotateFromVectorSelf(x?: number, y?: number): DOMMatrix;
  rotateSelf(rotX?: number, rotY?: number, rotZ?: number): DOMMatrix;
  scale3dSelf(
    scale?: number,
    originX?: number,
    originY?: number,
    originZ?: number,
  ): DOMMatrix;
  scaleSelf(
    scaleX?: number,
    scaleY?: number,
    scaleZ?: number,
    originX?: number,
    originY?: number,
    originZ?: number,
  ): DOMMatrix;
  setMatrixValue(transformList: string): DOMMatrix;
  skewXSelf(sx?: number): DOMMatrix;
  skewYSelf(sy?: number): DOMMatrix;
  translateSelf(tx?: number, ty?: number, tz?: number): DOMMatrix;
}

declare class DOMMatrixReadOnly {
  +a: number;
  +b: number;
  +c: number;
  +d: number;
  +e: number;
  +f: number;
  +is2D: boolean;
  +isIdentity: boolean;
  +m11: number;
  +m12: number;
  +m13: number;
  +m14: number;
  +m21: number;
  +m22: number;
  +m23: number;
  +m24: number;
  +m31: number;
  +m32: number;
  +m33: number;
  +m34: number;
  +m41: number;
  +m42: number;
  +m43: number;
  +m44: number;

  constructor(init?: string | Array<number>): void;

  static fromFloat32Array(array32: Float32Array): DOMMatrixReadOnly;
  static fromFloat64Array(array64: Float64Array): DOMMatrixReadOnly;
  static fromMatrix(other?: DOMMatrixInit): DOMMatrixReadOnly;
  flipX(): DOMMatrix;
  flipY(): DOMMatrix;
  inverse(): DOMMatrix;
  multiply(other?: DOMMatrixInit): DOMMatrix;
  rotate(rotX?: number, rotY?: number, rotZ?: number): DOMMatrix;
  rotateAxisAngle(
    x?: number,
    y?: number,
    z?: number,
    angle?: number,
  ): DOMMatrix;
  rotateFromVector(x?: number, y?: number): DOMMatrix;
  scale(
    scaleX?: number,
    scaleY?: number,
    scaleZ?: number,
    originX?: number,
    originY?: number,
    originZ?: number,
  ): DOMMatrix;
  scale3d(
    scale?: number,
    originX?: number,
    originY?: number,
    originZ?: number,
  ): DOMMatrix;
  scaleNonUniform(scaleX?: number, scaleY?: number): DOMMatrix;
  skewX(sx?: number): DOMMatrix;
  skewY(sy?: number): DOMMatrix;
  toFloat32Array(): Float32Array;
  toFloat64Array(): Float64Array;
  toJSON(): Object;
  transformPoint(point?: DOMPointInit): DOMPoint;
  translate(tx?: number, ty?: number, tz?: number): DOMMatrix;
  toString(): string;
}

declare class DOMPoint extends DOMPointReadOnly {
  w: number;
  x: number;
  y: number;
  z: number;

  constructor(x?: number, y?: number, z?: number, w?: number): void;

  static fromPoint(other?: DOMPointInit): DOMPoint;
}

declare class DOMPointReadOnly {
  +w: number;
  +x: number;
  +y: number;
  +z: number;

  constructor(x?: number, y?: number, z?: number, w?: number): void;

  static fromPoint(other?: DOMPointInit): DOMPointReadOnly;
  matrixTransform(matrix?: DOMMatrixInit): DOMPoint;
  toJSON(): Object;
}

declare class DOMQuad {
  +p1: DOMPoint;
  +p2: DOMPoint;
  +p3: DOMPoint;
  +p4: DOMPoint;

  constructor(
    p1?: DOMPointInit,
    p2?: DOMPointInit,
    p3?: DOMPointInit,
    p4?: DOMPointInit,
  ): void;

  static fromQuad(other?: DOMQuadInit): DOMQuad;
  static fromRect(other?: DOMRectInit): DOMQuad;
  getBounds(): DOMRect;
  toJSON(): Object;
}

declare class DOMRect extends DOMRectReadOnly {
  height: number;
  width: number;
  x: number;
  y: number;

  constructor(x?: number, y?: number, width?: number, height?: number): void;

  static fromRect(other?: DOMRectInit): DOMRect;
}

declare class DOMRectList {
  +length: number;

  item(index: number): DOMRect | null;
}

declare class DOMRectReadOnly {
  +bottom: number;
  +height: number;
  +left: number;
  +right: number;
  +top: number;
  +width: number;
  +x: number;
  +y: number;

  constructor(x?: number, y?: number, width?: number, height?: number): void;

  static fromRect(other?: DOMRectInit): DOMRectReadOnly;
  toJSON(): Object;
}

/*---------- get-installed-related-apps ----------*/

// Contributes to:
//   - Navigator

type RelatedApplication = {
  id: string,
  platform: string,
  url: string,
  version: string,
};

/*---------- gpc ----------*/

declare class mixin$GlobalPrivacyControl {
  +globalPrivacyControl: boolean;
}

/*---------- gyroscope ----------*/

type GyroscopeLocalCoordinateSystem = 'device' | 'screen';

type GyroscopeSensorOptions = {
  ...SensorOptions,
  referenceFrame: GyroscopeLocalCoordinateSystem,
};

declare class Gyroscope extends Sensor {
  +x: number | null;
  +y: number | null;
  +z: number | null;

  constructor(sensorOptions?: GyroscopeSensorOptions): void;
}

/*---------- hr-time ----------*/

// Contributes to:
//   - WindowOrWorkerGlobalScope

type DOMHighResTimeStamp = number;

type EpochTimeStamp = number;

declare class Performance extends EventTarget {
  +eventCounts: EventCounts;
  +interactionCount: number;
  +navigation: PerformanceNavigation;
  onresourcetimingbufferfull: EventHandler;
  +timeOrigin: number;
  +timing: PerformanceTiming;

  clearMarks(markName?: string): void;
  clearMeasures(measureName?: string): void;
  clearResourceTimings(): void;
  getEntries(): PerformanceEntryList;
  getEntriesByName(name: string, type?: string): PerformanceEntryList;
  getEntriesByType(type: string): PerformanceEntryList;
  mark(markName: string, markOptions?: PerformanceMarkOptions): PerformanceMark;
  measure(
    measureName: string,
    startOrMeasureOptions?: string | PerformanceMeasureOptions,
    endMark?: string,
  ): PerformanceMeasure;
  measureUserAgentSpecificMemory(): Promise<MemoryMeasurement>;
  now(): number;
  setResourceTimingBufferSize(maxSize: number): void;
  toJSON(): Object;
}

/*---------- html-media-capture ----------*/

// Contributes to:
//   - HTMLInputElement

/*---------- html ----------*/

// Contributes to:
//   - Document
//   - DocumentOrShadowRoot
//   - Navigator
//   - Element
//   - ShadowRoot
//   - Range
//   - NavigatorID
//   - HTMLAnchorElement
//   - HTMLAreaElement
//   - HTMLBodyElement
//   - HTMLBRElement
//   - HTMLTableCaptionElement
//   - HTMLTableColElement
//   - HTMLDivElement
//   - HTMLDListElement
//   - HTMLEmbedElement
//   - HTMLHeadingElement
//   - HTMLHRElement
//   - HTMLHtmlElement
//   - HTMLIFrameElement
//   - HTMLImageElement
//   - HTMLInputElement
//   - HTMLLegendElement
//   - HTMLLIElement
//   - HTMLLinkElement
//   - HTMLMenuElement
//   - HTMLMetaElement
//   - HTMLObjectElement
//   - HTMLOListElement
//   - HTMLParagraphElement
//   - HTMLPreElement
//   - HTMLStyleElement
//   - HTMLScriptElement
//   - HTMLTableElement
//   - HTMLTableSectionElement
//   - HTMLTableCellElement
//   - HTMLTableRowElement
//   - HTMLUListElement
//   - Window

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

type ImageDataArray = Uint8ClampedArray | Float16Array;

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

type ImageDataPixelFormat = 'rgba-unorm8' | 'rgba-float16';

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
  colorSpace: PredefinedColorSpace,
  colorType: CanvasColorType,
  desynchronized: boolean,
  willReadFrequently: boolean,
};

type CloseWatcherOptions = {
  signal: AbortSignal,
};

type CommandEventInit = {
  ...EventInit,
  command: string,
  source: Element | null,
};

type DragEventInit = {
  ...MouseEventInit,
  dataTransfer: DataTransfer | null,
};

type ElementDefinitionOptions = {
  extends: string,
};

type ErrorEventInit = {
  ...EventInit,
  colno: number,
  error: any,
  filename: string,
  lineno: number,
  message: string,
};

type EventSourceInit = {
  withCredentials: boolean,
};

type FocusOptions = {
  focusVisible: boolean,
  preventScroll: boolean,
};

type FormDataEventInit = {
  ...EventInit,
  formData: FormData,
};

type GetHTMLOptions = {
  serializableShadowRoots: boolean,
  shadowRoots: Array<ShadowRoot>,
};

type HashChangeEventInit = {
  ...EventInit,
  newURL: string,
  oldURL: string,
};

type ImageBitmapOptions = {
  colorSpaceConversion: ColorSpaceConversion,
  imageOrientation: ImageOrientation,
  premultiplyAlpha: PremultiplyAlpha,
  resizeHeight: number,
  resizeQuality: ResizeQuality,
  resizeWidth: number,
};

type ImageBitmapRenderingContextSettings = {
  alpha: boolean,
};

type ImageDataSettings = {
  colorSpace: PredefinedColorSpace,
  pixelFormat: ImageDataPixelFormat,
};

type ImageEncodeOptions = {
  quality: number,
  type: string,
};

type MessageEventInit = {
  ...EventInit,
  data: any,
  lastEventId: string,
  origin: string,
  ports: Array<MessagePort>,
  source: MessageEventSource | null,
};

type NavigateEventInit = {
  ...EventInit,
  canIntercept: boolean,
  destination: NavigationDestination,
  downloadRequest: string | null,
  formData: FormData | null,
  hashChange: boolean,
  hasUAVisualTransition: boolean,
  info: any,
  navigationType: NavigationType,
  signal: AbortSignal,
  sourceElement: Element | null,
  userInitiated: boolean,
};

type NavigationCurrentEntryChangeEventInit = {
  ...EventInit,
  from: NavigationHistoryEntry,
  navigationType: NavigationType | null,
};

type NavigationInterceptOptions = {
  focusReset: NavigationFocusReset,
  handler: NavigationInterceptHandler,
  scroll: NavigationScrollBehavior,
};

type NavigationNavigateOptions = {
  ...NavigationOptions,
  history: NavigationHistoryBehavior,
  state: any,
};

type NavigationOptions = {
  info: any,
};

type NavigationReloadOptions = {
  ...NavigationOptions,
  state: any,
};

type NavigationResult = {
  committed: Promise<NavigationHistoryEntry>,
  finished: Promise<NavigationHistoryEntry>,
};

type NavigationUpdateCurrentEntryOptions = {
  state: any,
};

type PageRevealEventInit = {
  ...EventInit,
  viewTransition: ViewTransition | null,
};

type PageSwapEventInit = {
  ...EventInit,
  activation: NavigationActivation | null,
  viewTransition: ViewTransition | null,
};

type PageTransitionEventInit = {
  ...EventInit,
  persisted: boolean,
};

type PopStateEventInit = {
  ...EventInit,
  hasUAVisualTransition: boolean,
  state: any,
};

type PromiseRejectionEventInit = {
  ...EventInit,
  promise: Object,
  reason: any,
};

type ShowPopoverOptions = {
  source: HTMLElement,
};

type StorageEventInit = {
  ...EventInit,
  key: string | null,
  newValue: string | null,
  oldValue: string | null,
  storageArea: Storage | null,
  url: string,
};

type StructuredSerializeOptions = {
  transfer: Array<Object>,
};

type SubmitEventInit = {
  ...EventInit,
  submitter: HTMLElement | null,
};

type ToggleEventInit = {
  ...EventInit,
  newState: string,
  oldState: string,
};

type TogglePopoverOptions = {
  ...ShowPopoverOptions,
  force: boolean,
};

type TrackEventInit = {
  ...EventInit,
  track: VideoTrack | AudioTrack | TextTrack | null,
};

type ValidityStateFlags = {
  badInput: boolean,
  customError: boolean,
  patternMismatch: boolean,
  rangeOverflow: boolean,
  rangeUnderflow: boolean,
  stepMismatch: boolean,
  tooLong: boolean,
  tooShort: boolean,
  typeMismatch: boolean,
  valueMissing: boolean,
};

type WindowPostMessageOptions = {
  ...StructuredSerializeOptions,
  targetOrigin: string,
};

type WorkerOptions = {
  credentials: RequestCredentials,
  name: string,
  type: WorkerType,
};

type WorkletOptions = {
  credentials: RequestCredentials,
};

type BlobCallback = (blob: Blob | null) => void;

type CustomElementConstructor = () => HTMLElement;

type EventHandlerNonNull = (event: Event) => any;

type FrameRequestCallback = (time: number) => void;

type FunctionStringCallback = (data: string) => void;

type NavigationInterceptHandler = () => Promise<void>;

type OnBeforeUnloadEventHandlerNonNull = (event: Event) => string | null;

type OnErrorEventHandlerNonNull = (
  event: Event | string,
  source?: string,
  lineno?: number,
  colno?: number,
  error?: any,
) => any;

declare class AudioTrack {
  enabled: boolean;
  +id: string;
  +kind: string;
  +label: string;
  +language: string;
  +sourceBuffer: SourceBuffer | null;
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
  constructor(): void;

  define(
    name: string,
    constructor_: CustomElementConstructor,
    options?: ElementDefinitionOptions,
  ): void;
  get(name: string): CustomElementConstructor | void;
  getName(constructor_: CustomElementConstructor): string | null;
  initialize(root: Node): void;
  upgrade(root: Node): void;
  whenDefined(name: string): Promise<CustomElementConstructor>;
}

type CustomStateSet = Set<string>;

declare class DataTransfer {
  dropEffect: string;
  effectAllowed: string;
  +files: FileList;
  +items: DataTransferItemList;
  +types: $ReadOnlyArray<string>;

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
  getAsFileSystemHandle(): Promise<FileSystemHandle | null>;
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
  onrtctransform: EventHandler;

  close(): void;
  postMessage(message: any, transfer: Array<Object>): void;
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
  mixins mixin$HTMLAttributionSrcElementUtils, mixin$HTMLHyperlinkElementUtils
{
  attributionSourceId: number;
  charset: string;
  coords: string;
  download: string;
  hreflang: string;
  name: string;
  ping: string;
  referrerPolicy: string;
  rel: string;
  +relList: DOMTokenList;
  rev: string;
  shape: string;
  target: string;
  text: string;
  type: string;

  constructor(): void;
}

declare class HTMLAreaElement
  extends HTMLElement
  mixins mixin$HTMLAttributionSrcElementUtils, mixin$HTMLHyperlinkElementUtils
{
  alt: string;
  coords: string;
  download: string;
  noHref: boolean;
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

declare class HTMLBodyElement
  extends HTMLElement
  mixins mixin$WindowEventHandlers
{
  aLink: string;
  background: string;
  bgColor: string;
  link: string;
  onorientationchange: EventHandler;
  text: string;
  vLink: string;

  constructor(): void;
}

declare class HTMLBRElement extends HTMLElement {
  clear: string;

  constructor(): void;
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

  captureStream(frameRequestRate?: number): MediaStream;
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
  align: string;

  constructor(): void;
}

declare class HTMLDListElement extends HTMLElement {
  compact: boolean;

  constructor(): void;
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
  editContext: EditContext | null;
  hidden: boolean | number | string | null;
  inert: boolean;
  innerText: string;
  lang: string;
  +offsetHeight: number;
  +offsetLeft: number;
  +offsetParent: Element | null;
  +offsetTop: number;
  +offsetWidth: number;
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
  align: string;
  height: string;
  name: string;
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
  align: string;

  constructor(): void;
}

declare class HTMLHRElement extends HTMLElement {
  align: string;
  color: string;
  noShade: boolean;
  size: string;
  width: string;

  constructor(): void;
}

declare class HTMLHtmlElement extends HTMLElement {
  version: string;

  constructor(): void;
}

declare class HTMLIFrameElement
  extends HTMLElement
  mixins mixin$HTMLSharedStorageWritableElementUtils
{
  align: string;
  allow: string;
  allowFullscreen: boolean;
  +contentDocument: Document | null;
  +contentWindow: WindowProxy | null;
  credentialless: boolean;
  csp: string;
  frameBorder: string;
  height: string;
  loading: string;
  longDesc: string;
  marginHeight: string;
  marginWidth: string;
  name: string;
  +permissionsPolicy: PermissionsPolicy;
  privateToken: string;
  referrerPolicy: string;
  +sandbox: DOMTokenList;
  scrolling: string;
  src: string;
  srcdoc: TrustedHTML | string;
  width: string;

  constructor(): void;

  getSVGDocument(): Document | null;
}

declare class HTMLImageElement
  extends HTMLElement
  mixins
    mixin$HTMLAttributionSrcElementUtils,
    mixin$HTMLSharedStorageWritableElementUtils
{
  align: string;
  alt: string;
  border: string;
  +complete: boolean;
  crossOrigin: string | null;
  +currentSrc: string;
  decoding: string;
  fetchPriority: string;
  height: number;
  hspace: number;
  isMap: boolean;
  loading: string;
  longDesc: string;
  lowsrc: string;
  name: string;
  +naturalHeight: number;
  +naturalWidth: number;
  referrerPolicy: string;
  sizes: string;
  src: string;
  srcset: string;
  useMap: string;
  vspace: number;
  width: number;
  +x: number;
  +y: number;

  constructor(): void;

  decode(): Promise<void>;
}

declare class HTMLInputElement
  extends HTMLElement
  mixins mixin$PopoverInvokerElement
{
  accept: string;
  align: string;
  alpha: boolean;
  alt: string;
  autocomplete: string;
  capture: string;
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
  useMap: string;
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

declare class HTMLLabelElement extends HTMLElement {
  +control: HTMLElement | null;
  +form: HTMLFormElement | null;
  htmlFor: string;

  constructor(): void;
}

declare class HTMLLegendElement extends HTMLElement {
  align: string;
  +form: HTMLFormElement | null;

  constructor(): void;
}

declare class HTMLLIElement extends HTMLElement {
  type: string;
  value: number;

  constructor(): void;
}

declare class HTMLLinkElement extends HTMLElement mixins mixin$LinkStyle {
  as: string;
  +blocking: DOMTokenList;
  charset: string;
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
  rev: string;
  +sizes: DOMTokenList;
  target: string;
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
  currentTime: number;
  defaultMuted: boolean;
  defaultPlaybackRate: number;
  disableRemotePlayback: boolean;
  +duration: number;
  +ended: boolean;
  +error: MediaError | null;
  loop: boolean;
  +mediaKeys: MediaKeys | null;
  muted: boolean;
  +networkState: number;
  onencrypted: EventHandler;
  onwaitingforkey: EventHandler;
  +paused: boolean;
  playbackRate: number;
  +played: TimeRanges;
  preload: string;
  preservesPitch: boolean;
  +readyState: number;
  +remote: RemotePlayback;
  +seekable: TimeRanges;
  +seeking: boolean;
  +sinkId: string;
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
  captureStream(): MediaStream;
  fastSeek(time: number): void;
  getStartDate(): Object;
  load(): void;
  pause(): void;
  play(): Promise<void>;
  setMediaKeys(mediaKeys: MediaKeys | null): Promise<void>;
  setSinkId(sinkId: string): Promise<void>;
}

declare class HTMLMenuElement extends HTMLElement {
  compact: boolean;

  constructor(): void;
}

declare class HTMLMetaElement extends HTMLElement {
  content: string;
  httpEquiv: string;
  media: string;
  name: string;
  scheme: string;

  constructor(): void;
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
  align: string;
  archive: string;
  border: string;
  code: string;
  codeBase: string;
  codeType: string;
  +contentDocument: Document | null;
  +contentWindow: WindowProxy | null;
  data: string;
  declare: boolean;
  +form: HTMLFormElement | null;
  height: string;
  hspace: number;
  name: string;
  standby: string;
  type: string;
  useMap: string;
  +validationMessage: string;
  +validity: ValidityState;
  vspace: number;
  width: string;
  +willValidate: boolean;

  constructor(): void;

  checkValidity(): boolean;
  getSVGDocument(): Document | null;
  reportValidity(): boolean;
  setCustomValidity(error: string): void;
}

declare class HTMLOListElement extends HTMLElement {
  compact: boolean;
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
  align: string;

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
  width: number;

  constructor(): void;
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

declare class HTMLScriptElement
  extends HTMLElement
  mixins mixin$HTMLAttributionSrcElementUtils
{
  async: boolean;
  +blocking: DOMTokenList;
  charset: string;
  crossOrigin: string | null;
  defer: boolean;
  event: string;
  fetchPriority: string;
  htmlFor: string;
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

declare class HTMLStyleElement extends HTMLElement mixins mixin$LinkStyle {
  +blocking: DOMTokenList;
  disabled: boolean;
  media: string;
  type: string;

  constructor(): void;
}

declare class HTMLTableCaptionElement extends HTMLElement {
  align: string;

  constructor(): void;
}

declare class HTMLTableCellElement extends HTMLElement {
  abbr: string;
  align: string;
  axis: string;
  bgColor: string;
  +cellIndex: number;
  ch: string;
  chOff: string;
  colSpan: number;
  headers: string;
  height: string;
  noWrap: boolean;
  rowSpan: number;
  scope: string;
  vAlign: string;
  width: string;

  constructor(): void;
}

declare class HTMLTableColElement extends HTMLElement {
  align: string;
  ch: string;
  chOff: string;
  span: number;
  vAlign: string;
  width: string;

  constructor(): void;
}

declare class HTMLTableElement extends HTMLElement {
  align: string;
  bgColor: string;
  border: string;
  caption: HTMLTableCaptionElement | null;
  cellPadding: string;
  cellSpacing: string;
  frame: string;
  +rows: HTMLCollection;
  rules: string;
  summary: string;
  +tBodies: HTMLCollection;
  tFoot: HTMLTableSectionElement | null;
  tHead: HTMLTableSectionElement | null;
  width: string;

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
  align: string;
  bgColor: string;
  +cells: HTMLCollection;
  ch: string;
  chOff: string;
  +rowIndex: number;
  +sectionRowIndex: number;
  vAlign: string;

  constructor(): void;

  deleteCell(index: number): void;
  insertCell(index?: number): HTMLTableCellElement;
}

declare class HTMLTableSectionElement extends HTMLElement {
  align: string;
  ch: string;
  chOff: string;
  +rows: HTMLCollection;
  vAlign: string;

  constructor(): void;

  deleteRow(index: number): void;
  insertRow(index?: number): HTMLTableRowElement;
}

declare class HTMLTemplateElement extends HTMLElement {
  +content: DocumentFragment;
  shadowRootClonable: boolean;
  shadowRootCustomElementRegistry: string;
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
  compact: boolean;
  type: string;

  constructor(): void;
}

declare class HTMLUnknownElement extends HTMLElement {}

declare class HTMLVideoElement extends HTMLMediaElement {
  disablePictureInPicture: boolean;
  height: number;
  onenterpictureinpicture: EventHandler;
  onleavepictureinpicture: EventHandler;
  playsInline: boolean;
  poster: string;
  +videoHeight: number;
  +videoWidth: number;
  width: number;

  constructor(): void;

  cancelVideoFrameCallback(handle: number): void;
  getVideoPlaybackQuality(): VideoPlaybackQuality;
  requestPictureInPicture(): Promise<PictureInPictureWindow>;
  requestVideoFrameCallback(callback: VideoFrameRequestCallback): number;
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
  +data: ImageDataArray;
  +height: number;
  +pixelFormat: ImageDataPixelFormat;
  +width: number;

  constructor(sw: number, sh: number, settings?: ImageDataSettings): void;
  constructor(
    data: ImageDataArray,
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
  +ports: $ReadOnlyArray<MessagePort>;
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
  +finished: Promise<void>;
  +from: NavigationHistoryEntry;
  +navigationType: NavigationType;
}

declare class Navigator
  mixins
    mixin$NavigatorBadge,
    mixin$NavigatorDeviceMemory,
    mixin$GlobalPrivacyControl,
    mixin$NavigatorID,
    mixin$NavigatorLanguage,
    mixin$NavigatorOnLine,
    mixin$NavigatorContentUtils,
    mixin$NavigatorCookies,
    mixin$NavigatorPlugins,
    mixin$NavigatorConcurrentHardware,
    mixin$NavigatorNetworkInformation,
    mixin$NavigatorStorageBuckets,
    mixin$NavigatorStorage,
    mixin$NavigatorUA,
    mixin$NavigatorLocks,
    mixin$NavigatorAutomationInformation,
    mixin$NavigatorGPU
{
  +audioSession: AudioSession;
  +bluetooth: Bluetooth;
  +clipboard: Clipboard;
  +credentials: CredentialsContainer;
  +devicePosture: DevicePosture;
  +geolocation: Geolocation;
  +hid: HID;
  +ink: Ink;
  +keyboard: Keyboard;
  +login: NavigatorLogin;
  +managed: NavigatorManagedData;
  +maxTouchPoints: number;
  +mediaCapabilities: MediaCapabilities;
  +mediaDevices: MediaDevices;
  +mediaSession: MediaSession;
  +permissions: Permissions;
  +preferences: PreferenceManager;
  +presentation: Presentation;
  +scheduling: Scheduling;
  +serial: Serial;
  +serviceWorker: ServiceWorkerContainer;
  +usb: USB;
  +userActivation: UserActivation;
  +virtualKeyboard: VirtualKeyboard;
  +wakeLock: WakeLock;
  +windowControlsOverlay: WindowControlsOverlay;
  +xr: XRSystem;

  adAuctionComponents(numAdComponents: number): Array<string>;
  canShare(data?: ShareData): boolean;
  deprecatedReplaceInURN(
    urnOrConfig: UrnOrConfig,
    replacements: {[string]: string},
  ): Promise<void>;
  deprecatedURNtoURL(
    urnOrConfig: UrnOrConfig,
    send_reports?: boolean,
  ): Promise<string>;
  getAutoplayPolicy(type: AutoplayPolicyMediaType): AutoplayPolicy;
  getAutoplayPolicy(element: HTMLMediaElement): AutoplayPolicy;
  getAutoplayPolicy(context: AudioContext): AutoplayPolicy;
  getBattery(): Promise<BatteryManager>;
  getGamepads(): Array<Gamepad | null>;
  getInstalledRelatedApps(): Promise<Array<RelatedApplication>>;
  requestMediaKeySystemAccess(
    keySystem: string,
    supportedConfigurations: Array<MediaKeySystemConfiguration>,
  ): Promise<MediaKeySystemAccess>;
  requestMIDIAccess(options?: MIDIOptions): Promise<MIDIAccess>;
  sendBeacon(url: string, data?: BodyInit | null): boolean;
  share(data?: ShareData): Promise<void>;
  vibrate(pattern: VibratePattern): boolean;
}

declare class NotRestoredReasonDetails {
  +reason: string;

  toJSON(): Object;
}

declare class NotRestoredReasons {
  +children: $ReadOnlyArray<NotRestoredReasons> | null;
  +id: string | null;
  +name: string | null;
  +reasons: $ReadOnlyArray<NotRestoredReasonDetails> | null;
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

  convertToBlob(options?: ImageEncodeOptions): Promise<Blob>;
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

declare class PromiseRejectionEvent extends Event {
  +promise: Object;
  +reason: any;

  constructor(type: string, eventInitDict: PromiseRejectionEventInit): void;
}

declare class RadioNodeList extends NodeList {
  value: string;
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
  +sourceBuffer: SourceBuffer | null;

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
  +sourceBuffer: SourceBuffer | null;
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
    mixin$GlobalEventHandlers,
    mixin$WindowEventHandlers,
    mixin$WindowOrWorkerGlobalScope,
    mixin$AnimationFrameProvider,
    mixin$WindowSessionStorage,
    mixin$WindowLocalStorage
{
  +clientInformation: Navigator;
  +closed: boolean;
  +cookieStore: CookieStore;
  +credentialless: boolean;
  +customElements: CustomElementRegistry;
  +devicePixelRatio: number;
  +document: Document;
  +documentPictureInPicture: DocumentPictureInPicture;
  +event: Event | void;
  +external: External;
  +fence: Fence | null;
  +frameElement: Element | null;
  +frames: WindowProxy;
  +history: History;
  +innerHeight: number;
  +innerWidth: number;
  +launchQueue: LaunchQueue;
  +length: number;
  +location: Location;
  +locationbar: BarProp;
  +menubar: BarProp;
  name: string;
  +navigation: Navigation;
  +navigator: Navigator;
  onappinstalled: EventHandler;
  onbeforeinstallprompt: EventHandler;
  ondevicemotion: EventHandler;
  ondeviceorientation: EventHandler;
  ondeviceorientationabsolute: EventHandler;
  onorientationchange: EventHandler;
  opener: any;
  +orientation: number;
  +originAgentCluster: boolean;
  +outerHeight: number;
  +outerWidth: number;
  +pageXOffset: number;
  +pageYOffset: number;
  +parent: WindowProxy | null;
  +personalbar: BarProp;
  +screen: Screen;
  +screenLeft: number;
  +screenTop: number;
  +screenX: number;
  +screenY: number;
  +scrollbars: BarProp;
  +scrollX: number;
  +scrollY: number;
  +self: WindowProxy;
  +sharedStorage: SharedStorage | null;
  +speechSynthesis: SpeechSynthesis;
  status: string;
  +statusbar: BarProp;
  +toolbar: BarProp;
  +top: WindowProxy | null;
  +visualViewport: VisualViewport | null;
  +window: WindowProxy;

  alert(): void;
  alert(message: string): void;
  blur(): void;
  cancelIdleCallback(handle: number): void;
  captureEvents(): void;
  close(): void;
  confirm(message?: string): boolean;
  focus(): void;
  getComputedStyle(
    elt: Element,
    pseudoElt?: string | null,
  ): CSSStyleDeclaration;
  getDigitalGoodsService(serviceProvider: string): Promise<DigitalGoodsService>;
  getScreenDetails(): Promise<ScreenDetails>;
  getSelection(): Selection | null;
  matchMedia(query: string): MediaQueryList;
  moveBy(x: number, y: number): void;
  moveTo(x: number, y: number): void;
  navigate(dir: SpatialNavigationDirection): void;
  open(url?: string, target?: string, features?: string): WindowProxy | null;
  postMessage(
    message: any,
    targetOrigin: string,
    transfer?: Array<Object>,
  ): void;
  postMessage(message: any, options?: WindowPostMessageOptions): void;
  print(): void;
  prompt(message?: string, default_?: string): string | null;
  queryLocalFonts(options?: QueryOptions): Promise<Array<FontData>>;
  releaseEvents(): void;
  requestIdleCallback(
    callback: IdleRequestCallback,
    options?: IdleRequestOptions,
  ): number;
  resizeBy(x: number, y: number): void;
  resizeTo(width: number, height: number): void;
  scroll(options?: ScrollToOptions): void;
  scroll(x: number, y: number): void;
  scrollBy(options?: ScrollToOptions): void;
  scrollBy(x: number, y: number): void;
  scrollTo(options?: ScrollToOptions): void;
  scrollTo(x: number, y: number): void;
  showDirectoryPicker(
    options?: DirectoryPickerOptions,
  ): Promise<FileSystemDirectoryHandle>;
  showSaveFilePicker(
    options?: SaveFilePickerOptions,
  ): Promise<FileSystemFileHandle>;
  stop(): void;
  (name: string): Object;
  showOpenFilePicker(
    options?: OpenFilePickerOptions,
  ): Promise<Array<FileSystemFileHandle>>;
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
  mixins mixin$FontFaceSource, mixin$WindowOrWorkerGlobalScope
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
    mixin$NavigatorBadge,
    mixin$NavigatorDeviceMemory,
    mixin$GlobalPrivacyControl,
    mixin$NavigatorID,
    mixin$NavigatorLanguage,
    mixin$NavigatorOnLine,
    mixin$NavigatorConcurrentHardware,
    mixin$NavigatorNetworkInformation,
    mixin$NavigatorStorageBuckets,
    mixin$NavigatorStorage,
    mixin$NavigatorUA,
    mixin$NavigatorLocks,
    mixin$NavigatorGPU
{
  +hid: HID;
  +mediaCapabilities: MediaCapabilities;
  +permissions: Permissions;
  +serial: Serial;
  +serviceWorker: ServiceWorkerContainer;
  +usb: USB;
}

declare class Worklet {
  addModule(moduleURL: string, options?: WorkletOptions): Promise<void>;
}

declare class WorkletGlobalScope {}

declare class XMLSerializer {
  constructor(): void;

  serializeToString(root: Node): string;
}

declare class mixin$AbstractWorker {
  onerror: EventHandler;
}

declare class mixin$AnimationFrameProvider {
  cancelAnimationFrame(handle: number): void;
  requestAnimationFrame(callback: FrameRequestCallback): number;
}

declare class mixin$CanvasCompositing {
  globalAlpha: number;
  globalCompositeOperation: string;
}

declare class mixin$CanvasDrawImage {
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

declare class mixin$CanvasDrawPath {
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

declare class mixin$CanvasFillStrokeStyles {
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

declare class mixin$CanvasFilters {
  filter: string;
}

declare class mixin$CanvasImageData {
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

declare class mixin$CanvasImageSmoothing {
  imageSmoothingEnabled: boolean;
  imageSmoothingQuality: ImageSmoothingQuality;
}

declare class mixin$CanvasPath {
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

declare class mixin$CanvasPathDrawingStyles {
  lineCap: CanvasLineCap;
  lineDashOffset: number;
  lineJoin: CanvasLineJoin;
  lineWidth: number;
  miterLimit: number;

  getLineDash(): Array<number>;
  setLineDash(segments: Array<number>): void;
}

declare class mixin$CanvasRect {
  clearRect(x: number, y: number, w: number, h: number): void;
  fillRect(x: number, y: number, w: number, h: number): void;
  strokeRect(x: number, y: number, w: number, h: number): void;
}

declare class mixin$CanvasSettings {
  getContextAttributes(): CanvasRenderingContext2DSettings;
}

declare class mixin$CanvasShadowStyles {
  shadowBlur: number;
  shadowColor: string;
  shadowOffsetX: number;
  shadowOffsetY: number;
}

declare class mixin$CanvasState {
  isContextLost(): boolean;
  reset(): void;
  restore(): void;
  save(): void;
}

declare class mixin$CanvasText {
  fillText(text: string, x: number, y: number, maxWidth?: number): void;
  measureText(text: string): TextMetrics;
  strokeText(text: string, x: number, y: number, maxWidth?: number): void;
}

declare class mixin$CanvasTextDrawingStyles {
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

declare class mixin$CanvasTransform {
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

declare class mixin$CanvasUserInterface {
  drawFocusIfNeeded(element: Element): void;
  drawFocusIfNeeded(path: Path2D, element: Element): void;
}

declare class mixin$ElementContentEditable {
  contentEditable: string;
  enterKeyHint: string;
  inputMode: string;
  +isContentEditable: boolean;
  virtualKeyboardPolicy: string;
}

declare class mixin$GlobalEventHandlers {
  onabort: EventHandler;
  onanimationcancel: EventHandler;
  onanimationend: EventHandler;
  onanimationiteration: EventHandler;
  onanimationstart: EventHandler;
  onauxclick: EventHandler;
  onbeforeinput: EventHandler;
  onbeforematch: EventHandler;
  onbeforetoggle: EventHandler;
  onbeforexrselect: EventHandler;
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
  onfencedtreeclick: EventHandler;
  onfocus: EventHandler;
  onformdata: EventHandler;
  ongotpointercapture: EventHandler;
  oninput: EventHandler;
  oninvalid: EventHandler;
  onkeydown: EventHandler;
  onkeypress: EventHandler;
  onkeyup: EventHandler;
  onload: EventHandler;
  onloadeddata: EventHandler;
  onloadedmetadata: EventHandler;
  onloadstart: EventHandler;
  onlostpointercapture: EventHandler;
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
  onpointercancel: EventHandler;
  onpointerdown: EventHandler;
  onpointerenter: EventHandler;
  onpointerleave: EventHandler;
  onpointermove: EventHandler;
  onpointerout: EventHandler;
  onpointerover: EventHandler;
  onpointerrawupdate: EventHandler;
  onpointerup: EventHandler;
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
  onselectionchange: EventHandler;
  onselectstart: EventHandler;
  onslotchange: EventHandler;
  onsnapchanged: EventHandler;
  onsnapchanging: EventHandler;
  onstalled: EventHandler;
  onsubmit: EventHandler;
  onsuspend: EventHandler;
  ontimeupdate: EventHandler;
  ontoggle: EventHandler;
  ontouchcancel: EventHandler;
  ontouchend: EventHandler;
  ontouchmove: EventHandler;
  ontouchstart: EventHandler;
  ontransitioncancel: EventHandler;
  ontransitionend: EventHandler;
  ontransitionrun: EventHandler;
  ontransitionstart: EventHandler;
  onvolumechange: EventHandler;
  onwaiting: EventHandler;
  onwebkitanimationend: EventHandler;
  onwebkitanimationiteration: EventHandler;
  onwebkitanimationstart: EventHandler;
  onwebkittransitionend: EventHandler;
  onwheel: EventHandler;
}

declare class mixin$HTMLHyperlinkElementUtils {
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

declare class mixin$HTMLOrSVGElement {
  autofocus: boolean;
  +dataset: DOMStringMap;
  nonce: string;
  tabIndex: number;

  blur(): void;
  focus(options?: FocusOptions): void;
}

declare class mixin$MessageEventTarget {
  onmessage: EventHandler;
  onmessageerror: EventHandler;
}

declare class mixin$NavigatorConcurrentHardware {
  +hardwareConcurrency: number;
}

declare class mixin$NavigatorContentUtils {
  registerProtocolHandler(scheme: string, url: string): void;
  unregisterProtocolHandler(scheme: string, url: string): void;
}

declare class mixin$NavigatorCookies {
  +cookieEnabled: boolean;
}

declare class mixin$NavigatorID {
  +appCodeName: string;
  +appName: string;
  +appVersion: string;
  +oscpu: string;
  +platform: string;
  +product: string;
  +productSub: string;
  +userAgent: string;
  +vendor: string;
  +vendorSub: string;

  taintEnabled(): boolean;
}

declare class mixin$NavigatorLanguage {
  +language: string;
  +languages: $ReadOnlyArray<string>;
}

declare class mixin$NavigatorOnLine {
  +onLine: boolean;
}

declare class mixin$NavigatorPlugins {
  +mimeTypes: MimeTypeArray;
  +pdfViewerEnabled: boolean;
  +plugins: PluginArray;

  javaEnabled(): boolean;
}

declare class mixin$PopoverInvokerElement {
  popoverTargetAction: string;
  popoverTargetElement: Element | null;
}

declare class mixin$WindowEventHandlers {
  onafterprint: EventHandler;
  onbeforeprint: EventHandler;
  onbeforeunload: OnBeforeUnloadEventHandler;
  ongamepadconnected: EventHandler;
  ongamepaddisconnected: EventHandler;
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

declare class mixin$WindowLocalStorage {
  +localStorage: Storage;
}

declare class mixin$WindowOrWorkerGlobalScope {
  +caches: CacheStorage;
  +crossOriginIsolated: boolean;
  +crypto: Crypto;
  +indexedDB: IDBFactory;
  +isSecureContext: boolean;
  +origin: string;
  +performance: Performance;
  +scheduler: Scheduler;
  +trustedTypes: TrustedTypePolicyFactory;

  atob(data: string): string;
  btoa(data: string): string;
  clearInterval(id?: number): void;
  clearTimeout(id?: number): void;
  createImageBitmap(
    image: ImageBitmapSource,
    options?: ImageBitmapOptions,
  ): Promise<ImageBitmap>;
  createImageBitmap(
    image: ImageBitmapSource,
    sx: number,
    sy: number,
    sw: number,
    sh: number,
    options?: ImageBitmapOptions,
  ): Promise<ImageBitmap>;
  fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;
  queueMicrotask(callback: VoidFunction): void;
  reportError(e: any): void;
  setInterval(handler: TimerHandler, timeout?: number, arguments_: any): number;
  setTimeout(handler: TimerHandler, timeout?: number, arguments_: any): number;
  structuredClone(value: any, options?: StructuredSerializeOptions): any;
}

declare class mixin$WindowSessionStorage {
  +sessionStorage: Storage;
}

/*---------- idle-detection ----------*/

type ScreenIdleState = 'locked' | 'unlocked';

type UserIdleState = 'active' | 'idle';

type IdleOptions = {
  signal: AbortSignal,
  threshold: number,
};

declare class IdleDetector extends EventTarget {
  onchange: EventHandler;
  +screenState: ScreenIdleState | null;
  +userState: UserIdleState | null;

  constructor(): void;

  static requestPermission(): Promise<PermissionState>;
  start(options?: IdleOptions): Promise<void>;
}

/*---------- image-capture ----------*/

// Contributes to:
//   - MediaTrackSupportedConstraints
//   - MediaTrackCapabilities
//   - MediaTrackConstraintSet
//   - MediaTrackSettings

type ConstrainPoint2D = Array<Point2D> | ConstrainPoint2DParameters;

type FillLightMode = 'auto' | 'off' | 'flash';

type MeteringMode = 'none' | 'manual' | 'single-shot' | 'continuous';

type RedEyeReduction = 'never' | 'always' | 'controllable';

type ConstrainPoint2DParameters = {
  exact: Array<Point2D>,
  ideal: Array<Point2D>,
};

type MediaSettingsRange = {
  max: number,
  min: number,
  step: number,
};

type PhotoCapabilities = {
  fillLightMode: Array<FillLightMode>,
  imageHeight: MediaSettingsRange,
  imageWidth: MediaSettingsRange,
  redEyeReduction: RedEyeReduction,
};

type PhotoSettings = {
  fillLightMode: FillLightMode,
  imageHeight: number,
  imageWidth: number,
  redEyeReduction: boolean,
};

type Point2D = {
  x: number,
  y: number,
};

declare class ImageCapture {
  +track: MediaStreamTrack;

  constructor(videoTrack: MediaStreamTrack): void;

  getPhotoCapabilities(): Promise<PhotoCapabilities>;
  getPhotoSettings(): Promise<PhotoSettings>;
  grabFrame(): Promise<ImageBitmap>;
  takePhoto(photoSettings?: PhotoSettings): Promise<Blob>;
}

/*---------- image-resource ----------*/

type ImageResource = {
  label: string,
  sizes: string,
  src: string,
  type: string,
};

/*---------- IndexedDB ----------*/

// Contributes to:
//   - WindowOrWorkerGlobalScope

type IDBCursorDirection = 'next' | 'nextunique' | 'prev' | 'prevunique';

type IDBRequestReadyState = 'pending' | 'done';

type IDBTransactionDurability = 'default' | 'strict' | 'relaxed';

type IDBTransactionMode = 'readonly' | 'readwrite' | 'versionchange';

type IDBDatabaseInfo = {
  name: string,
  version: number,
};

type IDBIndexParameters = {
  multiEntry: boolean,
  unique: boolean,
};

type IDBObjectStoreParameters = {
  autoIncrement: boolean,
  keyPath: string | Array<string> | null,
};

type IDBTransactionOptions = {
  durability: IDBTransactionDurability,
};

type IDBVersionChangeEventInit = {
  ...EventInit,
  newVersion: number | null,
  oldVersion: number,
};

declare class IDBCursor {
  +direction: IDBCursorDirection;
  +key: any;
  +primaryKey: any;
  +request: IDBRequest;
  +source: IDBObjectStore | IDBIndex;

  advance(count: number): void;
  continue(key?: any): void;
  continuePrimaryKey(key: any, primaryKey: any): void;
  delete(): IDBRequest;
  update(value: any): IDBRequest;
}

declare class IDBCursorWithValue extends IDBCursor {
  +value: any;
}

declare class IDBDatabase extends EventTarget {
  +name: string;
  +objectStoreNames: DOMStringList;
  onabort: EventHandler;
  onclose: EventHandler;
  onerror: EventHandler;
  onversionchange: EventHandler;
  +version: number;

  close(): void;
  createObjectStore(
    name: string,
    options?: IDBObjectStoreParameters,
  ): IDBObjectStore;
  deleteObjectStore(name: string): void;
  transaction(
    storeNames: string | Array<string>,
    mode?: IDBTransactionMode,
    options?: IDBTransactionOptions,
  ): IDBTransaction;
}

declare class IDBFactory {
  cmp(first: any, second: any): number;
  databases(): Promise<Array<IDBDatabaseInfo>>;
  deleteDatabase(name: string): IDBOpenDBRequest;
  open(name: string, version?: number): IDBOpenDBRequest;
}

declare class IDBIndex {
  +keyPath: any;
  +multiEntry: boolean;
  name: string;
  +objectStore: IDBObjectStore;
  +unique: boolean;

  count(query?: any): IDBRequest;
  get(query: any): IDBRequest;
  getAll(query?: any, count?: number): IDBRequest;
  getAllKeys(query?: any, count?: number): IDBRequest;
  getKey(query: any): IDBRequest;
  openCursor(query?: any, direction?: IDBCursorDirection): IDBRequest;
  openKeyCursor(query?: any, direction?: IDBCursorDirection): IDBRequest;
}

declare class IDBKeyRange {
  +lower: any;
  +lowerOpen: boolean;
  +upper: any;
  +upperOpen: boolean;

  static bound(
    lower: any,
    upper: any,
    lowerOpen?: boolean,
    upperOpen?: boolean,
  ): IDBKeyRange;
  static lowerBound(lower: any, open?: boolean): IDBKeyRange;
  static only(value: any): IDBKeyRange;
  static upperBound(upper: any, open?: boolean): IDBKeyRange;
  includes(key: any): boolean;
}

declare class IDBObjectStore {
  +autoIncrement: boolean;
  +indexNames: DOMStringList;
  +keyPath: any;
  name: string;
  +transaction: IDBTransaction;

  add(value: any, key?: any): IDBRequest;
  clear(): IDBRequest;
  count(query?: any): IDBRequest;
  createIndex(
    name: string,
    keyPath: string | Array<string>,
    options?: IDBIndexParameters,
  ): IDBIndex;
  delete(query: any): IDBRequest;
  deleteIndex(name: string): void;
  get(query: any): IDBRequest;
  getAll(query?: any, count?: number): IDBRequest;
  getAllKeys(query?: any, count?: number): IDBRequest;
  getKey(query: any): IDBRequest;
  index(name: string): IDBIndex;
  openCursor(query?: any, direction?: IDBCursorDirection): IDBRequest;
  openKeyCursor(query?: any, direction?: IDBCursorDirection): IDBRequest;
  put(value: any, key?: any): IDBRequest;
}

declare class IDBOpenDBRequest extends IDBRequest {
  onblocked: EventHandler;
  onupgradeneeded: EventHandler;
}

declare class IDBRequest extends EventTarget {
  +error: DOMException | null;
  onerror: EventHandler;
  onsuccess: EventHandler;
  +readyState: IDBRequestReadyState;
  +result: any;
  +source: IDBObjectStore | IDBIndex | IDBCursor | null;
  +transaction: IDBTransaction | null;
}

declare class IDBTransaction extends EventTarget {
  +db: IDBDatabase;
  +durability: IDBTransactionDurability;
  +error: DOMException | null;
  +mode: IDBTransactionMode;
  +objectStoreNames: DOMStringList;
  onabort: EventHandler;
  oncomplete: EventHandler;
  onerror: EventHandler;

  abort(): void;
  commit(): void;
  objectStore(name: string): IDBObjectStore;
}

declare class IDBVersionChangeEvent extends Event {
  +newVersion: number | null;
  +oldVersion: number;

  constructor(type: string, eventInitDict?: IDBVersionChangeEventInit): void;
}

/*---------- ink-enhancement ----------*/

// Contributes to:
//   - Navigator

type InkPresenterParam = {
  presentationArea: Element | null,
};

type InkTrailStyle = {
  color: string,
  diameter: number,
};

declare class DelegatedInkTrailPresenter {
  +presentationArea: Element | null;

  updateInkTrailStartPoint(event: PointerEvent, style: InkTrailStyle): void;
}

declare class Ink {
  requestPresenter(
    param?: InkPresenterParam,
  ): Promise<DelegatedInkTrailPresenter>;
}

/*---------- input-device-capabilities ----------*/

// Contributes to:
//   - UIEvent
//   - UIEventInit

type InputDeviceCapabilitiesInit = {
  firesTouchEvents: boolean,
  pointerMovementScrolls: boolean,
};

declare class InputDeviceCapabilities {
  +firesTouchEvents: boolean;
  +pointerMovementScrolls: boolean;

  constructor(deviceInitDict?: InputDeviceCapabilitiesInit): void;
}

/*---------- input-events ----------*/

// Contributes to:
//   - InputEvent
//   - InputEventInit

/*---------- intersection-observer ----------*/

type IntersectionObserverEntryInit = {
  boundingClientRect: DOMRectInit,
  intersectionRatio: number,
  intersectionRect: DOMRectInit,
  isIntersecting: boolean,
  isVisible: boolean,
  rootBounds: DOMRectInit | null,
  target: Element,
  time: number,
};

type IntersectionObserverInit = {
  delay: number,
  root: Element | Document | null,
  rootMargin: string,
  scrollMargin: string,
  threshold: number | Array<number>,
  trackVisibility: boolean,
};

type IntersectionObserverCallback = (
  entries: Array<IntersectionObserverEntry>,
  observer: IntersectionObserver,
) => void;

declare class IntersectionObserver {
  +delay: number;
  +root: Element | Document | null;
  +rootMargin: string;
  +scrollMargin: string;
  +thresholds: $ReadOnlyArray<number>;
  +trackVisibility: boolean;

  constructor(
    callback: IntersectionObserverCallback,
    options?: IntersectionObserverInit,
  ): void;

  disconnect(): void;
  observe(target: Element): void;
  takeRecords(): Array<IntersectionObserverEntry>;
  unobserve(target: Element): void;
}

declare class IntersectionObserverEntry {
  +boundingClientRect: DOMRectReadOnly;
  +intersectionRatio: number;
  +intersectionRect: DOMRectReadOnly;
  +isIntersecting: boolean;
  +isVisible: boolean;
  +rootBounds: DOMRectReadOnly | null;
  +target: Element;
  +time: number;

  constructor(
    intersectionObserverEntryInit: IntersectionObserverEntryInit,
  ): void;
}

/*---------- intervention-reporting ----------*/

declare class InterventionReportBody extends ReportBody {
  +columnNumber: number | null;
  +id: string;
  +lineNumber: number | null;
  +message: string;
  +sourceFile: string | null;

  toJSON(): Object;
}

/*---------- is-input-pending ----------*/

// Contributes to:
//   - Navigator

type IsInputPendingOptions = {
  includeContinuous: boolean,
};

declare class Scheduling {
  isInputPending(isInputPendingOptions?: IsInputPendingOptions): boolean;
}

/*---------- js-self-profiling ----------*/

type ProfilerResource = string;

type ProfilerFrame = {
  column: number,
  line: number,
  name: string,
  resourceId: number,
};

type ProfilerInitOptions = {
  maxBufferSize: number,
  sampleInterval: number,
};

type ProfilerSample = {
  stackId: number,
  timestamp: number,
};

type ProfilerStack = {
  frameId: number,
  parentId: number,
};

type ProfilerTrace = {
  frames: Array<ProfilerFrame>,
  resources: Array<ProfilerResource>,
  samples: Array<ProfilerSample>,
  stacks: Array<ProfilerStack>,
};

declare class Profiler extends EventTarget {
  +sampleInterval: number;
  +stopped: boolean;

  constructor(options: ProfilerInitOptions): void;

  stop(): Promise<ProfilerTrace>;
}

/*---------- keyboard-lock ----------*/

// Contributes to:
//   - Navigator

declare class Keyboard extends EventTarget {
  onlayoutchange: EventHandler;

  getLayoutMap(): Promise<KeyboardLayoutMap>;
  lock(keyCodes?: Array<string>): Promise<void>;
  unlock(): void;
}

/*---------- keyboard-map ----------*/

// Contributes to:
//   - Keyboard

type KeyboardLayoutMap = Map<string, string>;

/*---------- largest-contentful-paint ----------*/

declare class LargestContentfulPaint
  extends PerformanceEntry
  mixins mixin$PaintTimingMixin
{
  +element: Element | null;
  +id: string;
  +loadTime: number;
  +size: number;
  +url: string;

  toJSON(): Object;
}

/*---------- layout-instability ----------*/

declare class LayoutShift extends PerformanceEntry {
  +hadRecentInput: boolean;
  +lastInputTime: number;
  +sources: $ReadOnlyArray<LayoutShiftAttribution>;
  +value: number;

  toJSON(): Object;
}

declare class LayoutShiftAttribution {
  +currentRect: DOMRectReadOnly;
  +node: Node | null;
  +previousRect: DOMRectReadOnly;
}

/*---------- local-font-access ----------*/

// Contributes to:
//   - Window

type QueryOptions = {
  postscriptNames: Array<string>,
};

declare class FontData {
  +family: string;
  +fullName: string;
  +postscriptName: string;
  +style: string;

  blob(): Promise<Blob>;
}

/*---------- login-status ----------*/

// Contributes to:
//   - Navigator

type LoginStatus = 'logged-in' | 'logged-out';

declare class NavigatorLogin {
  setStatus(status: LoginStatus): Promise<void>;
}

/*---------- long-animation-frames ----------*/

type ScriptInvokerType =
  | 'classic-script'
  | 'module-script'
  | 'event-listener'
  | 'user-callback'
  | 'resolve-promise'
  | 'reject-promise';

type ScriptWindowAttribution =
  | 'self'
  | 'descendant'
  | 'ancestor'
  | 'same-page'
  | 'other';

declare class PerformanceLongAnimationFrameTiming
  extends PerformanceEntry
  mixins mixin$PaintTimingMixin
{
  +blockingDuration: number;
  +duration: number;
  +entryType: string;
  +firstUIEventTimestamp: number;
  +name: string;
  +renderStart: number;
  +scripts: $ReadOnlyArray<PerformanceScriptTiming>;
  +startTime: number;
  +styleAndLayoutStart: number;

  toJSON(): Object;
}

declare class PerformanceScriptTiming extends PerformanceEntry {
  +duration: number;
  +entryType: string;
  +executionStart: number;
  +forcedStyleAndLayoutDuration: number;
  +invoker: string;
  +invokerType: ScriptInvokerType;
  +name: string;
  +pauseDuration: number;
  +sourceCharPosition: number;
  +sourceFunctionName: string;
  +sourceURL: string;
  +startTime: number;
  +window: Window | null;
  +windowAttribution: ScriptWindowAttribution;

  toJSON(): Object;
}

/*---------- longtasks ----------*/

declare class PerformanceLongTaskTiming extends PerformanceEntry {
  +attribution: $ReadOnlyArray<TaskAttributionTiming>;
  +duration: number;
  +entryType: string;
  +name: string;
  +startTime: number;

  toJSON(): Object;
}

declare class TaskAttributionTiming extends PerformanceEntry {
  +containerId: string;
  +containerName: string;
  +containerSrc: string;
  +containerType: string;
  +duration: number;
  +entryType: string;
  +name: string;
  +startTime: number;

  toJSON(): Object;
}

/*---------- managed-configuration ----------*/

// Contributes to:
//   - Navigator

declare class NavigatorManagedData extends EventTarget {
  onmanagedconfigurationchange: EventHandler;

  getAnnotatedAssetId(): Promise<string>;
  getAnnotatedLocation(): Promise<string>;
  getDirectoryId(): Promise<string>;
  getHostname(): Promise<string>;
  getManagedConfiguration(keys: Array<string>): Promise<{[string]: Object}>;
  getSerialNumber(): Promise<string>;
}

/*---------- manifest-incubations ----------*/

// Contributes to:
//   - Window

type AppBannerPromptOutcome = 'accepted' | 'dismissed';

type PromptResponseObject = {
  userChoice: AppBannerPromptOutcome,
};

declare class BeforeInstallPromptEvent extends Event {
  constructor(type: string, eventInitDict?: EventInit): void;

  prompt(): Promise<PromptResponseObject>;
}

/*---------- mathml-core ----------*/

declare class MathMLElement
  extends Element
  mixins
    mixin$ElementCSSInlineStyle,
    mixin$GlobalEventHandlers,
    mixin$HTMLOrSVGElement {}

/*---------- media-capabilities ----------*/

// Contributes to:
//   - Navigator
//   - WorkerNavigator

type ColorGamut = 'srgb' | 'p3' | 'rec2020';

type HdrMetadataType = 'smpteSt2086' | 'smpteSt2094-10' | 'smpteSt2094-40';

type MediaDecodingType = 'file' | 'media-source' | 'webrtc';

type MediaEncodingType = 'record' | 'webrtc';

type TransferFunction = 'srgb' | 'pq' | 'hlg';

type AudioConfiguration = {
  bitrate: number,
  channels: string,
  contentType: string,
  samplerate: number,
  spatialRendering: boolean,
};

type KeySystemTrackConfiguration = {
  encryptionScheme: string | null,
  robustness: string,
};

type MediaCapabilitiesDecodingInfo = {
  ...MediaCapabilitiesInfo,
  configuration: MediaDecodingConfiguration,
  keySystemAccess: MediaKeySystemAccess | null,
};

type MediaCapabilitiesEncodingInfo = {
  ...MediaCapabilitiesInfo,
  configuration: MediaEncodingConfiguration,
};

type MediaCapabilitiesInfo = {
  powerEfficient: boolean,
  smooth: boolean,
  supported: boolean,
};

type MediaCapabilitiesKeySystemConfiguration = {
  audio: KeySystemTrackConfiguration,
  distinctiveIdentifier: MediaKeysRequirement,
  initDataType: string,
  keySystem: string,
  persistentState: MediaKeysRequirement,
  sessionTypes: Array<string>,
  video: KeySystemTrackConfiguration,
};

type MediaConfiguration = {
  audio: AudioConfiguration,
  video: VideoConfiguration,
};

type MediaDecodingConfiguration = {
  ...MediaConfiguration,
  keySystemConfiguration: MediaCapabilitiesKeySystemConfiguration,
  type: MediaDecodingType,
};

type MediaEncodingConfiguration = {
  ...MediaConfiguration,
  type: MediaEncodingType,
};

type VideoConfiguration = {
  bitrate: number,
  colorGamut: ColorGamut,
  contentType: string,
  framerate: number,
  hasAlphaChannel: boolean,
  hdrMetadataType: HdrMetadataType,
  height: number,
  scalabilityMode: string,
  spatialScalability: boolean,
  transferFunction: TransferFunction,
  width: number,
};

declare class MediaCapabilities {
  decodingInfo(
    configuration: MediaDecodingConfiguration,
  ): Promise<MediaCapabilitiesDecodingInfo>;
  encodingInfo(
    configuration: MediaEncodingConfiguration,
  ): Promise<MediaCapabilitiesEncodingInfo>;
}

/*---------- media-playback-quality ----------*/

// Contributes to:
//   - HTMLVideoElement

declare class VideoPlaybackQuality {
  +corruptedVideoFrames: number;
  +creationTime: number;
  +droppedVideoFrames: number;
  +totalVideoFrames: number;
}

/*---------- media-source ----------*/

// Contributes to:
//   - AudioTrack
//   - VideoTrack
//   - TextTrack

type AppendMode = 'segments' | 'sequence';

type EndOfStreamError = 'network' | 'decode';

type ReadyState = 'closed' | 'open' | 'ended';

type BufferedChangeEventInit = {
  ...EventInit,
  addedRanges: TimeRanges,
  removedRanges: TimeRanges,
};

declare class BufferedChangeEvent extends Event {
  +addedRanges: TimeRanges;
  +removedRanges: TimeRanges;

  constructor(type: string, eventInitDict?: BufferedChangeEventInit): void;
}

declare class ManagedMediaSource extends MediaSource {
  onendstreaming: EventHandler;
  onstartstreaming: EventHandler;
  +streaming: boolean;

  constructor(): void;
}

declare class ManagedSourceBuffer extends SourceBuffer {
  onbufferedchange: EventHandler;
}

declare class MediaSource extends EventTarget {
  +activeSourceBuffers: SourceBufferList;
  +canConstructInDedicatedWorker: boolean;
  duration: number;
  +handle: MediaSourceHandle;
  onsourceclose: EventHandler;
  onsourceended: EventHandler;
  onsourceopen: EventHandler;
  +readyState: ReadyState;
  +sourceBuffers: SourceBufferList;

  constructor(): void;

  static isTypeSupported(type: string): boolean;
  addSourceBuffer(type: string): SourceBuffer;
  clearLiveSeekableRange(): void;
  endOfStream(error?: EndOfStreamError): void;
  removeSourceBuffer(sourceBuffer: SourceBuffer): void;
  setLiveSeekableRange(start: number, end: number): void;
}

declare class MediaSourceHandle {}

declare class SourceBuffer extends EventTarget {
  appendWindowEnd: number;
  appendWindowStart: number;
  +audioTracks: AudioTrackList;
  +buffered: TimeRanges;
  mode: AppendMode;
  onabort: EventHandler;
  onerror: EventHandler;
  onupdate: EventHandler;
  onupdateend: EventHandler;
  onupdatestart: EventHandler;
  +textTracks: TextTrackList;
  timestampOffset: number;
  +updating: boolean;
  +videoTracks: VideoTrackList;

  abort(): void;
  appendBuffer(data: BufferSource): void;
  changeType(type: string): void;
  remove(start: number, end: number): void;
}

declare class SourceBufferList extends EventTarget {
  +length: number;
  onaddsourcebuffer: EventHandler;
  onremovesourcebuffer: EventHandler;

  (index: number): SourceBuffer;
}

/*---------- mediacapture-automation ----------*/

type MockCapturePromptResult = 'granted' | 'denied';

type MockCameraConfiguration = {
  ...MockCaptureDeviceConfiguration,
  defaultFrameRate: number,
  facingMode: string,
};

type MockCaptureDeviceConfiguration = {
  deviceId: string,
  groupId: string,
  label: string,
};

type MockCapturePromptResultConfiguration = {
  getDisplayMedia: MockCapturePromptResult,
  getUserMedia: MockCapturePromptResult,
};

type MockMicrophoneConfiguration = {
  ...MockCaptureDeviceConfiguration,
  defaultSampleRate: number,
};

/*---------- mediacapture-fromelement ----------*/

// Contributes to:
//   - HTMLMediaElement
//   - HTMLCanvasElement

declare class CanvasCaptureMediaStreamTrack extends MediaStreamTrack {
  +canvas: HTMLCanvasElement;

  requestFrame(): void;
}

/*---------- mediacapture-handle-actions ----------*/

// Contributes to:
//   - MediaDevices
//   - MediaStreamTrack

type CaptureAction = 'next' | 'previous' | 'first' | 'last';

type CaptureActionEventInit = {
  ...EventInit,
  action: string,
};

declare class CaptureActionEvent extends Event {
  +action: CaptureAction;

  constructor(init?: CaptureActionEventInit): void;
}

/*---------- mediacapture-region ----------*/

declare class BrowserCaptureMediaStreamTrack extends MediaStreamTrack {
  clone(): BrowserCaptureMediaStreamTrack;
  cropTo(cropTarget: CropTarget | null): Promise<void>;
  restrictTo(RestrictionTarget: RestrictionTarget | null): Promise<void>;
}

declare class CropTarget {
  static fromElement(element: Element): Promise<CropTarget>;
}

/*---------- mediacapture-streams ----------*/

// Contributes to:
//   - Navigator
//   - MediaDevices

type ConstrainBoolean = boolean | ConstrainBooleanParameters;

type ConstrainDOMString = string | Array<string> | ConstrainDOMStringParameters;

type ConstrainDouble = number | ConstrainDoubleRange;

type ConstrainULong = number | ConstrainULongRange;

type MediaDeviceKind = 'audioinput' | 'audiooutput' | 'videoinput';

type MediaStreamTrackState = 'live' | 'ended';

type VideoFacingModeEnum = 'user' | 'environment' | 'left' | 'right';

type VideoResizeModeEnum = 'none' | 'crop-and-scale';

type CameraDevicePermissionDescriptor = {
  ...PermissionDescriptor,
  panTiltZoom: boolean,
};

type ConstrainBooleanParameters = {
  exact: boolean,
  ideal: boolean,
};

type ConstrainDOMStringParameters = {
  exact: string | Array<string>,
  ideal: string | Array<string>,
};

type ConstrainDoubleRange = {
  ...DoubleRange,
  exact: number,
  ideal: number,
};

type ConstrainULongRange = {
  ...ULongRange,
  exact: number,
  ideal: number,
};

type DeviceChangeEventInit = {
  ...EventInit,
  devices: Array<MediaDeviceInfo>,
};

type DoubleRange = {
  max: number,
  min: number,
};

type MediaStreamConstraints = {
  audio: boolean | MediaTrackConstraints,
  peerIdentity: string,
  preferCurrentTab: boolean,
  video: boolean | MediaTrackConstraints,
};

type MediaStreamTrackEventInit = {
  ...EventInit,
  track: MediaStreamTrack,
};

type MediaTrackCapabilities = {
  aspectRatio: DoubleRange,
  autoGainControl: Array<boolean>,
  backgroundBlur: Array<boolean>,
  brightness: MediaSettingsRange,
  channelCount: ULongRange,
  colorTemperature: MediaSettingsRange,
  contrast: MediaSettingsRange,
  cursor: Array<string>,
  deviceId: string,
  displaySurface: string,
  echoCancellation: Array<boolean>,
  exposureCompensation: MediaSettingsRange,
  exposureMode: Array<string>,
  exposureTime: MediaSettingsRange,
  facingMode: Array<string>,
  focusDistance: MediaSettingsRange,
  focusMode: Array<string>,
  frameRate: DoubleRange,
  groupId: string,
  height: ULongRange,
  iso: MediaSettingsRange,
  latency: DoubleRange,
  logicalSurface: boolean,
  noiseSuppression: Array<boolean>,
  pan: MediaSettingsRange,
  resizeMode: Array<string>,
  sampleRate: ULongRange,
  sampleSize: ULongRange,
  saturation: MediaSettingsRange,
  sharpness: MediaSettingsRange,
  tilt: MediaSettingsRange,
  torch: Array<boolean>,
  whiteBalanceMode: Array<string>,
  width: ULongRange,
  zoom: MediaSettingsRange,
};

type MediaTrackConstraints = {
  ...MediaTrackConstraintSet,
  advanced: Array<MediaTrackConstraintSet>,
};

type MediaTrackConstraintSet = {
  aspectRatio: ConstrainDouble,
  autoGainControl: ConstrainBoolean,
  backgroundBlur: ConstrainBoolean,
  brightness: ConstrainDouble,
  channelCount: ConstrainULong,
  colorTemperature: ConstrainDouble,
  contrast: ConstrainDouble,
  cursor: ConstrainDOMString,
  deviceId: ConstrainDOMString,
  displaySurface: ConstrainDOMString,
  echoCancellation: ConstrainBoolean,
  exposureCompensation: ConstrainDouble,
  exposureMode: ConstrainDOMString,
  exposureTime: ConstrainDouble,
  facingMode: ConstrainDOMString,
  focusDistance: ConstrainDouble,
  focusMode: ConstrainDOMString,
  frameRate: ConstrainDouble,
  groupId: ConstrainDOMString,
  height: ConstrainULong,
  iso: ConstrainDouble,
  latency: ConstrainDouble,
  logicalSurface: ConstrainBoolean,
  noiseSuppression: ConstrainBoolean,
  pan: boolean | ConstrainDouble,
  pointsOfInterest: ConstrainPoint2D,
  resizeMode: ConstrainDOMString,
  restrictOwnAudio: ConstrainBoolean,
  sampleRate: ConstrainULong,
  sampleSize: ConstrainULong,
  saturation: ConstrainDouble,
  sharpness: ConstrainDouble,
  suppressLocalAudioPlayback: ConstrainBoolean,
  tilt: boolean | ConstrainDouble,
  torch: ConstrainBoolean,
  whiteBalanceMode: ConstrainDOMString,
  width: ConstrainULong,
  zoom: boolean | ConstrainDouble,
};

type MediaTrackSettings = {
  aspectRatio: number,
  autoGainControl: boolean,
  backgroundBlur: boolean,
  brightness: number,
  channelCount: number,
  colorTemperature: number,
  contrast: number,
  cursor: string,
  deviceId: string,
  displaySurface: string,
  echoCancellation: boolean,
  exposureCompensation: number,
  exposureMode: string,
  exposureTime: number,
  facingMode: string,
  focusDistance: number,
  focusMode: string,
  frameRate: number,
  groupId: string,
  height: number,
  iso: number,
  latency: number,
  logicalSurface: boolean,
  noiseSuppression: boolean,
  pan: number,
  pointsOfInterest: Array<Point2D>,
  resizeMode: string,
  restrictOwnAudio: boolean,
  sampleRate: number,
  sampleSize: number,
  saturation: number,
  screenPixelRatio: number,
  sharpness: number,
  suppressLocalAudioPlayback: boolean,
  tilt: number,
  torch: boolean,
  whiteBalanceMode: string,
  width: number,
  zoom: number,
};

type MediaTrackSupportedConstraints = {
  aspectRatio: boolean,
  autoGainControl: boolean,
  backgroundBlur: boolean,
  brightness: boolean,
  channelCount: boolean,
  colorTemperature: boolean,
  contrast: boolean,
  cursor: boolean,
  deviceId: boolean,
  displaySurface: boolean,
  echoCancellation: boolean,
  exposureCompensation: boolean,
  exposureMode: boolean,
  exposureTime: boolean,
  facingMode: boolean,
  focusDistance: boolean,
  focusMode: boolean,
  frameRate: boolean,
  groupId: boolean,
  height: boolean,
  iso: boolean,
  latency: boolean,
  logicalSurface: boolean,
  noiseSuppression: boolean,
  pan: boolean,
  pointsOfInterest: boolean,
  resizeMode: boolean,
  restrictOwnAudio: boolean,
  sampleRate: boolean,
  sampleSize: boolean,
  saturation: boolean,
  sharpness: boolean,
  suppressLocalAudioPlayback: boolean,
  tilt: boolean,
  torch: boolean,
  whiteBalanceMode: boolean,
  width: boolean,
  zoom: boolean,
};

type ULongRange = {
  max: number,
  min: number,
};

declare class DeviceChangeEvent extends Event {
  +devices: $ReadOnlyArray<MediaDeviceInfo>;
  +userInsertedDevices: $ReadOnlyArray<MediaDeviceInfo>;

  constructor(type: string, eventInitDict?: DeviceChangeEventInit): void;
}

declare class InputDeviceInfo extends MediaDeviceInfo {
  getCapabilities(): MediaTrackCapabilities;
}

declare class MediaDeviceInfo {
  +deviceId: string;
  +groupId: string;
  +kind: MediaDeviceKind;
  +label: string;

  toJSON(): Object;
}

declare class MediaDevices extends EventTarget {
  oncaptureaction: EventHandler;
  ondevicechange: EventHandler;

  enumerateDevices(): Promise<Array<MediaDeviceInfo>>;
  getDisplayMedia(options?: DisplayMediaStreamOptions): Promise<MediaStream>;
  getSupportedConstraints(): MediaTrackSupportedConstraints;
  getUserMedia(constraints?: MediaStreamConstraints): Promise<MediaStream>;
  getViewportMedia(options?: DisplayMediaStreamOptions): Promise<MediaStream>;
  selectAudioOutput(options?: AudioOutputOptions): Promise<MediaDeviceInfo>;
  setCaptureHandleConfig(config?: CaptureHandleConfig): void;
  setSupportedCaptureActions(actions: Array<string>): void;
}

declare class MediaStream extends EventTarget {
  +active: boolean;
  +id: string;
  onaddtrack: EventHandler;
  onremovetrack: EventHandler;

  constructor(): void;
  constructor(stream: MediaStream): void;
  constructor(tracks: Array<MediaStreamTrack>): void;

  addTrack(track: MediaStreamTrack): void;
  clone(): MediaStream;
  getAudioTracks(): Array<MediaStreamTrack>;
  getTrackById(trackId: string): MediaStreamTrack | null;
  getTracks(): Array<MediaStreamTrack>;
  getVideoTracks(): Array<MediaStreamTrack>;
  removeTrack(track: MediaStreamTrack): void;
}

declare class MediaStreamTrack extends EventTarget {
  contentHint: string;
  enabled: boolean;
  +id: string;
  +isolated: boolean;
  +kind: string;
  +label: string;
  +muted: boolean;
  oncapturehandlechange: EventHandler;
  onended: EventHandler;
  onisolationchange: EventHandler;
  onmute: EventHandler;
  onunmute: EventHandler;
  +readyState: MediaStreamTrackState;

  applyConstraints(constraints?: MediaTrackConstraints): Promise<void>;
  clone(): MediaStreamTrack;
  getCapabilities(): MediaTrackCapabilities;
  getCaptureHandle(): CaptureHandle | null;
  getConstraints(): MediaTrackConstraints;
  getSettings(): MediaTrackSettings;
  getSupportedCaptureActions(): Array<string>;
  sendCaptureAction(action: CaptureAction): Promise<void>;
  stop(): void;
}

declare class MediaStreamTrackEvent extends Event {
  +track: MediaStreamTrack;

  constructor(type: string, eventInitDict: MediaStreamTrackEventInit): void;
}

declare class OverconstrainedError extends DOMException {
  +constraint: string;

  constructor(constraint: string, message?: string): void;
}

/*---------- mediacapture-surface-control ----------*/

// Contributes to:
//   - CaptureController

/*---------- mediacapture-transform ----------*/

type MediaStreamTrackProcessorInit = {
  maxBufferSize: number,
  track: MediaStreamTrack,
};

declare class MediaStreamTrackProcessor {
  +readable: ReadableStream;

  constructor(init: MediaStreamTrackProcessorInit): void;
}

declare class VideoTrackGenerator {
  muted: boolean;
  +track: MediaStreamTrack;
  +writable: WritableStream;

  constructor(): void;
}

/*---------- mediacapture-viewport ----------*/

// Contributes to:
//   - MediaDevices

/*---------- mediaqueries-5 ----------*/

// Contributes to:
//   - Navigator

declare class PreferenceManager {
  +colorScheme: PreferenceObject;
  +contrast: PreferenceObject;
  +reducedData: PreferenceObject;
  +reducedMotion: PreferenceObject;
  +reducedTransparency: PreferenceObject;
}

declare class PreferenceObject extends EventTarget {
  onchange: EventHandler;
  +override: string | null;
  +validValues: $ReadOnlyArray<string>;
  +value: string;

  clearOverride(): void;
  requestOverride(value: string | null): Promise<void>;
}

/*---------- mediasession ----------*/

// Contributes to:
//   - Navigator

type MediaSessionAction =
  | 'play'
  | 'pause'
  | 'seekbackward'
  | 'seekforward'
  | 'previoustrack'
  | 'nexttrack'
  | 'skipad'
  | 'stop'
  | 'seekto'
  | 'togglemicrophone'
  | 'togglecamera'
  | 'togglescreenshare'
  | 'hangup'
  | 'previousslide'
  | 'nextslide'
  | 'enterpictureinpicture'
  | 'voiceactivity';

type MediaSessionPlaybackState = 'none' | 'paused' | 'playing';

type ChapterInformationInit = {
  artwork: Array<MediaImage>,
  startTime: number,
  title: string,
};

type MediaImage = {
  sizes: string,
  src: string,
  type: string,
};

type MediaMetadataInit = {
  album: string,
  artist: string,
  artwork: Array<MediaImage>,
  chapterInfo: Array<ChapterInformationInit>,
  title: string,
};

type MediaPositionState = {
  duration: number,
  playbackRate: number,
  position: number,
};

type MediaSessionActionDetails = {
  action: MediaSessionAction,
  fastSeek: boolean,
  isActivating: boolean,
  seekOffset: number,
  seekTime: number,
};

type MediaSessionActionHandler = (details: MediaSessionActionDetails) => void;

declare class ChapterInformation {
  +artwork: $ReadOnlyArray<MediaImage>;
  +startTime: number;
  +title: string;
}

declare class MediaMetadata {
  album: string;
  artist: string;
  artwork: $ReadOnlyArray<Object>;
  +chapterInfo: $ReadOnlyArray<ChapterInformation>;
  title: string;

  constructor(init?: MediaMetadataInit): void;
}

declare class MediaSession {
  metadata: MediaMetadata | null;
  playbackState: MediaSessionPlaybackState;

  setActionHandler(
    action: MediaSessionAction,
    handler: MediaSessionActionHandler | null,
  ): void;
  setCameraActive(active: boolean): Promise<void>;
  setMicrophoneActive(active: boolean): Promise<void>;
  setPositionState(state?: MediaPositionState): void;
  setScreenshareActive(active: boolean): Promise<void>;
}

/*---------- mediastream-recording ----------*/

type BitrateMode = 'constant' | 'variable';

type RecordingState = 'inactive' | 'recording' | 'paused';

type BlobEventInit = {
  ...EventInit,
  data: Blob,
  timecode: number,
};

type MediaRecorderOptions = {
  audioBitrateMode: BitrateMode,
  audioBitsPerSecond: number,
  bitsPerSecond: number,
  mimeType: string,
  videoBitsPerSecond: number,
  videoKeyFrameIntervalCount: number,
  videoKeyFrameIntervalDuration: number,
};

declare class BlobEvent extends Event {
  +data: Blob;
  +timecode: number;

  constructor(type: string, eventInitDict: BlobEventInit): void;
}

declare class MediaRecorder extends EventTarget {
  +audioBitrateMode: BitrateMode;
  +audioBitsPerSecond: number;
  +mimeType: string;
  ondataavailable: EventHandler;
  onerror: EventHandler;
  onpause: EventHandler;
  onresume: EventHandler;
  onstart: EventHandler;
  onstop: EventHandler;
  +state: RecordingState;
  +stream: MediaStream;
  +videoBitsPerSecond: number;

  constructor(stream: MediaStream, options?: MediaRecorderOptions): void;

  static isTypeSupported(type: string): boolean;
  pause(): void;
  requestData(): void;
  resume(): void;
  start(timeslice?: number): void;
  stop(): void;
}

/*---------- mst-content-hint ----------*/

// Contributes to:
//   - MediaStreamTrack
//   - RTCRtpSendParameters

type RTCDegradationPreference =
  | 'maintain-framerate'
  | 'maintain-resolution'
  | 'balanced';

/*---------- navigation-timing ----------*/

// Contributes to:
//   - Performance

type NavigationTimingType =
  | 'navigate'
  | 'reload'
  | 'back_forward'
  | 'prerender';

declare class PerformanceNavigation {
  static +TYPE_BACK_FORWARD: 2;
  static +TYPE_NAVIGATE: 0;
  static +TYPE_RELOAD: 1;
  static +TYPE_RESERVED: 255;

  +redirectCount: number;
  +type: number;

  toJSON(): Object;
}

declare class PerformanceNavigationTiming extends PerformanceResourceTiming {
  +activationStart: number;
  +criticalCHRestart: number;
  +domComplete: number;
  +domContentLoadedEventEnd: number;
  +domContentLoadedEventStart: number;
  +domInteractive: number;
  +loadEventEnd: number;
  +loadEventStart: number;
  +notRestoredReasons: NotRestoredReasons | null;
  +redirectCount: number;
  +type: NavigationTimingType;
  +unloadEventEnd: number;
  +unloadEventStart: number;

  toJSON(): Object;
}

declare class PerformanceTiming {
  +connectEnd: number;
  +connectStart: number;
  +domainLookupEnd: number;
  +domainLookupStart: number;
  +domComplete: number;
  +domContentLoadedEventEnd: number;
  +domContentLoadedEventStart: number;
  +domInteractive: number;
  +domLoading: number;
  +fetchStart: number;
  +loadEventEnd: number;
  +loadEventStart: number;
  +navigationStart: number;
  +redirectEnd: number;
  +redirectStart: number;
  +requestStart: number;
  +responseEnd: number;
  +responseStart: number;
  +secureConnectionStart: number;
  +unloadEventEnd: number;
  +unloadEventStart: number;

  toJSON(): Object;
}

/*---------- netinfo ----------*/

type Megabit = number;

type Millisecond = number;

type ConnectionType =
  | 'bluetooth'
  | 'cellular'
  | 'ethernet'
  | 'mixed'
  | 'none'
  | 'other'
  | 'unknown'
  | 'wifi'
  | 'wimax';

type EffectiveConnectionType = '2g' | '3g' | '4g' | 'slow-2g';

declare class NetworkInformation
  extends EventTarget
  mixins mixin$NetworkInformationSaveData
{
  +downlink: Megabit;
  +downlinkMax: Megabit;
  +effectiveType: EffectiveConnectionType;
  onchange: EventHandler;
  +rtt: Millisecond;
  +type: ConnectionType;
}

declare class mixin$NavigatorNetworkInformation {
  +connection: NetworkInformation;
}

/*---------- notifications ----------*/

// Contributes to:
//   - ServiceWorkerRegistration
//   - ServiceWorkerGlobalScope

type NotificationDirection = 'auto' | 'ltr' | 'rtl';

type NotificationPermission = 'default' | 'denied' | 'granted';

type GetNotificationOptions = {
  tag: string,
};

type NotificationAction = {
  action: string,
  icon: string,
  title: string,
};

type NotificationEventInit = {
  ...ExtendableEventInit,
  action: string,
  notification: Notification,
};

type NotificationOptions = {
  actions: Array<NotificationAction>,
  badge: string,
  body: string,
  data: any,
  dir: NotificationDirection,
  icon: string,
  image: string,
  lang: string,
  renotify: boolean,
  requireInteraction: boolean,
  silent: boolean | null,
  tag: string,
  timestamp: EpochTimeStamp,
  vibrate: VibratePattern,
};

type NotificationPermissionCallback = (
  permission: NotificationPermission,
) => void;

declare class Notification extends EventTarget {
  +actions: $ReadOnlyArray<NotificationAction>;
  +badge: string;
  +body: string;
  +data: any;
  +dir: NotificationDirection;
  +icon: string;
  +image: string;
  +lang: string;
  +maxActions: number;
  onclick: EventHandler;
  onclose: EventHandler;
  onerror: EventHandler;
  onshow: EventHandler;
  +permission: NotificationPermission;
  +renotify: boolean;
  +requireInteraction: boolean;
  +silent: boolean | null;
  +tag: string;
  +timestamp: EpochTimeStamp;
  +title: string;
  +vibrate: $ReadOnlyArray<number>;

  constructor(title: string, options?: NotificationOptions): void;

  static requestPermission(
    deprecatedCallback?: NotificationPermissionCallback,
  ): Promise<NotificationPermission>;
  close(): void;
}

declare class NotificationEvent extends ExtendableEvent {
  +action: string;
  +notification: Notification;

  constructor(type: string, eventInitDict: NotificationEventInit): void;
}

/*---------- observable ----------*/

// Contributes to:
//   - EventTarget

type ObservableInspectorUnion =
  | ObservableSubscriptionCallback
  | ObservableInspector;

type ObserverUnion = ObservableSubscriptionCallback | SubscriptionObserver;

type ObservableEventListenerOptions = {
  capture: boolean,
  passive: boolean,
};

type ObservableInspector = {
  abort: ObservableInspectorAbortHandler,
  complete: VoidFunction,
  error: ObservableSubscriptionCallback,
  next: ObservableSubscriptionCallback,
  subscribe: VoidFunction,
};

type SubscribeOptions = {
  signal: AbortSignal,
};

type SubscriptionObserver = {
  complete: VoidFunction,
  error: ObservableSubscriptionCallback,
  next: ObservableSubscriptionCallback,
};

type CatchCallback = (value: any) => any;

type Mapper = (value: any, index: number) => any;

type ObservableInspectorAbortHandler = (value: any) => void;

type ObservableSubscriptionCallback = (value: any) => void;

type Predicate = (value: any, index: number) => boolean;

type Reducer = (accumulator: any, currentValue: any, index: number) => any;

type SubscribeCallback = (subscriber: Subscriber) => void;

type Visitor = (value: any, index: number) => void;

declare class Observable {
  constructor(callback: SubscribeCallback): void;

  static from(value: any): Observable;
  catch(callback: CatchCallback): Observable;
  drop(amount: number): Observable;
  every(predicate: Predicate, options?: SubscribeOptions): Promise<boolean>;
  filter(predicate: Predicate): Observable;
  finally(callback: VoidFunction): Observable;
  find(predicate: Predicate, options?: SubscribeOptions): Promise<any>;
  first(options?: SubscribeOptions): Promise<any>;
  flatMap(mapper: Mapper): Observable;
  forEach(callback: Visitor, options?: SubscribeOptions): Promise<void>;
  inspect(inspectorUnion?: ObservableInspectorUnion): Observable;
  last(options?: SubscribeOptions): Promise<any>;
  map(mapper: Mapper): Observable;
  reduce(
    reducer: Reducer,
    initialValue?: any,
    options?: SubscribeOptions,
  ): Promise<any>;
  some(predicate: Predicate, options?: SubscribeOptions): Promise<boolean>;
  subscribe(observer?: ObserverUnion, options?: SubscribeOptions): void;
  switchMap(mapper: Mapper): Observable;
  take(amount: number): Observable;
  takeUntil(value: any): Observable;
  toArray(options?: SubscribeOptions): Promise<Array<any>>;
}

declare class Subscriber {
  +active: boolean;
  +signal: AbortSignal;

  addTeardown(teardown: VoidFunction): void;
  complete(): void;
  error(error: any): void;
  next(value: any): void;
}

/*---------- orientation-event ----------*/

// Contributes to:
//   - Window

type DeviceMotionEventAccelerationInit = {
  x: number | null,
  y: number | null,
  z: number | null,
};

type DeviceMotionEventInit = {
  ...EventInit,
  acceleration: DeviceMotionEventAccelerationInit,
  accelerationIncludingGravity: DeviceMotionEventAccelerationInit,
  interval: number,
  rotationRate: DeviceMotionEventRotationRateInit,
};

type DeviceMotionEventRotationRateInit = {
  alpha: number | null,
  beta: number | null,
  gamma: number | null,
};

type DeviceOrientationEventInit = {
  ...EventInit,
  absolute: boolean,
  alpha: number | null,
  beta: number | null,
  gamma: number | null,
};

declare class DeviceMotionEvent extends Event {
  +acceleration: DeviceMotionEventAcceleration | null;
  +accelerationIncludingGravity: DeviceMotionEventAcceleration | null;
  +interval: number;
  +rotationRate: DeviceMotionEventRotationRate | null;

  constructor(type: string, eventInitDict?: DeviceMotionEventInit): void;

  static requestPermission(): Promise<PermissionState>;
}

declare class DeviceMotionEventAcceleration {
  +x: number | null;
  +y: number | null;
  +z: number | null;
}

declare class DeviceMotionEventRotationRate {
  +alpha: number | null;
  +beta: number | null;
  +gamma: number | null;
}

declare class DeviceOrientationEvent extends Event {
  +absolute: boolean;
  +alpha: number | null;
  +beta: number | null;
  +gamma: number | null;

  constructor(type: string, eventInitDict?: DeviceOrientationEventInit): void;

  static requestPermission(absolute?: boolean): Promise<PermissionState>;
}

/*---------- orientation-sensor ----------*/

type RotationMatrixType = Float32Array | Float64Array | DOMMatrix;

type OrientationSensorLocalCoordinateSystem = 'device' | 'screen';

type OrientationSensorOptions = {
  ...SensorOptions,
  referenceFrame: OrientationSensorLocalCoordinateSystem,
};

declare class AbsoluteOrientationSensor extends OrientationSensor {
  constructor(sensorOptions?: OrientationSensorOptions): void;
}

declare class OrientationSensor extends Sensor {
  +quaternion: $ReadOnlyArray<number> | null;

  populateMatrix(targetMatrix: RotationMatrixType): void;
}

declare class RelativeOrientationSensor extends OrientationSensor {
  constructor(sensorOptions?: OrientationSensorOptions): void;
}

/*---------- page-lifecycle ----------*/

// Contributes to:
//   - Document
//   - Client

type ClientLifecycleState = 'active' | 'frozen';

/*---------- paint-timing ----------*/

declare class PerformancePaintTiming
  extends PerformanceEntry
  mixins mixin$PaintTimingMixin {}

declare class mixin$PaintTimingMixin {
  +paintTime: number;
  +presentationTime: number | null;
}

/*---------- payment-handler ----------*/

// Contributes to:
//   - ServiceWorkerRegistration
//   - ServiceWorkerGlobalScope

type PaymentDelegation =
  | 'shippingAddress'
  | 'payerName'
  | 'payerPhone'
  | 'payerEmail';

type AddressInit = {
  addressLine: Array<string>,
  city: string,
  country: string,
  dependentLocality: string,
  organization: string,
  phone: string,
  postalCode: string,
  recipient: string,
  region: string,
  sortingCode: string,
};

type PaymentHandlerResponse = {
  details: Object,
  methodName: string,
  payerEmail: string | null,
  payerName: string | null,
  payerPhone: string | null,
  shippingAddress: AddressInit,
  shippingOption: string | null,
};

type PaymentRequestDetailsUpdate = {
  error: string,
  modifiers: Array<PaymentDetailsModifier>,
  paymentMethodErrors: Object,
  shippingAddressErrors: AddressErrors,
  shippingOptions: Array<PaymentShippingOption>,
  total: PaymentCurrencyAmount,
};

type PaymentRequestEventInit = {
  ...ExtendableEventInit,
  methodData: Array<PaymentMethodData>,
  modifiers: Array<PaymentDetailsModifier>,
  paymentOptions: PaymentOptions,
  paymentRequestId: string,
  paymentRequestOrigin: string,
  shippingOptions: Array<PaymentShippingOption>,
  topOrigin: string,
  total: PaymentCurrencyAmount,
};

declare class CanMakePaymentEvent extends ExtendableEvent {
  constructor(type: string): void;

  respondWith(canMakePaymentResponse: Promise<boolean>): void;
}

declare class PaymentManager {
  userHint: string;

  enableDelegations(delegations: Array<PaymentDelegation>): Promise<void>;
}

declare class PaymentRequestEvent extends ExtendableEvent {
  +methodData: $ReadOnlyArray<PaymentMethodData>;
  +modifiers: $ReadOnlyArray<PaymentDetailsModifier>;
  +paymentOptions: Object | null;
  +paymentRequestId: string;
  +paymentRequestOrigin: string;
  +shippingOptions: $ReadOnlyArray<PaymentShippingOption> | null;
  +topOrigin: string;
  +total: Object;

  constructor(type: string, eventInitDict?: PaymentRequestEventInit): void;

  changePaymentMethod(
    methodName: string,
    methodDetails?: Object | null,
  ): Promise<PaymentRequestDetailsUpdate | null>;
  changeShippingAddress(
    shippingAddress?: AddressInit,
  ): Promise<PaymentRequestDetailsUpdate | null>;
  changeShippingOption(
    shippingOption: string,
  ): Promise<PaymentRequestDetailsUpdate | null>;
  openWindow(url: string): Promise<WindowClient | null>;
  respondWith(handlerResponsePromise: Promise<PaymentHandlerResponse>): void;
}

/*---------- payment-request ----------*/

type PaymentComplete = 'fail' | 'success' | 'unknown';

type PaymentShippingType = 'shipping' | 'delivery' | 'pickup';

type AddressErrors = {
  addressLine: string,
  city: string,
  country: string,
  dependentLocality: string,
  organization: string,
  phone: string,
  postalCode: string,
  recipient: string,
  region: string,
  sortingCode: string,
};

type PayerErrors = {
  email: string,
  name: string,
  phone: string,
};

type PaymentCompleteDetails = {
  data: Object | null,
};

type PaymentCurrencyAmount = {
  currency: string,
  value: string,
};

type PaymentDetailsBase = {
  displayItems: Array<PaymentItem>,
  modifiers: Array<PaymentDetailsModifier>,
  shippingOptions: Array<PaymentShippingOption>,
};

type PaymentDetailsInit = {
  ...PaymentDetailsBase,
  id: string,
  total: PaymentItem,
};

type PaymentDetailsModifier = {
  additionalDisplayItems: Array<PaymentItem>,
  data: Object,
  supportedMethods: string,
  total: PaymentItem,
};

type PaymentDetailsUpdate = {
  ...PaymentDetailsBase,
  error: string,
  payerErrors: PayerErrors,
  paymentMethodErrors: Object,
  shippingAddressErrors: AddressErrors,
  total: PaymentItem,
};

type PaymentItem = {
  amount: PaymentCurrencyAmount,
  label: string,
  pending: boolean,
};

type PaymentMethodChangeEventInit = {
  ...PaymentRequestUpdateEventInit,
  methodDetails: Object | null,
  methodName: string,
};

type PaymentMethodData = {
  data: Object,
  supportedMethods: string,
};

type PaymentOptions = {
  requestBillingAddress: boolean,
  requestPayerEmail: boolean,
  requestPayerName: boolean,
  requestPayerPhone: boolean,
  requestShipping: boolean,
  shippingType: PaymentShippingType,
};

type PaymentRequestUpdateEventInit = {
  ...EventInit,
};

type PaymentShippingOption = {
  amount: PaymentCurrencyAmount,
  id: string,
  label: string,
  selected: boolean,
};

type PaymentValidationErrors = {
  error: string,
  payer: PayerErrors,
  paymentMethod: Object,
  shippingAddress: AddressErrors,
};

declare class PaymentMethodChangeEvent extends PaymentRequestUpdateEvent {
  +methodDetails: Object | null;
  +methodName: string;

  constructor(type: string, eventInitDict?: PaymentMethodChangeEventInit): void;
}

declare class PaymentRequest extends EventTarget {
  +id: string;
  onpaymentmethodchange: EventHandler;
  onshippingaddresschange: EventHandler;
  onshippingoptionchange: EventHandler;
  +shippingAddress: ContactAddress | null;
  +shippingOption: string | null;
  +shippingType: PaymentShippingType | null;

  constructor(
    methodData: Array<PaymentMethodData>,
    details: PaymentDetailsInit,
    options?: PaymentOptions,
  ): void;

  static securePaymentConfirmationAvailability(): Promise<SecurePaymentConfirmationAvailability>;
  abort(): Promise<void>;
  canMakePayment(): Promise<boolean>;
  show(
    detailsPromise?: Promise<PaymentDetailsUpdate>,
  ): Promise<PaymentResponse>;
}

declare class PaymentRequestUpdateEvent extends Event {
  constructor(
    type: string,
    eventInitDict?: PaymentRequestUpdateEventInit,
  ): void;

  updateWith(detailsPromise: Promise<PaymentDetailsUpdate>): void;
}

declare class PaymentResponse extends EventTarget {
  +details: Object;
  +methodName: string;
  onpayerdetailchange: EventHandler;
  +payerEmail: string | null;
  +payerName: string | null;
  +payerPhone: string | null;
  +requestId: string;
  +shippingAddress: ContactAddress | null;
  +shippingOption: string | null;

  complete(
    result?: PaymentComplete,
    details?: PaymentCompleteDetails,
  ): Promise<void>;
  retry(errorFields?: PaymentValidationErrors): Promise<void>;
  toJSON(): Object;
}

/*---------- performance-measure-memory ----------*/

// Contributes to:
//   - Performance

type MemoryAttribution = {
  container: MemoryAttributionContainer,
  scope: string,
  url: string,
};

type MemoryAttributionContainer = {
  id: string,
  src: string,
};

type MemoryBreakdownEntry = {
  attribution: Array<MemoryAttribution>,
  bytes: number,
  types: Array<string>,
};

type MemoryMeasurement = {
  breakdown: Array<MemoryBreakdownEntry>,
  bytes: number,
};

/*---------- performance-timeline ----------*/

// Contributes to:
//   - Performance

type PerformanceEntryList = Array<PerformanceEntry>;

type PerformanceObserverCallbackOptions = {
  droppedEntriesCount: number,
};

type PerformanceObserverInit = {
  buffered: boolean,
  durationThreshold: number,
  entryTypes: Array<string>,
  type: string,
};

type PerformanceObserverCallback = (
  entries: PerformanceObserverEntryList,
  observer: PerformanceObserver,
  options?: PerformanceObserverCallbackOptions,
) => void;

declare class PerformanceEntry {
  +duration: number;
  +entryType: string;
  +id: number;
  +name: string;
  +navigationId: number;
  +startTime: number;

  toJSON(): Object;
}

declare class PerformanceObserver {
  +supportedEntryTypes: $ReadOnlyArray<string>;

  constructor(callback: PerformanceObserverCallback): void;

  disconnect(): void;
  observe(options?: PerformanceObserverInit): void;
  takeRecords(): PerformanceEntryList;
}

declare class PerformanceObserverEntryList {
  getEntries(): PerformanceEntryList;
  getEntriesByName(name: string, type?: string): PerformanceEntryList;
  getEntriesByType(type: string): PerformanceEntryList;
}

/*---------- periodic-background-sync ----------*/

// Contributes to:
//   - ServiceWorkerGlobalScope
//   - ServiceWorkerRegistration

type BackgroundSyncOptions = {
  minInterval: number,
};

type PeriodicSyncEventInit = {
  ...ExtendableEventInit,
  tag: string,
};

declare class PeriodicSyncEvent extends ExtendableEvent {
  +tag: string;

  constructor(type: string, init: PeriodicSyncEventInit): void;
}

declare class PeriodicSyncManager {
  getTags(): Promise<Array<string>>;
  register(tag: string, options?: BackgroundSyncOptions): Promise<void>;
  unregister(tag: string): Promise<void>;
}

/*---------- permissions-policy ----------*/

// Contributes to:
//   - Document
//   - HTMLIFrameElement

declare class PermissionsPolicy {
  allowedFeatures(): Array<string>;
  allowsFeature(feature: string, origin?: string): boolean;
  features(): Array<string>;
  getAllowlistForFeature(feature: string): Array<string>;
}

declare class PermissionsPolicyViolationReportBody extends ReportBody {
  +allowAttribute: string | null;
  +columnNumber: number | null;
  +disposition: string;
  +featureId: string;
  +lineNumber: number | null;
  +sourceFile: string | null;
  +srcAttribute: string | null;

  toJSON(): Object;
}

/*---------- permissions-request ----------*/

// Contributes to:
//   - Permissions

/*---------- permissions-revoke ----------*/

// Contributes to:
//   - Permissions

/*---------- permissions ----------*/

// Contributes to:
//   - Navigator
//   - WorkerNavigator

type PermissionState = 'granted' | 'denied' | 'prompt';

type PermissionDescriptor = {
  name: string,
};

type PermissionSetParameters = {
  descriptor: Object,
  state: PermissionState,
};

declare class Permissions {
  query(permissionDesc: Object): Promise<PermissionStatus>;
  request(permissionDesc: Object): Promise<PermissionStatus>;
  revoke(permissionDesc: Object): Promise<PermissionStatus>;
}

declare class PermissionStatus extends EventTarget {
  +name: string;
  onchange: EventHandler;
  +state: PermissionState;
}

/*---------- picture-in-picture ----------*/

// Contributes to:
//   - HTMLVideoElement
//   - Document
//   - DocumentOrShadowRoot

type PictureInPictureEventInit = {
  ...EventInit,
  pictureInPictureWindow: PictureInPictureWindow,
};

declare class PictureInPictureEvent extends Event {
  +pictureInPictureWindow: PictureInPictureWindow;

  constructor(type: string, eventInitDict: PictureInPictureEventInit): void;
}

declare class PictureInPictureWindow extends EventTarget {
  +height: number;
  onresize: EventHandler;
  +width: number;
}

/*---------- pointerevents ----------*/

// Contributes to:
//   - Element
//   - GlobalEventHandlers
//   - Navigator

type PointerEventInit = {
  ...MouseEventInit,
  altitudeAngle: number,
  azimuthAngle: number,
  coalescedEvents: Array<PointerEvent>,
  height: number,
  isPrimary: boolean,
  persistentDeviceId: number,
  pointerId: number,
  pointerType: string,
  predictedEvents: Array<PointerEvent>,
  pressure: number,
  tangentialPressure: number,
  tiltX: number,
  tiltY: number,
  twist: number,
  width: number,
};

declare class PointerEvent extends MouseEvent {
  +altitudeAngle: number;
  +azimuthAngle: number;
  +height: number;
  +isPrimary: boolean;
  +persistentDeviceId: number;
  +pointerId: number;
  +pointerType: string;
  +pressure: number;
  +tangentialPressure: number;
  +tiltX: number;
  +tiltY: number;
  +twist: number;
  +width: number;

  constructor(type: string, eventInitDict?: PointerEventInit): void;

  getCoalescedEvents(): Array<PointerEvent>;
  getPredictedEvents(): Array<PointerEvent>;
}

/*---------- pointerlock ----------*/

// Contributes to:
//   - Element
//   - Document
//   - DocumentOrShadowRoot
//   - MouseEvent
//   - MouseEventInit

type PointerLockOptions = {
  unadjustedMovement: boolean,
};

/*---------- prefer-current-tab ----------*/

// Contributes to:
//   - MediaStreamConstraints

/*---------- prerendering-revamped ----------*/

// Contributes to:
//   - Document
//   - PerformanceNavigationTiming

/*---------- presentation-api ----------*/

// Contributes to:
//   - Navigator
//   - Presentation

type PresentationConnectionCloseReason = 'error' | 'closed' | 'wentaway';

type PresentationConnectionState =
  | 'connecting'
  | 'connected'
  | 'closed'
  | 'terminated';

type PresentationConnectionAvailableEventInit = {
  ...EventInit,
  connection: PresentationConnection,
};

type PresentationConnectionCloseEventInit = {
  ...EventInit,
  message: string,
  reason: PresentationConnectionCloseReason,
};

declare class Presentation {
  defaultRequest: PresentationRequest | null;
  +receiver: PresentationReceiver | null;
}

declare class PresentationAvailability extends EventTarget {
  onchange: EventHandler;
  +value: boolean;
}

declare class PresentationConnection extends EventTarget {
  binaryType: BinaryType;
  +id: string;
  onclose: EventHandler;
  onconnect: EventHandler;
  onmessage: EventHandler;
  onterminate: EventHandler;
  +state: PresentationConnectionState;
  +url: string;

  close(): void;
  send(message: string): void;
  send(data: Blob): void;
  send(data: ArrayBuffer): void;
  send(data: ArrayBufferView): void;
  terminate(): void;
}

declare class PresentationConnectionAvailableEvent extends Event {
  +connection: PresentationConnection;

  constructor(
    type: string,
    eventInitDict: PresentationConnectionAvailableEventInit,
  ): void;
}

declare class PresentationConnectionCloseEvent extends Event {
  +message: string;
  +reason: PresentationConnectionCloseReason;

  constructor(
    type: string,
    eventInitDict: PresentationConnectionCloseEventInit,
  ): void;
}

declare class PresentationConnectionList extends EventTarget {
  +connections: $ReadOnlyArray<PresentationConnection>;
  onconnectionavailable: EventHandler;
}

declare class PresentationReceiver {
  +connectionList: Promise<PresentationConnectionList>;
}

declare class PresentationRequest extends EventTarget {
  onconnectionavailable: EventHandler;

  constructor(url: string): void;
  constructor(urls: Array<string>): void;

  getAvailability(): Promise<PresentationAvailability>;
  reconnect(presentationId: string): Promise<PresentationConnection>;
  start(): Promise<PresentationConnection>;
}

/*---------- private-click-measurement ----------*/

// Contributes to:
//   - HTMLAnchorElement

/*---------- private-network-access ----------*/

// Contributes to:
//   - RequestInit
//   - Request

type IPAddressSpace = 'public' | 'private' | 'local';

type PrivateNetworkAccessPermissionDescriptor = {
  ...PermissionDescriptor,
  id: string,
};

/*---------- proximity ----------*/

declare class ProximitySensor extends Sensor {
  +distance: number | null;
  +max: number | null;
  +near: boolean | null;

  constructor(sensorOptions?: SensorOptions): void;
}

/*---------- push-api ----------*/

// Contributes to:
//   - ServiceWorkerRegistration
//   - ServiceWorkerGlobalScope

type PushMessageDataInit = BufferSource | string;

type PushEncryptionKeyName = 'p256dh' | 'auth';

type PushEventInit = {
  ...ExtendableEventInit,
  data: PushMessageDataInit,
};

type PushPermissionDescriptor = {
  ...PermissionDescriptor,
  userVisibleOnly: boolean,
};

type PushSubscriptionChangeEventInit = {
  ...ExtendableEventInit,
  newSubscription: PushSubscription,
  oldSubscription: PushSubscription,
};

type PushSubscriptionJSON = {
  endpoint: string,
  expirationTime: EpochTimeStamp | null,
  keys: {[string]: string},
};

type PushSubscriptionOptionsInit = {
  applicationServerKey: BufferSource | string | null,
  userVisibleOnly: boolean,
};

declare class PushEvent extends ExtendableEvent {
  +data: PushMessageData | null;

  constructor(type: string, eventInitDict?: PushEventInit): void;
}

declare class PushManager {
  +supportedContentEncodings: $ReadOnlyArray<string>;

  getSubscription(): Promise<PushSubscription | null>;
  permissionState(
    options?: PushSubscriptionOptionsInit,
  ): Promise<PermissionState>;
  subscribe(options?: PushSubscriptionOptionsInit): Promise<PushSubscription>;
}

declare class PushMessageData {
  arrayBuffer(): ArrayBuffer;
  blob(): Blob;
  bytes(): Uint8Array;
  json(): any;
  text(): string;
}

declare class PushSubscription {
  +endpoint: string;
  +expirationTime: EpochTimeStamp | null;
  +options: PushSubscriptionOptions;

  getKey(name: PushEncryptionKeyName): ArrayBuffer | null;
  toJSON(): PushSubscriptionJSON;
  unsubscribe(): Promise<boolean>;
}

declare class PushSubscriptionChangeEvent extends ExtendableEvent {
  +newSubscription: PushSubscription | null;
  +oldSubscription: PushSubscription | null;

  constructor(
    type: string,
    eventInitDict?: PushSubscriptionChangeEventInit,
  ): void;
}

declare class PushSubscriptionOptions {
  +applicationServerKey: ArrayBuffer | null;
  +userVisibleOnly: boolean;
}

/*---------- raw-camera-access ----------*/

// Contributes to:
//   - XRView
//   - XRWebGLBinding

declare class XRCamera {
  +height: number;
  +width: number;
}

/* partial */ declare class XRWebGLBinding {
  getCameraImage(camera: XRCamera): WebGLTexture | null;
}

/*---------- real-world-meshing ----------*/

// Contributes to:
//   - XRFrame

declare class XRMesh {
  +indices: Uint32Array;
  +lastChangedTime: number;
  +meshSpace: XRSpace;
  +semanticLabel: string | null;
  +vertices: $ReadOnlyArray<Float32Array>;
}

type XRMeshSet = Set<XRMesh>;

/*---------- referrer-policy ----------*/

type ReferrerPolicy =
  | ''
  | 'no-referrer'
  | 'no-referrer-when-downgrade'
  | 'same-origin'
  | 'origin'
  | 'strict-origin'
  | 'origin-when-cross-origin'
  | 'strict-origin-when-cross-origin'
  | 'unsafe-url';

/*---------- remote-playback ----------*/

// Contributes to:
//   - HTMLMediaElement

type RemotePlaybackState = 'connecting' | 'connected' | 'disconnected';

type RemotePlaybackAvailabilityCallback = (available: boolean) => void;

declare class RemotePlayback extends EventTarget {
  onconnect: EventHandler;
  onconnecting: EventHandler;
  ondisconnect: EventHandler;
  +state: RemotePlaybackState;

  cancelWatchAvailability(id?: number): Promise<void>;
  prompt(): Promise<void>;
  watchAvailability(
    callback: RemotePlaybackAvailabilityCallback,
  ): Promise<number>;
}

/*---------- reporting ----------*/

type ReportList = Array<Report>;

type GenerateTestReportParameters = {
  group: string,
  message: string,
};

type ReportingObserverOptions = {
  buffered: boolean,
  types: Array<string>,
};

type ReportingObserverCallback = (
  reports: Array<Report>,
  observer: ReportingObserver,
) => void;

declare class Report {
  +body: ReportBody | null;
  +type: string;
  +url: string;

  toJSON(): Object;
}

declare class ReportBody {
  toJSON(): Object;
}

declare class ReportingObserver {
  constructor(
    callback: ReportingObserverCallback,
    options?: ReportingObserverOptions,
  ): void;

  disconnect(): void;
  observe(): void;
  takeRecords(): ReportList;
}

/*---------- requestidlecallback ----------*/

// Contributes to:
//   - Window

type IdleRequestOptions = {
  timeout: number,
};

type IdleRequestCallback = (deadline: IdleDeadline) => void;

declare class IdleDeadline {
  +didTimeout: boolean;

  timeRemaining(): number;
}

/*---------- requestStorageAccessFor ----------*/

// Contributes to:
//   - Document

type TopLevelStorageAccessPermissionDescriptor = {
  ...PermissionDescriptor,
  requestedOrigin: string,
};

/*---------- resize-observer ----------*/

type ResizeObserverBoxOptions =
  | 'border-box'
  | 'content-box'
  | 'device-pixel-content-box';

type ResizeObserverOptions = {
  box: ResizeObserverBoxOptions,
};

type ResizeObserverCallback = (
  entries: Array<ResizeObserverEntry>,
  observer: ResizeObserver,
) => void;

declare class ResizeObserver {
  constructor(callback: ResizeObserverCallback): void;

  disconnect(): void;
  observe(target: Element, options?: ResizeObserverOptions): void;
  unobserve(target: Element): void;
}

declare class ResizeObserverEntry {
  +borderBoxSize: $ReadOnlyArray<ResizeObserverSize>;
  +contentBoxSize: $ReadOnlyArray<ResizeObserverSize>;
  +contentRect: DOMRectReadOnly;
  +devicePixelContentBoxSize: $ReadOnlyArray<ResizeObserverSize>;
  +target: Element;
}

declare class ResizeObserverSize {
  +blockSize: number;
  +inlineSize: number;
}

/*---------- resource-timing ----------*/

// Contributes to:
//   - Performance

type RenderBlockingStatusType = 'blocking' | 'non-blocking';

declare class PerformanceResourceTiming extends PerformanceEntry {
  +connectEnd: number;
  +connectStart: number;
  +contentType: string;
  +decodedBodySize: number;
  +deliveryType: string;
  +domainLookupEnd: number;
  +domainLookupStart: number;
  +encodedBodySize: number;
  +fetchStart: number;
  +finalResponseHeadersStart: number;
  +firstInterimResponseStart: number;
  +initiatorType: string;
  +nextHopProtocol: string;
  +redirectEnd: number;
  +redirectStart: number;
  +renderBlockingStatus: RenderBlockingStatusType;
  +requestStart: number;
  +responseEnd: number;
  +responseStart: number;
  +responseStatus: number;
  +secureConnectionStart: number;
  +serverTiming: $ReadOnlyArray<PerformanceServerTiming>;
  +transferSize: number;
  +workerStart: number;

  toJSON(): Object;
}

/*---------- saa-non-cookie-storage ----------*/

// Contributes to:
//   - Document

type SameSiteCookiesType = 'all' | 'none';

type SharedWorkerOptions = {
  ...WorkerOptions,
  sameSiteCookies: SameSiteCookiesType,
};

type StorageAccessTypes = {
  all: boolean,
  BroadcastChannel: boolean,
  caches: boolean,
  cookies: boolean,
  createObjectURL: boolean,
  estimate: boolean,
  getDirectory: boolean,
  indexedDB: boolean,
  localStorage: boolean,
  locks: boolean,
  revokeObjectURL: boolean,
  sessionStorage: boolean,
  SharedWorker: boolean,
};

declare class StorageAccessHandle {
  +caches: CacheStorage;
  +indexedDB: IDBFactory;
  +localStorage: Storage;
  +locks: LockManager;
  +sessionStorage: Storage;

  BroadcastChannel(name: string): BroadcastChannel;
  createObjectURL(obj: Blob | MediaSource): string;
  estimate(): Promise<StorageEstimate>;
  getDirectory(): Promise<FileSystemDirectoryHandle>;
  revokeObjectURL(url: string): void;
  SharedWorker(
    scriptURL: string,
    options?: string | SharedWorkerOptions,
  ): SharedWorker;
}

/*---------- sanitizer-api ----------*/

type SanitizerAttribute = string | SanitizerAttributeNamespace;

type SanitizerElement = string | SanitizerElementNamespace;

type SanitizerElementWithAttributes =
  | string
  | SanitizerElementNamespaceWithAttributes;

type SanitizerPresets = 'default';

type SanitizerAttributeNamespace = {
  name: string,
  namespace: string | null,
};

type SanitizerConfig = {
  attributes: Array<SanitizerAttribute>,
  comments: boolean,
  dataAttributes: boolean,
  elements: Array<SanitizerElementWithAttributes>,
  removeAttributes: Array<SanitizerAttribute>,
  removeElements: Array<SanitizerElement>,
  replaceWithChildrenElements: Array<SanitizerElement>,
};

type SanitizerElementNamespace = {
  name: string,
  namespace: string | null,
};

type SanitizerElementNamespaceWithAttributes = {
  ...SanitizerElementNamespace,
  attributes: Array<SanitizerAttribute>,
  removeAttributes: Array<SanitizerAttribute>,
};

type SetHTMLOptions = {
  sanitizer: Sanitizer | SanitizerConfig | SanitizerPresets,
};

type SetHTMLUnsafeOptions = {
  sanitizer: Sanitizer | SanitizerConfig | SanitizerPresets,
};

declare class Sanitizer {
  constructor(configuration?: SanitizerConfig | SanitizerPresets): void;

  allowAttribute(attribute: SanitizerAttribute): void;
  allowElement(element: SanitizerElementWithAttributes): void;
  get(): SanitizerConfig;
  removeAttribute(attribute: SanitizerAttribute): void;
  removeElement(element: SanitizerElement): void;
  removeUnsafe(): void;
  replaceElementWithChildren(element: SanitizerElement): void;
  setComments(allow: boolean): void;
  setDataAttributes(allow: boolean): void;
}

/*---------- savedata ----------*/

declare class mixin$NetworkInformationSaveData {
  +saveData: boolean;
}

/*---------- scheduling-apis ----------*/

// Contributes to:
//   - WindowOrWorkerGlobalScope

type TaskPriority = 'user-blocking' | 'user-visible' | 'background';

type SchedulerPostTaskOptions = {
  delay: number,
  priority: TaskPriority,
  signal: AbortSignal,
};

type TaskControllerInit = {
  priority: TaskPriority,
};

type TaskPriorityChangeEventInit = {
  ...EventInit,
  previousPriority: TaskPriority,
};

type TaskSignalAnyInit = {
  priority: TaskPriority | TaskSignal,
};

type SchedulerPostTaskCallback = () => any;

declare class Scheduler {
  postTask(
    callback: SchedulerPostTaskCallback,
    options?: SchedulerPostTaskOptions,
  ): Promise<any>;
  yield(): Promise<void>;
}

declare class TaskController extends AbortController {
  constructor(init?: TaskControllerInit): void;

  setPriority(priority: TaskPriority): void;
}

declare class TaskPriorityChangeEvent extends Event {
  +previousPriority: TaskPriority;

  constructor(
    type: string,
    priorityChangeEventInitDict: TaskPriorityChangeEventInit,
  ): void;
}

declare class TaskSignal extends AbortSignal {
  onprioritychange: EventHandler;
  +priority: TaskPriority;

  static any(signals: Array<AbortSignal>, init?: TaskSignalAnyInit): TaskSignal;
}

/*---------- screen-capture ----------*/

// Contributes to:
//   - MediaDevices
//   - MediaTrackSupportedConstraints
//   - MediaTrackConstraintSet
//   - MediaTrackSettings
//   - MediaTrackCapabilities

type CaptureStartFocusBehavior =
  | 'focus-capturing-application'
  | 'focus-captured-surface'
  | 'no-focus-change';

type CursorCaptureConstraint = 'never' | 'always' | 'motion';

type DisplayCaptureSurfaceType = 'monitor' | 'window' | 'browser';

type MonitorTypeSurfacesEnum = 'include' | 'exclude';

type SelfCapturePreferenceEnum = 'include' | 'exclude';

type SurfaceSwitchingPreferenceEnum = 'include' | 'exclude';

type SystemAudioPreferenceEnum = 'include' | 'exclude';

type DisplayMediaStreamOptions = {
  audio: boolean | MediaTrackConstraints,
  controller: CaptureController,
  monitorTypeSurfaces: MonitorTypeSurfacesEnum,
  selfBrowserSurface: SelfCapturePreferenceEnum,
  surfaceSwitching: SurfaceSwitchingPreferenceEnum,
  systemAudio: SystemAudioPreferenceEnum,
  video: boolean | MediaTrackConstraints,
};

declare class CaptureController extends EventTarget {
  oncapturedmousechange: EventHandler;
  onzoomlevelchange: EventHandler;
  +zoomLevel: number | null;

  constructor(): void;
  constructor(): void;

  decreaseZoomLevel(): Promise<void>;
  forwardWheel(element: HTMLElement | null): Promise<void>;
  getSupportedZoomLevels(): Array<number>;
  increaseZoomLevel(): Promise<void>;
  resetZoomLevel(): Promise<void>;
  setFocusBehavior(focusBehavior: CaptureStartFocusBehavior): void;
}

/*---------- screen-orientation ----------*/

// Contributes to:
//   - Screen

type OrientationLockType =
  | 'any'
  | 'natural'
  | 'landscape'
  | 'portrait'
  | 'portrait-primary'
  | 'portrait-secondary'
  | 'landscape-primary'
  | 'landscape-secondary';

type OrientationType =
  | 'portrait-primary'
  | 'portrait-secondary'
  | 'landscape-primary'
  | 'landscape-secondary';

declare class ScreenOrientation extends EventTarget {
  +angle: number;
  onchange: EventHandler;
  +type: OrientationType;

  lock(orientation: OrientationLockType): Promise<void>;
  unlock(): void;
}

/*---------- screen-wake-lock ----------*/

// Contributes to:
//   - Navigator

type WakeLockType = 'screen';

declare class WakeLock {
  request(type?: WakeLockType): Promise<WakeLockSentinel>;
}

declare class WakeLockSentinel extends EventTarget {
  onrelease: EventHandler;
  +released: boolean;
  +type: WakeLockType;

  release(): Promise<void>;
}

/*---------- scroll-animations ----------*/

type ScrollAxis = 'block' | 'inline' | 'x' | 'y';

type ScrollTimelineOptions = {
  axis: ScrollAxis,
  source: Element | null,
};

type ViewTimelineOptions = {
  axis: ScrollAxis,
  inset: string | Array<CSSNumericValue | CSSKeywordValue>,
  subject: Element,
};

declare class ScrollTimeline extends AnimationTimeline {
  +axis: ScrollAxis;
  +source: Element | null;

  constructor(options?: ScrollTimelineOptions): void;
}

declare class ViewTimeline extends ScrollTimeline {
  +endOffset: CSSNumericValue;
  +startOffset: CSSNumericValue;
  +subject: Element;

  constructor(options?: ViewTimelineOptions): void;
}

/*---------- scroll-to-text-fragment ----------*/

// Contributes to:
//   - Document

declare class FragmentDirective {}

/*---------- secure-payment-confirmation ----------*/

// Contributes to:
//   - PaymentRequest
//   - AuthenticationExtensionsClientInputs

type SecurePaymentConfirmationAvailability =
  | 'available'
  | 'unavailable-unknown-reason'
  | 'unavailable-feature-not-enabled'
  | 'unavailable-no-permission-policy'
  | 'unavailable-no-user-verifying-platform-authenticator';

type AuthenticationExtensionsPaymentInputs = {
  instrument: PaymentCredentialInstrument,
  isPayment: boolean,
  payeeName: string,
  payeeOrigin: string,
  rpId: string,
  topOrigin: string,
  total: PaymentCurrencyAmount,
};

type CollectedClientAdditionalPaymentData = {
  instrument: PaymentCredentialInstrument,
  payeeName: string,
  payeeOrigin: string,
  rpId: string,
  topOrigin: string,
  total: PaymentCurrencyAmount,
};

type CollectedClientPaymentData = {
  ...CollectedClientData,
  payment: CollectedClientAdditionalPaymentData,
};

type PaymentCredentialInstrument = {
  displayName: string,
  icon: string,
  iconMustBeShown: boolean,
};

type SecurePaymentConfirmationRequest = {
  challenge: BufferSource,
  credentialIds: Array<BufferSource>,
  extensions: AuthenticationExtensionsClientInputs,
  instrument: PaymentCredentialInstrument,
  locale: Array<string>,
  payeeName: string,
  payeeOrigin: string,
  rpId: string,
  showOptOut: boolean,
  timeout: number,
};

/*---------- selection-api ----------*/

// Contributes to:
//   - Document
//   - Window
//   - GlobalEventHandlers

type GetComposedRangesOptions = {
  shadowRoots: Array<ShadowRoot>,
};

declare class Selection {
  +anchorNode: Node | null;
  +anchorOffset: number;
  +direction: string;
  +focusNode: Node | null;
  +focusOffset: number;
  +isCollapsed: boolean;
  +rangeCount: number;
  +type: string;

  addRange(range: Range): void;
  collapse(node: Node | null, offset?: number): void;
  collapseToEnd(): void;
  collapseToStart(): void;
  containsNode(node: Node, allowPartialContainment?: boolean): boolean;
  deleteFromDocument(): void;
  empty(): void;
  extend(node: Node, offset?: number): void;
  getComposedRanges(options?: GetComposedRangesOptions): Array<StaticRange>;
  getRangeAt(index: number): Range;
  modify(alter?: string, direction?: string, granularity?: string): void;
  removeAllRanges(): void;
  removeRange(range: Range): void;
  selectAllChildren(node: Node): void;
  setBaseAndExtent(
    anchorNode: Node,
    anchorOffset: number,
    focusNode: Node,
    focusOffset: number,
  ): void;
  setPosition(node: Node | null, offset?: number): void;
  toString(): string;
}

/*---------- serial ----------*/

// Contributes to:
//   - Navigator
//   - WorkerNavigator

type FlowControlType = 'none' | 'hardware';

type ParityType = 'none' | 'even' | 'odd';

type SerialInputSignals = {
  clearToSend: boolean,
  dataCarrierDetect: boolean,
  dataSetReady: boolean,
  ringIndicator: boolean,
};

type SerialOptions = {
  baudRate: number,
  bufferSize: number,
  dataBits: number,
  flowControl: FlowControlType,
  parity: ParityType,
  stopBits: number,
};

type SerialOutputSignals = {
  break: boolean,
  dataTerminalReady: boolean,
  requestToSend: boolean,
};

type SerialPortFilter = {
  bluetoothServiceClassId: BluetoothServiceUUID,
  usbProductId: number,
  usbVendorId: number,
};

type SerialPortInfo = {
  bluetoothServiceClassId: BluetoothServiceUUID,
  usbProductId: number,
  usbVendorId: number,
};

type SerialPortRequestOptions = {
  allowedBluetoothServiceClassIds: Array<BluetoothServiceUUID>,
  filters: Array<SerialPortFilter>,
};

declare class Serial extends EventTarget {
  onconnect: EventHandler;
  ondisconnect: EventHandler;

  getPorts(): Promise<Array<SerialPort>>;
  requestPort(options?: SerialPortRequestOptions): Promise<SerialPort>;
}

declare class SerialPort extends EventTarget {
  +connected: boolean;
  onconnect: EventHandler;
  ondisconnect: EventHandler;
  +readable: ReadableStream;
  +writable: WritableStream;

  close(): Promise<void>;
  forget(): Promise<void>;
  getInfo(): SerialPortInfo;
  getSignals(): Promise<SerialInputSignals>;
  open(options: SerialOptions): Promise<void>;
  setSignals(signals?: SerialOutputSignals): Promise<void>;
}

/*---------- server-timing ----------*/

// Contributes to:
//   - PerformanceResourceTiming

declare class PerformanceServerTiming {
  +description: string;
  +duration: number;
  +name: string;

  toJSON(): Object;
}

/*---------- service-workers ----------*/

// Contributes to:
//   - Navigator
//   - WorkerNavigator
//   - WindowOrWorkerGlobalScope

type RouterSource = RouterSourceDict | RouterSourceEnum;

type ClientType = 'window' | 'worker' | 'sharedworker' | 'all';

type FrameType = 'auxiliary' | 'top-level' | 'nested' | 'none';

type RouterSourceEnum =
  | 'cache'
  | 'fetch-event'
  | 'network'
  | 'race-network-and-fetch-handler';

type RunningStatus = 'running' | 'not-running';

type ServiceWorkerState =
  | 'parsed'
  | 'installing'
  | 'installed'
  | 'activating'
  | 'activated'
  | 'redundant';

type ServiceWorkerUpdateViaCache = 'imports' | 'all' | 'none';

type CacheQueryOptions = {
  ignoreMethod: boolean,
  ignoreSearch: boolean,
  ignoreVary: boolean,
};

type ClientQueryOptions = {
  includeUncontrolled: boolean,
  type: ClientType,
};

type ExtendableEventInit = {
  ...EventInit,
};

type ExtendableMessageEventInit = {
  ...ExtendableEventInit,
  data: any,
  lastEventId: string,
  origin: string,
  ports: Array<MessagePort>,
  source: Client | ServiceWorker | MessagePort | null,
};

type FetchEventInit = {
  ...ExtendableEventInit,
  clientId: string,
  handled: Promise<void>,
  preloadResponse: Promise<any>,
  replacesClientId: string,
  request: Request,
  resultingClientId: string,
};

type MultiCacheQueryOptions = {
  ...CacheQueryOptions,
  cacheName: string,
};

type NavigationPreloadState = {
  enabled: boolean,
  headerValue: string,
};

type RegistrationOptions = {
  scope: string,
  type: WorkerType,
  updateViaCache: ServiceWorkerUpdateViaCache,
};

type RouterCondition = {
  not: RouterCondition,
  or: Array<RouterCondition>,
  requestDestination: RequestDestination,
  requestMethod: string,
  requestMode: RequestMode,
  runningStatus: RunningStatus,
  urlPattern: URLPatternCompatible,
};

type RouterRule = {
  condition: RouterCondition,
  source: RouterSource,
};

type RouterSourceDict = {
  cacheName: string,
};

declare class Cache {
  add(request: RequestInfo): Promise<void>;
  addAll(requests: Array<RequestInfo>): Promise<void>;
  delete(request: RequestInfo, options?: CacheQueryOptions): Promise<boolean>;
  keys(
    request?: RequestInfo,
    options?: CacheQueryOptions,
  ): Promise<$ReadOnlyArray<Request>>;
  match(
    request: RequestInfo,
    options?: CacheQueryOptions,
  ): Promise<Response | void>;
  matchAll(
    request?: RequestInfo,
    options?: CacheQueryOptions,
  ): Promise<$ReadOnlyArray<Response>>;
  put(request: RequestInfo, response: Response): Promise<void>;
}

declare class CacheStorage {
  delete(cacheName: string): Promise<boolean>;
  has(cacheName: string): Promise<boolean>;
  keys(): Promise<Array<string>>;
  match(
    request: RequestInfo,
    options?: MultiCacheQueryOptions,
  ): Promise<Response | void>;
  open(cacheName: string): Promise<Cache>;
}

declare class Client {
  +frameType: FrameType;
  +id: string;
  +lifecycleState: ClientLifecycleState;
  +type: ClientType;
  +url: string;

  postMessage(message: any, transfer: Array<Object>): void;
  postMessage(message: any, options?: StructuredSerializeOptions): void;
}

declare class Clients {
  claim(): Promise<void>;
  get(id: string): Promise<Client | void>;
  matchAll(options?: ClientQueryOptions): Promise<$ReadOnlyArray<Client>>;
  openWindow(url: string): Promise<WindowClient | null>;
}

declare class ExtendableEvent extends Event {
  constructor(type: string, eventInitDict?: ExtendableEventInit): void;

  waitUntil(f: Promise<any>): void;
}

declare class ExtendableMessageEvent extends ExtendableEvent {
  +data: any;
  +lastEventId: string;
  +origin: string;
  +ports: $ReadOnlyArray<MessagePort>;
  +source: Client | ServiceWorker | MessagePort | null;

  constructor(type: string, eventInitDict?: ExtendableMessageEventInit): void;
}

declare class FetchEvent extends ExtendableEvent {
  +clientId: string;
  +handled: Promise<void>;
  +preloadResponse: Promise<any>;
  +replacesClientId: string;
  +request: Request;
  +resultingClientId: string;

  constructor(type: string, eventInitDict: FetchEventInit): void;

  respondWith(r: Promise<Response>): void;
}

declare class InstallEvent extends ExtendableEvent {
  constructor(type: string, eventInitDict?: ExtendableEventInit): void;

  addRoutes(rules: RouterRule | Array<RouterRule>): Promise<void>;
}

declare class NavigationPreloadManager {
  disable(): Promise<void>;
  enable(): Promise<void>;
  getState(): Promise<NavigationPreloadState>;
  setHeaderValue(value: string): Promise<void>;
}

declare class ServiceWorker extends EventTarget mixins mixin$AbstractWorker {
  onstatechange: EventHandler;
  +scriptURL: string;
  +state: ServiceWorkerState;

  postMessage(message: any, transfer: Array<Object>): void;
  postMessage(message: any, options?: StructuredSerializeOptions): void;
}

declare class ServiceWorkerContainer extends EventTarget {
  +controller: ServiceWorker | null;
  oncontrollerchange: EventHandler;
  onmessage: EventHandler;
  onmessageerror: EventHandler;
  +ready: Promise<ServiceWorkerRegistration>;

  getRegistration(
    clientURL?: string,
  ): Promise<ServiceWorkerRegistration | void>;
  getRegistrations(): Promise<$ReadOnlyArray<ServiceWorkerRegistration>>;
  register(
    scriptURL: TrustedScriptURL | string,
    options?: RegistrationOptions,
  ): Promise<ServiceWorkerRegistration>;
  startMessages(): void;
}

declare class ServiceWorkerGlobalScope extends WorkerGlobalScope {
  +clients: Clients;
  +cookieStore: CookieStore;
  onactivate: EventHandler;
  onbackgroundfetchabort: EventHandler;
  onbackgroundfetchclick: EventHandler;
  onbackgroundfetchfail: EventHandler;
  onbackgroundfetchsuccess: EventHandler;
  oncanmakepayment: EventHandler;
  oncontentdelete: EventHandler;
  oncookiechange: EventHandler;
  onfetch: EventHandler;
  oninstall: EventHandler;
  onmessage: EventHandler;
  onmessageerror: EventHandler;
  onnotificationclick: EventHandler;
  onnotificationclose: EventHandler;
  onpaymentrequest: EventHandler;
  onperiodicsync: EventHandler;
  onpush: EventHandler;
  onpushsubscriptionchange: EventHandler;
  onsync: EventHandler;
  +registration: ServiceWorkerRegistration;
  +serviceWorker: ServiceWorker;

  skipWaiting(): Promise<void>;
}

declare class ServiceWorkerRegistration extends EventTarget {
  +active: ServiceWorker | null;
  +backgroundFetch: BackgroundFetchManager;
  +cookies: CookieStoreManager;
  +index: ContentIndex;
  +installing: ServiceWorker | null;
  +navigationPreload: NavigationPreloadManager;
  onupdatefound: EventHandler;
  +paymentManager: PaymentManager;
  +periodicSync: PeriodicSyncManager;
  +pushManager: PushManager;
  +scope: string;
  +sync: SyncManager;
  +updateViaCache: ServiceWorkerUpdateViaCache;
  +waiting: ServiceWorker | null;

  getNotifications(
    filter?: GetNotificationOptions,
  ): Promise<Array<Notification>>;
  showNotification(title: string, options?: NotificationOptions): Promise<void>;
  unregister(): Promise<boolean>;
  update(): Promise<ServiceWorkerRegistration>;
}

declare class WindowClient extends Client {
  +ancestorOrigins: $ReadOnlyArray<string>;
  +focused: boolean;
  +visibilityState: DocumentVisibilityState;

  focus(): Promise<WindowClient>;
  navigate(url: string): Promise<WindowClient | null>;
}

/*---------- shape-detection-api ----------*/

type BarcodeFormat =
  | 'aztec'
  | 'code_128'
  | 'code_39'
  | 'code_93'
  | 'codabar'
  | 'data_matrix'
  | 'ean_13'
  | 'ean_8'
  | 'itf'
  | 'pdf417'
  | 'qr_code'
  | 'unknown'
  | 'upc_a'
  | 'upc_e';

type LandmarkType = 'mouth' | 'eye' | 'nose';

type BarcodeDetectorOptions = {
  formats: Array<BarcodeFormat>,
};

type DetectedBarcode = {
  boundingBox: DOMRectReadOnly,
  cornerPoints: Array<Point2D>,
  format: BarcodeFormat,
  rawValue: string,
};

type DetectedFace = {
  boundingBox: DOMRectReadOnly,
  landmarks: Array<Landmark> | null,
};

type FaceDetectorOptions = {
  fastMode: boolean,
  maxDetectedFaces: number,
};

type Landmark = {
  locations: Array<Point2D>,
  type: LandmarkType,
};

declare class BarcodeDetector {
  constructor(barcodeDetectorOptions?: BarcodeDetectorOptions): void;

  static getSupportedFormats(): Promise<Array<BarcodeFormat>>;
  detect(image: ImageBitmapSource): Promise<Array<DetectedBarcode>>;
}

declare class FaceDetector {
  constructor(faceDetectorOptions?: FaceDetectorOptions): void;

  detect(image: ImageBitmapSource): Promise<Array<DetectedFace>>;
}

/*---------- shared-storage ----------*/

// Contributes to:
//   - Window
//   - RequestInit

type SharedStorageResponse = string | FencedFrameConfig;

type SharedStorageModifierMethodOptions = {
  withLock: string,
};

type SharedStoragePrivateAggregationConfig = {
  aggregationCoordinatorOrigin: string,
  contextId: string,
  filteringIdMaxBytes: number,
  maxContributions: number,
};

type SharedStorageRunOperationMethodOptions = {
  data: Object,
  keepAlive: boolean,
  privateAggregationConfig: SharedStoragePrivateAggregationConfig,
  resolveToConfig: boolean,
  savedQuery: string,
};

type SharedStorageSetMethodOptions = {
  ...SharedStorageModifierMethodOptions,
  ignoreIfPresent: boolean,
};

type SharedStorageUrlWithMetadata = {
  reportingMetadata: Object,
  url: string,
};

type SharedStorageWorkletOptions = {
  ...WorkletOptions,
  dataOrigin: string,
};

type RunFunctionForSharedStorageSelectURLOperation = (
  urls: Array<string>,
  data?: any,
) => Promise<number>;

declare class SharedStorage {
  +worklet: SharedStorageWorklet;

  @@iterator(): Iterator<string, string>;

  append(
    key: string,
    value: string,
    options?: SharedStorageModifierMethodOptions,
  ): Promise<any>;
  batchUpdate(
    methods: Array<SharedStorageModifierMethod>,
    options?: SharedStorageModifierMethodOptions,
  ): Promise<any>;
  clear(options?: SharedStorageModifierMethodOptions): Promise<any>;
  createWorklet(
    moduleURL: string,
    options?: SharedStorageWorkletOptions,
  ): Promise<SharedStorageWorklet>;
  delete(
    key: string,
    options?: SharedStorageModifierMethodOptions,
  ): Promise<any>;
  get(key: string): Promise<string>;
  length(): Promise<number>;
  remainingBudget(): Promise<number>;
  run(
    name: string,
    options?: SharedStorageRunOperationMethodOptions,
  ): Promise<any>;
  selectURL(
    name: string,
    urls: Array<SharedStorageUrlWithMetadata>,
    options?: SharedStorageRunOperationMethodOptions,
  ): Promise<SharedStorageResponse>;
  set(
    key: string,
    value: string,
    options?: SharedStorageSetMethodOptions,
  ): Promise<any>;
}

declare class SharedStorageAppendMethod extends SharedStorageModifierMethod {
  constructor(
    key: string,
    value: string,
    options?: SharedStorageModifierMethodOptions,
  ): void;
}

declare class SharedStorageClearMethod extends SharedStorageModifierMethod {
  constructor(options?: SharedStorageModifierMethodOptions): void;
}

declare class SharedStorageDeleteMethod extends SharedStorageModifierMethod {
  constructor(key: string, options?: SharedStorageModifierMethodOptions): void;
}

declare class SharedStorageModifierMethod {}

declare class SharedStorageSetMethod extends SharedStorageModifierMethod {
  constructor(
    key: string,
    value: string,
    options?: SharedStorageSetMethodOptions,
  ): void;
}

declare class SharedStorageWorklet extends Worklet {
  run(
    name: string,
    options?: SharedStorageRunOperationMethodOptions,
  ): Promise<any>;
  selectURL(
    name: string,
    urls: Array<SharedStorageUrlWithMetadata>,
    options?: SharedStorageRunOperationMethodOptions,
  ): Promise<SharedStorageResponse>;
}

declare class SharedStorageWorkletGlobalScope extends WorkletGlobalScope {
  +navigator: SharedStorageWorkletNavigator;
  +privateAggregation: PrivateAggregation;
  +sharedStorage: SharedStorage;

  interestGroups(): Promise<Array<StorageInterestGroup>>;
  register(name: string, operationCtor: Function): void;
}

declare class SharedStorageWorkletNavigator mixins mixin$NavigatorLocks {}

declare class mixin$HTMLSharedStorageWritableElementUtils {
  sharedStorageWritable: boolean;
}

/*---------- speech-api ----------*/

// Contributes to:
//   - Window

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
  ...EventInit,
  error: SpeechRecognitionErrorCode,
  message: string,
};

type SpeechRecognitionEventInit = {
  ...EventInit,
  resultIndex: number,
  results: SpeechRecognitionResultList,
};

type SpeechSynthesisErrorEventInit = {
  ...SpeechSynthesisEventInit,
  error: SpeechSynthesisErrorCode,
};

type SpeechSynthesisEventInit = {
  ...EventInit,
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

  static availableOnDevice(lang: string): Promise<AvailabilityStatus>;
  static installOnDevice(lang: string): Promise<boolean>;
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

/*---------- storage-access ----------*/

// Contributes to:
//   - Document

/*---------- storage-buckets ----------*/

type StorageBucketOptions = {
  expires: number,
  persisted: boolean,
  quota: number,
};

declare class StorageBucket {
  +caches: CacheStorage;
  +indexedDB: IDBFactory;
  +name: string;

  estimate(): Promise<StorageEstimate>;
  expires(): Promise<number | null>;
  getDirectory(): Promise<FileSystemDirectoryHandle>;
  persist(): Promise<boolean>;
  persisted(): Promise<boolean>;
  setExpires(expires: number): Promise<void>;
}

declare class StorageBucketManager {
  delete(name: string): Promise<void>;
  keys(): Promise<Array<string>>;
  open(name: string, options?: StorageBucketOptions): Promise<StorageBucket>;
}

declare class mixin$NavigatorStorageBuckets {
  +storageBuckets: StorageBucketManager;
}

/*---------- storage ----------*/

type StorageEstimate = {
  quota: number,
  usage: number,
};

declare class StorageManager {
  estimate(): Promise<StorageEstimate>;
  getDirectory(): Promise<FileSystemDirectoryHandle>;
  persist(): Promise<boolean>;
  persisted(): Promise<boolean>;
}

declare class mixin$NavigatorStorage {
  +storage: StorageManager;
}

/*---------- streams ----------*/

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

/*---------- svg-animations ----------*/

// Contributes to:
//   - SVGSVGElement

declare class SVGAnimateElement extends SVGAnimationElement {}

declare class SVGAnimateMotionElement extends SVGAnimationElement {}

declare class SVGAnimateTransformElement extends SVGAnimationElement {}

declare class SVGAnimationElement extends SVGElement mixins mixin$SVGTests {
  onbegin: EventHandler;
  onend: EventHandler;
  onrepeat: EventHandler;
  +targetElement: SVGElement | null;

  beginElement(): void;
  beginElementAt(offset: number): void;
  endElement(): void;
  endElementAt(offset: number): void;
  getCurrentTime(): number;
  getSimpleDuration(): number;
  getStartTime(): number;
}

declare class SVGDiscardElement extends SVGAnimationElement {}

declare class SVGMPathElement extends SVGElement mixins mixin$SVGURIReference {}

declare class SVGSetElement extends SVGAnimationElement {}

declare class TimeEvent extends Event {
  +detail: number;
  +view: WindowProxy | null;

  initTimeEvent(
    typeArg: string,
    viewArg: Window | null,
    detailArg: number,
  ): void;
}

/*---------- svg-paths ----------*/

type SVGPathDataSettings = {
  normalize: boolean,
};

declare class SVGPathElement
  extends SVGGeometryElement
  mixins mixin$SVGPathData
{
  +pathLength: SVGAnimatedNumber;

  getPathSegmentAtLength(distance: number): SVGPathSegment | null;
  getPointAtLength(distance: number): DOMPoint;
  getTotalLength(): number;
}

declare class SVGPathSegment {
  type: string;
  values: $ReadOnlyArray<number>;
}

declare class mixin$SVGPathData {
  getPathData(settings?: SVGPathDataSettings): Array<SVGPathSegment>;
  setPathData(pathData: Array<SVGPathSegment>): void;
}

/*---------- SVG ----------*/

// Contributes to:
//   - Document
//   - SVGAElement

type SVGBoundingBoxOptions = {
  clipped: boolean,
  fill: boolean,
  markers: boolean,
  stroke: boolean,
};

declare class ShadowAnimation extends Animation {
  +sourceAnimation: Animation;

  constructor(source: Animation, newTarget: Element | CSSPseudoElement): void;
}

declare class SVGAElement
  extends SVGGraphicsElement
  mixins mixin$SVGURIReference
{
  download: string;
  hash: string;
  host: string;
  hostname: string;
  hreflang: string;
  +origin: string;
  password: string;
  pathname: string;
  ping: string;
  port: string;
  protocol: string;
  referrerPolicy: string;
  rel: string;
  +relList: DOMTokenList;
  search: string;
  +target: SVGAnimatedString;
  text: string;
  type: string;
  username: string;
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
  mixins mixin$SVGFitToViewBox, mixin$WindowEventHandlers
{
  currentScale: number;
  +currentTranslate: DOMPointReadOnly;
  +height: SVGAnimatedLength;
  +width: SVGAnimatedLength;
  +x: SVGAnimatedLength;
  +y: SVGAnimatedLength;

  animationsPaused(): boolean;
  checkEnclosure(element: SVGElement, rect: DOMRectReadOnly): boolean;
  checkIntersection(element: SVGElement, rect: DOMRectReadOnly): boolean;
  createSVGAngle(): SVGAngle;
  createSVGLength(): SVGLength;
  createSVGMatrix(): DOMMatrix;
  createSVGNumber(): SVGNumber;
  createSVGPoint(): DOMPoint;
  createSVGRect(): DOMRect;
  createSVGTransform(): SVGTransform;
  createSVGTransformFromMatrix(matrix?: DOMMatrix2DInit): SVGTransform;
  deselectAll(): void;
  forceRedraw(): void;
  getCurrentTime(): number;
  getElementById(elementId: string): Element;
  getEnclosureList(
    rect: DOMRectReadOnly,
    referenceElement: SVGElement | null,
  ): NodeList;
  getIntersectionList(
    rect: DOMRectReadOnly,
    referenceElement: SVGElement | null,
  ): NodeList;
  pauseAnimations(): void;
  setCurrentTime(seconds: number): void;
  suspendRedraw(maxWaitMilliseconds: number): number;
  unpauseAnimations(): void;
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

  setMatrix(matrix?: DOMMatrix2DInit): void;
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
  createSVGTransformFromMatrix(matrix?: DOMMatrix2DInit): SVGTransform;
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

declare class SVGViewElement extends SVGElement mixins mixin$SVGFitToViewBox {}

declare class mixin$GetSVGDocument {
  getSVGDocument(): Document;
}

declare class mixin$SVGAnimatedPoints {
  +animatedPoints: SVGPointList;
  +points: SVGPointList;
}

declare class mixin$SVGElementInstance {
  +correspondingElement: SVGElement | null;
  +correspondingUseElement: SVGUseElement | null;
}

declare class mixin$SVGFitToViewBox {
  +preserveAspectRatio: SVGAnimatedPreserveAspectRatio;
  +viewBox: SVGAnimatedRect;
}

declare class mixin$SVGTests {
  +requiredExtensions: SVGStringList;
  +systemLanguage: SVGStringList;
}

declare class mixin$SVGURIReference {
  +href: SVGAnimatedString;
}

/*---------- testutils ----------*/

declare namespace TestUtils {
  declare function gc(): Promise<void>;
}

/*---------- text-detection-api ----------*/

type DetectedText = {
  boundingBox: DOMRectReadOnly,
  cornerPoints: Array<Point2D>,
  rawValue: string,
};

declare class TextDetector {
  constructor(): void;

  detect(image: ImageBitmapSource): Promise<Array<DetectedText>>;
}

/*---------- touch-events ----------*/

// Contributes to:
//   - GlobalEventHandlers

type TouchType = 'direct' | 'stylus';

type TouchEventInit = {
  ...EventModifierInit,
  changedTouches: Array<Touch>,
  targetTouches: Array<Touch>,
  touches: Array<Touch>,
};

type TouchInit = {
  altitudeAngle: number,
  azimuthAngle: number,
  clientX: number,
  clientY: number,
  force: number,
  identifier: number,
  pageX: number,
  pageY: number,
  radiusX: number,
  radiusY: number,
  rotationAngle: number,
  screenX: number,
  screenY: number,
  target: EventTarget,
  touchType: TouchType,
};

declare class Touch {
  +altitudeAngle: number;
  +azimuthAngle: number;
  +clientX: number;
  +clientY: number;
  +force: number;
  +identifier: number;
  +pageX: number;
  +pageY: number;
  +radiusX: number;
  +radiusY: number;
  +rotationAngle: number;
  +screenX: number;
  +screenY: number;
  +target: EventTarget;
  +touchType: TouchType;

  constructor(touchInitDict: TouchInit): void;
}

declare class TouchEvent extends UIEvent {
  +altKey: boolean;
  +changedTouches: TouchList;
  +ctrlKey: boolean;
  +metaKey: boolean;
  +shiftKey: boolean;
  +targetTouches: TouchList;
  +touches: TouchList;

  constructor(type: string, eventInitDict?: TouchEventInit): void;

  getModifierState(keyArg: string): boolean;
}

declare class TouchList {
  +length: number;

  item(index: number): Touch | null;
}

/*---------- trust-token-api ----------*/

// Contributes to:
//   - RequestInit
//   - HTMLIFrameElement
//   - XMLHttpRequest
//   - Document

type OperationType =
  | 'token-request'
  | 'send-redemption-record'
  | 'token-redemption';

type RefreshPolicy = 'none' | 'refresh';

type TokenVersion = '1';

type PrivateToken = {
  issuers: Array<string>,
  operation: OperationType,
  refreshPolicy: RefreshPolicy,
  version: TokenVersion,
};

/*---------- trusted-types ----------*/

// Contributes to:
//   - WindowOrWorkerGlobalScope

type TrustedType = TrustedHTML | TrustedScript | TrustedScriptURL;

type TrustedTypePolicyOptions = {
  createHTML: CreateHTMLCallback,
  createScript: CreateScriptCallback,
  createScriptURL: CreateScriptURLCallback,
};

type CreateHTMLCallback = (input: string, arguments_: any) => string | null;

type CreateScriptCallback = (input: string, arguments_: any) => string | null;

type CreateScriptURLCallback = (
  input: string,
  arguments_: any,
) => string | null;

declare class TrustedHTML {
  toString(): string;

  toJSON(): string;
}

declare class TrustedScript {
  toString(): string;

  toJSON(): string;
}

declare class TrustedScriptURL {
  toString(): string;

  toJSON(): string;
}

declare class TrustedTypePolicy {
  +name: string;

  createHTML(input: string, arguments_: any): TrustedHTML;
  createScript(input: string, arguments_: any): TrustedScript;
  createScriptURL(input: string, arguments_: any): TrustedScriptURL;
}

declare class TrustedTypePolicyFactory {
  +defaultPolicy: TrustedTypePolicy | null;
  +emptyHTML: TrustedHTML;
  +emptyScript: TrustedScript;

  createPolicy(
    policyName: string,
    policyOptions?: TrustedTypePolicyOptions,
  ): TrustedTypePolicy;
  getAttributeType(
    tagName: string,
    attribute: string,
    elementNs?: string | null,
    attrNs?: string | null,
  ): string | null;
  getPropertyType(
    tagName: string,
    property: string,
    elementNs?: string | null,
  ): string | null;
  isHTML(value: any): boolean;
  isScript(value: any): boolean;
  isScriptURL(value: any): boolean;
}

/*---------- ua-client-hints ----------*/

type NavigatorUABrandVersion = {
  brand: string,
  version: string,
};

type UADataValues = {
  architecture: string,
  bitness: string,
  brands: Array<NavigatorUABrandVersion>,
  formFactors: Array<string>,
  fullVersionList: Array<NavigatorUABrandVersion>,
  mobile: boolean,
  model: string,
  platform: string,
  platformVersion: string,
  uaFullVersion: string,
  wow64: boolean,
};

type UALowEntropyJSON = {
  brands: Array<NavigatorUABrandVersion>,
  mobile: boolean,
  platform: string,
};

declare class NavigatorUAData {
  +brands: $ReadOnlyArray<NavigatorUABrandVersion>;
  +mobile: boolean;
  +platform: string;

  getHighEntropyValues(hints: Array<string>): Promise<UADataValues>;
  toJSON(): UALowEntropyJSON;
}

declare class mixin$NavigatorUA {
  +userAgentData: NavigatorUAData;
}

/*---------- uievents ----------*/

// Contributes to:
//   - UIEvent
//   - MouseEvent
//   - KeyboardEvent
//   - CompositionEvent
//   - UIEventInit
//   - KeyboardEventInit

type CompositionEventInit = {
  ...UIEventInit,
  data: string,
};

type EventModifierInit = {
  ...UIEventInit,
  altKey: boolean,
  ctrlKey: boolean,
  metaKey: boolean,
  modifierAltGraph: boolean,
  modifierCapsLock: boolean,
  modifierFn: boolean,
  modifierFnLock: boolean,
  modifierHyper: boolean,
  modifierNumLock: boolean,
  modifierScrollLock: boolean,
  modifierSuper: boolean,
  modifierSymbol: boolean,
  modifierSymbolLock: boolean,
  shiftKey: boolean,
};

type FocusEventInit = {
  ...UIEventInit,
  relatedTarget: EventTarget | null,
};

type InputEventInit = {
  ...UIEventInit,
  data: string | null,
  dataTransfer: DataTransfer | null,
  inputType: string,
  isComposing: boolean,
  targetRanges: Array<StaticRange>,
};

type KeyboardEventInit = {
  ...EventModifierInit,
  charCode: number,
  code: string,
  isComposing: boolean,
  key: string,
  keyCode: number,
  location: number,
  repeat: boolean,
};

type MouseEventInit = {
  ...EventModifierInit,
  button: number,
  buttons: number,
  clientX: number,
  clientY: number,
  movementX: number,
  movementY: number,
  relatedTarget: EventTarget | null,
  screenX: number,
  screenY: number,
};

type UIEventInit = {
  ...EventInit,
  detail: number,
  sourceCapabilities: InputDeviceCapabilities | null,
  view: Window | null,
  which: number,
};

type WheelEventInit = {
  ...MouseEventInit,
  deltaMode: number,
  deltaX: number,
  deltaY: number,
  deltaZ: number,
};

declare class CompositionEvent extends UIEvent {
  +data: string;

  constructor(type: string, eventInitDict?: CompositionEventInit): void;

  initCompositionEvent(
    typeArg: string,
    bubblesArg?: boolean,
    cancelableArg?: boolean,
    viewArg?: WindowProxy | null,
    dataArg?: string,
  ): void;
}

declare class FocusEvent extends UIEvent {
  +relatedTarget: EventTarget | null;

  constructor(type: string, eventInitDict?: FocusEventInit): void;
}

declare class InputEvent extends UIEvent {
  +data: string | null;
  +dataTransfer: DataTransfer | null;
  +inputType: string;
  +isComposing: boolean;

  constructor(type: string, eventInitDict?: InputEventInit): void;

  getTargetRanges(): Array<StaticRange>;
}

declare class KeyboardEvent extends UIEvent {
  static +DOM_KEY_LOCATION_LEFT: 0x01;
  static +DOM_KEY_LOCATION_NUMPAD: 0x03;
  static +DOM_KEY_LOCATION_RIGHT: 0x02;
  static +DOM_KEY_LOCATION_STANDARD: 0x00;

  +altKey: boolean;
  +charCode: number;
  +code: string;
  +ctrlKey: boolean;
  +isComposing: boolean;
  +key: string;
  +keyCode: number;
  +location: number;
  +metaKey: boolean;
  +repeat: boolean;
  +shiftKey: boolean;

  constructor(type: string, eventInitDict?: KeyboardEventInit): void;

  getModifierState(keyArg: string): boolean;
  initKeyboardEvent(
    typeArg: string,
    bubblesArg?: boolean,
    cancelableArg?: boolean,
    viewArg?: Window | null,
    keyArg?: string,
    locationArg?: number,
    ctrlKey?: boolean,
    altKey?: boolean,
    shiftKey?: boolean,
    metaKey?: boolean,
  ): void;
}

declare class MouseEvent extends UIEvent {
  +altKey: boolean;
  +button: number;
  +buttons: number;
  +clientX: number;
  +clientY: number;
  +ctrlKey: boolean;
  +layerX: number;
  +layerY: number;
  +metaKey: boolean;
  +movementX: number;
  +movementY: number;
  +offsetX: number;
  +offsetY: number;
  +pageX: number;
  +pageY: number;
  +relatedTarget: EventTarget | null;
  +screenX: number;
  +screenY: number;
  +shiftKey: boolean;
  +x: number;
  +y: number;

  constructor(type: string, eventInitDict?: MouseEventInit): void;

  getModifierState(keyArg: string): boolean;
  initMouseEvent(
    typeArg: string,
    bubblesArg?: boolean,
    cancelableArg?: boolean,
    viewArg?: Window | null,
    detailArg?: number,
    screenXArg?: number,
    screenYArg?: number,
    clientXArg?: number,
    clientYArg?: number,
    ctrlKeyArg?: boolean,
    altKeyArg?: boolean,
    shiftKeyArg?: boolean,
    metaKeyArg?: boolean,
    buttonArg?: number,
    relatedTargetArg?: EventTarget | null,
  ): void;
}

declare class TextEvent extends UIEvent {
  +data: string;

  initTextEvent(
    type: string,
    bubbles?: boolean,
    cancelable?: boolean,
    view?: Window | null,
    data?: string,
  ): void;
}

declare class UIEvent extends Event {
  +detail: number;
  +sourceCapabilities: InputDeviceCapabilities | null;
  +view: Window | null;
  +which: number;

  constructor(type: string, eventInitDict?: UIEventInit): void;

  initUIEvent(
    typeArg: string,
    bubblesArg?: boolean,
    cancelableArg?: boolean,
    viewArg?: Window | null,
    detailArg?: number,
  ): void;
}

declare class WheelEvent extends MouseEvent {
  static +DOM_DELTA_LINE: 0x01;
  static +DOM_DELTA_PAGE: 0x02;
  static +DOM_DELTA_PIXEL: 0x00;

  +deltaMode: number;
  +deltaX: number;
  +deltaY: number;
  +deltaZ: number;

  constructor(type: string, eventInitDict?: WheelEventInit): void;
}

/*---------- url ----------*/

declare class URL {
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
  +searchParams: URLSearchParams;
  username: string;

  constructor(url: string, base?: string): void;

  static canParse(url: string, base?: string): boolean;
  static createObjectURL(obj: Blob | MediaSource): string;
  static parse(url: string, base?: string): URL | null;
  static revokeObjectURL(url: string): void;
  toJSON(): string;
}

declare class URLSearchParams {
  +size: number;

  constructor(init?: Array<Array<string>> | {[string]: string} | string): void;

  @@iterator(): Iterator<string, string>;

  append(name: string, value: string): void;
  delete(name: string, value?: string): void;
  get(name: string): string | null;
  getAll(name: string): Array<string>;
  has(name: string, value?: string): boolean;
  set(name: string, value: string): void;
  sort(): void;
  toString(): string;
}

/*---------- urlpattern ----------*/

type URLPatternCompatible = string | URLPatternInit | URLPattern;

type URLPatternInput = string | URLPatternInit;

type URLPatternComponentResult = {
  groups: {[string]: string | void},
  input: string,
};

type URLPatternInit = {
  baseURL: string,
  hash: string,
  hostname: string,
  password: string,
  pathname: string,
  port: string,
  protocol: string,
  search: string,
  username: string,
};

type URLPatternOptions = {
  ignoreCase: boolean,
};

type URLPatternResult = {
  hash: URLPatternComponentResult,
  hostname: URLPatternComponentResult,
  inputs: Array<URLPatternInput>,
  password: URLPatternComponentResult,
  pathname: URLPatternComponentResult,
  port: URLPatternComponentResult,
  protocol: URLPatternComponentResult,
  search: URLPatternComponentResult,
  username: URLPatternComponentResult,
};

declare class URLPattern {
  +hash: string;
  +hasRegExpGroups: boolean;
  +hostname: string;
  +password: string;
  +pathname: string;
  +port: string;
  +protocol: string;
  +search: string;
  +username: string;

  constructor(
    input: URLPatternInput,
    baseURL: string,
    options?: URLPatternOptions,
  ): void;
  constructor(input?: URLPatternInput, options?: URLPatternOptions): void;

  exec(input?: URLPatternInput, baseURL?: string): URLPatternResult | null;
  test(input?: URLPatternInput, baseURL?: string): boolean;
}

/*---------- user-timing ----------*/

// Contributes to:
//   - Performance

type PerformanceMarkOptions = {
  detail: any,
  startTime: number,
};

type PerformanceMeasureOptions = {
  detail: any,
  duration: number,
  end: string | number,
  start: string | number,
};

declare class PerformanceMark extends PerformanceEntry {
  +detail: any;

  constructor(markName: string, markOptions?: PerformanceMarkOptions): void;
}

declare class PerformanceMeasure extends PerformanceEntry {
  +detail: any;
}

/*---------- vibration ----------*/

// Contributes to:
//   - Navigator

type VibratePattern = number | Array<number>;

/*---------- video-rvfc ----------*/

// Contributes to:
//   - HTMLVideoElement

type VideoFrameCallbackMetadata = {
  captureTime: number,
  expectedDisplayTime: number,
  height: number,
  mediaTime: number,
  presentationTime: number,
  presentedFrames: number,
  processingDuration: number,
  receiveTime: number,
  rtpTimestamp: number,
  width: number,
};

type VideoFrameRequestCallback = (
  now: number,
  metadata: VideoFrameCallbackMetadata,
) => void;

/*---------- virtual-keyboard ----------*/

// Contributes to:
//   - Navigator
//   - ElementContentEditable

declare class VirtualKeyboard extends EventTarget {
  +boundingRect: DOMRect;
  ongeometrychange: EventHandler;
  overlaysContent: boolean;

  hide(): void;
  show(): void;
}

/*---------- wai-aria ----------*/

declare class mixin$ARIAMixin {
  ariaActiveDescendantElement: Element | null;
  ariaAtomic: string | null;
  ariaAutoComplete: string | null;
  ariaBrailleLabel: string | null;
  ariaBrailleRoleDescription: string | null;
  ariaBusy: string | null;
  ariaChecked: string | null;
  ariaColCount: string | null;
  ariaColIndex: string | null;
  ariaColIndexText: string | null;
  ariaColSpan: string | null;
  ariaControlsElements: $ReadOnlyArray<Element> | null;
  ariaCurrent: string | null;
  ariaDescribedByElements: $ReadOnlyArray<Element> | null;
  ariaDescription: string | null;
  ariaDetailsElements: $ReadOnlyArray<Element> | null;
  ariaDisabled: string | null;
  ariaErrorMessageElements: $ReadOnlyArray<Element> | null;
  ariaExpanded: string | null;
  ariaFlowToElements: $ReadOnlyArray<Element> | null;
  ariaHasPopup: string | null;
  ariaHidden: string | null;
  ariaInvalid: string | null;
  ariaKeyShortcuts: string | null;
  ariaLabel: string | null;
  ariaLabelledByElements: $ReadOnlyArray<Element> | null;
  ariaLevel: string | null;
  ariaLive: string | null;
  ariaModal: string | null;
  ariaMultiLine: string | null;
  ariaMultiSelectable: string | null;
  ariaOrientation: string | null;
  ariaOwnsElements: $ReadOnlyArray<Element> | null;
  ariaPlaceholder: string | null;
  ariaPosInSet: string | null;
  ariaPressed: string | null;
  ariaReadOnly: string | null;
  ariaRelevant: string | null;
  ariaRequired: string | null;
  ariaRoleDescription: string | null;
  ariaRowCount: string | null;
  ariaRowIndex: string | null;
  ariaRowIndexText: string | null;
  ariaRowSpan: string | null;
  ariaSelected: string | null;
  ariaSetSize: string | null;
  ariaSort: string | null;
  ariaValueMax: string | null;
  ariaValueMin: string | null;
  ariaValueNow: string | null;
  ariaValueText: string | null;
  role: string | null;
}

/*---------- wasm-js-api ----------*/

type ImportExportKind = 'function' | 'table' | 'memory' | 'global';

type TableKind = 'externref' | 'anyfunc';

type ValueType =
  | 'i32'
  | 'i64'
  | 'f32'
  | 'f64'
  | 'v128'
  | 'externref'
  | 'anyfunc';

type GlobalDescriptor = {
  mutable: boolean,
  value: ValueType,
};

type MemoryDescriptor = {
  initial: number,
  maximum: number,
};

type ModuleExportDescriptor = {
  kind: ImportExportKind,
  name: string,
};

type ModuleImportDescriptor = {
  kind: ImportExportKind,
  module: string,
  name: string,
};

type TableDescriptor = {
  element: TableKind,
  initial: number,
  maximum: number,
};

type WebAssemblyInstantiatedSource = {
  instance: Instance,
  module: Module,
};

declare namespace WebAssembly {
  declare function compile(bytes: BufferSource): Promise<Module>;
  declare function compileStreaming(source: Promise<Response>): Promise<Module>;
  declare function instantiate(
    bytes: BufferSource,
    importObject?: Object,
  ): Promise<WebAssemblyInstantiatedSource>;
  declare function instantiate(
    moduleObject: Module,
    importObject?: Object,
  ): Promise<Instance>;
  declare function instantiateStreaming(
    source: Promise<Response>,
    importObject?: Object,
  ): Promise<WebAssemblyInstantiatedSource>;
  declare function validate(bytes: BufferSource): boolean;
}

declare class Global {
  value: any;

  constructor(descriptor: GlobalDescriptor, v?: any): void;

  valueOf(): any;
}

declare class Instance {
  +exports: Object;

  constructor(module: Module, importObject?: Object): void;
}

declare class Memory {
  +buffer: ArrayBuffer;

  constructor(descriptor: MemoryDescriptor): void;

  grow(delta: number): number;
  toFixedLengthBuffer(): ArrayBuffer;
  toResizableBuffer(): ArrayBuffer;
}

declare class Module {
  constructor(bytes: BufferSource): void;

  static customSections(
    moduleObject: Module,
    sectionName: string,
  ): Array<ArrayBuffer>;
  static exports(moduleObject: Module): Array<ModuleExportDescriptor>;
  static imports(moduleObject: Module): Array<ModuleImportDescriptor>;
}

declare class Table {
  +length: number;

  constructor(descriptor: TableDescriptor, value?: any): void;

  get(index: number): any;
  grow(delta: number, value?: any): number;
  set(index: number, value?: any): void;
}

/*---------- wasm-web-api ----------*/

// Contributes to:
//   - WebAssembly

/*---------- web-animations-2 ----------*/

// Contributes to:
//   - AnimationTimeline
//   - Animation
//   - AnimationEffect
//   - EffectTiming
//   - OptionalEffectTiming
//   - ComputedEffectTiming
//   - KeyframeEffect
//   - KeyframeEffectOptions
//   - KeyframeAnimationOptions

type AnimationTriggerType = 'once' | 'repeat' | 'alternate' | 'state';

type IterationCompositeOperation = 'replace' | 'accumulate';

type AnimationPlaybackEventInit = {
  ...EventInit,
  currentTime: CSSNumberish | null,
  timelineTime: CSSNumberish | null,
};

type AnimationTriggerOptions = {
  exitRangeEnd:
    | TimelineRangeOffset
    | CSSNumericValue
    | CSSKeywordValue
    | string,
  exitRangeStart:
    | TimelineRangeOffset
    | CSSNumericValue
    | CSSKeywordValue
    | string,
  rangeEnd: TimelineRangeOffset | CSSNumericValue | CSSKeywordValue | string,
  rangeStart: TimelineRangeOffset | CSSNumericValue | CSSKeywordValue | string,
  timeline: AnimationTimeline | null,
  type: AnimationTriggerType | null,
};

type TimelineRangeOffset = {
  offset: CSSNumericValue,
  rangeName: string | null,
};

type EffectCallback = (
  progress: number | null,
  currentTarget: Element | CSSPseudoElement,
  animation: Animation,
) => void;

declare class AnimationNodeList {
  +length: number;

  item(index: number): AnimationEffect | null;
}

declare class AnimationPlaybackEvent extends Event {
  +currentTime: CSSNumberish | null;
  +timelineTime: CSSNumberish | null;

  constructor(type: string, eventInitDict?: AnimationPlaybackEventInit): void;
}

declare class AnimationTrigger {
  exitRangeEnd: any;
  exitRangeStart: any;
  rangeEnd: any;
  rangeStart: any;
  timeline: AnimationTimeline;
  type: AnimationTriggerType;

  constructor(options?: AnimationTriggerOptions): void;
}

declare class GroupEffect {
  +children: AnimationNodeList;
  +firstChild: AnimationEffect | null;
  +lastChild: AnimationEffect | null;

  constructor(
    children: Array<AnimationEffect> | null,
    timing?: number | EffectTiming,
  ): void;

  append(effects: AnimationEffect): void;
  clone(): GroupEffect;
  prepend(effects: AnimationEffect): void;
}

declare class SequenceEffect extends GroupEffect {
  constructor(
    children: Array<AnimationEffect> | null,
    timing?: number | EffectTiming,
  ): void;

  clone(): SequenceEffect;
}

/*---------- web-animations ----------*/

// Contributes to:
//   - Document
//   - DocumentOrShadowRoot

type AnimationPlayState = 'idle' | 'running' | 'paused' | 'finished';

type AnimationReplaceState = 'active' | 'removed' | 'persisted';

type CompositeOperation = 'replace' | 'add' | 'accumulate';

type CompositeOperationOrAuto = 'replace' | 'add' | 'accumulate' | 'auto';

type FillMode = 'none' | 'forwards' | 'backwards' | 'both' | 'auto';

type PlaybackDirection =
  | 'normal'
  | 'reverse'
  | 'alternate'
  | 'alternate-reverse';

type BaseComputedKeyframe = {
  composite: CompositeOperationOrAuto,
  computedOffset: number,
  easing: string,
  offset: number | null,
};

type BaseKeyframe = {
  composite: CompositeOperationOrAuto,
  easing: string,
  offset: number | null,
};

type BasePropertyIndexedKeyframe = {
  composite: CompositeOperationOrAuto | Array<CompositeOperationOrAuto>,
  easing: string | Array<string>,
  offset: number | null | Array<number | null>,
};

type ComputedEffectTiming = {
  ...EffectTiming,
  activeDuration: CSSNumberish,
  currentIteration: number | null,
  endTime: CSSNumberish,
  localTime: CSSNumberish | null,
  progress: number | null,
  startTime: CSSNumberish,
};

type DocumentTimelineOptions = {
  originTime: number,
};

type EffectTiming = {
  delay: number,
  direction: PlaybackDirection,
  duration: number | CSSNumericValue | string,
  easing: string,
  endDelay: number,
  fill: FillMode,
  iterations: number,
  iterationStart: number,
  playbackRate: number,
};

type GetAnimationsOptions = {
  pseudoElement: string | null,
  subtree: boolean,
};

type KeyframeAnimationOptions = {
  ...KeyframeEffectOptions,
  id: string,
  rangeEnd: TimelineRangeOffset | CSSNumericValue | CSSKeywordValue | string,
  rangeStart: TimelineRangeOffset | CSSNumericValue | CSSKeywordValue | string,
  timeline: AnimationTimeline | null,
  trigger: AnimationTrigger | null,
};

type KeyframeEffectOptions = {
  ...EffectTiming,
  composite: CompositeOperation,
  iterationComposite: IterationCompositeOperation,
  pseudoElement: string | null,
};

type OptionalEffectTiming = {
  delay: number,
  direction: PlaybackDirection,
  duration: number | string,
  easing: string,
  endDelay: number,
  fill: FillMode,
  iterations: number,
  iterationStart: number,
  playbackRate: number,
};

declare class Animation extends EventTarget {
  currentTime: CSSNumberish | null;
  effect: AnimationEffect | null;
  +finished: Promise<Animation>;
  id: string;
  oncancel: EventHandler;
  onfinish: EventHandler;
  onremove: EventHandler;
  +overallProgress: number | null;
  +pending: boolean;
  playbackRate: number;
  +playState: AnimationPlayState;
  +ready: Promise<Animation>;
  +replaceState: AnimationReplaceState;
  startTime: CSSNumberish | null;
  timeline: AnimationTimeline | null;
  trigger: AnimationTrigger | null;

  constructor(
    effect?: AnimationEffect | null,
    timeline?: AnimationTimeline | null,
  ): void;

  cancel(): void;
  commitStyles(): void;
  finish(): void;
  pause(): void;
  persist(): void;
  play(): void;
  reverse(): void;
  updatePlaybackRate(playbackRate: number): void;
}

declare class AnimationEffect {
  +nextSibling: AnimationEffect | null;
  +parent: GroupEffect | null;
  +previousSibling: AnimationEffect | null;

  after(effects: AnimationEffect): void;
  before(effects: AnimationEffect): void;
  getComputedTiming(): ComputedEffectTiming;
  getTiming(): EffectTiming;
  remove(): void;
  replace(effects: AnimationEffect): void;
  updateTiming(timing?: OptionalEffectTiming): void;
}

declare class AnimationTimeline {
  +currentTime: CSSNumberish | null;
  +duration: CSSNumberish | null;

  play(effect?: AnimationEffect | null): Animation;
}

declare class DocumentTimeline extends AnimationTimeline {
  constructor(options?: DocumentTimelineOptions): void;
}

declare class KeyframeEffect extends AnimationEffect {
  composite: CompositeOperation;
  iterationComposite: IterationCompositeOperation;
  pseudoElement: string | null;
  target: Element | null;

  constructor(
    target: Element | null,
    keyframes: Object | null,
    options?: number | KeyframeEffectOptions,
  ): void;
  constructor(source: KeyframeEffect): void;

  getKeyframes(): Array<Object>;
  setKeyframes(keyframes: Object | null): void;
}

declare class mixin$Animatable {
  animate(
    keyframes: Object | null,
    options?: number | KeyframeAnimationOptions,
  ): Animation;
  getAnimations(options?: GetAnimationsOptions): Array<Animation>;
}

/*---------- web-app-launch ----------*/

// Contributes to:
//   - Window

type LaunchConsumer = (params: LaunchParams) => any;

declare class LaunchParams {
  +files: $ReadOnlyArray<FileSystemHandle>;
  +targetURL: string | null;
}

declare class LaunchQueue {
  setConsumer(consumer: LaunchConsumer): void;
}

/*---------- web-bluetooth-scanning ----------*/

// Contributes to:
//   - Bluetooth

type BluetoothLEScanOptions = {
  acceptAllAdvertisements: boolean,
  filters: Array<BluetoothLEScanFilterInit>,
  keepRepeatedDevices: boolean,
};

type BluetoothLEScanPermissionDescriptor = {
  ...PermissionDescriptor,
  acceptAllAdvertisements: boolean,
  filters: Array<BluetoothLEScanFilterInit>,
  keepRepeatedDevices: boolean,
};

declare class BluetoothDataFilter {
  +dataPrefix: ArrayBuffer;
  +mask: ArrayBuffer;

  constructor(init?: BluetoothDataFilterInit): void;
}

declare class BluetoothLEScan {
  +acceptAllAdvertisements: boolean;
  +active: boolean;
  +filters: $ReadOnlyArray<BluetoothLEScanFilter>;
  +keepRepeatedDevices: boolean;

  stop(): void;
}

declare class BluetoothLEScanFilter {
  +manufacturerData: BluetoothManufacturerDataFilter;
  +name: string | null;
  +namePrefix: string | null;
  +serviceData: BluetoothServiceDataFilter;
  +services: $ReadOnlyArray<UUID>;

  constructor(init?: BluetoothLEScanFilterInit): void;
}

declare class BluetoothLEScanPermissionResult extends PermissionStatus {
  scans: $ReadOnlyArray<BluetoothLEScan>;
}

declare class BluetoothManufacturerDataFilter {
  constructor(init?: Object): void;
}

declare class BluetoothServiceDataFilter {
  constructor(init?: Object): void;
}

/*---------- web-bluetooth ----------*/

// Contributes to:
//   - Navigator

type BluetoothCharacteristicUUID = string | number;

type BluetoothDescriptorUUID = string | number;

type BluetoothServiceUUID = string | number;

type UUID = string;

type AllowedBluetoothDevice = {
  allowedManufacturerData: Array<number>,
  allowedServices: string | Array<UUID>,
  deviceId: string,
  mayUseGATT: boolean,
};

type BluetoothAdvertisingEventInit = {
  ...EventInit,
  appearance: number,
  device: BluetoothDevice,
  manufacturerData: BluetoothManufacturerDataMap,
  name: string,
  rssi: number,
  serviceData: BluetoothServiceDataMap,
  txPower: number,
  uuids: Array<string | number>,
};

type BluetoothDataFilterInit = {
  dataPrefix: BufferSource,
  mask: BufferSource,
};

type BluetoothLEScanFilterInit = {
  manufacturerData: Array<BluetoothManufacturerDataFilterInit>,
  name: string,
  namePrefix: string,
  serviceData: Array<BluetoothServiceDataFilterInit>,
  services: Array<BluetoothServiceUUID>,
};

type BluetoothManufacturerDataFilterInit = {
  ...BluetoothDataFilterInit,
  companyIdentifier: number,
};

type BluetoothPermissionDescriptor = {
  ...PermissionDescriptor,
  acceptAllDevices: boolean,
  deviceId: string,
  filters: Array<BluetoothLEScanFilterInit>,
  optionalManufacturerData: Array<number>,
  optionalServices: Array<BluetoothServiceUUID>,
};

type BluetoothPermissionStorage = {
  allowedDevices: Array<AllowedBluetoothDevice>,
};

type BluetoothServiceDataFilterInit = {
  ...BluetoothDataFilterInit,
  service: BluetoothServiceUUID,
};

type RequestDeviceOptions = {
  acceptAllDevices: boolean,
  exclusionFilters: Array<BluetoothLEScanFilterInit>,
  filters: Array<BluetoothLEScanFilterInit>,
  optionalManufacturerData: Array<number>,
  optionalServices: Array<BluetoothServiceUUID>,
};

type ValueEventInit = {
  ...EventInit,
  value: any,
};

type WatchAdvertisementsOptions = {
  signal: AbortSignal,
};

declare class Bluetooth
  extends EventTarget
  mixins
    mixin$BluetoothDeviceEventHandlers,
    mixin$CharacteristicEventHandlers,
    mixin$ServiceEventHandlers
{
  onavailabilitychanged: EventHandler;
  +referringDevice: BluetoothDevice | null;

  getAvailability(): Promise<boolean>;
  getDevices(): Promise<Array<BluetoothDevice>>;
  requestDevice(options?: RequestDeviceOptions): Promise<BluetoothDevice>;
  requestLEScan(options?: BluetoothLEScanOptions): Promise<BluetoothLEScan>;
}

declare class BluetoothAdvertisingEvent extends Event {
  +appearance: number | null;
  +device: BluetoothDevice;
  +manufacturerData: BluetoothManufacturerDataMap;
  +name: string | null;
  +rssi: number | null;
  +serviceData: BluetoothServiceDataMap;
  +txPower: number | null;
  +uuids: $ReadOnlyArray<UUID>;

  constructor(type: string, init: BluetoothAdvertisingEventInit): void;
}

declare class BluetoothCharacteristicProperties {
  +authenticatedSignedWrites: boolean;
  +broadcast: boolean;
  +indicate: boolean;
  +notify: boolean;
  +read: boolean;
  +reliableWrite: boolean;
  +writableAuxiliaries: boolean;
  +write: boolean;
  +writeWithoutResponse: boolean;
}

declare class BluetoothDevice
  extends EventTarget
  mixins
    mixin$BluetoothDeviceEventHandlers,
    mixin$CharacteristicEventHandlers,
    mixin$ServiceEventHandlers
{
  +gatt: BluetoothRemoteGATTServer | null;
  +id: string;
  +name: string | null;
  +watchingAdvertisements: boolean;

  forget(): Promise<void>;
  watchAdvertisements(options?: WatchAdvertisementsOptions): Promise<void>;
}

type BluetoothManufacturerDataMap = Map<number, DataView>;

declare class BluetoothPermissionResult extends PermissionStatus {
  devices: $ReadOnlyArray<BluetoothDevice>;
}

declare class BluetoothRemoteGATTCharacteristic
  extends EventTarget
  mixins mixin$CharacteristicEventHandlers
{
  +properties: BluetoothCharacteristicProperties;
  +service: BluetoothRemoteGATTService;
  +uuid: UUID;
  +value: DataView | null;

  getDescriptor(
    descriptor: BluetoothDescriptorUUID,
  ): Promise<BluetoothRemoteGATTDescriptor>;
  getDescriptors(
    descriptor?: BluetoothDescriptorUUID,
  ): Promise<Array<BluetoothRemoteGATTDescriptor>>;
  readValue(): Promise<DataView>;
  startNotifications(): Promise<BluetoothRemoteGATTCharacteristic>;
  stopNotifications(): Promise<BluetoothRemoteGATTCharacteristic>;
  writeValue(value: BufferSource): Promise<void>;
  writeValueWithoutResponse(value: BufferSource): Promise<void>;
  writeValueWithResponse(value: BufferSource): Promise<void>;
}

declare class BluetoothRemoteGATTDescriptor {
  +characteristic: BluetoothRemoteGATTCharacteristic;
  +uuid: UUID;
  +value: DataView | null;

  readValue(): Promise<DataView>;
  writeValue(value: BufferSource): Promise<void>;
}

declare class BluetoothRemoteGATTServer {
  +connected: boolean;
  +device: BluetoothDevice;

  connect(): Promise<BluetoothRemoteGATTServer>;
  disconnect(): void;
  getPrimaryService(
    service: BluetoothServiceUUID,
  ): Promise<BluetoothRemoteGATTService>;
  getPrimaryServices(
    service?: BluetoothServiceUUID,
  ): Promise<Array<BluetoothRemoteGATTService>>;
}

declare class BluetoothRemoteGATTService
  extends EventTarget
  mixins mixin$CharacteristicEventHandlers, mixin$ServiceEventHandlers
{
  +device: BluetoothDevice;
  +isPrimary: boolean;
  +uuid: UUID;

  getCharacteristic(
    characteristic: BluetoothCharacteristicUUID,
  ): Promise<BluetoothRemoteGATTCharacteristic>;
  getCharacteristics(
    characteristic?: BluetoothCharacteristicUUID,
  ): Promise<Array<BluetoothRemoteGATTCharacteristic>>;
  getIncludedService(
    service: BluetoothServiceUUID,
  ): Promise<BluetoothRemoteGATTService>;
  getIncludedServices(
    service?: BluetoothServiceUUID,
  ): Promise<Array<BluetoothRemoteGATTService>>;
}

type BluetoothServiceDataMap = Map<UUID, DataView>;

declare class BluetoothUUID {
  static canonicalUUID(alias: number): UUID;
  static getCharacteristic(name: string | number): UUID;
  static getDescriptor(name: string | number): UUID;
  static getService(name: string | number): UUID;
}

declare class ValueEvent extends Event {
  +value: any;

  constructor(type: string, initDict?: ValueEventInit): void;
}

declare class mixin$BluetoothDeviceEventHandlers {
  onadvertisementreceived: EventHandler;
  ongattserverdisconnected: EventHandler;
}

declare class mixin$CharacteristicEventHandlers {
  oncharacteristicvaluechanged: EventHandler;
}

declare class mixin$ServiceEventHandlers {
  onserviceadded: EventHandler;
  onservicechanged: EventHandler;
  onserviceremoved: EventHandler;
}

/*---------- web-locks ----------*/

type LockMode = 'shared' | 'exclusive';

type LockInfo = {
  clientId: string,
  mode: LockMode,
  name: string,
};

type LockManagerSnapshot = {
  held: Array<LockInfo>,
  pending: Array<LockInfo>,
};

type LockOptions = {
  ifAvailable: boolean,
  mode: LockMode,
  signal: AbortSignal,
  steal: boolean,
};

type LockGrantedCallback = (lock: Lock | null) => Promise<any>;

declare class Lock {
  +mode: LockMode;
  +name: string;
}

declare class LockManager {
  query(): Promise<LockManagerSnapshot>;
  request(name: string, callback: LockGrantedCallback): Promise<any>;
  request(
    name: string,
    options: LockOptions,
    callback: LockGrantedCallback,
  ): Promise<any>;
}

declare class mixin$NavigatorLocks {
  +locks: LockManager;
}

/*---------- web-otp ----------*/

// Contributes to:
//   - CredentialRequestOptions

type OTPCredentialTransportType = 'sms';

type OTPCredentialRequestOptions = {
  transport: Array<OTPCredentialTransportType>,
};

declare class OTPCredential extends Credential {
  +code: string;
}

/*---------- web-share ----------*/

// Contributes to:
//   - Navigator

type ShareData = {
  files: Array<File>,
  text: string,
  title: string,
  url: string,
};

/*---------- webaudio ----------*/

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
  ...EventInit,
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
  ...EventInit,
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

/*---------- webauthn ----------*/

// Contributes to:
//   - CredentialCreationOptions
//   - CredentialRequestOptions
//   - PublicKeyCredential
//   - AuthenticationExtensionsClientInputs
//   - AuthenticationExtensionsClientInputsJSON
//   - AuthenticationExtensionsClientOutputs
//   - AuthenticationExtensionsClientOutputsJSON

type Base64URLString = string;

type COSEAlgorithmIdentifier = number;

type PublicKeyCredentialClientCapabilities = {[string]: boolean};

type PublicKeyCredentialJSON = Object;

type AttestationConveyancePreference =
  | 'none'
  | 'indirect'
  | 'direct'
  | 'enterprise';

type AuthenticatorAttachment = 'platform' | 'cross-platform';

type AuthenticatorTransport =
  | 'usb'
  | 'nfc'
  | 'ble'
  | 'smart-card'
  | 'hybrid'
  | 'internal';

type ClientCapability =
  | 'conditionalCreate'
  | 'conditionalGet'
  | 'hybridTransport'
  | 'passkeyPlatformAuthenticator'
  | 'userVerifyingPlatformAuthenticator'
  | 'relatedOrigins'
  | 'signalAllAcceptedCredentials'
  | 'signalCurrentUserDetails'
  | 'signalUnknownCredential';

type LargeBlobSupport = 'required' | 'preferred';

type PublicKeyCredentialHint = 'security-key' | 'client-device' | 'hybrid';

type PublicKeyCredentialType = 'public-key';

type ResidentKeyRequirement = 'discouraged' | 'preferred' | 'required';

type TokenBindingStatus = 'present' | 'supported';

type UserVerificationRequirement = 'required' | 'preferred' | 'discouraged';

type AllAcceptedCredentialsOptions = {
  allAcceptedCredentialIds: Array<Base64URLString>,
  rpId: string,
  userId: Base64URLString,
};

type AuthenticationExtensionsClientInputs = {
  appid: string,
  appidExclude: string,
  credBlob: ArrayBuffer,
  credentialProtectionPolicy: string,
  credProps: boolean,
  enforceCredentialProtectionPolicy: boolean,
  getCredBlob: boolean,
  hmacCreateSecret: boolean,
  hmacGetSecret: HMACGetSecretInput,
  largeBlob: AuthenticationExtensionsLargeBlobInputs,
  minPinLength: boolean,
  payment: AuthenticationExtensionsPaymentInputs,
  prf: AuthenticationExtensionsPRFInputs,
};

type AuthenticationExtensionsClientInputsJSON = {
  appid: string,
  appidExclude: string,
  credProps: boolean,
  largeBlob: AuthenticationExtensionsLargeBlobInputsJSON,
  prf: AuthenticationExtensionsPRFInputsJSON,
};

type AuthenticationExtensionsClientOutputs = {
  appid: boolean,
  appidExclude: boolean,
  credProps: CredentialPropertiesOutput,
  hmacCreateSecret: boolean,
  hmacGetSecret: HMACGetSecretOutput,
  largeBlob: AuthenticationExtensionsLargeBlobOutputs,
  prf: AuthenticationExtensionsPRFOutputs,
};

type AuthenticationExtensionsClientOutputsJSON = {
  appid: boolean,
  appidExclude: boolean,
  credProps: CredentialPropertiesOutput,
  largeBlob: AuthenticationExtensionsLargeBlobOutputsJSON,
  prf: AuthenticationExtensionsPRFOutputsJSON,
};

type AuthenticationExtensionsLargeBlobInputs = {
  read: boolean,
  support: string,
  write: BufferSource,
};

type AuthenticationExtensionsLargeBlobInputsJSON = {
  read: boolean,
  support: string,
  write: Base64URLString,
};

type AuthenticationExtensionsLargeBlobOutputs = {
  blob: ArrayBuffer,
  supported: boolean,
  written: boolean,
};

type AuthenticationExtensionsLargeBlobOutputsJSON = {
  blob: Base64URLString,
  supported: boolean,
  written: boolean,
};

type AuthenticationExtensionsPRFInputs = {
  eval: AuthenticationExtensionsPRFValues,
  evalByCredential: {[string]: AuthenticationExtensionsPRFValues},
};

type AuthenticationExtensionsPRFInputsJSON = {
  eval: AuthenticationExtensionsPRFValuesJSON,
  evalByCredential: {[string]: AuthenticationExtensionsPRFValuesJSON},
};

type AuthenticationExtensionsPRFOutputs = {
  enabled: boolean,
  results: AuthenticationExtensionsPRFValues,
};

type AuthenticationExtensionsPRFOutputsJSON = {
  enabled: boolean,
  results: AuthenticationExtensionsPRFValuesJSON,
};

type AuthenticationExtensionsPRFValues = {
  first: BufferSource,
  second: BufferSource,
};

type AuthenticationExtensionsPRFValuesJSON = {
  first: Base64URLString,
  second: Base64URLString,
};

type AuthenticationResponseJSON = {
  authenticatorAttachment: string,
  clientExtensionResults: AuthenticationExtensionsClientOutputsJSON,
  id: string,
  rawId: Base64URLString,
  response: AuthenticatorAssertionResponseJSON,
  type: string,
};

type AuthenticatorAssertionResponseJSON = {
  authenticatorData: Base64URLString,
  clientDataJSON: Base64URLString,
  signature: Base64URLString,
  userHandle: Base64URLString,
};

type AuthenticatorAttestationResponseJSON = {
  attestationObject: Base64URLString,
  authenticatorData: Base64URLString,
  clientDataJSON: Base64URLString,
  publicKey: Base64URLString,
  publicKeyAlgorithm: COSEAlgorithmIdentifier,
  transports: Array<string>,
};

type AuthenticatorSelectionCriteria = {
  authenticatorAttachment: string,
  requireResidentKey: boolean,
  residentKey: string,
  userVerification: string,
};

type CollectedClientData = {
  challenge: string,
  crossOrigin: boolean,
  origin: string,
  topOrigin: string,
  type: string,
};

type CredentialPropertiesOutput = {
  rk: boolean,
};

type CurrentUserDetailsOptions = {
  displayName: string,
  name: string,
  rpId: string,
  userId: Base64URLString,
};

type PublicKeyCredentialCreationOptions = {
  attestation: string,
  attestationFormats: Array<string>,
  authenticatorSelection: AuthenticatorSelectionCriteria,
  challenge: BufferSource,
  excludeCredentials: Array<PublicKeyCredentialDescriptor>,
  extensions: AuthenticationExtensionsClientInputs,
  hints: Array<string>,
  pubKeyCredParams: Array<PublicKeyCredentialParameters>,
  rp: PublicKeyCredentialRpEntity,
  timeout: number,
  user: PublicKeyCredentialUserEntity,
};

type PublicKeyCredentialCreationOptionsJSON = {
  attestation: string,
  attestationFormats: Array<string>,
  authenticatorSelection: AuthenticatorSelectionCriteria,
  challenge: Base64URLString,
  excludeCredentials: Array<PublicKeyCredentialDescriptorJSON>,
  extensions: AuthenticationExtensionsClientInputsJSON,
  hints: Array<string>,
  pubKeyCredParams: Array<PublicKeyCredentialParameters>,
  rp: PublicKeyCredentialRpEntity,
  timeout: number,
  user: PublicKeyCredentialUserEntityJSON,
};

type PublicKeyCredentialDescriptor = {
  id: BufferSource,
  transports: Array<string>,
  type: string,
};

type PublicKeyCredentialDescriptorJSON = {
  id: Base64URLString,
  transports: Array<string>,
  type: string,
};

type PublicKeyCredentialEntity = {
  name: string,
};

type PublicKeyCredentialParameters = {
  alg: COSEAlgorithmIdentifier,
  type: string,
};

type PublicKeyCredentialRequestOptions = {
  allowCredentials: Array<PublicKeyCredentialDescriptor>,
  challenge: BufferSource,
  extensions: AuthenticationExtensionsClientInputs,
  hints: Array<string>,
  rpId: string,
  timeout: number,
  userVerification: string,
};

type PublicKeyCredentialRequestOptionsJSON = {
  allowCredentials: Array<PublicKeyCredentialDescriptorJSON>,
  challenge: Base64URLString,
  extensions: AuthenticationExtensionsClientInputsJSON,
  hints: Array<string>,
  rpId: string,
  timeout: number,
  userVerification: string,
};

type PublicKeyCredentialRpEntity = {
  ...PublicKeyCredentialEntity,
  id: string,
};

type PublicKeyCredentialUserEntity = {
  ...PublicKeyCredentialEntity,
  displayName: string,
  id: BufferSource,
};

type PublicKeyCredentialUserEntityJSON = {
  displayName: string,
  id: Base64URLString,
  name: string,
};

type RegistrationResponseJSON = {
  authenticatorAttachment: string,
  clientExtensionResults: AuthenticationExtensionsClientOutputsJSON,
  id: string,
  rawId: Base64URLString,
  response: AuthenticatorAttestationResponseJSON,
  type: string,
};

type TokenBinding = {
  id: string,
  status: string,
};

type UnknownCredentialOptions = {
  credentialId: Base64URLString,
  rpId: string,
};

declare class AuthenticatorAssertionResponse extends AuthenticatorResponse {
  +authenticatorData: ArrayBuffer;
  +signature: ArrayBuffer;
  +userHandle: ArrayBuffer | null;
}

declare class AuthenticatorAttestationResponse extends AuthenticatorResponse {
  +attestationObject: ArrayBuffer;

  getAuthenticatorData(): ArrayBuffer;
  getPublicKey(): ArrayBuffer | null;
  getPublicKeyAlgorithm(): COSEAlgorithmIdentifier;
  getTransports(): Array<string>;
}

declare class AuthenticatorResponse {
  +clientDataJSON: ArrayBuffer;
}

declare class PublicKeyCredential extends Credential {
  +authenticatorAttachment: string | null;
  +rawId: ArrayBuffer;
  +response: AuthenticatorResponse;

  static getClientCapabilities(): Promise<PublicKeyCredentialClientCapabilities>;
  static isConditionalMediationAvailable(): Promise<boolean>;
  static isUserVerifyingPlatformAuthenticatorAvailable(): Promise<boolean>;
  static parseCreationOptionsFromJSON(
    options: PublicKeyCredentialCreationOptionsJSON,
  ): PublicKeyCredentialCreationOptions;
  static parseRequestOptionsFromJSON(
    options: PublicKeyCredentialRequestOptionsJSON,
  ): PublicKeyCredentialRequestOptions;
  static signalAllAcceptedCredentials(
    options: AllAcceptedCredentialsOptions,
  ): Promise<void>;
  static signalCurrentUserDetails(
    options: CurrentUserDetailsOptions,
  ): Promise<void>;
  static signalUnknownCredential(
    options: UnknownCredentialOptions,
  ): Promise<void>;
  getClientExtensionResults(): AuthenticationExtensionsClientOutputs;
  toJSON(): PublicKeyCredentialJSON;
}

/*---------- webcodecs ----------*/

type ImageBufferSource = AllowSharedBufferSource | ReadableStream;

type AlphaOption = 'keep' | 'discard';

type AudioSampleFormat =
  | 'u8'
  | 's16'
  | 's32'
  | 'f32'
  | 'u8-planar'
  | 's16-planar'
  | 's32-planar'
  | 'f32-planar';

type CodecState = 'unconfigured' | 'configured' | 'closed';

type EncodedAudioChunkType = 'key' | 'delta';

type EncodedVideoChunkType = 'key' | 'delta';

type HardwareAcceleration =
  | 'no-preference'
  | 'prefer-hardware'
  | 'prefer-software';

type LatencyMode = 'quality' | 'realtime';

type VideoColorPrimaries =
  | 'bt709'
  | 'bt470bg'
  | 'smpte170m'
  | 'bt2020'
  | 'smpte432';

type VideoEncoderBitrateMode = 'constant' | 'variable' | 'quantizer';

type VideoMatrixCoefficients =
  | 'rgb'
  | 'bt709'
  | 'bt470bg'
  | 'smpte170m'
  | 'bt2020-ncl';

type VideoPixelFormat =
  | 'I420'
  | 'I420P10'
  | 'I420P12'
  | 'I420A'
  | 'I420AP10'
  | 'I420AP12'
  | 'I422'
  | 'I422P10'
  | 'I422P12'
  | 'I422A'
  | 'I422AP10'
  | 'I422AP12'
  | 'I444'
  | 'I444P10'
  | 'I444P12'
  | 'I444A'
  | 'I444AP10'
  | 'I444AP12'
  | 'NV12'
  | 'RGBA'
  | 'RGBX'
  | 'BGRA'
  | 'BGRX';

type VideoTransferCharacteristics =
  | 'bt709'
  | 'smpte170m'
  | 'iec61966-2-1'
  | 'linear'
  | 'pq'
  | 'hlg';

type AudioDataCopyToOptions = {
  format: AudioSampleFormat,
  frameCount: number,
  frameOffset: number,
  planeIndex: number,
};

type AudioDataInit = {
  data: BufferSource,
  format: AudioSampleFormat,
  numberOfChannels: number,
  numberOfFrames: number,
  sampleRate: number,
  timestamp: number,
  transfer: Array<ArrayBuffer>,
};

type AudioDecoderConfig = {
  codec: string,
  description: AllowSharedBufferSource,
  numberOfChannels: number,
  sampleRate: number,
};

type AudioDecoderInit = {
  error: WebCodecsErrorCallback,
  output: AudioDataOutputCallback,
};

type AudioDecoderSupport = {
  config: AudioDecoderConfig,
  supported: boolean,
};

type AudioEncoderConfig = {
  bitrate: number,
  bitrateMode: BitrateMode,
  codec: string,
  numberOfChannels: number,
  sampleRate: number,
};

type AudioEncoderInit = {
  error: WebCodecsErrorCallback,
  output: EncodedAudioChunkOutputCallback,
};

type AudioEncoderSupport = {
  config: AudioEncoderConfig,
  supported: boolean,
};

type EncodedAudioChunkInit = {
  data: AllowSharedBufferSource,
  duration: number,
  timestamp: number,
  transfer: Array<ArrayBuffer>,
  type: EncodedAudioChunkType,
};

type EncodedAudioChunkMetadata = {
  decoderConfig: AudioDecoderConfig,
};

type EncodedVideoChunkInit = {
  data: AllowSharedBufferSource,
  duration: number,
  timestamp: number,
  transfer: Array<ArrayBuffer>,
  type: EncodedVideoChunkType,
};

type EncodedVideoChunkMetadata = {
  alphaSideData: BufferSource,
  decoderConfig: VideoDecoderConfig,
  svc: SvcOutputMetadata,
};

type ImageDecodeOptions = {
  completeFramesOnly: boolean,
  frameIndex: number,
};

type ImageDecodeResult = {
  complete: boolean,
  image: VideoFrame,
};

type ImageDecoderInit = {
  colorSpaceConversion: ColorSpaceConversion,
  data: ImageBufferSource,
  desiredHeight: number,
  desiredWidth: number,
  preferAnimation: boolean,
  transfer: Array<ArrayBuffer>,
  type: string,
};

type PlaneLayout = {
  offset: number,
  stride: number,
};

type SvcOutputMetadata = {
  temporalLayerId: number,
};

type VideoColorSpaceInit = {
  fullRange: boolean | null,
  matrix: VideoMatrixCoefficients | null,
  primaries: VideoColorPrimaries | null,
  transfer: VideoTransferCharacteristics | null,
};

type VideoDecoderConfig = {
  codec: string,
  codedHeight: number,
  codedWidth: number,
  colorSpace: VideoColorSpaceInit,
  description: AllowSharedBufferSource,
  displayAspectHeight: number,
  displayAspectWidth: number,
  flip: boolean,
  hardwareAcceleration: HardwareAcceleration,
  optimizeForLatency: boolean,
  rotation: number,
};

type VideoDecoderInit = {
  error: WebCodecsErrorCallback,
  output: VideoFrameOutputCallback,
};

type VideoDecoderSupport = {
  config: VideoDecoderConfig,
  supported: boolean,
};

type VideoEncoderConfig = {
  alpha: AlphaOption,
  bitrate: number,
  bitrateMode: VideoEncoderBitrateMode,
  codec: string,
  contentHint: string,
  displayHeight: number,
  displayWidth: number,
  framerate: number,
  hardwareAcceleration: HardwareAcceleration,
  height: number,
  latencyMode: LatencyMode,
  scalabilityMode: string,
  width: number,
};

type VideoEncoderEncodeOptions = {
  keyFrame: boolean,
};

type VideoEncoderInit = {
  error: WebCodecsErrorCallback,
  output: EncodedVideoChunkOutputCallback,
};

type VideoEncoderSupport = {
  config: VideoEncoderConfig,
  supported: boolean,
};

type VideoFrameBufferInit = {
  codedHeight: number,
  codedWidth: number,
  colorSpace: VideoColorSpaceInit,
  displayHeight: number,
  displayWidth: number,
  duration: number,
  flip: boolean,
  format: VideoPixelFormat,
  layout: Array<PlaneLayout>,
  metadata: VideoFrameMetadata,
  rotation: number,
  timestamp: number,
  transfer: Array<ArrayBuffer>,
  visibleRect: DOMRectInit,
};

type VideoFrameCopyToOptions = {
  colorSpace: PredefinedColorSpace,
  format: VideoPixelFormat,
  layout: Array<PlaneLayout>,
  rect: DOMRectInit,
};

type VideoFrameInit = {
  alpha: AlphaOption,
  displayHeight: number,
  displayWidth: number,
  duration: number,
  flip: boolean,
  metadata: VideoFrameMetadata,
  rotation: number,
  timestamp: number,
  visibleRect: DOMRectInit,
};

type VideoFrameMetadata = {};

type AudioDataOutputCallback = (output: AudioData) => void;

type EncodedAudioChunkOutputCallback = (
  output: EncodedAudioChunk,
  metadata?: EncodedAudioChunkMetadata,
) => void;

type EncodedVideoChunkOutputCallback = (
  chunk: EncodedVideoChunk,
  metadata?: EncodedVideoChunkMetadata,
) => void;

type VideoFrameOutputCallback = (output: VideoFrame) => void;

type WebCodecsErrorCallback = (error: DOMException) => void;

declare class AudioData {
  +duration: number;
  +format: AudioSampleFormat | null;
  +numberOfChannels: number;
  +numberOfFrames: number;
  +sampleRate: number;
  +timestamp: number;

  constructor(init: AudioDataInit): void;

  allocationSize(options: AudioDataCopyToOptions): number;
  clone(): AudioData;
  close(): void;
  copyTo(
    destination: AllowSharedBufferSource,
    options: AudioDataCopyToOptions,
  ): void;
}

declare class AudioDecoder extends EventTarget {
  +decodeQueueSize: number;
  ondequeue: EventHandler;
  +state: CodecState;

  constructor(init: AudioDecoderInit): void;

  static isConfigSupported(
    config: AudioDecoderConfig,
  ): Promise<AudioDecoderSupport>;
  close(): void;
  configure(config: AudioDecoderConfig): void;
  decode(chunk: EncodedAudioChunk): void;
  flush(): Promise<void>;
  reset(): void;
}

declare class AudioEncoder extends EventTarget {
  +encodeQueueSize: number;
  ondequeue: EventHandler;
  +state: CodecState;

  constructor(init: AudioEncoderInit): void;

  static isConfigSupported(
    config: AudioEncoderConfig,
  ): Promise<AudioEncoderSupport>;
  close(): void;
  configure(config: AudioEncoderConfig): void;
  encode(data: AudioData): void;
  flush(): Promise<void>;
  reset(): void;
}

declare class EncodedAudioChunk {
  +byteLength: number;
  +duration: number | null;
  +timestamp: number;
  +type: EncodedAudioChunkType;

  constructor(init: EncodedAudioChunkInit): void;

  copyTo(destination: AllowSharedBufferSource): void;
}

declare class EncodedVideoChunk {
  +byteLength: number;
  +duration: number | null;
  +timestamp: number;
  +type: EncodedVideoChunkType;

  constructor(init: EncodedVideoChunkInit): void;

  copyTo(destination: AllowSharedBufferSource): void;
}

declare class ImageDecoder {
  +complete: boolean;
  +completed: Promise<void>;
  +tracks: ImageTrackList;
  +type: string;

  constructor(init: ImageDecoderInit): void;

  static isTypeSupported(type: string): Promise<boolean>;
  close(): void;
  decode(options?: ImageDecodeOptions): Promise<ImageDecodeResult>;
  reset(): void;
}

declare class ImageTrack {
  +animated: boolean;
  +frameCount: number;
  +repetitionCount: number;
  selected: boolean;
}

declare class ImageTrackList {
  +length: number;
  +ready: Promise<void>;
  +selectedIndex: number;
  +selectedTrack: ImageTrack | null;

  (index: number): ImageTrack;
}

declare class VideoColorSpace {
  +fullRange: boolean | null;
  +matrix: VideoMatrixCoefficients | null;
  +primaries: VideoColorPrimaries | null;
  +transfer: VideoTransferCharacteristics | null;

  constructor(init?: VideoColorSpaceInit): void;

  toJSON(): VideoColorSpaceInit;
}

declare class VideoDecoder extends EventTarget {
  +decodeQueueSize: number;
  ondequeue: EventHandler;
  +state: CodecState;

  constructor(init: VideoDecoderInit): void;

  static isConfigSupported(
    config: VideoDecoderConfig,
  ): Promise<VideoDecoderSupport>;
  close(): void;
  configure(config: VideoDecoderConfig): void;
  decode(chunk: EncodedVideoChunk): void;
  flush(): Promise<void>;
  reset(): void;
}

declare class VideoEncoder extends EventTarget {
  +encodeQueueSize: number;
  ondequeue: EventHandler;
  +state: CodecState;

  constructor(init: VideoEncoderInit): void;

  static isConfigSupported(
    config: VideoEncoderConfig,
  ): Promise<VideoEncoderSupport>;
  close(): void;
  configure(config: VideoEncoderConfig): void;
  encode(frame: VideoFrame, options?: VideoEncoderEncodeOptions): void;
  flush(): Promise<void>;
  reset(): void;
}

declare class VideoFrame {
  +codedHeight: number;
  +codedRect: DOMRectReadOnly | null;
  +codedWidth: number;
  +colorSpace: VideoColorSpace;
  +displayHeight: number;
  +displayWidth: number;
  +duration: number | null;
  +flip: boolean;
  +format: VideoPixelFormat | null;
  +rotation: number;
  +timestamp: number;
  +visibleRect: DOMRectReadOnly | null;

  constructor(image: CanvasImageSource, init?: VideoFrameInit): void;
  constructor(data: AllowSharedBufferSource, init: VideoFrameBufferInit): void;

  allocationSize(options?: VideoFrameCopyToOptions): number;
  clone(): VideoFrame;
  close(): void;
  copyTo(
    destination: AllowSharedBufferSource,
    options?: VideoFrameCopyToOptions,
  ): Promise<Array<PlaneLayout>>;
  metadata(): VideoFrameMetadata;
}

/*---------- webcrypto-secure-curves ----------*/

type Ed448Params = {
  ...Algorithm,
  context: BufferSource,
};

/*---------- webcrypto ----------*/

// Contributes to:
//   - WindowOrWorkerGlobalScope

type AlgorithmIdentifier = Object | string;

type BigInteger = Uint8Array;

type HashAlgorithmIdentifier = AlgorithmIdentifier;

type NamedCurve = string;

type KeyFormat = 'raw' | 'spki' | 'pkcs8' | 'jwk';

type KeyType = 'public' | 'private' | 'secret';

type KeyUsage =
  | 'encrypt'
  | 'decrypt'
  | 'sign'
  | 'verify'
  | 'deriveKey'
  | 'deriveBits'
  | 'wrapKey'
  | 'unwrapKey';

type AesCbcParams = {
  ...Algorithm,
  iv: BufferSource,
};

type AesCtrParams = {
  ...Algorithm,
  counter: BufferSource,
  length: number,
};

type AesDerivedKeyParams = {
  ...Algorithm,
  length: number,
};

type AesGcmParams = {
  ...Algorithm,
  additionalData: BufferSource,
  iv: BufferSource,
  tagLength: number,
};

type AesKeyAlgorithm = {
  ...KeyAlgorithm,
  length: number,
};

type AesKeyGenParams = {
  ...Algorithm,
  length: number,
};

type Algorithm = {
  name: string,
};

type CryptoKeyPair = {
  privateKey: CryptoKey,
  publicKey: CryptoKey,
};

type EcdhKeyDeriveParams = {
  ...Algorithm,
  public: CryptoKey,
};

type EcdsaParams = {
  ...Algorithm,
  hash: HashAlgorithmIdentifier,
};

type EcKeyAlgorithm = {
  ...KeyAlgorithm,
  namedCurve: NamedCurve,
};

type EcKeyGenParams = {
  ...Algorithm,
  namedCurve: NamedCurve,
};

type EcKeyImportParams = {
  ...Algorithm,
  namedCurve: NamedCurve,
};

type HkdfParams = {
  ...Algorithm,
  hash: HashAlgorithmIdentifier,
  info: BufferSource,
  salt: BufferSource,
};

type HmacImportParams = {
  ...Algorithm,
  hash: HashAlgorithmIdentifier,
  length: number,
};

type HmacKeyAlgorithm = {
  ...KeyAlgorithm,
  hash: KeyAlgorithm,
  length: number,
};

type HmacKeyGenParams = {
  ...Algorithm,
  hash: HashAlgorithmIdentifier,
  length: number,
};

type JsonWebKey = {
  alg: string,
  crv: string,
  d: string,
  dp: string,
  dq: string,
  e: string,
  ext: boolean,
  k: string,
  key_ops: Array<string>,
  kty: string,
  n: string,
  oth: Array<RsaOtherPrimesInfo>,
  p: string,
  q: string,
  qi: string,
  use: string,
  x: string,
  y: string,
};

type KeyAlgorithm = {
  name: string,
};

type Pbkdf2Params = {
  ...Algorithm,
  hash: HashAlgorithmIdentifier,
  iterations: number,
  salt: BufferSource,
};

type RsaHashedImportParams = {
  ...Algorithm,
  hash: HashAlgorithmIdentifier,
};

type RsaHashedKeyAlgorithm = {
  ...RsaKeyAlgorithm,
  hash: KeyAlgorithm,
};

type RsaHashedKeyGenParams = {
  ...RsaKeyGenParams,
  hash: HashAlgorithmIdentifier,
};

type RsaKeyAlgorithm = {
  ...KeyAlgorithm,
  modulusLength: number,
  publicExponent: BigInteger,
};

type RsaKeyGenParams = {
  ...Algorithm,
  modulusLength: number,
  publicExponent: BigInteger,
};

type RsaOaepParams = {
  ...Algorithm,
  label: BufferSource,
};

type RsaOtherPrimesInfo = {
  d: string,
  r: string,
  t: string,
};

type RsaPssParams = {
  ...Algorithm,
  saltLength: number,
};

declare class Crypto {
  +subtle: SubtleCrypto;

  getRandomValues(array: ArrayBufferView): ArrayBufferView;
  randomUUID(): string;
}

declare class CryptoKey {
  +algorithm: Object;
  +extractable: boolean;
  +type: KeyType;
  +usages: Object;
}

declare class SubtleCrypto {
  decrypt(
    algorithm: AlgorithmIdentifier,
    key: CryptoKey,
    data: BufferSource,
  ): Promise<ArrayBuffer>;
  deriveBits(
    algorithm: AlgorithmIdentifier,
    baseKey: CryptoKey,
    length?: number | null,
  ): Promise<ArrayBuffer>;
  deriveKey(
    algorithm: AlgorithmIdentifier,
    baseKey: CryptoKey,
    derivedKeyType: AlgorithmIdentifier,
    extractable: boolean,
    keyUsages: Array<KeyUsage>,
  ): Promise<CryptoKey>;
  digest(
    algorithm: AlgorithmIdentifier,
    data: BufferSource,
  ): Promise<ArrayBuffer>;
  encrypt(
    algorithm: AlgorithmIdentifier,
    key: CryptoKey,
    data: BufferSource,
  ): Promise<ArrayBuffer>;
  exportKey(
    format: KeyFormat,
    key: CryptoKey,
  ): Promise<ArrayBuffer | JsonWebKey>;
  generateKey(
    algorithm: AlgorithmIdentifier,
    extractable: boolean,
    keyUsages: Array<KeyUsage>,
  ): Promise<CryptoKey | CryptoKeyPair>;
  importKey(
    format: KeyFormat,
    keyData: BufferSource | JsonWebKey,
    algorithm: AlgorithmIdentifier,
    extractable: boolean,
    keyUsages: Array<KeyUsage>,
  ): Promise<CryptoKey>;
  sign(
    algorithm: AlgorithmIdentifier,
    key: CryptoKey,
    data: BufferSource,
  ): Promise<ArrayBuffer>;
  unwrapKey(
    format: KeyFormat,
    wrappedKey: BufferSource,
    unwrappingKey: CryptoKey,
    unwrapAlgorithm: AlgorithmIdentifier,
    unwrappedKeyAlgorithm: AlgorithmIdentifier,
    extractable: boolean,
    keyUsages: Array<KeyUsage>,
  ): Promise<CryptoKey>;
  verify(
    algorithm: AlgorithmIdentifier,
    key: CryptoKey,
    signature: BufferSource,
    data: BufferSource,
  ): Promise<boolean>;
  wrapKey(
    format: KeyFormat,
    key: CryptoKey,
    wrappingKey: CryptoKey,
    wrapAlgorithm: AlgorithmIdentifier,
  ): Promise<ArrayBuffer>;
}

/*---------- webdriver ----------*/

declare class mixin$NavigatorAutomationInformation {
  +webdriver: boolean;
}

/*---------- webgl1 ----------*/

type Float32List = Float32Array | Array<GLfloat>;

type GLbitfield = number;

type GLboolean = boolean;

type GLbyte = number;

type GLclampf = number;

type GLenum = number;

type GLfloat = number;

type GLint = number;

type GLintptr = number;

type GLshort = number;

type GLsizei = number;

type GLsizeiptr = number;

type GLubyte = number;

type GLuint = number;

type GLushort = number;

type Int32List = Int32Array | Array<GLint>;

type TexImageSource =
  | ImageBitmap
  | ImageData
  | HTMLImageElement
  | HTMLCanvasElement
  | HTMLVideoElement
  | OffscreenCanvas
  | VideoFrame;

type WebGLPowerPreference = 'default' | 'low-power' | 'high-performance';

type WebGLContextAttributes = {
  alpha: boolean,
  antialias: boolean,
  depth: boolean,
  desynchronized: boolean,
  failIfMajorPerformanceCaveat: boolean,
  powerPreference: WebGLPowerPreference,
  premultipliedAlpha: boolean,
  preserveDrawingBuffer: boolean,
  stencil: boolean,
  xrCompatible: boolean,
};

type WebGLContextEventInit = {
  ...EventInit,
  statusMessage: string,
};

declare class WebGLActiveInfo {
  +name: string;
  +size: GLint;
  +type: GLenum;
}

declare class WebGLBuffer extends WebGLObject {}

declare class WebGLContextEvent extends Event {
  +statusMessage: string;

  constructor(type: string, eventInit?: WebGLContextEventInit): void;
}

declare class WebGLFramebuffer extends WebGLObject {}

declare class WebGLObject {
  label: string;
}

declare class WebGLProgram extends WebGLObject {}

declare class WebGLRenderbuffer extends WebGLObject {}

declare class WebGLRenderingContext
  mixins mixin$WebGLRenderingContextBase, mixin$WebGLRenderingContextOverloads
{
  static +ACTIVE_ATTRIBUTES: 0x8b89;
  static +ACTIVE_TEXTURE: 0x84e0;
  static +ACTIVE_UNIFORMS: 0x8b86;
  static +ALIASED_LINE_WIDTH_RANGE: 0x846e;
  static +ALIASED_POINT_SIZE_RANGE: 0x846d;
  static +ALPHA: 0x1906;
  static +ALPHA_BITS: 0x0d55;
  static +ALWAYS: 0x0207;
  static +ARRAY_BUFFER: 0x8892;
  static +ARRAY_BUFFER_BINDING: 0x8894;
  static +ATTACHED_SHADERS: 0x8b85;
  static +BACK: 0x0405;
  static +BLEND: 0x0be2;
  static +BLEND_COLOR: 0x8005;
  static +BLEND_DST_ALPHA: 0x80ca;
  static +BLEND_DST_RGB: 0x80c8;
  static +BLEND_EQUATION: 0x8009;
  static +BLEND_EQUATION_ALPHA: 0x883d;
  static +BLEND_EQUATION_RGB: 0x8009;
  static +BLEND_SRC_ALPHA: 0x80cb;
  static +BLEND_SRC_RGB: 0x80c9;
  static +BLUE_BITS: 0x0d54;
  static +BOOL: 0x8b56;
  static +BOOL_VEC2: 0x8b57;
  static +BOOL_VEC3: 0x8b58;
  static +BOOL_VEC4: 0x8b59;
  static +BROWSER_DEFAULT_WEBGL: 0x9244;
  static +BUFFER_SIZE: 0x8764;
  static +BUFFER_USAGE: 0x8765;
  static +BYTE: 0x1400;
  static +CCW: 0x0901;
  static +CLAMP_TO_EDGE: 0x812f;
  static +COLOR_ATTACHMENT0: 0x8ce0;
  static +COLOR_BUFFER_BIT: 0x00004000;
  static +COLOR_CLEAR_VALUE: 0x0c22;
  static +COLOR_WRITEMASK: 0x0c23;
  static +COMPILE_STATUS: 0x8b81;
  static +COMPRESSED_TEXTURE_FORMATS: 0x86a3;
  static +CONSTANT_ALPHA: 0x8003;
  static +CONSTANT_COLOR: 0x8001;
  static +CONTEXT_LOST_WEBGL: 0x9242;
  static +CULL_FACE: 0x0b44;
  static +CULL_FACE_MODE: 0x0b45;
  static +CURRENT_PROGRAM: 0x8b8d;
  static +CURRENT_VERTEX_ATTRIB: 0x8626;
  static +CW: 0x0900;
  static +DECR: 0x1e03;
  static +DECR_WRAP: 0x8508;
  static +DELETE_STATUS: 0x8b80;
  static +DEPTH_ATTACHMENT: 0x8d00;
  static +DEPTH_BITS: 0x0d56;
  static +DEPTH_BUFFER_BIT: 0x00000100;
  static +DEPTH_CLEAR_VALUE: 0x0b73;
  static +DEPTH_COMPONENT: 0x1902;
  static +DEPTH_COMPONENT16: 0x81a5;
  static +DEPTH_FUNC: 0x0b74;
  static +DEPTH_RANGE: 0x0b70;
  static +DEPTH_STENCIL: 0x84f9;
  static +DEPTH_STENCIL_ATTACHMENT: 0x821a;
  static +DEPTH_TEST: 0x0b71;
  static +DEPTH_WRITEMASK: 0x0b72;
  static +DITHER: 0x0bd0;
  static +DONT_CARE: 0x1100;
  static +DST_ALPHA: 0x0304;
  static +DST_COLOR: 0x0306;
  static +DYNAMIC_DRAW: 0x88e8;
  static +ELEMENT_ARRAY_BUFFER: 0x8893;
  static +ELEMENT_ARRAY_BUFFER_BINDING: 0x8895;
  static +EQUAL: 0x0202;
  static +FASTEST: 0x1101;
  static +FLOAT: 0x1406;
  static +FLOAT_MAT2: 0x8b5a;
  static +FLOAT_MAT3: 0x8b5b;
  static +FLOAT_MAT4: 0x8b5c;
  static +FLOAT_VEC2: 0x8b50;
  static +FLOAT_VEC3: 0x8b51;
  static +FLOAT_VEC4: 0x8b52;
  static +FRAGMENT_SHADER: 0x8b30;
  static +FRAMEBUFFER: 0x8d40;
  static +FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: 0x8cd1;
  static +FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: 0x8cd0;
  static +FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: 0x8cd3;
  static +FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: 0x8cd2;
  static +FRAMEBUFFER_BINDING: 0x8ca6;
  static +FRAMEBUFFER_COMPLETE: 0x8cd5;
  static +FRAMEBUFFER_INCOMPLETE_ATTACHMENT: 0x8cd6;
  static +FRAMEBUFFER_INCOMPLETE_DIMENSIONS: 0x8cd9;
  static +FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: 0x8cd7;
  static +FRAMEBUFFER_UNSUPPORTED: 0x8cdd;
  static +FRONT: 0x0404;
  static +FRONT_AND_BACK: 0x0408;
  static +FRONT_FACE: 0x0b46;
  static +FUNC_ADD: 0x8006;
  static +FUNC_REVERSE_SUBTRACT: 0x800b;
  static +FUNC_SUBTRACT: 0x800a;
  static +GENERATE_MIPMAP_HINT: 0x8192;
  static +GEQUAL: 0x0206;
  static +GREATER: 0x0204;
  static +GREEN_BITS: 0x0d53;
  static +HIGH_FLOAT: 0x8df2;
  static +HIGH_INT: 0x8df5;
  static +IMPLEMENTATION_COLOR_READ_FORMAT: 0x8b9b;
  static +IMPLEMENTATION_COLOR_READ_TYPE: 0x8b9a;
  static +INCR: 0x1e02;
  static +INCR_WRAP: 0x8507;
  static +INT: 0x1404;
  static +INT_VEC2: 0x8b53;
  static +INT_VEC3: 0x8b54;
  static +INT_VEC4: 0x8b55;
  static +INVALID_ENUM: 0x0500;
  static +INVALID_FRAMEBUFFER_OPERATION: 0x0506;
  static +INVALID_OPERATION: 0x0502;
  static +INVALID_VALUE: 0x0501;
  static +INVERT: 0x150a;
  static +KEEP: 0x1e00;
  static +LEQUAL: 0x0203;
  static +LESS: 0x0201;
  static +LINE_LOOP: 0x0002;
  static +LINE_STRIP: 0x0003;
  static +LINE_WIDTH: 0x0b21;
  static +LINEAR: 0x2601;
  static +LINEAR_MIPMAP_LINEAR: 0x2703;
  static +LINEAR_MIPMAP_NEAREST: 0x2701;
  static +LINES: 0x0001;
  static +LINK_STATUS: 0x8b82;
  static +LOW_FLOAT: 0x8df0;
  static +LOW_INT: 0x8df3;
  static +LUMINANCE: 0x1909;
  static +LUMINANCE_ALPHA: 0x190a;
  static +MAX_COMBINED_TEXTURE_IMAGE_UNITS: 0x8b4d;
  static +MAX_CUBE_MAP_TEXTURE_SIZE: 0x851c;
  static +MAX_FRAGMENT_UNIFORM_VECTORS: 0x8dfd;
  static +MAX_RENDERBUFFER_SIZE: 0x84e8;
  static +MAX_TEXTURE_IMAGE_UNITS: 0x8872;
  static +MAX_TEXTURE_SIZE: 0x0d33;
  static +MAX_VARYING_VECTORS: 0x8dfc;
  static +MAX_VERTEX_ATTRIBS: 0x8869;
  static +MAX_VERTEX_TEXTURE_IMAGE_UNITS: 0x8b4c;
  static +MAX_VERTEX_UNIFORM_VECTORS: 0x8dfb;
  static +MAX_VIEWPORT_DIMS: 0x0d3a;
  static +MEDIUM_FLOAT: 0x8df1;
  static +MEDIUM_INT: 0x8df4;
  static +MIRRORED_REPEAT: 0x8370;
  static +NEAREST: 0x2600;
  static +NEAREST_MIPMAP_LINEAR: 0x2702;
  static +NEAREST_MIPMAP_NEAREST: 0x2700;
  static +NEVER: 0x0200;
  static +NICEST: 0x1102;
  static +NO_ERROR: 0;
  static +NONE: 0;
  static +NOTEQUAL: 0x0205;
  static +ONE: 1;
  static +ONE_MINUS_CONSTANT_ALPHA: 0x8004;
  static +ONE_MINUS_CONSTANT_COLOR: 0x8002;
  static +ONE_MINUS_DST_ALPHA: 0x0305;
  static +ONE_MINUS_DST_COLOR: 0x0307;
  static +ONE_MINUS_SRC_ALPHA: 0x0303;
  static +ONE_MINUS_SRC_COLOR: 0x0301;
  static +OUT_OF_MEMORY: 0x0505;
  static +PACK_ALIGNMENT: 0x0d05;
  static +POINTS: 0x0000;
  static +POLYGON_OFFSET_FACTOR: 0x8038;
  static +POLYGON_OFFSET_FILL: 0x8037;
  static +POLYGON_OFFSET_UNITS: 0x2a00;
  static +RED_BITS: 0x0d52;
  static +RENDERBUFFER: 0x8d41;
  static +RENDERBUFFER_ALPHA_SIZE: 0x8d53;
  static +RENDERBUFFER_BINDING: 0x8ca7;
  static +RENDERBUFFER_BLUE_SIZE: 0x8d52;
  static +RENDERBUFFER_DEPTH_SIZE: 0x8d54;
  static +RENDERBUFFER_GREEN_SIZE: 0x8d51;
  static +RENDERBUFFER_HEIGHT: 0x8d43;
  static +RENDERBUFFER_INTERNAL_FORMAT: 0x8d44;
  static +RENDERBUFFER_RED_SIZE: 0x8d50;
  static +RENDERBUFFER_STENCIL_SIZE: 0x8d55;
  static +RENDERBUFFER_WIDTH: 0x8d42;
  static +RENDERER: 0x1f01;
  static +REPEAT: 0x2901;
  static +REPLACE: 0x1e01;
  static +RGB: 0x1907;
  static +RGB5_A1: 0x8057;
  static +RGB565: 0x8d62;
  static +RGBA: 0x1908;
  static +RGBA4: 0x8056;
  static +RGBA8: 0x8058;
  static +SAMPLE_ALPHA_TO_COVERAGE: 0x809e;
  static +SAMPLE_BUFFERS: 0x80a8;
  static +SAMPLE_COVERAGE: 0x80a0;
  static +SAMPLE_COVERAGE_INVERT: 0x80ab;
  static +SAMPLE_COVERAGE_VALUE: 0x80aa;
  static +SAMPLER_2D: 0x8b5e;
  static +SAMPLER_CUBE: 0x8b60;
  static +SAMPLES: 0x80a9;
  static +SCISSOR_BOX: 0x0c10;
  static +SCISSOR_TEST: 0x0c11;
  static +SHADER_TYPE: 0x8b4f;
  static +SHADING_LANGUAGE_VERSION: 0x8b8c;
  static +SHORT: 0x1402;
  static +SRC_ALPHA: 0x0302;
  static +SRC_ALPHA_SATURATE: 0x0308;
  static +SRC_COLOR: 0x0300;
  static +STATIC_DRAW: 0x88e4;
  static +STENCIL_ATTACHMENT: 0x8d20;
  static +STENCIL_BACK_FAIL: 0x8801;
  static +STENCIL_BACK_FUNC: 0x8800;
  static +STENCIL_BACK_PASS_DEPTH_FAIL: 0x8802;
  static +STENCIL_BACK_PASS_DEPTH_PASS: 0x8803;
  static +STENCIL_BACK_REF: 0x8ca3;
  static +STENCIL_BACK_VALUE_MASK: 0x8ca4;
  static +STENCIL_BACK_WRITEMASK: 0x8ca5;
  static +STENCIL_BITS: 0x0d57;
  static +STENCIL_BUFFER_BIT: 0x00000400;
  static +STENCIL_CLEAR_VALUE: 0x0b91;
  static +STENCIL_FAIL: 0x0b94;
  static +STENCIL_FUNC: 0x0b92;
  static +STENCIL_INDEX8: 0x8d48;
  static +STENCIL_PASS_DEPTH_FAIL: 0x0b95;
  static +STENCIL_PASS_DEPTH_PASS: 0x0b96;
  static +STENCIL_REF: 0x0b97;
  static +STENCIL_TEST: 0x0b90;
  static +STENCIL_VALUE_MASK: 0x0b93;
  static +STENCIL_WRITEMASK: 0x0b98;
  static +STREAM_DRAW: 0x88e0;
  static +SUBPIXEL_BITS: 0x0d50;
  static +TEXTURE: 0x1702;
  static +TEXTURE_2D: 0x0de1;
  static +TEXTURE_BINDING_2D: 0x8069;
  static +TEXTURE_BINDING_CUBE_MAP: 0x8514;
  static +TEXTURE_CUBE_MAP: 0x8513;
  static +TEXTURE_CUBE_MAP_NEGATIVE_X: 0x8516;
  static +TEXTURE_CUBE_MAP_NEGATIVE_Y: 0x8518;
  static +TEXTURE_CUBE_MAP_NEGATIVE_Z: 0x851a;
  static +TEXTURE_CUBE_MAP_POSITIVE_X: 0x8515;
  static +TEXTURE_CUBE_MAP_POSITIVE_Y: 0x8517;
  static +TEXTURE_CUBE_MAP_POSITIVE_Z: 0x8519;
  static +TEXTURE_MAG_FILTER: 0x2800;
  static +TEXTURE_MIN_FILTER: 0x2801;
  static +TEXTURE_WRAP_S: 0x2802;
  static +TEXTURE_WRAP_T: 0x2803;
  static +TEXTURE0: 0x84c0;
  static +TEXTURE1: 0x84c1;
  static +TEXTURE10: 0x84ca;
  static +TEXTURE11: 0x84cb;
  static +TEXTURE12: 0x84cc;
  static +TEXTURE13: 0x84cd;
  static +TEXTURE14: 0x84ce;
  static +TEXTURE15: 0x84cf;
  static +TEXTURE16: 0x84d0;
  static +TEXTURE17: 0x84d1;
  static +TEXTURE18: 0x84d2;
  static +TEXTURE19: 0x84d3;
  static +TEXTURE2: 0x84c2;
  static +TEXTURE20: 0x84d4;
  static +TEXTURE21: 0x84d5;
  static +TEXTURE22: 0x84d6;
  static +TEXTURE23: 0x84d7;
  static +TEXTURE24: 0x84d8;
  static +TEXTURE25: 0x84d9;
  static +TEXTURE26: 0x84da;
  static +TEXTURE27: 0x84db;
  static +TEXTURE28: 0x84dc;
  static +TEXTURE29: 0x84dd;
  static +TEXTURE3: 0x84c3;
  static +TEXTURE30: 0x84de;
  static +TEXTURE31: 0x84df;
  static +TEXTURE4: 0x84c4;
  static +TEXTURE5: 0x84c5;
  static +TEXTURE6: 0x84c6;
  static +TEXTURE7: 0x84c7;
  static +TEXTURE8: 0x84c8;
  static +TEXTURE9: 0x84c9;
  static +TRIANGLE_FAN: 0x0006;
  static +TRIANGLE_STRIP: 0x0005;
  static +TRIANGLES: 0x0004;
  static +UNPACK_ALIGNMENT: 0x0cf5;
  static +UNPACK_COLORSPACE_CONVERSION_WEBGL: 0x9243;
  static +UNPACK_FLIP_Y_WEBGL: 0x9240;
  static +UNPACK_PREMULTIPLY_ALPHA_WEBGL: 0x9241;
  static +UNSIGNED_BYTE: 0x1401;
  static +UNSIGNED_INT: 0x1405;
  static +UNSIGNED_SHORT: 0x1403;
  static +UNSIGNED_SHORT_4_4_4_4: 0x8033;
  static +UNSIGNED_SHORT_5_5_5_1: 0x8034;
  static +UNSIGNED_SHORT_5_6_5: 0x8363;
  static +VALIDATE_STATUS: 0x8b83;
  static +VENDOR: 0x1f00;
  static +VERSION: 0x1f02;
  static +VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: 0x889f;
  static +VERTEX_ATTRIB_ARRAY_ENABLED: 0x8622;
  static +VERTEX_ATTRIB_ARRAY_NORMALIZED: 0x886a;
  static +VERTEX_ATTRIB_ARRAY_POINTER: 0x8645;
  static +VERTEX_ATTRIB_ARRAY_SIZE: 0x8623;
  static +VERTEX_ATTRIB_ARRAY_STRIDE: 0x8624;
  static +VERTEX_ATTRIB_ARRAY_TYPE: 0x8625;
  static +VERTEX_SHADER: 0x8b31;
  static +VIEWPORT: 0x0ba2;
  static +ZERO: 0;
}

declare class WebGLShader extends WebGLObject {}

declare class WebGLShaderPrecisionFormat {
  +precision: GLint;
  +rangeMax: GLint;
  +rangeMin: GLint;
}

declare class WebGLTexture extends WebGLObject {}

declare class WebGLUniformLocation {}

declare class mixin$WebGLRenderingContextBase {
  static +ACTIVE_ATTRIBUTES: 0x8b89;
  static +ACTIVE_TEXTURE: 0x84e0;
  static +ACTIVE_UNIFORMS: 0x8b86;
  static +ALIASED_LINE_WIDTH_RANGE: 0x846e;
  static +ALIASED_POINT_SIZE_RANGE: 0x846d;
  static +ALPHA: 0x1906;
  static +ALPHA_BITS: 0x0d55;
  static +ALWAYS: 0x0207;
  static +ARRAY_BUFFER: 0x8892;
  static +ARRAY_BUFFER_BINDING: 0x8894;
  static +ATTACHED_SHADERS: 0x8b85;
  static +BACK: 0x0405;
  static +BLEND: 0x0be2;
  static +BLEND_COLOR: 0x8005;
  static +BLEND_DST_ALPHA: 0x80ca;
  static +BLEND_DST_RGB: 0x80c8;
  static +BLEND_EQUATION: 0x8009;
  static +BLEND_EQUATION_ALPHA: 0x883d;
  static +BLEND_EQUATION_RGB: 0x8009;
  static +BLEND_SRC_ALPHA: 0x80cb;
  static +BLEND_SRC_RGB: 0x80c9;
  static +BLUE_BITS: 0x0d54;
  static +BOOL: 0x8b56;
  static +BOOL_VEC2: 0x8b57;
  static +BOOL_VEC3: 0x8b58;
  static +BOOL_VEC4: 0x8b59;
  static +BROWSER_DEFAULT_WEBGL: 0x9244;
  static +BUFFER_SIZE: 0x8764;
  static +BUFFER_USAGE: 0x8765;
  static +BYTE: 0x1400;
  static +CCW: 0x0901;
  static +CLAMP_TO_EDGE: 0x812f;
  static +COLOR_ATTACHMENT0: 0x8ce0;
  static +COLOR_BUFFER_BIT: 0x00004000;
  static +COLOR_CLEAR_VALUE: 0x0c22;
  static +COLOR_WRITEMASK: 0x0c23;
  static +COMPILE_STATUS: 0x8b81;
  static +COMPRESSED_TEXTURE_FORMATS: 0x86a3;
  static +CONSTANT_ALPHA: 0x8003;
  static +CONSTANT_COLOR: 0x8001;
  static +CONTEXT_LOST_WEBGL: 0x9242;
  static +CULL_FACE: 0x0b44;
  static +CULL_FACE_MODE: 0x0b45;
  static +CURRENT_PROGRAM: 0x8b8d;
  static +CURRENT_VERTEX_ATTRIB: 0x8626;
  static +CW: 0x0900;
  static +DECR: 0x1e03;
  static +DECR_WRAP: 0x8508;
  static +DELETE_STATUS: 0x8b80;
  static +DEPTH_ATTACHMENT: 0x8d00;
  static +DEPTH_BITS: 0x0d56;
  static +DEPTH_BUFFER_BIT: 0x00000100;
  static +DEPTH_CLEAR_VALUE: 0x0b73;
  static +DEPTH_COMPONENT: 0x1902;
  static +DEPTH_COMPONENT16: 0x81a5;
  static +DEPTH_FUNC: 0x0b74;
  static +DEPTH_RANGE: 0x0b70;
  static +DEPTH_STENCIL: 0x84f9;
  static +DEPTH_STENCIL_ATTACHMENT: 0x821a;
  static +DEPTH_TEST: 0x0b71;
  static +DEPTH_WRITEMASK: 0x0b72;
  static +DITHER: 0x0bd0;
  static +DONT_CARE: 0x1100;
  static +DST_ALPHA: 0x0304;
  static +DST_COLOR: 0x0306;
  static +DYNAMIC_DRAW: 0x88e8;
  static +ELEMENT_ARRAY_BUFFER: 0x8893;
  static +ELEMENT_ARRAY_BUFFER_BINDING: 0x8895;
  static +EQUAL: 0x0202;
  static +FASTEST: 0x1101;
  static +FLOAT: 0x1406;
  static +FLOAT_MAT2: 0x8b5a;
  static +FLOAT_MAT3: 0x8b5b;
  static +FLOAT_MAT4: 0x8b5c;
  static +FLOAT_VEC2: 0x8b50;
  static +FLOAT_VEC3: 0x8b51;
  static +FLOAT_VEC4: 0x8b52;
  static +FRAGMENT_SHADER: 0x8b30;
  static +FRAMEBUFFER: 0x8d40;
  static +FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: 0x8cd1;
  static +FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: 0x8cd0;
  static +FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: 0x8cd3;
  static +FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: 0x8cd2;
  static +FRAMEBUFFER_BINDING: 0x8ca6;
  static +FRAMEBUFFER_COMPLETE: 0x8cd5;
  static +FRAMEBUFFER_INCOMPLETE_ATTACHMENT: 0x8cd6;
  static +FRAMEBUFFER_INCOMPLETE_DIMENSIONS: 0x8cd9;
  static +FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: 0x8cd7;
  static +FRAMEBUFFER_UNSUPPORTED: 0x8cdd;
  static +FRONT: 0x0404;
  static +FRONT_AND_BACK: 0x0408;
  static +FRONT_FACE: 0x0b46;
  static +FUNC_ADD: 0x8006;
  static +FUNC_REVERSE_SUBTRACT: 0x800b;
  static +FUNC_SUBTRACT: 0x800a;
  static +GENERATE_MIPMAP_HINT: 0x8192;
  static +GEQUAL: 0x0206;
  static +GREATER: 0x0204;
  static +GREEN_BITS: 0x0d53;
  static +HIGH_FLOAT: 0x8df2;
  static +HIGH_INT: 0x8df5;
  static +IMPLEMENTATION_COLOR_READ_FORMAT: 0x8b9b;
  static +IMPLEMENTATION_COLOR_READ_TYPE: 0x8b9a;
  static +INCR: 0x1e02;
  static +INCR_WRAP: 0x8507;
  static +INT: 0x1404;
  static +INT_VEC2: 0x8b53;
  static +INT_VEC3: 0x8b54;
  static +INT_VEC4: 0x8b55;
  static +INVALID_ENUM: 0x0500;
  static +INVALID_FRAMEBUFFER_OPERATION: 0x0506;
  static +INVALID_OPERATION: 0x0502;
  static +INVALID_VALUE: 0x0501;
  static +INVERT: 0x150a;
  static +KEEP: 0x1e00;
  static +LEQUAL: 0x0203;
  static +LESS: 0x0201;
  static +LINE_LOOP: 0x0002;
  static +LINE_STRIP: 0x0003;
  static +LINE_WIDTH: 0x0b21;
  static +LINEAR: 0x2601;
  static +LINEAR_MIPMAP_LINEAR: 0x2703;
  static +LINEAR_MIPMAP_NEAREST: 0x2701;
  static +LINES: 0x0001;
  static +LINK_STATUS: 0x8b82;
  static +LOW_FLOAT: 0x8df0;
  static +LOW_INT: 0x8df3;
  static +LUMINANCE: 0x1909;
  static +LUMINANCE_ALPHA: 0x190a;
  static +MAX_COMBINED_TEXTURE_IMAGE_UNITS: 0x8b4d;
  static +MAX_CUBE_MAP_TEXTURE_SIZE: 0x851c;
  static +MAX_FRAGMENT_UNIFORM_VECTORS: 0x8dfd;
  static +MAX_RENDERBUFFER_SIZE: 0x84e8;
  static +MAX_TEXTURE_IMAGE_UNITS: 0x8872;
  static +MAX_TEXTURE_SIZE: 0x0d33;
  static +MAX_VARYING_VECTORS: 0x8dfc;
  static +MAX_VERTEX_ATTRIBS: 0x8869;
  static +MAX_VERTEX_TEXTURE_IMAGE_UNITS: 0x8b4c;
  static +MAX_VERTEX_UNIFORM_VECTORS: 0x8dfb;
  static +MAX_VIEWPORT_DIMS: 0x0d3a;
  static +MEDIUM_FLOAT: 0x8df1;
  static +MEDIUM_INT: 0x8df4;
  static +MIRRORED_REPEAT: 0x8370;
  static +NEAREST: 0x2600;
  static +NEAREST_MIPMAP_LINEAR: 0x2702;
  static +NEAREST_MIPMAP_NEAREST: 0x2700;
  static +NEVER: 0x0200;
  static +NICEST: 0x1102;
  static +NO_ERROR: 0;
  static +NONE: 0;
  static +NOTEQUAL: 0x0205;
  static +ONE: 1;
  static +ONE_MINUS_CONSTANT_ALPHA: 0x8004;
  static +ONE_MINUS_CONSTANT_COLOR: 0x8002;
  static +ONE_MINUS_DST_ALPHA: 0x0305;
  static +ONE_MINUS_DST_COLOR: 0x0307;
  static +ONE_MINUS_SRC_ALPHA: 0x0303;
  static +ONE_MINUS_SRC_COLOR: 0x0301;
  static +OUT_OF_MEMORY: 0x0505;
  static +PACK_ALIGNMENT: 0x0d05;
  static +POINTS: 0x0000;
  static +POLYGON_OFFSET_FACTOR: 0x8038;
  static +POLYGON_OFFSET_FILL: 0x8037;
  static +POLYGON_OFFSET_UNITS: 0x2a00;
  static +RED_BITS: 0x0d52;
  static +RENDERBUFFER: 0x8d41;
  static +RENDERBUFFER_ALPHA_SIZE: 0x8d53;
  static +RENDERBUFFER_BINDING: 0x8ca7;
  static +RENDERBUFFER_BLUE_SIZE: 0x8d52;
  static +RENDERBUFFER_DEPTH_SIZE: 0x8d54;
  static +RENDERBUFFER_GREEN_SIZE: 0x8d51;
  static +RENDERBUFFER_HEIGHT: 0x8d43;
  static +RENDERBUFFER_INTERNAL_FORMAT: 0x8d44;
  static +RENDERBUFFER_RED_SIZE: 0x8d50;
  static +RENDERBUFFER_STENCIL_SIZE: 0x8d55;
  static +RENDERBUFFER_WIDTH: 0x8d42;
  static +RENDERER: 0x1f01;
  static +REPEAT: 0x2901;
  static +REPLACE: 0x1e01;
  static +RGB: 0x1907;
  static +RGB5_A1: 0x8057;
  static +RGB565: 0x8d62;
  static +RGBA: 0x1908;
  static +RGBA4: 0x8056;
  static +RGBA8: 0x8058;
  static +SAMPLE_ALPHA_TO_COVERAGE: 0x809e;
  static +SAMPLE_BUFFERS: 0x80a8;
  static +SAMPLE_COVERAGE: 0x80a0;
  static +SAMPLE_COVERAGE_INVERT: 0x80ab;
  static +SAMPLE_COVERAGE_VALUE: 0x80aa;
  static +SAMPLER_2D: 0x8b5e;
  static +SAMPLER_CUBE: 0x8b60;
  static +SAMPLES: 0x80a9;
  static +SCISSOR_BOX: 0x0c10;
  static +SCISSOR_TEST: 0x0c11;
  static +SHADER_TYPE: 0x8b4f;
  static +SHADING_LANGUAGE_VERSION: 0x8b8c;
  static +SHORT: 0x1402;
  static +SRC_ALPHA: 0x0302;
  static +SRC_ALPHA_SATURATE: 0x0308;
  static +SRC_COLOR: 0x0300;
  static +STATIC_DRAW: 0x88e4;
  static +STENCIL_ATTACHMENT: 0x8d20;
  static +STENCIL_BACK_FAIL: 0x8801;
  static +STENCIL_BACK_FUNC: 0x8800;
  static +STENCIL_BACK_PASS_DEPTH_FAIL: 0x8802;
  static +STENCIL_BACK_PASS_DEPTH_PASS: 0x8803;
  static +STENCIL_BACK_REF: 0x8ca3;
  static +STENCIL_BACK_VALUE_MASK: 0x8ca4;
  static +STENCIL_BACK_WRITEMASK: 0x8ca5;
  static +STENCIL_BITS: 0x0d57;
  static +STENCIL_BUFFER_BIT: 0x00000400;
  static +STENCIL_CLEAR_VALUE: 0x0b91;
  static +STENCIL_FAIL: 0x0b94;
  static +STENCIL_FUNC: 0x0b92;
  static +STENCIL_INDEX8: 0x8d48;
  static +STENCIL_PASS_DEPTH_FAIL: 0x0b95;
  static +STENCIL_PASS_DEPTH_PASS: 0x0b96;
  static +STENCIL_REF: 0x0b97;
  static +STENCIL_TEST: 0x0b90;
  static +STENCIL_VALUE_MASK: 0x0b93;
  static +STENCIL_WRITEMASK: 0x0b98;
  static +STREAM_DRAW: 0x88e0;
  static +SUBPIXEL_BITS: 0x0d50;
  static +TEXTURE: 0x1702;
  static +TEXTURE_2D: 0x0de1;
  static +TEXTURE_BINDING_2D: 0x8069;
  static +TEXTURE_BINDING_CUBE_MAP: 0x8514;
  static +TEXTURE_CUBE_MAP: 0x8513;
  static +TEXTURE_CUBE_MAP_NEGATIVE_X: 0x8516;
  static +TEXTURE_CUBE_MAP_NEGATIVE_Y: 0x8518;
  static +TEXTURE_CUBE_MAP_NEGATIVE_Z: 0x851a;
  static +TEXTURE_CUBE_MAP_POSITIVE_X: 0x8515;
  static +TEXTURE_CUBE_MAP_POSITIVE_Y: 0x8517;
  static +TEXTURE_CUBE_MAP_POSITIVE_Z: 0x8519;
  static +TEXTURE_MAG_FILTER: 0x2800;
  static +TEXTURE_MIN_FILTER: 0x2801;
  static +TEXTURE_WRAP_S: 0x2802;
  static +TEXTURE_WRAP_T: 0x2803;
  static +TEXTURE0: 0x84c0;
  static +TEXTURE1: 0x84c1;
  static +TEXTURE10: 0x84ca;
  static +TEXTURE11: 0x84cb;
  static +TEXTURE12: 0x84cc;
  static +TEXTURE13: 0x84cd;
  static +TEXTURE14: 0x84ce;
  static +TEXTURE15: 0x84cf;
  static +TEXTURE16: 0x84d0;
  static +TEXTURE17: 0x84d1;
  static +TEXTURE18: 0x84d2;
  static +TEXTURE19: 0x84d3;
  static +TEXTURE2: 0x84c2;
  static +TEXTURE20: 0x84d4;
  static +TEXTURE21: 0x84d5;
  static +TEXTURE22: 0x84d6;
  static +TEXTURE23: 0x84d7;
  static +TEXTURE24: 0x84d8;
  static +TEXTURE25: 0x84d9;
  static +TEXTURE26: 0x84da;
  static +TEXTURE27: 0x84db;
  static +TEXTURE28: 0x84dc;
  static +TEXTURE29: 0x84dd;
  static +TEXTURE3: 0x84c3;
  static +TEXTURE30: 0x84de;
  static +TEXTURE31: 0x84df;
  static +TEXTURE4: 0x84c4;
  static +TEXTURE5: 0x84c5;
  static +TEXTURE6: 0x84c6;
  static +TEXTURE7: 0x84c7;
  static +TEXTURE8: 0x84c8;
  static +TEXTURE9: 0x84c9;
  static +TRIANGLE_FAN: 0x0006;
  static +TRIANGLE_STRIP: 0x0005;
  static +TRIANGLES: 0x0004;
  static +UNPACK_ALIGNMENT: 0x0cf5;
  static +UNPACK_COLORSPACE_CONVERSION_WEBGL: 0x9243;
  static +UNPACK_FLIP_Y_WEBGL: 0x9240;
  static +UNPACK_PREMULTIPLY_ALPHA_WEBGL: 0x9241;
  static +UNSIGNED_BYTE: 0x1401;
  static +UNSIGNED_INT: 0x1405;
  static +UNSIGNED_SHORT: 0x1403;
  static +UNSIGNED_SHORT_4_4_4_4: 0x8033;
  static +UNSIGNED_SHORT_5_5_5_1: 0x8034;
  static +UNSIGNED_SHORT_5_6_5: 0x8363;
  static +VALIDATE_STATUS: 0x8b83;
  static +VENDOR: 0x1f00;
  static +VERSION: 0x1f02;
  static +VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: 0x889f;
  static +VERTEX_ATTRIB_ARRAY_ENABLED: 0x8622;
  static +VERTEX_ATTRIB_ARRAY_NORMALIZED: 0x886a;
  static +VERTEX_ATTRIB_ARRAY_POINTER: 0x8645;
  static +VERTEX_ATTRIB_ARRAY_SIZE: 0x8623;
  static +VERTEX_ATTRIB_ARRAY_STRIDE: 0x8624;
  static +VERTEX_ATTRIB_ARRAY_TYPE: 0x8625;
  static +VERTEX_SHADER: 0x8b31;
  static +VIEWPORT: 0x0ba2;
  static +ZERO: 0;

  +canvas: HTMLCanvasElement | OffscreenCanvas;
  drawingBufferColorSpace: PredefinedColorSpace;
  +drawingBufferFormat: GLenum;
  +drawingBufferHeight: GLsizei;
  +drawingBufferWidth: GLsizei;
  unpackColorSpace: PredefinedColorSpace;

  activeTexture(texture: GLenum): void;
  attachShader(program: WebGLProgram, shader: WebGLShader): void;
  bindAttribLocation(program: WebGLProgram, index: GLuint, name: string): void;
  bindBuffer(target: GLenum, buffer: WebGLBuffer | null): void;
  bindFramebuffer(target: GLenum, framebuffer: WebGLFramebuffer | null): void;
  bindRenderbuffer(
    target: GLenum,
    renderbuffer: WebGLRenderbuffer | null,
  ): void;
  bindTexture(target: GLenum, texture: WebGLTexture | null): void;
  blendColor(
    red: GLclampf,
    green: GLclampf,
    blue: GLclampf,
    alpha: GLclampf,
  ): void;
  blendEquation(mode: GLenum): void;
  blendEquationSeparate(modeRGB: GLenum, modeAlpha: GLenum): void;
  blendFunc(sfactor: GLenum, dfactor: GLenum): void;
  blendFuncSeparate(
    srcRGB: GLenum,
    dstRGB: GLenum,
    srcAlpha: GLenum,
    dstAlpha: GLenum,
  ): void;
  checkFramebufferStatus(target: GLenum): GLenum;
  clear(mask: GLbitfield): void;
  clearColor(
    red: GLclampf,
    green: GLclampf,
    blue: GLclampf,
    alpha: GLclampf,
  ): void;
  clearDepth(depth: GLclampf): void;
  clearStencil(s: GLint): void;
  colorMask(
    red: GLboolean,
    green: GLboolean,
    blue: GLboolean,
    alpha: GLboolean,
  ): void;
  compileShader(shader: WebGLShader): void;
  copyTexImage2D(
    target: GLenum,
    level: GLint,
    internalformat: GLenum,
    x: GLint,
    y: GLint,
    width: GLsizei,
    height: GLsizei,
    border: GLint,
  ): void;
  copyTexSubImage2D(
    target: GLenum,
    level: GLint,
    xoffset: GLint,
    yoffset: GLint,
    x: GLint,
    y: GLint,
    width: GLsizei,
    height: GLsizei,
  ): void;
  createBuffer(): WebGLBuffer;
  createFramebuffer(): WebGLFramebuffer;
  createProgram(): WebGLProgram;
  createRenderbuffer(): WebGLRenderbuffer;
  createShader(type: GLenum): WebGLShader | null;
  createTexture(): WebGLTexture;
  cullFace(mode: GLenum): void;
  deleteBuffer(buffer: WebGLBuffer | null): void;
  deleteFramebuffer(framebuffer: WebGLFramebuffer | null): void;
  deleteProgram(program: WebGLProgram | null): void;
  deleteRenderbuffer(renderbuffer: WebGLRenderbuffer | null): void;
  deleteShader(shader: WebGLShader | null): void;
  deleteTexture(texture: WebGLTexture | null): void;
  depthFunc(func: GLenum): void;
  depthMask(flag: GLboolean): void;
  depthRange(zNear: GLclampf, zFar: GLclampf): void;
  detachShader(program: WebGLProgram, shader: WebGLShader): void;
  disable(cap: GLenum): void;
  disableVertexAttribArray(index: GLuint): void;
  drawArrays(mode: GLenum, first: GLint, count: GLsizei): void;
  drawElements(
    mode: GLenum,
    count: GLsizei,
    type: GLenum,
    offset: GLintptr,
  ): void;
  drawingBufferStorage(
    sizedFormat: GLenum,
    width: number,
    height: number,
  ): void;
  enable(cap: GLenum): void;
  enableVertexAttribArray(index: GLuint): void;
  finish(): void;
  flush(): void;
  framebufferRenderbuffer(
    target: GLenum,
    attachment: GLenum,
    renderbuffertarget: GLenum,
    renderbuffer: WebGLRenderbuffer | null,
  ): void;
  framebufferTexture2D(
    target: GLenum,
    attachment: GLenum,
    textarget: GLenum,
    texture: WebGLTexture | null,
    level: GLint,
  ): void;
  frontFace(mode: GLenum): void;
  generateMipmap(target: GLenum): void;
  getActiveAttrib(program: WebGLProgram, index: GLuint): WebGLActiveInfo | null;
  getActiveUniform(
    program: WebGLProgram,
    index: GLuint,
  ): WebGLActiveInfo | null;
  getAttachedShaders(program: WebGLProgram): Array<WebGLShader> | null;
  getAttribLocation(program: WebGLProgram, name: string): GLint;
  getBufferParameter(target: GLenum, pname: GLenum): any;
  getContextAttributes(): WebGLContextAttributes | null;
  getError(): GLenum;
  getExtension(name: string): Object | null;
  getFramebufferAttachmentParameter(
    target: GLenum,
    attachment: GLenum,
    pname: GLenum,
  ): any;
  getParameter(pname: GLenum): any;
  getProgramInfoLog(program: WebGLProgram): string | null;
  getProgramParameter(program: WebGLProgram, pname: GLenum): any;
  getRenderbufferParameter(target: GLenum, pname: GLenum): any;
  getShaderInfoLog(shader: WebGLShader): string | null;
  getShaderParameter(shader: WebGLShader, pname: GLenum): any;
  getShaderPrecisionFormat(
    shadertype: GLenum,
    precisiontype: GLenum,
  ): WebGLShaderPrecisionFormat | null;
  getShaderSource(shader: WebGLShader): string | null;
  getSupportedExtensions(): Array<string> | null;
  getTexParameter(target: GLenum, pname: GLenum): any;
  getUniform(program: WebGLProgram, location: WebGLUniformLocation): any;
  getUniformLocation(
    program: WebGLProgram,
    name: string,
  ): WebGLUniformLocation | null;
  getVertexAttrib(index: GLuint, pname: GLenum): any;
  getVertexAttribOffset(index: GLuint, pname: GLenum): GLintptr;
  hint(target: GLenum, mode: GLenum): void;
  isBuffer(buffer: WebGLBuffer | null): GLboolean;
  isContextLost(): boolean;
  isEnabled(cap: GLenum): GLboolean;
  isFramebuffer(framebuffer: WebGLFramebuffer | null): GLboolean;
  isProgram(program: WebGLProgram | null): GLboolean;
  isRenderbuffer(renderbuffer: WebGLRenderbuffer | null): GLboolean;
  isShader(shader: WebGLShader | null): GLboolean;
  isTexture(texture: WebGLTexture | null): GLboolean;
  lineWidth(width: GLfloat): void;
  linkProgram(program: WebGLProgram): void;
  makeXRCompatible(): Promise<void>;
  pixelStorei(pname: GLenum, param: GLint): void;
  polygonOffset(factor: GLfloat, units: GLfloat): void;
  renderbufferStorage(
    target: GLenum,
    internalformat: GLenum,
    width: GLsizei,
    height: GLsizei,
  ): void;
  sampleCoverage(value: GLclampf, invert: GLboolean): void;
  scissor(x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
  shaderSource(shader: WebGLShader, source: string): void;
  stencilFunc(func: GLenum, ref: GLint, mask: GLuint): void;
  stencilFuncSeparate(
    face: GLenum,
    func: GLenum,
    ref: GLint,
    mask: GLuint,
  ): void;
  stencilMask(mask: GLuint): void;
  stencilMaskSeparate(face: GLenum, mask: GLuint): void;
  stencilOp(fail: GLenum, zfail: GLenum, zpass: GLenum): void;
  stencilOpSeparate(
    face: GLenum,
    fail: GLenum,
    zfail: GLenum,
    zpass: GLenum,
  ): void;
  texParameterf(target: GLenum, pname: GLenum, param: GLfloat): void;
  texParameteri(target: GLenum, pname: GLenum, param: GLint): void;
  uniform1f(location: WebGLUniformLocation | null, x: GLfloat): void;
  uniform1i(location: WebGLUniformLocation | null, x: GLint): void;
  uniform2f(
    location: WebGLUniformLocation | null,
    x: GLfloat,
    y: GLfloat,
  ): void;
  uniform2i(location: WebGLUniformLocation | null, x: GLint, y: GLint): void;
  uniform3f(
    location: WebGLUniformLocation | null,
    x: GLfloat,
    y: GLfloat,
    z: GLfloat,
  ): void;
  uniform3i(
    location: WebGLUniformLocation | null,
    x: GLint,
    y: GLint,
    z: GLint,
  ): void;
  uniform4f(
    location: WebGLUniformLocation | null,
    x: GLfloat,
    y: GLfloat,
    z: GLfloat,
    w: GLfloat,
  ): void;
  uniform4i(
    location: WebGLUniformLocation | null,
    x: GLint,
    y: GLint,
    z: GLint,
    w: GLint,
  ): void;
  useProgram(program: WebGLProgram | null): void;
  validateProgram(program: WebGLProgram): void;
  vertexAttrib1f(index: GLuint, x: GLfloat): void;
  vertexAttrib1fv(index: GLuint, values: Float32List): void;
  vertexAttrib2f(index: GLuint, x: GLfloat, y: GLfloat): void;
  vertexAttrib2fv(index: GLuint, values: Float32List): void;
  vertexAttrib3f(index: GLuint, x: GLfloat, y: GLfloat, z: GLfloat): void;
  vertexAttrib3fv(index: GLuint, values: Float32List): void;
  vertexAttrib4f(
    index: GLuint,
    x: GLfloat,
    y: GLfloat,
    z: GLfloat,
    w: GLfloat,
  ): void;
  vertexAttrib4fv(index: GLuint, values: Float32List): void;
  vertexAttribPointer(
    index: GLuint,
    size: GLint,
    type: GLenum,
    normalized: GLboolean,
    stride: GLsizei,
    offset: GLintptr,
  ): void;
  viewport(x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
}

declare class mixin$WebGLRenderingContextOverloads {
  bufferData(target: GLenum, size: GLsizeiptr, usage: GLenum): void;
  bufferData(
    target: GLenum,
    data: AllowSharedBufferSource | null,
    usage: GLenum,
  ): void;
  bufferSubData(
    target: GLenum,
    offset: GLintptr,
    data: AllowSharedBufferSource,
  ): void;
  compressedTexImage2D(
    target: GLenum,
    level: GLint,
    internalformat: GLenum,
    width: GLsizei,
    height: GLsizei,
    border: GLint,
    data: ArrayBufferView,
  ): void;
  compressedTexSubImage2D(
    target: GLenum,
    level: GLint,
    xoffset: GLint,
    yoffset: GLint,
    width: GLsizei,
    height: GLsizei,
    format: GLenum,
    data: ArrayBufferView,
  ): void;
  readPixels(
    x: GLint,
    y: GLint,
    width: GLsizei,
    height: GLsizei,
    format: GLenum,
    type: GLenum,
    pixels: ArrayBufferView | null,
  ): void;
  texImage2D(
    target: GLenum,
    level: GLint,
    internalformat: GLint,
    width: GLsizei,
    height: GLsizei,
    border: GLint,
    format: GLenum,
    type: GLenum,
    pixels: ArrayBufferView | null,
  ): void;
  texImage2D(
    target: GLenum,
    level: GLint,
    internalformat: GLint,
    format: GLenum,
    type: GLenum,
    source: TexImageSource,
  ): void;
  texSubImage2D(
    target: GLenum,
    level: GLint,
    xoffset: GLint,
    yoffset: GLint,
    width: GLsizei,
    height: GLsizei,
    format: GLenum,
    type: GLenum,
    pixels: ArrayBufferView | null,
  ): void;
  texSubImage2D(
    target: GLenum,
    level: GLint,
    xoffset: GLint,
    yoffset: GLint,
    format: GLenum,
    type: GLenum,
    source: TexImageSource,
  ): void;
  uniform1fv(location: WebGLUniformLocation | null, v: Float32List): void;
  uniform1iv(location: WebGLUniformLocation | null, v: Int32List): void;
  uniform2fv(location: WebGLUniformLocation | null, v: Float32List): void;
  uniform2iv(location: WebGLUniformLocation | null, v: Int32List): void;
  uniform3fv(location: WebGLUniformLocation | null, v: Float32List): void;
  uniform3iv(location: WebGLUniformLocation | null, v: Int32List): void;
  uniform4fv(location: WebGLUniformLocation | null, v: Float32List): void;
  uniform4iv(location: WebGLUniformLocation | null, v: Int32List): void;
  uniformMatrix2fv(
    location: WebGLUniformLocation | null,
    transpose: GLboolean,
    value: Float32List,
  ): void;
  uniformMatrix3fv(
    location: WebGLUniformLocation | null,
    transpose: GLboolean,
    value: Float32List,
  ): void;
  uniformMatrix4fv(
    location: WebGLUniformLocation | null,
    transpose: GLboolean,
    value: Float32List,
  ): void;
}

/*---------- webgl2 ----------*/

type GLint64 = number;

type GLuint64 = number;

type Uint32List = Uint32Array | Array<GLuint>;

declare class WebGL2RenderingContext
  mixins
    mixin$WebGLRenderingContextBase,
    mixin$WebGL2RenderingContextBase,
    mixin$WebGL2RenderingContextOverloads
{
  static +ACTIVE_ATTRIBUTES: 0x8b89;
  static +ACTIVE_TEXTURE: 0x84e0;
  static +ACTIVE_UNIFORM_BLOCKS: 0x8a36;
  static +ACTIVE_UNIFORMS: 0x8b86;
  static +ALIASED_LINE_WIDTH_RANGE: 0x846e;
  static +ALIASED_POINT_SIZE_RANGE: 0x846d;
  static +ALPHA: 0x1906;
  static +ALPHA_BITS: 0x0d55;
  static +ALREADY_SIGNALED: 0x911a;
  static +ALWAYS: 0x0207;
  static +ANY_SAMPLES_PASSED: 0x8c2f;
  static +ANY_SAMPLES_PASSED_CONSERVATIVE: 0x8d6a;
  static +ARRAY_BUFFER: 0x8892;
  static +ARRAY_BUFFER_BINDING: 0x8894;
  static +ATTACHED_SHADERS: 0x8b85;
  static +BACK: 0x0405;
  static +BLEND: 0x0be2;
  static +BLEND_COLOR: 0x8005;
  static +BLEND_DST_ALPHA: 0x80ca;
  static +BLEND_DST_RGB: 0x80c8;
  static +BLEND_EQUATION: 0x8009;
  static +BLEND_EQUATION_ALPHA: 0x883d;
  static +BLEND_EQUATION_RGB: 0x8009;
  static +BLEND_SRC_ALPHA: 0x80cb;
  static +BLEND_SRC_RGB: 0x80c9;
  static +BLUE_BITS: 0x0d54;
  static +BOOL: 0x8b56;
  static +BOOL_VEC2: 0x8b57;
  static +BOOL_VEC3: 0x8b58;
  static +BOOL_VEC4: 0x8b59;
  static +BROWSER_DEFAULT_WEBGL: 0x9244;
  static +BUFFER_SIZE: 0x8764;
  static +BUFFER_USAGE: 0x8765;
  static +BYTE: 0x1400;
  static +CCW: 0x0901;
  static +CLAMP_TO_EDGE: 0x812f;
  static +COLOR: 0x1800;
  static +COLOR_ATTACHMENT0: 0x8ce0;
  static +COLOR_ATTACHMENT1: 0x8ce1;
  static +COLOR_ATTACHMENT10: 0x8cea;
  static +COLOR_ATTACHMENT11: 0x8ceb;
  static +COLOR_ATTACHMENT12: 0x8cec;
  static +COLOR_ATTACHMENT13: 0x8ced;
  static +COLOR_ATTACHMENT14: 0x8cee;
  static +COLOR_ATTACHMENT15: 0x8cef;
  static +COLOR_ATTACHMENT2: 0x8ce2;
  static +COLOR_ATTACHMENT3: 0x8ce3;
  static +COLOR_ATTACHMENT4: 0x8ce4;
  static +COLOR_ATTACHMENT5: 0x8ce5;
  static +COLOR_ATTACHMENT6: 0x8ce6;
  static +COLOR_ATTACHMENT7: 0x8ce7;
  static +COLOR_ATTACHMENT8: 0x8ce8;
  static +COLOR_ATTACHMENT9: 0x8ce9;
  static +COLOR_BUFFER_BIT: 0x00004000;
  static +COLOR_CLEAR_VALUE: 0x0c22;
  static +COLOR_WRITEMASK: 0x0c23;
  static +COMPARE_REF_TO_TEXTURE: 0x884e;
  static +COMPILE_STATUS: 0x8b81;
  static +COMPRESSED_TEXTURE_FORMATS: 0x86a3;
  static +CONDITION_SATISFIED: 0x911c;
  static +CONSTANT_ALPHA: 0x8003;
  static +CONSTANT_COLOR: 0x8001;
  static +CONTEXT_LOST_WEBGL: 0x9242;
  static +COPY_READ_BUFFER: 0x8f36;
  static +COPY_READ_BUFFER_BINDING: 0x8f36;
  static +COPY_WRITE_BUFFER: 0x8f37;
  static +COPY_WRITE_BUFFER_BINDING: 0x8f37;
  static +CULL_FACE: 0x0b44;
  static +CULL_FACE_MODE: 0x0b45;
  static +CURRENT_PROGRAM: 0x8b8d;
  static +CURRENT_QUERY: 0x8865;
  static +CURRENT_VERTEX_ATTRIB: 0x8626;
  static +CW: 0x0900;
  static +DECR: 0x1e03;
  static +DECR_WRAP: 0x8508;
  static +DELETE_STATUS: 0x8b80;
  static +DEPTH: 0x1801;
  static +DEPTH_ATTACHMENT: 0x8d00;
  static +DEPTH_BITS: 0x0d56;
  static +DEPTH_BUFFER_BIT: 0x00000100;
  static +DEPTH_CLEAR_VALUE: 0x0b73;
  static +DEPTH_COMPONENT: 0x1902;
  static +DEPTH_COMPONENT16: 0x81a5;
  static +DEPTH_COMPONENT24: 0x81a6;
  static +DEPTH_COMPONENT32F: 0x8cac;
  static +DEPTH_FUNC: 0x0b74;
  static +DEPTH_RANGE: 0x0b70;
  static +DEPTH_STENCIL: 0x84f9;
  static +DEPTH_STENCIL_ATTACHMENT: 0x821a;
  static +DEPTH_TEST: 0x0b71;
  static +DEPTH_WRITEMASK: 0x0b72;
  static +DEPTH24_STENCIL8: 0x88f0;
  static +DEPTH32F_STENCIL8: 0x8cad;
  static +DITHER: 0x0bd0;
  static +DONT_CARE: 0x1100;
  static +DRAW_BUFFER0: 0x8825;
  static +DRAW_BUFFER1: 0x8826;
  static +DRAW_BUFFER10: 0x882f;
  static +DRAW_BUFFER11: 0x8830;
  static +DRAW_BUFFER12: 0x8831;
  static +DRAW_BUFFER13: 0x8832;
  static +DRAW_BUFFER14: 0x8833;
  static +DRAW_BUFFER15: 0x8834;
  static +DRAW_BUFFER2: 0x8827;
  static +DRAW_BUFFER3: 0x8828;
  static +DRAW_BUFFER4: 0x8829;
  static +DRAW_BUFFER5: 0x882a;
  static +DRAW_BUFFER6: 0x882b;
  static +DRAW_BUFFER7: 0x882c;
  static +DRAW_BUFFER8: 0x882d;
  static +DRAW_BUFFER9: 0x882e;
  static +DRAW_FRAMEBUFFER: 0x8ca9;
  static +DRAW_FRAMEBUFFER_BINDING: 0x8ca6;
  static +DST_ALPHA: 0x0304;
  static +DST_COLOR: 0x0306;
  static +DYNAMIC_COPY: 0x88ea;
  static +DYNAMIC_DRAW: 0x88e8;
  static +DYNAMIC_READ: 0x88e9;
  static +ELEMENT_ARRAY_BUFFER: 0x8893;
  static +ELEMENT_ARRAY_BUFFER_BINDING: 0x8895;
  static +EQUAL: 0x0202;
  static +FASTEST: 0x1101;
  static +FLOAT: 0x1406;
  static +FLOAT_32_UNSIGNED_INT_24_8_REV: 0x8dad;
  static +FLOAT_MAT2: 0x8b5a;
  static +FLOAT_MAT2x3: 0x8b65;
  static +FLOAT_MAT2x4: 0x8b66;
  static +FLOAT_MAT3: 0x8b5b;
  static +FLOAT_MAT3x2: 0x8b67;
  static +FLOAT_MAT3x4: 0x8b68;
  static +FLOAT_MAT4: 0x8b5c;
  static +FLOAT_MAT4x2: 0x8b69;
  static +FLOAT_MAT4x3: 0x8b6a;
  static +FLOAT_VEC2: 0x8b50;
  static +FLOAT_VEC3: 0x8b51;
  static +FLOAT_VEC4: 0x8b52;
  static +FRAGMENT_SHADER: 0x8b30;
  static +FRAGMENT_SHADER_DERIVATIVE_HINT: 0x8b8b;
  static +FRAMEBUFFER: 0x8d40;
  static +FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE: 0x8215;
  static +FRAMEBUFFER_ATTACHMENT_BLUE_SIZE: 0x8214;
  static +FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING: 0x8210;
  static +FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE: 0x8211;
  static +FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE: 0x8216;
  static +FRAMEBUFFER_ATTACHMENT_GREEN_SIZE: 0x8213;
  static +FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: 0x8cd1;
  static +FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: 0x8cd0;
  static +FRAMEBUFFER_ATTACHMENT_RED_SIZE: 0x8212;
  static +FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE: 0x8217;
  static +FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: 0x8cd3;
  static +FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER: 0x8cd4;
  static +FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: 0x8cd2;
  static +FRAMEBUFFER_BINDING: 0x8ca6;
  static +FRAMEBUFFER_COMPLETE: 0x8cd5;
  static +FRAMEBUFFER_DEFAULT: 0x8218;
  static +FRAMEBUFFER_INCOMPLETE_ATTACHMENT: 0x8cd6;
  static +FRAMEBUFFER_INCOMPLETE_DIMENSIONS: 0x8cd9;
  static +FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: 0x8cd7;
  static +FRAMEBUFFER_INCOMPLETE_MULTISAMPLE: 0x8d56;
  static +FRAMEBUFFER_UNSUPPORTED: 0x8cdd;
  static +FRONT: 0x0404;
  static +FRONT_AND_BACK: 0x0408;
  static +FRONT_FACE: 0x0b46;
  static +FUNC_ADD: 0x8006;
  static +FUNC_REVERSE_SUBTRACT: 0x800b;
  static +FUNC_SUBTRACT: 0x800a;
  static +GENERATE_MIPMAP_HINT: 0x8192;
  static +GEQUAL: 0x0206;
  static +GREATER: 0x0204;
  static +GREEN_BITS: 0x0d53;
  static +HALF_FLOAT: 0x140b;
  static +HIGH_FLOAT: 0x8df2;
  static +HIGH_INT: 0x8df5;
  static +IMPLEMENTATION_COLOR_READ_FORMAT: 0x8b9b;
  static +IMPLEMENTATION_COLOR_READ_TYPE: 0x8b9a;
  static +INCR: 0x1e02;
  static +INCR_WRAP: 0x8507;
  static +INT: 0x1404;
  static +INT_2_10_10_10_REV: 0x8d9f;
  static +INT_SAMPLER_2D: 0x8dca;
  static +INT_SAMPLER_2D_ARRAY: 0x8dcf;
  static +INT_SAMPLER_3D: 0x8dcb;
  static +INT_SAMPLER_CUBE: 0x8dcc;
  static +INT_VEC2: 0x8b53;
  static +INT_VEC3: 0x8b54;
  static +INT_VEC4: 0x8b55;
  static +INTERLEAVED_ATTRIBS: 0x8c8c;
  static +INVALID_ENUM: 0x0500;
  static +INVALID_FRAMEBUFFER_OPERATION: 0x0506;
  static +INVALID_INDEX: 0xffffffff;
  static +INVALID_OPERATION: 0x0502;
  static +INVALID_VALUE: 0x0501;
  static +INVERT: 0x150a;
  static +KEEP: 0x1e00;
  static +LEQUAL: 0x0203;
  static +LESS: 0x0201;
  static +LINE_LOOP: 0x0002;
  static +LINE_STRIP: 0x0003;
  static +LINE_WIDTH: 0x0b21;
  static +LINEAR: 0x2601;
  static +LINEAR_MIPMAP_LINEAR: 0x2703;
  static +LINEAR_MIPMAP_NEAREST: 0x2701;
  static +LINES: 0x0001;
  static +LINK_STATUS: 0x8b82;
  static +LOW_FLOAT: 0x8df0;
  static +LOW_INT: 0x8df3;
  static +LUMINANCE: 0x1909;
  static +LUMINANCE_ALPHA: 0x190a;
  static +MAX: 0x8008;
  static +MAX_3D_TEXTURE_SIZE: 0x8073;
  static +MAX_ARRAY_TEXTURE_LAYERS: 0x88ff;
  static +MAX_CLIENT_WAIT_TIMEOUT_WEBGL: 0x9247;
  static +MAX_COLOR_ATTACHMENTS: 0x8cdf;
  static +MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS: 0x8a33;
  static +MAX_COMBINED_TEXTURE_IMAGE_UNITS: 0x8b4d;
  static +MAX_COMBINED_UNIFORM_BLOCKS: 0x8a2e;
  static +MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS: 0x8a31;
  static +MAX_CUBE_MAP_TEXTURE_SIZE: 0x851c;
  static +MAX_DRAW_BUFFERS: 0x8824;
  static +MAX_ELEMENT_INDEX: 0x8d6b;
  static +MAX_ELEMENTS_INDICES: 0x80e9;
  static +MAX_ELEMENTS_VERTICES: 0x80e8;
  static +MAX_FRAGMENT_INPUT_COMPONENTS: 0x9125;
  static +MAX_FRAGMENT_UNIFORM_BLOCKS: 0x8a2d;
  static +MAX_FRAGMENT_UNIFORM_COMPONENTS: 0x8b49;
  static +MAX_FRAGMENT_UNIFORM_VECTORS: 0x8dfd;
  static +MAX_PROGRAM_TEXEL_OFFSET: 0x8905;
  static +MAX_RENDERBUFFER_SIZE: 0x84e8;
  static +MAX_SAMPLES: 0x8d57;
  static +MAX_SERVER_WAIT_TIMEOUT: 0x9111;
  static +MAX_TEXTURE_IMAGE_UNITS: 0x8872;
  static +MAX_TEXTURE_LOD_BIAS: 0x84fd;
  static +MAX_TEXTURE_SIZE: 0x0d33;
  static +MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS: 0x8c8a;
  static +MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS: 0x8c8b;
  static +MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS: 0x8c80;
  static +MAX_UNIFORM_BLOCK_SIZE: 0x8a30;
  static +MAX_UNIFORM_BUFFER_BINDINGS: 0x8a2f;
  static +MAX_VARYING_COMPONENTS: 0x8b4b;
  static +MAX_VARYING_VECTORS: 0x8dfc;
  static +MAX_VERTEX_ATTRIBS: 0x8869;
  static +MAX_VERTEX_OUTPUT_COMPONENTS: 0x9122;
  static +MAX_VERTEX_TEXTURE_IMAGE_UNITS: 0x8b4c;
  static +MAX_VERTEX_UNIFORM_BLOCKS: 0x8a2b;
  static +MAX_VERTEX_UNIFORM_COMPONENTS: 0x8b4a;
  static +MAX_VERTEX_UNIFORM_VECTORS: 0x8dfb;
  static +MAX_VIEWPORT_DIMS: 0x0d3a;
  static +MEDIUM_FLOAT: 0x8df1;
  static +MEDIUM_INT: 0x8df4;
  static +MIN: 0x8007;
  static +MIN_PROGRAM_TEXEL_OFFSET: 0x8904;
  static +MIRRORED_REPEAT: 0x8370;
  static +NEAREST: 0x2600;
  static +NEAREST_MIPMAP_LINEAR: 0x2702;
  static +NEAREST_MIPMAP_NEAREST: 0x2700;
  static +NEVER: 0x0200;
  static +NICEST: 0x1102;
  static +NO_ERROR: 0;
  static +NONE: 0;
  static +NOTEQUAL: 0x0205;
  static +OBJECT_TYPE: 0x9112;
  static +ONE: 1;
  static +ONE_MINUS_CONSTANT_ALPHA: 0x8004;
  static +ONE_MINUS_CONSTANT_COLOR: 0x8002;
  static +ONE_MINUS_DST_ALPHA: 0x0305;
  static +ONE_MINUS_DST_COLOR: 0x0307;
  static +ONE_MINUS_SRC_ALPHA: 0x0303;
  static +ONE_MINUS_SRC_COLOR: 0x0301;
  static +OUT_OF_MEMORY: 0x0505;
  static +PACK_ALIGNMENT: 0x0d05;
  static +PACK_ROW_LENGTH: 0x0d02;
  static +PACK_SKIP_PIXELS: 0x0d04;
  static +PACK_SKIP_ROWS: 0x0d03;
  static +PIXEL_PACK_BUFFER: 0x88eb;
  static +PIXEL_PACK_BUFFER_BINDING: 0x88ed;
  static +PIXEL_UNPACK_BUFFER: 0x88ec;
  static +PIXEL_UNPACK_BUFFER_BINDING: 0x88ef;
  static +POINTS: 0x0000;
  static +POLYGON_OFFSET_FACTOR: 0x8038;
  static +POLYGON_OFFSET_FILL: 0x8037;
  static +POLYGON_OFFSET_UNITS: 0x2a00;
  static +QUERY_RESULT: 0x8866;
  static +QUERY_RESULT_AVAILABLE: 0x8867;
  static +R11F_G11F_B10F: 0x8c3a;
  static +R16F: 0x822d;
  static +R16I: 0x8233;
  static +R16UI: 0x8234;
  static +R32F: 0x822e;
  static +R32I: 0x8235;
  static +R32UI: 0x8236;
  static +R8: 0x8229;
  static +R8_SNORM: 0x8f94;
  static +R8I: 0x8231;
  static +R8UI: 0x8232;
  static +RASTERIZER_DISCARD: 0x8c89;
  static +READ_BUFFER: 0x0c02;
  static +READ_FRAMEBUFFER: 0x8ca8;
  static +READ_FRAMEBUFFER_BINDING: 0x8caa;
  static +RED: 0x1903;
  static +RED_BITS: 0x0d52;
  static +RED_INTEGER: 0x8d94;
  static +RENDERBUFFER: 0x8d41;
  static +RENDERBUFFER_ALPHA_SIZE: 0x8d53;
  static +RENDERBUFFER_BINDING: 0x8ca7;
  static +RENDERBUFFER_BLUE_SIZE: 0x8d52;
  static +RENDERBUFFER_DEPTH_SIZE: 0x8d54;
  static +RENDERBUFFER_GREEN_SIZE: 0x8d51;
  static +RENDERBUFFER_HEIGHT: 0x8d43;
  static +RENDERBUFFER_INTERNAL_FORMAT: 0x8d44;
  static +RENDERBUFFER_RED_SIZE: 0x8d50;
  static +RENDERBUFFER_SAMPLES: 0x8cab;
  static +RENDERBUFFER_STENCIL_SIZE: 0x8d55;
  static +RENDERBUFFER_WIDTH: 0x8d42;
  static +RENDERER: 0x1f01;
  static +REPEAT: 0x2901;
  static +REPLACE: 0x1e01;
  static +RG: 0x8227;
  static +RG_INTEGER: 0x8228;
  static +RG16F: 0x822f;
  static +RG16I: 0x8239;
  static +RG16UI: 0x823a;
  static +RG32F: 0x8230;
  static +RG32I: 0x823b;
  static +RG32UI: 0x823c;
  static +RG8: 0x822b;
  static +RG8_SNORM: 0x8f95;
  static +RG8I: 0x8237;
  static +RG8UI: 0x8238;
  static +RGB: 0x1907;
  static +RGB_INTEGER: 0x8d98;
  static +RGB10_A2: 0x8059;
  static +RGB10_A2UI: 0x906f;
  static +RGB16F: 0x881b;
  static +RGB16I: 0x8d89;
  static +RGB16UI: 0x8d77;
  static +RGB32F: 0x8815;
  static +RGB32I: 0x8d83;
  static +RGB32UI: 0x8d71;
  static +RGB5_A1: 0x8057;
  static +RGB565: 0x8d62;
  static +RGB8: 0x8051;
  static +RGB8_SNORM: 0x8f96;
  static +RGB8I: 0x8d8f;
  static +RGB8UI: 0x8d7d;
  static +RGB9_E5: 0x8c3d;
  static +RGBA: 0x1908;
  static +RGBA_INTEGER: 0x8d99;
  static +RGBA16F: 0x881a;
  static +RGBA16I: 0x8d88;
  static +RGBA16UI: 0x8d76;
  static +RGBA32F: 0x8814;
  static +RGBA32I: 0x8d82;
  static +RGBA32UI: 0x8d70;
  static +RGBA4: 0x8056;
  static +RGBA8: 0x8058;
  static +RGBA8_SNORM: 0x8f97;
  static +RGBA8I: 0x8d8e;
  static +RGBA8UI: 0x8d7c;
  static +SAMPLE_ALPHA_TO_COVERAGE: 0x809e;
  static +SAMPLE_BUFFERS: 0x80a8;
  static +SAMPLE_COVERAGE: 0x80a0;
  static +SAMPLE_COVERAGE_INVERT: 0x80ab;
  static +SAMPLE_COVERAGE_VALUE: 0x80aa;
  static +SAMPLER_2D: 0x8b5e;
  static +SAMPLER_2D_ARRAY: 0x8dc1;
  static +SAMPLER_2D_ARRAY_SHADOW: 0x8dc4;
  static +SAMPLER_2D_SHADOW: 0x8b62;
  static +SAMPLER_3D: 0x8b5f;
  static +SAMPLER_BINDING: 0x8919;
  static +SAMPLER_CUBE: 0x8b60;
  static +SAMPLER_CUBE_SHADOW: 0x8dc5;
  static +SAMPLES: 0x80a9;
  static +SCISSOR_BOX: 0x0c10;
  static +SCISSOR_TEST: 0x0c11;
  static +SEPARATE_ATTRIBS: 0x8c8d;
  static +SHADER_TYPE: 0x8b4f;
  static +SHADING_LANGUAGE_VERSION: 0x8b8c;
  static +SHORT: 0x1402;
  static +SIGNALED: 0x9119;
  static +SIGNED_NORMALIZED: 0x8f9c;
  static +SRC_ALPHA: 0x0302;
  static +SRC_ALPHA_SATURATE: 0x0308;
  static +SRC_COLOR: 0x0300;
  static +SRGB: 0x8c40;
  static +SRGB8: 0x8c41;
  static +SRGB8_ALPHA8: 0x8c43;
  static +STATIC_COPY: 0x88e6;
  static +STATIC_DRAW: 0x88e4;
  static +STATIC_READ: 0x88e5;
  static +STENCIL: 0x1802;
  static +STENCIL_ATTACHMENT: 0x8d20;
  static +STENCIL_BACK_FAIL: 0x8801;
  static +STENCIL_BACK_FUNC: 0x8800;
  static +STENCIL_BACK_PASS_DEPTH_FAIL: 0x8802;
  static +STENCIL_BACK_PASS_DEPTH_PASS: 0x8803;
  static +STENCIL_BACK_REF: 0x8ca3;
  static +STENCIL_BACK_VALUE_MASK: 0x8ca4;
  static +STENCIL_BACK_WRITEMASK: 0x8ca5;
  static +STENCIL_BITS: 0x0d57;
  static +STENCIL_BUFFER_BIT: 0x00000400;
  static +STENCIL_CLEAR_VALUE: 0x0b91;
  static +STENCIL_FAIL: 0x0b94;
  static +STENCIL_FUNC: 0x0b92;
  static +STENCIL_INDEX8: 0x8d48;
  static +STENCIL_PASS_DEPTH_FAIL: 0x0b95;
  static +STENCIL_PASS_DEPTH_PASS: 0x0b96;
  static +STENCIL_REF: 0x0b97;
  static +STENCIL_TEST: 0x0b90;
  static +STENCIL_VALUE_MASK: 0x0b93;
  static +STENCIL_WRITEMASK: 0x0b98;
  static +STREAM_COPY: 0x88e2;
  static +STREAM_DRAW: 0x88e0;
  static +STREAM_READ: 0x88e1;
  static +SUBPIXEL_BITS: 0x0d50;
  static +SYNC_CONDITION: 0x9113;
  static +SYNC_FENCE: 0x9116;
  static +SYNC_FLAGS: 0x9115;
  static +SYNC_FLUSH_COMMANDS_BIT: 0x00000001;
  static +SYNC_GPU_COMMANDS_COMPLETE: 0x9117;
  static +SYNC_STATUS: 0x9114;
  static +TEXTURE: 0x1702;
  static +TEXTURE_2D: 0x0de1;
  static +TEXTURE_2D_ARRAY: 0x8c1a;
  static +TEXTURE_3D: 0x806f;
  static +TEXTURE_BASE_LEVEL: 0x813c;
  static +TEXTURE_BINDING_2D: 0x8069;
  static +TEXTURE_BINDING_2D_ARRAY: 0x8c1d;
  static +TEXTURE_BINDING_3D: 0x806a;
  static +TEXTURE_BINDING_CUBE_MAP: 0x8514;
  static +TEXTURE_COMPARE_FUNC: 0x884d;
  static +TEXTURE_COMPARE_MODE: 0x884c;
  static +TEXTURE_CUBE_MAP: 0x8513;
  static +TEXTURE_CUBE_MAP_NEGATIVE_X: 0x8516;
  static +TEXTURE_CUBE_MAP_NEGATIVE_Y: 0x8518;
  static +TEXTURE_CUBE_MAP_NEGATIVE_Z: 0x851a;
  static +TEXTURE_CUBE_MAP_POSITIVE_X: 0x8515;
  static +TEXTURE_CUBE_MAP_POSITIVE_Y: 0x8517;
  static +TEXTURE_CUBE_MAP_POSITIVE_Z: 0x8519;
  static +TEXTURE_IMMUTABLE_FORMAT: 0x912f;
  static +TEXTURE_IMMUTABLE_LEVELS: 0x82df;
  static +TEXTURE_MAG_FILTER: 0x2800;
  static +TEXTURE_MAX_LEVEL: 0x813d;
  static +TEXTURE_MAX_LOD: 0x813b;
  static +TEXTURE_MIN_FILTER: 0x2801;
  static +TEXTURE_MIN_LOD: 0x813a;
  static +TEXTURE_WRAP_R: 0x8072;
  static +TEXTURE_WRAP_S: 0x2802;
  static +TEXTURE_WRAP_T: 0x2803;
  static +TEXTURE0: 0x84c0;
  static +TEXTURE1: 0x84c1;
  static +TEXTURE10: 0x84ca;
  static +TEXTURE11: 0x84cb;
  static +TEXTURE12: 0x84cc;
  static +TEXTURE13: 0x84cd;
  static +TEXTURE14: 0x84ce;
  static +TEXTURE15: 0x84cf;
  static +TEXTURE16: 0x84d0;
  static +TEXTURE17: 0x84d1;
  static +TEXTURE18: 0x84d2;
  static +TEXTURE19: 0x84d3;
  static +TEXTURE2: 0x84c2;
  static +TEXTURE20: 0x84d4;
  static +TEXTURE21: 0x84d5;
  static +TEXTURE22: 0x84d6;
  static +TEXTURE23: 0x84d7;
  static +TEXTURE24: 0x84d8;
  static +TEXTURE25: 0x84d9;
  static +TEXTURE26: 0x84da;
  static +TEXTURE27: 0x84db;
  static +TEXTURE28: 0x84dc;
  static +TEXTURE29: 0x84dd;
  static +TEXTURE3: 0x84c3;
  static +TEXTURE30: 0x84de;
  static +TEXTURE31: 0x84df;
  static +TEXTURE4: 0x84c4;
  static +TEXTURE5: 0x84c5;
  static +TEXTURE6: 0x84c6;
  static +TEXTURE7: 0x84c7;
  static +TEXTURE8: 0x84c8;
  static +TEXTURE9: 0x84c9;
  static +TIMEOUT_EXPIRED: 0x911b;
  static +TIMEOUT_IGNORED: -1;
  static +TRANSFORM_FEEDBACK: 0x8e22;
  static +TRANSFORM_FEEDBACK_ACTIVE: 0x8e24;
  static +TRANSFORM_FEEDBACK_BINDING: 0x8e25;
  static +TRANSFORM_FEEDBACK_BUFFER: 0x8c8e;
  static +TRANSFORM_FEEDBACK_BUFFER_BINDING: 0x8c8f;
  static +TRANSFORM_FEEDBACK_BUFFER_MODE: 0x8c7f;
  static +TRANSFORM_FEEDBACK_BUFFER_SIZE: 0x8c85;
  static +TRANSFORM_FEEDBACK_BUFFER_START: 0x8c84;
  static +TRANSFORM_FEEDBACK_PAUSED: 0x8e23;
  static +TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN: 0x8c88;
  static +TRANSFORM_FEEDBACK_VARYINGS: 0x8c83;
  static +TRIANGLE_FAN: 0x0006;
  static +TRIANGLE_STRIP: 0x0005;
  static +TRIANGLES: 0x0004;
  static +UNIFORM_ARRAY_STRIDE: 0x8a3c;
  static +UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES: 0x8a43;
  static +UNIFORM_BLOCK_ACTIVE_UNIFORMS: 0x8a42;
  static +UNIFORM_BLOCK_BINDING: 0x8a3f;
  static +UNIFORM_BLOCK_DATA_SIZE: 0x8a40;
  static +UNIFORM_BLOCK_INDEX: 0x8a3a;
  static +UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER: 0x8a46;
  static +UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER: 0x8a44;
  static +UNIFORM_BUFFER: 0x8a11;
  static +UNIFORM_BUFFER_BINDING: 0x8a28;
  static +UNIFORM_BUFFER_OFFSET_ALIGNMENT: 0x8a34;
  static +UNIFORM_BUFFER_SIZE: 0x8a2a;
  static +UNIFORM_BUFFER_START: 0x8a29;
  static +UNIFORM_IS_ROW_MAJOR: 0x8a3e;
  static +UNIFORM_MATRIX_STRIDE: 0x8a3d;
  static +UNIFORM_OFFSET: 0x8a3b;
  static +UNIFORM_SIZE: 0x8a38;
  static +UNIFORM_TYPE: 0x8a37;
  static +UNPACK_ALIGNMENT: 0x0cf5;
  static +UNPACK_COLORSPACE_CONVERSION_WEBGL: 0x9243;
  static +UNPACK_FLIP_Y_WEBGL: 0x9240;
  static +UNPACK_IMAGE_HEIGHT: 0x806e;
  static +UNPACK_PREMULTIPLY_ALPHA_WEBGL: 0x9241;
  static +UNPACK_ROW_LENGTH: 0x0cf2;
  static +UNPACK_SKIP_IMAGES: 0x806d;
  static +UNPACK_SKIP_PIXELS: 0x0cf4;
  static +UNPACK_SKIP_ROWS: 0x0cf3;
  static +UNSIGNALED: 0x9118;
  static +UNSIGNED_BYTE: 0x1401;
  static +UNSIGNED_INT: 0x1405;
  static +UNSIGNED_INT_10F_11F_11F_REV: 0x8c3b;
  static +UNSIGNED_INT_2_10_10_10_REV: 0x8368;
  static +UNSIGNED_INT_24_8: 0x84fa;
  static +UNSIGNED_INT_5_9_9_9_REV: 0x8c3e;
  static +UNSIGNED_INT_SAMPLER_2D: 0x8dd2;
  static +UNSIGNED_INT_SAMPLER_2D_ARRAY: 0x8dd7;
  static +UNSIGNED_INT_SAMPLER_3D: 0x8dd3;
  static +UNSIGNED_INT_SAMPLER_CUBE: 0x8dd4;
  static +UNSIGNED_INT_VEC2: 0x8dc6;
  static +UNSIGNED_INT_VEC3: 0x8dc7;
  static +UNSIGNED_INT_VEC4: 0x8dc8;
  static +UNSIGNED_NORMALIZED: 0x8c17;
  static +UNSIGNED_SHORT: 0x1403;
  static +UNSIGNED_SHORT_4_4_4_4: 0x8033;
  static +UNSIGNED_SHORT_5_5_5_1: 0x8034;
  static +UNSIGNED_SHORT_5_6_5: 0x8363;
  static +VALIDATE_STATUS: 0x8b83;
  static +VENDOR: 0x1f00;
  static +VERSION: 0x1f02;
  static +VERTEX_ARRAY_BINDING: 0x85b5;
  static +VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: 0x889f;
  static +VERTEX_ATTRIB_ARRAY_DIVISOR: 0x88fe;
  static +VERTEX_ATTRIB_ARRAY_ENABLED: 0x8622;
  static +VERTEX_ATTRIB_ARRAY_INTEGER: 0x88fd;
  static +VERTEX_ATTRIB_ARRAY_NORMALIZED: 0x886a;
  static +VERTEX_ATTRIB_ARRAY_POINTER: 0x8645;
  static +VERTEX_ATTRIB_ARRAY_SIZE: 0x8623;
  static +VERTEX_ATTRIB_ARRAY_STRIDE: 0x8624;
  static +VERTEX_ATTRIB_ARRAY_TYPE: 0x8625;
  static +VERTEX_SHADER: 0x8b31;
  static +VIEWPORT: 0x0ba2;
  static +WAIT_FAILED: 0x911d;
  static +ZERO: 0;
}

declare class WebGLQuery extends WebGLObject {}

declare class WebGLSampler extends WebGLObject {}

declare class WebGLSync extends WebGLObject {}

declare class WebGLTransformFeedback extends WebGLObject {}

declare class WebGLVertexArrayObject extends WebGLObject {}

declare class mixin$WebGL2RenderingContextBase {
  static +ACTIVE_UNIFORM_BLOCKS: 0x8a36;
  static +ALREADY_SIGNALED: 0x911a;
  static +ANY_SAMPLES_PASSED: 0x8c2f;
  static +ANY_SAMPLES_PASSED_CONSERVATIVE: 0x8d6a;
  static +COLOR: 0x1800;
  static +COLOR_ATTACHMENT1: 0x8ce1;
  static +COLOR_ATTACHMENT10: 0x8cea;
  static +COLOR_ATTACHMENT11: 0x8ceb;
  static +COLOR_ATTACHMENT12: 0x8cec;
  static +COLOR_ATTACHMENT13: 0x8ced;
  static +COLOR_ATTACHMENT14: 0x8cee;
  static +COLOR_ATTACHMENT15: 0x8cef;
  static +COLOR_ATTACHMENT2: 0x8ce2;
  static +COLOR_ATTACHMENT3: 0x8ce3;
  static +COLOR_ATTACHMENT4: 0x8ce4;
  static +COLOR_ATTACHMENT5: 0x8ce5;
  static +COLOR_ATTACHMENT6: 0x8ce6;
  static +COLOR_ATTACHMENT7: 0x8ce7;
  static +COLOR_ATTACHMENT8: 0x8ce8;
  static +COLOR_ATTACHMENT9: 0x8ce9;
  static +COMPARE_REF_TO_TEXTURE: 0x884e;
  static +CONDITION_SATISFIED: 0x911c;
  static +COPY_READ_BUFFER: 0x8f36;
  static +COPY_READ_BUFFER_BINDING: 0x8f36;
  static +COPY_WRITE_BUFFER: 0x8f37;
  static +COPY_WRITE_BUFFER_BINDING: 0x8f37;
  static +CURRENT_QUERY: 0x8865;
  static +DEPTH: 0x1801;
  static +DEPTH_COMPONENT24: 0x81a6;
  static +DEPTH_COMPONENT32F: 0x8cac;
  static +DEPTH24_STENCIL8: 0x88f0;
  static +DEPTH32F_STENCIL8: 0x8cad;
  static +DRAW_BUFFER0: 0x8825;
  static +DRAW_BUFFER1: 0x8826;
  static +DRAW_BUFFER10: 0x882f;
  static +DRAW_BUFFER11: 0x8830;
  static +DRAW_BUFFER12: 0x8831;
  static +DRAW_BUFFER13: 0x8832;
  static +DRAW_BUFFER14: 0x8833;
  static +DRAW_BUFFER15: 0x8834;
  static +DRAW_BUFFER2: 0x8827;
  static +DRAW_BUFFER3: 0x8828;
  static +DRAW_BUFFER4: 0x8829;
  static +DRAW_BUFFER5: 0x882a;
  static +DRAW_BUFFER6: 0x882b;
  static +DRAW_BUFFER7: 0x882c;
  static +DRAW_BUFFER8: 0x882d;
  static +DRAW_BUFFER9: 0x882e;
  static +DRAW_FRAMEBUFFER: 0x8ca9;
  static +DRAW_FRAMEBUFFER_BINDING: 0x8ca6;
  static +DYNAMIC_COPY: 0x88ea;
  static +DYNAMIC_READ: 0x88e9;
  static +FLOAT_32_UNSIGNED_INT_24_8_REV: 0x8dad;
  static +FLOAT_MAT2x3: 0x8b65;
  static +FLOAT_MAT2x4: 0x8b66;
  static +FLOAT_MAT3x2: 0x8b67;
  static +FLOAT_MAT3x4: 0x8b68;
  static +FLOAT_MAT4x2: 0x8b69;
  static +FLOAT_MAT4x3: 0x8b6a;
  static +FRAGMENT_SHADER_DERIVATIVE_HINT: 0x8b8b;
  static +FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE: 0x8215;
  static +FRAMEBUFFER_ATTACHMENT_BLUE_SIZE: 0x8214;
  static +FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING: 0x8210;
  static +FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE: 0x8211;
  static +FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE: 0x8216;
  static +FRAMEBUFFER_ATTACHMENT_GREEN_SIZE: 0x8213;
  static +FRAMEBUFFER_ATTACHMENT_RED_SIZE: 0x8212;
  static +FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE: 0x8217;
  static +FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER: 0x8cd4;
  static +FRAMEBUFFER_DEFAULT: 0x8218;
  static +FRAMEBUFFER_INCOMPLETE_MULTISAMPLE: 0x8d56;
  static +HALF_FLOAT: 0x140b;
  static +INT_2_10_10_10_REV: 0x8d9f;
  static +INT_SAMPLER_2D: 0x8dca;
  static +INT_SAMPLER_2D_ARRAY: 0x8dcf;
  static +INT_SAMPLER_3D: 0x8dcb;
  static +INT_SAMPLER_CUBE: 0x8dcc;
  static +INTERLEAVED_ATTRIBS: 0x8c8c;
  static +INVALID_INDEX: 0xffffffff;
  static +MAX: 0x8008;
  static +MAX_3D_TEXTURE_SIZE: 0x8073;
  static +MAX_ARRAY_TEXTURE_LAYERS: 0x88ff;
  static +MAX_CLIENT_WAIT_TIMEOUT_WEBGL: 0x9247;
  static +MAX_COLOR_ATTACHMENTS: 0x8cdf;
  static +MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS: 0x8a33;
  static +MAX_COMBINED_UNIFORM_BLOCKS: 0x8a2e;
  static +MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS: 0x8a31;
  static +MAX_DRAW_BUFFERS: 0x8824;
  static +MAX_ELEMENT_INDEX: 0x8d6b;
  static +MAX_ELEMENTS_INDICES: 0x80e9;
  static +MAX_ELEMENTS_VERTICES: 0x80e8;
  static +MAX_FRAGMENT_INPUT_COMPONENTS: 0x9125;
  static +MAX_FRAGMENT_UNIFORM_BLOCKS: 0x8a2d;
  static +MAX_FRAGMENT_UNIFORM_COMPONENTS: 0x8b49;
  static +MAX_PROGRAM_TEXEL_OFFSET: 0x8905;
  static +MAX_SAMPLES: 0x8d57;
  static +MAX_SERVER_WAIT_TIMEOUT: 0x9111;
  static +MAX_TEXTURE_LOD_BIAS: 0x84fd;
  static +MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS: 0x8c8a;
  static +MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS: 0x8c8b;
  static +MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS: 0x8c80;
  static +MAX_UNIFORM_BLOCK_SIZE: 0x8a30;
  static +MAX_UNIFORM_BUFFER_BINDINGS: 0x8a2f;
  static +MAX_VARYING_COMPONENTS: 0x8b4b;
  static +MAX_VERTEX_OUTPUT_COMPONENTS: 0x9122;
  static +MAX_VERTEX_UNIFORM_BLOCKS: 0x8a2b;
  static +MAX_VERTEX_UNIFORM_COMPONENTS: 0x8b4a;
  static +MIN: 0x8007;
  static +MIN_PROGRAM_TEXEL_OFFSET: 0x8904;
  static +OBJECT_TYPE: 0x9112;
  static +PACK_ROW_LENGTH: 0x0d02;
  static +PACK_SKIP_PIXELS: 0x0d04;
  static +PACK_SKIP_ROWS: 0x0d03;
  static +PIXEL_PACK_BUFFER: 0x88eb;
  static +PIXEL_PACK_BUFFER_BINDING: 0x88ed;
  static +PIXEL_UNPACK_BUFFER: 0x88ec;
  static +PIXEL_UNPACK_BUFFER_BINDING: 0x88ef;
  static +QUERY_RESULT: 0x8866;
  static +QUERY_RESULT_AVAILABLE: 0x8867;
  static +R11F_G11F_B10F: 0x8c3a;
  static +R16F: 0x822d;
  static +R16I: 0x8233;
  static +R16UI: 0x8234;
  static +R32F: 0x822e;
  static +R32I: 0x8235;
  static +R32UI: 0x8236;
  static +R8: 0x8229;
  static +R8_SNORM: 0x8f94;
  static +R8I: 0x8231;
  static +R8UI: 0x8232;
  static +RASTERIZER_DISCARD: 0x8c89;
  static +READ_BUFFER: 0x0c02;
  static +READ_FRAMEBUFFER: 0x8ca8;
  static +READ_FRAMEBUFFER_BINDING: 0x8caa;
  static +RED: 0x1903;
  static +RED_INTEGER: 0x8d94;
  static +RENDERBUFFER_SAMPLES: 0x8cab;
  static +RG: 0x8227;
  static +RG_INTEGER: 0x8228;
  static +RG16F: 0x822f;
  static +RG16I: 0x8239;
  static +RG16UI: 0x823a;
  static +RG32F: 0x8230;
  static +RG32I: 0x823b;
  static +RG32UI: 0x823c;
  static +RG8: 0x822b;
  static +RG8_SNORM: 0x8f95;
  static +RG8I: 0x8237;
  static +RG8UI: 0x8238;
  static +RGB_INTEGER: 0x8d98;
  static +RGB10_A2: 0x8059;
  static +RGB10_A2UI: 0x906f;
  static +RGB16F: 0x881b;
  static +RGB16I: 0x8d89;
  static +RGB16UI: 0x8d77;
  static +RGB32F: 0x8815;
  static +RGB32I: 0x8d83;
  static +RGB32UI: 0x8d71;
  static +RGB8: 0x8051;
  static +RGB8_SNORM: 0x8f96;
  static +RGB8I: 0x8d8f;
  static +RGB8UI: 0x8d7d;
  static +RGB9_E5: 0x8c3d;
  static +RGBA_INTEGER: 0x8d99;
  static +RGBA16F: 0x881a;
  static +RGBA16I: 0x8d88;
  static +RGBA16UI: 0x8d76;
  static +RGBA32F: 0x8814;
  static +RGBA32I: 0x8d82;
  static +RGBA32UI: 0x8d70;
  static +RGBA8_SNORM: 0x8f97;
  static +RGBA8I: 0x8d8e;
  static +RGBA8UI: 0x8d7c;
  static +SAMPLER_2D_ARRAY: 0x8dc1;
  static +SAMPLER_2D_ARRAY_SHADOW: 0x8dc4;
  static +SAMPLER_2D_SHADOW: 0x8b62;
  static +SAMPLER_3D: 0x8b5f;
  static +SAMPLER_BINDING: 0x8919;
  static +SAMPLER_CUBE_SHADOW: 0x8dc5;
  static +SEPARATE_ATTRIBS: 0x8c8d;
  static +SIGNALED: 0x9119;
  static +SIGNED_NORMALIZED: 0x8f9c;
  static +SRGB: 0x8c40;
  static +SRGB8: 0x8c41;
  static +SRGB8_ALPHA8: 0x8c43;
  static +STATIC_COPY: 0x88e6;
  static +STATIC_READ: 0x88e5;
  static +STENCIL: 0x1802;
  static +STREAM_COPY: 0x88e2;
  static +STREAM_READ: 0x88e1;
  static +SYNC_CONDITION: 0x9113;
  static +SYNC_FENCE: 0x9116;
  static +SYNC_FLAGS: 0x9115;
  static +SYNC_FLUSH_COMMANDS_BIT: 0x00000001;
  static +SYNC_GPU_COMMANDS_COMPLETE: 0x9117;
  static +SYNC_STATUS: 0x9114;
  static +TEXTURE_2D_ARRAY: 0x8c1a;
  static +TEXTURE_3D: 0x806f;
  static +TEXTURE_BASE_LEVEL: 0x813c;
  static +TEXTURE_BINDING_2D_ARRAY: 0x8c1d;
  static +TEXTURE_BINDING_3D: 0x806a;
  static +TEXTURE_COMPARE_FUNC: 0x884d;
  static +TEXTURE_COMPARE_MODE: 0x884c;
  static +TEXTURE_IMMUTABLE_FORMAT: 0x912f;
  static +TEXTURE_IMMUTABLE_LEVELS: 0x82df;
  static +TEXTURE_MAX_LEVEL: 0x813d;
  static +TEXTURE_MAX_LOD: 0x813b;
  static +TEXTURE_MIN_LOD: 0x813a;
  static +TEXTURE_WRAP_R: 0x8072;
  static +TIMEOUT_EXPIRED: 0x911b;
  static +TIMEOUT_IGNORED: -1;
  static +TRANSFORM_FEEDBACK: 0x8e22;
  static +TRANSFORM_FEEDBACK_ACTIVE: 0x8e24;
  static +TRANSFORM_FEEDBACK_BINDING: 0x8e25;
  static +TRANSFORM_FEEDBACK_BUFFER: 0x8c8e;
  static +TRANSFORM_FEEDBACK_BUFFER_BINDING: 0x8c8f;
  static +TRANSFORM_FEEDBACK_BUFFER_MODE: 0x8c7f;
  static +TRANSFORM_FEEDBACK_BUFFER_SIZE: 0x8c85;
  static +TRANSFORM_FEEDBACK_BUFFER_START: 0x8c84;
  static +TRANSFORM_FEEDBACK_PAUSED: 0x8e23;
  static +TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN: 0x8c88;
  static +TRANSFORM_FEEDBACK_VARYINGS: 0x8c83;
  static +UNIFORM_ARRAY_STRIDE: 0x8a3c;
  static +UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES: 0x8a43;
  static +UNIFORM_BLOCK_ACTIVE_UNIFORMS: 0x8a42;
  static +UNIFORM_BLOCK_BINDING: 0x8a3f;
  static +UNIFORM_BLOCK_DATA_SIZE: 0x8a40;
  static +UNIFORM_BLOCK_INDEX: 0x8a3a;
  static +UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER: 0x8a46;
  static +UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER: 0x8a44;
  static +UNIFORM_BUFFER: 0x8a11;
  static +UNIFORM_BUFFER_BINDING: 0x8a28;
  static +UNIFORM_BUFFER_OFFSET_ALIGNMENT: 0x8a34;
  static +UNIFORM_BUFFER_SIZE: 0x8a2a;
  static +UNIFORM_BUFFER_START: 0x8a29;
  static +UNIFORM_IS_ROW_MAJOR: 0x8a3e;
  static +UNIFORM_MATRIX_STRIDE: 0x8a3d;
  static +UNIFORM_OFFSET: 0x8a3b;
  static +UNIFORM_SIZE: 0x8a38;
  static +UNIFORM_TYPE: 0x8a37;
  static +UNPACK_IMAGE_HEIGHT: 0x806e;
  static +UNPACK_ROW_LENGTH: 0x0cf2;
  static +UNPACK_SKIP_IMAGES: 0x806d;
  static +UNPACK_SKIP_PIXELS: 0x0cf4;
  static +UNPACK_SKIP_ROWS: 0x0cf3;
  static +UNSIGNALED: 0x9118;
  static +UNSIGNED_INT_10F_11F_11F_REV: 0x8c3b;
  static +UNSIGNED_INT_2_10_10_10_REV: 0x8368;
  static +UNSIGNED_INT_24_8: 0x84fa;
  static +UNSIGNED_INT_5_9_9_9_REV: 0x8c3e;
  static +UNSIGNED_INT_SAMPLER_2D: 0x8dd2;
  static +UNSIGNED_INT_SAMPLER_2D_ARRAY: 0x8dd7;
  static +UNSIGNED_INT_SAMPLER_3D: 0x8dd3;
  static +UNSIGNED_INT_SAMPLER_CUBE: 0x8dd4;
  static +UNSIGNED_INT_VEC2: 0x8dc6;
  static +UNSIGNED_INT_VEC3: 0x8dc7;
  static +UNSIGNED_INT_VEC4: 0x8dc8;
  static +UNSIGNED_NORMALIZED: 0x8c17;
  static +VERTEX_ARRAY_BINDING: 0x85b5;
  static +VERTEX_ATTRIB_ARRAY_DIVISOR: 0x88fe;
  static +VERTEX_ATTRIB_ARRAY_INTEGER: 0x88fd;
  static +WAIT_FAILED: 0x911d;

  beginQuery(target: GLenum, query: WebGLQuery): void;
  beginTransformFeedback(primitiveMode: GLenum): void;
  bindBufferBase(
    target: GLenum,
    index: GLuint,
    buffer: WebGLBuffer | null,
  ): void;
  bindBufferRange(
    target: GLenum,
    index: GLuint,
    buffer: WebGLBuffer | null,
    offset: GLintptr,
    size: GLsizeiptr,
  ): void;
  bindSampler(unit: GLuint, sampler: WebGLSampler | null): void;
  bindTransformFeedback(
    target: GLenum,
    tf: WebGLTransformFeedback | null,
  ): void;
  bindVertexArray(array: WebGLVertexArrayObject | null): void;
  blitFramebuffer(
    srcX0: GLint,
    srcY0: GLint,
    srcX1: GLint,
    srcY1: GLint,
    dstX0: GLint,
    dstY0: GLint,
    dstX1: GLint,
    dstY1: GLint,
    mask: GLbitfield,
    filter: GLenum,
  ): void;
  clearBufferfi(
    buffer: GLenum,
    drawbuffer: GLint,
    depth: GLfloat,
    stencil: GLint,
  ): void;
  clearBufferfv(
    buffer: GLenum,
    drawbuffer: GLint,
    values: Float32List,
    srcOffset?: number,
  ): void;
  clearBufferiv(
    buffer: GLenum,
    drawbuffer: GLint,
    values: Int32List,
    srcOffset?: number,
  ): void;
  clearBufferuiv(
    buffer: GLenum,
    drawbuffer: GLint,
    values: Uint32List,
    srcOffset?: number,
  ): void;
  clientWaitSync(sync: WebGLSync, flags: GLbitfield, timeout: GLuint64): GLenum;
  compressedTexImage3D(
    target: GLenum,
    level: GLint,
    internalformat: GLenum,
    width: GLsizei,
    height: GLsizei,
    depth: GLsizei,
    border: GLint,
    imageSize: GLsizei,
    offset: GLintptr,
  ): void;
  compressedTexImage3D(
    target: GLenum,
    level: GLint,
    internalformat: GLenum,
    width: GLsizei,
    height: GLsizei,
    depth: GLsizei,
    border: GLint,
    srcData: ArrayBufferView,
    srcOffset?: number,
    srcLengthOverride?: GLuint,
  ): void;
  compressedTexSubImage3D(
    target: GLenum,
    level: GLint,
    xoffset: GLint,
    yoffset: GLint,
    zoffset: GLint,
    width: GLsizei,
    height: GLsizei,
    depth: GLsizei,
    format: GLenum,
    imageSize: GLsizei,
    offset: GLintptr,
  ): void;
  compressedTexSubImage3D(
    target: GLenum,
    level: GLint,
    xoffset: GLint,
    yoffset: GLint,
    zoffset: GLint,
    width: GLsizei,
    height: GLsizei,
    depth: GLsizei,
    format: GLenum,
    srcData: ArrayBufferView,
    srcOffset?: number,
    srcLengthOverride?: GLuint,
  ): void;
  copyBufferSubData(
    readTarget: GLenum,
    writeTarget: GLenum,
    readOffset: GLintptr,
    writeOffset: GLintptr,
    size: GLsizeiptr,
  ): void;
  copyTexSubImage3D(
    target: GLenum,
    level: GLint,
    xoffset: GLint,
    yoffset: GLint,
    zoffset: GLint,
    x: GLint,
    y: GLint,
    width: GLsizei,
    height: GLsizei,
  ): void;
  createQuery(): WebGLQuery;
  createSampler(): WebGLSampler;
  createTransformFeedback(): WebGLTransformFeedback;
  createVertexArray(): WebGLVertexArrayObject;
  deleteQuery(query: WebGLQuery | null): void;
  deleteSampler(sampler: WebGLSampler | null): void;
  deleteSync(sync: WebGLSync | null): void;
  deleteTransformFeedback(tf: WebGLTransformFeedback | null): void;
  deleteVertexArray(vertexArray: WebGLVertexArrayObject | null): void;
  drawArraysInstanced(
    mode: GLenum,
    first: GLint,
    count: GLsizei,
    instanceCount: GLsizei,
  ): void;
  drawBuffers(buffers: Array<GLenum>): void;
  drawElementsInstanced(
    mode: GLenum,
    count: GLsizei,
    type: GLenum,
    offset: GLintptr,
    instanceCount: GLsizei,
  ): void;
  drawRangeElements(
    mode: GLenum,
    start: GLuint,
    end: GLuint,
    count: GLsizei,
    type: GLenum,
    offset: GLintptr,
  ): void;
  endQuery(target: GLenum): void;
  endTransformFeedback(): void;
  fenceSync(condition: GLenum, flags: GLbitfield): WebGLSync | null;
  framebufferTextureLayer(
    target: GLenum,
    attachment: GLenum,
    texture: WebGLTexture | null,
    level: GLint,
    layer: GLint,
  ): void;
  getActiveUniformBlockName(
    program: WebGLProgram,
    uniformBlockIndex: GLuint,
  ): string | null;
  getActiveUniformBlockParameter(
    program: WebGLProgram,
    uniformBlockIndex: GLuint,
    pname: GLenum,
  ): any;
  getActiveUniforms(
    program: WebGLProgram,
    uniformIndices: Array<GLuint>,
    pname: GLenum,
  ): any;
  getBufferSubData(
    target: GLenum,
    srcByteOffset: GLintptr,
    dstBuffer: ArrayBufferView,
    dstOffset?: number,
    length?: GLuint,
  ): void;
  getFragDataLocation(program: WebGLProgram, name: string): GLint;
  getIndexedParameter(target: GLenum, index: GLuint): any;
  getInternalformatParameter(
    target: GLenum,
    internalformat: GLenum,
    pname: GLenum,
  ): any;
  getQuery(target: GLenum, pname: GLenum): WebGLQuery | null;
  getQueryParameter(query: WebGLQuery, pname: GLenum): any;
  getSamplerParameter(sampler: WebGLSampler, pname: GLenum): any;
  getSyncParameter(sync: WebGLSync, pname: GLenum): any;
  getTransformFeedbackVarying(
    program: WebGLProgram,
    index: GLuint,
  ): WebGLActiveInfo | null;
  getUniformBlockIndex(program: WebGLProgram, uniformBlockName: string): GLuint;
  getUniformIndices(
    program: WebGLProgram,
    uniformNames: Array<string>,
  ): Array<GLuint> | null;
  invalidateFramebuffer(target: GLenum, attachments: Array<GLenum>): void;
  invalidateSubFramebuffer(
    target: GLenum,
    attachments: Array<GLenum>,
    x: GLint,
    y: GLint,
    width: GLsizei,
    height: GLsizei,
  ): void;
  isQuery(query: WebGLQuery | null): GLboolean;
  isSampler(sampler: WebGLSampler | null): GLboolean;
  isSync(sync: WebGLSync | null): GLboolean;
  isTransformFeedback(tf: WebGLTransformFeedback | null): GLboolean;
  isVertexArray(vertexArray: WebGLVertexArrayObject | null): GLboolean;
  pauseTransformFeedback(): void;
  readBuffer(src: GLenum): void;
  renderbufferStorageMultisample(
    target: GLenum,
    samples: GLsizei,
    internalformat: GLenum,
    width: GLsizei,
    height: GLsizei,
  ): void;
  resumeTransformFeedback(): void;
  samplerParameterf(sampler: WebGLSampler, pname: GLenum, param: GLfloat): void;
  samplerParameteri(sampler: WebGLSampler, pname: GLenum, param: GLint): void;
  texImage3D(
    target: GLenum,
    level: GLint,
    internalformat: GLint,
    width: GLsizei,
    height: GLsizei,
    depth: GLsizei,
    border: GLint,
    format: GLenum,
    type: GLenum,
    pboOffset: GLintptr,
  ): void;
  texImage3D(
    target: GLenum,
    level: GLint,
    internalformat: GLint,
    width: GLsizei,
    height: GLsizei,
    depth: GLsizei,
    border: GLint,
    format: GLenum,
    type: GLenum,
    source: TexImageSource,
  ): void;
  texImage3D(
    target: GLenum,
    level: GLint,
    internalformat: GLint,
    width: GLsizei,
    height: GLsizei,
    depth: GLsizei,
    border: GLint,
    format: GLenum,
    type: GLenum,
    srcData: ArrayBufferView | null,
  ): void;
  texImage3D(
    target: GLenum,
    level: GLint,
    internalformat: GLint,
    width: GLsizei,
    height: GLsizei,
    depth: GLsizei,
    border: GLint,
    format: GLenum,
    type: GLenum,
    srcData: ArrayBufferView,
    srcOffset: number,
  ): void;
  texStorage2D(
    target: GLenum,
    levels: GLsizei,
    internalformat: GLenum,
    width: GLsizei,
    height: GLsizei,
  ): void;
  texStorage3D(
    target: GLenum,
    levels: GLsizei,
    internalformat: GLenum,
    width: GLsizei,
    height: GLsizei,
    depth: GLsizei,
  ): void;
  texSubImage3D(
    target: GLenum,
    level: GLint,
    xoffset: GLint,
    yoffset: GLint,
    zoffset: GLint,
    width: GLsizei,
    height: GLsizei,
    depth: GLsizei,
    format: GLenum,
    type: GLenum,
    pboOffset: GLintptr,
  ): void;
  texSubImage3D(
    target: GLenum,
    level: GLint,
    xoffset: GLint,
    yoffset: GLint,
    zoffset: GLint,
    width: GLsizei,
    height: GLsizei,
    depth: GLsizei,
    format: GLenum,
    type: GLenum,
    source: TexImageSource,
  ): void;
  texSubImage3D(
    target: GLenum,
    level: GLint,
    xoffset: GLint,
    yoffset: GLint,
    zoffset: GLint,
    width: GLsizei,
    height: GLsizei,
    depth: GLsizei,
    format: GLenum,
    type: GLenum,
    srcData: ArrayBufferView | null,
    srcOffset?: number,
  ): void;
  transformFeedbackVaryings(
    program: WebGLProgram,
    varyings: Array<string>,
    bufferMode: GLenum,
  ): void;
  uniform1ui(location: WebGLUniformLocation | null, v0: GLuint): void;
  uniform1uiv(
    location: WebGLUniformLocation | null,
    data: Uint32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  uniform2ui(
    location: WebGLUniformLocation | null,
    v0: GLuint,
    v1: GLuint,
  ): void;
  uniform2uiv(
    location: WebGLUniformLocation | null,
    data: Uint32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  uniform3ui(
    location: WebGLUniformLocation | null,
    v0: GLuint,
    v1: GLuint,
    v2: GLuint,
  ): void;
  uniform3uiv(
    location: WebGLUniformLocation | null,
    data: Uint32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  uniform4ui(
    location: WebGLUniformLocation | null,
    v0: GLuint,
    v1: GLuint,
    v2: GLuint,
    v3: GLuint,
  ): void;
  uniform4uiv(
    location: WebGLUniformLocation | null,
    data: Uint32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  uniformBlockBinding(
    program: WebGLProgram,
    uniformBlockIndex: GLuint,
    uniformBlockBinding: GLuint,
  ): void;
  uniformMatrix2x3fv(
    location: WebGLUniformLocation | null,
    transpose: GLboolean,
    data: Float32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  uniformMatrix2x4fv(
    location: WebGLUniformLocation | null,
    transpose: GLboolean,
    data: Float32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  uniformMatrix3x2fv(
    location: WebGLUniformLocation | null,
    transpose: GLboolean,
    data: Float32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  uniformMatrix3x4fv(
    location: WebGLUniformLocation | null,
    transpose: GLboolean,
    data: Float32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  uniformMatrix4x2fv(
    location: WebGLUniformLocation | null,
    transpose: GLboolean,
    data: Float32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  uniformMatrix4x3fv(
    location: WebGLUniformLocation | null,
    transpose: GLboolean,
    data: Float32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  vertexAttribDivisor(index: GLuint, divisor: GLuint): void;
  vertexAttribI4i(index: GLuint, x: GLint, y: GLint, z: GLint, w: GLint): void;
  vertexAttribI4iv(index: GLuint, values: Int32List): void;
  vertexAttribI4ui(
    index: GLuint,
    x: GLuint,
    y: GLuint,
    z: GLuint,
    w: GLuint,
  ): void;
  vertexAttribI4uiv(index: GLuint, values: Uint32List): void;
  vertexAttribIPointer(
    index: GLuint,
    size: GLint,
    type: GLenum,
    stride: GLsizei,
    offset: GLintptr,
  ): void;
  waitSync(sync: WebGLSync, flags: GLbitfield, timeout: GLint64): void;
}

declare class mixin$WebGL2RenderingContextOverloads {
  bufferData(target: GLenum, size: GLsizeiptr, usage: GLenum): void;
  bufferData(
    target: GLenum,
    srcData: AllowSharedBufferSource | null,
    usage: GLenum,
  ): void;
  bufferData(
    target: GLenum,
    srcData: ArrayBufferView,
    usage: GLenum,
    srcOffset: number,
    length?: GLuint,
  ): void;
  bufferSubData(
    target: GLenum,
    dstByteOffset: GLintptr,
    srcData: AllowSharedBufferSource,
  ): void;
  bufferSubData(
    target: GLenum,
    dstByteOffset: GLintptr,
    srcData: ArrayBufferView,
    srcOffset: number,
    length?: GLuint,
  ): void;
  compressedTexImage2D(
    target: GLenum,
    level: GLint,
    internalformat: GLenum,
    width: GLsizei,
    height: GLsizei,
    border: GLint,
    imageSize: GLsizei,
    offset: GLintptr,
  ): void;
  compressedTexImage2D(
    target: GLenum,
    level: GLint,
    internalformat: GLenum,
    width: GLsizei,
    height: GLsizei,
    border: GLint,
    srcData: ArrayBufferView,
    srcOffset?: number,
    srcLengthOverride?: GLuint,
  ): void;
  compressedTexSubImage2D(
    target: GLenum,
    level: GLint,
    xoffset: GLint,
    yoffset: GLint,
    width: GLsizei,
    height: GLsizei,
    format: GLenum,
    imageSize: GLsizei,
    offset: GLintptr,
  ): void;
  compressedTexSubImage2D(
    target: GLenum,
    level: GLint,
    xoffset: GLint,
    yoffset: GLint,
    width: GLsizei,
    height: GLsizei,
    format: GLenum,
    srcData: ArrayBufferView,
    srcOffset?: number,
    srcLengthOverride?: GLuint,
  ): void;
  readPixels(
    x: GLint,
    y: GLint,
    width: GLsizei,
    height: GLsizei,
    format: GLenum,
    type: GLenum,
    dstData: ArrayBufferView | null,
  ): void;
  readPixels(
    x: GLint,
    y: GLint,
    width: GLsizei,
    height: GLsizei,
    format: GLenum,
    type: GLenum,
    offset: GLintptr,
  ): void;
  readPixels(
    x: GLint,
    y: GLint,
    width: GLsizei,
    height: GLsizei,
    format: GLenum,
    type: GLenum,
    dstData: ArrayBufferView,
    dstOffset: number,
  ): void;
  texImage2D(
    target: GLenum,
    level: GLint,
    internalformat: GLint,
    width: GLsizei,
    height: GLsizei,
    border: GLint,
    format: GLenum,
    type: GLenum,
    pixels: ArrayBufferView | null,
  ): void;
  texImage2D(
    target: GLenum,
    level: GLint,
    internalformat: GLint,
    format: GLenum,
    type: GLenum,
    source: TexImageSource,
  ): void;
  texImage2D(
    target: GLenum,
    level: GLint,
    internalformat: GLint,
    width: GLsizei,
    height: GLsizei,
    border: GLint,
    format: GLenum,
    type: GLenum,
    pboOffset: GLintptr,
  ): void;
  texImage2D(
    target: GLenum,
    level: GLint,
    internalformat: GLint,
    width: GLsizei,
    height: GLsizei,
    border: GLint,
    format: GLenum,
    type: GLenum,
    source: TexImageSource,
  ): void;
  texImage2D(
    target: GLenum,
    level: GLint,
    internalformat: GLint,
    width: GLsizei,
    height: GLsizei,
    border: GLint,
    format: GLenum,
    type: GLenum,
    srcData: ArrayBufferView,
    srcOffset: number,
  ): void;
  texSubImage2D(
    target: GLenum,
    level: GLint,
    xoffset: GLint,
    yoffset: GLint,
    width: GLsizei,
    height: GLsizei,
    format: GLenum,
    type: GLenum,
    pixels: ArrayBufferView | null,
  ): void;
  texSubImage2D(
    target: GLenum,
    level: GLint,
    xoffset: GLint,
    yoffset: GLint,
    format: GLenum,
    type: GLenum,
    source: TexImageSource,
  ): void;
  texSubImage2D(
    target: GLenum,
    level: GLint,
    xoffset: GLint,
    yoffset: GLint,
    width: GLsizei,
    height: GLsizei,
    format: GLenum,
    type: GLenum,
    pboOffset: GLintptr,
  ): void;
  texSubImage2D(
    target: GLenum,
    level: GLint,
    xoffset: GLint,
    yoffset: GLint,
    width: GLsizei,
    height: GLsizei,
    format: GLenum,
    type: GLenum,
    source: TexImageSource,
  ): void;
  texSubImage2D(
    target: GLenum,
    level: GLint,
    xoffset: GLint,
    yoffset: GLint,
    width: GLsizei,
    height: GLsizei,
    format: GLenum,
    type: GLenum,
    srcData: ArrayBufferView,
    srcOffset: number,
  ): void;
  uniform1fv(
    location: WebGLUniformLocation | null,
    data: Float32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  uniform1iv(
    location: WebGLUniformLocation | null,
    data: Int32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  uniform2fv(
    location: WebGLUniformLocation | null,
    data: Float32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  uniform2iv(
    location: WebGLUniformLocation | null,
    data: Int32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  uniform3fv(
    location: WebGLUniformLocation | null,
    data: Float32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  uniform3iv(
    location: WebGLUniformLocation | null,
    data: Int32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  uniform4fv(
    location: WebGLUniformLocation | null,
    data: Float32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  uniform4iv(
    location: WebGLUniformLocation | null,
    data: Int32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  uniformMatrix2fv(
    location: WebGLUniformLocation | null,
    transpose: GLboolean,
    data: Float32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  uniformMatrix3fv(
    location: WebGLUniformLocation | null,
    transpose: GLboolean,
    data: Float32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
  uniformMatrix4fv(
    location: WebGLUniformLocation | null,
    transpose: GLboolean,
    data: Float32List,
    srcOffset?: number,
    srcLength?: GLuint,
  ): void;
}

/*---------- webgpu ----------*/

// Contributes to:
//   - GPUDevice

type GPUBindingResource =
  | GPUSampler
  | GPUTextureView
  | GPUBufferBinding
  | GPUExternalTexture;

type GPUBufferDynamicOffset = number;

type GPUBufferUsageFlags = number;

type GPUColor = Array<number> | GPUColorDict;

type GPUColorWriteFlags = number;

type GPUCopyExternalImageSource =
  | ImageBitmap
  | ImageData
  | HTMLImageElement
  | HTMLVideoElement
  | VideoFrame
  | HTMLCanvasElement
  | OffscreenCanvas;

type GPUDepthBias = number;

type GPUExtent3D = Array<GPUIntegerCoordinate> | GPUExtent3DDict;

type GPUFlagsConstant = number;

type GPUIndex32 = number;

type GPUIntegerCoordinate = number;

type GPUIntegerCoordinateOut = number;

type GPUMapModeFlags = number;

type GPUOrigin2D = Array<GPUIntegerCoordinate> | GPUOrigin2DDict;

type GPUOrigin3D = Array<GPUIntegerCoordinate> | GPUOrigin3DDict;

type GPUPipelineConstantValue = number;

type GPUSampleMask = number;

type GPUShaderStageFlags = number;

type GPUSignedOffset32 = number;

type GPUSize32 = number;

type GPUSize32Out = number;

type GPUSize64 = number;

type GPUSize64Out = number;

type GPUStencilValue = number;

type GPUTextureUsageFlags = number;

type GPUAddressMode = 'clamp-to-edge' | 'repeat' | 'mirror-repeat';

type GPUAutoLayoutMode = 'auto';

type GPUBlendFactor =
  | 'zero'
  | 'one'
  | 'src'
  | 'one-minus-src'
  | 'src-alpha'
  | 'one-minus-src-alpha'
  | 'dst'
  | 'one-minus-dst'
  | 'dst-alpha'
  | 'one-minus-dst-alpha'
  | 'src-alpha-saturated'
  | 'constant'
  | 'one-minus-constant'
  | 'src1'
  | 'one-minus-src1'
  | 'src1-alpha'
  | 'one-minus-src1-alpha';

type GPUBlendOperation =
  | 'add'
  | 'subtract'
  | 'reverse-subtract'
  | 'min'
  | 'max';

type GPUBufferBindingType = 'uniform' | 'storage' | 'read-only-storage';

type GPUBufferMapState = 'unmapped' | 'pending' | 'mapped';

type GPUCanvasAlphaMode = 'opaque' | 'premultiplied';

type GPUCanvasToneMappingMode = 'standard' | 'extended';

type GPUCompareFunction =
  | 'never'
  | 'less'
  | 'equal'
  | 'less-equal'
  | 'greater'
  | 'not-equal'
  | 'greater-equal'
  | 'always';

type GPUCompilationMessageType = 'error' | 'warning' | 'info';

type GPUCullMode = 'none' | 'front' | 'back';

type GPUDeviceLostReason = 'unknown' | 'destroyed';

type GPUErrorFilter = 'validation' | 'out-of-memory' | 'internal';

type GPUFeatureName =
  | 'core-features-and-limits'
  | 'depth-clip-control'
  | 'depth32float-stencil8'
  | 'texture-compression-bc'
  | 'texture-compression-bc-sliced-3d'
  | 'texture-compression-etc2'
  | 'texture-compression-astc'
  | 'texture-compression-astc-sliced-3d'
  | 'timestamp-query'
  | 'indirect-first-instance'
  | 'shader-f16'
  | 'rg11b10ufloat-renderable'
  | 'bgra8unorm-storage'
  | 'float32-filterable'
  | 'float32-blendable'
  | 'clip-distances'
  | 'dual-source-blending'
  | 'subgroups';

type GPUFilterMode = 'nearest' | 'linear';

type GPUFrontFace = 'ccw' | 'cw';

type GPUIndexFormat = 'uint16' | 'uint32';

type GPULoadOp = 'load' | 'clear';

type GPUMipmapFilterMode = 'nearest' | 'linear';

type GPUPipelineErrorReason = 'validation' | 'internal';

type GPUPowerPreference = 'low-power' | 'high-performance';

type GPUPrimitiveTopology =
  | 'point-list'
  | 'line-list'
  | 'line-strip'
  | 'triangle-list'
  | 'triangle-strip';

type GPUQueryType = 'occlusion' | 'timestamp';

type GPUSamplerBindingType = 'filtering' | 'non-filtering' | 'comparison';

type GPUStencilOperation =
  | 'keep'
  | 'zero'
  | 'replace'
  | 'invert'
  | 'increment-clamp'
  | 'decrement-clamp'
  | 'increment-wrap'
  | 'decrement-wrap';

type GPUStorageTextureAccess = 'write-only' | 'read-only' | 'read-write';

type GPUStoreOp = 'store' | 'discard';

type GPUTextureAspect = 'all' | 'stencil-only' | 'depth-only';

type GPUTextureDimension = '1d' | '2d' | '3d';

type GPUTextureFormat =
  | 'r8unorm'
  | 'r8snorm'
  | 'r8uint'
  | 'r8sint'
  | 'r16uint'
  | 'r16sint'
  | 'r16float'
  | 'rg8unorm'
  | 'rg8snorm'
  | 'rg8uint'
  | 'rg8sint'
  | 'r32uint'
  | 'r32sint'
  | 'r32float'
  | 'rg16uint'
  | 'rg16sint'
  | 'rg16float'
  | 'rgba8unorm'
  | 'rgba8unorm-srgb'
  | 'rgba8snorm'
  | 'rgba8uint'
  | 'rgba8sint'
  | 'bgra8unorm'
  | 'bgra8unorm-srgb'
  | 'rgb9e5ufloat'
  | 'rgb10a2uint'
  | 'rgb10a2unorm'
  | 'rg11b10ufloat'
  | 'rg32uint'
  | 'rg32sint'
  | 'rg32float'
  | 'rgba16uint'
  | 'rgba16sint'
  | 'rgba16float'
  | 'rgba32uint'
  | 'rgba32sint'
  | 'rgba32float'
  | 'stencil8'
  | 'depth16unorm'
  | 'depth24plus'
  | 'depth24plus-stencil8'
  | 'depth32float'
  | 'depth32float-stencil8'
  | 'bc1-rgba-unorm'
  | 'bc1-rgba-unorm-srgb'
  | 'bc2-rgba-unorm'
  | 'bc2-rgba-unorm-srgb'
  | 'bc3-rgba-unorm'
  | 'bc3-rgba-unorm-srgb'
  | 'bc4-r-unorm'
  | 'bc4-r-snorm'
  | 'bc5-rg-unorm'
  | 'bc5-rg-snorm'
  | 'bc6h-rgb-ufloat'
  | 'bc6h-rgb-float'
  | 'bc7-rgba-unorm'
  | 'bc7-rgba-unorm-srgb'
  | 'etc2-rgb8unorm'
  | 'etc2-rgb8unorm-srgb'
  | 'etc2-rgb8a1unorm'
  | 'etc2-rgb8a1unorm-srgb'
  | 'etc2-rgba8unorm'
  | 'etc2-rgba8unorm-srgb'
  | 'eac-r11unorm'
  | 'eac-r11snorm'
  | 'eac-rg11unorm'
  | 'eac-rg11snorm'
  | 'astc-4x4-unorm'
  | 'astc-4x4-unorm-srgb'
  | 'astc-5x4-unorm'
  | 'astc-5x4-unorm-srgb'
  | 'astc-5x5-unorm'
  | 'astc-5x5-unorm-srgb'
  | 'astc-6x5-unorm'
  | 'astc-6x5-unorm-srgb'
  | 'astc-6x6-unorm'
  | 'astc-6x6-unorm-srgb'
  | 'astc-8x5-unorm'
  | 'astc-8x5-unorm-srgb'
  | 'astc-8x6-unorm'
  | 'astc-8x6-unorm-srgb'
  | 'astc-8x8-unorm'
  | 'astc-8x8-unorm-srgb'
  | 'astc-10x5-unorm'
  | 'astc-10x5-unorm-srgb'
  | 'astc-10x6-unorm'
  | 'astc-10x6-unorm-srgb'
  | 'astc-10x8-unorm'
  | 'astc-10x8-unorm-srgb'
  | 'astc-10x10-unorm'
  | 'astc-10x10-unorm-srgb'
  | 'astc-12x10-unorm'
  | 'astc-12x10-unorm-srgb'
  | 'astc-12x12-unorm'
  | 'astc-12x12-unorm-srgb';

type GPUTextureSampleType =
  | 'float'
  | 'unfilterable-float'
  | 'depth'
  | 'sint'
  | 'uint';

type GPUTextureViewDimension =
  | '1d'
  | '2d'
  | '2d-array'
  | 'cube'
  | 'cube-array'
  | '3d';

type GPUVertexFormat =
  | 'uint8'
  | 'uint8x2'
  | 'uint8x4'
  | 'sint8'
  | 'sint8x2'
  | 'sint8x4'
  | 'unorm8'
  | 'unorm8x2'
  | 'unorm8x4'
  | 'snorm8'
  | 'snorm8x2'
  | 'snorm8x4'
  | 'uint16'
  | 'uint16x2'
  | 'uint16x4'
  | 'sint16'
  | 'sint16x2'
  | 'sint16x4'
  | 'unorm16'
  | 'unorm16x2'
  | 'unorm16x4'
  | 'snorm16'
  | 'snorm16x2'
  | 'snorm16x4'
  | 'float16'
  | 'float16x2'
  | 'float16x4'
  | 'float32'
  | 'float32x2'
  | 'float32x3'
  | 'float32x4'
  | 'uint32'
  | 'uint32x2'
  | 'uint32x3'
  | 'uint32x4'
  | 'sint32'
  | 'sint32x2'
  | 'sint32x3'
  | 'sint32x4'
  | 'unorm10-10-10-2'
  | 'unorm8x4-bgra';

type GPUVertexStepMode = 'vertex' | 'instance';

type GPUBindGroupDescriptor = {
  ...GPUObjectDescriptorBase,
  entries: Array<GPUBindGroupEntry>,
  layout: GPUBindGroupLayout,
};

type GPUBindGroupEntry = {
  binding: GPUIndex32,
  resource: GPUBindingResource,
};

type GPUBindGroupLayoutDescriptor = {
  ...GPUObjectDescriptorBase,
  entries: Array<GPUBindGroupLayoutEntry>,
};

type GPUBindGroupLayoutEntry = {
  binding: GPUIndex32,
  buffer: GPUBufferBindingLayout,
  externalTexture: GPUExternalTextureBindingLayout,
  sampler: GPUSamplerBindingLayout,
  storageTexture: GPUStorageTextureBindingLayout,
  texture: GPUTextureBindingLayout,
  visibility: GPUShaderStageFlags,
};

type GPUBlendComponent = {
  dstFactor: GPUBlendFactor,
  operation: GPUBlendOperation,
  srcFactor: GPUBlendFactor,
};

type GPUBlendState = {
  alpha: GPUBlendComponent,
  color: GPUBlendComponent,
};

type GPUBufferBinding = {
  buffer: GPUBuffer,
  offset: GPUSize64,
  size: GPUSize64,
};

type GPUBufferBindingLayout = {
  hasDynamicOffset: boolean,
  minBindingSize: GPUSize64,
  type: GPUBufferBindingType,
};

type GPUBufferDescriptor = {
  ...GPUObjectDescriptorBase,
  mappedAtCreation: boolean,
  size: GPUSize64,
  usage: GPUBufferUsageFlags,
};

type GPUCanvasConfiguration = {
  alphaMode: GPUCanvasAlphaMode,
  colorSpace: PredefinedColorSpace,
  device: GPUDevice,
  format: GPUTextureFormat,
  toneMapping: GPUCanvasToneMapping,
  usage: GPUTextureUsageFlags,
  viewFormats: Array<GPUTextureFormat>,
};

type GPUCanvasToneMapping = {
  mode: GPUCanvasToneMappingMode,
};

type GPUColorDict = {
  a: number,
  b: number,
  g: number,
  r: number,
};

type GPUColorTargetState = {
  blend: GPUBlendState,
  format: GPUTextureFormat,
  writeMask: GPUColorWriteFlags,
};

type GPUCommandBufferDescriptor = {
  ...GPUObjectDescriptorBase,
};

type GPUCommandEncoderDescriptor = {
  ...GPUObjectDescriptorBase,
};

type GPUComputePassDescriptor = {
  ...GPUObjectDescriptorBase,
  timestampWrites: GPUComputePassTimestampWrites,
};

type GPUComputePassTimestampWrites = {
  beginningOfPassWriteIndex: GPUSize32,
  endOfPassWriteIndex: GPUSize32,
  querySet: GPUQuerySet,
};

type GPUComputePipelineDescriptor = {
  ...GPUPipelineDescriptorBase,
  compute: GPUProgrammableStage,
};

type GPUCopyExternalImageDestInfo = {
  ...GPUTexelCopyTextureInfo,
  colorSpace: PredefinedColorSpace,
  premultipliedAlpha: boolean,
};

type GPUCopyExternalImageSourceInfo = {
  flipY: boolean,
  origin: GPUOrigin2D,
  source: GPUCopyExternalImageSource,
};

type GPUDepthStencilState = {
  depthBias: GPUDepthBias,
  depthBiasClamp: number,
  depthBiasSlopeScale: number,
  depthCompare: GPUCompareFunction,
  depthWriteEnabled: boolean,
  format: GPUTextureFormat,
  stencilBack: GPUStencilFaceState,
  stencilFront: GPUStencilFaceState,
  stencilReadMask: GPUStencilValue,
  stencilWriteMask: GPUStencilValue,
};

type GPUDeviceDescriptor = {
  ...GPUObjectDescriptorBase,
  defaultQueue: GPUQueueDescriptor,
  requiredFeatures: Array<GPUFeatureName>,
  requiredLimits: {[string]: GPUSize64 | void},
};

type GPUExtent3DDict = {
  depthOrArrayLayers: GPUIntegerCoordinate,
  height: GPUIntegerCoordinate,
  width: GPUIntegerCoordinate,
};

type GPUExternalTextureBindingLayout = {};

type GPUExternalTextureDescriptor = {
  ...GPUObjectDescriptorBase,
  colorSpace: PredefinedColorSpace,
  source: HTMLVideoElement | VideoFrame,
};

type GPUFragmentState = {
  ...GPUProgrammableStage,
  targets: Array<GPUColorTargetState | null>,
};

type GPUMultisampleState = {
  alphaToCoverageEnabled: boolean,
  count: GPUSize32,
  mask: GPUSampleMask,
};

type GPUObjectDescriptorBase = {
  label: string,
};

type GPUOrigin2DDict = {
  x: GPUIntegerCoordinate,
  y: GPUIntegerCoordinate,
};

type GPUOrigin3DDict = {
  x: GPUIntegerCoordinate,
  y: GPUIntegerCoordinate,
  z: GPUIntegerCoordinate,
};

type GPUPipelineDescriptorBase = {
  ...GPUObjectDescriptorBase,
  layout: GPUPipelineLayout | GPUAutoLayoutMode,
};

type GPUPipelineErrorInit = {
  reason: GPUPipelineErrorReason,
};

type GPUPipelineLayoutDescriptor = {
  ...GPUObjectDescriptorBase,
  bindGroupLayouts: Array<GPUBindGroupLayout | null>,
};

type GPUPrimitiveState = {
  cullMode: GPUCullMode,
  frontFace: GPUFrontFace,
  stripIndexFormat: GPUIndexFormat,
  topology: GPUPrimitiveTopology,
  unclippedDepth: boolean,
};

type GPUProgrammableStage = {
  constants: {[string]: GPUPipelineConstantValue},
  entryPoint: string,
  module: GPUShaderModule,
};

type GPUQuerySetDescriptor = {
  ...GPUObjectDescriptorBase,
  count: GPUSize32,
  type: GPUQueryType,
};

type GPUQueueDescriptor = {
  ...GPUObjectDescriptorBase,
};

type GPURenderBundleDescriptor = {
  ...GPUObjectDescriptorBase,
};

type GPURenderBundleEncoderDescriptor = {
  ...GPURenderPassLayout,
  depthReadOnly: boolean,
  stencilReadOnly: boolean,
};

type GPURenderPassColorAttachment = {
  clearValue: GPUColor,
  depthSlice: GPUIntegerCoordinate,
  loadOp: GPULoadOp,
  resolveTarget: GPUTextureView,
  storeOp: GPUStoreOp,
  view: GPUTextureView,
};

type GPURenderPassDepthStencilAttachment = {
  depthClearValue: number,
  depthLoadOp: GPULoadOp,
  depthReadOnly: boolean,
  depthStoreOp: GPUStoreOp,
  stencilClearValue: GPUStencilValue,
  stencilLoadOp: GPULoadOp,
  stencilReadOnly: boolean,
  stencilStoreOp: GPUStoreOp,
  view: GPUTextureView,
};

type GPURenderPassDescriptor = {
  ...GPUObjectDescriptorBase,
  colorAttachments: Array<GPURenderPassColorAttachment | null>,
  depthStencilAttachment: GPURenderPassDepthStencilAttachment,
  maxDrawCount: GPUSize64,
  occlusionQuerySet: GPUQuerySet,
  timestampWrites: GPURenderPassTimestampWrites,
};

type GPURenderPassLayout = {
  ...GPUObjectDescriptorBase,
  colorFormats: Array<GPUTextureFormat | null>,
  depthStencilFormat: GPUTextureFormat,
  sampleCount: GPUSize32,
};

type GPURenderPassTimestampWrites = {
  beginningOfPassWriteIndex: GPUSize32,
  endOfPassWriteIndex: GPUSize32,
  querySet: GPUQuerySet,
};

type GPURenderPipelineDescriptor = {
  ...GPUPipelineDescriptorBase,
  depthStencil: GPUDepthStencilState,
  fragment: GPUFragmentState,
  multisample: GPUMultisampleState,
  primitive: GPUPrimitiveState,
  vertex: GPUVertexState,
};

type GPURequestAdapterOptions = {
  featureLevel: string,
  forceFallbackAdapter: boolean,
  powerPreference: GPUPowerPreference,
  xrCompatible: boolean,
};

type GPUSamplerBindingLayout = {
  type: GPUSamplerBindingType,
};

type GPUSamplerDescriptor = {
  ...GPUObjectDescriptorBase,
  addressModeU: GPUAddressMode,
  addressModeV: GPUAddressMode,
  addressModeW: GPUAddressMode,
  compare: GPUCompareFunction,
  lodMaxClamp: number,
  lodMinClamp: number,
  magFilter: GPUFilterMode,
  maxAnisotropy: number,
  minFilter: GPUFilterMode,
  mipmapFilter: GPUMipmapFilterMode,
};

type GPUShaderModuleCompilationHint = {
  entryPoint: string,
  layout: GPUPipelineLayout | GPUAutoLayoutMode,
};

type GPUShaderModuleDescriptor = {
  ...GPUObjectDescriptorBase,
  code: string,
  compilationHints: Array<GPUShaderModuleCompilationHint>,
};

type GPUStencilFaceState = {
  compare: GPUCompareFunction,
  depthFailOp: GPUStencilOperation,
  failOp: GPUStencilOperation,
  passOp: GPUStencilOperation,
};

type GPUStorageTextureBindingLayout = {
  access: GPUStorageTextureAccess,
  format: GPUTextureFormat,
  viewDimension: GPUTextureViewDimension,
};

type GPUTexelCopyBufferInfo = {
  ...GPUTexelCopyBufferLayout,
  buffer: GPUBuffer,
};

type GPUTexelCopyBufferLayout = {
  bytesPerRow: GPUSize32,
  offset: GPUSize64,
  rowsPerImage: GPUSize32,
};

type GPUTexelCopyTextureInfo = {
  aspect: GPUTextureAspect,
  mipLevel: GPUIntegerCoordinate,
  origin: GPUOrigin3D,
  texture: GPUTexture,
};

type GPUTextureBindingLayout = {
  multisampled: boolean,
  sampleType: GPUTextureSampleType,
  viewDimension: GPUTextureViewDimension,
};

type GPUTextureDescriptor = {
  ...GPUObjectDescriptorBase,
  dimension: GPUTextureDimension,
  format: GPUTextureFormat,
  mipLevelCount: GPUIntegerCoordinate,
  sampleCount: GPUSize32,
  size: GPUExtent3D,
  usage: GPUTextureUsageFlags,
  viewFormats: Array<GPUTextureFormat>,
};

type GPUTextureViewDescriptor = {
  ...GPUObjectDescriptorBase,
  arrayLayerCount: GPUIntegerCoordinate,
  aspect: GPUTextureAspect,
  baseArrayLayer: GPUIntegerCoordinate,
  baseMipLevel: GPUIntegerCoordinate,
  dimension: GPUTextureViewDimension,
  format: GPUTextureFormat,
  mipLevelCount: GPUIntegerCoordinate,
  usage: GPUTextureUsageFlags,
};

type GPUUncapturedErrorEventInit = {
  ...EventInit,
  error: GPUError,
};

type GPUVertexAttribute = {
  format: GPUVertexFormat,
  offset: GPUSize64,
  shaderLocation: GPUIndex32,
};

type GPUVertexBufferLayout = {
  arrayStride: GPUSize64,
  attributes: Array<GPUVertexAttribute>,
  stepMode: GPUVertexStepMode,
};

type GPUVertexState = {
  ...GPUProgrammableStage,
  buffers: Array<GPUVertexBufferLayout | null>,
};

declare namespace GPUBufferUsage {
  declare const COPY_DST: 0x0008;
  declare const COPY_SRC: 0x0004;
  declare const INDEX: 0x0010;
  declare const INDIRECT: 0x0100;
  declare const MAP_READ: 0x0001;
  declare const MAP_WRITE: 0x0002;
  declare const QUERY_RESOLVE: 0x0200;
  declare const STORAGE: 0x0080;
  declare const UNIFORM: 0x0040;
  declare const VERTEX: 0x0020;
}

declare namespace GPUColorWrite {
  declare const ALL: 0xf;
  declare const ALPHA: 0x8;
  declare const BLUE: 0x4;
  declare const GREEN: 0x2;
  declare const RED: 0x1;
}

declare namespace GPUMapMode {
  declare const READ: 0x0001;
  declare const WRITE: 0x0002;
}

declare namespace GPUShaderStage {
  declare const COMPUTE: 0x4;
  declare const FRAGMENT: 0x2;
  declare const VERTEX: 0x1;
}

declare namespace GPUTextureUsage {
  declare const COPY_DST: 0x02;
  declare const COPY_SRC: 0x01;
  declare const RENDER_ATTACHMENT: 0x10;
  declare const STORAGE_BINDING: 0x08;
  declare const TEXTURE_BINDING: 0x04;
}

declare class GPU {
  +wgslLanguageFeatures: WGSLLanguageFeatures;

  getPreferredCanvasFormat(): GPUTextureFormat;
  requestAdapter(
    options?: GPURequestAdapterOptions,
  ): Promise<GPUAdapter | null>;
}

declare class GPUAdapter {
  +features: GPUSupportedFeatures;
  +info: GPUAdapterInfo;
  +limits: GPUSupportedLimits;

  requestDevice(descriptor?: GPUDeviceDescriptor): Promise<GPUDevice>;
}

declare class GPUAdapterInfo {
  +architecture: string;
  +description: string;
  +device: string;
  +isFallbackAdapter: boolean;
  +subgroupMaxSize: number;
  +subgroupMinSize: number;
  +vendor: string;
}

declare class GPUBindGroup mixins mixin$GPUObjectBase {}

declare class GPUBindGroupLayout mixins mixin$GPUObjectBase {}

declare class GPUBuffer mixins mixin$GPUObjectBase {
  +mapState: GPUBufferMapState;
  +size: GPUSize64Out;
  +usage: GPUFlagsConstant;

  destroy(): void;
  getMappedRange(offset?: GPUSize64, size?: GPUSize64): ArrayBuffer;
  mapAsync(
    mode: GPUMapModeFlags,
    offset?: GPUSize64,
    size?: GPUSize64,
  ): Promise<void>;
  unmap(): void;
}

declare class GPUCanvasContext {
  +canvas: HTMLCanvasElement | OffscreenCanvas;

  configure(configuration: GPUCanvasConfiguration): void;
  getConfiguration(): GPUCanvasConfiguration | null;
  getCurrentTexture(): GPUTexture;
  unconfigure(): void;
}

declare class GPUCommandBuffer mixins mixin$GPUObjectBase {}

declare class GPUCommandEncoder
  mixins
    mixin$GPUObjectBase,
    mixin$GPUCommandsMixin,
    mixin$GPUDebugCommandsMixin
{
  beginComputePass(
    descriptor?: GPUComputePassDescriptor,
  ): GPUComputePassEncoder;
  beginRenderPass(descriptor: GPURenderPassDescriptor): GPURenderPassEncoder;
  clearBuffer(buffer: GPUBuffer, offset?: GPUSize64, size?: GPUSize64): void;
  copyBufferToBuffer(
    source: GPUBuffer,
    destination: GPUBuffer,
    size?: GPUSize64,
  ): void;
  copyBufferToBuffer(
    source: GPUBuffer,
    sourceOffset: GPUSize64,
    destination: GPUBuffer,
    destinationOffset: GPUSize64,
    size?: GPUSize64,
  ): void;
  copyBufferToTexture(
    source: GPUTexelCopyBufferInfo,
    destination: GPUTexelCopyTextureInfo,
    copySize: GPUExtent3D,
  ): void;
  copyTextureToBuffer(
    source: GPUTexelCopyTextureInfo,
    destination: GPUTexelCopyBufferInfo,
    copySize: GPUExtent3D,
  ): void;
  copyTextureToTexture(
    source: GPUTexelCopyTextureInfo,
    destination: GPUTexelCopyTextureInfo,
    copySize: GPUExtent3D,
  ): void;
  finish(descriptor?: GPUCommandBufferDescriptor): GPUCommandBuffer;
  resolveQuerySet(
    querySet: GPUQuerySet,
    firstQuery: GPUSize32,
    queryCount: GPUSize32,
    destination: GPUBuffer,
    destinationOffset: GPUSize64,
  ): void;
}

declare class GPUCompilationInfo {
  +messages: $ReadOnlyArray<GPUCompilationMessage>;
}

declare class GPUCompilationMessage {
  +length: number;
  +lineNum: number;
  +linePos: number;
  +message: string;
  +offset: number;
  +type: GPUCompilationMessageType;
}

declare class GPUComputePassEncoder
  mixins
    mixin$GPUObjectBase,
    mixin$GPUCommandsMixin,
    mixin$GPUDebugCommandsMixin,
    mixin$GPUBindingCommandsMixin
{
  dispatchWorkgroups(
    workgroupCountX: GPUSize32,
    workgroupCountY?: GPUSize32,
    workgroupCountZ?: GPUSize32,
  ): void;
  dispatchWorkgroupsIndirect(
    indirectBuffer: GPUBuffer,
    indirectOffset: GPUSize64,
  ): void;
  end(): void;
  setPipeline(pipeline: GPUComputePipeline): void;
}

declare class GPUComputePipeline
  mixins mixin$GPUObjectBase, mixin$GPUPipelineBase {}

declare class GPUDevice extends EventTarget mixins mixin$GPUObjectBase {
  +adapterInfo: GPUAdapterInfo;
  +features: GPUSupportedFeatures;
  +limits: GPUSupportedLimits;
  +lost: Promise<GPUDeviceLostInfo>;
  onuncapturederror: EventHandler;
  +queue: GPUQueue;

  createBindGroup(descriptor: GPUBindGroupDescriptor): GPUBindGroup;
  createBindGroupLayout(
    descriptor: GPUBindGroupLayoutDescriptor,
  ): GPUBindGroupLayout;
  createBuffer(descriptor: GPUBufferDescriptor): GPUBuffer;
  createCommandEncoder(
    descriptor?: GPUCommandEncoderDescriptor,
  ): GPUCommandEncoder;
  createComputePipeline(
    descriptor: GPUComputePipelineDescriptor,
  ): GPUComputePipeline;
  createComputePipelineAsync(
    descriptor: GPUComputePipelineDescriptor,
  ): Promise<GPUComputePipeline>;
  createPipelineLayout(
    descriptor: GPUPipelineLayoutDescriptor,
  ): GPUPipelineLayout;
  createQuerySet(descriptor: GPUQuerySetDescriptor): GPUQuerySet;
  createRenderBundleEncoder(
    descriptor: GPURenderBundleEncoderDescriptor,
  ): GPURenderBundleEncoder;
  createRenderPipeline(
    descriptor: GPURenderPipelineDescriptor,
  ): GPURenderPipeline;
  createRenderPipelineAsync(
    descriptor: GPURenderPipelineDescriptor,
  ): Promise<GPURenderPipeline>;
  createSampler(descriptor?: GPUSamplerDescriptor): GPUSampler;
  createShaderModule(descriptor: GPUShaderModuleDescriptor): GPUShaderModule;
  createTexture(descriptor: GPUTextureDescriptor): GPUTexture;
  destroy(): void;
  importExternalTexture(
    descriptor: GPUExternalTextureDescriptor,
  ): GPUExternalTexture;
  popErrorScope(): Promise<GPUError | null>;
  pushErrorScope(filter: GPUErrorFilter): void;
}

declare class GPUDeviceLostInfo {
  +message: string;
  +reason: GPUDeviceLostReason;
}

declare class GPUError {
  +message: string;
}

declare class GPUExternalTexture mixins mixin$GPUObjectBase {}

declare class GPUInternalError extends GPUError {
  constructor(message: string): void;
}

declare class GPUOutOfMemoryError extends GPUError {
  constructor(message: string): void;
}

declare class GPUPipelineError extends DOMException {
  +reason: GPUPipelineErrorReason;

  constructor(message?: string, options: GPUPipelineErrorInit): void;
}

declare class GPUPipelineLayout mixins mixin$GPUObjectBase {}

declare class GPUQuerySet mixins mixin$GPUObjectBase {
  +count: GPUSize32Out;
  +type: GPUQueryType;

  destroy(): void;
}

declare class GPUQueue mixins mixin$GPUObjectBase {
  copyExternalImageToTexture(
    source: GPUCopyExternalImageSourceInfo,
    destination: GPUCopyExternalImageDestInfo,
    copySize: GPUExtent3D,
  ): void;
  onSubmittedWorkDone(): Promise<void>;
  submit(commandBuffers: Array<GPUCommandBuffer>): void;
  writeBuffer(
    buffer: GPUBuffer,
    bufferOffset: GPUSize64,
    data: AllowSharedBufferSource,
    dataOffset?: GPUSize64,
    size?: GPUSize64,
  ): void;
  writeTexture(
    destination: GPUTexelCopyTextureInfo,
    data: AllowSharedBufferSource,
    dataLayout: GPUTexelCopyBufferLayout,
    size: GPUExtent3D,
  ): void;
}

declare class GPURenderBundle mixins mixin$GPUObjectBase {}

declare class GPURenderBundleEncoder
  mixins
    mixin$GPUObjectBase,
    mixin$GPUCommandsMixin,
    mixin$GPUDebugCommandsMixin,
    mixin$GPUBindingCommandsMixin,
    mixin$GPURenderCommandsMixin
{
  finish(descriptor?: GPURenderBundleDescriptor): GPURenderBundle;
}

declare class GPURenderPassEncoder
  mixins
    mixin$GPUObjectBase,
    mixin$GPUCommandsMixin,
    mixin$GPUDebugCommandsMixin,
    mixin$GPUBindingCommandsMixin,
    mixin$GPURenderCommandsMixin
{
  beginOcclusionQuery(queryIndex: GPUSize32): void;
  end(): void;
  endOcclusionQuery(): void;
  executeBundles(bundles: Array<GPURenderBundle>): void;
  setBlendConstant(color: GPUColor): void;
  setScissorRect(
    x: GPUIntegerCoordinate,
    y: GPUIntegerCoordinate,
    width: GPUIntegerCoordinate,
    height: GPUIntegerCoordinate,
  ): void;
  setStencilReference(reference: GPUStencilValue): void;
  setViewport(
    x: number,
    y: number,
    width: number,
    height: number,
    minDepth: number,
    maxDepth: number,
  ): void;
}

declare class GPURenderPipeline
  mixins mixin$GPUObjectBase, mixin$GPUPipelineBase {}

declare class GPUSampler mixins mixin$GPUObjectBase {}

declare class GPUShaderModule mixins mixin$GPUObjectBase {
  getCompilationInfo(): Promise<GPUCompilationInfo>;
}

type GPUSupportedFeatures = Set<string>;

declare class GPUSupportedLimits {
  +maxBindGroups: number;
  +maxBindGroupsPlusVertexBuffers: number;
  +maxBindingsPerBindGroup: number;
  +maxBufferSize: number;
  +maxColorAttachmentBytesPerSample: number;
  +maxColorAttachments: number;
  +maxComputeInvocationsPerWorkgroup: number;
  +maxComputeWorkgroupSizeX: number;
  +maxComputeWorkgroupSizeY: number;
  +maxComputeWorkgroupSizeZ: number;
  +maxComputeWorkgroupsPerDimension: number;
  +maxComputeWorkgroupStorageSize: number;
  +maxDynamicStorageBuffersPerPipelineLayout: number;
  +maxDynamicUniformBuffersPerPipelineLayout: number;
  +maxInterStageShaderVariables: number;
  +maxSampledTexturesPerShaderStage: number;
  +maxSamplersPerShaderStage: number;
  +maxStorageBufferBindingSize: number;
  +maxStorageBuffersPerShaderStage: number;
  +maxStorageTexturesPerShaderStage: number;
  +maxTextureArrayLayers: number;
  +maxTextureDimension1D: number;
  +maxTextureDimension2D: number;
  +maxTextureDimension3D: number;
  +maxUniformBufferBindingSize: number;
  +maxUniformBuffersPerShaderStage: number;
  +maxVertexAttributes: number;
  +maxVertexBufferArrayStride: number;
  +maxVertexBuffers: number;
  +minStorageBufferOffsetAlignment: number;
  +minUniformBufferOffsetAlignment: number;
}

declare class GPUTexture mixins mixin$GPUObjectBase {
  +depthOrArrayLayers: GPUIntegerCoordinateOut;
  +dimension: GPUTextureDimension;
  +format: GPUTextureFormat;
  +height: GPUIntegerCoordinateOut;
  +mipLevelCount: GPUIntegerCoordinateOut;
  +sampleCount: GPUSize32Out;
  +usage: GPUFlagsConstant;
  +width: GPUIntegerCoordinateOut;

  createView(descriptor?: GPUTextureViewDescriptor): GPUTextureView;
  destroy(): void;
}

declare class GPUTextureView mixins mixin$GPUObjectBase {}

declare class GPUUncapturedErrorEvent extends Event {
  +error: GPUError;

  constructor(
    type: string,
    gpuUncapturedErrorEventInitDict: GPUUncapturedErrorEventInit,
  ): void;
}

declare class GPUValidationError extends GPUError {
  constructor(message: string): void;
}

type WGSLLanguageFeatures = Set<string>;

declare class mixin$GPUBindingCommandsMixin {
  setBindGroup(
    index: GPUIndex32,
    bindGroup: GPUBindGroup | null,
    dynamicOffsets?: Array<GPUBufferDynamicOffset>,
  ): void;
  setBindGroup(
    index: GPUIndex32,
    bindGroup: GPUBindGroup | null,
    dynamicOffsetsData: Uint32Array,
    dynamicOffsetsDataStart: GPUSize64,
    dynamicOffsetsDataLength: GPUSize32,
  ): void;
}

declare class mixin$GPUCommandsMixin {}

declare class mixin$GPUDebugCommandsMixin {
  insertDebugMarker(markerLabel: string): void;
  popDebugGroup(): void;
  pushDebugGroup(groupLabel: string): void;
}

declare class mixin$GPUObjectBase {
  label: string;
}

declare class mixin$GPUPipelineBase {
  getBindGroupLayout(index: number): GPUBindGroupLayout;
}

declare class mixin$GPURenderCommandsMixin {
  draw(
    vertexCount: GPUSize32,
    instanceCount?: GPUSize32,
    firstVertex?: GPUSize32,
    firstInstance?: GPUSize32,
  ): void;
  drawIndexed(
    indexCount: GPUSize32,
    instanceCount?: GPUSize32,
    firstIndex?: GPUSize32,
    baseVertex?: GPUSignedOffset32,
    firstInstance?: GPUSize32,
  ): void;
  drawIndexedIndirect(
    indirectBuffer: GPUBuffer,
    indirectOffset: GPUSize64,
  ): void;
  drawIndirect(indirectBuffer: GPUBuffer, indirectOffset: GPUSize64): void;
  setIndexBuffer(
    buffer: GPUBuffer,
    indexFormat: GPUIndexFormat,
    offset?: GPUSize64,
    size?: GPUSize64,
  ): void;
  setPipeline(pipeline: GPURenderPipeline): void;
  setVertexBuffer(
    slot: GPUIndex32,
    buffer: GPUBuffer | null,
    offset?: GPUSize64,
    size?: GPUSize64,
  ): void;
}

declare class mixin$NavigatorGPU {
  +gpu: GPU;
}

/*---------- webhid ----------*/

// Contributes to:
//   - Navigator
//   - WorkerNavigator

type HIDUnitSystem =
  | 'none'
  | 'si-linear'
  | 'si-rotation'
  | 'english-linear'
  | 'english-rotation'
  | 'vendor-defined'
  | 'reserved';

type HIDCollectionInfo = {
  children: Array<HIDCollectionInfo>,
  featureReports: Array<HIDReportInfo>,
  inputReports: Array<HIDReportInfo>,
  outputReports: Array<HIDReportInfo>,
  type: number,
  usage: number,
  usagePage: number,
};

type HIDConnectionEventInit = {
  ...EventInit,
  device: HIDDevice,
};

type HIDDeviceFilter = {
  productId: number,
  usage: number,
  usagePage: number,
  vendorId: number,
};

type HIDDeviceRequestOptions = {
  exclusionFilters: Array<HIDDeviceFilter>,
  filters: Array<HIDDeviceFilter>,
};

type HIDInputReportEventInit = {
  ...EventInit,
  data: DataView,
  device: HIDDevice,
  reportId: number,
};

type HIDReportInfo = {
  items: Array<HIDReportItem>,
  reportId: number,
};

type HIDReportItem = {
  hasNull: boolean,
  hasPreferredState: boolean,
  isAbsolute: boolean,
  isArray: boolean,
  isBufferedBytes: boolean,
  isConstant: boolean,
  isLinear: boolean,
  isRange: boolean,
  isVolatile: boolean,
  logicalMaximum: number,
  logicalMinimum: number,
  physicalMaximum: number,
  physicalMinimum: number,
  reportCount: number,
  reportSize: number,
  strings: Array<string>,
  unitExponent: number,
  unitFactorCurrentExponent: number,
  unitFactorLengthExponent: number,
  unitFactorLuminousIntensityExponent: number,
  unitFactorMassExponent: number,
  unitFactorTemperatureExponent: number,
  unitFactorTimeExponent: number,
  unitSystem: HIDUnitSystem,
  usageMaximum: number,
  usageMinimum: number,
  usages: Array<number>,
  wrap: boolean,
};

declare class HID extends EventTarget {
  onconnect: EventHandler;
  ondisconnect: EventHandler;

  getDevices(): Promise<Array<HIDDevice>>;
  requestDevice(options: HIDDeviceRequestOptions): Promise<Array<HIDDevice>>;
}

declare class HIDConnectionEvent extends Event {
  +device: HIDDevice;

  constructor(type: string, eventInitDict: HIDConnectionEventInit): void;
}

declare class HIDDevice extends EventTarget {
  +collections: $ReadOnlyArray<HIDCollectionInfo>;
  oninputreport: EventHandler;
  +opened: boolean;
  +productId: number;
  +productName: string;
  +vendorId: number;

  close(): Promise<void>;
  forget(): Promise<void>;
  open(): Promise<void>;
  receiveFeatureReport(reportId: number): Promise<DataView>;
  sendFeatureReport(reportId: number, data: BufferSource): Promise<void>;
  sendReport(reportId: number, data: BufferSource): Promise<void>;
}

declare class HIDInputReportEvent extends Event {
  +data: DataView;
  +device: HIDDevice;
  +reportId: number;

  constructor(type: string, eventInitDict: HIDInputReportEventInit): void;
}

/*---------- webidl ----------*/

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

type Function = (arguments_: any) => any;

type VoidFunction = () => void;

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

/*---------- webmidi ----------*/

// Contributes to:
//   - Navigator

type MIDIPortConnectionState = 'open' | 'closed' | 'pending';

type MIDIPortDeviceState = 'disconnected' | 'connected';

type MIDIPortType = 'input' | 'output';

type MIDIConnectionEventInit = {
  ...EventInit,
  port: MIDIPort,
};

type MIDIMessageEventInit = {
  ...EventInit,
  data: Uint8Array,
};

type MIDIOptions = {
  software: boolean,
  sysex: boolean,
};

type MidiPermissionDescriptor = {
  ...PermissionDescriptor,
  sysex: boolean,
};

declare class MIDIAccess extends EventTarget {
  +inputs: MIDIInputMap;
  onstatechange: EventHandler;
  +outputs: MIDIOutputMap;
  +sysexEnabled: boolean;
}

declare class MIDIConnectionEvent extends Event {
  +port: MIDIPort | null;

  constructor(type: string, eventInitDict?: MIDIConnectionEventInit): void;
}

declare class MIDIInput extends MIDIPort {
  onmidimessage: EventHandler;
}

type MIDIInputMap = Map<string, MIDIInput>;

declare class MIDIMessageEvent extends Event {
  +data: Uint8Array | null;

  constructor(type: string, eventInitDict?: MIDIMessageEventInit): void;
}

declare class MIDIOutput extends MIDIPort {
  clear(): void;
  send(data: Array<number>, timestamp?: number): void;
}

type MIDIOutputMap = Map<string, MIDIOutput>;

declare class MIDIPort extends EventTarget {
  +connection: MIDIPortConnectionState;
  +id: string;
  +manufacturer: string | null;
  +name: string | null;
  onstatechange: EventHandler;
  +state: MIDIPortDeviceState;
  +type: MIDIPortType;
  +version: string | null;

  close(): Promise<MIDIPort>;
  open(): Promise<MIDIPort>;
}

/*---------- webrtc-encoded-transform ----------*/

// Contributes to:
//   - RTCRtpSender
//   - RTCRtpReceiver
//   - DedicatedWorkerGlobalScope

type CryptoKeyID = SmallCryptoKeyID | bigint;

type RTCRtpTransform = SFrameTransform | RTCRtpScriptTransform;

type SmallCryptoKeyID = number;

type RTCEncodedVideoFrameType = 'empty' | 'key' | 'delta';

type SFrameTransformErrorEventType = 'authentication' | 'keyID' | 'syntax';

type SFrameTransformRole = 'encrypt' | 'decrypt';

type RTCEncodedAudioFrameMetadata = {
  captureTime: number,
  contributingSources: Array<number>,
  mimeType: string,
  payloadType: number,
  receiveTime: number,
  rtpTimestamp: number,
  senderCaptureTimeOffset: number,
  sequenceNumber: number,
  synchronizationSource: number,
};

type RTCEncodedAudioFrameOptions = {
  metadata: RTCEncodedAudioFrameMetadata,
};

type RTCEncodedVideoFrameMetadata = {
  captureTime: number,
  contributingSources: Array<number>,
  dependencies: Array<number>,
  frameId: number,
  height: number,
  mimeType: string,
  payloadType: number,
  receiveTime: number,
  rtpTimestamp: number,
  senderCaptureTimeOffset: number,
  spatialIndex: number,
  synchronizationSource: number,
  temporalIndex: number,
  timestamp: number,
  width: number,
};

type RTCEncodedVideoFrameOptions = {
  metadata: RTCEncodedVideoFrameMetadata,
};

type SFrameTransformErrorEventInit = {
  ...EventInit,
  errorType: SFrameTransformErrorEventType,
  frame: any,
  keyID: CryptoKeyID | null,
};

type SFrameTransformOptions = {
  role: SFrameTransformRole,
};

declare class KeyFrameRequestEvent extends Event {
  +rid: string | null;

  constructor(type: string, rid?: string): void;
}

declare class RTCEncodedAudioFrame {
  data: ArrayBuffer;

  constructor(
    originalFrame: RTCEncodedAudioFrame,
    options?: RTCEncodedAudioFrameOptions,
  ): void;

  getMetadata(): RTCEncodedAudioFrameMetadata;
}

declare class RTCEncodedVideoFrame {
  data: ArrayBuffer;
  +type: RTCEncodedVideoFrameType;

  constructor(
    originalFrame: RTCEncodedVideoFrame,
    options?: RTCEncodedVideoFrameOptions,
  ): void;

  getMetadata(): RTCEncodedVideoFrameMetadata;
}

declare class RTCRtpScriptTransform {
  constructor(worker: Worker, options?: any, transfer?: Array<Object>): void;
}

declare class RTCRtpScriptTransformer extends EventTarget {
  onkeyframerequest: EventHandler;
  +options: any;
  +readable: ReadableStream;
  +writable: WritableStream;

  generateKeyFrame(rid?: string): Promise<number>;
  sendKeyFrameRequest(): Promise<void>;
}

declare class RTCTransformEvent extends Event {
  +transformer: RTCRtpScriptTransformer;
}

declare class SFrameTransform
  extends EventTarget
  mixins mixin$GenericTransformStream
{
  onerror: EventHandler;

  constructor(options?: SFrameTransformOptions): void;

  setEncryptionKey(key: CryptoKey, keyID?: CryptoKeyID): Promise<void>;
}

declare class SFrameTransformErrorEvent extends Event {
  +errorType: SFrameTransformErrorEventType;
  +frame: any;
  +keyID: CryptoKeyID | null;

  constructor(type: string, eventInitDict: SFrameTransformErrorEventInit): void;
}

/*---------- webrtc-ice ----------*/

// Contributes to:
//   - RTCIceParameters
//   - RTCIceTransport

type RTCIceGatherOptions = {
  gatherPolicy: RTCIceTransportPolicy,
  iceServers: Array<RTCIceServer>,
};

/*---------- webrtc-identity ----------*/

// Contributes to:
//   - RTCPeerConnection
//   - RTCConfiguration
//   - RTCError
//   - RTCErrorInit
//   - MediaStreamConstraints
//   - MediaStreamTrack

type RTCErrorDetailTypeIdp =
  | 'idp-bad-script-failure'
  | 'idp-execution-failure'
  | 'idp-load-failure'
  | 'idp-need-login'
  | 'idp-timeout'
  | 'idp-tls-failure'
  | 'idp-token-expired'
  | 'idp-token-invalid';

type RTCIdentityAssertionResult = {
  assertion: string,
  idp: RTCIdentityProviderDetails,
};

type RTCIdentityProvider = {
  generateAssertion: GenerateAssertionCallback,
  validateAssertion: ValidateAssertionCallback,
};

type RTCIdentityProviderDetails = {
  domain: string,
  protocol: string,
};

type RTCIdentityProviderOptions = {
  peerIdentity: string,
  protocol: string,
  usernameHint: string,
};

type RTCIdentityValidationResult = {
  contents: string,
  identity: string,
};

type GenerateAssertionCallback = (
  contents: string,
  origin: string,
  options: RTCIdentityProviderOptions,
) => Promise<RTCIdentityAssertionResult>;

type ValidateAssertionCallback = (
  assertion: string,
  origin: string,
) => Promise<RTCIdentityValidationResult>;

declare class RTCIdentityAssertion {
  idp: string;
  name: string;

  constructor(idp: string, name: string): void;
}

declare class RTCIdentityProviderGlobalScope extends WorkerGlobalScope {
  +rtcIdentityProvider: RTCIdentityProviderRegistrar;
}

declare class RTCIdentityProviderRegistrar {
  register(idp: RTCIdentityProvider): void;
}

/*---------- webrtc-priority ----------*/

// Contributes to:
//   - RTCRtpEncodingParameters
//   - RTCDataChannel
//   - RTCDataChannelInit

type RTCPriorityType = 'very-low' | 'low' | 'medium' | 'high';

/*---------- webrtc-stats ----------*/

type RTCDtlsRole = 'client' | 'server' | 'unknown';

type RTCQualityLimitationReason = 'none' | 'cpu' | 'bandwidth' | 'other';

type RTCStatsIceCandidatePairState =
  | 'frozen'
  | 'waiting'
  | 'in-progress'
  | 'failed'
  | 'succeeded';

type RTCStatsType =
  | 'codec'
  | 'inbound-rtp'
  | 'outbound-rtp'
  | 'remote-inbound-rtp'
  | 'remote-outbound-rtp'
  | 'media-source'
  | 'media-playout'
  | 'peer-connection'
  | 'data-channel'
  | 'transport'
  | 'candidate-pair'
  | 'local-candidate'
  | 'remote-candidate'
  | 'certificate';

type RTCAudioPlayoutStats = {
  ...RTCStats,
  kind: string,
  synthesizedSamplesDuration: number,
  synthesizedSamplesEvents: number,
  totalPlayoutDelay: number,
  totalSamplesCount: number,
  totalSamplesDuration: number,
};

type RTCAudioSourceStats = {
  ...RTCMediaSourceStats,
  audioLevel: number,
  echoReturnLoss: number,
  echoReturnLossEnhancement: number,
  totalAudioEnergy: number,
  totalSamplesDuration: number,
};

type RTCCertificateStats = {
  ...RTCStats,
  base64Certificate: string,
  fingerprint: string,
  fingerprintAlgorithm: string,
  issuerCertificateId: string,
};

type RTCCodecStats = {
  ...RTCStats,
  channels: number,
  clockRate: number,
  mimeType: string,
  payloadType: number,
  sdpFmtpLine: string,
  transportId: string,
};

type RTCDataChannelStats = {
  ...RTCStats,
  bytesReceived: number,
  bytesSent: number,
  dataChannelIdentifier: number,
  label: string,
  messagesReceived: number,
  messagesSent: number,
  protocol: string,
  state: RTCDataChannelState,
};

type RTCIceCandidatePairStats = {
  ...RTCStats,
  availableIncomingBitrate: number,
  availableOutgoingBitrate: number,
  bytesDiscardedOnSend: number,
  bytesReceived: number,
  bytesSent: number,
  consentRequestsSent: number,
  currentRoundTripTime: number,
  lastPacketReceivedTimestamp: number,
  lastPacketSentTimestamp: number,
  localCandidateId: string,
  nominated: boolean,
  packetsDiscardedOnSend: number,
  packetsReceived: number,
  packetsSent: number,
  remoteCandidateId: string,
  requestsReceived: number,
  requestsSent: number,
  responsesReceived: number,
  responsesSent: number,
  state: RTCStatsIceCandidatePairState,
  totalRoundTripTime: number,
  transportId: string,
};

type RTCIceCandidateStats = {
  ...RTCStats,
  address: string | null,
  candidateType: RTCIceCandidateType,
  foundation: string,
  port: number,
  priority: number,
  protocol: string,
  relatedAddress: string,
  relatedPort: number,
  relayProtocol: RTCIceServerTransportProtocol,
  tcpType: RTCIceTcpCandidateType,
  transportId: string,
  url: string,
  usernameFragment: string,
};

type RTCInboundRtpStreamStats = {
  ...RTCReceivedRtpStreamStats,
  audioLevel: number,
  bytesReceived: number,
  concealedSamples: number,
  concealmentEvents: number,
  corruptionMeasurements: number,
  decoderImplementation: string,
  estimatedPlayoutTimestamp: number,
  fecBytesReceived: number,
  fecPacketsDiscarded: number,
  fecPacketsReceived: number,
  fecSsrc: number,
  firCount: number,
  frameHeight: number,
  framesAssembledFromMultiplePackets: number,
  framesDecoded: number,
  framesDropped: number,
  framesPerSecond: number,
  framesReceived: number,
  framesRendered: number,
  frameWidth: number,
  freezeCount: number,
  headerBytesReceived: number,
  insertedSamplesForDeceleration: number,
  jitterBufferDelay: number,
  jitterBufferEmittedCount: number,
  jitterBufferMinimumDelay: number,
  jitterBufferTargetDelay: number,
  keyFramesDecoded: number,
  lastPacketReceivedTimestamp: number,
  mid: string,
  nackCount: number,
  packetsDiscarded: number,
  pauseCount: number,
  playoutId: string,
  pliCount: number,
  powerEfficientDecoder: boolean,
  qpSum: number,
  remoteId: string,
  removedSamplesForAcceleration: number,
  retransmittedBytesReceived: number,
  retransmittedPacketsReceived: number,
  rtxSsrc: number,
  silentConcealedSamples: number,
  totalAssemblyTime: number,
  totalAudioEnergy: number,
  totalCorruptionProbability: number,
  totalDecodeTime: number,
  totalFreezesDuration: number,
  totalInterFrameDelay: number,
  totalPausesDuration: number,
  totalProcessingDelay: number,
  totalSamplesDuration: number,
  totalSamplesReceived: number,
  totalSquaredCorruptionProbability: number,
  totalSquaredInterFrameDelay: number,
  trackIdentifier: string,
};

type RTCMediaSourceStats = {
  ...RTCStats,
  kind: string,
  trackIdentifier: string,
};

type RTCOutboundRtpStreamStats = {
  ...RTCSentRtpStreamStats,
  active: boolean,
  encoderImplementation: string,
  encodingIndex: number,
  firCount: number,
  frameHeight: number,
  framesEncoded: number,
  framesPerSecond: number,
  framesSent: number,
  frameWidth: number,
  headerBytesSent: number,
  hugeFramesSent: number,
  keyFramesEncoded: number,
  mediaSourceId: string,
  mid: string,
  nackCount: number,
  pliCount: number,
  powerEfficientEncoder: boolean,
  qpSum: number,
  qualityLimitationDurations: {[string]: number},
  qualityLimitationReason: RTCQualityLimitationReason,
  qualityLimitationResolutionChanges: number,
  remoteId: string,
  retransmittedBytesSent: number,
  retransmittedPacketsSent: number,
  rid: string,
  rtxSsrc: number,
  scalabilityMode: string,
  targetBitrate: number,
  totalEncodedBytesTarget: number,
  totalEncodeTime: number,
  totalPacketSendDelay: number,
};

type RTCPeerConnectionStats = {
  ...RTCStats,
  dataChannelsClosed: number,
  dataChannelsOpened: number,
};

type RTCReceivedRtpStreamStats = {
  ...RTCRtpStreamStats,
  jitter: number,
  packetsLost: number,
  packetsReceived: number,
  packetsReceivedWithCe: number,
  packetsReceivedWithEct1: number,
  packetsReportedAsLost: number,
  packetsReportedAsLostButRecovered: number,
};

type RTCRemoteInboundRtpStreamStats = {
  ...RTCReceivedRtpStreamStats,
  fractionLost: number,
  localId: string,
  packetsWithBleachedEct1Marking: number,
  roundTripTime: number,
  roundTripTimeMeasurements: number,
  totalRoundTripTime: number,
};

type RTCRemoteOutboundRtpStreamStats = {
  ...RTCSentRtpStreamStats,
  localId: string,
  remoteTimestamp: number,
  reportsSent: number,
  roundTripTime: number,
  roundTripTimeMeasurements: number,
  totalRoundTripTime: number,
};

type RTCRtpStreamStats = {
  ...RTCStats,
  codecId: string,
  kind: string,
  ssrc: number,
  transportId: string,
};

type RTCSentRtpStreamStats = {
  ...RTCRtpStreamStats,
  bytesSent: number,
  packetsSent: number,
  packetsSentWithEct1: number,
};

type RTCTransportStats = {
  ...RTCStats,
  bytesReceived: number,
  bytesSent: number,
  ccfbMessagesReceived: number,
  ccfbMessagesSent: number,
  dtlsCipher: string,
  dtlsRole: RTCDtlsRole,
  dtlsState: RTCDtlsTransportState,
  iceLocalUsernameFragment: string,
  iceRole: RTCIceRole,
  iceState: RTCIceTransportState,
  localCertificateId: string,
  packetsReceived: number,
  packetsSent: number,
  remoteCertificateId: string,
  selectedCandidatePairChanges: number,
  selectedCandidatePairId: string,
  srtpCipher: string,
  tlsVersion: string,
};

type RTCVideoSourceStats = {
  ...RTCMediaSourceStats,
  frames: number,
  framesPerSecond: number,
  height: number,
  width: number,
};

/*---------- webrtc-svc ----------*/

// Contributes to:
//   - RTCRtpEncodingParameters

/*---------- webrtc ----------*/

// Contributes to:
//   - RTCOfferOptions
//   - RTCPeerConnection
//   - RTCRtpSender

type RTCBundlePolicy = 'balanced' | 'max-compat' | 'max-bundle';

type RTCDataChannelState = 'connecting' | 'open' | 'closing' | 'closed';

type RTCDtlsTransportState =
  | 'new'
  | 'connecting'
  | 'connected'
  | 'closed'
  | 'failed';

type RTCErrorDetailType =
  | 'data-channel-failure'
  | 'dtls-failure'
  | 'fingerprint-failure'
  | 'sctp-failure'
  | 'sdp-syntax-error'
  | 'hardware-encoder-not-available'
  | 'hardware-encoder-error';

type RTCIceCandidateType = 'host' | 'srflx' | 'prflx' | 'relay';

type RTCIceComponent = 'rtp' | 'rtcp';

type RTCIceConnectionState =
  | 'closed'
  | 'failed'
  | 'disconnected'
  | 'new'
  | 'checking'
  | 'completed'
  | 'connected';

type RTCIceGathererState = 'new' | 'gathering' | 'complete';

type RTCIceGatheringState = 'new' | 'gathering' | 'complete';

type RTCIceProtocol = 'udp' | 'tcp';

type RTCIceRole = 'unknown' | 'controlling' | 'controlled';

type RTCIceServerTransportProtocol = 'udp' | 'tcp' | 'tls';

type RTCIceTcpCandidateType = 'active' | 'passive' | 'so';

type RTCIceTransportPolicy = 'relay' | 'all';

type RTCIceTransportState =
  | 'closed'
  | 'failed'
  | 'disconnected'
  | 'new'
  | 'checking'
  | 'completed'
  | 'connected';

type RTCPeerConnectionState =
  | 'closed'
  | 'failed'
  | 'disconnected'
  | 'new'
  | 'connecting'
  | 'connected';

type RTCRtcpMuxPolicy = 'require';

type RTCRtpTransceiverDirection =
  | 'sendrecv'
  | 'sendonly'
  | 'recvonly'
  | 'inactive'
  | 'stopped';

type RTCSctpTransportState = 'connecting' | 'connected' | 'closed';

type RTCSdpType = 'offer' | 'pranswer' | 'answer' | 'rollback';

type RTCSignalingState =
  | 'stable'
  | 'have-local-offer'
  | 'have-remote-offer'
  | 'have-local-pranswer'
  | 'have-remote-pranswer'
  | 'closed';

type RTCAnswerOptions = {
  ...RTCOfferAnswerOptions,
};

type RTCCertificateExpiration = {
  expires: number,
};

type RTCConfiguration = {
  bundlePolicy: RTCBundlePolicy,
  certificates: Array<RTCCertificate>,
  iceCandidatePoolSize: number,
  iceServers: Array<RTCIceServer>,
  iceTransportPolicy: RTCIceTransportPolicy,
  peerIdentity: string,
  rtcpMuxPolicy: RTCRtcpMuxPolicy,
};

type RTCDataChannelEventInit = {
  ...EventInit,
  channel: RTCDataChannel,
};

type RTCDataChannelInit = {
  id: number,
  maxPacketLifeTime: number,
  maxRetransmits: number,
  negotiated: boolean,
  ordered: boolean,
  priority: RTCPriorityType,
  protocol: string,
};

type RTCDtlsFingerprint = {
  algorithm: string,
  value: string,
};

type RTCDTMFToneChangeEventInit = {
  ...EventInit,
  tone: string,
};

type RTCErrorEventInit = {
  ...EventInit,
  error: RTCError,
};

type RTCErrorInit = {
  errorDetail: RTCErrorDetailType,
  httpRequestStatusCode: number,
  receivedAlert: number,
  sctpCauseCode: number,
  sdpLineNumber: number,
  sentAlert: number,
};

type RTCIceCandidateInit = {
  candidate: string,
  sdpMid: string | null,
  sdpMLineIndex: number | null,
  usernameFragment: string | null,
};

type RTCIceParameters = {
  iceLite: boolean,
  password: string,
  usernameFragment: string,
};

type RTCIceServer = {
  credential: string,
  urls: string | Array<string>,
  username: string,
};

type RTCLocalIceCandidateInit = {
  ...RTCIceCandidateInit,
  relayProtocol: RTCIceServerTransportProtocol | null,
  url: string | null,
};

type RTCLocalSessionDescriptionInit = {
  sdp: string,
  type: RTCSdpType,
};

type RTCOfferAnswerOptions = {};

type RTCOfferOptions = {
  ...RTCOfferAnswerOptions,
  iceRestart: boolean,
  offerToReceiveAudio: boolean,
  offerToReceiveVideo: boolean,
};

type RTCPeerConnectionIceErrorEventInit = {
  ...EventInit,
  address: string | null,
  errorCode: number,
  errorText: string,
  port: number | null,
  url: string,
};

type RTCPeerConnectionIceEventInit = {
  ...EventInit,
  candidate: RTCIceCandidate | null,
  url: string | null,
};

type RTCRtcpParameters = {
  cname: string,
  reducedSize: boolean,
};

type RTCRtpCapabilities = {
  codecs: Array<RTCRtpCodec>,
  headerExtensions: Array<RTCRtpHeaderExtensionCapability>,
};

type RTCRtpCodec = {
  channels: number,
  clockRate: number,
  mimeType: string,
  sdpFmtpLine: string,
};

type RTCRtpCodecParameters = {
  ...RTCRtpCodec,
  payloadType: number,
};

type RTCRtpCodingParameters = {
  rid: string,
};

type RTCRtpContributingSource = {
  audioLevel: number,
  rtpTimestamp: number,
  source: number,
  timestamp: number,
};

type RTCRtpEncodingParameters = {
  ...RTCRtpCodingParameters,
  active: boolean,
  codec: RTCRtpCodec,
  maxBitrate: number,
  maxFramerate: number,
  networkPriority: RTCPriorityType,
  priority: RTCPriorityType,
  scalabilityMode: string,
  scaleResolutionDownBy: number,
};

type RTCRtpHeaderExtensionCapability = {
  uri: string,
};

type RTCRtpHeaderExtensionParameters = {
  encrypted: boolean,
  id: number,
  uri: string,
};

type RTCRtpParameters = {
  codecs: Array<RTCRtpCodecParameters>,
  headerExtensions: Array<RTCRtpHeaderExtensionParameters>,
  rtcp: RTCRtcpParameters,
};

type RTCRtpReceiveParameters = {
  ...RTCRtpParameters,
};

type RTCRtpSendParameters = {
  ...RTCRtpParameters,
  degradationPreference: RTCDegradationPreference,
  encodings: Array<RTCRtpEncodingParameters>,
  transactionId: string,
};

type RTCRtpSynchronizationSource = {
  ...RTCRtpContributingSource,
};

type RTCRtpTransceiverInit = {
  direction: RTCRtpTransceiverDirection,
  sendEncodings: Array<RTCRtpEncodingParameters>,
  streams: Array<MediaStream>,
};

type RTCSessionDescriptionInit = {
  sdp: string,
  type: RTCSdpType,
};

type RTCSetParameterOptions = {};

type RTCStats = {
  id: string,
  timestamp: number,
  type: RTCStatsType,
};

type RTCTrackEventInit = {
  ...EventInit,
  receiver: RTCRtpReceiver,
  streams: Array<MediaStream>,
  track: MediaStreamTrack,
  transceiver: RTCRtpTransceiver,
};

type RTCPeerConnectionErrorCallback = (error: DOMException) => void;

type RTCSessionDescriptionCallback = (
  description: RTCSessionDescriptionInit,
) => void;

declare class RTCCertificate {
  +expires: EpochTimeStamp;

  getFingerprints(): Array<RTCDtlsFingerprint>;
}

declare class RTCDataChannel extends EventTarget {
  binaryType: BinaryType;
  +bufferedAmount: number;
  bufferedAmountLowThreshold: number;
  +id: number | null;
  +label: string;
  +maxPacketLifeTime: number | null;
  +maxRetransmits: number | null;
  +negotiated: boolean;
  onbufferedamountlow: EventHandler;
  onclose: EventHandler;
  onclosing: EventHandler;
  onerror: EventHandler;
  onmessage: EventHandler;
  onopen: EventHandler;
  +ordered: boolean;
  +priority: RTCPriorityType;
  +protocol: string;
  +readyState: RTCDataChannelState;

  close(): void;
  send(data: string): void;
  send(data: Blob): void;
  send(data: ArrayBuffer): void;
  send(data: ArrayBufferView): void;
}

declare class RTCDataChannelEvent extends Event {
  +channel: RTCDataChannel;

  constructor(type: string, eventInitDict: RTCDataChannelEventInit): void;
}

declare class RTCDtlsTransport extends EventTarget {
  +iceTransport: RTCIceTransport;
  onerror: EventHandler;
  onstatechange: EventHandler;
  +state: RTCDtlsTransportState;

  getRemoteCertificates(): Array<ArrayBuffer>;
}

declare class RTCDTMFSender extends EventTarget {
  +canInsertDTMF: boolean;
  ontonechange: EventHandler;
  +toneBuffer: string;

  insertDTMF(tones: string, duration?: number, interToneGap?: number): void;
}

declare class RTCDTMFToneChangeEvent extends Event {
  +tone: string;

  constructor(type: string, eventInitDict?: RTCDTMFToneChangeEventInit): void;
}

declare class RTCError extends DOMException {
  +errorDetail: RTCErrorDetailType;
  +httpRequestStatusCode: number | null;
  +receivedAlert: number | null;
  +sctpCauseCode: number | null;
  +sdpLineNumber: number | null;
  +sentAlert: number | null;

  constructor(init: RTCErrorInit, message?: string): void;
}

declare class RTCErrorEvent extends Event {
  +error: RTCError;

  constructor(type: string, eventInitDict: RTCErrorEventInit): void;
}

declare class RTCIceCandidate {
  +address: string | null;
  +candidate: string;
  +component: RTCIceComponent | null;
  +foundation: string | null;
  +port: number | null;
  +priority: number | null;
  +protocol: RTCIceProtocol | null;
  +relatedAddress: string | null;
  +relatedPort: number | null;
  +relayProtocol: RTCIceServerTransportProtocol | null;
  +sdpMid: string | null;
  +sdpMLineIndex: number | null;
  +tcpType: RTCIceTcpCandidateType | null;
  +type: RTCIceCandidateType | null;
  +url: string | null;
  +usernameFragment: string | null;

  constructor(candidateInitDict?: RTCLocalIceCandidateInit): void;

  toJSON(): RTCIceCandidateInit;
}

declare class RTCIceCandidatePair {
  +local: RTCIceCandidate;
  +remote: RTCIceCandidate;
}

declare class RTCIceTransport extends EventTarget {
  +component: RTCIceComponent;
  +gatheringState: RTCIceGathererState;
  onerror: EventHandler;
  ongatheringstatechange: EventHandler;
  onicecandidate: EventHandler;
  onselectedcandidatepairchange: EventHandler;
  onstatechange: EventHandler;
  +role: RTCIceRole;
  +state: RTCIceTransportState;

  constructor(): void;

  addRemoteCandidate(remoteCandidate?: RTCIceCandidateInit): void;
  gather(options?: RTCIceGatherOptions): void;
  getLocalCandidates(): Array<RTCIceCandidate>;
  getLocalParameters(): RTCIceParameters | null;
  getRemoteCandidates(): Array<RTCIceCandidate>;
  getRemoteParameters(): RTCIceParameters | null;
  getSelectedCandidatePair(): RTCIceCandidatePair | null;
  start(remoteParameters?: RTCIceParameters, role?: RTCIceRole): void;
  stop(): void;
}

declare class RTCPeerConnection extends EventTarget {
  +canTrickleIceCandidates: boolean | null;
  +connectionState: RTCPeerConnectionState;
  +currentLocalDescription: RTCSessionDescription | null;
  +currentRemoteDescription: RTCSessionDescription | null;
  +iceConnectionState: RTCIceConnectionState;
  +iceGatheringState: RTCIceGatheringState;
  +idpErrorInfo: string | null;
  +idpLoginUrl: string | null;
  +localDescription: RTCSessionDescription | null;
  onconnectionstatechange: EventHandler;
  ondatachannel: EventHandler;
  onicecandidate: EventHandler;
  onicecandidateerror: EventHandler;
  oniceconnectionstatechange: EventHandler;
  onicegatheringstatechange: EventHandler;
  onnegotiationneeded: EventHandler;
  onsignalingstatechange: EventHandler;
  ontrack: EventHandler;
  +peerIdentity: Promise<RTCIdentityAssertion>;
  +pendingLocalDescription: RTCSessionDescription | null;
  +pendingRemoteDescription: RTCSessionDescription | null;
  +remoteDescription: RTCSessionDescription | null;
  +sctp: RTCSctpTransport | null;
  +signalingState: RTCSignalingState;

  constructor(configuration?: RTCConfiguration): void;

  static generateCertificate(
    keygenAlgorithm: AlgorithmIdentifier,
  ): Promise<RTCCertificate>;
  addIceCandidate(candidate?: RTCIceCandidateInit): Promise<void>;
  addIceCandidate(
    candidate: RTCIceCandidateInit,
    successCallback: VoidFunction,
    failureCallback: RTCPeerConnectionErrorCallback,
  ): Promise<void>;
  addTrack(track: MediaStreamTrack, streams: MediaStream): RTCRtpSender;
  addTransceiver(
    trackOrKind: MediaStreamTrack | string,
    init?: RTCRtpTransceiverInit,
  ): RTCRtpTransceiver;
  close(): void;
  createAnswer(options?: RTCAnswerOptions): Promise<RTCSessionDescriptionInit>;
  createAnswer(
    successCallback: RTCSessionDescriptionCallback,
    failureCallback: RTCPeerConnectionErrorCallback,
  ): Promise<void>;
  createDataChannel(
    label: string,
    dataChannelDict?: RTCDataChannelInit,
  ): RTCDataChannel;
  createOffer(options?: RTCOfferOptions): Promise<RTCSessionDescriptionInit>;
  createOffer(
    successCallback: RTCSessionDescriptionCallback,
    failureCallback: RTCPeerConnectionErrorCallback,
    options?: RTCOfferOptions,
  ): Promise<void>;
  getConfiguration(): RTCConfiguration;
  getIdentityAssertion(): Promise<string>;
  getReceivers(): Array<RTCRtpReceiver>;
  getSenders(): Array<RTCRtpSender>;
  getStats(selector?: MediaStreamTrack | null): Promise<RTCStatsReport>;
  getTransceivers(): Array<RTCRtpTransceiver>;
  removeTrack(sender: RTCRtpSender): void;
  restartIce(): void;
  setConfiguration(configuration?: RTCConfiguration): void;
  setIdentityProvider(
    provider: string,
    options?: RTCIdentityProviderOptions,
  ): void;
  setLocalDescription(
    description?: RTCLocalSessionDescriptionInit,
  ): Promise<void>;
  setLocalDescription(
    description: RTCLocalSessionDescriptionInit,
    successCallback: VoidFunction,
    failureCallback: RTCPeerConnectionErrorCallback,
  ): Promise<void>;
  setRemoteDescription(description: RTCSessionDescriptionInit): Promise<void>;
  setRemoteDescription(
    description: RTCSessionDescriptionInit,
    successCallback: VoidFunction,
    failureCallback: RTCPeerConnectionErrorCallback,
  ): Promise<void>;
}

declare class RTCPeerConnectionIceErrorEvent extends Event {
  +address: string | null;
  +errorCode: number;
  +errorText: string;
  +port: number | null;
  +url: string;

  constructor(
    type: string,
    eventInitDict: RTCPeerConnectionIceErrorEventInit,
  ): void;
}

declare class RTCPeerConnectionIceEvent extends Event {
  +candidate: RTCIceCandidate | null;
  +url: string | null;

  constructor(
    type: string,
    eventInitDict?: RTCPeerConnectionIceEventInit,
  ): void;
}

declare class RTCRtpReceiver {
  jitterBufferTarget: number | null;
  +track: MediaStreamTrack;
  transform: RTCRtpTransform | null;
  +transport: RTCDtlsTransport | null;

  static getCapabilities(kind: string): RTCRtpCapabilities | null;
  getContributingSources(): Array<RTCRtpContributingSource>;
  getParameters(): RTCRtpReceiveParameters;
  getStats(): Promise<RTCStatsReport>;
  getSynchronizationSources(): Array<RTCRtpSynchronizationSource>;
}

declare class RTCRtpSender {
  +dtmf: RTCDTMFSender | null;
  +track: MediaStreamTrack | null;
  transform: RTCRtpTransform | null;
  +transport: RTCDtlsTransport | null;

  static getCapabilities(kind: string): RTCRtpCapabilities | null;
  generateKeyFrame(rids?: Array<string>): Promise<void>;
  getParameters(): RTCRtpSendParameters;
  getStats(): Promise<RTCStatsReport>;
  replaceTrack(withTrack: MediaStreamTrack | null): Promise<void>;
  setParameters(
    parameters: RTCRtpSendParameters,
    setParameterOptions?: RTCSetParameterOptions,
  ): Promise<void>;
  setStreams(streams: MediaStream): void;
}

declare class RTCRtpTransceiver {
  +currentDirection: RTCRtpTransceiverDirection | null;
  direction: RTCRtpTransceiverDirection;
  +mid: string | null;
  +receiver: RTCRtpReceiver;
  +sender: RTCRtpSender;

  setCodecPreferences(codecs: Array<RTCRtpCodec>): void;
  stop(): void;
}

declare class RTCSctpTransport extends EventTarget {
  +maxChannels: number | null;
  +maxMessageSize: number;
  onstatechange: EventHandler;
  +state: RTCSctpTransportState;
  +transport: RTCDtlsTransport;
}

declare class RTCSessionDescription {
  +sdp: string;
  +type: RTCSdpType;

  constructor(descriptionInitDict: RTCSessionDescriptionInit): void;

  toJSON(): RTCSessionDescriptionInit;
}

type RTCStatsReport = Map<string, Object>;

declare class RTCTrackEvent extends Event {
  +receiver: RTCRtpReceiver;
  +streams: $ReadOnlyArray<MediaStream>;
  +track: MediaStreamTrack;
  +transceiver: RTCRtpTransceiver;

  constructor(type: string, eventInitDict: RTCTrackEventInit): void;
}

/*---------- websockets ----------*/

type BinaryType = 'blob' | 'arraybuffer';

type CloseEventInit = {
  ...EventInit,
  code: number,
  reason: string,
  wasClean: boolean,
};

declare class CloseEvent extends Event {
  +code: number;
  +reason: string;
  +wasClean: boolean;

  constructor(type: string, eventInitDict?: CloseEventInit): void;
}

declare class WebSocket extends EventTarget {
  static +CLOSED: 3;
  static +CLOSING: 2;
  static +CONNECTING: 0;
  static +OPEN: 1;

  binaryType: BinaryType;
  +bufferedAmount: number;
  +extensions: string;
  onclose: EventHandler;
  onerror: EventHandler;
  onmessage: EventHandler;
  onopen: EventHandler;
  +protocol: string;
  +readyState: number;
  +url: string;

  constructor(url: string, protocols?: string | Array<string>): void;

  close(code?: number, reason?: string): void;
  send(data: BufferSource | Blob | string): void;
}

/*---------- webtransport ----------*/

type WebTransportCongestionControl = 'default' | 'throughput' | 'low-latency';

type WebTransportErrorSource = 'stream' | 'session';

type WebTransportReliabilityMode =
  | 'pending'
  | 'reliable-only'
  | 'supports-unreliable';

type WebTransportCloseInfo = {
  closeCode: number,
  reason: string,
};

type WebTransportConnectionStats = {
  atSendCapacity: boolean,
  bytesLost: number,
  bytesReceived: number,
  bytesSent: number,
  datagrams: WebTransportDatagramStats,
  estimatedSendRate: number | null,
  minRtt: number,
  packetsLost: number,
  packetsReceived: number,
  packetsSent: number,
  rttVariation: number,
  smoothedRtt: number,
};

type WebTransportDatagramStats = {
  droppedIncoming: number,
  expiredIncoming: number,
  expiredOutgoing: number,
  lostOutgoing: number,
};

type WebTransportErrorOptions = {
  source: WebTransportErrorSource,
  streamErrorCode: number | null,
};

type WebTransportHash = {
  algorithm: string,
  value: BufferSource,
};

type WebTransportOptions = {
  allowPooling: boolean,
  anticipatedConcurrentIncomingBidirectionalStreams: number | null,
  anticipatedConcurrentIncomingUnidirectionalStreams: number | null,
  congestionControl: WebTransportCongestionControl,
  protocols: Array<string>,
  requireUnreliable: boolean,
  serverCertificateHashes: Array<WebTransportHash>,
};

type WebTransportReceiveStreamStats = {
  bytesRead: number,
  bytesReceived: number,
};

type WebTransportSendOptions = {
  sendGroup: WebTransportSendGroup | null,
  sendOrder: number,
};

type WebTransportSendStreamOptions = {
  ...WebTransportSendOptions,
  waitUntilAvailable: boolean,
};

type WebTransportSendStreamStats = {
  bytesAcknowledged: number,
  bytesSent: number,
  bytesWritten: number,
};

declare class WebTransport {
  anticipatedConcurrentIncomingBidirectionalStreams: number | null;
  anticipatedConcurrentIncomingUnidirectionalStreams: number | null;
  +closed: Promise<WebTransportCloseInfo>;
  +congestionControl: WebTransportCongestionControl;
  +datagrams: WebTransportDatagramDuplexStream;
  +draining: Promise<void>;
  +incomingBidirectionalStreams: ReadableStream;
  +incomingUnidirectionalStreams: ReadableStream;
  +protocol: string;
  +ready: Promise<void>;
  +reliability: WebTransportReliabilityMode;
  +supportsReliableOnly: boolean;

  constructor(url: string, options?: WebTransportOptions): void;

  close(closeInfo?: WebTransportCloseInfo): void;
  createBidirectionalStream(
    options?: WebTransportSendStreamOptions,
  ): Promise<WebTransportBidirectionalStream>;
  createSendGroup(): WebTransportSendGroup;
  createUnidirectionalStream(
    options?: WebTransportSendStreamOptions,
  ): Promise<WebTransportSendStream>;
  getStats(): Promise<WebTransportConnectionStats>;
}

declare class WebTransportBidirectionalStream {
  +readable: WebTransportReceiveStream;
  +writable: WebTransportSendStream;
}

declare class WebTransportDatagramDuplexStream {
  incomingHighWaterMark: number;
  incomingMaxAge: number | null;
  +maxDatagramSize: number;
  outgoingHighWaterMark: number;
  outgoingMaxAge: number | null;
  +readable: ReadableStream;

  createWritable(
    options?: WebTransportSendOptions,
  ): WebTransportDatagramsWritable;
}

declare class WebTransportDatagramsWritable extends WritableStream {
  sendGroup: WebTransportSendGroup | null;
  sendOrder: number;
}

declare class WebTransportError extends DOMException {
  +source: WebTransportErrorSource;
  +streamErrorCode: number | null;

  constructor(message?: string, options?: WebTransportErrorOptions): void;
}

declare class WebTransportReceiveStream extends ReadableStream {
  getStats(): Promise<WebTransportReceiveStreamStats>;
}

declare class WebTransportSendGroup {
  getStats(): Promise<WebTransportSendStreamStats>;
}

declare class WebTransportSendStream extends WritableStream {
  sendGroup: WebTransportSendGroup | null;
  sendOrder: number;

  getStats(): Promise<WebTransportSendStreamStats>;
  getWriter(): WebTransportWriter;
}

declare class WebTransportWriter extends WritableStreamDefaultWriter {
  atomicWrite(chunk?: any): Promise<void>;
}

/*---------- webusb ----------*/

// Contributes to:
//   - Navigator
//   - WorkerNavigator

type USBDirection = 'in' | 'out';

type USBEndpointType = 'bulk' | 'interrupt' | 'isochronous';

type USBRecipient = 'device' | 'interface' | 'endpoint' | 'other';

type USBRequestType = 'standard' | 'class' | 'vendor';

type USBTransferStatus = 'ok' | 'stall' | 'babble';

type AllowedUSBDevice = {
  productId: number,
  serialNumber: string,
  vendorId: number,
};

type USBBlocklistEntry = {
  bcdDevice: number,
  idProduct: number,
  idVendor: number,
};

type USBConnectionEventInit = {
  ...EventInit,
  device: USBDevice,
};

type USBControlTransferParameters = {
  index: number,
  recipient: USBRecipient,
  request: number,
  requestType: USBRequestType,
  value: number,
};

type USBDeviceFilter = {
  classCode: number,
  productId: number,
  protocolCode: number,
  serialNumber: string,
  subclassCode: number,
  vendorId: number,
};

type USBDeviceRequestOptions = {
  exclusionFilters: Array<USBDeviceFilter>,
  filters: Array<USBDeviceFilter>,
};

type USBPermissionDescriptor = {
  ...PermissionDescriptor,
  exclusionFilters: Array<USBDeviceFilter>,
  filters: Array<USBDeviceFilter>,
};

type USBPermissionStorage = {
  allowedDevices: Array<AllowedUSBDevice>,
};

declare class USB extends EventTarget {
  onconnect: EventHandler;
  ondisconnect: EventHandler;

  getDevices(): Promise<Array<USBDevice>>;
  requestDevice(options: USBDeviceRequestOptions): Promise<USBDevice>;
}

declare class USBAlternateInterface {
  +alternateSetting: number;
  +endpoints: $ReadOnlyArray<USBEndpoint>;
  +interfaceClass: number;
  +interfaceName: string | null;
  +interfaceProtocol: number;
  +interfaceSubclass: number;

  constructor(deviceInterface: USBInterface, alternateSetting: number): void;
}

declare class USBConfiguration {
  +configurationName: string | null;
  +configurationValue: number;
  +interfaces: $ReadOnlyArray<USBInterface>;

  constructor(device: USBDevice, configurationValue: number): void;
}

declare class USBConnectionEvent extends Event {
  +device: USBDevice;

  constructor(type: string, eventInitDict: USBConnectionEventInit): void;
}

declare class USBDevice {
  +configuration: USBConfiguration | null;
  +configurations: $ReadOnlyArray<USBConfiguration>;
  +deviceClass: number;
  +deviceProtocol: number;
  +deviceSubclass: number;
  +deviceVersionMajor: number;
  +deviceVersionMinor: number;
  +deviceVersionSubminor: number;
  +manufacturerName: string | null;
  +opened: boolean;
  +productId: number;
  +productName: string | null;
  +serialNumber: string | null;
  +usbVersionMajor: number;
  +usbVersionMinor: number;
  +usbVersionSubminor: number;
  +vendorId: number;

  claimInterface(interfaceNumber: number): Promise<void>;
  clearHalt(direction: USBDirection, endpointNumber: number): Promise<void>;
  close(): Promise<void>;
  controlTransferIn(
    setup: USBControlTransferParameters,
    length: number,
  ): Promise<USBInTransferResult>;
  controlTransferOut(
    setup: USBControlTransferParameters,
    data?: BufferSource,
  ): Promise<USBOutTransferResult>;
  forget(): Promise<void>;
  isochronousTransferIn(
    endpointNumber: number,
    packetLengths: Array<number>,
  ): Promise<USBIsochronousInTransferResult>;
  isochronousTransferOut(
    endpointNumber: number,
    data: BufferSource,
    packetLengths: Array<number>,
  ): Promise<USBIsochronousOutTransferResult>;
  open(): Promise<void>;
  releaseInterface(interfaceNumber: number): Promise<void>;
  reset(): Promise<void>;
  selectAlternateInterface(
    interfaceNumber: number,
    alternateSetting: number,
  ): Promise<void>;
  selectConfiguration(configurationValue: number): Promise<void>;
  transferIn(
    endpointNumber: number,
    length: number,
  ): Promise<USBInTransferResult>;
  transferOut(
    endpointNumber: number,
    data: BufferSource,
  ): Promise<USBOutTransferResult>;
}

declare class USBEndpoint {
  +direction: USBDirection;
  +endpointNumber: number;
  +packetSize: number;
  +type: USBEndpointType;

  constructor(
    alternate: USBAlternateInterface,
    endpointNumber: number,
    direction: USBDirection,
  ): void;
}

declare class USBInterface {
  +alternate: USBAlternateInterface;
  +alternates: $ReadOnlyArray<USBAlternateInterface>;
  +claimed: boolean;
  +interfaceNumber: number;

  constructor(configuration: USBConfiguration, interfaceNumber: number): void;
}

declare class USBInTransferResult {
  +data: DataView | null;
  +status: USBTransferStatus;

  constructor(status: USBTransferStatus, data?: DataView | null): void;
}

declare class USBIsochronousInTransferPacket {
  +data: DataView | null;
  +status: USBTransferStatus;

  constructor(status: USBTransferStatus, data?: DataView | null): void;
}

declare class USBIsochronousInTransferResult {
  +data: DataView | null;
  +packets: $ReadOnlyArray<USBIsochronousInTransferPacket>;

  constructor(
    packets: Array<USBIsochronousInTransferPacket>,
    data?: DataView | null,
  ): void;
}

declare class USBIsochronousOutTransferPacket {
  +bytesWritten: number;
  +status: USBTransferStatus;

  constructor(status: USBTransferStatus, bytesWritten?: number): void;
}

declare class USBIsochronousOutTransferResult {
  +packets: $ReadOnlyArray<USBIsochronousOutTransferPacket>;

  constructor(packets: Array<USBIsochronousOutTransferPacket>): void;
}

declare class USBOutTransferResult {
  +bytesWritten: number;
  +status: USBTransferStatus;

  constructor(status: USBTransferStatus, bytesWritten?: number): void;
}

declare class USBPermissionResult extends PermissionStatus {
  devices: $ReadOnlyArray<USBDevice>;
}

/*---------- webvtt ----------*/

type LineAndPositionSetting = number | AutoKeyword;

type AlignSetting = 'start' | 'center' | 'end' | 'left' | 'right';

type AutoKeyword = 'auto';

type DirectionSetting = '' | 'rl' | 'lr';

type LineAlignSetting = 'start' | 'center' | 'end';

type PositionAlignSetting = 'line-left' | 'center' | 'line-right' | 'auto';

type ScrollSetting = '' | 'up';

declare class VTTCue extends TextTrackCue {
  align: AlignSetting;
  line: LineAndPositionSetting;
  lineAlign: LineAlignSetting;
  position: LineAndPositionSetting;
  positionAlign: PositionAlignSetting;
  region: VTTRegion | null;
  size: number;
  snapToLines: boolean;
  text: string;
  vertical: DirectionSetting;

  constructor(startTime: number, endTime: number, text: string): void;

  getCueAsHTML(): DocumentFragment;
}

declare class VTTRegion {
  id: string;
  lines: number;
  regionAnchorX: number;
  regionAnchorY: number;
  scroll: ScrollSetting;
  viewportAnchorX: number;
  viewportAnchorY: number;
  width: number;

  constructor(): void;
}

/*---------- webxr-ar-module ----------*/

// Contributes to:
//   - XRSession
//   - XRView

type XREnvironmentBlendMode = 'opaque' | 'alpha-blend' | 'additive';

type XRInteractionMode = 'screen-space' | 'world-space';

/*---------- webxr-depth-sensing ----------*/

// Contributes to:
//   - XRSessionInit
//   - XRSession
//   - XRFrame
//   - XRWebGLBinding

type XRDepthDataFormat = 'luminance-alpha' | 'float32' | 'unsigned-short';

type XRDepthType = 'raw' | 'smooth';

type XRDepthUsage = 'cpu-optimized' | 'gpu-optimized';

type XRDepthStateInit = {
  dataFormatPreference: Array<XRDepthDataFormat>,
  depthTypeRequest: Array<XRDepthType>,
  matchDepthView: boolean,
  usagePreference: Array<XRDepthUsage>,
};

declare class XRCPUDepthInformation extends XRDepthInformation {
  +data: ArrayBuffer;

  getDepthInMeters(x: number, y: number): number;
}

declare class XRDepthInformation mixins mixin$XRViewGeometry {
  +height: number;
  +normDepthBufferFromNormView: XRRigidTransform;
  +rawValueToMeters: number;
  +width: number;
}

/* partial */ declare class XRWebGLBinding {
  getDepthInformation(view: XRView): XRWebGLDepthInformation | null;
}

declare class XRWebGLDepthInformation extends XRDepthInformation {
  +imageIndex: number | null;
  +texture: WebGLTexture;
  +textureType: XRTextureType;
}

/*---------- webxr-dom-overlays ----------*/

// Contributes to:
//   - GlobalEventHandlers
//   - XRSessionInit
//   - XRSession

type XRDOMOverlayType = 'screen' | 'floating' | 'head-locked';

type XRDOMOverlayInit = {
  root: Element,
};

type XRDOMOverlayState = {
  type: XRDOMOverlayType,
};

/*---------- webxr-gamepads-module ----------*/

// Contributes to:
//   - XRInputSource

/*---------- webxr-hand-input ----------*/

// Contributes to:
//   - XRInputSource
//   - XRFrame

type XRHandJoint =
  | 'wrist'
  | 'thumb-metacarpal'
  | 'thumb-phalanx-proximal'
  | 'thumb-phalanx-distal'
  | 'thumb-tip'
  | 'index-finger-metacarpal'
  | 'index-finger-phalanx-proximal'
  | 'index-finger-phalanx-intermediate'
  | 'index-finger-phalanx-distal'
  | 'index-finger-tip'
  | 'middle-finger-metacarpal'
  | 'middle-finger-phalanx-proximal'
  | 'middle-finger-phalanx-intermediate'
  | 'middle-finger-phalanx-distal'
  | 'middle-finger-tip'
  | 'ring-finger-metacarpal'
  | 'ring-finger-phalanx-proximal'
  | 'ring-finger-phalanx-intermediate'
  | 'ring-finger-phalanx-distal'
  | 'ring-finger-tip'
  | 'pinky-finger-metacarpal'
  | 'pinky-finger-phalanx-proximal'
  | 'pinky-finger-phalanx-intermediate'
  | 'pinky-finger-phalanx-distal'
  | 'pinky-finger-tip';

declare class XRHand {
  +size: number;

  @@iterator(): Iterator<XRHandJoint, XRJointSpace>;

  get(key: XRHandJoint): XRJointSpace;
}

declare class XRJointPose extends XRPose {
  +radius: number;
}

declare class XRJointSpace extends XRSpace {
  +jointName: XRHandJoint;
}

/*---------- webxr-hit-test ----------*/

// Contributes to:
//   - XRSession
//   - XRFrame

type XRHitTestTrackableType = 'point' | 'plane' | 'mesh';

type XRHitTestOptionsInit = {
  entityTypes: Array<XRHitTestTrackableType>,
  offsetRay: XRRay,
  space: XRSpace,
};

type XRRayDirectionInit = {
  w: number,
  x: number,
  y: number,
  z: number,
};

type XRTransientInputHitTestOptionsInit = {
  entityTypes: Array<XRHitTestTrackableType>,
  offsetRay: XRRay,
  profile: string,
};

declare class XRHitTestResult {
  createAnchor(): Promise<XRAnchor>;
  getPose(baseSpace: XRSpace): XRPose | null;
}

declare class XRHitTestSource {
  cancel(): void;
}

declare class XRRay {
  +direction: DOMPointReadOnly;
  +matrix: Float32Array;
  +origin: DOMPointReadOnly;

  constructor(origin?: DOMPointInit, direction?: XRRayDirectionInit): void;
  constructor(transform: XRRigidTransform): void;
}

declare class XRTransientInputHitTestResult {
  +inputSource: XRInputSource;
  +results: $ReadOnlyArray<XRHitTestResult>;
}

declare class XRTransientInputHitTestSource {
  cancel(): void;
}

/*---------- webxr-lighting-estimation ----------*/

// Contributes to:
//   - XRSession
//   - XRFrame
//   - XRWebGLBinding

type XRReflectionFormat = 'srgba8' | 'rgba16f';

type XRLightProbeInit = {
  reflectionFormat: XRReflectionFormat,
};

declare class XRLightEstimate {
  +primaryLightDirection: DOMPointReadOnly;
  +primaryLightIntensity: DOMPointReadOnly;
  +sphericalHarmonicsCoefficients: Float32Array;
}

declare class XRLightProbe extends EventTarget {
  onreflectionchange: EventHandler;
  +probeSpace: XRSpace;
}

/* partial */ declare class XRWebGLBinding {
  getReflectionCubeMap(lightProbe: XRLightProbe): WebGLTexture | null;
}

/*---------- webxr-plane-detection ----------*/

// Contributes to:
//   - XRFrame
//   - XRSession

type XRPlaneOrientation = 'horizontal' | 'vertical';

declare class XRPlane {
  +lastChangedTime: number;
  +orientation: XRPlaneOrientation | null;
  +planeSpace: XRSpace;
  +polygon: $ReadOnlyArray<DOMPointReadOnly>;
  +semanticLabel: string | null;
}

type XRPlaneSet = Set<XRPlane>;

/*---------- webxr ----------*/

// Contributes to:
//   - Navigator
//   - WebGLContextAttributes
//   - WebGLRenderingContextBase

type XRWebGLRenderingContext = WebGLRenderingContext | WebGL2RenderingContext;

type XREye = 'none' | 'left' | 'right';

type XRHandedness = 'none' | 'left' | 'right';

type XRReferenceSpaceType =
  | 'viewer'
  | 'local'
  | 'local-floor'
  | 'bounded-floor'
  | 'unbounded';

type XRSessionMode = 'inline' | 'immersive-vr' | 'immersive-ar';

type XRTargetRayMode =
  | 'gaze'
  | 'tracked-pointer'
  | 'screen'
  | 'transient-pointer';

type XRVisibilityState = 'visible' | 'visible-blurred' | 'hidden';

type XRInputSourceEventInit = {
  ...EventInit,
  frame: XRFrame,
  inputSource: XRInputSource,
};

type XRInputSourcesChangeEventInit = {
  ...EventInit,
  added: Array<XRInputSource>,
  removed: Array<XRInputSource>,
  session: XRSession,
};

type XRPermissionDescriptor = {
  ...PermissionDescriptor,
  mode: XRSessionMode,
  optionalFeatures: Array<string>,
  requiredFeatures: Array<string>,
};

type XRReferenceSpaceEventInit = {
  ...EventInit,
  referenceSpace: XRReferenceSpace,
  transform: XRRigidTransform | null,
};

type XRRenderStateInit = {
  baseLayer: XRWebGLLayer | null,
  depthFar: number,
  depthNear: number,
  inlineVerticalFieldOfView: number,
  layers: Array<XRLayer> | null,
  passthroughFullyObscured: boolean,
};

type XRSessionEventInit = {
  ...EventInit,
  session: XRSession,
};

type XRSessionInit = {
  depthSensing: XRDepthStateInit,
  domOverlay: XRDOMOverlayInit | null,
  optionalFeatures: Array<string>,
  requiredFeatures: Array<string>,
};

type XRSessionSupportedPermissionDescriptor = {
  ...PermissionDescriptor,
  mode: XRSessionMode,
};

type XRWebGLLayerInit = {
  alpha: boolean,
  antialias: boolean,
  depth: boolean,
  framebufferScaleFactor: number,
  ignoreDepthValues: boolean,
  stencil: boolean,
};

type XRFrameRequestCallback = (time: number, frame: XRFrame) => void;

declare class XRBoundedReferenceSpace extends XRReferenceSpace {
  +boundsGeometry: $ReadOnlyArray<DOMPointReadOnly>;
}

declare class XRFrame {
  +detectedMeshes: XRMeshSet;
  +detectedPlanes: XRPlaneSet;
  +predictedDisplayTime: number;
  +session: XRSession;
  +trackedAnchors: XRAnchorSet;

  createAnchor(pose: XRRigidTransform, space: XRSpace): Promise<XRAnchor>;
  fillJointRadii(
    jointSpaces: Array<XRJointSpace>,
    radii: Float32Array,
  ): boolean;
  fillPoses(
    spaces: Array<XRSpace>,
    baseSpace: XRSpace,
    transforms: Float32Array,
  ): boolean;
  getDepthInformation(view: XRView): XRCPUDepthInformation | null;
  getHitTestResults(hitTestSource: XRHitTestSource): Array<XRHitTestResult>;
  getHitTestResultsForTransientInput(
    hitTestSource: XRTransientInputHitTestSource,
  ): Array<XRTransientInputHitTestResult>;
  getJointPose(joint: XRJointSpace, baseSpace: XRSpace): XRJointPose | null;
  getLightEstimate(lightProbe: XRLightProbe): XRLightEstimate | null;
  getPose(space: XRSpace, baseSpace: XRSpace): XRPose | null;
  getViewerPose(referenceSpace: XRReferenceSpace): XRViewerPose | null;
}

declare class XRInputSource {
  +gamepad: Gamepad | null;
  +gripSpace: XRSpace | null;
  +hand: XRHand | null;
  +handedness: XRHandedness;
  +profiles: $ReadOnlyArray<string>;
  +skipRendering: boolean;
  +targetRayMode: XRTargetRayMode;
  +targetRaySpace: XRSpace;
}

declare class XRInputSourceArray {
  +length: number;

  @@iterator(): Iterator<XRInputSource>;

  (index: number): XRInputSource;
}

declare class XRInputSourceEvent extends Event {
  +frame: XRFrame;
  +inputSource: XRInputSource;

  constructor(type: string, eventInitDict: XRInputSourceEventInit): void;
}

declare class XRInputSourcesChangeEvent extends Event {
  +added: $ReadOnlyArray<XRInputSource>;
  +removed: $ReadOnlyArray<XRInputSource>;
  +session: XRSession;

  constructor(type: string, eventInitDict: XRInputSourcesChangeEventInit): void;
}

declare class XRLayer extends EventTarget {}

declare class XRPermissionStatus extends PermissionStatus {
  granted: $ReadOnlyArray<string>;
}

declare class XRPose {
  +angularVelocity: DOMPointReadOnly | null;
  +emulatedPosition: boolean;
  +linearVelocity: DOMPointReadOnly | null;
  +transform: XRRigidTransform;
}

declare class XRReferenceSpace extends XRSpace {
  onreset: EventHandler;

  getOffsetReferenceSpace(originOffset: XRRigidTransform): XRReferenceSpace;
}

declare class XRReferenceSpaceEvent extends Event {
  +referenceSpace: XRReferenceSpace;
  +transform: XRRigidTransform | null;

  constructor(type: string, eventInitDict: XRReferenceSpaceEventInit): void;
}

declare class XRRenderState {
  +baseLayer: XRWebGLLayer | null;
  +depthFar: number;
  +depthNear: number;
  +inlineVerticalFieldOfView: number | null;
  +passthroughFullyObscured: boolean | null;
}

declare class XRRigidTransform {
  +inverse: XRRigidTransform;
  +matrix: Float32Array;
  +orientation: DOMPointReadOnly;
  +position: DOMPointReadOnly;

  constructor(position?: DOMPointInit, orientation?: DOMPointInit): void;
}

declare class XRSession extends EventTarget {
  +depthActive: boolean | null;
  +depthDataFormat: XRDepthDataFormat;
  +depthType: XRDepthType | null;
  +depthUsage: XRDepthUsage;
  +domOverlayState: XRDOMOverlayState | null;
  +enabledFeatures: $ReadOnlyArray<string>;
  +environmentBlendMode: XREnvironmentBlendMode;
  +frameRate: number | null;
  +inputSources: XRInputSourceArray;
  +interactionMode: XRInteractionMode;
  +isSystemKeyboardSupported: boolean;
  onend: EventHandler;
  onframeratechange: EventHandler;
  oninputsourceschange: EventHandler;
  onselect: EventHandler;
  onselectend: EventHandler;
  onselectstart: EventHandler;
  onsqueeze: EventHandler;
  onsqueezeend: EventHandler;
  onsqueezestart: EventHandler;
  onvisibilitychange: EventHandler;
  +persistentAnchors: $ReadOnlyArray<string>;
  +preferredReflectionFormat: XRReflectionFormat;
  +renderState: XRRenderState;
  +supportedFrameRates: Float32Array | null;
  +trackedSources: XRInputSourceArray;
  +visibilityState: XRVisibilityState;

  cancelAnimationFrame(handle: number): void;
  deletePersistentAnchor(uuid: string): Promise<void>;
  end(): Promise<void>;
  initiateRoomCapture(): Promise<void>;
  pauseDepthSensing(): void;
  requestAnimationFrame(callback: XRFrameRequestCallback): number;
  requestHitTestSource(options: XRHitTestOptionsInit): Promise<XRHitTestSource>;
  requestHitTestSourceForTransientInput(
    options: XRTransientInputHitTestOptionsInit,
  ): Promise<XRTransientInputHitTestSource>;
  requestLightProbe(options?: XRLightProbeInit): Promise<XRLightProbe>;
  requestReferenceSpace(type: XRReferenceSpaceType): Promise<XRReferenceSpace>;
  restorePersistentAnchor(uuid: string): Promise<XRAnchor>;
  resumeDepthSensing(): void;
  updateRenderState(state?: XRRenderStateInit): void;
  updateTargetFrameRate(rate: number): Promise<void>;
}

declare class XRSessionEvent extends Event {
  +session: XRSession;

  constructor(type: string, eventInitDict: XRSessionEventInit): void;
}

declare class XRSpace extends EventTarget {}

declare class XRSystem extends EventTarget {
  ondevicechange: EventHandler;

  isSessionSupported(mode: XRSessionMode): Promise<boolean>;
  requestSession(
    mode: XRSessionMode,
    options?: XRSessionInit,
  ): Promise<XRSession>;
}

declare class XRView mixins mixin$XRViewGeometry {
  +camera: XRCamera | null;
  +eye: XREye;
  +isFirstPersonObserver: boolean;
  +recommendedViewportScale: number | null;

  requestViewportScale(scale: number | null): void;
}

declare class XRViewerPose extends XRPose {
  +views: $ReadOnlyArray<XRView>;
}

declare class XRViewport {
  +height: number;
  +width: number;
  +x: number;
  +y: number;
}

declare class XRWebGLLayer extends XRLayer {
  +antialias: boolean;
  fixedFoveation: number | null;
  +framebuffer: WebGLFramebuffer | null;
  +framebufferHeight: number;
  +framebufferWidth: number;
  +ignoreDepthValues: boolean;

  constructor(
    session: XRSession,
    context: XRWebGLRenderingContext,
    layerInit?: XRWebGLLayerInit,
  ): void;

  static getNativeFramebufferScaleFactor(session: XRSession): number;
  getViewport(view: XRView): XRViewport | null;
}

declare class mixin$XRViewGeometry {
  +projectionMatrix: Float32Array;
  +transform: XRRigidTransform;
}

/*---------- window-controls-overlay ----------*/

// Contributes to:
//   - Navigator

type WindowControlsOverlayGeometryChangeEventInit = {
  ...EventInit,
  titlebarAreaRect: DOMRect,
  visible: boolean,
};

declare class WindowControlsOverlay extends EventTarget {
  ongeometrychange: EventHandler;
  +visible: boolean;

  getTitlebarAreaRect(): DOMRect;
}

declare class WindowControlsOverlayGeometryChangeEvent extends Event {
  +titlebarAreaRect: DOMRect;
  +visible: boolean;

  constructor(
    type: string,
    eventInitDict: WindowControlsOverlayGeometryChangeEventInit,
  ): void;
}

/*---------- window-management ----------*/

// Contributes to:
//   - Screen
//   - Window
//   - FullscreenOptions

declare class ScreenDetailed extends Screen {
  +availLeft: number;
  +availTop: number;
  +devicePixelRatio: number;
  +isInternal: boolean;
  +isPrimary: boolean;
  +label: string;
  +left: number;
  +top: number;
}

declare class ScreenDetails extends EventTarget {
  +currentScreen: ScreenDetailed;
  oncurrentscreenchange: EventHandler;
  onscreenschange: EventHandler;
  +screens: $ReadOnlyArray<ScreenDetailed>;
}

/*---------- xhr ----------*/

type FormDataEntryValue = File | string;

type XMLHttpRequestResponseType =
  | ''
  | 'arraybuffer'
  | 'blob'
  | 'document'
  | 'json'
  | 'text';

type ProgressEventInit = {
  ...EventInit,
  lengthComputable: boolean,
  loaded: number,
  total: number,
};

declare class FormData {
  constructor(form?: HTMLFormElement, submitter?: HTMLElement | null): void;

  @@iterator(): Iterator<string, FormDataEntryValue>;

  append(name: string, value: string): void;
  append(name: string, blobValue: Blob, filename?: string): void;
  delete(name: string): void;
  get(name: string): FormDataEntryValue | null;
  getAll(name: string): Array<FormDataEntryValue>;
  has(name: string): boolean;
  set(name: string, value: string): void;
  set(name: string, blobValue: Blob, filename?: string): void;
}

declare class ProgressEvent extends Event {
  +lengthComputable: boolean;
  +loaded: number;
  +total: number;

  constructor(type: string, eventInitDict?: ProgressEventInit): void;
}

declare class XMLHttpRequest extends XMLHttpRequestEventTarget {
  static +DONE: 4;
  static +HEADERS_RECEIVED: 2;
  static +LOADING: 3;
  static +OPENED: 1;
  static +UNSENT: 0;

  onreadystatechange: EventHandler;
  +readyState: number;
  +response: any;
  +responseText: string;
  responseType: XMLHttpRequestResponseType;
  +responseURL: string;
  +responseXML: Document | null;
  +status: number;
  +statusText: string;
  timeout: number;
  +upload: XMLHttpRequestUpload;
  withCredentials: boolean;

  constructor(): void;

  abort(): void;
  getAllResponseHeaders(): string;
  getResponseHeader(name: string): string | null;
  open(method: string, url: string): void;
  open(
    method: string,
    url: string,
    async: boolean,
    username?: string | null,
    password?: string | null,
  ): void;
  overrideMimeType(mime: string): void;
  send(body?: Document | XMLHttpRequestBodyInit | null): void;
  setAttributionReporting(options: AttributionReportingRequestOptions): void;
  setPrivateToken(privateToken: PrivateToken): void;
  setRequestHeader(name: string, value: string): void;
}

declare class XMLHttpRequestEventTarget extends EventTarget {
  onabort: EventHandler;
  onerror: EventHandler;
  onload: EventHandler;
  onloadend: EventHandler;
  onloadstart: EventHandler;
  onprogress: EventHandler;
  ontimeout: EventHandler;
}

declare class XMLHttpRequestUpload extends XMLHttpRequestEventTarget {}
