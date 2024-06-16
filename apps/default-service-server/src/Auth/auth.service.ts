import { Injectable } from "@nestjs/common";
import { AuthorizeUserInput } from "../auth/AuthorizeUserInput";
import { AuthorizeUserOutput } from "../auth/AuthorizeUserOutput";

@Injectable()
export class AuthService {
  constructor() {}
  async AuthorizeUser(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async ExternalAuthorizeUser(args: AuthorizeUserInput): Promise<AuthorizeUserOutput> {
    throw new Error("Not implemented");
  }
}
