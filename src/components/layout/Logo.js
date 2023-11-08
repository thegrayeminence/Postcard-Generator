import { Box, Heading, useColorModeValue, Text, Tooltip } from "@chakra-ui/react";



export default function Logo() {
    return (
        <Box>
           
            <Heading
                bgGradient={useColorModeValue(
                    'linear(to-tr, white, teal.100)',
                    'linear(to-tr, purple.600, blue.800)')}
                bgClip='text'
                fontSize='2.7rem'
                fontWeight='extrabold'
                letterSpacing='.2rem'
                textAlign='center'
                transition={'all .3s ease'}
                _hover={{transform:'scale(1.05)'}}
                >
                 Post Card Genie </Heading>
                
        </Box>
    );
}
