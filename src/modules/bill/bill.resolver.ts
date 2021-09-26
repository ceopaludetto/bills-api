import { UseGuards } from "@nestjs/common";
import { Query, Args, Mutation, Resolver, Int } from "@nestjs/graphql";
import { connectionFromArraySlice } from "graphql-relay";

import { Bill, User } from "@/models";
import { CurrentUser, GqlAuthenticationGuard } from "@/modules/authentication";
import { Pagination, ConnectionArgs } from "@/utils/plugins/pagination";

import { BillGetArgs, BillInsertInput } from "./bill.dto";
import { BillService } from "./bill.service";

@Resolver(() => Bill)
export class BillResolver {
  public constructor(private readonly billService: BillService) {}

  @UseGuards(GqlAuthenticationGuard)
  @Pagination(() => Bill)
  public async getBillsPerMonth(@CurrentUser() user: User, @Args() args: ConnectionArgs) {
    const { limit, offset } = args.getPaginationParameters();
    const [bills, count] = await this.billService.find(user.id, { offset, limit });
    return connectionFromArraySlice(bills, args, { sliceStart: offset, arrayLength: count });
  }

  @UseGuards(GqlAuthenticationGuard)
  @Query(() => Int)
  public async getBalancePerMonth(@CurrentUser() user: User, @Args() args: BillGetArgs) {
    return this.billService.balance(user.id, args);
  }

  @UseGuards(GqlAuthenticationGuard)
  @Mutation(() => Bill)
  public async saveBill(@CurrentUser() user: User, @Args("input") input: BillInsertInput) {
    return this.billService.create(input, user.id);
  }
}
