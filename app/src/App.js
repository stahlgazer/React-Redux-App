import React from 'react';
import './App.css';
import Dog from './components/Dog';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Dog Generator!</h1>
      </header>
      <Dog />
    </div>
  );
}

export default App;
