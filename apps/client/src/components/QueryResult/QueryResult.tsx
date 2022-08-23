import { FC, ReactNode } from "react"
import { LoadingSpinner } from "@apollo/space-kit/Loaders/LoadingSpinner"

import { SpinnerContainer } from "./QueryResult.styled"

interface Props {
  loading: boolean
  error: any
  data: any
  children?: ReactNode
}

export const QueryResult: FC<Props> = ({ loading, error, data, children }) => {
  if (error) {
    return <p>ERROR: ${error.message}</p>
  }
  if (loading) {
    return (
      <SpinnerContainer>
        <LoadingSpinner data-testid="spinner" size="large" theme="grayscale" />
      </SpinnerContainer>
    )
  }

  if (!data) {
    return <p>Nothing to show...</p>
  }

  return <></>
}
