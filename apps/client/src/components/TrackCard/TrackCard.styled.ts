import styled from "@emotion/styled"
import { Link } from "@reach/router"

import { mq, Palette } from "../../styles"

export const CardContainer = styled(Link)`
  border-radius: 6px;
  color: ${Palette.text};
  background-size: cover;
  background-color: white;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.15);
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 380px;
  margin: 10px;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  &:hover {
    background-color: ${Palette.pink.lightest};
  }

  ${mq[0]} {
    width: 90%;
  }

  ${mq[1]} {
    width: 47%;
  }

  ${mq[2]} {
    width: 31%;
  }
`

export const CardContent = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`

export const CardTitle = styled("h3")`
  text-align: center;
  font-size: 1.4em;
  line-height: 1em;
  font-weight: 700;
  color: ${Palette.text};
  flex: 1;
`

export const CardImageContainer = styled("div")`
  height: 220px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(250, 0, 150, 0.2);
  }
`

export const CardImage = styled("img")`
  object-fit: cover;
  width: 100%;
  height: 100%;
  filter: gray-scale(60%);
`

export const CardBody = styled("div")`
  padding: 18px;
  flex: 1;
  display: flex;
  color: ${Palette.textSecondary};
  flex-direction: column;
  justify-content: space-around;
`

export const CardFooter = styled("div")`
  display: flex;
  flex-direction: Row;
`

export const AuthorImage = styled("img")`
  height: 30px;
  width: 30px;
  margin-right: 8px;
  border-radius: 50%;
  object-fit: cover;
`

export const AuthorAndTrack = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const AuthorName = styled("div")`
  line-height: 1em;
  fontsize: 1.1em;
`

export const TrackLength = styled("div")`
  font-size: 0.8em;
`
