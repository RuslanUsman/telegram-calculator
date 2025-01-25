import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function MyTelegramApp() {
  const navigate = useNavigate();

  useEffect(() => {
    window.Telegram.WebApp.ready();
  }, []);

  const handleButtonClick = () => {
    navigate('/MainMenu-component');
  };

  return (
    <div>
      <h1>Запустить калькулятор</h1>
      <button onClick={handleButtonClick}>Перейти к ExistingComponent</button>
    </div>
  );
}

export default MyTelegramApp;

