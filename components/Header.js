import Link from 'next/link'
import Button from '../shared/Button'

const Header = ({ setToken }) => {
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
    </div>
  )
}

export default Header
