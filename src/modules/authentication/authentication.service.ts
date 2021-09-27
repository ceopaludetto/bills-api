import { Injectable, NotFoundException, BadRequestException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import type { Response } from "express";

import type { User } from "@/models";
import { UserService } from "@/modules/user";
import type { TokenPayload } from "@/utils/types";

import type { AuthenticationRegisterInput, AuthenticationLoginInput } from "./authentication.dto";

@Injectable()
export class AuthenticationService {
  public constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  public async genTokens(user: User) {
    const secret = this.configService.get("AUTH_SECRET");
    const accessExpiration = this.configService.get("AUTH_ACCESS_TOKEN_EXPIRES");
    const refreshExpiration = this.configService.get("AUTH_REFRESH_TOKEN_EXPIRES");

    const accessToken = await this.jwtService.signAsync(
      { id: user.id },
      {
        secret,
        expiresIn: accessExpiration,
      },
    );
    const refreshToken = await this.jwtService.signAsync(
      { id: user.id },
      {
        secret: secret + user.password,
        expiresIn: refreshExpiration,
      },
    );

    return [accessToken, refreshToken] as const;
  }

  public async validatePayload(payload: TokenPayload) {
    const user = await this.userService.findByID(payload.id);
    if (!user) throw new NotFoundException("user-not-found");

    return user;
  }

  public async login({ email, password }: AuthenticationLoginInput, res: Response) {
    const user = await this.userService.findByEmail(email);

    if (!user) throw new NotFoundException("user-not-found");
    if (!(await user.comparePassword(password))) throw new BadRequestException("incorrect-password");

    this.setTokensInResponse(res, await this.genTokens(user));

    return user;
  }

  public async register(data: AuthenticationRegisterInput, res: Response) {
    const user = await this.userService.create(data);
    this.setTokensInResponse(res, await this.genTokens(user));

    return user;
  }

  public async findUserByTokenID(id: string) {
    const user = await this.userService.findByID(id);

    return user;
  }

  public setTokensInResponse(res: Response, [accessToken, refreshToken]: readonly [string, string]) {
    res.header("Authorization", accessToken);
    res.header("RefreshToken", refreshToken);
  }
}
