import { FC, PropsWithChildren } from "react"

import {
  HeaderRoot,
  HomeButton,
  HomeButtonContainer,
  HomeLink,
  Logo,
  LogoContainer,
  Title
} from "./Header.styled"

import { SpaceCat } from "../../assets"

export const Header: FC<PropsWithChildren> = ({ children }) => (
  <HeaderRoot>
    <HomeButtonContainer>
      <HomeLink to="/">
        <HomeButton>
          <LogoContainer>
            <Logo src={SpaceCat} />
          </LogoContainer>
          <Title>
            <h3>Catstronaut</h3>
            <div>Kitty space academy</div>
          </Title>
        </HomeButton>
      </HomeLink>
    </HomeButtonContainer>
    {children}
  </HeaderRoot>
)