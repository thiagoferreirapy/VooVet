import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import './App.css';
import Home from './pages/home/Home';
import Header from './layouts/header/Header';
import Container from './layouts/Container';

import 'swiper/swiper-bundle.css';
import Footer from './layouts/Footer/Footer';


function App() {

  
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route
            path="/"
            element={
              <Container customClass='min-height'>
                <Outlet />
              </Container>
            }
          >
            <Route index element={<Home />} />
          </Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;