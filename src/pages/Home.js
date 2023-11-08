import { Outlet, Navigate, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useDisclosure, UseDisclosureProps } from '@chakra-ui/react';

import NavBar from '../components/NavBar';

const emptyFormObj = {
  "name": "",
  "address": "",
  "subject": "",
  "message": "",
  "style": "Modern",
  "prompt": "",
  "image_url": "https://picsum.photos/200/300/?blur=2"
};


export default function Home() {

//form data state
  const [formData, setFormData] = useState(emptyFormObj)

  //set card data state
  const [cards, setCards] = useState([])  

  //hide show preview card mode state
  const [previewMode, setPreviewMode] = useState(false);




useEffect(()=>{
fetch('http://localhost:4000/cards')
.then(res=>res.json())
.then(data=>setCards(data))

},[])


function handlePreview() {
  if (!previewMode) {setPreviewMode(true)}
  else if (previewMode) {setPreviewMode(false)

  }
 }




  return (
    <>
      <NavBar handlePreview={handlePreview}/>

      <Outlet context={{ formData:formData, setFormData:setFormData, previewMode:previewMode, cards:cards, setCards:setCards, emptyFormObj:emptyFormObj}} />

    </>
  )

}