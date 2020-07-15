import React from 'react';
import './App.css';
import PetBasics from './components/PetBasics';

class App extends React.Component {

  render() {
    return(
      <div className="grid">
        <PetBasics />
      </div>
    )
  }
}

export default App;
