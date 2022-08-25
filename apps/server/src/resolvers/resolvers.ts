import { GraphQLResolveInfo } from "graphql"

import { Repository, TrackModel } from "../repository"

interface Context {
  dataSources: Repository
}

export const resolvers = {
  Query: {
    tracks(parent: undefined, args: undefined, { dataSources }: Context, info: GraphQLResolveInfo) {
      return dataSources.track.findTracks()
    }
  },
  Track: {
    author(
      { authorId }: TrackModel,
      args: undefined,
      { dataSources }: Context,
      info: GraphQLResolveInfo
    ) {
      return dataSources.author.findAuthorById(authorId)
    }
  }
}
