import { Collection, Entity, OneToMany, Property } from "@mikro-orm/core";
import { Field, ObjectType } from "@nestjs/graphql";
import bcrypt from "bcryptjs";

import { BaseModel } from "./base.model";
import { Bill } from "./bill.model";

@ObjectType()
@Entity({ tableName: "User" })
export class User extends BaseModel {
  @Field()
  @Property()
  public firstName!: string;

  @Field()
  @Property()
  public lastName!: string;

  @Field(() => String)
  @Property({ persist: false })
  public get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  @Field()
  @Property({ unique: true })
  public email!: string;

  @Property({ hidden: true })
  public password!: string;

  @Field(() => [Bill])
  @OneToMany(() => Bill, (bill) => bill.user, { orphanRemoval: true })
  public bills: Collection<Bill> = new Collection<Bill>(this);

  public async comparePassword(password: string) {
    return bcrypt.compare(password, this.password);
  }
}
