import { FC } from "react"
import { Link } from "@reach/router"

import { IconArrowRight, IconDoubleArrowRight } from "../../styles"
import { formatSecondsToReadableTime } from "../../utils"

import {
  ModuleListItem,
  ModuleListItemContent,
  ModuleNavStyledLink,
  ModulesList,
  ModulesNavContainer,
  ModuleTitle
} from "./ModuleNav.styled"

interface Props {
  module: any
  track: any
}

export const ModuleNav: FC<Props> = ({ module, track }) => {
  return (
    <ModulesNavContainer>
      <ModuleTitle>
        <h4>
          <Link to="../..">{track.title}</Link>
        </h4>
      </ModuleTitle>
      <ModulesList>
        {track.modules.map((navModule: any) => (
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          <ModuleListItem key={`module_${navModule.id}`}>
            <div>
              {/* eslint-disable-next-line @typescript-eslint/restrict-template-expressions */}
              <ModuleNavStyledLink to={`../${navModule.id}`}>
                <ModuleListItemContent isActive={module.id === navModule.id}>
                  {navModule.id === module.id ? (
                    <IconDoubleArrowRight width="14px" />
                  ) : (
                    <IconArrowRight width="14px" weight="thin" />
                  )}
                  <div>{navModule.title}</div>
                  <div>{formatSecondsToReadableTime(navModule.length as number)}</div>
                </ModuleListItemContent>
              </ModuleNavStyledLink>
            </div>
          </ModuleListItem>
        ))}
      </ModulesList>
    </ModulesNavContainer>
  )
}
