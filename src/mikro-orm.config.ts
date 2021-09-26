import { Options, EntityCaseNamingStrategy } from "@mikro-orm/core";
import type { ConfigService } from "@nestjs/config";
import path from "path";

import * as entities from "@/models";

export function getConfiguration(configService?: ConfigService): Options {
  return {
    type: configService?.get("DATABASE_TYPE") ?? (process.env.DATABASE_TYPE as "postgresql"),
    dbName: configService?.get("DATABASE_NAME") ?? process.env.DATABASE_NAME,
    host: configService?.get("DATABASE_HOST") ?? process.env.DATABASE_HOST,
    port: configService?.get<number>("DATABASE_PORT") ?? Number(process.env.DATABASE_PORT),
    user: configService?.get("DATABASE_USER") ?? process.env.DATABASE_USER,
    password: configService?.get("DATABASE_PASS") ?? process.env.DATABASE_PASS,
    entities: Object.values(entities),
    namingStrategy: EntityCaseNamingStrategy,
    migrations: {
      path: path.resolve("src/database/migrations"),
      allOrNothing: true,
      transactional: true,
      tableName: "Migrations",
    },
  };
}

export default getConfiguration();
