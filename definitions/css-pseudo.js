declare class CSSPseudoElement extends EventTarget {
  +element: Element;
  +parent: Element | CSSPseudoElement;
  +type: string;

  pseudo(type: string): CSSPseudoElement | null;
}

/* partial */ interface Element {
  pseudo(type: string): CSSPseudoElement | null;
}
