import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 👇 Wrap your App with BrowserRouter and set basename */}
    <BrowserRouter basename="/tarrifnews.agent-frontend/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
