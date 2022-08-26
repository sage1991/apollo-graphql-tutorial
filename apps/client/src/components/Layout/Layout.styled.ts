import styled from "@emotion/styled"
import { Size } from "../../styles"

interface Props {
  grid?: boolean
  fullwidth?: boolean
}

export const PageRoot = styled("div")<Props>(
  ({ grid, fullwidth }) => `
  display: flex;
  justify-content: ${grid ? "center" : "top"};
  flex-direction: ${grid ? "row" : "column"};
  flex-wrap: wrap;
  align-self: center;
  flex-grow: 1;
  max-width: ${fullwidth ? "none" : `${Size.regularPage}px`};
  width: 100%;
  padding: ${fullwidth ? 0 : `${Size.unit * 2}px`};
  padding-bottom: ${Size.unit * 5}px;
  margin: auto;
`
)
