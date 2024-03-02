import React from 'react';
import './index.css';
import App from './App.js'; // Specify file extension .js
import { BrowserRouter } from 'react-router-dom';

// Import createRoot from react-dom/client
import { createRoot } from 'react-dom/client';

// Use createRoot to render your app
const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
