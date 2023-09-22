import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Routes, Route } from 'react-router';
import Home from './Pages/Home';
import BookDetails from './Pages/BookDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} ></Route>
      <Route path="/bookDetails/:id" element={<BookDetails />} ></Route>
    </Routes>
  );
}

export default App;
