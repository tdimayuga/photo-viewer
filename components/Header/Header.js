import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useCookies, withCookies, Cookies } from 'react-cookie'
import styles from './Header.module.scss'
import { instanceOf } from 'prop-types'

const Header = ({ user }) => {
  const [, removeCookie] = useCookies()
  const { id, name } = user
  const handleLogout = () => {
    removeCookie('token', '', { path: '/' })
    removeCookie('user', '', { path: '/' })
  }

  return (
    <div className={styles.header}>
      <Navbar>
        <Container>
          <Navbar.Brand href="/">Photo Viewer</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <NavDropdown
                className={styles.navDropdown}
                title={`Signed in as: ${name}`}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item
                  className={styles.dropdownMenu}
                  href={`/user-profile/${id}`}
                >
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  className={styles.dropdownMenu}
                  href="/"
                  onClick={handleLogout}
                >
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}


export default Header
