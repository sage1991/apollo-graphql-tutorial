import { FC } from "react"

import { ContentSectionRoot } from "./ContentSection.styled"

export const ContentSection: FC = ({ children }) => (
  <ContentSectionRoot>{children}</ContentSectionRoot>
)
