import PropTypes from 'prop-types'
import { useState } from 'react'
import { getUserInfo } from '../../pages/api/UsersApi'
import Button from '../../shared/Button'
import styles from './Login.module.scss'

const Login = ({ setToken, setUser }) => {
  const [username, setUsername] = useState()
  const [invalidUser, setInvalidUser] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await getUserInfo(username)
    const data = result[0]

    if (data) {
      setUser(data)
      localStorage.setItem('user-data', JSON.stringify(data))
      setToken(username)
    } else {
      setInvalidUser(true)
    }
  }

  return (
    <div className={styles.login}>
      <h1> Photo Viewer </h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={`form-control ${styles.loginInput}`}
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
        />
        <div className={styles.loginButton}>
          <Button
            className={`btn btn-outline-dark `}
            type="submit"
            text="Login"
          />
        </div>
      </form>
      {invalidUser && (
        <div
          className={`alert alert-danger small ${styles.alert}`}
          role="alert"
        >
          The username you entered does not exist. Please try Again.
        </div>
      )}
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func,
  setUser: PropTypes.func,
}

export default Login
