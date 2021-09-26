import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

import type { TokenPayload } from "@/utils/types";

import { AuthenticationService } from "../authentication.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  public constructor(configService: ConfigService, private readonly authenticationService: AuthenticationService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get("AUTH_SECRET"),
    });
  }

  public async validate(payload: TokenPayload) {
    return this.authenticationService.validatePayload(payload);
  }
}
