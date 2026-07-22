import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import BlogCards from "./BlogCards";
// import blogHero from "../../Assets/Projects/blog.png";
// import appImg from "../../Assets/Projects/codeEditor.png";
// import backendImg from "../../Assets/Projects/chatify.png";
// import devImg from "../../Assets/Projects/leaf.png";

const blogPosts = [
    {
        title: "What's the easiest way to deploy a Laravel project?",
        date: "Jan 2026",
        readTime: "6 min read",
        description:
            "With Laravel Cloud, you can connect your GitHub repo and deploy your app in just a few minutes. It handles automatic deployments on every push, managed MySQL/PostgreSQL databases, and S3-compatible storage all in one place. It even has a free plan with $5 in credits to get started. With Laravel Cloud, you can connect your GitHub repository and deploy your Laravel application in just a few minutes without worrying about server configuration or infrastructure management.Laravel Cloud provides a fully managed environment built specifically for Laravel applications, offering automatic deployments triggered by every Git push, so your application stays updated with the latest changes effortlessly.",
        tags: ["Laravel", "Deploy", "Cloud"],
        imgPath: "https://cdn.hackclub.com/019f69ad-ffd9-75d3-8a58-1729a104b358/cloud-laravel.jpeg",
    },
    {
        title: "Cloudinary The Best CDN storage!",
        date: "Feb 2026",
        readTime: "4 min read",
        description:
            "While working on my graduation project, we needed a reliable storage solution for images. Since our platform includes blogs and AI-generated images, fast loading was really important. After some research, we found Cloudinary to be the best option. It offers a free plan with 25,000 transformations and 25,000 image storage, which is perfect for our needs.We ended up using Cloudinary, and it turned out to be a great choice. It works with almost any framework, has solid documentation and APIs, and delivers images through a CDN, so they're loaded quickly from the nearest server.",
        tags: ["CDN", "Storage", "Laravel"],
        imgPath: "https://cdn.hackclub.com/019f69b4-79b8-7678-b022-7528ad5e6e69/storages.jpeg",
    },
    {
        title: "Microsoft Azure Fundamentals learning journey!",
        date: "Mar 2026",
        readTime: "7 min read",
        description:
            "Over the past two months, I've been spending a lot of time learning Microsoft Azure Fundamentals. My goal wasn't just to learn how to use cloud services—it was to understand how cloud computing actually works and gain hands-on experience with real-world deployments.I used a mix of learning resources, including Microsoft Learn, YouTube, Udemy, official documentation, and, most importantly, practical projects. I believe the best way to learn cloud technologies is by building and deploying real applications.",
        tags: ["Azure", "DevOps", "Cloud"],
        imgPath: "https://cdn.hackclub.com/019f69b7-6212-73fb-ada6-924e7eee2bf4/cloud-axure.jpeg",
    },
    {
        title: "Why Termius Became My Favorite SSH Client",
        date: "Apr 2026",
        readTime: "5 min read",
        description:
            "I'm always looking for software that makes a developer's life easier. The best tools aren't necessarily the ones with the most features—they're the ones that remove friction from your daily workflow.Recently, I started using Termius, and it's one of those tools.\n" +
            "\n" +
            "If you work in Cloud Computing, DevOps, or Backend Development, chances are you connect to remote servers almost every day. Whether it's an Ubuntu VM on Azure, an EC2 instance on AWS, or a VPS running Debian, opening a terminal, remembering connection details, and managing multiple servers can become repetitive.One Place for Every Server\n" +
            "\n" +
            "Termius solves that problem with a clean and modern interface.\n",
        tags: ["SSH", "Linux", "Termius"],
        imgPath: "https://cdn.hackclub.com/019f69b9-f4c3-77ed-b5ad-80a6791a02bb/zaw.jpeg",
    },
];

function Blogs() {
    return (
        <Container fluid className="blog-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My <strong className="purple">Blogs</strong>
                </h1>
                <p className="blog-section-subtitle">
                    Notes, tutorials, and short articles I write to share what I learn.
                </p>
                {/*<div className="blog-highlight">*/}
                {/*  Static posts, clean layout, and a simple reading experience for visitors.*/}
                {/*</div>*/}

                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    {blogPosts.map((post) => (
                        <Col key={post.title} md={6} lg={6} className="blog-card">
                            <BlogCards {...post} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </Container>
    );
}

export default Blogs;
