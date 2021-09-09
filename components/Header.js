import Link from 'next/link'
import { Container, Navbar, NavDropdown } from 'react-bootstrap'
import Button from '../shared/Button'

const Header = ({ setToken, user }) => {
  const {id, name} = user
  const handleLogout = () => {
    setToken('')
    localStorage.removeItem('token')
    localStorage.removeItem('user-data')
  }

  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <NavDropdown title={`Signed in as: ${name}`} id="basic-nav-dropdown">
            <NavDropdown.Item href={`/user-profile/${id}`}>
              Profile
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="" onClick={handleLogout}>
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
