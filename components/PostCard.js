import Link from 'next/link'
import PropTypes from 'prop-types'
import CommentCreator from './CommentCreator'
import CommentCard from './CommentCard'

const PostCard = ({ post, author, comments, user }) => {
  const { title, body, id, userId } = post
  const { name } = author

  return (
    <>
      <div className="Post" id={id}>
        <h3>{title}</h3>
        <h4>
          by:{' '}
          <Link href={`/user-profile/${userId}`}>
            <a>{name}</a>
          </Link>
        </h4>
        <p>{body}</p>
        <div className="Comments">
          <h4>Comments</h4>
          <CommentCreator user={user} postId={id} />
          {comments && (
            <>
              {comments.map((comment, index) => {
                return <CommentCard comment={comment} key={index} />
              })}
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
