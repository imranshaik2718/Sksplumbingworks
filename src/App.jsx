import React from 'react';
import Homepage from './Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
// import Card from './components/card';
import DeliveryPage from './components/DeliveryPage';
import Repair from './components/Category/Repair';
import Leakage from './components/Category/Leakage';
import Toilet from './components/Category/Toilet';
import Inspection from './components/Category/Inspection';
import Maintenance from './components/Category/Maintenance';
function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/success" element={<Homepage/>} />
        <Route path="/Cart" element={<Repair/>} />
        <Route path="/Delivery" element={<DeliveryPage/>} />
        <Route path="/Leakage" element={<Leakage/>} />
        <Route path="/Toilet" element={<Toilet/>} />
        <Route path="/Inspection" element={<Inspection/>} />
        <Route path="/Maintenance" element={<Maintenance/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
