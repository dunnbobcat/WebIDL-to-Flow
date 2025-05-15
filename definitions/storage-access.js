/* partial */ declare class Document {
  hasStorageAccess(): Promise<boolean>;
  requestStorageAccess(): Promise<void>;
}
