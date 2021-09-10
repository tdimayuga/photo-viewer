import { useState } from 'react'
import AlbumCard from '../AlbumCard'
import PhotoList from '../PhotoList'
import styles from './PhotoFeed.module.scss'

const PhotoFeed = ({ albums, photos }) => {
  const [state, setState] = useState({ showPhotos: false, id: '', title: '' })
  const { showPhotos, id, title } = state
  const getAlbumPhotos = (id) => {
    return photos.filter((photo) => photo.albumId === id)
  }

  const handleOnClick = (e, albumId, albumTitle) => {
    e.preventDefault()
    setState({ showPhotos: true, id: albumId, title: albumTitle })
  }

  const handleReturn = (e) => {
    e.preventDefault()
    setState({ showPhotos: false, id: '', title: '' })
  }
  return (
    <div className={styles.photoFeed}>
      {albums && !showPhotos && (
        <div className={`list-group ${styles.albumList}`}>
        <h4>Albums</h4>
          {albums.map((album, index) => {
            const { id, title } = album
            return (
              <a
                href=""
                className={`list-group-item list-group-item-action`}
                key={index}
                onClick={(e) => handleOnClick(e, id, title)}
              >
                <AlbumCard album={album} key={index} />
              </a>
            )
          })}
        </div>
      )}
      {showPhotos && (
        <div>
          <div className={styles.returnLink}>
            <a href="" onClick={(e) => handleReturn(e, id, title)}>
              Return to albums
            </a>
          </div>
          <PhotoList title={title} photos={getAlbumPhotos(id)} />
        </div>
      )}
    </div>
  )
}

export default PhotoFeed
