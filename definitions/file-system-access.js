type StartInDirectory = WellKnownDirectory | FileSystemHandle;

type FileSystemPermissionMode = 'read' | 'readwrite';

type WellKnownDirectory =
  | 'desktop'
  | 'documents'
  | 'downloads'
  | 'music'
  | 'pictures'
  | 'videos';

type DirectoryPickerOptions = {
  id: string,
  mode: FileSystemPermissionMode,
  startIn: StartInDirectory,
};

type FilePickerAcceptType = {
  accept: {[string]: string | Array<string>},
  description: string,
};

type FilePickerOptions = {
  excludeAcceptAllOption: boolean,
  id: string,
  startIn: StartInDirectory,
  types: Array<FilePickerAcceptType>,
};

type FileSystemHandlePermissionDescriptor = {
  mode: FileSystemPermissionMode,
};

type FileSystemPermissionDescriptor = {
  handle: FileSystemHandle,
  mode: FileSystemPermissionMode,
};

type OpenFilePickerOptions = {
  ...FilePickerOptions,
  multiple: boolean,
};

type SaveFilePickerOptions = {
  ...FilePickerOptions,
  suggestedName: string | null,
};

/* partial */ declare class DataTransferItem {
  getAsFileSystemHandle(): Promise<FileSystemHandle | null>;
}

/* partial */ declare class FileSystemHandle {
  queryPermission(
    descriptor?: FileSystemHandlePermissionDescriptor,
  ): Promise<PermissionState>;
  requestPermission(
    descriptor?: FileSystemHandlePermissionDescriptor,
  ): Promise<PermissionState>;
}

/* partial */ declare class Window {
  showDirectoryPicker(
    options?: DirectoryPickerOptions,
  ): Promise<FileSystemDirectoryHandle>;
  showOpenFilePicker(
    options?: OpenFilePickerOptions,
  ): Promise<Array<FileSystemFileHandle>>;
  showSaveFilePicker(
    options?: SaveFilePickerOptions,
  ): Promise<FileSystemFileHandle>;
}
