import React from "react";
import {Container, Row, Col} from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
import myImg from "../../Assets/me.png";
import Tilt from "react-parallax-tilt";

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{fontSize: "2.6em"}}>
                            LET ME <span className="purple"> INTRODUCE </span> MYSELF
                        </h1>
                        <p className="home-about-body">
                            I’m a Software Engineer who loves transforming ideas into
                            reliable, scalable products. Over time, I’ve explored several
                            technologies and found my passion in building high-performance
                            systems and intuitive user experiences.
                            <br/>
                            <br/>
                            I’m proficient in
                            <i>
                                <b className="purple">
                                    {" "}
                                    PHP, C++, Python, Laravel, and JS{" "}
                                </b>
                            </i>
                            — and I enjoy working across both backend and DevOps stacks.
                            <br/>
                            <br/>
                            My key areas of interest include developing
                            <i>
                                <b className="purple">
                                    {" "}
                                    Web Applications, DevOps Solutions,{" "}
                                </b>
                            </i>
                            and exploring new ways to bridge on-chain and off-chain systems.
                            <br/>
                            <br/>
                            Whenever possible, I love building projects with
                            <b className="purple"> Laravel </b> and modern frameworks like{" "}
                            <i>
                                <b className="purple">Vue.JS</b> and{" "}
                                <b className="purple">FastAPI</b>.
                            </i>
                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img src={myImg} className="img-fluid" alt="avatar"/>
                        </Tilt>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Home2;
