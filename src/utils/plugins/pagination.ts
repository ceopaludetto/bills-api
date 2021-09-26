import type { Type } from "@nestjs/common";
import { ArgsType, Field, Int, ObjectType, Query } from "@nestjs/graphql";
import { IsNumber, IsInt, IsString, IsOptional } from "class-validator";
import * as Relay from "graphql-relay";

@ObjectType()
export class PageInfo implements Relay.PageInfo {
  @Field(() => Boolean)
  public hasNextPage!: boolean;

  @Field(() => Boolean)
  public hasPreviousPage!: boolean;

  @Field(() => String)
  public startCursor!: Relay.ConnectionCursor;

  @Field(() => String, { nullable: true })
  public endCursor!: Relay.ConnectionCursor;
}

const cache = new Map<string, any>();

export function Pagination<T>(modelFunc: () => Type<T>) {
  const Model = modelFunc();

  if (cache.has(Model.name)) {
    return (target: Record<string, any>, key: string | symbol, descriptor: PropertyDescriptor) =>
      Query(() => cache.get(Model.name))(target, key, descriptor);
  }

  @ObjectType(`${Model.name}Edge`)
  class Edge implements Relay.Edge<T> {
    @Field(() => Model)
    public node!: T;

    @Field(() => String)
    public cursor!: Relay.ConnectionCursor;
  }

  @ObjectType(`${Model.name}Connection`)
  class Connection implements Relay.Connection<T> {
    @Field(() => [Edge])
    public edges!: Edge[];

    @Field(() => PageInfo)
    public pageInfo!: Relay.PageInfo;
  }

  cache.set(Model.name, Connection);

  return (target: Record<string, any>, key: string | symbol, descriptor: PropertyDescriptor) =>
    Query(() => Connection)(target, key, descriptor);
}

export interface ConnectionParameters {
  limit: number;
  offset: number;
}

@ArgsType()
export class ConnectionArgs {
  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  public before?: Relay.ConnectionCursor;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  public after?: Relay.ConnectionCursor;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsNumber()
  @IsInt()
  public first?: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsNumber()
  @IsInt()
  public last?: number;

  public getPaginationParameters(): ConnectionParameters {
    return {
      limit: this?.first ?? 10,
      offset: this?.after ? parseInt(Relay.fromGlobalId(this.after).id, 10) + 1 : 0,
    };
  }
}
