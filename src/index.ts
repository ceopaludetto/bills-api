import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import type { NestExpressApplication } from "@nestjs/platform-express";
import cookie from "cookie-parser";
import helmet from "helmet";
import { Logger } from "nestjs-pino";

import { ApplicationModule } from "./application.module";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(ApplicationModule, { bufferLogs: true });
  const logger = app.get(Logger);
  app.useLogger(logger);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  app.use(cookie());
  app.use(helmet({ contentSecurityPolicy: false }));

  const port = process.env.PORT || 3000;
  await app.listen(port);
  logger.log(`Application running in ${await app.getUrl()}`);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

bootstrap();
