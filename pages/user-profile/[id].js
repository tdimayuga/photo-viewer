import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import PhotoFeed from '../../components/PhotoFeed/PhotoFeed'
import useToken from '../../components/useToken'
import Button from '../../shared/Button'
import Feed from '../../shared/Feed'
import Layout from '../../shared/Layout'
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
  const [feedSelector, setFeedSelector] = useState({ isPostFeed: true })
  const isLoggedIn = token
  const { profileInfo, profilePosts, postComments } = profileData
  const { name: profileName, id: profileId } = profileInfo
  const { id: userId } = user
  const { photos, albums } = userPhotos
  const isAuthenticatedUserProfile = userId === profileId
  const hasPhotos = photos.length && albums.length
  const { isPostFeed } = feedSelector

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

    async function loadUserPhotos() {
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
  }, [router, isLoggedIn, id, token, isPostFeed])

  const handleFeedChange = (isPosts) => {
    return isPostFeed !== isPosts && setFeedSelector({ isPostFeed: isPosts })
  }

  return (
    <>
      {isLoggedIn && <Layout setToken={setToken} user={user} pageName={profileName}>
        {profileData && user && (
          <>
            <h2>{profileName}</h2>
            {isAuthenticatedUserProfile && hasPhotos && (
              <>
                <Button
                  disabled={isPostFeed}
                  onClick={() => handleFeedChange(true)}
                  text="Posts"
                />
                <Button
                  disabled={!isPostFeed}
                  onClick={() => handleFeedChange(false)}
                  text="Photos"
                />
                {!isPostFeed && <PhotoFeed albums={albums} photos={photos} />}
              </>
            )}
            {isPostFeed && (
              <Feed
                posts={profilePosts}
                comments={postComments}
                user={user}
                showPostCreator={isAuthenticatedUserProfile}
              />
          )}
          </>
        )}
      </Layout>}
    </>
  )
}

export default UserProfile
