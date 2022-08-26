import { FC } from "react"
import { RouteComponentProps } from "@reach/router"

import { Layout, QueryResult, TrackDetail } from "../components"
import { useTrackQuery } from "../queries"

interface Params {
  trackId: string
}

interface Props extends RouteComponentProps<Params> {}

export const TrackPage: FC<Props> = ({ trackId }) => {
  const { loading, error, data } = useTrackQuery(trackId!)
  return (
    <Layout>
      <QueryResult loading={loading} error={error} data={data}>
        {(data) => <TrackDetail track={data.track} />}
      </QueryResult>
    </Layout>
  )
}
