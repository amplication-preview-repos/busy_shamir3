import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AuthService } from "./auth.service";
import { AuthorizeUserInput } from "../auth/AuthorizeUserInput";
import { AuthorizeUserOutput } from "../auth/AuthorizeUserOutput";

@swagger.ApiTags("auths")
@common.Controller("auths")
export class AuthController {
  constructor(protected readonly service: AuthService) {}

  @common.Get("/:id/authorize-user")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AuthorizeUser(
    @common.Body()
    body: AuthorizeUserInput
  ): Promise<string> {
        return this.service.AuthorizeUser(body);
      }

  @common.Post("/external_authorize_user")
  @swagger.ApiOkResponse({
    type: AuthorizeUserOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ExternalAuthorizeUser(
    @common.Body()
    body: AuthorizeUserInput
  ): Promise<AuthorizeUserOutput> {
        return this.service.ExternalAuthorizeUser(body);
      }
}
