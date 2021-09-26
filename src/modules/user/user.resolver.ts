import { Resolver } from "@nestjs/graphql";

import { User } from "@/models";

@Resolver(() => User)
export class UserResolver {}
