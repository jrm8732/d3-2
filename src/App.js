import React, { Component } from 'react';
import Home from './Pages/Home'
import NavBar from './Components/NavBar'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Home/>
      </div>
    );
  }
}

export default App;
