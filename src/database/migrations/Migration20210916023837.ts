import { Migration } from "@mikro-orm/migrations";

import { base } from "../base";

export class Migration20210916023837 extends Migration {
  public async up() {
    const knex = this.getKnex();

    const query = knex.schema
      .createTable("User", (table) => {
        base(knex, table);
        table.string("firstName").notNullable();
        table.string("lastName").notNullable();
        table.string("email").unique().notNullable();
        table.string("password").notNullable();
      })
      .toQuery();

    await this.execute(query);
  }

  public async down() {
    const knex = this.getKnex();

    const query = knex.schema.dropTable("User").toQuery();
    await this.execute(query);
  }
}
