type TopLevelStorageAccessPermissionDescriptor = {
  requestedOrigin: string,
};

/* partial */ interface Document {
  requestStorageAccessFor(requestedOrigin: string): void;
}
