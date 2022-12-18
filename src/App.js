import './App.css';
import React from 'react';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './pages/contact/contact';
import Photos from './pages/Photos/photos';
import Comments from './pages/comments/index';

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/photos' element={<Photos />}/>
        <Route path='/comments' element={<Comments />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
