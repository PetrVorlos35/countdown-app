import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import LiterarniTabulka from './LiterarniTabulka.jsx'; // importuj komponentu
import SmerDetail from './SmerDetail.jsx';
import AutorDetail from './AutorDetail.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cestina" element={<LiterarniTabulka />} />
        <Route path="/smery/:smer" element={<SmerDetail />} />
        <Route path="/autori/:autor" element={<AutorDetail />} /> {/* přidáno */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
