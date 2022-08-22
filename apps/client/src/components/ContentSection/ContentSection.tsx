import { FC, PropsWithChildren } from "react"

import { ContentSectionRoot } from "./ContentSection.styled"

export const ContentSection: FC<PropsWithChildren> = ({ children }) => (
  <ContentSectionRoot>{children}</ContentSectionRoot>
)
