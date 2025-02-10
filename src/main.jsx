import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import './main.css';
import App from './components/App/App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>
);