import React from 'react';
import {Button,Jumbotron} from 'react-bootstrap'

const JumbotronTopo = () => {
  return (
    <Jumbotron>
      <h2 class="display-4" >Framework PHP Yii2!</h2>
      <p>
        <b>Clone: </b> https://github.com/carlosmalltec/api-react
      </p>
      <p>
        <Button href="https://www.yiiframework.com/" target="_blank" variant="outline-dark">Framework Yii2!</Button>
      </p>
    </Jumbotron>
  );
};
export default JumbotronTopo;