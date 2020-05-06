import React from 'react';
import { Card } from 'react-bootstrap';

const ObjetoCard = () => {
  return (
    <Card>
      <Card.Img  src="http://static.tvmaze.com/uploads/images/medium_portrait/88/222182.jpg" />
      <Card.Body>
        <Card.Title>Card title that wraps to a new line</Card.Title>
        <Card.Text>
        className="text-center p-3" This is a longer card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ObjetoCard;