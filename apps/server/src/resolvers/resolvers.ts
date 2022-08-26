import { Repository, TrackModel } from "../repository"

interface Context {
  dataSources: Repository
}

export const resolvers = {
  Query: {
    tracks(_: undefined, __: undefined, { dataSources }: Context) {
      return dataSources.track.findTracks()
    },
    track(parent: undefined, { id }: { id: string }, { dataSources }: Context) {
      return dataSources.track.findTrackById(id)
    }
  },
  Track: {
    author({ authorId }: TrackModel, _: undefined, { dataSources }: Context) {
      return dataSources.author.findAuthorById(authorId)
    },
    modules({ id }: TrackModel, _: undefined, { dataSources }: Context) {
      return dataSources.module.findModulesByTrackId(id)
    }
  }
}
