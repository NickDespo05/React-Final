import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useContext, useState } from "react";
import { DisplayContext } from "../context/DisplayContext";

export default function NavigationBar() {
    const { term, handleChange } = useContext(DisplayContext);

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>Nicholas D'Esposito</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={(e) => handleChange(e, "about")}>
                            About Me
                        </Nav.Link>
                        <Nav.Link onClick={(e) => handleChange(e, "projects")}>
                            Projects
                        </Nav.Link>
                        <Nav.Link onClick={(e) => handleChange(e, "skills")}>
                            Skills
                        </Nav.Link>
                        <NavDropdown
                            title="Social Medias"
                            id="basic-nav-dropdown"
                        >
                            <NavDropdown.Item href="">
                                Instagram
                            </NavDropdown.Item>
                            <NavDropdown.Item href="">
                                Linkedin
                            </NavDropdown.Item>
                            <NavDropdown.Item href="">Github</NavDropdown.Item>
                            <NavDropdown.Item href="">
                                FaceBook
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}
