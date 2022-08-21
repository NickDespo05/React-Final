import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";

export default function Main() {
    return (
        <div>
            <Container>
                <h1>Welcome!</h1>
                <h2>This is my portfolio page!</h2>
                <h3 className="aboutStatement">
                    My name is Nick D'Esposito and have been programming for
                    about 2 years!
                </h3>
                <h3 className="aboutStatement">
                    Please select a link above in the NavBar so that you can
                    learn about me!
                </h3>
            </Container>
        </div>
    );
}
