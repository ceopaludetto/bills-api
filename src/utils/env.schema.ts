import * as Joi from "joi";

export const envSchema = Joi.object({
  DATABASE_TYPE: Joi.string().valid("postgresql", "sqlite", "mysql", "mariadb").default("postgresql"),
  DATABASE_HOST: Joi.string().default("localhost"),
  DATABASE_PORT: Joi.number().default(5432),
  DATABASE_NAME: Joi.string().required(),
  DATABASE_USER: Joi.string().required(),
  DATABASE_PASS: Joi.string().required(),
  GRAPHQL_FILE: Joi.string().default("./src/schema.graphql"),
  AUTH_SECRET: Joi.string().required(),
});
