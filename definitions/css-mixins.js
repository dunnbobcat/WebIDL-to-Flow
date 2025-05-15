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
