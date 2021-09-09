import Image from 'next/image'
import { useState } from 'react'
import Lightbox from 'react-image-lightbox'

const Photo = ({ photo }) => {
  const { id, url, thumbnailUrl, title } = photo
  const [state, setState] = useState({ isOpen: false })
  const { isOpen } = state

  return (
    <>
      <Image
        id={id}
        src={thumbnailUrl}
        alt={title}
        width="50"
        height="50"
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

export default Photo
