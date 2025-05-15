type IPAddressSpace = 'public' | 'private' | 'local';

type PrivateNetworkAccessPermissionDescriptor = {
  id: string,
};

/* partial */ type RequestInit = {
  targetAddressSpace: IPAddressSpace,
};

/* partial */ declare class Request {
  +targetAddressSpace: IPAddressSpace;
}
