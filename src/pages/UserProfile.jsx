// src/pages/UserProfile.jsx
import React from 'react';
import { useAuth } from '../context/AuthContext'; // Import AuthContext
import { Container, Card, Button } from 'react-bootstrap'; // Import Bootstrap components

const UserProfile = () => {
  const { currentUser } = useAuth(); // Get the current user from context

  return (
    <Container className="mt-4">
      <Card>
        <Card.Body>
          <Card.Title>User Profile</Card.Title>
          <Card.Text>
            <strong>Email:</strong> {currentUser?.email}
          </Card.Text>
          {/* Add more user info as needed */}
          <Button variant="primary">Edit Profile</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default UserProfile;
