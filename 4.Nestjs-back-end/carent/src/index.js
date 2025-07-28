import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/stylesheet.css';
import '@fontsource/inter';
import '@fontsource/dosis';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);