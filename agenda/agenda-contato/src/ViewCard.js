import React from 'react';
import { Card } from 'react-bootstrap';

const ViewCard = ({ view }) => {
  return (
    view.map(filme => (
        <Card key={filme.id}>
          <Card.Img src="http://static.tvmaze.com/uploads/images/medium_portrait/88/222182.jpg" />
          <Card.Body>
            <Card.Title>{filme.name}</Card.Title>
            <Card.Text>
            {filme.summary}
            </Card.Text>
          </Card.Body>
        </Card>
      ))
  );
};

export default ViewCard;
