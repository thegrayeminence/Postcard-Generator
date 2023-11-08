import {Button, useColorModeValue } from "@chakra-ui/react";


export default function BasicButton({children}) {


  return (
  <>

      <Button
        variant='outline' size='lg'
        px={4} variant='outline' size='lg' color={'white'} background={useColorModeValue('whiteAlpha.300')}
        borderRadius={6} borderWidth={2} transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
        backdropFilter='auto' backdropBlur='5px'
        _hover={{
          bg: useColorModeValue(), backdropFilter: 'auto', borderColor: 'pink.200',
          backdropBlur: '10px', transform: 'scale(1.1)'
        }}>
          {children}
      </Button>


    </>
    );
};