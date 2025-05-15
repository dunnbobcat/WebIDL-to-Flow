type FileSystemWriteChunkType = BufferSource | Blob | string | WriteParams;

type FileSystemHandleKind = 'file' | 'directory';

type WriteCommandType = 'write' | 'seek' | 'truncate';

type FileSystemCreateWritableOptions = {
  keepExistingData: boolean,
};

type FileSystemGetDirectoryOptions = {
  create: boolean,
};

type FileSystemGetFileOptions = {
  create: boolean,
};

type FileSystemReadWriteOptions = {
  at: number,
};

type FileSystemRemoveOptions = {
  recursive: boolean,
};

type WriteParams = {
  data: BufferSource | Blob | string | null,
  position: number | null,
  size: number | null,
  type: WriteCommandType,
};

declare class FileSystemDirectoryHandle extends FileSystemHandle {
  @@iterator(): Iterator<string, FileSystemHandle>;

  getDirectoryHandle(
    name: string,
    options?: FileSystemGetDirectoryOptions,
  ): FileSystemDirectoryHandle;
  getFileHandle(
    name: string,
    options?: FileSystemGetFileOptions,
  ): FileSystemFileHandle;
  removeEntry(name: string, options?: FileSystemRemoveOptions): void;
  resolve(possibleDescendant: FileSystemHandle): Array<string> | null;
}

declare class FileSystemFileHandle extends FileSystemHandle {
  createSyncAccessHandle(): FileSystemSyncAccessHandle;
  createWritable(
    options?: FileSystemCreateWritableOptions,
  ): FileSystemWritableFileStream;
  getFile(): File;
}

declare class FileSystemHandle {
  +kind: FileSystemHandleKind;
  +name: string;

  isSameEntry(other: FileSystemHandle): boolean;
}

declare class FileSystemSyncAccessHandle {
  close(): void;
  flush(): void;
  getSize(): number;
  read(
    buffer: AllowSharedBufferSource,
    options?: FileSystemReadWriteOptions,
  ): number;
  truncate(newSize: number): void;
  write(
    buffer: AllowSharedBufferSource,
    options?: FileSystemReadWriteOptions,
  ): number;
}

declare class FileSystemWritableFileStream extends WritableStream {
  seek(position: number): void;
  truncate(size: number): void;
  write(data: FileSystemWriteChunkType): void;
}

/* partial */ interface StorageManager {
  getDirectory(): FileSystemDirectoryHandle;
}
