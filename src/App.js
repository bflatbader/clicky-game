import React from 'react';
import Navbar from "./components/Navbar";
import Jumbotron from './components/Jumbotron';
import Consoles from './components/Consoles'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <div class="row">
        <div class="col-md-12">
          <Consoles />
        </div>
      </div>
    </div>
  );
}

export default App;
