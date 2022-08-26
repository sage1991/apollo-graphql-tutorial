import { gql } from "apollo-server"

export const rootTypeDefs = gql`
  type Query {
    "Get tracks array for homepage grid"
    tracks: [Track!]!
    track(id: ID!): Track
  }
`
