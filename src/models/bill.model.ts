import { Entity, Enum, ManyToOne, Property } from "@mikro-orm/core";
import { Field, Int, ObjectType } from "@nestjs/graphql";

import { BillType } from "@/utils/enums";

import { BaseModel } from "./base.model";
import { User } from "./user.model";

@ObjectType()
@Entity({ tableName: "Bill" })
export class Bill extends BaseModel {
  @Field()
  @Property()
  public name!: string;

  @Field(() => Int)
  @Property()
  public value!: number;

  @Field(() => BillType)
  @Enum(() => BillType)
  public type!: BillType;

  @Field(() => Boolean)
  @Property({ persist: false })
  public get isPositive() {
    return this.value >= 0;
  }

  @Field(() => User)
  @ManyToOne(() => User)
  public user!: User;
}
