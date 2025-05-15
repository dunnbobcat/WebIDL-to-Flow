type PropertyDefinition = {
  inherits: boolean,
  initialValue: string,
  name: string,
  syntax: string,
};

/* partial */ declare namespace CSS {
  declare function registerProperty(definition: PropertyDefinition): void;
}

declare class CSSPropertyRule extends CSSRule {
  +inherits: boolean;
  +initialValue: string | null;
  +name: string;
  +syntax: string;
}
