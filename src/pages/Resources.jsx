// src/pages/Resources.jsx
import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap'; // Import Bootstrap components

const Resources = () => {
  const resources = [
    {
      title: "Legal Aid",
      description: "Find legal help in your area.",
      link: "#", // Add actual link here
    },
    {
      title: "Mental Health Support",
      description: "Access mental health resources.",
      link: "#", // Add actual link here
    },
    {
      title: "Community Support Groups",
      description: "Join local support groups.",
      link: "#", // Add actual link here
    },
  ];

  return (
    <Container className="mt-4">
      <h2>Available Resources</h2>
      <Row>
        {resources.map((resource, index) => (
          <Col sm={12} md={6} lg={4} key={index} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{resource.title}</Card.Title>
                <Card.Text>{resource.description}</Card.Text>
                <Card.Link href={resource.link} target="_blank">Learn More</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Resources;
