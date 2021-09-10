import React from 'react'
import { useCookies } from 'react-cookie'
import Homepage from '../components/Homepage'
import Login from '../components/Login/Login'
import Layout from '../shared/Layout'

const Home = () => {
  const [cookies] = useCookies()
  const user = cookies?.user

  const isLoggedIn = !!cookies?.token

  return (
    <Layout
      user={user}
      showHeader={isLoggedIn}
      pageName={'Photo Viewer'}
    >
      {isLoggedIn && user ? <Homepage user={user} /> : <Login />}
    </Layout>
  )
}

export default Home
