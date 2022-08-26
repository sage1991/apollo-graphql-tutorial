import { FC } from "react"
import { RouteComponentProps } from "@reach/router"

import { Layout, QueryResult, TrackCard } from "../components"
import { useTrackListQuery } from "../queries"

interface Props extends RouteComponentProps {}

export const TracksPage: FC<Props> = () => {
  const { data, loading, error } = useTrackListQuery()
  return (
    <Layout grid>
      <QueryResult error={error} loading={loading} data={data}>
        {(data) => data.tracks.map((track: any) => <TrackCard key={track.id} track={track} />)}
      </QueryResult>
    </Layout>
  )
}
