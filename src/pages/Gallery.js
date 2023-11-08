
import { Heading, SimpleGrid, Text, Card, Spacer, Stack, Flex, Box } from "@chakra-ui/react"
import GalleryCard from "../components/GalleryCard"
import { useOutletContext } from "react-router-dom"

const Gallery = () => {

   const {cards} = useOutletContext();
    console.log(cards)
return(
    <>
    <Box py={'1rem'} minW='100vw'>
        <Heading fontSize={'3xl'} textAlign={'center'}>POSTCARD GALLERY:</Heading>

        <SimpleGrid justify='center' pt={'2rem'} ml='10%' width='80%' columns={2} spacing='2.5rem'>
         
            {cards.map((card)=> <GalleryCard key={card.id} card={card}/>)}
           

        </SimpleGrid>
    </Box>
    </>
)

}


export default Gallery