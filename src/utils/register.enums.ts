import { registerEnumType } from "@nestjs/graphql";

import * as enums from "./enums";

for (const [key, value] of Object.entries(enums)) {
  registerEnumType(value, {
    name: key,
  });
}
