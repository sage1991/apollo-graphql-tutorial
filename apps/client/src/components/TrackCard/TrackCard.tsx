import { FC } from "react"

import { formatSecondsToReadableTime } from "../../utils"

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
  track: any
}

export const TrackCard: FC<Props> = ({ track }) => {
  const { title, thumbnail, author, length, modulesCount } = track

  return (
    <CardContainer>
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
                {modulesCount} modules - {formatSecondsToReadableTime(length)}
              </TrackLength>
            </AuthorAndTrack>
          </CardFooter>
        </CardBody>
      </CardContent>
    </CardContainer>
  )
}
