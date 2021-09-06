import Link from 'next/link'
import PropTypes from 'prop-types'

const PostCard = ({ post, name }) => {
  const { title, body, id, userId } = post

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
