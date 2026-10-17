import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Root container element with id "root" not found in DOM');
}

const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
