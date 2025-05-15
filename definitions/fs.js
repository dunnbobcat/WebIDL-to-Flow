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
  ): Promise<FileSystemDirectoryHandle>;
  getFileHandle(
    name: string,
    options?: FileSystemGetFileOptions,
  ): Promise<FileSystemFileHandle>;
  removeEntry(name: string, options?: FileSystemRemoveOptions): Promise<void>;
  resolve(possibleDescendant: FileSystemHandle): Promise<Array<string> | null>;
}

declare class FileSystemFileHandle extends FileSystemHandle {
  createSyncAccessHandle(): Promise<FileSystemSyncAccessHandle>;
  createWritable(
    options?: FileSystemCreateWritableOptions,
  ): Promise<FileSystemWritableFileStream>;
  getFile(): Promise<File>;
}

declare class FileSystemHandle {
  +kind: FileSystemHandleKind;
  +name: string;

  isSameEntry(other: FileSystemHandle): Promise<boolean>;
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
  seek(position: number): Promise<void>;
  truncate(size: number): Promise<void>;
  write(data: FileSystemWriteChunkType): Promise<void>;
}

/* partial */ declare class StorageManager {
  getDirectory(): Promise<FileSystemDirectoryHandle>;
}
