import { Button } from "@chakra-ui/react"
import { useColorModeValue } from "@chakra-ui/react";

const SideBarButton = ({children}) => {

    return(<Button
size='lg' height='4rem' variant='solid' borderColor={useColorModeValue('blackAlpha.600')} color={useColorModeValue('blackAlpha.600')} bg={useColorModeValue('whiteAlpha.200')}
borderRadius={6} borderWidth={2} transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
backdropFilter='auto' backdropBlur='10px' 
_hover={{
    backdropFilter: 'auto', borderColor:useColorModeValue('pink.200'),
    bg:useColorModeValue('whiteAlpha.400'), color:useColorModeValue('pink.200'),
    backdropBlur: '10px', transform: 'scale(1.1)'
}}>

{children}

</Button>

);

 };

 export default SideBarButton