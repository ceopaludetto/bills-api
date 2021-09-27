import { Field, InputType } from "@nestjs/graphql";
import { IsString, IsNotEmpty, IsEmail } from "class-validator";

import { Email, Trim } from "@/utils/transforms";

@InputType()
export class AuthenticationRegisterInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  @Trim()
  public firstName!: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  @Trim()
  public lastName!: string;

  @Field()
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  @Email()
  public email!: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  @Trim()
  public password!: string;
}

@InputType()
export class AuthenticationLoginInput {
  @Field()
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  @Email()
  public email!: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  @Trim()
  public password!: string;
}
