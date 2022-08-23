import styled from "@emotion/styled"
import { Link } from "@reach/router"

import { Palette } from "../../styles"

export const ModulesNavContainer = styled("div")`
  width: 33%;
  position: relative;
  margin-left: 20px;
  background-color: ${Palette.black.light};
  border-radius: 4px;
  border: 1px solid ${Palette.black.lighter};
  overflow: auto;
`

const titleHeight = 70

export const ModuleTitle = styled("div")`
  display: flex;
  position: sticky;
  font-size: 1.6em;
  font-weight: 400;
  height: ${titleHeight}px;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${Palette.pink.base};
  border-bottom: 1px solid ${Palette.pink.base};

  a {
    text-decoration: none;
    color: ${Palette.silver.base};
  }

  &:hover {
    background-color: ${Palette.black.base};
  }
`

export const ModulesList = styled("div")`
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-y: scroll;
  height: calc(100% - ${titleHeight}px);
`

export const ModuleListItem = styled("div")`
  border-bottom: 1px solid ${Palette.grey.darker};

  &:last-child {
    border-bottom: none;
  }
`

export const ModuleNavStyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
`

export const ModuleListItemContent = styled("div")<{ isActive?: boolean }>(
  ({ isActive }) => `
  background-color: ${isActive ? Palette.black.base : Palette.black.light};
  color: ${isActive ? Palette.silver.lighter : Palette.silver.darker};
  min-height: 80px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.1em;
  flex: 1;
  
  &:hover {
    background-color: ${isActive ? Palette.black.dark : Palette.black.base};
    color: #ffffff;
  }
`
)
