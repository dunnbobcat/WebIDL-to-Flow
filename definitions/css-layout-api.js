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

/* partial */ declare namespace CSS {
  declare const layoutWorklet: Worklet;
}

declare class BreakToken {
  +childBreakTokens: ChildBreakToken;
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

  intrinsicSizes(): IntrinsicSizes;
  layoutNextFragment(
    constraints: LayoutConstraintsOptions,
    breakToken: ChildBreakToken,
  ): LayoutFragment;
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
