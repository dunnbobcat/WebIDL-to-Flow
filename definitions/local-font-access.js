type QueryOptions = {
  postscriptNames: Array<string>,
};

declare class FontData {
  +family: string;
  +fullName: string;
  +postscriptName: string;
  +style: string;

  blob(): Blob;
}

/* partial */ interface Window {
  queryLocalFonts(options?: QueryOptions): Array<FontData>;
}
