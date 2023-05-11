import React from "react";
import { Container, Nav, Navbar, Stack, Image } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

function Header() {
    return (
        <div>
            <Navbar bg="black" variant="dark">
                <Container>
                    <Nav className="nav-title-and-photo">
                        <Image className="nav-photo" src={"#"} height="40" />
                        <Navbar.Text className="ms-3 cool-title">ResumeBuilder</Navbar.Text>
                    </Nav>
                    <Nav>
                        <Link to="/" className="nav-link">Builder</Link>
                        <Link to="/" className="nav-link">Generate</Link>
                        <Link to="/" className="nav-link">Profile</Link>
                        <Link to="/" className="nav-link">Sign In</Link>
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