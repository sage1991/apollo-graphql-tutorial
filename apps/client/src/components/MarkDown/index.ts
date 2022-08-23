import styled from "@emotion/styled"
import ReactMarkdown from "react-markdown"

import { Palette } from "../../styles"

// @ts-expect-error
export const MarkDown = styled(ReactMarkdown)`
  color: ${Palette.grey.darker};

  h1 {
    font-size: 1.7em;
  }

  h2 {
    font-size: 1.4em;
  }

  h3 {
    font-size: 1.2em;
  }

  a {
    color: ${Palette.pink.base};
  }

  pre {
    padding: 20px;
    border-radius: 4px;
    border 1px solid ${Palette.silver.dark};
    background-color: ${Palette.silver.base};
    
    code {
      font-size: 0.9em;
    }
  }
`
