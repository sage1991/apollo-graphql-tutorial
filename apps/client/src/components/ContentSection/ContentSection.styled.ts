import styled from "@emotion/styled"

import { Palette, Size } from "../../styles"

export const ContentSectionRoot = styled("div")`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  max-width: ${Size.textPage}px;
  width: 100%;
  align-self: center;
  background-color: ${Palette.background};
`
