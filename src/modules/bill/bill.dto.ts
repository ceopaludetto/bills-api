import { ArgsType, Field, InputType } from "@nestjs/graphql";
import { IsDate, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

import { BillType } from "@/utils/enums";
import { ToInt, Trim } from "@/utils/transforms";

@InputType()
export class BillInsertInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  @Trim()
  public name!: string;

  @Field()
  @IsNumber()
  @ToInt()
  public value!: number;

  @Field(() => BillType)
  @IsString()
  @IsEnum(BillType)
  public type!: BillType;
}

@ArgsType()
export class BillGetArgs {
  @Field(() => Date, { nullable: true })
  @IsOptional()
  @IsDate()
  public date?: Date;
}
