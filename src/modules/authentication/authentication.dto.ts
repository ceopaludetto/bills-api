import { ArgsType, Field, InputType } from "@nestjs/graphql";
import { IsString, IsNotEmpty, IsEmail, IsJWT } from "class-validator";

import { Email, RemoveBearer, Trim } from "@/utils/transforms";

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

@ArgsType()
export class AuthenticationCheckTokenArgs {
  @Field()
  @IsString()
  @IsJWT()
  @IsNotEmpty()
  @RemoveBearer()
  public token!: string;
}
