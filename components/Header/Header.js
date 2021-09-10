import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import styles from './Header.module.scss'

const Header = ({ setToken, user }) => {
  const { id, name } = user
  const handleLogout = () => {
    setToken('')
    localStorage.removeItem('token')
    localStorage.removeItem('user-data')
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
                  href=""
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
