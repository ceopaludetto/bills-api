import { ExecutionContext, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { GqlExecutionContext } from "@nestjs/graphql";
import { JwtService } from "@nestjs/jwt";
import { AuthGuard } from "@nestjs/passport";

import type { GraphQLContext, TokenPayload } from "@/utils/types";

import { AuthenticationService } from "./authentication.service";
import { Extract } from "./strategies/extract";

@Injectable()
export class GqlAuthenticationGuard extends AuthGuard("jwt") {
  public constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly authenticationService: AuthenticationService,
  ) {
    super();
  }

  public getRequest(context: ExecutionContext) {
    const { req }: GraphQLContext = GqlExecutionContext.create(context).getContext();
    return req;
  }

  public async canActivate(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    const { req, res }: GraphQLContext = ctx.getContext();

    const token = Extract.accessToken(req);

    if (!token) return super.canActivate(context) as boolean;
    let userID!: string;

    try {
      const payload = this.jwtService.decode(token) as TokenPayload;
      userID = payload.id;

      await this.jwtService.verifyAsync(token);
    } catch (verifyError) {
      if (verifyError instanceof Error) {
        if (verifyError.name === "TokenExpiredError") {
          const refreshToken = Extract.refreshToken(req);

          if (!refreshToken) return super.canActivate(context) as boolean;
          if (!userID) return super.canActivate(context) as boolean;

          const user = await this.authenticationService.findUserByTokenID(userID);
          if (!user) return super.canActivate(context) as boolean;

          try {
            await this.jwtService.verifyAsync(refreshToken, {
              secret: this.configService.get("AUTH_SECRET") + user?.password,
            });

            const [newAccessToken, newRefreshToken] = await this.authenticationService.genTokens(user);
            this.authenticationService.setTokensInResponse(res, [newAccessToken, newRefreshToken]);

            req.headers.accesstoken = newAccessToken;
            req.headers.refreshtoken = newRefreshToken;

            return super.canActivate(context) as boolean;
          } catch (error) {
            return super.canActivate(context) as boolean;
          }
        }

        return super.canActivate(context) as boolean;
      }

      return super.canActivate(context) as boolean;
    }

    return super.canActivate(context) as boolean;
  }
}
