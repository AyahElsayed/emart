import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { MdShoppingCart } from 'react-icons/md';
// import { Link } from "react-router-dom";
import './style.scss'

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark"  >
      <Container>
        <Navbar.Brand href="/">
          Online shop
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-center">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">About</Nav.Link>
            <Nav.Link href="/">Products</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className='position-relative'>
            {/* <Link to="/cart" > */}
            <MdShoppingCart className='cartshopingIcon' />
            {/* </Link> */}
            <span className='badge'>5</span>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar