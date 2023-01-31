const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Devs {
    _id: ID!
    title: String!
    name: String!
    description: String! 
    image: String
  }

  type Teams {
    _id: ID!
    title: String!
    members: [member]!
  }

  type Query {
    teams: [team]!
    team: [members]!
    member(memberId: ID!): member
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
