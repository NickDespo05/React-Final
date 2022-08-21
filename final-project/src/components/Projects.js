import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import Placeholder from "react-bootstrap/Placeholder";
import Carousel from "react-bootstrap/Carousel";

export default function Projects() {
    return (
        <div>
            <Container>
                <Card>
                    <Card.Title>Project 1</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </Card.Text>
                </Card>
                <Card>
                    <Card.Title>Project 2</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </Card.Text>
                </Card>
                <Card>
                    <Card.Title>Project 3</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </Card.Text>
                </Card>
                <Card>
                    <Card.Title>Project 4</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </Card.Text>
                </Card>
            </Container>
        </div>
    );
}
