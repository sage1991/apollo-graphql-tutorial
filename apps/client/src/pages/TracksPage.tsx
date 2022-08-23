import { FC } from "react"
import { RouteComponentProps } from "@reach/router"

import { Layout } from "../components"

interface Props extends RouteComponentProps {}

export const TracksPage: FC<Props> = () => {
  return <Layout grid></Layout>
}
