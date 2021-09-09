import AlbumCard from './AlbumCard'

const PhotoFeed = ({ albums, photos }) => {
    const getAlbumPhotos = (id) => {
        return photos.filter((photo) => photo.albumId === id)
    }
  return (
    <div className="PhotoFeed">
      {albums &&
        albums.map((album, index) => {
            const {id} = album
          return <AlbumCard album={album} key={index} photos={getAlbumPhotos(id)} />
        })}
    </div>
  )
}

export default PhotoFeed
