import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import PhotoFeed from '../../components/PhotoFeed'
import useToken from '../../components/useToken'
import Feed from '../../shared/Feed'
import { getUserAlbums, getUserPhotosByParam } from '../api/PhotosApi'
import { getPostsByUser, getPostsComments } from '../api/PostsApi'
import { getUserInfo, getUserInfoById } from '../api/UsersApi'

const UserProfile = () => {
  const router = useRouter()
  const { id } = router.query
  const [profileData, setProfileData] = useState({
    profileInfo: [],
    profilePosts: [],
    postComments: [],
  })
  const [userPhotos, setUserPhotos] = useState({
    photos: [],
    albums: [],
  })
  const [user, setUser] = useState('')
  const { token, setToken } = useToken()
  const isLoggedIn = token
  const { profileInfo, profilePosts, postComments } = profileData
  const { name: profileName, id: profileId } = profileInfo
  const { id: userId } = user
  const { photos, albums } = userPhotos
  const isAuthenticatedUserProfile = userId === profileId
  const hasPhotos = photos.length && albums.length
  useEffect(() => {
    if (!router.isReady) return

    !isLoggedIn ? router.push('/') : loadUserProfileInfo() && loadUserPhotos()

    async function loadUserProfileInfo() {
      const userInfo = await getUserInfo(token)
      const profileInfo = await getUserInfoById(id)
      const profilePosts = await getPostsByUser(id)
      const postComments = await getPostsComments()

      setUser(Object.assign({}, ...userInfo))
      setProfileData({
        profileInfo: Object.assign({}, ...profileInfo),
        profilePosts: profilePosts,
        postComments: postComments,
      })
    }

    async function loadUserPhotos () {
      const userAlbums = await getUserAlbums(id)
      const photoParams = userAlbums
        .map((album) => {
          return `albumId=${album.id}`
        })
        .join('&&')
      const userPhotos = await getUserPhotosByParam(photoParams)

      setUserPhotos({
        photos: userPhotos,
        albums: userAlbums,
      })
    }
  }, [router, isLoggedIn, id, token])

  return (
    <>
      {isLoggedIn && profileData && user && userPhotos && (
        <>
          <Header setToken={setToken} id={userId} />
          <h2>{profileName}</h2>
          {isAuthenticatedUserProfile && hasPhotos && (
            <PhotoFeed albums={albums} photos={photos} />
          )}
          <Feed
            posts={profilePosts}
            comments={postComments}
            user={user}
            showPostCreator={isAuthenticatedUserProfile}
          />
        </>
      )}
    </>
  )
}

export default UserProfile
