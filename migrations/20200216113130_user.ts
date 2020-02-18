import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable("user", table => {
    table.increments();
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table
      .string("email")
      .notNullable()
      .unique();
    table.string("password").notNullable();
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable("user");
}
