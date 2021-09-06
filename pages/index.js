import { useState } from 'react'
import Homepage from '../components/Homepage'
import Login from '../components/Login'
import useToken from '../components/useToken'
import { isBrowser } from '../services/utils'
import React from 'react'

const Home = () => {
  const { token, setToken } = useToken()
  const initializeUser = () => {
    if (isBrowser()) {
      const userData = localStorage.getItem('user-data')
      const user = JSON.parse(userData)
      return user
    }
  }
  const [user, setUser] = useState(initializeUser())
  const isLoggedIn = token

  return (
    <>
      {isLoggedIn ? (
        <Homepage setToken={setToken} user={user} setUser={setUser} />
      ) : (
        <Login setToken={setToken} setUser={setUser} />
      )}
    </>
  )
}

export default Home
