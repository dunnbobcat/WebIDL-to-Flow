type FileSystemFlags = {
  create: boolean,
  exclusive: boolean,
};

type ErrorCallback = (err: DOMException) => void;

type FileCallback = (file: File) => void;

type FileSystemEntriesCallback = (entries: Array<FileSystemEntry>) => void;

type FileSystemEntryCallback = (entry: FileSystemEntry) => void;

/* partial */ declare class DataTransferItem {
  webkitGetAsEntry(): FileSystemEntry | null;
}

/* partial */ declare class File {
  +webkitRelativePath: string;
}

declare class FileSystem {
  +name: string;
  +root: FileSystemDirectoryEntry;
}

declare class FileSystemDirectoryEntry extends FileSystemEntry {
  createReader(): FileSystemDirectoryReader;
  getDirectory(
    path?: string | null,
    options?: FileSystemFlags,
    successCallback?: FileSystemEntryCallback,
    errorCallback?: ErrorCallback,
  ): void;
  getFile(
    path?: string | null,
    options?: FileSystemFlags,
    successCallback?: FileSystemEntryCallback,
    errorCallback?: ErrorCallback,
  ): void;
}

declare class FileSystemDirectoryReader {
  readEntries(
    successCallback: FileSystemEntriesCallback,
    errorCallback?: ErrorCallback,
  ): void;
}

declare class FileSystemEntry {
  +filesystem: FileSystem;
  +fullPath: string;
  +isDirectory: boolean;
  +isFile: boolean;
  +name: string;

  getParent(
    successCallback?: FileSystemEntryCallback,
    errorCallback?: ErrorCallback,
  ): void;
}

declare class FileSystemFileEntry extends FileSystemEntry {
  file(successCallback: FileCallback, errorCallback?: ErrorCallback): void;
}

/* partial */ declare class HTMLInputElement {
  webkitdirectory: boolean;
  +webkitEntries: $ReadOnlyArray<FileSystemEntry>;
}
