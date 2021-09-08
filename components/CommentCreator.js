import { useState } from 'react'
import PostCard from './PostCard'
import { createComment, createPost } from '../pages/api/PostsApi'
import Button from '../shared/Button'
import CommentCard from './CommentCard'

const CommentCreator = ({ postId, user }) => {
  const [comment, setComment] = useState('')
  const [mockComment, setMockComment] = useState()
  const { name, email } = user

  const handlePostSubmit = async (e) => {
    e.preventDefault()

    const response = await createComment(comment, name, email, postId)
    setMockComment(response)
    setComment('')
  }

  return (
    <div className="CommentForm">
      <form onSubmit={handlePostSubmit}>
        <input
          type="text"
          placeholder="Comment"
          onChange={(e) => setComment(e.target.value)}
          value={comment}
        />
        <Button type="submit" text="Post" />
      </form>
      {/* Added to mock new comment data */}
      {mockComment && <CommentCard comment={mockComment} />}
    </div>
  )
}

export default CommentCreator
