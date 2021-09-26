import { Migration } from "@mikro-orm/migrations";

import { BillType } from "@/utils/enums";

import { base } from "../base";

export class Migration20210916181415 extends Migration {
  public async up() {
    const knex = this.getKnex();

    const query = knex.schema
      .createTable("Bill", (table) => {
        base(knex, table);
        table.string("name").notNullable();
        table.integer("value").notNullable();
        table.enum("type", Object.values(BillType)).notNullable();
        table.string("user").references("id").inTable("User").notNullable();
      })
      .toQuery();

    await this.execute(query);
  }

  public async down() {
    const knex = this.getKnex();

    const query = knex.schema.dropTable("Bill").toQuery();
    await this.execute(query);
  }
}
