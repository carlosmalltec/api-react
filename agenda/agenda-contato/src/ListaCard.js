import React from 'react';

import ObjetoCard from './ObjetoCard';

import { CardColumns } from 'react-bootstrap';

const ListaCard = () => {
  let rows = []
  for (let i = 0; i < 12; i++) {
    rows.push(<ObjetoCard />)
  }

  return (
      <CardColumns>
        {rows}
      </CardColumns>
  );
};

export default ListaCard;