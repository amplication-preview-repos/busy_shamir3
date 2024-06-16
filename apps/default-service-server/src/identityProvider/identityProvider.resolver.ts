import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { IdentityProviderResolverBase } from "./base/identityProvider.resolver.base";
import { IdentityProvider } from "./base/IdentityProvider";
import { IdentityProviderService } from "./identityProvider.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => IdentityProvider)
export class IdentityProviderResolver extends IdentityProviderResolverBase {
  constructor(
    protected readonly service: IdentityProviderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
