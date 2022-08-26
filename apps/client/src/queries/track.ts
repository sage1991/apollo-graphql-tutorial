import { gql, useQuery } from "@apollo/client"

import { Author } from "./author"
import { Module } from "./module"

const FETCH_TRACK_LIST = gql`
  query FetchTrackList {
    tracks {
      id
      title
      author {
        id
        name
        photo
      }
      thumbnail
      length
      moduleCount
    }
  }
`

interface FetchTrackListResult {
  tracks: Track[]
}

export interface Track {
  id: string
  title: string
  author: Author
  thumbnail?: string
  length?: number
  moduleCount?: number
}

export const useTrackListQuery = () => useQuery<FetchTrackListResult>(FETCH_TRACK_LIST)

const FETCH_TRACK = gql`
  query FetchTrack($trackId: ID!) {
    track(id: $trackId) {
      id
      title
      author {
        id
        name
        photo
      }
      thumbnail
      length
      moduleCount
      numberOfViews
      modules {
        id
        title
        length
      }
    }
  }
`

interface FetchTrackVariables {
  trackId: string
}

interface FetchTrackResult {
  track: TrackDetail
}

export interface TrackDetail {
  id: string
  title: string
  author: Author
  thumbnail?: string
  length?: number
  moduleCount?: number
  description?: string
  numberOfViews?: number
  modules: Module
}

export const useTrackQuery = (trackId: string) =>
  useQuery<FetchTrackResult, FetchTrackVariables>(FETCH_TRACK, { variables: { trackId } })
