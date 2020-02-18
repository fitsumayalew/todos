import { gql } from "apollo-server";

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  enum TodoStatus {
    COMPLETED
    UNCOMPLETED
  }

  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    todos: [Todo!]!
  }

  type Todo {
    id: ID!
    desc: String!
    status: TodoStatus!
    createdAt: String!
  }

  type Query {
    me: User!
  }

  type Mutation {
    signup(name: String!, email: String!, password: String!): String
    login(email: String!, password: String!): String
  }
`;

export default typeDefs;
