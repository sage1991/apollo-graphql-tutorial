import { FC, ReactNode } from "react"

import { Header } from "../Header"
import { Footer } from "../Footer"

import { PageRoot } from "./Layout.styled"

interface Props {
  grid?: boolean
  fullwidth?: boolean
  children?: ReactNode
}

export const Layout: FC<Props> = ({ children, ...rest }) => (
  <>
    <Header />
    <PageRoot {...rest}>{children}</PageRoot>
    <Footer />
  </>
)
