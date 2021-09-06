export function camelCaseKeys(o) {
  let newO, origKey, newKey, value
  if (o instanceof Array) {
    return o.map(function (value) {
      if (typeof value === 'object') {
        value = camelCaseKeys(value)
      }
      return value
    })
  } else {
    newO = {}
    for (origKey in o) {
      if (o.hasOwnProperty(origKey)) {
        newKey = (origKey.charAt(0).toLowerCase() + origKey.slice(1) || origKey)
          .toString
        value = o[origKey]
        if (
          value instanceof Array ||
          (value !== null && value?.constructor === Object)
        ) {
          value = camelCaseKeys(value)
        }
        newO[newKey] = value
      }
    }
  }
  return newO
}

export function isBrowser() {
  return typeof window !== 'undefined'
}
