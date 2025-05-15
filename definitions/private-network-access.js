type IPAddressSpace = 'public' | 'private' | 'local';

type PrivateNetworkAccessPermissionDescriptor = {
  id: string,
};

/* partial */ type RequestInit = {
  targetAddressSpace: IPAddressSpace,
};

/* partial */ interface Request {
  +targetAddressSpace: IPAddressSpace;
}
