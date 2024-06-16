import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { IdentityProviderService } from "./identityProvider.service";
import { IdentityProviderControllerBase } from "./base/identityProvider.controller.base";

@swagger.ApiTags("identityProviders")
@common.Controller("identityProviders")
export class IdentityProviderController extends IdentityProviderControllerBase {
  constructor(
    protected readonly service: IdentityProviderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
