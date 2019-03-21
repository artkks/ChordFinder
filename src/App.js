import React, { Component } from 'react';
import ShowSing from './components/ShowSing'
import Home from './components/Home'
class App extends Component {
  render() {
    return (
      <div className="App">
           <ShowSing />
           <Home />
      </div>
    );
  }
}

export default App;
