import { FC } from "react"
import { Router } from "@reach/router"

import { TrackPage, TrackListPage } from "../pages"

export const Navigation: FC = () => (
  <Router id="router">
    <TrackListPage path="/" />
    <TrackPage path="/track/:trackId" />
  </Router>
)
