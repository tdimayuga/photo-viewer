export function isEmpty(obj) {
  return Object.keys(obj).length === 0
}

export function isBrowser() {
  return typeof window !== 'undefined'
}
