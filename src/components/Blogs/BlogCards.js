import React from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";

function BlogCards(props) {
  return (
    <Card className="blog-card-view">
      <Card.Img variant="top" src={props.imgPath} alt={props.title} className="blog-img" />
      <Card.Body>
        <div className="blog-meta">
          <span className="blog-date">{props.date}</span>
          <span className="blog-readtime">{props.readTime}</span>
        </div>

        <Card.Title className="blog-title">{props.title}</Card.Title>

        <Card.Text className="blog-description">{props.description}</Card.Text>

        <Row className="blog-tags-grid">
          {props.tags.map((tag) => (
            <Col key={tag} xs={6} sm={4} className="blog-tag-col">
              <div className="blog-tag-card">
                <span className="blog-tag-text">{tag}</span>
              </div>
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
}

export default BlogCards;
