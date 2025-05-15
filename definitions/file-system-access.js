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
  accept: string | string | Array<string>,
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
  excludeAcceptAllOption: boolean,
  id: string,
  multiple: boolean,
  startIn: StartInDirectory,
  types: Array<FilePickerAcceptType>,
};

type SaveFilePickerOptions = {
  excludeAcceptAllOption: boolean,
  id: string,
  startIn: StartInDirectory,
  suggestedName: string | null,
  types: Array<FilePickerAcceptType>,
};

/* partial */ declare class DataTransferItem {
  getAsFileSystemHandle(): FileSystemHandle | null;
}

/* partial */ declare class FileSystemHandle {
  queryPermission(
    descriptor?: FileSystemHandlePermissionDescriptor,
  ): PermissionState;
  requestPermission(
    descriptor?: FileSystemHandlePermissionDescriptor,
  ): PermissionState;
}

/* partial */ declare class Window {
  showDirectoryPicker(
    options?: DirectoryPickerOptions,
  ): FileSystemDirectoryHandle;
  showOpenFilePicker(
    options?: OpenFilePickerOptions,
  ): Array<FileSystemFileHandle>;
  showSaveFilePicker(options?: SaveFilePickerOptions): FileSystemFileHandle;
}
