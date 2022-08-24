import { FC } from "react"

import { Button } from "../Button"
import { MarkDown } from "../MarkDown"
import { ContentSection } from "../ContentSection"
import { IconBook, IconRun, IconTime, IconView, Palette } from "../../styles"
import { formatSecondsToReadableTime } from "../../utils"

import {
  AuthorImage,
  AuthorName,
  CoverImage,
  DetailItem,
  DetailRow,
  IconAndLabel,
  ModuleLength,
  ModuleListContainer,
  StyledLink,
  TrackDetails
} from "./TrackDetail.styled"

interface Props {
  track: any
}

export const TrackDetail: FC<Props> = ({ track }) => {
  const { title, description, thumbnail, author, length, moduleCount, modules, numberOfViews } =
    track

  return (
    <ContentSection>
      <CoverImage src={thumbnail} alt="thumbnail" />
      <TrackDetails>
        <DetailRow>
          <h1>{title}</h1>
        </DetailRow>
        <DetailRow>
          <DetailItem>
            <h4>Track details</h4>
            <IconAndLabel>
              <IconView width="16px" />
              <div id="viewCount">{numberOfViews} view(s)</div>
            </IconAndLabel>
            <IconAndLabel>
              <IconBook width="14px" height="14px" />
              <div>{moduleCount} modules</div>
            </IconAndLabel>
            <IconAndLabel>
              <IconTime width="14px" />
              <div>{formatSecondsToReadableTime(length)}</div>
            </IconAndLabel>
          </DetailItem>
          <DetailItem>
            <h4>Author</h4>
            <AuthorImage src={author.photo} />
            <AuthorName>{author.name}</AuthorName>
          </DetailItem>
          <div>
            {/* eslint-disable-next-line @typescript-eslint/restrict-template-expressions */}
            <StyledLink to={`./module/${modules[0].id}`}>
              <Button icon={<IconRun width="20px" />} color={Palette.pink.base} size="large">
                Start Track
              </Button>
            </StyledLink>
          </div>
        </DetailRow>
        <ModuleListContainer>
          <DetailItem>
            <h4>Modules</h4>
            <ul>
              {modules.map((module: any) => (
                <li key={module.title}>
                  <div>{module.title}</div>
                  <ModuleLength>{formatSecondsToReadableTime(module.length)}</ModuleLength>
                </li>
              ))}
            </ul>
          </DetailItem>
        </ModuleListContainer>
      </TrackDetails>
      <MarkDown>{description}</MarkDown>
    </ContentSection>
  )
}
