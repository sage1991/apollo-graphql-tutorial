import { gql } from "apollo-server"

export const authorTypeDefs = gql`
  "Author of a complete Track or a Module"
  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture url"
    photo: String
  }
`
