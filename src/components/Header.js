import React, { useContext } from "react";
import { Container, Nav, Navbar, Stack, Image } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import UserContext from "./contexts/UserContext";
import '../css/Footer.css';

function Header() {
    let { user, isSignedIn, setIsSignedIn } = useContext(UserContext);

    function handleLogout() {
      localStorage.clear()
      setIsSignedIn("")
    }

    return (
        <div className="flex-wrapper">
            <Navbar bg="light" variant="light">
                <Container>
                    <Nav className="nav-title-and-photo">
                        <Image className="nav-photo" src={"arbys.png"} height="40" />
                    </Nav>
                    <Nav>
                        {isSignedIn && <Link to="/" className="nav-link">Welcome, {user.username}!</Link>}
                        <Link to="/builder" className="nav-link">Builder</Link>
                        <Link to="/generator" className="nav-link">Generate</Link>
                        <Link to="#" className="nav-link">Profile</Link>
                        {isSignedIn ? <Link to="/sign-in" onClick={handleLogout} className="nav-link">Logout</Link> :  <Link to="/sign-in" className="nav-link">Sign In</Link>}
                    </Nav>
                </Container>
            </Navbar>
            <Stack gap={3} className="col-md-10 mx-auto mt-3">
                <Outlet />
            </Stack>
            <div className="footer bg-dark">Ⓒ 2023, Powered by the Digital Dream Team</div>
      </div>
    )
}

export default Header;