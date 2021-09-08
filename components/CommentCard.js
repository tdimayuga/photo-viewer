import PropTypes from 'prop-types'

const CommentCard = ({ comment }) => {
    const {name, body} = comment

  return (
    <>
      <div className="Comment">
        <h5>
          {name}:
        </h5>
        <p>{body}</p>
      </div>
    </>
  )
}

CommentCard.propTypes = {
  post: PropTypes.object,
  userId: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
  id: PropTypes.number,
}
export default CommentCard
