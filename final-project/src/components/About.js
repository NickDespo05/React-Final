import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import Placeholder from "react-bootstrap/Placeholder";
import Carousel from "react-bootstrap/Carousel";

export default function About() {
    return (
        <div>
            <h1>About me!</h1>
            <Container className="carouselClass">
                <Carousel>
                    <Carousel.Item>
                        <div className="carouselThing">
                            <Carousel.Caption>
                                <h3>I Love to code</h3>
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
                                <h3>I am Great at Problem Solving</h3>
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
                                <h3>I Code almost Daily</h3>
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
                                <h3>I am Extremely Hard Working</h3>
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
