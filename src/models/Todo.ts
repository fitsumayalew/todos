import { Model } from "objection";
import User from "./User";

export default class Movie extends Model {
  id!: number;
  title!: string;
  content!: string;

  static jsonSchema = {
    type: "object",
    required: ["title"],

    properties: {
      id: { type: "integer" },
      title: { title: "string", minLength: 1, maxLength: 255 },
      content: { type: "string" }
    }
  };

  static tableName = "todo";

  static relationMappings = () => ({
    owner: {
      relation: Model.BelongsToOneRelation,
      modelClass: User,

      join: {
        from: "todos.userId",
        to: "todos.id"
      }
    }
  });
}
