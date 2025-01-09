const {gql} = require("apollo-server");

const typeDefs = gql`

  type User {
    id: ID!
    name: String!
    username: String!
    age: Int! 
    nationality: Nationality!
    friends: [User]
  }

  type Movie {
    id: ID!
    name: String!
    yearOfPublication: Int!
    isInTheaters: Boolean!
  }

  type Query {
    # Get all users
    users: [User!]!

    # Get a user by id
    user(id: ID!): User!
  }

  enum Nationality {
    BRAZIL
    CANADA
    CHILE
    GERMANY
    INDIA
  }

`;

module.exports = { typeDefs };