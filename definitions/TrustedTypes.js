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
