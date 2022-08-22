import { useEffect, useState } from "react"

export interface Dimension {
  width: number
  height: number
}

const getDimensions = (): Dimension => {
  const { innerWidth, innerHeight } = window
  return {
    width: innerWidth,
    height: innerHeight
  }
}

export const useWindowDimensions = () => {
  const [dimensions, setDimensions] = useState<Dimension>(getDimensions)

  useEffect(() => {
    const onResize = () => setDimensions(getDimensions)
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  return dimensions
}
