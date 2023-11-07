import { Outlet, Navigate, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


import NavBar from '../components/NavBar';

const emptyFormObj =   {
  "id": 1,
  "name": "",
  "address":"",
  "subject":"",
  "message":"",
  "style":"Modern",
  "options":{
      "map":false,
      "stamp":true,
      "border":true,
      "filters":false,
      "two-sided":true
  },
  "prompt":"",
  "image_url":"https://via.placeholder.com/400"
};






export default function Home() {

  const [formData,setFormData] = useState(emptyFormObj)



    return (
        <>
            <NavBar />

            <Outlet context={[formData, setFormData]} />

        </>
    )

}