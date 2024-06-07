import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { NavbarBrand } from "react-bootstrap";
import { getAllCategories } from "../../services/products";

const NavBar = () => {
  const [categories, setCategories] = React.useState([]);
  React.useEffect(() => {
    getAllCategories()
      .then((res) => {
        setCategories(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  });
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container>
        <NavbarBrand>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            HI FIVE
          </Link>
        </NavbarBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="CATEGORIAS" id="basic-nav-dropdown">
              {categories.map((category) => {
                return (
                  <NavDropdown.Item key={category.slug}>
                    <Link
                      to={`/category/${category.slug}`}
                      style={{
                        textDecoration: "none",
                        color: "white",
                        textTransform: "uppercase",
                      }}
                    >
                      {category.name}
                    </Link>
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
};

export default NavBar;
