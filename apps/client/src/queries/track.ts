import { gql, useMutation, useQuery } from "@apollo/client"

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

export interface Author {
  id: string
  name: string
  photo?: string
}

export const useTrackListQuery = () => useQuery<FetchTrackListResult>(FETCH_TRACK_LIST)

const FETCH_TRACK = gql`
  query FetchTrackQuery($trackId: ID!) {
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

export interface Module {
  id: string
  title: string
  length?: number
}

export const useTrackQuery = (trackId: string) =>
  useQuery<FetchTrackResult, FetchTrackVariables>(FETCH_TRACK, { variables: { trackId } })

const INCREMENT_TRACK_VIEWS = gql`
  mutation IncrementTrackViewsMutation($trackId: ID!) {
    incrementTrackViews(id: $trackId) {
      code
      success
      message
      track {
        id
        numberOfViews
      }
    }
  }
`

export interface IncrementTrackViewsVariables {
  trackId: string
}

export interface IncrementTrackViewsResponse {
  code: number
  success: boolean
  message: string
  track?: Pick<TrackDetail, "id" | "numberOfViews">
}

export const useIncrementTrackViewsMutation = (trackId: string) =>
  useMutation<IncrementTrackViewsResponse, IncrementTrackViewsVariables>(INCREMENT_TRACK_VIEWS, {
    variables: { trackId }
  })
