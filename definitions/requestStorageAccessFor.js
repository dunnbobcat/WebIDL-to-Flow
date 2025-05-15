type TopLevelStorageAccessPermissionDescriptor = {
  requestedOrigin: string,
};

/* partial */ declare class Document {
  requestStorageAccessFor(requestedOrigin: string): Promise<void>;
}
