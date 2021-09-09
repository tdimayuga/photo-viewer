export async function getUserAlbums(id) {
  const response = fetch(
    `https://jsonplaceholder.typicode.com/albums?userId=${id}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  return (await response).json()
}

export async function getUserPhotosByParam(param) {
  const response = fetch(
    `https://jsonplaceholder.typicode.com/photos?${param}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  return (await response).json()
}

