# Web IDL to Flow

Convert [Web IDL definitions](https://webidl.spec.whatwg.org/) to [Flow library definitions](https://flow.org/en/docs/libdefs/).

Many Web standards are formalized in Web IDL, such as [DOM](https://dom.spec.whatwg.org/#idl-index), [HTML](https://html.spec.whatwg.org/), [SVG](https://www.w3.org/TR/SVG2/idl.html), and so on. This tool converts Web IDL into types for the [Flow type checker](https://flow.org/), which can be used for library and environment definitions (see also [flow-typed](https://flow-typed.github.io/flow-typed/#/)).

For exmaple, given this Web IDL snippet:

```
interface SVGGraphicsElement : SVGElement {
  [SameObject] readonly attribute SVGAnimatedTransformList transform;

  DOMRect getBBox(optional SVGBoundingBoxOptions options);
  DOMMatrix? getCTM();
  DOMMatrix? getScreenCTM();
};

SVGGraphicsElement includes SVGTests;
```

This tool will produce the following definition:

```
declare class SVGGraphicsElement extends SVGElement mixins SVGTests {
  +transform: SVGAnimatedTransformList;

  getBBox(options?: SVGBoundingBoxOptions): DOMRect;
  getCTM(): DOMMatrix | null;
  getScreenCTM(): DOMMatrix | null;
}
```

## Usage

First, install:

```
yarn install
yarn build
```

Then, pipe a list of Web IDL files to the `generate` command:

```
find path/to/input/ -type f | node dist/index.js generate path/to/output/
```

This repository comes packaged with several Web IDL files under /idl. Those can be converted to Flow definitions with this shorthand:

```
yarn go
```
