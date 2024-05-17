import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Doctor from './Doctor';
import Navigation from './Navigation';
import Patient from './Patient';
import Home from './Home';
import './App.css';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navigation/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/doctors" element={<Doctor/>}/>
      <Route path="/patients" element={<Patient/>}/>
      </Routes>      
      </BrowserRouter>
    </div>
  )
}

export default App
