import styled from "@emotion/styled"
import { Link } from "@reach/router"

import { Palette } from "../../styles"

export const CoverImage = styled("img")`
  object-fit: cover;
  max-height: 400px;
  border-radius: 4px;
  margin-bottom: 30px;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
`

export const TrackDetails = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 4px;
  margin-bottom: 30px;
  border: 1px solid ${Palette.silver.dark};
  background-color: ${Palette.silver.lighter};

  h1 {
    width: 100%;
    text-align: center;
    margin-bottom: 5px;
  }

  h4 {
    font-size: 1.2em;
    margin-bottom: 5px;
    color: ${Palette.text};
  }
`

export const DetailRow = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid ${Palette.silver.dark};
`

export const DetailItem = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: ${Palette.textSecondary};
  align-self: center;
`

export const AuthorImage = styled("img")`
  height: 30px;
  width: 30px;
  margin-bottom: 8px;
  border-radius: 50%;
  object-fit: cover;
`

export const AuthorName = styled("div")`
  line-height: 1em;
  font-size: 1em;
`

export const IconAndLabel = styled("div")`
  display: flex;
  flex: row;
  align-items: center;
  max-height: 20px;
  width: 100%;

  div {
    margin-left: 8px;
  }

  svg {
    max-height: 16px;
  }

  #viewCount {
    color: ${Palette.pink.base};
  }
`

export const ModuleListContainer = styled("div")`
  width: 100%;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    margin-top: 5px;
  }

  ul li {
    font-size: 1em;
    display: flex;
    justify-content: space-between;
    padding-bottom: 2px;
  }
`

export const ModuleLength = styled("div")`
  margin-left: 30px;
  color: ${Palette.grey.light};
`
