import type Knex from "knex";

export function base(knex: Knex, table: Knex.CreateTableBuilder) {
  table.string("id").primary().notNullable();
  table.timestamp("createdAt").defaultTo(knex.fn.now()).notNullable();
  table.timestamp("updatedAt").defaultTo(knex.fn.now()).notNullable();
}
