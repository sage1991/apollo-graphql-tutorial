import { ReactNode } from "react"
import { LoadingSpinner } from "@apollo/space-kit/Loaders/LoadingSpinner"

import { SpinnerContainer } from "./QueryResult.styled"

interface Props<T> {
  loading: boolean
  error: any
  data?: T
  children: (data: T) => ReactNode
}

export const QueryResult = <T,>({ loading, error, data, children }: Props<T>) => {
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

  return <>{children(data)}</>
}
