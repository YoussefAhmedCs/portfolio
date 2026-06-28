import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/hand.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle/>
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p style={{color: "white"}}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row style={{justifyContent: "center", paddingBottom: "10px"}}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={chatify}
                            isBlog={false}
                            title="DevHub Community (API)"
                            description="A scalable backend system built for the DevHub Platform, designed to power a modern developer community through secure APIs, authentication, content management, and real-time interactions. The project follows clean architecture principles to ensure maintainability, scalability, and high performance."
                            ghLink="https://github.com/devhub-platform/backend-development"
                            demoLink="https://dev-hubs.tech"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={bitsOfCode}
                            isBlog={false}
                            title="Blogs App using Laravel"
                            description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
                            ghLink="https://github.com/youssef-ahmed-cs/Blogs-app-using-laravel"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={editor}
                            isBlog={false}
                            title="Editor.io"
                            description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
                            ghLink="https://github.com/soumyajit4419/Editor.io"
                            demoLink="https://editor.soumya-jit.tech/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={leaf}
                            isBlog={false}
                            title="Plant AI"
                            description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
                            ghLink="https://github.com/youssef-ahmed-cs/plant_disease_detection-main"
                            demoLink="https://face-recognition-v1.up.railway.app/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={suicide}
                            isBlog={false}
                            title="e-learning platform"
                            description="Laravel Storm is a comprehensive e-learning platform built with Laravel 12, designed to provide a seamless online education experience. The platform supports multiple user roles including students, instructors, and administrators, offering features for course creation, enrollment management, progress tracking, and more."
                            ghLink="https://github.com/youssef-ahmed-cs/Laravel-E-Learing-Platform"
                            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={emotion}
                            isBlog={false}
                            title="Face Recognition and Emotion Detection"
                            description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
                            ghLink="https://github.com/youssef-ahmed-cs/face-recognition-task"
                            // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={emotion}
                            isBlog={false}
                            title="Hand Open/Closed Detection"
                            description="A real-time computer vision project that detects whether a user's hand is open or closed using a webcam. The system leverages AI-powered hand landmark detection to track hand movements and analyze finger positions, enabling accurate gesture classification in real time."
                            ghLink="https://github.com/youssef-ahmed-cs/hand-open-closed-detection"
                            // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
