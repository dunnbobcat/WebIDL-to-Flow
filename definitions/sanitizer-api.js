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
