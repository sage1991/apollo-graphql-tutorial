import { FC } from "react"
import { Router } from "@reach/router"

import { TrackPage, TracksPage } from "../pages"

export const Navigation: FC = () => (
  <Router id="router">
    <TracksPage path="/" />
    <TrackPage path="/track/:trackId" />
  </Router>
)
