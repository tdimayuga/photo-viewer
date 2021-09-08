import PropTypes from 'prop-types'
import { useState } from 'react'
import { getUserInfo } from '../pages/api/UsersApi'
import Button from '../shared/Button'

const Login = ({ setToken, setUser }) => {
  const [username, setUsername] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await getUserInfo(username)

    if (result.length) {
      setUser(result[0])
      localStorage.setItem('user-data', JSON.stringify(result[0]))
      setToken(username)
      console.log('here')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />
      <Button type="submit" text="Login" />
    </form>
  )
}

Login.propTypes = {
  setToken: PropTypes.func,
  setUser: PropTypes.func,
}

export default Login
