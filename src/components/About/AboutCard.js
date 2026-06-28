import React from "react";
import Card from "react-bootstrap/Card";
import {ImPointRight} from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{textAlign: "justify"}}>
                        Hi everyone! I’m <span className="purple">Youssef Ahmed</span> from{" "}
                        <span className="purple">Cairo, Egypt</span>.
                        <br/>
                        I’m currently working as a{" "}
                        <span className="purple">Software Developer</span> at{" "}
                        <span className="purple"><a href="https://www.informatique-eg.com" target="_blank" rel="noopener noreferrer">Informatique</a></span>.
                        <br/>
                        I graduated from the{" "}
                        <span
                            className="purple">Faculty of Computers and Artificial Intelligence, Benha University</span>{" "}
                        with a Bachelor's degree in{" "}
                        <span className="purple">Computer Science</span>, earning a cumulative GPA of{" "}
                        <span className="purple">3.6/4.0</span>.
                        <br/>
                        <br/>
                        Outside of coding, I love engaging in activities that keep me creative and
                        inspired:
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight/> Playing Games 🎮
                        </li>
                        <li className="about-activity">
                            <ImPointRight/> Writing Tech Blogs ✍️
                        </li>
                        <li className="about-activity">
                            <ImPointRight/> Traveling and Exploring New Places 🌍
                        </li>
                    </ul>

                    <p style={{color: "rgb(155 126 172)"}}>
                        "Strive to build things that make a difference!"{" "}
                    </p>
                    <footer className="blockquote-footer">Youssef</footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;
