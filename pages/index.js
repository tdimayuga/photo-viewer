import React, { useState } from 'react'
import Homepage from '../components/Homepage'
import Login from '../components/Login/Login'
import useToken from '../components/useToken'
import { isBrowser } from '../services/utils'
import Layout from '../shared/Layout'

const Home = () => {
  const { token, setToken } = useToken()
  const [user, setUser] = useState(initializeUser())
  const isLoggedIn = !!token
  function initializeUser() {
    if (isBrowser()) {
      const userData = localStorage.getItem('user-data')
      const user = JSON.parse(userData)
      return user
    }
  }

  return (
    <Layout
      setToken={setToken}
      user={user}
      showHeader={isLoggedIn}
      pageName={'Photo Viewer'}
    >
      {isLoggedIn ? (
        <Homepage user={user}  />
      ) : (
        <Login setToken={setToken} setUser={setUser} />
      )}
    </Layout>
  )
}

export default Home
