import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom'; // ✅ Correct Import

createRoot(document.getElementById('root')).render(
  <BrowserRouter> {/* ✅ Router sirf yahan hoga */}
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);
