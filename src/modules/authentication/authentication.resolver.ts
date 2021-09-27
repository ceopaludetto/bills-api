import { UseGuards } from "@nestjs/common";
import { Args, Context, Mutation, Query, Resolver } from "@nestjs/graphql";

import { User } from "@/models";
import { UserService } from "@/modules/user";
import type { GraphQLContext } from "@/utils/types";

import { CurrentUser } from "./authentication.decorator";
import { AuthenticationRegisterInput, AuthenticationLoginInput } from "./authentication.dto";
import { GqlAuthenticationGuard } from "./authentication.guard";
import { AuthenticationService } from "./authentication.service";

@Resolver(() => User)
export class AuthenticationResolver {
  public constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly userService: UserService,
  ) {}

  @UseGuards(GqlAuthenticationGuard)
  @Query(() => User)
  public async profile(@CurrentUser() user: User) {
    return this.userService.findByID(user.id);
  }

  @Mutation(() => User)
  public async login(@Args("input") data: AuthenticationLoginInput, @Context() { res }: GraphQLContext) {
    return this.authenticationService.login(data, res);
  }

  @Mutation(() => User)
  public async register(@Args("input") data: AuthenticationRegisterInput, @Context() { res }: GraphQLContext) {
    return this.authenticationService.register(data, res);
  }
}
