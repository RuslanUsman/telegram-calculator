import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainMenu from './components/MainMenu';
import MaterialSelection from './components/MaterialSelection';
import ConstructionSelection from './components/ConstructionSelection';
import Result from './components/Result';
import MyTelegramApp from './MyTelegramApp'; 
import'telegram-web-app-api';

import './App.css';

function App() {
  useEffect(() => {
    window.Telegram.WebApp.ready();
  }, []);

  return (
    <Router>
    <Routes>
    
      <Route path="/MainMenu-component" element={<MainMenu />} />
      <Route path="/materials" element={<MaterialSelection />} />
      <Route path="/construction" element={<ConstructionSelection />} />
      <Route path="/result" element={<Result />} />
      <Route path="/my-telegram-app" element={<MyTelegramApp />} />
      <Route path="/telegram-calculator" element={<MyTelegramApp />} />
    </Routes>
  </Router>
  );
}

export default App;


