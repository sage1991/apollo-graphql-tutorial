export const formatSeconds = (seconds: number) => {
  if (seconds < 60) {
    return `${seconds}s`
  }

  const totalMinutes = Math.floor(seconds / 60)
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60

  let time = `${minutes}m`
  if (hours >= 1) {
    time = `${hours}h ${time}`
  }
  return time
}
