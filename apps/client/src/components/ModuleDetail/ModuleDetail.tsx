import { FC } from "react"
import ReactPlayer from "react-player/youtube"

import { useWindowDimensions } from "../../hooks"
import { ContentSection } from "../ContentSection"
import { MarkDown } from "../MarkDown"
import { ModuleNav } from "../ModuleNav"

import { ModuleTitle, PlayerContainer, TopContainer, TopSection } from "./ModuleDetail.styled"

interface Props {
  track: any
  module: any
}

export const ModuleDetail: FC<Props> = ({ track, module }) => {
  const { videoUrl, title, content } = module
  const { width } = useWindowDimensions()
  return (
    <>
      <TopSection>
        <TopContainer viewportWith={width}>
          <PlayerContainer>
            <ReactPlayer url={videoUrl} width="100%" height="100%" />
          </PlayerContainer>
          <ModuleNav module={module} track={track} />
        </TopContainer>
      </TopSection>
      <ContentSection>
        <ModuleTitle>{title}</ModuleTitle>
        <MarkDown>{content}</MarkDown>
      </ContentSection>
    </>
  )
}
