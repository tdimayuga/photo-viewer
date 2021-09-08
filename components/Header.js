import Link from 'next/link'
import Button from '../shared/Button'

const Header = ({ setToken, id }) => {
  const handleLogout = () => {
    setToken('')
    localStorage.removeItem('token')
    localStorage.removeItem('user-data')
  }

  return (
    <div className="Header">
      <Link href="/" passHref>
        <Button onClick={handleLogout} text="Logout" />
      </Link>
      <Link href="/" passHref>
        <Button text="Home" />
      </Link>
      <Link href={`/user-profile/${id}`} passHref>
        <Button text="Profile" />
      </Link>
    </div>
  )
}

export default Header
