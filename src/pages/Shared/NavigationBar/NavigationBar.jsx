import React, { useContext } from 'react'
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../providers/AuthProvider'
import { FaUserCircle } from 'react-icons/fa'
// import { auth } from 'firebase/auth'

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext)
  const handleLogOut = () => {
    logOut()
      .then()
      .catch(error => console.error(error))
  }
  return (
    <div>
      <Container>
        <Navbar collapseOnSelect expand='lg' bg='light' variant='light'>
          <Container>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='mx-auto'>
                <Link className='text-decoration-none ms-3' to='/category/0'>
                  Home
                </Link>

                <Link className='text-decoration-none ms-3' t0='/about'>
                  About
                </Link>
                <Link className='text-decoration-none ms-3' t0='/career'>
                  Career
                </Link>
              </Nav>
              <Nav>
                {user && (
                  <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
                )}
                {user ? (
                  <Button onClick={handleLogOut} variant='dark'>
                    Logout
                  </Button>
                ) : (
                  <Link to='/login'>
                    <Button variant='dark'>Login</Button>
                  </Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  )
}

export default NavigationBar
