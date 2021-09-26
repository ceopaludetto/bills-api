import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, ID, InterfaceType, ObjectType } from "@nestjs/graphql";
import { generate } from "shortid";

@Entity({ abstract: true })
@InterfaceType("Node")
abstract class Node {
  @Field(() => ID)
  @PrimaryKey()
  public id: string = generate();
}

@Entity({ abstract: true })
@ObjectType({ isAbstract: true, implements: [Node] })
export abstract class BaseModel extends Node {
  @Field()
  @Property({ onCreate: () => new Date() })
  public createdAt: Date = new Date();

  @Field()
  @Property({ onUpdate: () => new Date() })
  public updatedAt: Date = new Date();
}
