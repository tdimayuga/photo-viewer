import { useEffect, useState } from 'react'
import { getAllUsers } from '../pages/api/UsersApi'
import PostCard from '../components/PostCard'
import PostCreator from '../components/PostCreator'

const Feed = ({ posts, comments, user, showPostCreator=true}) => {
  const [postUsers, setPostUsers] = useState()
  useEffect(() => {
    handleGetUsers()
  }, [])

  const handleGetUsers = async () => {
    const response = await getAllUsers()
    setPostUsers(response)
  }

  const getUserName = (userId) => {
    const result = postUsers
      && postUsers.filter((user) => user.id === userId) 
    return !!result && Object.assign({}, ...result)
  }

  const getPostComments = (id) => {
    return comments
      && comments.filter((comment) => comment.postId === id)
          
  }

  return (
    <div className="Feed">
    {showPostCreator && <PostCreator user={user} /> }
      {posts && postUsers
        && posts.map((post, index) => {
          const {userId, id} = post
            return (
              <PostCard
                author={getUserName(userId)}
                comments={getPostComments(id)}
                post={post}
                key={index}
                user={user}
              />
            )
          })}
    </div>
  )
}

export default Feed
