import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomLink from "../CustomLink/CustomLink";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from "../Utility/firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const handleLogOut = () => {
    signOut(auth);
    console.log(user);
  };
  console.log(user);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <div className="brand">
          <Navbar.Brand as={Link} to="/">
            Yeasmin Rao
          </Navbar.Brand>
        </div>
        <div className="navbar">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={CustomLink} to="/">
                Home
              </Nav.Link>

              <Nav.Link
                className="text-decoration-none"
                as={CustomLink}
                to="/about"
              >
                About
              </Nav.Link>
              <Nav.Link
                className="text-decoration-none"
                as={CustomLink}
                to="/blogs"
              >
                Blogs
              </Nav.Link>
              {user ? (
                ""
              ) : (
                <Nav.Link
                  className="text-decoration-none"
                  as={CustomLink}
                  to="/register"
                >
                  Register
                </Nav.Link>
              )}

              {user ? (
                <Navbar.Text className="log-out" onClick={handleLogOut}>
                  LogOut
                </Navbar.Text>
              ) : (
                <Nav.Link
                  className="text-decoration-none"
                  as={CustomLink}
                  to="/login"
                >
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
          <div className="myname"></div>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
