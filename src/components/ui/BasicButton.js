import { Icon, Button, Box, useColorModeValue } from "@chakra-ui/react";
import { HamburgerIcon, ArrowRightIcon, QuestionIcon ,  } from "@chakra-ui/icons";


export default function BasicButton() {


  return (
  <>
  <Box>
      <Button
        as={'a'} variant='outline' size='lg'
        px={4} variant='outline' size='lg' color={'white'} background={useColorModeValue('whiteAlpha.300')}
        borderRadius={6} borderWidth={2} transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
        backdropFilter='auto' backdropBlur='5px'
        _hover={{
          bg: useColorModeValue(), backdropFilter: 'auto', borderColor: 'pink.200',
          backdropBlur: '10px', transform: 'scale(1.1)'
        }}>
          <Icon
          as={QuestionIcon} w={6} height={4}
          position='relative'
          _hover={{ transform: 'scale(1.1)' }} /> 
      </Button>

    </Box>
    </>
    );
};