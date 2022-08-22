import styled from "@emotion/styled"

import { Palette } from "../../styles"

export const FooterRoot = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: ${Palette.pink.base};
  margin-top: 30px;
  height: 200px;
  padding: 20px;
  background-color: #ffffff;
  border-top: 1px solid ${Palette.pink.light};
`

export const LogoContainer = styled("div")`
  height: 40px;
  margin-left: 5px;

  svg {
    height: 40px;
  }
`
