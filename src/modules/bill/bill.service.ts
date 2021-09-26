import { QueryOrder } from "@mikro-orm/core";
import { InjectRepository } from "@mikro-orm/nestjs";
import type { EntityRepository } from "@mikro-orm/postgresql";
import { Injectable } from "@nestjs/common";

import { Bill } from "@/models";
import { day } from "@/utils/date";
import type { ConnectionParameters } from "@/utils/plugins/pagination";

import type { BillGetArgs, BillInsertInput } from "./bill.dto";

@Injectable()
export class BillService {
  public constructor(@InjectRepository(Bill) private readonly billRepository: EntityRepository<Bill>) {}

  public async find(userID: string, { offset, limit }: ConnectionParameters) {
    return this.billRepository.findAndCount(
      { user: userID },
      { offset, limit, orderBy: { createdAt: QueryOrder.DESC } },
    );
  }

  public async balance(userID: string, { date = new Date() }: BillGetArgs) {
    const queryBuilder = this.billRepository.createQueryBuilder();

    const res: { balance: number }[] = await queryBuilder
      .select("sum(value) as balance")
      .where({
        user: userID,
        createdAt: { $gte: day(date).startOf("month").toDate(), $lte: day(date).endOf("month").toDate() },
      })
      .getKnexQuery();

    return res[0].balance;
  }

  public async create(data: BillInsertInput, userID: string) {
    const bill = this.billRepository.create({ ...data, user: userID });
    await this.billRepository.persistAndFlush(bill);

    return bill;
  }
}
