import { MikroOrmModule } from "@mikro-orm/nestjs";
import { Module } from "@nestjs/common";

import { Bill } from "@/models";

import { BillResolver } from "./bill.resolver";
import { BillService } from "./bill.service";

@Module({
  imports: [MikroOrmModule.forFeature([Bill])],
  providers: [BillResolver, BillService],
  exports: [BillService],
})
export class BillModule {}
