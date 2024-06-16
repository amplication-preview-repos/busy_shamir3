import * as graphql from "@nestjs/graphql";
import { AuthorizeUserInput } from "../auth/AuthorizeUserInput";
import { AuthorizeUserOutput } from "../auth/AuthorizeUserOutput";
import { AuthService } from "./auth.service";

export class AuthResolver {
  constructor(protected readonly service: AuthService) {}

  @graphql.Query(() => String)
  async AuthorizeUser(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.AuthorizeUser(args);
  }

  @graphql.Mutation(() => AuthorizeUserOutput)
  async ExternalAuthorizeUser(
    @graphql.Args()
    args: AuthorizeUserInput
  ): Promise<AuthorizeUserOutput> {
    return this.service.ExternalAuthorizeUser(args);
  }
}
