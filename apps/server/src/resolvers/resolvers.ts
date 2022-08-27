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
  Mutation: {
    async incrementTrackViews(_: undefined, { id }: { id: string }, { dataSources }: Context) {
      try {
        return {
          code: 200,
          success: true,
          message: `Successfully incremented number of views for track ${id}`,
          track: await dataSources.track.updateNumberOfViews(id)
        }
      } catch (e: any) {
        return {
          code: e.extensions.response.status,
          success: false,
          message: e.extensions.response.body
        }
      }
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
