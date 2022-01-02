import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';

function App() {
  return (
      <div className="App">
    <Hello myName="Igor" age={43}/>
   </div>
  );
}

export default App;
