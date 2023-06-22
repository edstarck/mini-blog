export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const uuid = () => {
  return Math.random().toString(16).slice(2)
}

export const range = (start, end) =>
  [...Array(end).keys()].map((el) => el + start)
