import 'react-image-lightbox/style.css'
import Photo from './Photo'

const PhotoList = ({ title, photos }) => {
  return (
    <>
      <div className="PhotoList">
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

export default PhotoList
