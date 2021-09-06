export async function getPosts() {
  const response = fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return (await response).json()
}

export async function getUsers() {
  const response = fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return (await response).json()
}
