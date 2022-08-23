import { FC } from "react"

import { GlobalStyle } from "./styles"
import { Navigation } from "./navigations"

export const App: FC = () => (
  <>
    <GlobalStyle />
    <Navigation />
  </>
)
