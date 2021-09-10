import PropTypes from 'prop-types'

const CommentCard = ({ comment }) => {
    const {name, body} = comment

  return (
    <>
      
        <h6>
          {name}:
        </h6>
        <p>{body}</p>
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
