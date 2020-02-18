import { Model, Modifiers } from "objection";
import Todo from "./Todo";

export default class Person extends Model {
  id!: number;
  firstName!: string;
  lastName!: string;
  email!: string;
  password!: string;

  static tableName = "user";

  fullName() {
    return this.firstName + " " + this.lastName;
  }

  static jsonSchema = {
    type: "object",
    required: ["firstName", "lastName", "email", "password"],

    properties: {
      id: { type: "integer" },
      firstName: { type: "string", minLength: 1, maxLength: 255 },
      lastName: { type: "string", minLength: 1, maxLength: 255 },
      email: { type: "string" },
      password: { type: "string" }
    }
  };

  static relationMappings = () => ({
    todos: {
      relation: Model.HasManyRelation,
      modelClass: Todo,
      join: {
        from: "users.id",
        to: "todos.userId"
      }
    }
  });
}
