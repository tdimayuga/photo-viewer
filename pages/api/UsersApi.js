export async function getUserInfo(username) {
  const response = fetch(
    `https://jsonplaceholder.typicode.com/users?username=${username}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  return (await response).json()
}

export async function getUserInfoById(id) {
  const response = fetch(
    `https://jsonplaceholder.typicode.com/users?id=${id}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  return (await response).json()
}

export async function getAllUsers() {
  const response = fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return (await response).json()
}
