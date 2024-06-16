import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { IdentityProviderModuleBase } from "./base/identityProvider.module.base";
import { IdentityProviderService } from "./identityProvider.service";
import { IdentityProviderController } from "./identityProvider.controller";
import { IdentityProviderResolver } from "./identityProvider.resolver";

@Module({
  imports: [IdentityProviderModuleBase, forwardRef(() => AuthModule)],
  controllers: [IdentityProviderController],
  providers: [IdentityProviderService, IdentityProviderResolver],
  exports: [IdentityProviderService],
})
export class IdentityProviderModule {}
