import React from "react";
import { Container, Nav, Navbar, Stack, Image } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

function Header() {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Nav className="nav-title-and-photo">
                        <Image className="nav-photo" src={"arbys.png"} height="40" />
                    </Nav>
                    <Nav>
                        <Link to="/builder" className="nav-link">Builder</Link>
                        <Link to="/generator" className="nav-link">Generate</Link>
                        <Link to="/" className="nav-link">Profile</Link>
                        <Link to="/sign-in" className="nav-link">Sign In</Link>
                    </Nav>
                </Container>
            </Navbar>
            <Stack gap={3} className="col-md-10 mx-auto mt-3">
                <Outlet />
            </Stack>
      </div>
    )
}

export default Header;