import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Mynav from './Main/Mynav';
// import Main from './Main/Main';
// import Policy from './Main/Policy';
import Home from './Main/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homecrypto from './pages/Homecrypto';
import Show from './pages/Show';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path='home' element={<Home />} />
      <Route path='Homecrypto' element={<Homecrypto />} />
      <Route path="/:id" element={<Show />} />
    </Routes>
  </BrowserRouter>
);

