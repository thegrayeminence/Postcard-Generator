
import { Heading, SimpleGrid, Text, Card, Spacer, Stack, Flex, Box, useColorModeValue } from "@chakra-ui/react"
import GalleryCard from "../components/GalleryCard"
import { useOutletContext } from "react-router-dom"
import blackBackdrop from '../assets/blackgallerybackdrop.jpg'
import whiteBackdrop from '../assets/whitegallerybackdrop.jpg'

const Gallery = () => {

   const {cards} = useOutletContext();
    console.log(cards)
return(
    <>
    <Box 
    position="relative"
    overflow="hidden"
    minH='100vh'
    py={'2.5rem'}
    width='full'
    mt='-10'
                bgGradient={useColorModeValue(
                    'linear(to-t, #9795f0, #fbc8d4)',
                    'linear(to-t, #e5b2ca, #7028e4)'
                )}
     
    >
         <Heading
                // Card Editor Form Header
                bgGradient={useColorModeValue('linear(to-r, pink.400, purple.600)', 'linear(to-r, purple.200, blue.600)')}
                bgClip='text'
                textAlign={'center'}
                fontSize='5xl'
                fontWeight='extrabold'
               
            >POSTCARD GALLERY:</Heading>

        <SimpleGrid justify='center' pt={'2rem'} ml='10%' width='80%' columns={2} spacing='2.5rem'>
         
            {cards.map((card)=> <GalleryCard key={card.id} card={card}/>)}
           

        </SimpleGrid>
    </Box>
    </>
)

}


export default Gallery