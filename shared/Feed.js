import { useEffect, useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import PostCard from '../components/PostCard'
import PostCreator from '../components/PostCreator'
import { getAllUsers } from '../pages/api/UsersApi'

const Feed = ({ posts, comments, user, showPostCreator = true }) => {
  const [postUsers, setPostUsers] = useState()
  useEffect(() => {
    handleGetUsers()
  }, [])

  const handleGetUsers = async () => {
    const response = await getAllUsers()
    setPostUsers(response)
  }

  const getUserName = (userId) => {
    const result = postUsers && postUsers.filter((user) => user.id === userId)
    return !!result && Object.assign({}, ...result)
  }

  const getPostComments = (id) => {
    return comments && comments.filter((comment) => comment.postId === id)
  }

  return (
    <div className="Feed">
      {showPostCreator && <PostCreator user={user} />}
      {!!postUsers?.length && (
        <Accordion>
          {posts.map((post, index) => {
            const { userId, id, title } = post
            return (
              <Accordion.Item eventKey={index} key={index}>
                <Accordion.Header>{title}</Accordion.Header>
                <Accordion.Body>
                  <PostCard
                    author={getUserName(userId)}
                    comments={getPostComments(id)}
                    post={post}
                    user={user}
                  />
                </Accordion.Body>
              </Accordion.Item>
            )
          })}
        </Accordion>
      )}
    </div>
  )
}

export default Feed
