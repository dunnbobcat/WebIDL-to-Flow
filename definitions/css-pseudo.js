declare class CSSPseudoElement extends EventTarget {
  +element: Element;
  +parent: Element | CSSPseudoElement;
  +type: string;

  pseudo(type: string): CSSPseudoElement | null;
}

/* partial */ declare class Element {
  pseudo(type: string): CSSPseudoElement | null;
}
