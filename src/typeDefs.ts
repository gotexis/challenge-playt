// Construct a schema, using GraphQL schema language
import { gql } from "apollo-server-express";

export const typeDefs = gql`
    type Query {
        login(email: String!, password: String!): User
    }
    type Mutation {
        addUser(firstName: String!, lastName: String, age: Int!): Boolean!
    }
    type User {
        id: Int!
        full_name: String!
        email: String!
        country: Country!
        created_at: String!
    }
    type Country {
        code: Int!
        name: String!
        continent_name: String
    }
`;