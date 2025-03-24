type URLPatternCompatible = string | URLPatternInit | URLPattern;

type URLPatternInput = string | URLPatternInit;

type URLPatternComponentResult = {
  input: string,
  groups: string | string | void,
};

type URLPatternInit = {
  protocol: string,
  username: string,
  password: string,
  hostname: string,
  port: string,
  pathname: string,
  search: string,
  hash: string,
  baseURL: string,
};

type URLPatternOptions = {
  ignoreCase: boolean,
};

type URLPatternResult = {
  inputs: Array<URLPatternInput>,
  protocol: URLPatternComponentResult,
  username: URLPatternComponentResult,
  password: URLPatternComponentResult,
  hostname: URLPatternComponentResult,
  port: URLPatternComponentResult,
  pathname: URLPatternComponentResult,
  search: URLPatternComponentResult,
  hash: URLPatternComponentResult,
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
