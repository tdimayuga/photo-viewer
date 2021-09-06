import { useEffect, useState } from 'react'
import { getPosts } from '../pages/api/PostsApi'
import { getAllUsers } from '../pages/api/UsersApi'
import PostCard from './PostCard'

const Feed = () => {
  const [posts, setPosts] = useState()
  const [users, setUsers] = useState()
  useEffect(() => {
    handleGetPosts()
    handleGetUsers()
  }, [])

  const handleGetPosts = async () => {
    const response = await getPosts()
    setPosts(response)
  }

  const handleGetUsers = async () => {
    const response = await getAllUsers()
    setUsers(response)
  }

  const getUserName = (userId) => {
    return users
      ? users.map((user) => {
          const { id, name } = user
          if (id === userId) return name
        })
      : ''
  }

  return (
    <div className="Feed">
      {posts
        ? posts.map((post, index) => {
            return (
              <PostCard
                name={getUserName(post.userId)}
                post={post}
                key={index}
              />
            )
          })
        : ''}
    </div>
  )
}

export default Feed
