const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    title: String
    name: String!
    description: String
    image: String
    portfolioLink: String
    team: String
  }

  type Team {
    _id: ID!
    name: String!
    description: String
    teamMembers: [User]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    teams: [Team]
    team(teamId: ID!): Team
    users: [User]
    user(userId: ID!): User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
