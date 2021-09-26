import { MikroOrmModule } from "@mikro-orm/nestjs";
import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { PinoLogger, LoggerModule } from "nestjs-pino";

import { AuthenticationModule, UserModule } from "@/modules";
import { envSchema } from "@/utils/env.schema";

import { getConfiguration } from "./mikro-orm.config";
import { BillModule } from "./modules/bill";
import type { GraphQLContext } from "./utils/types";

import "@/utils/register.enums";

@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: {
        base: { name: "Billz" },
        messageKey: "message",
        autoLogging: process.env.NODE_ENV === "production",
        level: process.env.NODE_ENV !== "production" ? "debug" : "info",
        prettyPrint:
          process.env.NODE_ENV !== "production"
            ? {
                translateTime: "dd/mm/yyyy, hh:MM:ss:l",
                ignore: "context,pid,req",
                levelFirst: true,
              }
            : undefined,
      },
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: envSchema,
    }),
    GraphQLModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        autoSchemaFile: configService.get("GRAPHQL_FILE"),
        sortSchema: true,
        cors: true,
        context: ({ req, res }: GraphQLContext) => ({ req, res }),
      }),
    }),
    MikroOrmModule.forRootAsync({
      inject: [ConfigService, PinoLogger],
      useFactory: async (configService: ConfigService, logger: PinoLogger) => ({
        ...getConfiguration(configService),
        debug: process.env.NODE_ENV === "development" ? ["query", "query-params"] : false,
        logger: (message) => logger.debug(message),
      }),
    }),
    AuthenticationModule,
    UserModule,
    BillModule,
  ],
})
export class ApplicationModule {}
