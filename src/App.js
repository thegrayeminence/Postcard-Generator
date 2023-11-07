import React, { useState, useEffect } from 'react';
import { Outlet, Navigate, useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar';

export default function App() {
  return (

<div className="App">

    <NavBar />
    
    <Outlet />
</div>

  );
}


