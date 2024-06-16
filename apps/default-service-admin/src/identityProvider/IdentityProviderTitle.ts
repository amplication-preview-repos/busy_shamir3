import { IdentityProvider as TIdentityProvider } from "../api/identityProvider/IdentityProvider";

export const IDENTITYPROVIDER_TITLE_FIELD = "id";

export const IdentityProviderTitle = (record: TIdentityProvider): string => {
  return record.id?.toString() || String(record.id);
};
