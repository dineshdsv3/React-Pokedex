import React, {Component} from 'react';
import './App.css';
import Pokecard from './Pokecard';

class App extends Component {
  render() {
    return (
      <Pokecard 
      id={4}
      name="Charmander"
      type="Fire"
      exp={62}
      />
    )
  }

}

export default App;
