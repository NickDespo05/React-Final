import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import Placeholder from "react-bootstrap/Placeholder";
import Carousel from "react-bootstrap/Carousel";

export default function Skills() {
    return (
        <div>
            <h1>My Skills</h1>
            <Container className="carouselClass">
                <Carousel>
                    <Carousel.Item>
                        <div className="carouselThing">
                            <Carousel.Caption>
                                <h3>Mern Stack</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </p>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carouselThing">
                            <Carousel.Caption>
                                <h3>React</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </p>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carouselThing">
                            <Carousel.Caption>
                                <h3>Front-End Developement</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </p>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carouselThing">
                            <Carousel.Caption>
                                <h3>Soon - SQL and Data Modeling</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </p>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    );
}
