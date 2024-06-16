import { IdentityProviderWhereInput } from "./IdentityProviderWhereInput";
import { IdentityProviderOrderByInput } from "./IdentityProviderOrderByInput";

export type IdentityProviderFindManyArgs = {
  where?: IdentityProviderWhereInput;
  orderBy?: Array<IdentityProviderOrderByInput>;
  skip?: number;
  take?: number;
};
