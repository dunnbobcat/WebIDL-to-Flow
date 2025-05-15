type StartViewTransitionOptions = {
  types: Array<string> | null,
  update: ViewTransitionUpdateCallback | null,
};

declare class CSSViewTransitionRule extends CSSRule {
  +navigation: string;
  +types: $ReadOnlyArray<string>;
}

/* partial */ declare class Document {
  startViewTransition(
    callbackOptions?: ViewTransitionUpdateCallback | StartViewTransitionOptions,
  ): ViewTransition;
}

/* partial */ declare class ViewTransition {
  types: ViewTransitionTypeSet;
}

type ViewTransitionTypeSet = Set<string>;
