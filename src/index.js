import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Mynav from './Mynav';
// import Main from './Main/Main';
// import Policy from './Main/Policy';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import Show from './pages/Show';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/* <Mynav />
    <Main />
    <Policy /> */}
    <Routes>
      <Route index element={<Home />}/>
      <Route path="/:id" element={<Show />}/>
    </Routes>
  </BrowserRouter>
);

