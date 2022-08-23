import styled from "@emotion/styled"

import { Palette, Size } from "../../styles"

export const TopSection = styled("div")`
  display: flex;
  justify-content: center;
  background-color: ${Palette.black.base};
  padding: 20px;
  border-bottom: 1px solid ${Palette.pink.base};
`

export const TopContainer = styled("div")<{ viewportWith: number }>`
  display: flex;
  justify-content: row;
  align-self: center;
  width: 100%;
  max-width: ${Size.largePage}px;
  height: ${({ viewportWith }) => ((viewportWith - 60) * (2 / 3)) / (16 / 9)}px;
  max-height: ${(Size.largePage * (2 / 3)) / (16 / 9)}px;
`

export const PlayerContainer = styled("div")`
  width: 66%;
`

export const ModuleTitle = styled("h1")`
  margin-top: 10px;
  margin-bottom: 30px;
  padding-bottom: 10px;
  color: ${Palette.black.lighter};
  border-bottom: 1px solid ${Palette.pink.base};
`
