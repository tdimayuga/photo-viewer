export async function getPosts() {
  const response = fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return (await response).json()
}