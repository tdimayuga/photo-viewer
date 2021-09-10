import Image from 'next/image'
import { useState } from 'react'
import Lightbox from 'react-image-lightbox'

const Photo = ({ photo, width, height }) => {
  const { id, url, thumbnailUrl, title } = photo
  const [state, setState] = useState({ isOpen: false })
  const { isOpen } = state

  return (
    <>
      <Image
        id={id}
        src={thumbnailUrl}
        alt={title}
        width={width}
        height={height}
        onClick={() => setState({ isOpen: true })}
      />
      {isOpen && (
        <Lightbox
          mainSrc={url}
          onCloseRequest={() => setState({ isOpen: false })}
        />
      )}
    </>
  )
}

Photo.defaultProps = {
  width: '100',
  height: '100'
}

export default Photo
