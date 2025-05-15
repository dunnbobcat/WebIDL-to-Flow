type PermissionState = 'granted' | 'denied' | 'prompt';

type PermissionDescriptor = {
  name: string,
};

type PermissionSetParameters = {
  descriptor: Object,
  state: PermissionState,
};

/* partial */ declare class Navigator {
  +permissions: Permissions;
}

declare class Permissions {
  query(permissionDesc: Object): Promise<PermissionStatus>;
}

declare class PermissionStatus extends EventTarget {
  +name: string;
  onchange: EventHandler;
  +state: PermissionState;
}

/* partial */ declare class WorkerNavigator {
  +permissions: Permissions;
}
