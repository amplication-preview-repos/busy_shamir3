/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { IdentityProviderService } from "../identityProvider.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { IdentityProviderCreateInput } from "./IdentityProviderCreateInput";
import { IdentityProvider } from "./IdentityProvider";
import { IdentityProviderFindManyArgs } from "./IdentityProviderFindManyArgs";
import { IdentityProviderWhereUniqueInput } from "./IdentityProviderWhereUniqueInput";
import { IdentityProviderUpdateInput } from "./IdentityProviderUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class IdentityProviderControllerBase {
  constructor(
    protected readonly service: IdentityProviderService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: IdentityProvider })
  @nestAccessControl.UseRoles({
    resource: "IdentityProvider",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createIdentityProvider(
    @common.Body() data: IdentityProviderCreateInput
  ): Promise<IdentityProvider> {
    return await this.service.createIdentityProvider({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [IdentityProvider] })
  @ApiNestedQuery(IdentityProviderFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "IdentityProvider",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async identityProviders(
    @common.Req() request: Request
  ): Promise<IdentityProvider[]> {
    const args = plainToClass(IdentityProviderFindManyArgs, request.query);
    return this.service.identityProviders({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: IdentityProvider })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "IdentityProvider",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async identityProvider(
    @common.Param() params: IdentityProviderWhereUniqueInput
  ): Promise<IdentityProvider | null> {
    const result = await this.service.identityProvider({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: IdentityProvider })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "IdentityProvider",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateIdentityProvider(
    @common.Param() params: IdentityProviderWhereUniqueInput,
    @common.Body() data: IdentityProviderUpdateInput
  ): Promise<IdentityProvider | null> {
    try {
      return await this.service.updateIdentityProvider({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: IdentityProvider })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "IdentityProvider",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteIdentityProvider(
    @common.Param() params: IdentityProviderWhereUniqueInput
  ): Promise<IdentityProvider | null> {
    try {
      return await this.service.deleteIdentityProvider({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
