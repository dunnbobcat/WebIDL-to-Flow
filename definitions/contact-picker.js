type ContactProperty = 'address' | 'email' | 'icon' | 'name' | 'tel';

type ContactInfo = {
  address: Array<ContactAddress>,
  email: Array<string>,
  icon: Array<Blob>,
  name: Array<string>,
  tel: Array<string>,
};

type ContactsSelectOptions = {
  multiple: boolean,
};

declare class ContactAddress {
  +addressLine: $ReadOnlyArray<string>;
  +city: string;
  +country: string;
  +dependentLocality: string;
  +organization: string;
  +phone: string;
  +postalCode: string;
  +recipient: string;
  +region: string;
  +sortingCode: string;

  toJSON(): Object;
}

declare class ContactsManager {
  getProperties(): Promise<Array<ContactProperty>>;
  select(
    properties: Array<ContactProperty>,
    options?: ContactsSelectOptions,
  ): Promise<Array<ContactInfo>>;
}

/* partial */ declare class Navigator {
  +contacts: ContactsManager;
}
