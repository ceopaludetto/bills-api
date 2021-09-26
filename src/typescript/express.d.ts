import "express";

declare module "express" {
  interface Request {
    user: import("@/models").User;
  }
}
