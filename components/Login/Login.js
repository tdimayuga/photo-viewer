import PropTypes from 'prop-types'
import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { getUserInfo } from '../../pages/api/UsersApi'
import Button from '../../shared/Button'
import styles from './Login.module.scss'

const Login = () => {
  const [username, setUsername] = useState()
  const [invalidUser, setInvalidUser] = useState(false)
  const [cookie, setCookie] = useCookies(['user'])

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const result = await getUserInfo(username)
      const data = result[0]
      if (data) {
        console.log('')
        setCookie('user', JSON.stringify(data), {
          path: '/',
          maxAge: 3600, // Expires after 1hr
          sameSite: true,
        })
        setCookie('token', JSON.stringify(username), {
          path: '/',
          maxAge: 3600, // Expires after 1hr
          sameSite: true,
        })
      } else {
        setInvalidUser(true)
      }
    } catch (err) {
      console.log(err)
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
