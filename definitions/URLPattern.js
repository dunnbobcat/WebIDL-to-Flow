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
