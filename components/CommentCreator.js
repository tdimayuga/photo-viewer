import { useState } from 'react'
import { createComment } from '../pages/api/PostsApi'
import Button from '../shared/Button'
import CommentCard from './CommentCard'
import styles from './CommentCreator.module.scss'

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
    <div>
      <div className={styles.commentCreator}>
        <form onSubmit={handlePostSubmit}>
          <textarea
            className={`form-control`}
            type="text"
            placeholder="Leave a comment"
            onChange={(e) => setComment(e.target.value)}
            value={comment}
            maxLength={200}
            resize='none'
          />
          <div className={styles.commentBtn}>
            <Button
              className={`btn btn-outline-dark `}
              type="submit"
              text="Post"
            />
          </div>
        </form>
      </div>
      {/* Added to mock new comment data */}
      {mockComment && (
        <ul className="list-group">
          <li className="list-group-item">
            <CommentCard comment={mockComment} />
          </li>
        </ul>
      )}
    </div>
  )
}

export default CommentCreator
