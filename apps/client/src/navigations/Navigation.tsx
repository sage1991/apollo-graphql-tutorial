import { FC, Fragment } from "react"
import { Router } from "@reach/router"

import { TracksPage } from "../pages"

export const Navigation: FC = () => (
  <Router primary={false} component={Fragment}>
    <TracksPage path="/" />
  </Router>
)
