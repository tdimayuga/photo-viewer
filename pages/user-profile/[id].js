import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import useToken from '../../components/useToken'
import { getUserInfoById } from '../api/UsersApi'

const UserProfile = () => {
  const router = useRouter()
  const { id } = router.query
  const [profileInfo, setProfileInfo] = useState()
  const { token, setToken } = useToken()
  const isLoggedIn = token

  useEffect(() => {
    if (!router.isReady) return
    !isLoggedIn ? router.push('/') : loadUserProfileInfo()
  }, [router.isReady, token])

  const handleRedirect = ({ href }) => {
    router.push(href)
  }

  const loadUserProfileInfo = async () => {
    console.log('🚀 ~ file: [id].js ~ line 8 ~ UserProfile ~ id', id)

    const response = await getUserInfoById(id)
    setProfileInfo(response)
  }

  return (
    <>
      {isLoggedIn && (
        <>
          <Header setToken={setToken} />
          {profileInfo && <h2>Hello {profileInfo[0]?.name}</h2>}
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
