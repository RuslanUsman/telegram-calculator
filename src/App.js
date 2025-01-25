import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    window.Telegram.WebApp.ready();
  }, []);

  return (
    <div className="App">
      <h1>Hello, Telegram Mini App!</h1>
    </div>
  );
}

export default App;


