import React, { useState, useEffect } from 'react';
import { useOutlet, useOutletContext } from 'react-router-dom';
import {
  Nav, IconButton, Icon, Box, Flex,
  useColorModeValue, Text, Button,
  Stack, useColorMode, useDisclosure, UseDisclosureProps,
}
  from "@chakra-ui/react";
import { MoonIcon, SunIcon, ViewIcon, EditIcon, DownloadIcon, PlusSquareIcon, SettingsIcon, CloseIcon, AddIcon, AiOutlinePlusSquare, QuestionIcon } from "@chakra-ui/icons";

import BasicButton from './ui/BasicButton';
import NavBarButton from './ui/NavBarButton';

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


 // const buttonProps = getButtonProps();
 // const { isOpen, onOpen, onClose } = useDisclosure()
// const onOpen = useOutletContext();
//const onOpen = useDisclosure()

  return (
    <>
      <NavBarContainer >
  
      <Stack direction={'row'} spacing={6}>
     
        <NightModeToggleButton/>
      <PreviewButton children={()=>handlePreview()} />
        </Stack>

        <Logo />

        <Stack direction={'row'} spacing={7}>
        <NavBarButton children={<AddIcon />} />
        <NavBarButton children={<DownloadIcon />} />
        <NavBarButton children={ <QuestionIcon />} />
    

        </Stack>
      </NavBarContainer>
    </>

  );
};




