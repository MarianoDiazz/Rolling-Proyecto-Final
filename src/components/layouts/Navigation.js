import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";
import "./navbar.css"
import logo from "./LogoRolling.png"

const Navigation = ({ loggedUser }) => {

  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: '¿Estás seguro de que deseas cerrar sesión?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, cerrar sesión'
    }).then((result) => {
      if (result.isConfirmed) {
        setLoggedIn(false);
        navigate('/');
        Swal.fire(
          'Sesión cerrada',
          '',
          'success'
        )
      }
    })
  }

  return (
    <div>
      <Navbar variant="light" className="navbar" expand="lg">
        <Container>
          <Navbar.Brand className="logo" href="/">
            <img src={logo} alt="logo" className="logo"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/Products">
                Menu
              </Link>
              <Nav className="ml-auto">
                {loggedIn && (
                  <Button variant="link" onClick={handleLogout}>Cerrar sesión</Button>
                )}
              </Nav>

              <Link className="nav-link" to="/auth/login">
                Login
              </Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
