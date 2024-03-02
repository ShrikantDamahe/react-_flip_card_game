
import React, { useState, useEffect } from 'react';
import FirstPage from './FirstPage.js';
import SecondPage from './pages/SecondPage.js';
import ThirdPage from './pages/ThirdPage.js';

const App = () => {
  const [username, setUsername] = useState(localStorage.getItem('username'));
  const [currentPage, setCurrentPage] = useState('/');

 const handleLogin = (username) => {
  localStorage.setItem('username', username);
  setUsername(username);
  setCurrentPage('/SecondPage.js'); // Change 'pages/SecondPage.js' to '/SecondPage'
};

  const handleLogout = () => {
    localStorage.removeItem('username');
    setUsername(null);
    setCurrentPage('/');
  };

  useEffect(() => {
    if (username === null && currentPage !== '/') {
      setCurrentPage('/');
    }
  }, [username, currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case '/':
        return <FirstPage onLogin={handleLogin} setCurrentPage={setCurrentPage} />;
      case '/SecondPage.js':
        return <SecondPage username={username} onLogout={handleLogout} setCurrentPage={setCurrentPage} />;
      case '/ThirdPage':
        return <ThirdPage username={username} onLogout={handleLogout} setCurrentPage={setCurrentPage} />;
      default:
        return <div>Page not found</div>;
    }
  };

  return renderPage();
};

export default App;





