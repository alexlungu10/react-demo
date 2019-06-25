import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from "./Person";

const App: React.FC = () => {

  let vin:string='';

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Person/>
      </header>

    </div>
  );
}




function OnePerson() {
 // let person = new Person('dsa',22);
  return <p>This is new:</p>;
}

export default App;
