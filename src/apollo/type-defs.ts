import { gql } from "@apollo/client";

const typeDefs = gql`
  type Query {
    breeds(limit: Int, page: Int, sortBy: Sort): [Breed!]!
    breed(name: String!): Breed!
  }

  type Mutation {
    insertBreeds: [StoredBreeds]
  }

  type Breed {
    id: ID!
    name: String!
    description: String!
    temperament: String!
    origin: String!
    lifeSpan: String!
    adaptability: Int!
    affectionLevel: Int!
    childFriendly: Int!
    grooming: Int!
    intelligence: Int!
    healthIssues: Int!
    socialNeeds: Int!
    strangerFriendly: Int!
    image: String!
    photos: [Image!]!
  }

  type Image {
    id: ID!
    height: Int!
    width: Int!
    url: String!
  }

  type StoredBreeds {
    _id: ID!
  }

  enum Sort {
    RECENT
    POPULAR
  }

  enum Order {
    DESC
    ACS
  }
`;

export default typeDefs;
