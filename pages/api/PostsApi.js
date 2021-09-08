export async function getPosts() {
  const response = fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return (await response).json()
}

export async function getPostsByUser(id) {
  const response = fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  return (await response).json()
}

export async function createPost(title, body, userId) {
  const response = fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: title,
      body: body,
      userId: userId,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  return (await response).json()
}
export async function getPostsComments() {
  const response = fetch(
    `https://jsonplaceholder.typicode.com/comments`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  return (await response).json()
}
