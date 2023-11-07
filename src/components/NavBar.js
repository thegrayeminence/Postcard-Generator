import React, { useState, useEffect } from 'react';

import {
  Nav, IconButton, Icon, Box, Flex,
  useColorModeValue, Text, Button,
  Stack, useColorMode, useDisclosure
}
  from "@chakra-ui/react";
import { MoonIcon, SunIcon, EditIcon, DownloadIcon, PlusSquareIcon, SettingsIcon, CloseIcon, AddIcon, AiOutlinePlusSquare } from "@chakra-ui/icons";

import BasicButton from './ui/BasicButton';

import Logo from "./layout/Logo";



const NavBarContainer = ({ children, ...props }) => {
  return (

    <Box bgGradient={useColorModeValue(
      'linear(to-tr, pink.300, yellow.300)',
      'linear(to-bl, blue.700, purple.200)',)}>

      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        mb={10}
        p={10}
        {...props}
      >
        {children}
      </Flex>
    </Box>
  );
};

export default NavBar;


const NightModeToggleButton = () => {
  const { colorMode, toggleColorMode } = useColorMode()
const { isOpen, onOpen, onClose } = useDisclosure()
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

function NavBar(props) {


 


  return (
    <>
      <NavBarContainer >
  
      <Stack direction={'row'} spacing={6}>
        <BasicButton />
        <NightModeToggleButton/>
        </Stack>
        <Logo />
        <Stack direction={'row'} spacing={7}>
          <Button px={4} variant='outline' size='lg' color={'white'} background={useColorModeValue('whiteAlpha.300')}
            borderRadius={6} borderWidth={2} transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
            backdropFilter='auto' backdropBlur='5px'
            _hover={{
              bg: useColorModeValue(), backdropFilter: 'auto', borderColor: 'pink.200',
              backdropBlur: '10px', transform: 'scale(1.1)'
            }}>
            <AddIcon />
          </Button>
          <Button px={4} variant='outline' size='lg' color={'white'} background={useColorModeValue('whiteAlpha.300')}
            borderRadius={6} borderWidth={2} transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
            backdropFilter='auto' backdropBlur='5px'

            _hover={{
              bg: useColorModeValue(), backdropFilter: 'auto', borderColor: 'pink.200',
              backdropBlur: '10px', transform: 'scale(1.1)'
            }}>
            <DownloadIcon />
          </Button>
          <Button px={4} variant='outline' size='lg' color={'white'} background={useColorModeValue('whiteAlpha.300')}
            borderRadius={6} borderWidth={2} transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
            backdropFilter='auto' backdropBlur='5px'

            _hover={{
              bg: useColorModeValue(), backdropFilter: 'auto', borderColor: 'pink.200',
              backdropBlur: '10px', transform: 'scale(1.1)'
            }}>
            <SettingsIcon />
          </Button>



        </Stack>
      </NavBarContainer>
    </>

  );
};




