import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from './routes';

export default function App() {


  
  //router
  const router = createBrowserRouter(routes);

  return (

    <div className="App">

      <RouterProvider
        router={router}
      //fallbackElement={}
      />
    </div>

  );
}


