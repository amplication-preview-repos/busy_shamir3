import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IdentityProviderServiceBase } from "./base/identityProvider.service.base";

@Injectable()
export class IdentityProviderService extends IdentityProviderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
