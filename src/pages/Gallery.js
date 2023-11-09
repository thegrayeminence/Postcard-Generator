
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
    width='100vw'
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
                letterSpacing={'.5rem'}
                fontSize='6xl'
                fontFamily={'avenir'}
                fontWeight='extrabold'
                //filter='auto'
                        backdropFilter='auto'
                        filter='drop-shadow(0.035em 0.050em .1rem #00f)'
                        transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                        _hover={{
                            transform:'scale(1.08)',
                          
                    }}

                        
            >GALLERY:</Heading>

        <SimpleGrid  align={'space-between'} justify='center' pt={'2rem'} ml='25%' width='50%'  columns={1} spacing='2rem'>
         
            {cards.map((card)=> <GalleryCard key={card.id} card={card}/>)}
           

        </SimpleGrid>
    </Box>
    </>
)

}


export default Gallery