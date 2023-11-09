import { useColorModeValue, useColorMode } from "@chakra-ui/react";
import { Box, Heading } from "@chakra-ui/react"


const CardContentBox = ({children, header}) => {

    return (

        <Box
            //Card Content Background
            maxW="80vw" 
           // h='fit-content' 
            margin="0 auto" borderWidth='.1rem' p='2.5rem' borderRadius='2rem'
            backdropFilter='auto'  shadow='lg'
            bg='whiteAlpha.300' transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
            _hover={{
                backdropFilter: 'auto',
                backdropBlur: '10px', transform: 'scale(1.025)',
                bgGradient: useColorModeValue('linear(to-b,  #fff4e7, #e6fffd)')
            }}

        >
            <Heading
                // Card Editor Form Header
                bgGradient={useColorModeValue('linear(to-r, pink.400, purple.600)', 'linear(to-r, purple.200, blue.600)')}
                bgClip='text'
                fontSize='5xl'
                fontWeight='extrabold'
               
            >
                {header}

            </Heading>
            {children}
        </Box>

    );

};


export default CardContentBox