import { gql, useQuery } from "@apollo/client"

import { Author } from "./author"

export const TRACKS = gql`
  query FetchTracks {
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

export interface FetchTracks {
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

export const useTracksQuery = () => useQuery<FetchTracks>(TRACKS)
