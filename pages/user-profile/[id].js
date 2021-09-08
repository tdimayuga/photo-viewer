import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Feed from '../../shared/Feed'
import Header from '../../components/Header'
import useToken from '../../components/useToken'
import { getPostsByUser, getPostsComments } from '../api/PostsApi'
import { getUserInfo, getUserInfoById } from '../api/UsersApi'
import PostCreator from '../../shared/PostCreator'

const UserProfile = () => {
  const router = useRouter()
  const { id } = router.query
  const [profileData, setProfileData] = useState({
    profileInfo: [],
    profilePosts: [],
    postComments: [],
  })
  const [user, setUser] = useState('')
  const { token, setToken } = useToken()
  const isLoggedIn = token
  const { profileInfo, profilePosts, postComments } = profileData
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
    const postComments = await getPostsComments()

    setUser(Object.assign({}, ...userInfo))
    setProfileData({
      profileInfo: Object.assign({}, ...profileInfo),
      profilePosts: profilePosts,
      postComments: postComments,
    })
  }

  return (
    <>
      {isLoggedIn && !!profileData && user && (
        <>
          <Header setToken={setToken} id={userId} />
          {profileInfo && <h2>Hello {profileName}</h2>}
          {userId == id && <PostCreator user={user} />}
          <Feed posts={profilePosts} comments={postComments} />
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
