import React, { useState, useEffect } from 'react';
import { useOutlet, useOutletContext , useNavigate, NavLink} from 'react-router-dom';
import {Box, Flex, Spacer, useColorModeValue, Text, Button,
  Stack, useColorMode, useDisclosure, UseDisclosureProps,
} from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai";
import { IoMdPhotos } from "react-icons/io";
import { MoonIcon, SunIcon, ViewIcon, EditIcon, DownloadIcon, CloseIcon, AddIcon, QuestionIcon } from "@chakra-ui/icons";


import BasicButton from './ui/BasicButton';
import NavBarButton from './ui/NavBarButton';
import AboutSideBar from './AboutSideBar';
import Logo from "./layout/Logo";



const NavBarContainer = ({ children, ...props }) => {
  return (

    <Box 
    bgGradient={useColorModeValue(
      'linear(to-tr, pink.300, yellow.300)',
      'linear(to-bl, blue.700, purple.200)',)}>

      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap='nowrap'
        minW="100%"
        maxH='20vh'
        mb={10}
        p={10}
        // {...props}
      >
        {children}
      </Flex>
    </Box>
  );
};

export default NavBar;

const PreviewButton = ({children}) => {


  return (
  <>

      <Button
        variant='outline' size='lg'  onClick={children}
        px={4} variant='outline' size='lg' color={'white'} background={useColorModeValue('whiteAlpha.300')}
        borderRadius={6} borderWidth={2} transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
        backdropFilter='auto' backdropBlur='5px'
        _hover={{
          bg: useColorModeValue(), backdropFilter: 'auto', borderColor: 'pink.200',
          backdropBlur: '10px', transform: 'scale(1.1)'
        }}>
          <ViewIcon/>
      </Button>


    </>
    );
};

const NightModeToggleButton = () => {
  const { colorMode, toggleColorMode } = useColorMode()

return(
<>
  <Button px={4} onClick={toggleColorMode} variant='outline' size='lg'
  color={'white'} background={useColorModeValue('whiteAlpha.300')}
  borderRadius={6} borderWidth={2}
  _hover={{
    bg: useColorModeValue(), backdropFilter: 'auto', borderColor: 'pink.200',
    backdropBlur: '10px', transform: 'scale(1.1)',
  }}>
  {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
</Button>
</>);
};


function NavBar({handlePreview}) {
 //drawer opening states
 const { isOpen, onOpen, onClose } = useDisclosure()
const navigate = useNavigate();

  return (
    <>
      <NavBarContainer >

      <Stack direction={'row'} spacing={6}>
     
        <NightModeToggleButton/>
         <PreviewButton children={()=>handlePreview()} />
        </Stack>

        <Logo />

        <Stack direction={'row'} spacing={7}>
        <NavBarButton children={< AiOutlineHome />} func={()=>navigate('/')} />
        <NavBarButton children={< IoMdPhotos />} func={()=>navigate('/gallery')} />
        <NavBarButton children={ <QuestionIcon />} func={onOpen}/>
  
        </Stack>
      </NavBarContainer>

      < AboutSideBar isOpen={isOpen} onClose={onClose}/>
    </>

  );
};




