import { FC } from "react"

import { ApolloIcon } from "../../styles"

import { FooterRoot, LogoContainer } from "./Footer.styled"

export const Footer: FC = () => (
  <FooterRoot>
    2021 ©{" "}
    <LogoContainer>
      <ApolloIcon width="100px" height="40px" />
    </LogoContainer>
  </FooterRoot>
)
