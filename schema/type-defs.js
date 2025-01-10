const {gql} = require("apollo-server");

const typeDefs = gql`

  type User {
    id: ID!
    name: String!
    username: String!
    age: Int! 
    nationality: Nationality!
    friends: [User]
    favoriteMovies: [Movie]
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

    # Get all movies
    movies: [Movie!]!

    # Get a movie by name
    movie(name: String!): Movie!
  }

  input CreateUserInput {
    name: String!
    username: String!
    age: Int = 18
    nationality: Nationality = BRAZIL
  }

  input UpdateUsernameInput {
    id: ID!
    newUsername: String!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User
    updateUsername(input: UpdateUsernameInput!): User
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