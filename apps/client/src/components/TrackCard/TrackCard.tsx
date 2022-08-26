import { FC } from "react"

import { formatSecondsToReadableTime } from "../../utils"
import { Track } from "../../queries"

import {
  CardContainer,
  CardImageContainer,
  AuthorImage,
  CardImage,
  AuthorName,
  CardBody,
  CardContent,
  CardFooter,
  CardTitle,
  AuthorAndTrack,
  TrackLength
} from "./TrackCard.styled"

interface Props {
  track: Track
}

export const TrackCard: FC<Props> = ({ track }) => {
  const { title, thumbnail, author, length, moduleCount, id } = track

  return (
    <CardContainer to={`/track/${id}`}>
      <CardContent>
        <CardImageContainer>
          <CardImage src={thumbnail} alt={title} />
        </CardImageContainer>
        <CardBody>
          <CardTitle>{title || ""}</CardTitle>
          <CardFooter>
            <AuthorImage src={author.photo} />
            <AuthorAndTrack>
              <AuthorName>{author.name}</AuthorName>
              <TrackLength>
                {moduleCount} modules - {formatSecondsToReadableTime(length ?? 0)}
              </TrackLength>
            </AuthorAndTrack>
          </CardFooter>
        </CardBody>
      </CardContent>
    </CardContainer>
  )
}
