import type { Request } from "express";
import { ExtractJwt } from "passport-jwt";

export const Extract = {
  accessToken: ExtractJwt.fromAuthHeaderAsBearerToken(),
  refreshToken: (request: Request) => {
    const header = request.header("RefreshToken");

    if (!header) return undefined;
    if (!/Bearer/.test(header)) return undefined;

    const [, token] = header.split(" ");

    if (!token) return undefined;
    return token;
  },
};
