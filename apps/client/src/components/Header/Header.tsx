import { FC } from "react"

import {
  HeaderContainer,
  HeaderRoot,
  HomeButton,
  HomeButtonContainer,
  HomeLink,
  Logo,
  LogoContainer,
  Title
} from "./Header.styled"

import { SpaceCat } from "../../assets"

export const Header: FC = ({ children }) => (
  <HeaderRoot>
    <HeaderContainer>
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
    </HeaderContainer>
  </HeaderRoot>
)
