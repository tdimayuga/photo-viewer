import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Feed from '../../shared/Feed'
import Header from '../../components/Header'
import useToken from '../../components/useToken'
import { getPostsByUser } from '../api/PostsApi'
import { getUserInfoById } from '../api/UsersApi'
import PostCreator from '../../shared/PostCreator'

const UserProfile = () => {
  const router = useRouter()
  const { id } = router.query
  const [profileData, setProfileData] = useState({profileInfo: [], profilePosts: []})
  // const [profileInfo, setProfileInfo] = useState()
  // const [profilePosts, setProfilePosts] = useState()
  const { token, setToken } = useToken()
  const isLoggedIn = token
  const { profileInfo, profilePosts} = profileData

  useEffect(() => {
    if (!router.isReady) return
    !isLoggedIn ? router.push('/') : loadUserProfileInfo()
  }, [router.isReady, token,])

  const loadUserProfileInfo = async () => {
    const userInfo = await getUserInfoById(id)
    const userPosts = await getPostsByUser(id)

    setProfileData({profileInfo: userInfo,
      profilePosts: userPosts})
  }

  return (
    <>
      {isLoggedIn && !!profileInfo && !!profilePosts &&(
        <>
          <Header setToken={setToken} id={id} />
          {profileInfo && <h2>Hello {profileInfo[0]?.name}</h2>}
          <PostCreator userId={id} name={profileInfo[0]?.name} />
          <Feed posts={profilePosts} />
        </>
      )}
    </>
  )
}

export default UserProfile

const getUrlParam = () => {
  if (process.browser && 'URLParams' in window) {
    return new URLSearchParams(decodeURI(window.location.search))
  }
  return null
}
