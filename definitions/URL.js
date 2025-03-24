declare class URL {
  hash: string;
  host: string;
  hostname: string;
  href: string;
  +origin: string;
  password: string;
  pathname: string;
  port: string;
  protocol: string;
  search: string;
  +searchParams: URLSearchParams;
  username: string;

  constructor(url: string, base?: string): void;

  static canParse(url: string, base?: string): boolean;
  static parse(url: string, base?: string): URL | null;
  toJSON(): string;
}

declare class URLSearchParams {
  +size: number;

  constructor(init?: Array<Array<string>> | string | string | string): void;

  @@iterator(): Iterator<string, string>;

  append(name: string, value: string): void;
  delete(name: string, value?: string): void;
  get(name: string): string | null;
  getAll(name: string): Array<string>;
  has(name: string, value?: string): boolean;
  set(name: string, value: string): void;
  sort(): void;
  toString(): string;
}
