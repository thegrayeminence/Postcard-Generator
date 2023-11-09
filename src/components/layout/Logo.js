import { Image, Box, Heading, useColorModeValue, HStack } from "@chakra-ui/react";


export default function Logo() {
    return (
        <Box>
            <HStack>

                <Heading
                    bgGradient={useColorModeValue(

                        'linear(to-bl, pink.100, teal.100)',
                        'linear(to-tr, purple.600, blue.800)')}
                    bgClip='text'
                    fontSize='2.7rem'
                    fontWeight='bold'
                    letterSpacing='.25rem'
                    textAlign='center'
                    fontFamily='Avenir Next'
                    transition='all 0.2s cubic-bezier(.08,.52,.52,1)'

                    _hover={{
                        transform: 'scale(1.07)'
                    }}
                >
                    PostCard Genie </Heading>
                    {/* <Spacer px={'.2rem'} /> */}
                    <Image 
                    mb='1rem'
                    opacity={'.5'}
                    filter='hue-rotate(220deg)'
                    boxSize='2.5rem'
                    objectFit='cover'
                    src='https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTQ5a3g1N3M4dHduc2h0aDJnNDBnazY3aGJheW45cDAwMWc1bWkycCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/S3Jrqq0djSClVR2wkG/giphy.gif'
                    alt=''
                    
                />

            </HStack>
        </Box>
    );
}
