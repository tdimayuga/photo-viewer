import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Feed from '../../shared/Feed'
import Header from '../../components/Header'
import useToken from '../../components/useToken'
import { getPostsByUser } from '../api/PostsApi'
import { getUserInfo, getUserInfoById } from '../api/UsersApi'
import PostCreator from '../../shared/PostCreator'

const UserProfile = () => {
  const router = useRouter()
  const { id } = router.query
  const [profileData, setProfileData] = useState({
    profileInfo: [],
    profilePosts: [],
  })
  const [user, setUser] = useState('')
  const { token, setToken } = useToken()
  const isLoggedIn = token
  const { profileInfo, profilePosts } = profileData
  const { name: profileName } = profileInfo
  const { name, id: userId } = user

  useEffect(() => {
    if (!router.isReady) return
    !isLoggedIn ? router.push('/') : loadUserProfileInfo()
  }, [router.isReady, token, id])

  const loadUserProfileInfo = async () => {
    const userInfo = await getUserInfo(token)
    const profileInfo = await getUserInfoById(id)
    const profilePosts = await getPostsByUser(id)

    setUser(Object.assign({}, ...userInfo))
    setProfileData({
      profileInfo: Object.assign({}, ...profileInfo),
      profilePosts: profilePosts,
    })
  }

  return (
    <>
      {isLoggedIn && !!profileInfo && !!profilePosts && user && (
        <>
          <Header setToken={setToken} id={userId} />
          {profileInfo && <h2>Hello {profileName}</h2>}
          {userId == id && <PostCreator userId={userId} name={name} />}
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
