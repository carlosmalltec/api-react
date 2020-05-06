import React, { Component } from 'react';
import api from './api';
import Headers from './Headers';
import JumbotronTopo from './JumbotronTopo';
// import ListaFilmes from './ListaFilmes';
import Footer from './Footer';
import ObjetoCard from './ObjetoCard';


import { CardColumns } from 'react-bootstrap';


class App extends Component {
  state = {
    filmes: [],
    exempo1: [],
  }

  async componentDidMount() {
    const response = await api.get('star%20wars');
    // console.log(response.data);
    this.setState({ filmes: response.data });
  }

  render() {
    // Pega a posição filmes do state
    const { filmes } = this.state;
    
    return (
      <div class="container">
        <Headers />
        <JumbotronTopo />
        {/* <ListaFilmes /> */}
        {/* <ListaCard /> */}
        <CardColumns>
        <ObjetoCard list={filmes}/>
        </CardColumns>
        <Footer />
      </div>
    );
  };
};

export default App;
