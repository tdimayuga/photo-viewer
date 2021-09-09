import PropTypes from 'prop-types'
import 'react-image-lightbox/style.css'
import Photo from './Photo'

const AlbumCard = ({ album, photos }) => {
    const {title} = album

  return (
    <>
      <div className="Album">
        <h5>{title}</h5>
        <>
        {photos.map((photo, index) => {
        return <Photo photo={photo} key={index} />
        })}
        </>
      </div>
    </>
  )
}

AlbumCard.propTypes = {
  post: PropTypes.object,
  userId: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
  id: PropTypes.number,
}
export default AlbumCard
