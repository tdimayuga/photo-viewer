import { useState } from 'react';
import useToken from '../components/useToken';
import Homepage from './Homepage';
import Login from './Login'


function Home() {

  const {token, setToken} = useToken()
  const [user, setUser] = useState()
  const isLoggedIn = token

  return (
    <>
    {isLoggedIn ? 
    <Homepage setToken={setToken} user={user} /> 
    :  <Login setToken={setToken} setUser={setUser} />}
    </>
  )
}

export default Home