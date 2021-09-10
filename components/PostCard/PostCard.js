import Link from 'next/link'
import PropTypes from 'prop-types'
import CommentCreator from '../CommentCreator'
import CommentCard from '../CommentCard'
import styles from './PostCard.module.scss'

const PostCard = ({ post, author, comments, user }) => {
  const { title, body, id, userId } = post
  const { name } = author

  return (
    <>
      <div className={styles.postCard} id={id}>
        <div className={styles.authorLabel}>
          by:{' '}
          <Link href={`/user-profile/${userId}`}>
            <a>{name}</a>
          </Link>
        </div>
        <p className={styles.commentBody}>{body}</p>
        <div className="Comments">
          <h4>Comments</h4>
          <CommentCreator user={user} postId={id} />
          {comments && (
            <>
              <ul className="list-group">
                {comments.map((comment, index) => {
                  return (
                    <li className="list-group-item" key={index}>
                      <CommentCard comment={comment} />
                    </li>
                  )
                })}
              </ul>
            </>
          )}
        </div>
      </div>
    </>
  )
}

PostCard.propTypes = {
  post: PropTypes.object,
  userId: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
  id: PropTypes.number,
}
export default PostCard
