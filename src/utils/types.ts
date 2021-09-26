import type { Request, Response } from "express";

export interface TokenPayload {
  id: string;
  email: string;
}

export interface GraphQLContext {
  req: Request;
  res: Response;
}
