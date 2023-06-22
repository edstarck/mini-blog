export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function uuid() {
  return Math.random().toString(16).slice(2)
}
