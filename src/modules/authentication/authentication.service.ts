import { Injectable, NotFoundException, BadRequestException, UnprocessableEntityException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import type { Response } from "express";

import type { User } from "@/models";
import { UserService } from "@/modules/user";
import type { TokenPayload } from "@/utils/types";

import type { AuthenticationRegisterInput, AuthenticationLoginInput } from "./authentication.dto";

@Injectable()
export class AuthenticationService {
  public constructor(private readonly userService: UserService, private readonly jwtService: JwtService) {}

  private async genToken(user: User) {
    return this.jwtService.signAsync({ id: user.id, email: user.email });
  }

  public async validatePayload(payload: TokenPayload) {
    const user = await this.userService.findByID(payload.id);
    if (!user) throw new NotFoundException("user-not-found");
    if (user.email !== payload.email) throw new UnprocessableEntityException("email-mismatch");

    return user;
  }

  public async login({ email, password }: AuthenticationLoginInput, res: Response) {
    const user = await this.userService.findByEmail(email);

    if (!user) throw new NotFoundException("user-not-found");
    if (!(await user.comparePassword(password))) throw new BadRequestException("incorrect-password");

    const token = await this.genToken(user);

    res.header("Authorization", token);

    return user;
  }

  public async register(data: AuthenticationRegisterInput, res: Response) {
    const user = await this.userService.create(data);
    const token = await this.genToken(user);

    res.header("Authorization", token);

    return user;
  }

  public async checkToken(token: string) {
    try {
      await this.jwtService.verifyAsync(token);
      return true;
    } catch (error) {
      return false;
    }
  }
}
