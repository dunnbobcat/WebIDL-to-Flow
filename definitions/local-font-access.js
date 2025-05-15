type QueryOptions = {
  postscriptNames: Array<string>,
};

declare class FontData {
  +family: string;
  +fullName: string;
  +postscriptName: string;
  +style: string;

  blob(): Promise<Blob>;
}

/* partial */ declare class Window {
  queryLocalFonts(options?: QueryOptions): Promise<Array<FontData>>;
}
