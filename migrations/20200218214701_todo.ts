import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable("todo", table => {
    table.increments();
    table.text("title").notNullable();
    table
      .string("content")
      .notNullable()
      .defaultTo("");
    table
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("user")
      .onDelete("CASCADE")
      .index();
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable("todo");
}
