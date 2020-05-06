import React from 'react';
import { Card } from 'react-bootstrap';

const ObjetoCard = ({ list }) => {
  function isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key))
        return false;
    }
    return true;
  }
  let dataFilme = [];
  list.map(function (data, index) {
    var myObject = JSON.stringify(data.show.image);
    var obj = JSON.parse(myObject);

    if (isEmpty(obj) === true) {
      dataFilme.push();
    } else {
      dataFilme.push({
        'imageMedium':obj.medium,
        'imagemOriginal':obj.original,
        'id':data.show.id,
        'name':data.show.name,
        'summary':data.show.summary,
      });
    }
  });
  return (
    dataFilme.map(filme => (
        <Card key={filme.id}>
          <Card.Img src={filme.imageMedium} />
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

export default ObjetoCard;