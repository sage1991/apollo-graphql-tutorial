import styled from "@emotion/styled"
import { Link } from "@reach/router"

import { Palette, Size } from "../../styles"

export const HeaderRoot = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${Palette.pink.light};
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.15);
  padding: 5px 30px;
  min-height: 80px;
  background-color: #ffffff;
`

export const HeaderContainer = styled("div")`
  width: ${Size.regularPage}px;
`

export const HomeButtonContainer = styled("div")`
  display: flex;
  flex: 1;
`

export const HomeLink = styled(Link)`
  text-decoration: none;
`

export const HomeButton = styled("div")`
  display: flex;
  flex-direction: row;
  color: ${Palette.accent};
  align-items: center;

  &:hover {
    color: ${Palette.pink.dark};
  }
`

export const LogoContainer = styled("div")`
  display: flex;
  align-self: center;
`

export const Logo = styled("img")`
  width: 60px;
  height: 60px;
  margin-right: 8px;
`

export const Title = styled("div")`
  display: flex;
  flex-direction: column;

  h3 {
    line-height: 1;
    margin-bottom: 0;
  }

  div {
    font-size: 0.9em;
    line-height: 0.8em;
    padding-left: 2px;
  }
`
