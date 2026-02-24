// main.jsx --> starts the whoel react app, mounts the app into the HTML page
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css';
import App from './App.jsx';
import AdminRoute from './components/AdminRoute.jsx'; // password-protected admin page

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />          {/* Main portfolio page */}
        <Route path="/admin" element={<AdminRoute />} /> {/* Admin dashboard */}
      </Routes>
    </Router>
  </StrictMode>
);