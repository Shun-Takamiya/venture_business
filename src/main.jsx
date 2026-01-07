// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client'; // 恐らくこの行が抜けています
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. <BrowserRouter>で囲む */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)