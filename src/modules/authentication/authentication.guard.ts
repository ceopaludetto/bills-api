import { ExecutionContext, Injectable } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { AuthGuard } from "@nestjs/passport";

import type { GraphQLContext } from "@/utils/types";

@Injectable()
export class GqlAuthenticationGuard extends AuthGuard("jwt") {
  public getRequest(context: ExecutionContext) {
    const { req }: GraphQLContext = GqlExecutionContext.create(context).getContext();
    return req;
  }
}
