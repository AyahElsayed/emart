import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import "./style.scss";

const NavBar = ({ itemsCount }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Online shop</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-center">
          <Navbar.Text className="mx-2">
            <Link to="/" className="text-decoration-none">
              Home
            </Link>
          </Navbar.Text>
          <Navbar.Text className="mx-2">
            <Link to="/about" className="text-decoration-none">
              About
            </Link>
          </Navbar.Text>
          <Navbar.Text className="mx-2">
            <Link to="allProducts" className="text-decoration-none">
              Products
            </Link>
          </Navbar.Text>
        </Navbar.Collapse>

        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="position-relative">
            {/* <Link to="/cart" > */}
            <MdShoppingCart className="cartshopingIcon" />
            {/* </Link> */}
            <span className="badge">{itemsCount}</span>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
