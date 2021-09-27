import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-jwt";

import type { TokenPayload } from "@/utils/types";

import { AuthenticationService } from "../authentication.service";
import { Extract } from "./extract";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  public constructor(configService: ConfigService, private readonly authenticationService: AuthenticationService) {
    super({
      jwtFromRequest: Extract.accessToken,
      ignoreExpiration: false,
      secretOrKey: configService.get("AUTH_SECRET"),
    });
  }

  public async validate(payload: TokenPayload) {
    return this.authenticationService.validatePayload(payload);
  }
}
