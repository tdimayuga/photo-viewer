import { useEffect, useState } from 'react'
import { getAllUsers } from '../pages/api/UsersApi'
import PostCard from '../components/PostCard'

const Feed = ({ posts, comments }) => {
  const [users, setUsers] = useState()
  useEffect(() => {
    handleGetUsers()
  }, [])

  const handleGetUsers = async () => {
    const response = await getAllUsers()
    setUsers(response)
  }

  const getUserName = (userId) => {
    const result = users
      && users.filter((user) => user.id === userId) 
    return !!result && Object.assign({}, ...result)
  }

  const getPostComments = (id) => {
    return comments
      && comments.filter((comment) => comment.postId === id)
          
  }

  return (
    <div className="Feed">
      {posts
        && posts.map((post, index) => {
          const {userId, id} = post
            return (
              <PostCard
                user={getUserName(userId)}
                comments={getPostComments(id)}
                post={post}
                key={index}
              />
            )
          })}
    </div>
  )
}

export default Feed
