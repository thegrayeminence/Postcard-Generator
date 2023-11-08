import { Outlet, Navigate, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useDisclosure, UseDisclosureProps } from '@chakra-ui/react';

import NavBar from '../components/NavBar';

const emptyFormObj = {
  "id": 1,
  "name": "",
  "address": "",
  "subject": "",
  "message": "",
  "style": "Modern",
  "options": {
    "map": false,
    "stamp": true,
    "border": true,
    "filters": false,
    "two-sided": true
  },
  "prompt": "",
  "image_url": "https://via.placeholder.com/400"
};






export default function Home() {


  const [formData, setFormData] = useState(emptyFormObj)

  const { isOpen, onOpen, onClose, getDisclosureProps, getButtonProps } = useDisclosure()

  const [previewMode, setPreviewMode] = useState(false);
  const [cards,setCards] = useState([])  
  // const [stampOn,setStampOn] = useState(true);

  // const handleStamp = () => {
  //   if (stampOn) {setStampOn(false)}
  //   else if (!stampOn) {setStampOn(true)}
  // }

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

      <Outlet context={[ formData, setFormData, previewMode, cards]} />

    </>
  )

}